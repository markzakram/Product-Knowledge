import type { Tes } from '@/lib/skema';
import { skdKedinasan2026 } from './a2026';

/**
 * SKD yang dipakai semua sekolah kedinasan. Berdiri sebagai tes sendiri; seleksi
 * lanjutan tiap sekolah ada di tesnya masing-masing (ipdn, pkn-stan).
 */
export const skd: Tes = {
  kode: 'skd',
  nama: 'SKD Sekolah Kedinasan',
  kategori: 'Sekolah Kedinasan',
  deskripsi:
    'Seleksi Kompetensi Dasar (SKD) yang dipakai semua sekolah kedinasan: TWK, TIU, dan ' +
    'TKP dikerjakan serentak dalam satu sesi dengan sistem CAT. Seleksi lanjutan ada di ' +
    'tes tiap sekolah.',
  angkatan: [skdKedinasan2026],
};
