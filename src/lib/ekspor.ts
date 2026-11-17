import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  LABEL_STATUS, daftarKunci,
  type Angkatan, type Kelompok, type Platform, type Soal, type Subtes, type Tahapan, type Tes,
} from './skema';
import {
  angkaAngkatan, angkaId, angkaPlatform, angkaTahapan, judulAngkatan, jumlahContoh, labelTahapan,
  metaSubtes, ringkasAngka, tautanAngkatan, tautanSubtes, totalAngka,
} from './data';
import { PEMBARUAN } from './pembaruan';
import { buatZip, type BerkasZip } from './zip';

/**
 * Ekspor satu platform jadi arsip ZIP untuk bahan knowledge AI.
 *
 * Isinya tiga lapis untuk dua jenis pemakai:
 *   - Markdown per level (tes, angkatan, subtes), tiap berkas dengan frontmatter
 *     YAML berisi jalurnya. Untuk RAG dan unggahan ke proyek AI: tiap potongan
 *     tetap tahu ia milik platform, tes, angkatan, dan tahapan mana.
 *   - `<slug>-lengkap.md`: seluruh isi dalam satu berkas, untuk alat yang
 *     membatasi jumlah berkas unggahan.
 *   - `data.json`: data mentah persis bentuk skema, untuk diolah jadi JSONL,
 *     pasangan tanya-jawab, atau dataset fine-tuning.
 * Gambar dan audio yang DIRUJUK ikut di `aset/`, dengan jalur relatif dari
 * tiap berkas Markdown.
 *
 * Teks soal di data memuat penanda ⟦gambar:…⟧ dan rumus \( … \). Di Markdown
 * penanda jadi ![gambar](…) dan rumus jadi $…$ atau $$…$$ (rumus satu baris
 * sendiri). Di data.json keduanya dibiarkan apa adanya.
 */

const POLA_GAMBAR = /⟦gambar:([^⟧]+)⟧/g;
const POLA_RUMUS = /\\\(([\s\S]+?)\\\)/g;
const JALUR_ASET = /^(gambar|audio)\/[A-Za-z0-9._/-]+$/;

const LABEL_TIPE: Record<string, string> = {
  pg: 'Pilihan ganda',
  pg_kompleks: 'PG kompleks (beberapa jawaban benar)',
  pg_kategori: 'PG kategori (satu kategori per pernyataan)',
  isian_singkat: 'Isian singkat',
  benar_salah: 'Benar / Salah',
  skala: 'Berskala (tiap opsi diberi skor)',
  uraian: 'Uraian / tugas bebas',
};

const LABEL_REVIEW: Record<string, string> = {
  draft: 'draft (belum ditelaah tim akademik)',
  direview: 'direview (sudah diperiksa, belum final)',
  final: 'final',
};

const LABEL_PRODUKSI: Record<string, string> = {
  belum_mulai: 'Belum mulai',
  berjalan: 'Berjalan',
  selesai: 'Selesai',
};

const LABEL_INFO: Record<string, string> = {
  pendahuluan: 'Pendahuluan',
  persyaratan: 'Persyaratan',
  jadwal: 'Jadwal',
  penilaian: 'Penilaian',
  lainnya: 'Lainnya',
};

// ─── Pembantu teks ───────────────────────────────────────────────────────

function slug(s: string): string {
  const hasil = s
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .slice(0, 60)
    .replace(/-+$/, '');
  return hasil || 'x';
}

const dua = (n: number) => String(n).padStart(2, '0');

/** Judul Markdown; di atas level 6 jadi paragraf tebal karena Markdown tak punya h7. */
const judul = (level: number, teks: string) =>
  level <= 6 ? `${'#'.repeat(level)} ${teks}` : `**${teks}**`;

/** Sel tabel Markdown: tanpa | dan tanpa baris baru. */
const sel = (v: string | number | undefined) =>
  v === undefined || v === '' ? '-' : String(v).replace(/\|/g, '\\|').replace(/\s*\n\s*/g, '<br>');

function tabel(kepala: string[], baris: (string | number | undefined)[][]): string {
  return [
    `| ${kepala.join(' | ')} |`,
    `| ${kepala.map(() => '---').join(' | ')} |`,
    ...baris.map((b) => `| ${b.map(sel).join(' | ')} |`),
  ].join('\n');
}

