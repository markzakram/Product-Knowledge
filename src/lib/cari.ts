/**
 * Pencarian lintas entitas.
 *
 * Dua hal yang membedakannya dari versi pertama:
 *
 * 1. Cuplikan diambil dari BAGIAN YANG COCOK, bukan dari field tetap.
 *    Dulu mencari "ambang batas" mengembalikan subtes yang benar, tapi
 *    cuplikannya menampilkan format pengerjaan — sementara angka yang dicari
 *    (TWK 65, TIU 80) ada di deskripsi tahapan. Hasilnya menunjuk lokasi,
 *    bukan menjawab.
 *
 * 2. Entitas yang dipakai bersama digabung. SKD adalah SATU objek yang
 *    dirujuk JadiASN, IPDN, dan PKN STAN; menampilkannya tiga kali membuat
 *    daftar hasil penuh pengulangan.
 *
 * Sengaja tanpa pustaka pencarian: seluruh data muat di memori dan sudah ikut
 * ter-bundle saat build.
 */
import {
  PLATFORM, semuaAngkatan, semuaSubtes,
  tautanAngkatan, tautanPlatform, tautanSubtes,
} from './data';
import type { Subtes, Tahapan } from './skema';

export type JenisHasil =
  | 'platform' | 'tes' | 'angkatan' | 'tahapan' | 'subtes' | 'materi' | 'soal' | 'info';

/** Potongan cuplikan; `sorot` menandai bagian yang cocok dengan kueri. */
export interface Serpih {
  teks: string;
  sorot?: boolean;
}

export interface Hasil {
  jenis: JenisHasil;
  judul: string;
  konteks: string;
  /** Dari field mana cuplikan diambil, mis. "penilaian" atau "pembahasan". */
  asal: string;
  cuplikan: Serpih[];
  ke: string;
  skor: number;
  /** Diisi kalau entitasnya dipakai lebih dari satu tes. */
  dipakaiDi?: number;
}

const rapikan = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();

function cocok(teks: string, kata: string[]): number {
  const t = rapikan(teks);
  let skor = 0;
  for (const k of kata) {
    const i = t.indexOf(k);
    if (i === -1) return 0;
    skor += i === 0 ? 3 : i < 30 ? 2 : 1;
  }
  return skor;
}

/** Satu field yang boleh jadi sumber cuplikan. */
interface Ladang {
  asal: string;
  teks: string;
  /** Pengali skor: nama lebih penting daripada isi paragraf. */
  bobot: number;
}

/**
 * Memotong teks di sekitar kata yang cocok, lalu memecahnya jadi serpih
 * bersorot. Yang dipotong adalah field yang BENAR-BENAR memuat kuerinya.
 */
