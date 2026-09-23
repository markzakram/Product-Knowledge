import type { Tahapan } from '@/lib/skema';
import { contohVerbal, contohKuantitatif, contohPenalaran } from './contoh';

export const tahapTpa: Tahapan = {
  kode: 'tpa',
  nama: 'Tes Potensi Akademik',
  status: 'indikasi',
  subtes: [
    { kode: 'verbal', nama: 'Verbal', jumlahSoal: 90, contoh: contohVerbal },
    { kode: 'kuantitatif', nama: 'Kuantitatif', jumlahSoal: 90, contoh: contohKuantitatif },
    { kode: 'penalaran', nama: 'Penalaran', jumlahSoal: 70, contoh: contohPenalaran },
  ],
};
