#!/usr/bin/env node
/**
 * Mengolah ULANG hasil scraping dari HTML mentahnya, tanpa membuka Markaz.
 *
 *   node skrip/olah-ulang.mjs out/soal-jadippg-fisika.json [berkas lain...]
 *
 * Dipakai setelah memperbaiki skrip/olah-soal.mjs: hasil perbaikannya bisa
 * langsung dibandingkan pada soal sungguhan yang sama. Tidak butuh login dan
 * tidak menyentuh profil QC Agent — browser dipakai hanya karena olahHTML
 * memerlukan DOMParser.
 */
import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { olahHTML, susunSoal, unduhGambar } from './olah-soal.mjs';

const QC_DIR = process.env.QC_AGENT_DIR || 'G:/Ali/code/QC Agent';
const { chromium } = createRequire(path.join(QC_DIR, 'package.json'))('playwright');

const berkas = process.argv.slice(2);
if (!berkas.length) {
  console.error('pemakaian: node skrip/olah-ulang.mjs out/soal-<platform>.json [...]');
  process.exit(1);
}

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.setContent('<!doctype html><title>olah</title>');

  for (const f of berkas) {
    const data = JSON.parse(await readFile(f, 'utf8'));
    const baru = [];
    let tanpaMentah = 0;
    for (const q of data) {
      if (!q.mentah) { tanpaMentah++; baru.push(q); continue; }
      const olah = await page.evaluate(olahHTML, q.mentah);
      // Buang field turunan lama; semuanya dihitung ulang oleh susunSoal.
      const {
        pertanyaan, opsi, pembahasan, pembahasanBerisi, isiKosong, sisaMentah, gambar, opsiDariPenanda,
        ...meta
      } = q;
      baru.push(susunSoal(meta, olah));
    }
    const g = await unduhGambar(baru, data[0]?.platform ?? 'lain');
    await writeFile(f, JSON.stringify(baru, null, 2), 'utf8');
    const mentah = baru.filter((q) => q.sisaMentah?.length).length;
    console.log(
      `${f}: ${baru.length} soal diolah ulang` +
        (tanpaMentah ? ` (${tanpaMentah} tanpa HTML mentah, dibiarkan)` : '') +
        `; gambar ${g.diunduh} diunduh, ${g.dipakaiUlang} dipakai ulang, ${g.ditolak.length} ditolak` +
        `; masih mentah ${mentah}`,
    );
    g.ditolak.slice(0, 5).forEach((d) => console.log(`   ! ${d}`));
  }
} finally {
  await browser.close();
}