/** Frontmatter YAML. Nilai ditulis sebagai string JSON, yang juga YAML sah. */
function frontmatter(data: Record<string, string | number | undefined>): string {
  const baris = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `${k}: ${typeof v === 'number' ? v : JSON.stringify(v)}`);
  return `---\n${baris.join('\n')}\n---\n\n`;
}

/** Bagian kosong (false, null, 0, undefined, atau teks kosong) dilewati. */
const gabung = (bagian: (string | false | null | undefined | 0)[]) =>
  bagian.filter((b): b is string => !!b && b.trim() !== '').join('\n\n');

/**
 * Konteks satu berkas Markdown: `akar` adalah awalan relatif menuju akar
 * arsip ("../../" untuk berkas dua folder di bawahnya), dan `aset` mengumpulkan
 * jalur gambar atau audio yang dirujuk supaya hanya itu yang ikut dikemas.
 */
interface Konteks {
  akar: string;
  aset: Set<string>;
}

function keAset(jalur: string, k: Konteks): string | null {
  const j = jalur.trim();
  if (!JALUR_ASET.test(j)) return null;
  k.aset.add(j);
  return `${k.akar}aset/${j}`;
}

/** Teks data (soal, info, penilaian) jadi Markdown: penanda gambar dan rumus diubah. */
function teks(isi: string, k: Konteks): string {
  return isi
    .replace(POLA_GAMBAR, (asli, jalur: string) => {
      const ke = keAset(jalur, k);
      if (ke) return `![gambar](${ke})`;
      return /^https:\/\/\S+$/.test(jalur.trim()) ? `![gambar](${jalur.trim()})` : asli;
    })
    .replace(POLA_RUMUS, (_asli, latex: string, i: number, semua: string) => {
      const blok =
        /(^|\n)[ \t]*$/.test(semua.slice(0, i)) && /^[ \t]*(\n|$)/.test(semua.slice(i + _asli.length));
      return blok ? `$$${latex}$$` : `$${latex}$`;
    })
    .trim();
}

/** Baris kedua dan seterusnya diberi indentasi supaya tetap di dalam butir daftar. */
const dalamButir = (s: string) => s.replace(/\n/g, '\n   ');

// ─── Soal ────────────────────────────────────────────────────────────────

function kunciSoal(soal: Soal, k: Konteks): string {
  if (soal.tanpaKunci) {
    return '**Kunci:** tidak ada. Butir ini memang tidak punya jawaban benar; cara penilaiannya ada di pembahasan.';
  }
  const kunci = daftarKunci(soal);
  if (!kunci.length) return '**Kunci:** belum diisi.';
  const opsi = soal.opsi ?? [];
  switch (soal.tipe) {
    case 'pg_kategori':
      return (
        `**Kunci (kategori per pernyataan${soal.kategori ? `: ${soal.kategori.join(' / ')}` : ''}):**\n` +
        kunci.map((nilai, i) => `- ${opsi[i]?.label ?? i + 1}: ${nilai}`).join('\n')
      );
    case 'pg_kompleks':
      return `**Kunci (semua jawaban benar):** ${kunci.join(', ')}`;
    case 'skala':
      return `**Opsi berskor tertinggi:** ${kunci.join(', ')}`;
    case 'isian_singkat':
    case 'uraian':
      return `**Jawaban:** ${teks(kunci.join(', '), k)}`;
    default:
      return `**Kunci:** ${kunci.join(', ')}`;
  }
}

function mdSoal(soal: Soal, level: number, k: Konteks): string {
  const meta = [
    `Tipe: ${LABEL_TIPE[soal.tipe] ?? soal.tipe}`,
    soal.tingkat && `Tingkat: ${soal.tingkat}`,
    soal.status && `Status review: ${LABEL_REVIEW[soal.status] ?? soal.status}`,
    soal.lesson && `Lesson: ${soal.lesson}`,
  ].filter(Boolean);
  const audio = soal.audio ? keAset(soal.audio, k) : null;
  const gambar = soal.gambar ? keAset(soal.gambar, k) : null;
  return gabung([
    judul(level, `Soal ${soal.nomor}`),
    meta.join(' · '),
    audio && `Audio: [${path.posix.basename(soal.audio!)}](${audio}) (transkrip ada di pembahasan)`,
    gambar && `![gambar](${gambar})`,
    teks(soal.pertanyaan, k),
    soal.opsi?.length && soal.opsi.map((o) => `- **${o.label}.** ${dalamButir(teks(o.teks, k))}`).join('\n'),
    kunciSoal(soal, k),
    soal.pembahasan.trim() ? `**Pembahasan:**\n\n${teks(soal.pembahasan, k)}` : '**Pembahasan:** belum ada.',
  ]);
}

