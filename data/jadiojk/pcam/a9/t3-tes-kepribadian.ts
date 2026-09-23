import type { Tahapan } from '@/lib/skema';
import { contohKepribadian } from './contoh';

export const tahapKepribadian: Tahapan = {
  kode: 'kepribadian',
  nama: 'Tes Kepribadian',
  status: 'indikasi',
  subtes: [
    {
      kode: 'kepribadian',
      nama: 'Tes Kepribadian',
      jumlahSoal: 50,
      formatKetentuan:
        'Pernyataan dengan lima pilihan, dari Sangat Setuju sampai Sangat Tidak ' +
        'Setuju. Di tryout Markaz tiap pilihan diberi poin 1 sampai 5; tidak ada ' +
        'jawaban salah, yang ada jawaban berskor tertinggi.',
      contoh: contohKepribadian,
    },
  ],
};