function serpih(teks: string, kata: string[], panjang = 190): Serpih[] {
  const t = rapikan(teks);
  const posisi = kata.map((k) => t.indexOf(k)).filter((x) => x >= 0).sort((a, b) => a - b);
  const awal = Math.max(0, (posisi[0] ?? 0) - 60);
  let potong = teks.slice(awal, awal + panjang).replace(/\s+/g, ' ').trim();
  if (awal > 0) potong = '… ' + potong;
  if (awal + panjang < teks.length) potong += ' …';

  // Tandai tiap kemunculan kata kunci di dalam potongan.
  const pola = new RegExp(
    `(${kata.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  );
  const out: Serpih[] = [];
  let sisa = potong;
  let m: RegExpExecArray | null;
  let terakhir = 0;
  pola.lastIndex = 0;
  while ((m = pola.exec(sisa)) !== null) {
    if (m.index > terakhir) out.push({ teks: sisa.slice(terakhir, m.index) });
    out.push({ teks: m[0], sorot: true });
    terakhir = m.index + m[0].length;
    if (pola.lastIndex === m.index) pola.lastIndex++;
  }
  if (terakhir < sisa.length) out.push({ teks: sisa.slice(terakhir) });
  return out.length ? out : [{ teks: potong }];
}

/** Memilih field dengan skor tertinggi sebagai sumber cuplikan. */
function pilihLadang(ladang: Ladang[], kata: string[]) {
  let terbaik: { l: Ladang; skor: number } | null = null;
  let total = 0;
  for (const l of ladang) {
    if (!l.teks) continue;
    const s = cocok(l.teks, kata) * l.bobot;
    if (s === 0) continue;
    total += s;
    if (!terbaik || s > terbaik.skor) terbaik = { l, skor: s };
  }
  return terbaik ? { asal: terbaik.l.asal, teks: terbaik.l.teks, total } : null;
}

export function cari(kueri: string, batas = 50): Hasil[] {
  const kata = rapikan(kueri).split(' ').filter(Boolean);
  if (kata.length === 0) return [];

  const hasil: Hasil[] = [];
  const tambah = (
    jenis: JenisHasil, judul: string, konteks: string, ke: string, ladang: Ladang[],
    dipakaiDi?: number,
  ) => {
    const p = pilihLadang(ladang, kata);
    if (!p) return;
    hasil.push({
      jenis, judul, konteks, ke, asal: p.asal, skor: p.total,
      cuplikan: serpih(p.teks, kata),
      ...(dipakaiDi && dipakaiDi > 1 ? { dipakaiDi } : {}),
    });
  };

  for (const p of PLATFORM) {
    tambah('platform', p.nama, 'Platform', tautanPlatform(p), [
      { asal: 'nama', teks: p.nama, bobot: 8 },
      { asal: 'deskripsi', teks: p.deskripsi ?? '', bobot: 3 },
    ]);
    for (const t of p.tes) {
      tambah('tes', t.nama, p.nama, tautanPlatform(p), [
        { asal: 'nama', teks: t.nama, bobot: 7 },
        { asal: 'instansi', teks: t.instansi ?? '', bobot: 5 },
        { asal: 'kategori', teks: t.kategori ?? '', bobot: 4 },
        { asal: 'deskripsi', teks: t.deskripsi ?? '', bobot: 3 },
      ]);
    }
  }

  // ── Tahapan dan subtes: digabung per objek ────────────────────────────
  // Objek yang sama (mis. SKD sekolah kedinasan) dirujuk beberapa tes.
  // Kuncinya objek itu sendiri, bukan namanya, supaya dua subtes berbeda
  // yang kebetulan senama tidak ikut tergabung.
  const pakaiTahapan = new Map<Tahapan, { ke: string; konteks: string[] }>();
  const pakaiSubtes = new Map<Subtes, { ke: string; konteks: string[] }>();

  for (const j of semuaAngkatan()) {
    const ke = tautanAngkatan(j);
    tambah('angkatan', `${j.tes.nama} ${j.angkatan.nama}`, j.platform.nama, ke, [
      { asal: 'nama', teks: `${j.tes.nama} ${j.angkatan.nama}`, bobot: 6 },
      { asal: 'tahun', teks: String(j.angkatan.tahun), bobot: 4 },
      { asal: 'ringkasan', teks: j.angkatan.ringkasan ?? '', bobot: 3 },
    ]);

    for (const t of j.angkatan.tahapan) {
      const ada = pakaiTahapan.get(t);
      if (ada) ada.konteks.push(`${j.platform.nama} · ${j.angkatan.nama}`);
      else pakaiTahapan.set(t, { ke, konteks: [`${j.platform.nama} · ${j.angkatan.nama}`] });
    }

    for (const i of j.angkatan.info ?? []) {
      tambah('info', i.judul, `${j.angkatan.nama} · informasi seleksi`, ke, [
        { asal: 'judul', teks: i.judul, bobot: 5 },
        { asal: i.tipe, teks: i.isi, bobot: 3 },
      ]);
    }
  }

  for (const [t, p] of pakaiTahapan) {
    tambah('tahapan', t.nama, p.konteks[0], p.ke, [
      { asal: 'nama', teks: t.nama, bobot: 6 },
      // Deskripsi tahapan memuat ambang batas dan aturan pengerjaan —
      // justru di sinilah jawaban yang paling sering dicari berada.
      { asal: 'deskripsi', teks: t.deskripsi ?? '', bobot: 4 },
      { asal: 'mode', teks: t.mode ?? '', bobot: 2 },
    ], p.konteks.length);
  }

  for (const j of semuaSubtes()) {
    const ke = tautanSubtes(j);
    const konteks = `${j.platform.nama} · ${j.tes.nama} ${j.angkatan.nama} · ${j.tahapan.nama}`;
    const ada = pakaiSubtes.get(j.subtes);
    if (ada) ada.konteks.push(konteks);
    else pakaiSubtes.set(j.subtes, { ke, konteks: [konteks] });
  }

  for (const [s, p] of pakaiSubtes) {
    tambah('subtes', s.nama, p.konteks[0], p.ke, [
      { asal: 'nama', teks: s.nama, bobot: 8 },
      { asal: 'penilaian', teks: s.penilaian ?? '', bobot: 5 },
      { asal: 'format', teks: s.formatKetentuan ?? '', bobot: 4 },
      { asal: 'catatan', teks: s.catatan ?? '', bobot: 3 },
      { asal: 'materi', teks: (s.materi ?? []).map((m) => `${m.nama} ${m.catatan ?? ''}`).join(' · '), bobot: 3 },
    ], p.konteks.length);

    for (const m of s.materi ?? []) {
      tambah('materi', m.nama, `${s.nama} · ${p.konteks[0]}`, p.ke, [
        { asal: 'materi', teks: m.nama, bobot: 5 },
        { asal: 'catatan', teks: m.catatan ?? '', bobot: 2 },
      ], p.konteks.length);
    }

    for (const kel of s.contoh ?? []) {
      for (const soal of kel.soal) {
        tambah('soal', `Soal ${soal.nomor} — ${s.nama}`, p.konteks[0], `${p.ke}#soal-${soal.nomor}`, [
          { asal: 'pertanyaan', teks: soal.pertanyaan, bobot: 4 },
          { asal: 'stimulus', teks: kel.stimulus?.isi ?? '', bobot: 3 },
          { asal: 'opsi', teks: (soal.opsi ?? []).map((o) => o.teks).join(' · '), bobot: 2 },
          { asal: 'pembahasan', teks: soal.pembahasan, bobot: 2 },
        ], p.konteks.length);
      }
    }
  }

  return hasil.sort((a, b) => b.skor - a.skor).slice(0, batas);
}
