/**
 * Mengubah satu angkatan di spreadsheet setoran menjadi file data TypeScript.
 *
 * Excel dipakai sebagai FORMAT SETORAN, bukan sumber kebenaran. Orang non-teknis
 * mengisi sheet, skrip ini menghasilkan file TS, lalu diff-nya direview sebelum
 * di-commit. Yang tayang tetap yang lewat review.
 *
 * Pemakaian:
 *   node skrip/impor-xlsx.mjs "<file.xlsx>" <ID_ANGKATAN> <file-keluaran.ts>
 *
 * Contoh:
 *   node skrip/impor-xlsx.mjs "Template Spreadsheet Master - Product Knowledge.xlsx" \
 *     JADIPCPM.PCPMBI.41 data/jadipcpm/pcpm-bi-41.ts
 */
import ExcelJS from 'exceljs';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const [, , fileXlsx, idAngkatan, fileKeluar] = process.argv;
if (!fileXlsx || !idAngkatan || !fileKeluar) {
  console.error('pemakaian: node skrip/impor-xlsx.mjs <file.xlsx> <ID_ANGKATAN> <keluaran.ts>');
  process.exit(1);
}

// ── Pembacaan sheet ──────────────────────────────────────────────────────

function nilaiSel(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (typeof v === 'object') {
    if ('result' in v) return nilaiSel(v.result);
    if ('text' in v) return nilaiSel(v.text);
    if ('richText' in v && Array.isArray(v.richText)) {
      return v.richText.map((p) => p.text ?? '').join('');
    }
    if ('hyperlink' in v) return String(v.hyperlink);
  }
  return String(v);
}

function bacaTab(wb, nama) {
  const ws = wb.getWorksheet(nama);
  if (!ws) return [];
  const header = [];
  ws.getRow(1).eachCell({ includeEmpty: true }, (cell, kolom) => {
    header[kolom - 1] = nilaiSel(cell.value).trim().toLowerCase();
  });
  const baris = [];
  for (let r = 2; r <= ws.rowCount; r++) {
    const row = ws.getRow(r);
    const obj = {};
    let isi = false;
    header.forEach((nama, i) => {
      if (!nama) return;
      const v = nilaiSel(row.getCell(i + 1).value);
      obj[nama] = v;
      if (v) isi = true;
    });
    if (isi && obj.id) baris.push(obj);
  }
  return baris;
}

// ── Penulisan literal TypeScript ─────────────────────────────────────────

/** Selalu backtick supaya teks multi-baris apa adanya, bukan deret \n. */
function teksTS(s) {
  return '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';
}

function angka(v) {
  if (v === undefined || v === null || v === '') return undefined;
  const n = Number(String(v).replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : undefined;
}

const bersih = (v) => String(v ?? '').trim();

/** Objek ditulis dengan indentasi, field kosong dibuang. */
function objekTS(obj, indent) {
  const sp = ' '.repeat(indent);
  const dalam = ' '.repeat(indent + 2);
  const isi = Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0))
    .map(([k, v]) => `${dalam}${k}: ${v},`);
  return isi.length ? `{\n${isi.join('\n')}\n${sp}}` : '{}';
}

const daftarTS = (item, indent) => {
  if (item.length === 0) return '[]';
  const sp = ' '.repeat(indent);
  const dalam = ' '.repeat(indent + 2);
  return `[\n${item.map((x) => dalam + x).join(',\n')},\n${sp}]`;
};

// ── Perakitan ────────────────────────────────────────────────────────────

const wb = new ExcelJS.Workbook();
await wb.xlsx.readFile(fileXlsx);

