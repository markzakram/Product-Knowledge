import type { Tahapan } from '@/lib/skema';
import { subtesUkp } from '../subtes';

/**
 * Ujian daring CAT Tingkat C. Semua materi dikerjakan dalam satu sesi 210 menit
 * (3,5 jam), sehingga `waktuBersama`; jumlah soal belum diumumkan resmi.
 */
export const ujianTingkatC: Tahapan = {
  kode: 'ujian',
  nama: 'Ujian',
  status: 'indikasi',
  waktuBersama: true,
  subtes: subtesUkp('C'),
};
