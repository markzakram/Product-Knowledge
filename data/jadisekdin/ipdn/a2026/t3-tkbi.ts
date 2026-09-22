import type { Tahapan } from '@/lib/skema';

/**
 * Tes Kemampuan Bahasa Inggris IPDN.
 *
 * Angka tryout dan latsol diambil dari "Sekdin - Mapping Seleksi Lanjutan".
 * Bank soalnya berbagi dengan Toefl Academy, jadi ketersediaannya sudah tinggi.
 */
export const tahapTkbi: Tahapan = {
  kode: 'tkbi',
  nama: 'Tes Kemampuan Bahasa Inggris (TKBI)',
  mode: 'online',
  deskripsi: 'Mengikuti format TOEFL Prediction/ITP.',
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'listening',
      nama: 'Listening Comprehension',
      jumlahSoal: 50,
      waktuMenit: 35,
      formatKetentuan: 'Short conversation 30 soal, long conversation 8 soal, lecture 12 soal.',
      materi: [
        { nama: 'Short conversation', catatan: '30 soal per paket' },
        { nama: 'Long conversation', catatan: '8 soal per paket' },
        { nama: 'Lecture', catatan: '12 soal per paket' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 790, status: 'selesai',
          catatan: 'Tersedia adalah jumlah gabungan short conversation 440, long conversation 190, dan lecture 160 di SIADU.' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'structure',
      nama: 'Structure and Written Expression',
      jumlahSoal: 40,
      waktuMenit: 25,
      formatKetentuan: 'Structure 15 soal, written expression 25 soal.',
      materi: [
        { nama: 'Structure', catatan: '15 soal per paket' },
        { nama: 'Written Expression', catatan: '25 soal per paket' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 40, dibutuhkan: 400, tersedia: 1040, status: 'selesai',
          catatan: 'Tersedia adalah gabungan structure 521 dan written expression 519 di SIADU.' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
    {
      kode: 'reading',
      nama: 'Reading Comprehension',
      jumlahSoal: 50,
      waktuMenit: 55,
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 914, status: 'selesai' },
        { tipe: 'latsol', paket: 5, soalPerPaket: 10, dibutuhkan: 50, status: 'berjalan' },
      ],
    },
  ],
};
