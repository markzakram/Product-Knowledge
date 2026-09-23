import type { Tahapan } from '@/lib/skema';
import { contohBahasaInggris, contohSektorJasaKeuangan, contohPenalaranInduktif } from './contoh';

/**
 * Tes Kemampuan Umum PCAM 9.
 *
 * Di Markaz tahap ini tersebar di tiga kategori tryout: "TKU (TBI & OJK)",
 * "TKU INTERAKTIF (PENALARAN DEDUKTIF & INDUKTIF)", dan "TKU (PENALARAN
 * INDUKTIF NON INTERAKTIF)". Ketiganya digabung di sini sebagai satu tahapan
 * karena semuanya berlabel Tahap 2.
 */
export const tahapTku: Tahapan = {
  kode: 'tku',
  nama: 'Tes Kemampuan Umum (TKU)',
  deskripsi:
    'Di Markaz tahap ini terbagi ke tiga kategori tryout: bahasa Inggris dan ' +
    'pengetahuan sektor jasa keuangan (TBI & OJK), penalaran deduktif dan ' +
    'induktif dalam format interaktif, serta penalaran induktif versi ' +
    'non-interaktif.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'bahasa-inggris',
      nama: 'Tes Kemampuan Bahasa Inggris',
      jumlahSoal: 30,
      contoh: contohBahasaInggris,
    },
    {
      kode: 'sektor-jasa-keuangan',
      nama: 'Tes Pengetahuan Sektor Jasa Keuangan',
      jumlahSoal: 50,
      contoh: contohSektorJasaKeuangan,
    },
    {
      kode: 'penalaran-deduktif',
      nama: 'Tes Penalaran Deduktif',
      jumlahSoal: 12,
      formatKetentuan:
        'Soal interaktif: menyusun jadwal dan mengurutkan pilihan, bukan ' +
        'memilih satu opsi.',
      catatan:
        'Contoh soal belum bisa ditampilkan: di Markaz soal interaktif tidak ' +
        'punya kunci berbentuk teks, jadi tidak bisa disalin ulang tanpa mengarang jawaban.',
    },
    {
      kode: 'penalaran-induktif',
      nama: 'Tes Penalaran Induktif',
      jumlahSoal: 15,
      formatKetentuan:
        'Soal interaktif: melengkapi urutan gambar. Markaz juga menyediakan ' +
        'versi non-interaktif dengan jumlah soal yang sama.',
      catatan: 'Contoh soal diambil dari versi non-interaktif.',
      contoh: contohPenalaranInduktif,
    },
  ],
};