function mdKelompok(kel: Kelompok, level: number, k: Konteks): string {
  const st = kel.stimulus;
  const adaStimulus = !!(st && (st.judul || st.isi || st.gambar));
  if (!adaStimulus) return kel.soal.map((s) => mdSoal(s, level, k)).join('\n\n');

  const nomor = kel.soal.map((s) => s.nomor);
  const rentang = nomor.length > 1 ? `soal ${nomor.join(', ')}` : `soal ${nomor[0] ?? ''}`;
  const gambar = st!.gambar ? keAset(st!.gambar, k) : null;
  return gabung([
    judul(level, `Stimulus${st!.judul ? `: ${st!.judul}` : ''} (${rentang})`),
    gambar && `![gambar](${gambar})`,
    st!.isi && teks(st!.isi, k),
    ...kel.soal.map((s) => mdSoal(s, level + 1, k)),
  ]);
}

// ─── Subtes ──────────────────────────────────────────────────────────────

interface JalurSubtesEkspor {
  platform: Platform;
  tes: Tes;
  angkatan: Angkatan;
  tahapan: Tahapan;
  subtes: Subtes;
}

function mdSubtes(j: JalurSubtesEkspor, level: number, k: Konteks): string {
  const { platform, tes, angkatan, tahapan, subtes: s } = j;
  const satuSesi = !!tahapan.waktuBersama;
  const waktu =
    s.waktuMenit === undefined
      ? undefined
      : satuSesi
        ? `${angkaId(s.waktuMenit)} menit untuk satu sesi bersama subtes lain di tahapan ini (tidak dijumlahkan)`
        : `${angkaId(s.waktuMenit)} menit`;

  const spesifikasi = [
    `- Jumlah soal: ${s.jumlahSoal ?? 'belum diketahui'}`,
    `- Waktu: ${waktu ?? 'belum diketahui'}`,
    tahapan.mode && `- Mode tahapan: ${tahapan.mode}`,
    `- Status tahapan: ${LABEL_STATUS[tahapan.status].teks}. ${LABEL_STATUS[tahapan.status].boleh}`,
    s.bankSoal === false && '- Tidak punya butir soal (tes proyektif, lembar kerja, uraian bebas, fisik, atau aplikasi terpisah).',
  ].filter(Boolean).join('\n');

  const mapping = s.mapping?.length
    ? tabel(
        ['Tipe', 'Paket', 'Soal per paket', 'Dibutuhkan', 'Tersedia', 'PIC', 'Status', 'Catatan'],
        s.mapping.map((m) => [
          m.tipe, m.paket, m.soalPerPaket, m.dibutuhkan,
          m.tersedia ?? 'belum dihitung', m.pic, m.status && LABEL_PRODUKSI[m.status], m.catatan,
        ]),
      )
    : '';

  const contoh = s.contoh ?? [];
  const n = jumlahContoh(s);

  return gabung([
    judul(level, s.nama),
    `${platform.nama} › ${judulAngkatan(tes, angkatan)} › ${labelTahapan(angkatan, tahapan)}`,
    judul(level + 1, 'Spesifikasi'),
    spesifikasi,
    s.formatKetentuan && gabung([judul(level + 1, 'Format dan ketentuan'), teks(s.formatKetentuan, k)]),
    s.penilaian && gabung([judul(level + 1, 'Penilaian'), teks(s.penilaian, k)]),
    s.catatan && gabung([judul(level + 1, 'Catatan'), teks(s.catatan, k)]),
    s.materi?.length &&
      gabung([
        judul(level + 1, 'Materi'),
        s.materi.map((m) => `- ${m.nama}${m.catatan ? `: ${dalamButir(teks(m.catatan, k))}` : ''}`).join('\n'),
      ]),
    mapping && gabung([
      judul(level + 1, 'Mapping produksi konten'),
      'Kebutuhan soal tryout dan latihan soal (latsol) yang diproduksi tim. "Tersedia" kosong berarti belum dihitung, bukan nol.',
      mapping,
    ]),
    n > 0 && gabung([
      judul(level + 1, `Contoh soal (${n})`),
      ...contoh.map((kel) => mdKelompok(kel, level + 2, k)),
    ]),
  ]);
}

// ─── Angkatan ────────────────────────────────────────────────────────────

