import type { Tes } from '@/lib/skema';
import { pcam9 } from './a9';
import { pcam10 } from './a10';

export const pcam: Tes = {
  kode: 'pcam',
  nama: 'PCAM OJK',
  instansi: 'Otoritas Jasa Keuangan',
  kategori: 'Lembaga Negara',
  deskripsi:
    'Program rekrutmen OJK yang di Markaz berlabel PCAM. PCAM 9 (dari tryout Markaz): ' +
    'tiga tahap tes, yaitu Tes Potensi Dasar, Tes Kemampuan Umum, dan Tes Kepribadian. ' +
    'PCAM 10 (dari dokumen riset): lima tahap menurut urutan seleksi, baru Tahap 1 yang lengkap.',
  angkatan: [pcam9, pcam10],
};
