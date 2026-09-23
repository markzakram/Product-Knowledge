import type { Tahapan } from '@/lib/skema';
import { contohStructure, contohErrorRecognition, contohReading } from './contoh';

export const tahapBahasaInggris: Tahapan = {
  kode: 'bahasa-inggris',
  nama: 'Tes Bahasa Inggris',
  status: 'indikasi',
  subtes: [
    { kode: 'structure', nama: 'Structure and Written Expression', jumlahSoal: 20, contoh: contohStructure },
    {
      kode: 'error-recognition',
      nama: 'Error Recognition',
      jumlahSoal: 20,
      formatKetentuan:
        'Pilihan jawabannya adalah bagian kalimat yang ditandai (A) sampai (D); ' +
        'peserta memilih bagian yang salah.',
      contoh: contohErrorRecognition,
    },
    { kode: 'reading', nama: 'Reading Comprehension', jumlahSoal: 45, contoh: contohReading },
  ],
};