/** Nama folder tahapan dan berkas subtes, relatif terhadap folder angkatan. */
const folderTahapan = (a: Angkatan, t: Tahapan, i: number) =>
  `tahap-${(a.nomorAwal ?? 1) + i}-${slug(t.nama)}`;
const berkasSubtes = (s: Subtes, i: number) => `${dua(i + 1)}-${slug(s.kode)}.md`;

function mdAngkatan(
  platform: Platform,
  tes: Tes,
  angkatan: Angkatan,
  level: number,
  k: Konteks,
  /** Berkas per angkatan: tautan ke berkas subtes. Berkas lengkap: subtes ditulis langsung. */
  sematkanSubtes: boolean,
): string {
  const st = LABEL_STATUS[angkatan.status];
  const total = totalAngka(angkaAngkatan(angkatan));

  const tahapan = angkatan.tahapan.map((t, i) => {
    const a = angkaTahapan(t);
    const isi = sematkanSubtes
      ? t.subtes.map((s) => mdSubtes({ platform, tes, angkatan, tahapan: t, subtes: s }, level + 3, k))
      : [
          t.subtes
            .map((s, si) => {
              const meta = [metaSubtes(s, t.waktuBersama), jumlahContoh(s) ? `${jumlahContoh(s)} contoh soal` : '']
                .filter(Boolean)
                .join(' · ');
              return `- [${s.nama}](${folderTahapan(angkatan, t, i)}/${berkasSubtes(s, si)})${meta ? `: ${meta}` : ''}`;
            })
            .join('\n'),
        ];
    return gabung([
      judul(level + 2, labelTahapan(angkatan, t)),
      [
        `Status: ${LABEL_STATUS[t.status].teks}`,
        t.mode && `Mode: ${t.mode}`,
        t.subtes.length ? ringkasAngka(a) : 'Belum ada subtes',
      ].filter(Boolean).join(' · '),
      t.deskripsi && teks(t.deskripsi, k),
      ...isi,
    ]);
  });

  return gabung([
    judul(level, judulAngkatan(tes, angkatan)),
    [
      `- Platform: ${platform.nama}`,
      `- Tes: ${tes.nama}${tes.instansi ? ` (${tes.instansi})` : ''}`,
      `- Angkatan: ${angkatan.nama}, tahun ${angkatan.tahun}`,
      `- Status: ${st.teks}. ${st.arti} ${st.boleh}`,
      total && `- Total: ${total}`,
      angkatan.diperbarui && `- Diperbarui: ${angkatan.diperbarui}`,
      angkatan.pic && `- PIC: ${angkatan.pic}`,
    ].filter(Boolean).join('\n'),
    angkatan.ringkasan && teks(angkatan.ringkasan, k),
    angkatan.tahapan.length > 0 && gabung([
      judul(level + 1, 'Susunan tahapan'),
      tabel(
        ['Tahap', 'Nama', 'Mode', 'Status', 'Ringkasan'],
        angkatan.tahapan.map((t, i) => [
          (angkatan.nomorAwal ?? 1) + i, t.nama, t.mode, LABEL_STATUS[t.status].teks,
          t.subtes.length ? ringkasAngka(angkaTahapan(t)) : 'Belum ada subtes',
        ]),
      ),
      ...tahapan,
    ]),
    angkatan.info?.length && gabung([
      judul(level + 1, 'Informasi seleksi'),
      ...angkatan.info.map((inf) =>
        gabung([judul(level + 2, `${inf.judul} (${LABEL_INFO[inf.tipe] ?? inf.tipe})`), teks(inf.isi, k)]),
      ),
    ]),
    angkatan.sumber?.length && gabung([
      judul(level + 1, 'Sumber'),
      angkatan.sumber
        .map((s) =>
          `- **${s.judul}** (${s.jenis}, keandalan ${s.keandalan})` +
          (s.url ? `: ${s.url}` : '') +
          (s.tanggalAkses ? `, diakses ${s.tanggalAkses}` : '') +
          (s.catatan ? `. ${s.catatan}` : ''),
        )
        .join('\n'),
    ]),
  ]);
}

// ─── Platform ────────────────────────────────────────────────────────────

