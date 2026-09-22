import type { Tahapan } from '@/lib/skema';

export const tahapKesehatanAwal: Tahapan = {
  kode: 'kesehatan-awal',
  nama: 'Tes Kesehatan Awal',
  mode: 'offline',
  deskripsi: 'Pemeriksaan kesehatan tahap pertama. Bukan tes tertulis, tidak ada bank soal.',
  status: 'terkonfirmasi',
  subtes: [],
};
