import type { Tahapan } from '@/lib/skema';
import { subtesUkp } from '../subtes';

/**
 * Ujian daring CAT Tingkat A. Semua materi dikerjakan dalam satu sesi 210 menit
 * (3,5 jam), sehingga `waktuBersama`; jumlah soal belum diumumkan resmi.
 */
export const ujianTingkatA: Tahapan = {
  kode: 'ujian',
  nama: 'Ujian',
  status: 'indikasi',
  waktuBersama: true,
  subtes: subtesUkp('A'),
};
