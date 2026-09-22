import type { Platform } from '@/lib/skema';
import { jadipcpm } from './jadipcpm';
import { jadisekdin } from './jadisekdin';

/**
 * Seluruh isi Product Knowledge.
 *
 * Folder di bawah data/ mengikuti hierarkinya:
 *   data/<platform>/<tes>/<angkatan>/<tahapan>.ts
 *
 * Menambah angkatan = buat foldernya, tulis satu file per tahapan, daftarkan
 * di index angkatan, lalu naik sampai ke sini. Compiler memeriksa bentuknya;
 * PR memeriksa isinya.
 *
 * Urutan di daftar ini adalah urutan tampilnya di beranda.
 */
export const PLATFORM: Platform[] = [
  { kode: 'CEREBRUM', nama: 'Cerebrum', slug: 'cerebrum', tes: [] },
  { kode: 'JADIASN', nama: 'JadiASN', slug: 'jadiasn', tes: [] },
  { kode: 'JADIPPPK', nama: 'JadiPPPK', slug: 'jadipppk', tes: [] },
  { kode: 'JADIBUMN', nama: 'JadiBUMN', slug: 'jadibumn', tes: [] },
  jadisekdin,
  { kode: 'JADIBEASISWA', nama: 'JadiBeasiswa', slug: 'jadibeasiswa', tes: [] },
  { kode: 'JADIOJK', nama: 'JadiOJK', slug: 'jadiojk', tes: [] },
  jadipcpm,
  { kode: 'JADIPRAJURIT', nama: 'JadiPrajurit', slug: 'jadiprajurit', tes: [] },
  { kode: 'JADIPOLISI', nama: 'JadiPolisi', slug: 'jadipolisi', tes: [] },
  { kode: 'JAGOTPA', nama: 'JagoTPA', slug: 'jagotpa', tes: [] },
  { kode: 'JADIPPG', nama: 'JadiPPG', slug: 'jadippg', tes: [] },
];
