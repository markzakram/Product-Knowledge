import type { Tes } from '@/lib/skema';
import { pcam9 } from './a9';

export const pcam: Tes = {
  kode: 'pcam',
  nama: 'PCAM OJK',
  instansi: 'Otoritas Jasa Keuangan',
  kategori: 'Lembaga Negara',
  deskripsi:
    'Program rekrutmen OJK yang di Markaz berlabel PCAM. Tiga tahap tes: ' +
    'Tes Potensi Dasar, Tes Kemampuan Umum, dan Tes Kepribadian.',
  angkatan: [pcam9],
};
