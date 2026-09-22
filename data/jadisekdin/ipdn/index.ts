import type { Tes } from '@/lib/skema';
import { ipdn2026 } from './a2026';

export const ipdn: Tes = {
  kode: 'ipdn',
  nama: 'IPDN',
  instansi: 'Kementerian Dalam Negeri',
  kategori: 'Sekolah Kedinasan',
  deskripsi:
    'Institut Pemerintahan Dalam Negeri. Seleksi Penerimaan Calon Praja (SPCP) ' +
    'lewat jalur Pola Pembibitan.',
  angkatan: [ipdn2026],
};
