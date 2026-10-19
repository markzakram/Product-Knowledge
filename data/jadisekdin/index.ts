import type { Platform } from '@/lib/skema';
import { skd } from './skd';
import { ipdn } from './ipdn';
import { pknStan } from './pkn-stan';

/**
 * JadiSekdin mencakup banyak sekolah kedinasan. Semuanya memakai SKD yang sama,
 * jadi SKD menjadi tes sendiri (`skd`). Tiap sekolah punya satu tes untuk seleksi
 * lanjutannya; seleksi administrasi dan alur lengkapnya ada di informasi seleksi
 * tes itu.
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
  tes: [skd, ipdn, pknStan],
};
