import type { Platform } from '@/lib/skema';
import { jadiasn } from './jadiasn';
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
  { kode: 'CEREBRUM', nama: 'Cerebrum', slug: 'cerebrum', logo: 'logo/icon-cerebrum.png', tes: [] },
  jadiasn,
  { kode: 'JADIPPPK', nama: 'JadiPPPK', slug: 'jadipppk', logo: 'logo/icon-jadipppk.png', tes: [] },
  { kode: 'JADIBUMN', nama: 'JadiBUMN', slug: 'jadibumn', logo: 'logo/icon-jadibumn.png', tes: [] },
  jadisekdin,
  { kode: 'JADIBEASISWA', nama: 'JadiBeasiswa', slug: 'jadibeasiswa', logo: 'logo/icon-jadibeasiswa.png', tes: [] },
  { kode: 'JADIOJK', nama: 'JadiOJK', slug: 'jadiojk', logo: 'logo/icon-jadiojk.png', tes: [] },
  jadipcpm,
  { kode: 'JADIPRAJURIT', nama: 'JadiPrajurit', slug: 'jadiprajurit', logo: 'logo/icon-jadiprajurit.png', tes: [] },
  { kode: 'JADIPOLISI', nama: 'JadiPolisi', slug: 'jadipolisi', logo: 'logo/icon-jadipolisi.png', tes: [] },
  { kode: 'JAGOTPA', nama: 'JagoTPA', slug: 'jagotpa', logo: 'logo/icon-jagotpa.png', tes: [] },
  { kode: 'JADIPPG', nama: 'JadiPPG', slug: 'jadippg', logo: 'logo/icon-jadippg.png', tes: [] },
];