function panduanStatus(level: number): string {
  return gabung([
    judul(level, 'Cara membaca status'),
    'Setiap angkatan dan tahapan punya status. Status ini menentukan apa yang boleh disampaikan sebagai kepastian:',
    Object.values(LABEL_STATUS).map((s) => `- **${s.teks}**: ${s.arti} ${s.boleh}`).join('\n'),
    'Status review contoh soal:',
    Object.values(LABEL_REVIEW).map((s) => `- ${s}`).join('\n'),
    'Angka yang belum diketahui ditulis "belum diketahui" atau dikosongkan, dan tidak sama dengan nol.',
  ]);
}

export interface HasilEkspor {
  zip: Buffer;
  namaBerkas: string;
}

export async function eksporPlatform(platform: Platform): Promise<HasilEkspor> {
  const versi = PEMBARUAN[0]?.versi ?? '';
  const sekarang = new Date();
  const tanggal = sekarang.toLocaleDateString('sv-SE', { timeZone: 'Asia/Jakarta' });
  const akar = slug(platform.slug);
  const aset = new Set<string>();
  const berkas: BerkasZip[] = [];
  const tulis = (jalur: string, isi: string) => berkas.push({ jalur: `${akar}/${jalur}`, isi: isi.trimEnd() + '\n' });

  const umum = { platform: platform.nama, versi_product_knowledge: versi, diekspor: tanggal };
  const daftarIsi: string[] = [];

  for (const tes of platform.tes) {
    const folderTes = slug(tes.kode);
    daftarIsi.push(`- [${tes.nama}](${folderTes}/README.md)`);

    // Berkas tes: deskripsi dan daftar angkatan.
    tulis(
      `${folderTes}/README.md`,
      frontmatter({ ...umum, level: 'tes', tes: tes.nama }) +
        gabung([
          judul(1, tes.nama),
          [
            `- Platform: ${platform.nama}`,
            tes.instansi && `- Instansi: ${tes.instansi}`,
            tes.kategori && `- Kategori: ${tes.kategori}`,
          ].filter(Boolean).join('\n'),
          tes.deskripsi && teks(tes.deskripsi, { akar: '../', aset }),
          judul(2, 'Angkatan'),
          tes.angkatan
            .map((a) => `- [${judulAngkatan(tes, a)}](${slug(a.kode)}/angkatan.md): ${LABEL_STATUS[a.status].teks}`)
            .join('\n'),
        ]),
    );

    for (const angkatan of tes.angkatan) {
      const folderAngkatan = `${folderTes}/${slug(angkatan.kode)}`;
      const total = totalAngka(angkaAngkatan(angkatan));
      daftarIsi.push(
        `  - [${judulAngkatan(tes, angkatan)}](${folderAngkatan}/angkatan.md): ${LABEL_STATUS[angkatan.status].teks}` +
          (total ? `, ${total}` : ''),
      );

      tulis(
        `${folderAngkatan}/angkatan.md`,
        frontmatter({
          ...umum,
          level: 'angkatan',
          tes: tes.nama,
          angkatan: angkatan.nama,
          tahun: angkatan.tahun,
          status: LABEL_STATUS[angkatan.status].teks,
          halaman: tautanAngkatan({ platform, tes, angkatan }),
        }) + mdAngkatan(platform, tes, angkatan, 1, { akar: '../../', aset }, false),
      );

      angkatan.tahapan.forEach((tahapan, ti) => {
        const folder = `${folderAngkatan}/${folderTahapan(angkatan, tahapan, ti)}`;
        if (tahapan.subtes.length) daftarIsi.push(`    - ${labelTahapan(angkatan, tahapan)}`);
        tahapan.subtes.forEach((subtes, si) => {
          const jalur = `${folder}/${berkasSubtes(subtes, si)}`;
          const j = { platform, tes, angkatan, tahapan, subtes };
          const meta = [metaSubtes(subtes, tahapan.waktuBersama), jumlahContoh(subtes) ? `${jumlahContoh(subtes)} contoh soal` : '']
            .filter(Boolean)
            .join(' · ');
          daftarIsi.push(`      - [${subtes.nama}](${jalur})${meta ? `: ${meta}` : ''}`);
          tulis(
            jalur,
            frontmatter({
              ...umum,
              level: 'subtes',
              tes: tes.nama,
              angkatan: angkatan.nama,
              tahun: angkatan.tahun,
              tahapan: labelTahapan(angkatan, tahapan),
              subtes: subtes.nama,
              status_tahapan: LABEL_STATUS[tahapan.status].teks,
              jumlah_contoh_soal: jumlahContoh(subtes),
              halaman: tautanSubtes(j),
            }) + mdSubtes(j, 1, { akar: '../../../', aset }),
          );
        });
      });
    }
  }

  // Satu berkas berisi semuanya.
  const kLengkap: Konteks = { akar: '', aset };
  const lengkap = gabung([
    judul(1, `${platform.nama}: Product Knowledge`),
    platform.deskripsi,
    `Diekspor dari Product Knowledge v${versi} pada ${tanggal}.`,
    panduanStatus(2),
    ...platform.tes.flatMap((tes) =>
      tes.angkatan.map((angkatan) =>
        gabung([
          mdAngkatan(platform, tes, angkatan, 2, kLengkap, true),
        ]),
      ),
    ),
  ]);
  const namaLengkap = `${akar}-lengkap.md`;
  tulis(namaLengkap, frontmatter({ ...umum, level: 'platform-lengkap' }) + lengkap);

  // data.json: bentuk skema apa adanya.
  tulis(
    'data.json',
    JSON.stringify(
      {
        versi_product_knowledge: versi,
        diekspor: tanggal,
        catatan:
          'Bentuk data mengikuti src/lib/skema.ts. Penanda ⟦gambar:gambar/…⟧ di teks serta field gambar dan ' +
          'audio menunjuk ke aset/<jalur> di arsip ini. Rumus LaTeX ditulis di antara \\( dan \\). ' +
          'Status: terkonfirmasi = boleh disampaikan; indikasi = belum resmi, jangan disampaikan sebagai ' +
          'kepastian; coming_soon = belum ada data.',
        platform,
      },
      null,
      2,
    ),
  );

  // Aset yang dirujuk. Yang hilang di disk dilaporkan di README, bukan menggagalkan unduhan
  // (halaman Cek Data sudah menandai rujukan yang rusak).
  const hilang: string[] = [];
  for (const jalur of [...aset].sort()) {
    try {
      const isi = await readFile(path.join(process.cwd(), 'public', jalur));
      berkas.push({ jalur: `${akar}/aset/${jalur}`, isi });
    } catch {
      hilang.push(jalur);
    }
  }

  const angka = angkaPlatform(platform);
  const readme =
    frontmatter({ ...umum, level: 'platform' }) +
    gabung([
      judul(1, `${platform.nama}: Product Knowledge`),
      platform.deskripsi,
      `Diekspor dari Product Knowledge v${versi} pada ${tanggal}. Isi: ${angka.tes} tes, ${angka.subtes} subtes, ${angka.contoh} contoh soal.`,
      judul(2, 'Isi arsip'),
      [
        '- `README.md`: berkas ini, daftar isi dan cara membaca status.',
        `- \`${namaLengkap}\`: seluruh isi platform dalam satu berkas Markdown, untuk diunggah sekaligus ke alat AI.`,
        '- `<tes>/README.md`: deskripsi tes dan daftar angkatannya.',
        '- `<tes>/<angkatan>/angkatan.md`: ringkasan angkatan, susunan tahapan, informasi seleksi (persyaratan, jadwal, penilaian), dan sumber.',
        '- `<tes>/<angkatan>/tahap-N-…/NN-<subtes>.md`: satu subtes: spesifikasi, format, penilaian, materi, mapping produksi, dan contoh soal lengkap dengan kunci dan pembahasan.',
        '- `data.json`: seluruh data dalam bentuk terstruktur (JSON), untuk diolah jadi dataset.',
        '- `aset/`: gambar dan audio yang dirujuk soal, dengan jalur relatif dari tiap berkas Markdown.',
      ].join('\n'),
      'Tiap berkas Markdown diawali frontmatter YAML (platform, tes, angkatan, tahapan, subtes, status) supaya tetap jelas asalnya ketika dipotong-potong. Rumus ditulis LaTeX di antara `$…$` atau `$$…$$`.',
      panduanStatus(2),
      judul(2, 'Daftar isi'),
      daftarIsi.join('\n'),
      hilang.length > 0 &&
        gabung([
          judul(2, 'Aset yang tidak ditemukan'),
          'Dirujuk di data tetapi berkasnya tidak ada saat diekspor:',
          hilang.map((h) => `- ${h}`).join('\n'),
        ]),
    ]);
  berkas.unshift({ jalur: `${akar}/README.md`, isi: readme.trimEnd() + '\n' });

  const namaBerkas = `Product Knowledge ${platform.nama} v${versi} ${tanggal}.zip`;
  return { zip: buatZip(berkas, sekarang), namaBerkas };
}
