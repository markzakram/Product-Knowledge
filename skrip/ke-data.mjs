#!/usr/bin/env node
/**
 * Mengubah hasil scraping (out/soal-*.json) menjadi file data TypeScript.
 *
 * ATURAN: hanya soal yang lesson-nya JELAS memetakan ke subtes yang sudah ada
 * di data/ yang ditulis. Yang tidak punya padanan dilaporkan, bukan
 * dipaksakan masuk dengan menebak subtes baru.
 *
 * Keluarannya file `contoh-*.ts` tersendiri, bukan disisipkan ke file tahapan.
 * Alasannya supaya diff PR terbaca jelas: yang berubah adalah berkas contoh
 * soal, bukan spesifikasi subtes yang sudah direview.
 *
 *   node skrip/ke-data.mjs <target> [target lain...]
 *   node skrip/ke-data.mjs            # menampilkan daftar target
 *
 * Target harus disebut satu per satu. Berkas contoh boleh disunting tangan
 * setelah dihasilkan, jadi menjalankan skrip untuk satu platform tidak boleh
 * diam-diam menimpa berkas platform lain.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

/**
 * Peta lesson Markaz -> subtes di data/.
 *
 * Sengaja ditulis tangan dan eksplisit. Pencocokan otomatis lewat kemiripan
 * nama pernah tergoda dipakai, tapi "TIU" di JadiASN dan "TIU" di JadiSekdin
 * menuju objek yang berbeda (ambang batas TKP-nya 166 vs 156), jadi salah
 * petakan berarti contoh soal muncul di angkatan yang keliru.
 *
 * `tipe` juga eksplisit. Soal kepribadian dan situasional memberi SKOR pada
 * tiap opsi (1–5), bukan satu jawaban benar; menandainya 'pg' membuat
 * pembaca mengira opsi lain salah.
 */
