import type { Tes } from '@/lib/skema';
import { prajabatan2026 } from './a2026';

export const prajabatan: Tes = {
  kode: 'prajabatan',
  nama: 'PPG Prajabatan',
  kategori: 'Pendidikan Profesi Guru',
  deskripsi:
    'Pendidikan Profesi Guru untuk calon guru yang belum mengajar. Tes ' +
    'substantif berisi literasi dan numerasi.',
  angkatan: [prajabatan2026],
};
