import type { Tahapan } from '@/lib/skema';
import { contohPedagogik, contohSjt } from './contoh';

export const tahapUkpppg: Tahapan = {
  kode: 'ukpppg',
  nama: 'Tes Objektif UKPPPG',
  status: 'indikasi',
  subtes: [
    {
      kode: 'pedagogik',
      nama: 'Pedagogik',
      jumlahSoal: 35,
      formatKetentuan:
        'Tiga bentuk soal di tryout Markaz: pilihan ganda satu jawaban, pilihan ' +
        'jamak ("pilih semua jawaban yang benar"), dan tabel.',
      catatan:
        'Paket tryout sebelum Juli 2026 berisi 30 soal. Contoh di sini hanya ' +
        'pilihan ganda satu jawaban: kunci soal pilihan jamak dan tabel tidak ' +
        'tersimpan di kolom kunci Markaz.',
      contoh: contohPedagogik,
    },
    {
      kode: 'sjt',
      nama: 'Situational Judgement Test (SJT)',
      jumlahSoal: 30,
      formatKetentuan:
        'Soal situasi kelas dengan lima pilihan tindakan. Di tryout Markaz tiap ' +
        'pilihan diberi skor 1 sampai 5; tidak ada jawaban salah, yang ada ' +
        'jawaban berskor tertinggi.',
      catatan: 'Paket tryout sebelum Juli 2026 berisi 20 soal.',
      contoh: contohSjt,
    },
  ],
};