const PETA = {
  jadiasn: {
    keluar: 'data/jadiasn/cpns/a2026/contoh-skd.ts',
    judul: 'Contoh soal SKD CPNS, diambil dari Markaz paket "02 Tryout Tryout SKD".',
    ambil: [
      { sumber: 'out/soal-jadiasn.json', lesson: 'TWK (Tes Wawasan Kebangsaan)', varian: 'contohTwk', mulaiNomor: 3, tipe: 'pg' },
      { sumber: 'out/soal-jadiasn.json', lesson: 'TIU (Tes Intelegensi Umum)', varian: 'contohTiu', mulaiNomor: 1, tipe: 'pg' },
      { sumber: 'out/soal-jadiasn.json', lesson: 'TKP (Tes Karakteristik Pribadi)', varian: 'contohTkp', mulaiNomor: 1, tipe: 'skala' },
    ],
  },
  jadisekdin: {
    keluar: 'data/jadisekdin/bersama/contoh-skd.ts',
    judul: 'Contoh soal SKD sekolah kedinasan, dari Markaz paket "01 TO SEKOLAH KEDINASAN 2023".',
    ambil: [
      { sumber: 'out/soal-jadisekdin.json', lesson: 'TWK (Tes Wawasan Kebangsaan)', varian: 'contohTwk', mulaiNomor: 3, tipe: 'pg' },
      { sumber: 'out/soal-jadisekdin.json', lesson: 'TIU (Tes Intelegensi Umum)', varian: 'contohTiu', mulaiNomor: 3, tipe: 'pg' },
      { sumber: 'out/soal-jadisekdin.json', lesson: 'TKP (Tes Karakteristik Pribadi)', varian: 'contohTkp', mulaiNomor: 3, tipe: 'skala' },
    ],
  },
  'jadiojk-pcam9': {
    keluar: 'data/jadiojk/pcam/a9/contoh.ts',
    judul: 'Contoh soal PCAM 9 OJK, dari paket tryout Markaz Tahap 1 sampai 3.',
    ambil: [
      // Dua figural (opsi di dalam gambar), dua hitungan cerita, satu logika.
      { sumber: 'out/soal-jadiojk-pcam9-t1.json', lesson: 'Kemampuan Umum', varian: 'contohKemampuanUmum', tipe: 'pg',
        pilih: ['134404', '134405', '134408', '134409', '134410'] },
      { sumber: 'out/soal-jadiojk-pcam9-t1.json', lesson: 'Penalaran Numerik', varian: 'contohPenalaranNumerik', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-pcam9-t2a.json', lesson: 'Tes Kemampuan Bahasa Inggris', varian: 'contohBahasaInggris', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-pcam9-t2a.json', lesson: 'Tes Pengetahuan Sektor Jasa Keuangan', varian: 'contohSektorJasaKeuangan', tipe: 'pg' },
      // Paket TKU INTERAKTIF (ID 5053) sengaja tidak dipakai: soalnya berupa
      // interaksi (ketuk gambar, susun jadwal, urutkan lencana) tanpa kunci
      // maupun tipe di Markaz, jadi tidak bisa ditampilkan ulang sebagai soal
      // teks. Penalaran induktif diambil dari versi non-interaktifnya.
      { sumber: 'out/soal-jadiojk-pcam9-t2c.json', lesson: 'Tes Penalaran Induktif Non-Interaktif', varian: 'contohPenalaranInduktif', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-pcam9-t3.json', lesson: 'Tes Kepribadian', varian: 'contohKepribadian', tipe: 'skala' },
    ],
  },
  'jadiojk-lps2025': {
    keluar: 'data/jadiojk/lps/a2025/contoh.ts',
    judul: 'Contoh soal rekrutmen LPS 2025, dari paket tryout Markaz Tahap 1 sampai 3.',
    ambil: [
      { sumber: 'out/soal-jadiojk-lps-t1.json', lesson: 'Hubungan Kata', varian: 'contohHubunganKata', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-lps-t1.json', lesson: 'Angka', varian: 'contohAngka', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-lps-t1.json', lesson: 'Gabungan Bagian', varian: 'contohGabunganBagian', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-lps-t1.json', lesson: 'Abstrak', varian: 'contohAbstrak', tipe: 'pg' },
      { sumber: 'out/soal-jadiojk-lps-t2.json', lesson: 'Psikotes 1', varian: 'contohPsikotes1', tipe: 'skala' },
      { sumber: 'out/soal-jadiojk-lps-t2.json', lesson: 'Psikotes 2', varian: 'contohPsikotes2', tipe: 'skala' },
      { sumber: 'out/soal-jadiojk-lps-t3.json', lesson: 'Structure and Written Expression', varian: 'contohStructure', tipe: 'pg' },
      // Yang opsinya bisa disusun dari bagian bertekanan di sumbernya; 124863
      // tidak menandai bagian mana pun sehingga opsinya hanya "Bagian bertanda".
      { sumber: 'out/soal-jadiojk-lps-t3.json', lesson: 'Error Recognition', varian: 'contohErrorRecognition', tipe: 'pg',
        pilih: ['124859', '124860', '124861', '124862', '124864'] },
      { sumber: 'out/soal-jadiojk-lps-t3.json', lesson: 'Reading Comprehension', varian: 'contohReading', tipe: 'pg' },
    ],
  },
  'jadipppk-2026': {
    keluar: 'data/jadipppk/pppk/a2026/contoh.ts',
    judul: 'Contoh soal seleksi kompetensi PPPK, dari paket tryout Markaz.',
    ambil: [
      // Teknis diambil dari paket AKTIF "Teknis PGSD - Guru SD" (kategori
      // "PENDIDIKAN, PELATIHAN, DAN PENELITIAN"). Kategori "Selkom Teknis"
      // Juni 2026 seluruhnya nonaktif saat dibaca.
      { sumber: 'out/soal-jadipppk-teknis.json', lesson: 'Guru SD', varian: 'contohTeknis', tipe: 'pg' },
      { sumber: 'out/soal-jadipppk-2026.json', lesson: 'Manajerial', varian: 'contohManajerial', tipe: 'skala' },
      { sumber: 'out/soal-jadipppk-2026.json', lesson: 'Sosiokultural', varian: 'contohSosialKultural', tipe: 'skala' },
      { sumber: 'out/soal-jadipppk-2026.json', lesson: 'Wawancara', varian: 'contohWawancara', tipe: 'skala' },
    ],
  },
  'jadippg-prajabatan2026': {
    keluar: 'data/jadippg/prajabatan/a2026/contoh.ts',
    judul: 'Contoh soal tes substantif PPG Prajabatan, dari paket tryout Markaz.',
    ambil: [
      { sumber: 'out/soal-jadippg-prajab.json', lesson: 'Literasi', varian: 'contohLiterasi', tipe: 'pg' },
      { sumber: 'out/soal-jadippg-prajab.json', lesson: 'Numerasi', varian: 'contohNumerasi', tipe: 'pg' },
    ],
  },
  'jadippg-daljab2026': {
    keluar: 'data/jadippg/dalam-jabatan/a2026/contoh.ts',
    judul: 'Contoh soal tes objektif UKPPPG, dari paket tryout Markaz susunan Juli 2026.',
    ambil: [
      { sumber: 'out/soal-jadippg-daljab.json', lesson: 'Pedagogik', varian: 'contohPedagogik', tipe: 'pg' },
      { sumber: 'out/soal-jadippg-daljab.json', lesson: 'Situational Judgemental Test', varian: 'contohSjt', tipe: 'skala' },
    ],
  },
  'jagotpa-2026': {
    keluar: 'data/jagotpa/tpa/a2026/contoh.ts',
    judul: 'Contoh soal Tes Potensi Akademik, dari paket tryout Markaz "Tes Potensi Akademik Part 2".',
    ambil: [
      { sumber: 'out/soal-jagotpa-part2.json', lesson: 'Verbal', varian: 'contohVerbal', tipe: 'pg' },
      // 128460 sengaja dilewati: penyebut di soalnya "3/9" sedangkan di
      // pembahasannya "5/9". Dengan angka di soal hasilnya 5/3, yang tidak ada
      // di pilihan mana pun — salah tulis di sumber, bukan saat diolah.
      { sumber: 'out/soal-jagotpa-part2.json', lesson: 'Kuantitatif', varian: 'contohKuantitatif', tipe: 'pg',
        pilih: ['128456', '128457', '128458', '128459', '128463'] },
      { sumber: 'out/soal-jagotpa-part2.json', lesson: 'Penalaran', varian: 'contohPenalaran', tipe: 'pg' },
    ],
  },
};

const JUMLAH = 5;

const bt = (s) =>
  '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';

/**
 * Pola pembahasan berskala: "A = 4", "Nilai (3)", "(2 Poin)", "Opsi B 4 poin",
 * "B (Skor 5)". Dipakai untuk MEMERIKSA tipe yang ditulis tangan, bukan
 * menggantikannya.
 */
function tampakBerskala(pembahasan) {
  const pola = /\b[A-E]\s*[=:]\s*[1-5]\b|\bnilai\s*\(\s*[1-5]\s*\)|\(\s*[1-5]\s*(poin|point)?\s*\)|\b[1-5]\s*poin\b|\bskor\s*[1-5]\b/gi;
  return (pembahasan.match(pola) || []).length >= 3;
}

/** Alasan sebuah soal TIDAK layak jadi contoh; null kalau layak. */
function alasanTolak(q) {
  if (q.isiKosong || !q.pertanyaan.trim()) return 'isi soal kosong di Markaz';
  if (!q.pembahasan.trim()) return 'pembahasan kosong';
  if (q.sisaMentah?.length) return `masih mentah (${q.sisaMentah.join(', ')})`;
  // Gambar yang gagal diunduh tetap menunjuk URL asalnya. Untuk contoh soal
  // itu tidak cukup: gambar tempelan Google Docs (lh7-rt.googleusercontent)
  // memakai kunci sementara dan bisa putus kapan saja.
  const teksSemua = [q.pertanyaan, q.pembahasan, ...q.opsi.map((o) => o.teks)].join('\n');
  if (/⟦gambar:https?:/.test(teksSemua)) return 'ada gambar yang belum tersimpan lokal';
  if (!q.opsi.length) {
    // Soal figural: pilihan A–E tergambar DI DALAM gambar soal, jadi tidak
    // ada teks opsi untuk dipisah. Situs lalu menampilkan gambar + "Jawaban: A".
    // Layak hanya kalau soalnya memang bergambar dan kuncinya satu huruf.
    const figural = /⟦gambar:/.test(q.pertanyaan) && /^[A-E]$/.test(q.kunci.trim().toUpperCase());
    return figural ? null : 'tanpa opsi dan bukan soal figural';
  }
  const label = q.opsi.map((o) => o.label);
  const kunci = q.kunci.trim().toUpperCase();
  if (!label.includes(kunci)) return `kunci "${q.kunci}" tidak ada di opsi ${label.join('')}`;
  if (q.opsi.some((o) => !o.teks.trim())) return 'ada opsi kosong';
  return null;
}

function soalTS(q, nomor, tipe) {
  const opsi = q.opsi
    .map((o) => `\n        { label: '${o.label}', teks: ${bt(o.teks)} },`)
    .join('');
  const baris = [
    `      nomor: ${nomor},`,
    `      tipe: '${tipe}',`,
    `      pertanyaan: ${bt(q.pertanyaan)},`,
  ];
  if (opsi) baris.push(`      opsi: [${opsi}\n      ],`);
  baris.push(`      kunci: '${q.kunci.trim().toUpperCase()}',`);
  baris.push(`      pembahasan: ${bt(q.pembahasan)},`);
  baris.push(`      status: 'direview',`);
  return `    {\n${baris.join('\n')}\n    }`;
}

const target = process.argv.slice(2);
if (!target.length) {
  console.log('pemakaian: node skrip/ke-data.mjs <target> [target lain...]\n\nTarget yang tersedia:');
  for (const [k, m] of Object.entries(PETA)) console.log(`  ${k.padEnd(18)} -> ${m.keluar}`);
  process.exit(0);
}
const tidakAda = target.filter((t) => !PETA[t]);
if (tidakAda.length) {
  console.error(`target tidak dikenal: ${tidakAda.join(', ')}`);
  process.exit(1);
}

let total = 0;
const catatan = [];
const cache = new Map();
async function baca(f) {
  if (!cache.has(f)) {
    try {
      cache.set(f, JSON.parse(await readFile(f, 'utf8')));
    } catch {
      cache.set(f, null);
    }
  }
  return cache.get(f);
}

for (const t of target) {
  const m = PETA[t];
  const blok = [];
  const paketDipakai = new Set();

  for (const a of m.ambil) {
    const data = await baca(a.sumber);
    if (!data) {
      catatan.push(`${t}: ${a.sumber} tidak ada — lesson "${a.lesson}" dilewati`);
      continue;
    }
    const semua = data.filter((q) => q.lesson === a.lesson);
    if (!semua.length) {
      catatan.push(`${t}: lesson "${a.lesson}" tidak ada di ${a.sumber}`);
      continue;
    }

    const layak = [];
    for (const q of semua) {
      const alasan = alasanTolak(q);
      if (alasan) catatan.push(`${t}: "${a.lesson}" soal Markaz ${q.questionId} ditolak — ${alasan}`);
      else layak.push(q);
    }
    // `pilih` (ID soal Markaz) dipakai bila lima soal pertama tidak mewakili
    // variasi format — Kemampuan Umum TPD, misalnya, dibuka empat soal
    // figural berturut-turut sebelum soal hitungan dan logika. Tanpa `pilih`,
    // yang pembahasannya sungguhan didahulukan dan urutan asli Markaz dijaga.
    let pilih;
    if (a.pilih) {
      pilih = a.pilih.map((id) => layak.find((q) => q.questionId === id));
      const hilang = a.pilih.filter((id, i) => !pilih[i]);
      if (hilang.length) catatan.push(`${t}: "${a.lesson}" soal pilihan ${hilang.join(', ')} tidak ada atau ditolak`);
      pilih = pilih.filter(Boolean);
    } else {
      pilih = [...layak.filter((q) => q.pembahasanBerisi), ...layak.filter((q) => !q.pembahasanBerisi)]
        .slice(0, a.jumlah ?? JUMLAH)
        .sort((x, y) => semua.indexOf(x) - semua.indexOf(y));
    }
    if (!pilih.length) {
      catatan.push(`${t}: lesson "${a.lesson}" tidak menghasilkan soal terpakai`);
      continue;
    }

    const berskala = pilih.filter((q) => tampakBerskala(q.pembahasan)).length;
    if (a.tipe !== 'skala' && berskala > pilih.length / 2) {
      catatan.push(`${t}: PERIKSA "${a.lesson}" ditulis '${a.tipe}' tapi ${berskala}/${pilih.length} pembahasannya berskala`);
    }
    if (a.tipe === 'skala' && berskala < pilih.length / 2) {
      catatan.push(`${t}: PERIKSA "${a.lesson}" ditulis 'skala' tapi hanya ${berskala}/${pilih.length} pembahasannya berskala`);
    }

    pilih.forEach((q) => paketDipakai.add(`"${q.paket}"${q.paketId ? ` (ID ${q.paketId})` : ''}`));
    const isi = pilih.map((q, i) => soalTS(q, (a.mulaiNomor ?? 1) + i, a.tipe)).join(',\n');
    const tipis = pilih.filter((q) => !q.pembahasanBerisi).length;
    blok.push(
      `/** ${pilih.length} soal dari lesson "${a.lesson}"` +
        (tipis ? `; ${tipis} di antaranya pembahasannya hanya menyebut jawaban` : '') +
        '. */\n' +
        `export const ${a.varian}: Kelompok[] = [\n  {\n    soal: [\n${isi},\n    ],\n  },\n];`,
    );
    total += pilih.length;
    console.log(`  ${m.keluar} :: ${a.varian} <- ${pilih.length} soal '${a.tipe}' dari "${a.lesson}"`);
  }

  if (!blok.length) continue;
  const isi = `import type { Kelompok } from '@/lib/skema';

/**
 * ${m.judul}
 *
 * Paket sumber: ${[...paketDipakai].join(', ')}.
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
${blok.join('\n\n')}
`;
  await mkdir(path.dirname(m.keluar), { recursive: true });
  await writeFile(m.keluar, isi, 'utf8');
}

console.log(`\n${total} soal ditulis.`);
if (catatan.length) {
  console.log('\nCatatan (tidak dipaksakan masuk):');
  catatan.forEach((d) => console.log(`  . ${d}`));
}
