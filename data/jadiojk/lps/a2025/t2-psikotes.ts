import type { Tahapan } from '@/lib/skema';
import { contohPsikotes1, contohPsikotes2 } from './contoh';

/**
 * Markaz hanya menamai bagiannya "Psikotes 1" dan "Psikotes 2", tanpa
 * menyebut jenis tesnya. Nama itu dipertahankan apa adanya; menggantinya
 * dengan dugaan nama tes berarti mengarang. Yang ditulis hanya bentuk soal
 * yang terlihat di paket tryout-nya.
 */
export const tahapPsikotes: Tahapan = {
  kode: 'psikotes',
  nama: 'Psikotes',
  status: 'indikasi',
  subtes: [
    {
      kode: 'psikotes-1',
      nama: 'Psikotes 1',
      jumlahSoal: 40,
      formatKetentuan:
        'Pernyataan dengan lima pilihan, dari Sangat Setuju sampai Sangat Tidak ' +
        'Setuju. Di tryout Markaz tiap pilihan diberi poin 1 sampai 5.',
      contoh: contohPsikotes1,
    },
    {
      kode: 'psikotes-2',
      nama: 'Psikotes 2',
      jumlahSoal: 40,
      formatKetentuan:
        'Soal situasi kerja dengan lima pilihan tindakan. Di tryout Markaz tiap ' +
        'pilihan diberi poin 1 sampai 5; tidak ada jawaban salah, yang ada ' +
        'jawaban berskor tertinggi.',
      contoh: contohPsikotes2,
    },
  ],
};
