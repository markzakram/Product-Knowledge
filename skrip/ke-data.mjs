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
 *   node skrip/ke-data.mjs
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
 */
const PETA = [
  {
    sumber: 'out/soal-jadiasn.json',
    keluar: 'data/jadiasn/cpns/a2026/contoh-skd.ts',
    judul: 'Contoh soal SKD CPNS, diambil dari Markaz paket "02 Tryout Tryout SKD".',
    subtes: {
      'TWK (Tes Wawasan Kebangsaan)': { varian: 'contohTwk', mulaiNomor: 3 },
      'TIU (Tes Intelegensi Umum)': { varian: 'contohTiu', mulaiNomor: 1 },
      'TKP (Tes Karakteristik Pribadi)': { varian: 'contohTkp', mulaiNomor: 1 },
    },
  },
  {
    sumber: 'out/soal-jadisekdin.json',
    keluar: 'data/jadisekdin/bersama/contoh-skd.ts',
    judul: 'Contoh soal SKD sekolah kedinasan, dari Markaz paket "01 TO SEKOLAH KEDINASAN 2023".',
    subtes: {
      'TWK (Tes Wawasan Kebangsaan)': { varian: 'contohTwk', mulaiNomor: 3 },
      'TIU (Tes Intelegensi Umum)': { varian: 'contohTiu', mulaiNomor: 3 },
      'TKP (Tes Karakteristik Pribadi)': { varian: 'contohTkp', mulaiNomor: 3 },
    },
  },
];

const bt = (s) =>
  '`' + String(s).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '`';

/** TKP berskala: kuncinya opsi berskor tertinggi, bukan satu-satunya benar. */
const tipeSoal = (lesson) => (/TKP/i.test(lesson) ? 'skala' : 'pg');

function soalTS(q, nomor, lesson) {
  const opsi = q.opsi
    .map((o) => `\n        { label: '${o.label}', teks: ${bt(o.teks)} },`)
    .join('');
  const baris = [
    `      nomor: ${nomor},`,
    `      tipe: '${tipeSoal(lesson)}',`,
    `      pertanyaan: ${bt(q.pertanyaan)},`,
  ];
  if (opsi) baris.push(`      opsi: [${opsi}\n      ],`);
  baris.push(`      kunci: '${q.kunci.trim().toUpperCase()}',`);
  baris.push(`      pembahasan: ${bt(q.pembahasan)},`);
  baris.push(`      status: 'direview',`);
  return `    {\n${baris.join('\n')}\n    }`;
}

let total = 0;
const dilewati = [];

for (const m of PETA) {
  let data;
  try {
    data = JSON.parse(await readFile(m.sumber, 'utf8'));
  } catch {
    console.log(`  ! ${m.sumber} tidak ada, dilewati`);
    continue;
  }

  const blok = [];
  const lessonDikenal = new Set(Object.keys(m.subtes));

  for (const [lesson, cfg] of Object.entries(m.subtes)) {
    const soal = data
      .filter((q) => q.lesson === lesson)
      // Soal yang isinya kosong di Markaz tidak boleh masuk; kunci saja
      // tanpa pertanyaan bukan contoh soal.
      .filter((q) => q.pertanyaan.trim() && q.pembahasan.trim())
      .slice(0, 5);

    if (!soal.length) {
      dilewati.push(`${m.sumber}: lesson "${lesson}" tidak menghasilkan soal terpakai`);
      continue;
    }

    const isi = soal
      .map((q, i) => soalTS(q, cfg.mulaiNomor + i, lesson))
      .join(',\n');
    blok.push(
      `/** ${soal.length} soal, lanjutan penomoran dari contoh yang sudah ada. */\n` +
        `export const ${cfg.varian}: Kelompok[] = [\n  {\n    soal: [\n${isi},\n    ],\n  },\n];`,
    );
    total += soal.length;
    console.log(`  ${m.keluar} :: ${cfg.varian} <- ${soal.length} soal dari "${lesson}"`);
  }

  for (const lesson of new Set(data.map((q) => q.lesson))) {
    if (!lessonDikenal.has(lesson)) {
      dilewati.push(`${m.sumber}: lesson "${lesson}" tidak punya padanan subtes`);
    }
  }

  if (!blok.length) continue;
  const isi = `import type { Kelompok } from '@/lib/skema';

/**
 * ${m.judul}
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
if (dilewati.length) {
  console.log('\nDilewati (tidak dipaksakan masuk):');
  dilewati.forEach((d) => console.log(`  . ${d}`));
}
