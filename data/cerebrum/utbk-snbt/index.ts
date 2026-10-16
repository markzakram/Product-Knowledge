import type { Tes } from '@/lib/skema';
import { utbk2027 } from './a2027';

/**
 * UTBK-SNBT di platform Cerebrum.
 *
 * Disusun dari "Kurikulum UTBK-SNBT 2027" (Product Management PT Cerebrum Edukanesia Nusantara,
 * September 2026) dan dua dokumen contoh soal internal. Didaftarkan ke platform di
 * data/cerebrum/index.ts (bukan di sini).
 */
export const utbk: Tes = {
  kode: 'utbk-snbt',
  nama: 'UTBK-SNBT',
  instansi: 'SNPMB (Seleksi Nasional Penerimaan Mahasiswa Baru)',
  kategori: 'Seleksi Masuk Perguruan Tinggi Negeri',
  deskripsi:
    'Ujian Tulis Berbasis Komputer (UTBK) untuk jalur Seleksi Nasional Berdasarkan Tes (SNBT) ' +
    'masuk perguruan tinggi negeri. Tujuh subtes dalam dua kelompok: Tes Potensi Skolastik ' +
    '(Penalaran Umum, Pengetahuan dan Pemahaman Umum, Pemahaman Bacaan dan Menulis, Pengetahuan ' +
    'Kuantitatif) dan Tes Literasi (Literasi Bahasa Indonesia, Literasi Bahasa Inggris, Penalaran ' +
    'Matematika). Data 2027 adalah proyeksi dari framework resmi 2026, lengkap dengan kisi-kisi ' +
    'dan contoh soal.',
  angkatan: [utbk2027],
};
