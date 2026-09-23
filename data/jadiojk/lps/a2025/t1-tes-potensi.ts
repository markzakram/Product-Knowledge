import type { Tahapan } from '@/lib/skema';
import { contohHubunganKata, contohAngka, contohGabunganBagian, contohAbstrak } from './contoh';

export const tahapTesPotensi: Tahapan = {
  kode: 'tes-potensi',
  nama: 'Tes Potensi',
  status: 'indikasi',
  subtes: [
    { kode: 'hubungan-kata', nama: 'Hubungan Kata', jumlahSoal: 35, contoh: contohHubunganKata },
    { kode: 'angka', nama: 'Angka', jumlahSoal: 32, contoh: contohAngka },
    { kode: 'gabungan-bagian', nama: 'Gabungan Bagian', jumlahSoal: 20, contoh: contohGabunganBagian },
    { kode: 'abstrak', nama: 'Abstrak', jumlahSoal: 29, contoh: contohAbstrak },
  ],
};
