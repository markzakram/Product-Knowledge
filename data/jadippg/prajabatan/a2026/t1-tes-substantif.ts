import type { Tahapan } from '@/lib/skema';
import { contohLiterasi, contohNumerasi } from './contoh';

export const tahapTesSubstantif: Tahapan = {
  kode: 'tes-substantif',
  nama: 'Tes Substantif',
  status: 'indikasi',
  subtes: [
    {
      kode: 'literasi',
      nama: 'Literasi',
      jumlahSoal: 15,
      formatKetentuan:
        'Soal berbasis bacaan. Selain pilihan ganda, ada soal tabel: peserta ' +
        'menandai Setuju atau Tidak Setuju untuk tiap pernyataan.',
      catatan:
        'Contoh di sini hanya soal pilihan ganda. Tabel pernyataan pada soal ' +
        'tabel tidak tersimpan sebagai teks di Markaz, jadi tidak bisa disalin ulang.',
      contoh: contohLiterasi,
    },
    { kode: 'numerasi', nama: 'Numerasi', jumlahSoal: 15, contoh: contohNumerasi },
  ],
};
