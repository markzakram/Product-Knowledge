#!/usr/bin/env node
/**
 * Membuat ikon PWA dari logo aplikasi (src/app/icon.png, 512x512 transparan).
 *
 *   node skrip/ikon-pwa.mjs
 *
 * Dijalankan ulang setiap kali logonya berganti. Hasilnya di public/pwa/:
 *   ikon-192.png, ikon-512.png            "any": logo apa adanya, latar transparan
 *   ikon-maskable-192.png, -512.png       "maskable": latar solid, logo di zona aman
 *   apple-touch-icon.png                  180x180, latar solid
 *
 * Kenapa ada versi berlatar: Android memotong ikon "maskable" menjadi
 * lingkaran/kotak membulat, jadi logonya harus berada di zona aman (lingkaran
 * 80% di tengah) di atas latar penuh. iOS mengisi area transparan
 * apple-touch-icon dengan HITAM — logo hijau di atas kotak hitam.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SUMBER = 'src/app/icon.png';
const KELUAR = 'public/pwa';
// Latar terang aplikasi (--latar di globals.css), juga background_color manifest.
const LATAR = '#f9f8f5';

await mkdir(KELUAR, { recursive: true });

async function biasa(ukuran) {
  await sharp(SUMBER).resize(ukuran, ukuran).png().toFile(`${KELUAR}/ikon-${ukuran}.png`);
}

/** Logo diperkecil ke `skala` dari kanvas, di tengah latar solid. */
async function berlatar(ukuran, skala, nama) {
  const isi = Math.round(ukuran * skala);
  const logo = await sharp(SUMBER).resize(isi, isi).png().toBuffer();
  // Dua tahap: sharp selalu menjalankan composite PALING AKHIR, jadi flatten
  // di rantai yang sama tidak menyentuh hasil tempelan.
  const gabung = await sharp({ create: { width: ukuran, height: ukuran, channels: 4, background: LATAR } })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toBuffer();
  await sharp(gabung).flatten({ background: LATAR }).removeAlpha().png().toFile(`${KELUAR}/${nama}`);
}

await biasa(192);
await biasa(512);
// 0.7: bagian logo yang berisi gambar (sekitar 85% kotaknya) jatuh di dalam
// lingkaran aman 80%, termasuk sudut-sudut kubusnya.
await berlatar(192, 0.7, 'ikon-maskable-192.png');
await berlatar(512, 0.7, 'ikon-maskable-512.png');
// iOS membulatkan sudutnya sendiri; logo boleh sedikit lebih besar.
await berlatar(180, 0.78, 'apple-touch-icon.png');

for (const f of ['ikon-192.png', 'ikon-512.png', 'ikon-maskable-192.png', 'ikon-maskable-512.png', 'apple-touch-icon.png']) {
  const m = await sharp(`${KELUAR}/${f}`).metadata();
  console.log(`${f.padEnd(24)} ${m.width}x${m.height} ${m.hasAlpha ? 'transparan' : 'buram'}`);
}
