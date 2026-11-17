import 'server-only';
import { deflateRawSync } from 'node:zlib';

/**
 * Penulis arsip ZIP minimal, tanpa dependensi: cukup zlib bawaan Node.
 *
 * Hanya yang dibutuhkan unduhan per platform: berkas dalam memori, nama UTF-8,
 * metode deflate (atau simpan apa adanya bila deflate tidak memperkecil, mis.
 * PNG dan MP3 yang sudah terkompresi). Tidak ada ZIP64, jadi batasnya 65.535
 * berkas dan 4 GB; satu platform jauh di bawah itu.
 */

export interface BerkasZip {
  /** Jalur di dalam arsip, dipisah "/", tanpa "/" di depan. */
  jalur: string;
  isi: string | Uint8Array;
}

const TABEL_CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(data: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++) c = TABEL_CRC[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** Bit 11: nama berkas UTF-8, supaya nama berhuruf non-ASCII terbaca benar di Windows dan macOS. */
const BENDERA_UTF8 = 0x0800;

export function buatZip(berkas: BerkasZip[], waktu = new Date()): Buffer {
  if (berkas.length > 0xffff) throw new Error(`Terlalu banyak berkas untuk ZIP tanpa ZIP64: ${berkas.length}`);

  const dosWaktu = (waktu.getHours() << 11) | (waktu.getMinutes() << 5) | Math.floor(waktu.getSeconds() / 2);
  const dosTanggal = ((waktu.getFullYear() - 1980) << 9) | ((waktu.getMonth() + 1) << 5) | waktu.getDate();

  const lokal: Buffer[] = [];
  const pusat: Buffer[] = [];
  let offset = 0;

  for (const b of berkas) {
    const nama = Buffer.from(b.jalur, 'utf8');
    const data = typeof b.isi === 'string' ? Buffer.from(b.isi, 'utf8') : Buffer.from(b.isi);
    const crc = crc32(data);
    const kempis = deflateRawSync(data, { level: 9 });
    const deflate = kempis.length < data.length;
    const simpan = deflate ? kempis : data;
    const metode = deflate ? 8 : 0;

    const h = Buffer.alloc(30);
    h.writeUInt32LE(0x04034b50, 0);
    h.writeUInt16LE(20, 4);
    h.writeUInt16LE(BENDERA_UTF8, 6);
    h.writeUInt16LE(metode, 8);
    h.writeUInt16LE(dosWaktu, 10);
    h.writeUInt16LE(dosTanggal, 12);
    h.writeUInt32LE(crc, 14);
    h.writeUInt32LE(simpan.length, 18);
    h.writeUInt32LE(data.length, 22);
    h.writeUInt16LE(nama.length, 26);
    h.writeUInt16LE(0, 28);
    lokal.push(h, nama, simpan);

    const c = Buffer.alloc(46);
    c.writeUInt32LE(0x02014b50, 0);
    c.writeUInt16LE(20, 4);
    c.writeUInt16LE(20, 6);
    c.writeUInt16LE(BENDERA_UTF8, 8);
    c.writeUInt16LE(metode, 10);
    c.writeUInt16LE(dosWaktu, 12);
    c.writeUInt16LE(dosTanggal, 14);
    c.writeUInt32LE(crc, 16);
    c.writeUInt32LE(simpan.length, 20);
    c.writeUInt32LE(data.length, 24);
    c.writeUInt16LE(nama.length, 28);
    // 30 extra, 32 komentar, 34 disk, 36 atribut internal, 38 atribut eksternal: semuanya 0.
    c.writeUInt32LE(offset, 42);
    pusat.push(c, nama);

    offset += h.length + nama.length + simpan.length;
  }

  const ukuranPusat = pusat.reduce((n, b) => n + b.length, 0);
  const akhir = Buffer.alloc(22);
  akhir.writeUInt32LE(0x06054b50, 0);
  akhir.writeUInt16LE(berkas.length, 8);
  akhir.writeUInt16LE(berkas.length, 10);
  akhir.writeUInt32LE(ukuranPusat, 12);
  akhir.writeUInt32LE(offset, 16);

  return Buffer.concat([...lokal, ...pusat, akhir]);
}
