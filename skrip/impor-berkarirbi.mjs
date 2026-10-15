#!/usr/bin/env node
/**
 * Mengubah hasil scrape pejuang.berkarirbi.id (repo "Scrape Berkarir BI")
 * menjadi contoh soal PCPM 41 di data/jadipcpm/pcpm-bi/a41/.
 *
 * Keluarannya tiga berkas `contoh-*.ts` (satu per tahap) dan gambar yang
 * benar-benar dipakai di public/gambar/jadipcpm/. Berkas tahapan TIDAK disentuh
 * skrip ini, tetapi sudah memasangnya: t1/t2/t3 meng-import ekspor
 * `contoh*Berkarir` dari contoh-t1/t2/t3.ts dan menaruhnya di `contoh:` subtes
 * yang sesuai, sesudah contoh tulisan tangan. Karena itu `varian` dan `mulai`
 * di PETA adalah kesepakatan dengan berkas tahapan: mengganti nama varian, atau
 * menambah subtes, berarti menyunting berkas tahapannya juga. Skrip memberi
 * PERINGATAN kalau ada varian yang belum terpasang di berkas tahapannya.
 *
 * ATURAN: hanya sub_kategori yang punya padanan subtes di a41 yang ditulis.
 * Soal dipilih bila kunci dan pembahasannya lengkap dan SEMUA gambarnya ada di
 * folder hasil/gambar/asli, atau bila tidak ada, versi hasil/gambar/kecil
 * (gambar yang gagal diunduh, mis. HTTP 403, tidak ada di keduanya: soalnya
 * dilewati).
 * Isinya cuplikan (sekitar JUMLAH soal per subtes, selang-seling Booster dan
 * Tryout, tersebar di banyak paket), bukan seluruh bank soal. Subtes yang
 * soalnya sebagian bergambar mendapat sedikitnya separuh contoh bergambar
 * (gambar di soal, opsi, atau pembahasan sama-sama dihitung); subtes yang
 * seluruh soalnya bergambar, atau tidak ada yang bergambar, dipilih apa adanya.
 *
 *   node skrip/impor-berkarirbi.mjs [folder-scrape]
 *
 * folder-scrape bawaannya G:/Ali/code/Scrape Berkarir BI. Sumber hanya dibaca.
 * Skrip MENIMPA contoh-t1/t2/t3.ts dan gambar di public/gambar/jadipcpm/ (belum
 * lewat skrip/di-cabang.mjs): jalankan di cabang git bersih dan cek `git diff`.
 * Gambar yang tidak dirujuk lagi ikut DIHAPUS, tetapi hanya yang namanya buatan
 * skrip ini (awalan hash 16 karakter); berkas lain di folder itu tidak disentuh.
 * Gambar disalin dalam lebar maksimal LEBAR px (aslinya 1440 px, ~180 KB).
 */
import { readFile, writeFile, mkdir, copyFile, access, readdir, stat, unlink } from 'node:fs/promises';
import crypto from 'node:crypto';
import path from 'node:path';

process.on('uncaughtException', (e) => {
  console.error(`GAGAL: ${e.message}`);
  process.exit(1);
});

const SUMBER = path.resolve(process.argv[2] || 'G:/Ali/code/Scrape Berkarir BI');
const DIR_ASLI = path.join(SUMBER, 'hasil', 'gambar', 'asli');
const DIR_KECIL = path.join(SUMBER, 'hasil', 'gambar', 'kecil');
const DIR_GAMBAR = 'public/gambar/jadipcpm';
const DATA = 'data/jadipcpm/pcpm-bi/a41';
const JUMLAH = 10;
const KUOTA_GAMBAR = Math.ceil(JUMLAH / 2);
const LEBAR = 800;

/**
 * sub_kategori scrape -> subtes a41. Tidak ada pencocokan otomatis.
 * `varian` = nama ekspor yang di-import berkas tahapan (`tahapan`).
 * `mulai` = nomor pertama; subtes yang sudah punya contoh tulisan tangan
 * melanjutkan nomornya supaya tidak ganda.
 */
