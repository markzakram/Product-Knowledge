import type { Tahapan } from '@/lib/skema';
import { contohKemampuanUmum, contohPenalaranNumerik } from './contoh';

/**
 * Tes Potensi Dasar PCAM 9.
 *
 * Kategori tryout Tahap 1 di Markaz berisi 60 paket dalam tiga seri, tapi
 * hanya seri "Tes Potensi Dasar" (20 paket, kedua subtes dalam satu paket)
 * yang AKTIF. Seri "Kemampuan Umum TPD" (36 soal) dan "Penalaran Numerik"
 * (10 soal) nonaktif saat dibaca, jadi tidak dijadikan acuan. Susunan seri
 * aktif itu sama persis dengan tryout Tahap 1 PCAM 10.
 */
export const tahapTpd: Tahapan = {
  kode: 'tpd',
  nama: 'Tes Potensi Dasar (TPD)',
  deskripsi:
    'Jumlah soal mengikuti seri tryout "Tes Potensi Dasar" di Markaz, yang ' +
    'menggabungkan kedua subtes dalam satu paket.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'kemampuan-umum',
      nama: 'Kemampuan Umum',
      jumlahSoal: 12,
      formatKetentuan:
        'Di tryout Markaz berisi soal figural (pola gambar, pilihan jawaban ' +
        'ada di dalam gambar), hitungan soal cerita, dan logika.',
      contoh: contohKemampuanUmum,
    },
    {
      kode: 'penalaran-numerik',
      nama: 'Penalaran Numerik',
      jumlahSoal: 10,
      contoh: contohPenalaranNumerik,
    },
  ],
};
