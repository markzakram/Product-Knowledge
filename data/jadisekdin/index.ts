import type { Platform } from '@/lib/skema';
import { ipdn } from './ipdn';
import { pknStan } from './pkn-stan';

/**
 * JadiSekdin mencakup banyak sekolah kedinasan. Semuanya memakai SKD yang sama
 * sebagai tahap awal, lalu bercabang ke seleksi lanjutan masing-masing.
 *
 * Sekolah yang belum ditulis datanya: SIPENCATAR (Kemenhub), STIN (BIN),
 * Poltek SSN (BSSN), STIS (BPS), STMKG (BMKG), dan Poltekim/Poltekip.
 */
export const jadisekdin: Platform = {
  kode: 'JADISEKDIN',
  nama: 'JadiSekdin',
  slug: 'jadisekdin',
  logo: 'logo/icon-jadisekdin.png',
  deskripsi:
    'Persiapan seleksi masuk sekolah kedinasan. SKD dipakai bersama seluruh ' +
    'sekolah, seleksi lanjutan berbeda per sekolah.',
  tes: [ipdn, pknStan],
};