const PETA = [
  { tahap: 't1', berkas: 'contoh-t1.ts', tahapan: 't1-seleksi-potensi-dasar.ts', judul: 'Seleksi Potensi Dasar', subtes: [
    { sub: 'Verbal', varian: 'contohVerbalBerkarir', tipe: 'benar_salah', kelompok: true, mulai: 3 },
    { sub: 'Numerical', varian: 'contohNumerikBerkarir', tipe: 'isian_singkat', mulai: 2 },
    { sub: 'Digit Symbol', varian: 'contohDigitSimbolBerkarir', tipe: 'pg' },
    { sub: 'Diagrammatical', varian: 'contohDiagrammaticalBerkarir', tipe: 'pg' },
  ] },
  { tahap: 't2', berkas: 'contoh-t2.ts', tahapan: 't2-seleksi-pengetahuan-teknis.ts', judul: 'Seleksi Pengetahuan Teknis', subtes: [
    { sub: 'TPU', varian: 'contohTpuBerkarir', tipe: 'pg' },
    { sub: 'TPK', varian: 'contohTpkBerkarir', tipe: 'pg' },
    { sub: 'TBI Structure', varian: 'contohTbiStructureBerkarir', tipe: 'pg', mulai: 2 },
    { sub: 'TBI Written Expression', varian: 'contohTbiWrittenBerkarir', tipe: 'pg' },
    { sub: 'TBI Reading Comprehension', varian: 'contohTbiReadingBerkarir', tipe: 'pg', kelompok: true },
  ] },
  { tahap: 't3', berkas: 'contoh-t3.ts', tahapan: 't3-seleksi-psikologi.ts', judul: 'Seleksi Psikologi', subtes: [
    { sub: 'Speed Test', varian: 'contohKetelitianBerkarir', tipe: 'isian_singkat' },
  ] },
];

const bt = (s) =>
  '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';

const ENTITAS = { '&nbsp;': ' ', '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&#39;': "'" };

