import type { Platform } from '@/lib/skema';
import { jadiasn } from './jadiasn';
import { jadibumn } from './jadibumn';
import { jadiojk } from './jadiojk';
import { jadipcpm } from './jadipcpm';
import { jadippg } from './jadippg';
import { jadipppk } from './jadipppk';
import { jadisekdin } from './jadisekdin';
import { jagotpa } from './jagotpa';

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
  { kode: 'CEREBRUM', nama: 'Cerebrum', slug: 'cerebrum', logo: 'logo/icon-cerebrum.png', tes: [] },
  jadiasn,
  jadipppk,
  jadibumn,
  jadisekdin,
  { kode: 'JADIBEASISWA', nama: 'JadiBeasiswa', slug: 'jadibeasiswa', logo: 'logo/icon-jadibeasiswa.png', tes: [] },
  jadiojk,
  jadipcpm,
  { kode: 'JADIPRAJURIT', nama: 'JadiPrajurit', slug: 'jadiprajurit', logo: 'logo/icon-jadiprajurit.png', tes: [] },
  { kode: 'JADIPOLISI', nama: 'JadiPolisi', slug: 'jadipolisi', logo: 'logo/icon-jadipolisi.png', tes: [] },
  jagotpa,
  jadippg,
];
