import type { Tahapan } from '@/lib/skema';
import { contohTeknis, contohManajerial, contohSosialKultural, contohWawancara } from './contoh';

const SKALA_EMPAT =
  'Soal situasional dengan empat pilihan. Di tryout Markaz tiap pilihan ' +
  'diberi poin 1 sampai 4; tidak ada jawaban salah, yang ada jawaban berskor tertinggi.';

/**
 * Seleksi Kompetensi PPPK.
 *
 * Kompetensi teknis punya paket tryout TERPISAH untuk tiap jabatan (guru SD,
 * guru PPKN, tenaga kependidikan, bidan, perawat, dan seterusnya), masing-
 * masing 90 soal. Tiga subtes lainnya sama untuk semua jabatan.
 */
export const tahapSeleksiKompetensi: Tahapan = {
  kode: 'seleksi-kompetensi',
  nama: 'Seleksi Kompetensi',
  deskripsi:
    'Kompetensi teknis berbeda untuk tiap jabatan; manajerial, sosial ' +
    'kultural, dan wawancara sama untuk semua jabatan.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'teknis',
      nama: 'Kompetensi Teknis',
      jumlahSoal: 90,
      catatan:
        'Materi mengikuti jabatan yang dilamar. Markaz menyediakan tryout ' +
        'teknis per jabatan, dikelompokkan per bidang (mis. pendidikan, ' +
        'kesehatan). Contoh soal di sini dari paket Guru SD.',
      contoh: contohTeknis,
    },
    {
      kode: 'manajerial',
      nama: 'Kompetensi Manajerial',
      jumlahSoal: 25,
      formatKetentuan: SKALA_EMPAT,
      contoh: contohManajerial,
    },
    {
      kode: 'sosial-kultural',
      nama: 'Kompetensi Sosial Kultural',
      jumlahSoal: 20,
      formatKetentuan: SKALA_EMPAT,
      contoh: contohSosialKultural,
    },
    {
      kode: 'wawancara',
      nama: 'Wawancara',
      jumlahSoal: 10,
      formatKetentuan: `Di tryout Markaz berbentuk soal tertulis, bukan wawancara lisan. ${SKALA_EMPAT}`,
      contoh: contohWawancara,
    },
  ],
};