const T = {
  platform: bacaTab(wb, 'platform'),
  tes: bacaTab(wb, 'tes'),
  angkatan: bacaTab(wb, 'angkatan'),
  info: bacaTab(wb, 'info_seleksi'),
  tahapan: bacaTab(wb, 'tahapan'),
  subtes: bacaTab(wb, 'subtes'),
  materi: bacaTab(wb, 'materi'),
  mapping: bacaTab(wb, 'mapping'),
  stimulus: bacaTab(wb, 'stimulus'),
  soal: bacaTab(wb, 'soal'),
  sumber: bacaTab(wb, 'sumber'),
};

const angkatan = T.angkatan.find((a) => a.id === idAngkatan);
if (!angkatan) {
  console.error(`Angkatan "${idAngkatan}" tidak ada di tab angkatan.`);
  console.error('Yang tersedia:', T.angkatan.map((a) => a.id).join(', ') || '(kosong)');
  process.exit(1);
}
const tes = T.tes.find((t) => t.id === angkatan.tes_id);
const platform = tes && T.platform.find((p) => p.id === tes.platform_id);
if (!tes || !platform) {
  console.error('Relasi tes atau platform untuk angkatan ini tidak ditemukan.');
  process.exit(1);
}

/** Bagian terakhir ID bertitik, dijadikan kode URL. */
const kode = (id) => bersih(id).split('.').pop().toLowerCase();

const HURUF = ['a', 'b', 'c', 'd', 'e'];