/** HTML Markaz-style (p, br, li, strong, ...) -> teks polos; gambar & rumus tidak ada di sumber ini. */
function teks(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|h3|blockquote|ul)>/gi, '\n\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/?(p|strong|b|i|em|blockquote|ul|li|h3|span|div)\b[^>]*>/gi, '')
    .replace(/&(nbsp|lt|gt|amp|quot|#39);/g, (m) => ENTITAS[m])
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const hashUrl = (url) => crypto.createHash('sha1').update(url).digest('hex').slice(0, 16);

function namaBerkas(url) {
  const dasar = (url.split('?')[0].split('/').pop() || 'gambar').replace(/[^a-zA-Z0-9._-]/g, '_');
  return `${hashUrl(url)}-${dasar}`.slice(0, 80);
}

const ada = (f) => access(f).then(() => true, () => false);

// Versi kecil dinamai `<hash>.<ekstensi>` (tanpa sufiks nama asli), jadi dicari lewat hash URL.
const kecil = new Map((await readdir(DIR_KECIL).catch(() => [])).map((n) => [n.split('.')[0], n]));

/** Jalur gambar di sumber: yang asli, atau versi kecil kalau yang asli tidak ada. null kalau keduanya tidak ada. */
async function jalurGambar(url) {
  const asli = path.join(DIR_ASLI, namaBerkas(url));
  if (await ada(asli)) return asli;
  const k = kecil.get(hashUrl(url));
  return k ? path.join(DIR_KECIL, k) : null;
}

/** Gambar di soal, opsi, atau stimulus (kolom gambar_soal dan gambar_a..f). */
const gambarDiSoal = (r) => [r.gambar_soal, ...'abcdef'.split('').map((h) => r[`gambar_${h}`])].filter(Boolean);
const gambarDiPembahasan = (r) => [r.pembahasan_gambar].filter(Boolean);
const gambarSoal = (r) => [...gambarDiSoal(r), ...gambarDiPembahasan(r)];

/** Semua gambar yang dirujuk baris ini sudah ada lokal (asli atau kecil)? */
async function gambarLengkap(r) {
  for (const u of gambarSoal(r)) if (!(await jalurGambar(u))) return false;
  return true;
}

const dipakai = new Map(); // nama berkas -> url
const pen = (url) => {
  const n = namaBerkas(url);
  dipakai.set(n, url);
  return `⟦gambar:gambar/jadipcpm/${n}⟧`;
};

/** Bagian bermarkah gambar + teks, dipisah baris kosong. */
const gabung = (...b) => b.filter(Boolean).join('\n\n');

function pembahasanDari(r, sub) {
  const t = teks(r.pembahasan_teks);
  const g = r.pembahasan_gambar ? pen(r.pembahasan_gambar) : '';
  if (t || g) return gabung(t, g);
  // Sumber tidak punya pembahasan: hanya kunci. Tulis sebatas yang pasti benar.
  if (sub === 'Speed Test') {
    return /[A-Za-z]/.test(r.pertanyaan)
      ? `Huruf yang muncul dua kali: ${r.kunci_teks}.`
      : `Angka yang tidak muncul di deret (dari 0 sampai 9): ${r.kunci_teks}.`;
  }
  return `Jawaban yang benar: ${teks(r.kunci_teks)}.`;
}

/** Soal berpembahasan lengkap? (kunci ada, pembahasan teks/gambar/yang bisa diturunkan) */
function layak(r, sub) {
  if (!r.kunci_huruf || !r.kunci_teks) return false;
  if (r.format_soal !== 'pilihan ganda' && sub !== 'Numerical' && sub !== 'Speed Test') return false;
  if (!r.gambar_soal && !teks(r.pertanyaan) && !teks(r.bacaan)) return false;
  if (sub !== 'Speed Test' && sub !== 'Digit Symbol' && !teks(r.pembahasan_teks) && !r.pembahasan_gambar) return false;
  return true;
}

function soalObj(r, nomor, def) {
  const sub = def.sub;
  const kunciIsian = def.tipe === 'isian_singkat';
  const pertanyaanTeks = teks(r.pertanyaan);
  const pertanyaan = gabung(r.gambar_soal ? pen(r.gambar_soal) : '', pertanyaanTeks);
  const o = { nomor, tipe: def.tipe, pertanyaan };
  if (!kunciIsian) {
    o.opsi = 'abcde'.split('').filter((h) => teks(r[`opsi_${h}`]) || r[`gambar_${h}`]).map((h) => ({
      label: h.toUpperCase(),
      teks: gabung(r[`gambar_${h}`] ? pen(r[`gambar_${h}`]) : '', teks(r[`opsi_${h}`])),
    }));
    o.kunci = r.kunci_huruf.toUpperCase();
  } else {
    o.kunci = String(r.kunci_teks).trim();
  }
  o.pembahasan = pembahasanDari(r, sub);
  return o;
}

function soalTS(s) {
  const b = [`      nomor: ${s.nomor},`, `      tipe: '${s.tipe}',`, `      pertanyaan: ${bt(s.pertanyaan)},`];
  if (s.opsi) b.push(`      opsi: [${s.opsi.map((o) => `\n        { label: '${o.label}', teks: ${bt(o.teks)} },`).join('')}\n      ],`);
  b.push(`      kunci: ${bt(s.kunci)},`, `      pembahasan: ${bt(s.pembahasan)},`, `      status: 'direview',`);
  return `    {\n${b.join('\n')}\n    }`;
}

/** Ambil `n` anggota tersebar merata dari daftar. */
const sebar = (arr, n) => (arr.length <= n ? arr : Array.from({ length: n }, (_, i) => arr[Math.floor(((i + 0.5) * arr.length) / n)]));

/** Selang-seling dua daftar (Booster, Tryout) sampai n. */
function selang(a, b, n) {
  const out = [];
  for (let i = 0; out.length < n && (i < a.length || i < b.length); i++) {
    if (i < a.length && out.length < n) out.push(a[i]);
    if (i < b.length && out.length < n) out.push(b[i]);
  }
  return out;
}

const jmlSoal = (gs) => gs.reduce((a, g) => a + g.rows.length, 0);

/** Kelompok { kat, rows } bergantian Booster dan Tryout, tersebar di paket, sampai `batas` soal. */
function pilihGrup(gs, batas, lebar) {
  const b = sebar(gs.filter((g) => g.kat === 'Booster'), lebar), y = sebar(gs.filter((g) => g.kat === 'Tryout'), lebar);
  const hasil = [];
  let n = 0;
  for (const g of selang(b, y, 99)) {
    if (n >= batas) break;
    hasil.push(g);
    n += g.rows.length;
  }
  return hasil;
}

/**
 * Pilih contoh dari daftar kelompok. Kalau sebagian soalnya bergambar dan
 * sebagian tidak, sedikitnya KUOTA_GAMBAR soal contoh bergambar, bergantian
 * dengan yang tanpa gambar. Daftar yang seragam dipilih apa adanya.
 */
function pilihCampur(gs, lebar) {
  const bergambar = (g) => g.rows.some((r) => gambarSoal(r).length > 0);
  const g = gs.filter(bergambar), t = gs.filter((x) => !bergambar(x));
  if (!g.length || !t.length) return pilihGrup(gs, JUMLAH, lebar);
  const a = pilihGrup(g, KUOTA_GAMBAR, lebar);
  return selang(a, pilihGrup(t, JUMLAH - jmlSoal(a), lebar), 99);
}

const semua = JSON.parse(await readFile(path.join(SUMBER, 'hasil', 'soal-berkarirbi.json'), 'utf8')).filter((r) => r.program === 'PCPM 41');
const laporan = [];
const subTak = [...new Set(semua.map((r) => r.sub_kategori))].filter((s) => !PETA.some((t) => t.subtes.some((d) => d.sub === s)));
let totalSoal = 0;
let totalGambar = 0;

for (const t of PETA) {
  const blok = [];
  for (const def of t.subtes) {
    const baris = semua.filter((r) => r.sub_kategori === def.sub);
    const ok = [];
    for (const r of baris) if (layak(r, def.sub) && (await gambarLengkap(r))) ok.push(r);
    let terpilih; // daftar kelompok: [{ rows }]
    if (def.kelompok) {
      // kelompok = baris sebaket dengan bacaan yang sama; urutan soal asli dijaga.
      const peta = new Map();
      for (const r of ok) {
        const k = `${r.paket_id}|${teks(r.bacaan)}`;
        if (!peta.has(k)) peta.set(k, { kat: r.kategori, rows: [] });
        peta.get(k).rows.push(r);
      }
      terpilih = pilihCampur([...peta.values()].map((g) => ({ ...g, rows: g.rows.sort((x, y) => x.nomor - y.nomor) })), 6);
    } else if (def.sub === 'Speed Test') {
      const angka = ok.filter((r) => !/[A-Za-z]/.test(r.pertanyaan)), huruf = ok.filter((r) => /[A-Za-z]/.test(r.pertanyaan));
      terpilih = selang(sebar(angka, 5), sebar(huruf, 5), JUMLAH).map((r) => ({ rows: [r] }));
    } else {
      terpilih = pilihCampur(ok.map((r) => ({ kat: r.kategori, rows: [r] })), JUMLAH);
    }
    if (!terpilih.length) {
      // Tetap diekspor (kosong): berkas tahapan meng-import nama ini.
      laporan.push(`${def.sub}: tidak ada soal layak`);
      blok.push(`/** Tidak ada soal "${def.sub}" yang layak di sumber. */\nexport const ${def.varian}: Kelompok[] = [];`);
      continue;
    }
    let nomor = def.mulai ?? 1;
    const kel = terpilih.map((g) => {
      const k = {};
      const bacaan = g.rows[0].bacaan ? teks(g.rows[0].bacaan) : '';
      const soal = g.rows.map((r) => soalObj(r, nomor++, def));
      return { bacaan, soal };
    });
    const jml = kel.reduce((a, k) => a + k.soal.length, 0);
    const rows = terpilih.flatMap((g) => g.rows);
    const gDiSoal = rows.filter((r) => gambarDiSoal(r).length).length;
    const gDiPemb = rows.filter((r) => gambarDiPembahasan(r).length).length;
    const gAda = rows.filter((r) => gambarSoal(r).length).length;
    totalSoal += jml;
    totalGambar += gAda;
    const isi = kel.map((k) => `  {\n${k.bacaan ? `    stimulus: { isi: ${bt(k.bacaan)} },\n` : ''}    soal: [\n${k.soal.map(soalTS).join(',\n')},\n    ],\n  }`).join(',\n');
    const pak = [...new Set(rows.map((r) => r.paket_nama))].length;
    blok.push(`/** ${jml} soal "${def.sub}" dari ${pak} paket Booster dan Tryout. */\nexport const ${def.varian}: Kelompok[] = [\n${isi},\n];`);
    laporan.push(`${t.tahap} ${def.sub}: ${jml} soal (${terpilih.length} kelompok), ${gAda} bergambar (${gDiSoal} di soal/opsi, ${gDiPemb} di pembahasan); bank layak ${ok.length}/${baris.length}, bergambar ${ok.filter((r) => gambarSoal(r).length).length}`);
  }
  const file = `import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal PCPM 41 ${t.judul}, cuplikan dari bank soal pejuang.berkarirbi.id
 * (Booster dan Tryout).
 *
 * Dihasilkan oleh skrip/impor-berkarirbi.mjs dan DITIMPA setiap skrip dijalankan:
 * suntingan tangan di berkas ini hilang. Dipasang ke subtes lewat ${t.tahapan}
 * (di \`contoh:\`, sesudah contoh tulisan tangan); nama ekspornya jangan diubah.
 * Status 'direview': belum diperiksa ulang untuk keperluan etalase.
 */
${blok.join('\n\n')}
`;
  await mkdir(DATA, { recursive: true });
  await writeFile(path.join(DATA, t.berkas), file, 'utf8');
}

// Salin gambar yang dipakai, diperkecil bila lebih lebar dari LEBAR.
await mkdir(DIR_GAMBAR, { recursive: true });
let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* salin apa adanya */ }
let dariKecil = 0;
for (const [n, url] of dipakai) {
  const dari = await jalurGambar(url), ke = path.join(DIR_GAMBAR, n);
  if (path.dirname(dari) === DIR_KECIL) dariKecil++;
  if (sharp) {
    try {
      await writeFile(ke, await sharp(dari).resize({ width: LEBAR, withoutEnlargement: true }).toBuffer());
      continue;
    } catch { /* jatuh ke salin */ }
  }
  await copyFile(dari, ke);
}

// Hapus gambar yang tidak dirujuk lagi. Hanya nama buatan skrip ini (awalan hash 16 karakter).
let dihapus = 0;
for (const n of await readdir(DIR_GAMBAR)) {
  if (/^[0-9a-f]{16}-/.test(n) && !dipakai.has(n)) {
    await unlink(path.join(DIR_GAMBAR, n));
    dihapus++;
  }
}

let byte = 0;
for (const n of dipakai.keys()) byte += (await stat(path.join(DIR_GAMBAR, n))).size;

// Berkas tahapan harus memasang tiap ekspor; kalau tidak, contohnya diam-diam tidak tampil.
const peringatan = [];
for (const t of PETA) {
  const src = await readFile(path.join(DATA, t.tahapan), 'utf8').catch(() => '');
  for (const d of t.subtes) if (!src.includes(d.varian)) peringatan.push(`PERINGATAN: ${d.varian} belum dipasang di ${t.tahapan}`);
}

console.log([...laporan, ...peringatan].join('\n'));
console.log(`HASIL: ${totalSoal} soal contoh PCPM 41 (${totalGambar} bergambar) dan ${dipakai.size} gambar (${Math.round(byte / 1024)} KB${dariKecil ? `, ${dariKecil} dari versi kecil` : ''}) ditulis${dihapus ? `, ${dihapus} gambar lama dihapus` : ''}${peringatan.length ? `; ${peringatan.length} contoh belum terpasang di berkas tahapan (lihat PERINGATAN di atas)` : ''}`);
if (subTak.length) console.log(`sub_kategori tanpa padanan: ${subTak.join(', ')}`);