function soalTS(s, indent) {
  const opsi = HURUF.map((h) => ({ label: h.toUpperCase(), teks: bersih(s[`opsi_${h}`]) }))
    .filter((o) => o.teks);
  return objekTS(
    {
      nomor: angka(s.nomor) ?? 0,
      tipe: teksTS(bersih(s.tipe) || 'pg').replace(/`/g, "'"),
      pertanyaan: teksTS(bersih(s.pertanyaan)),
      opsi: opsi.length
        ? daftarTS(
            opsi.map((o) => `{ label: '${o.label}', teks: ${teksTS(o.teks)} }`),
            indent + 2,
          )
        : undefined,
      kunci: teksTS(bersih(s.kunci)),
      pembahasan: teksTS(bersih(s.pembahasan)),
      gambar: bersih(s.gambar_url) ? teksTS(bersih(s.gambar_url)) : undefined,
      tingkat: bersih(s.tingkat) ? `'${bersih(s.tingkat)}'` : undefined,
      status: bersih(s.status_review) ? `'${bersih(s.status_review)}'` : undefined,
    },
    indent,
  );
}

function kelompokSubtes(subtesId) {
  const soalSubtes = T.soal
    .filter((s) => s.subtes_id === subtesId)
    .sort((a, b) => (angka(a.nomor) ?? 0) - (angka(b.nomor) ?? 0));
  if (soalSubtes.length === 0) return [];

  const kelompok = [];
  const sudah = new Set();

  // Soal yang berbagi stimulus dikumpulkan jadi satu kelompok, urut sesuai
  // kemunculan stimulus pertamanya.
  for (const s of soalSubtes) {
    if (sudah.has(s.id)) continue;
    const stimId = bersih(s.stimulus_id);
    if (!stimId) {
      sudah.add(s.id);
      kelompok.push({ stim: null, soal: [s] });
      continue;
    }
    const sekelompok = soalSubtes.filter((x) => bersih(x.stimulus_id) === stimId);
    sekelompok.forEach((x) => sudah.add(x.id));
    kelompok.push({ stim: T.stimulus.find((x) => x.id === stimId) ?? null, soal: sekelompok });
  }
  return kelompok;
}

const daftarTahapan = T.tahapan
  .filter((t) => t.angkatan_id === angkatan.id)
  .sort((a, b) => (angka(a.urutan) ?? 0) - (angka(b.urutan) ?? 0))
  .map((t) => {
    const subtesTS = T.subtes
      .filter((s) => s.tahapan_id === t.id)
      .sort((a, b) => (angka(a.urutan) ?? 0) - (angka(b.urutan) ?? 0))
      .map((s) => {
        const materi = T.materi
          .filter((m) => m.subtes_id === s.id)
          .sort((a, b) => (angka(a.urutan) ?? 0) - (angka(b.urutan) ?? 0))
          .map((m) =>
            objekTS(
              {
                nama: teksTS(bersih(m.materi)),
                catatan: bersih(m.catatan) || bersih(m.sub_materi)
                  ? teksTS([bersih(m.sub_materi), bersih(m.catatan)].filter(Boolean).join(' - '))
                  : undefined,
              },
              10,
            ),
          );

        const mapping = T.mapping
          .filter((m) => m.subtes_id === s.id)
          .map((m) =>
            objekTS(
              {
                tipe: `'${bersih(m.tipe_konten) || 'tryout'}'`,
                paket: angka(m.jumlah_paket),
                soalPerPaket: angka(m.soal_per_paket),
                dibutuhkan: angka(m.dibutuhkan) ?? 0,
                tersedia: angka(m.tersedia),
                pic: bersih(m.pic) ? teksTS(bersih(m.pic)) : undefined,
                status: bersih(m.status) ? `'${bersih(m.status)}'` : undefined,
                catatan: bersih(m.catatan) ? teksTS(bersih(m.catatan)) : undefined,
              },
              10,
            ),
          );

        const contoh = kelompokSubtes(s.id).map((k) =>
          objekTS(
            {
              stimulus: k.stim
                ? objekTS(
                    {
                      judul: bersih(k.stim.judul) ? teksTS(bersih(k.stim.judul)) : undefined,
                      isi: bersih(k.stim.isi) ? teksTS(bersih(k.stim.isi)) : undefined,
                      gambar: bersih(k.stim.gambar_url)
                        ? teksTS(bersih(k.stim.gambar_url))
                        : undefined,
                    },
                    12,
                  )
                : undefined,
              soal: daftarTS(k.soal.map((x) => soalTS(x, 14)), 12),
            },
            10,
          ),
        );

        return objekTS(
          {
            kode: `'${kode(s.id)}'`,
            nama: teksTS(bersih(s.nama)),
            jumlahSoal: angka(s.jumlah_soal),
            waktuMenit: angka(s.waktu_menit),
            formatKetentuan: bersih(s.format_ketentuan)
              ? teksTS(bersih(s.format_ketentuan))
              : undefined,
            penilaian: bersih(s.penilaian) ? teksTS(bersih(s.penilaian)) : undefined,
            catatan: bersih(s.catatan) ? teksTS(bersih(s.catatan)) : undefined,
            materi: materi.length ? daftarTS(materi, 8) : undefined,
            mapping: mapping.length ? daftarTS(mapping, 8) : undefined,
            contoh: contoh.length ? daftarTS(contoh, 8) : undefined,
          },
          6,
        );
      });

    return {
      kode: kode(t.id),
      nama: bersih(t.nama),
      ts: objekTS(
        {
          kode: `'${kode(t.id)}'`,
          nama: teksTS(bersih(t.nama)),
          mode: bersih(t.mode) ? `'${bersih(t.mode)}'` : undefined,
          deskripsi: bersih(t.deskripsi) ? teksTS(bersih(t.deskripsi)) : undefined,
          status: `'${bersih(t.status_data) || 'terkonfirmasi'}'`,
          subtes: daftarTS(subtesTS, 2),
        },
        0,
      ),
    };
  });

const infoTS = T.info
  .filter((i) => i.angkatan_id === angkatan.id)
  .sort((a, b) => (angka(a.urutan) ?? 0) - (angka(b.urutan) ?? 0))
  .map((i) =>
    objekTS(
      {
        tipe: `'${bersih(i.tipe) || 'lainnya'}'`,
        judul: teksTS(bersih(i.judul)),
        isi: teksTS(bersih(i.isi)),
      },
      4,
    ),
  );

const sumberTS = T.sumber
  .filter((s) => s.angkatan_id === angkatan.id)
  .map((s) =>
    objekTS(
      {
        jenis: `'${bersih(s.jenis) || 'internal'}'`,
        judul: teksTS(bersih(s.judul)),
        url: bersih(s.url) ? teksTS(bersih(s.url)) : undefined,
        tanggalAkses: bersih(s.tanggal_akses) ? teksTS(bersih(s.tanggal_akses)) : undefined,
        keandalan: `'${bersih(s.keandalan) || 'asumsi'}'`,
        catatan: bersih(s.catatan) ? teksTS(bersih(s.catatan)) : undefined,
      },
      4,
    ),
  );

// ── Keluaran: satu folder angkatan, satu file per tahapan ───────────────

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);

const varTahapan = (k) => 'tahap' + k.replace(/[^a-z0-9]/gi, '').replace(/^./, (c) => c.toUpperCase());

await mkdir(fileKeluar, { recursive: true });

for (const t of daftarTahapan) {
  const nama = `${t.kode}-${slug(t.nama.replace(/^Tahap\s*\d+\s*:?\s*/i, ''))}.ts`;
  const isi = `import type { Tahapan } from '@/lib/skema';

/** ${t.nama} */
export const ${varTahapan(t.kode)}: Tahapan = ${t.ts};
`;
  await writeFile(path.join(fileKeluar, nama), isi, 'utf8');
  t.berkas = nama.replace(/\.ts$/, '');
}

const varAngkatan = (kode(tes.id) + kode(angkatan.id)).replace(/[^a-z0-9]/gi, '');
const impor = daftarTahapan
  .map((t) => `import { ${varTahapan(t.kode)} } from './${t.berkas}';`)
  .join('\n');

const indeks = `import type { Angkatan } from '@/lib/skema';
${impor}

/**
 * ${bersih(tes.nama)} - ${bersih(angkatan.nama)}
 *
 * Dihasilkan dari "${path.basename(fileXlsx)}" oleh skrip/impor-xlsx.mjs,
 * lalu boleh disunting tangan. Folder ini adalah sumber kebenarannya.
 * Satu tahapan = satu file, supaya diff PR mudah dibaca.
 */
export const ${varAngkatan}: Angkatan = ${objekTS(
  {
    kode: `'${kode(angkatan.id)}'`,
    nama: teksTS(bersih(angkatan.nama)),
    tahun: angka(angkatan.tahun) ?? new Date().getFullYear(),
    status: `'${bersih(angkatan.status_data) || 'terkonfirmasi'}'`,
    ringkasan: bersih(angkatan.ringkasan) ? teksTS(bersih(angkatan.ringkasan)) : undefined,
    pic: bersih(angkatan.pic) ? teksTS(bersih(angkatan.pic)) : undefined,
    diperbarui: bersih(angkatan.updated_at) ? teksTS(bersih(angkatan.updated_at)) : undefined,
    info: infoTS.length ? daftarTS(infoTS, 2) : undefined,
    tahapan: `[${daftarTahapan.map((t) => varTahapan(t.kode)).join(', ')}]`,
    sumber: sumberTS.length ? daftarTS(sumberTS, 2) : undefined,
  },
  0,
)};
`;
await writeFile(path.join(fileKeluar, 'index.ts'), indeks, 'utf8');

const jmlSubtes = T.subtes.filter((s) =>
  T.tahapan.some((t) => t.angkatan_id === angkatan.id && t.id === s.tahapan_id),
).length;
console.log(`OK -> ${fileKeluar}/`);
console.log(`   platform ${platform.nama} · tes ${tes.nama} · ${angkatan.nama}`);
console.log(`   ${daftarTahapan.length} tahapan · ${jmlSubtes} subtes · variabel "${varAngkatan}"`);
for (const t of daftarTahapan) console.log(`   · ${t.berkas}.ts`);
console.log('   Periksa diff-nya sebelum commit.');
