import type { Tes } from '@/lib/skema';
import { dalamJabatan2026 } from './a2026';

export const dalamJabatan: Tes = {
  kode: 'dalam-jabatan',
  nama: 'PPG Dalam Jabatan',
  kategori: 'Pendidikan Profesi Guru',
  deskripsi:
    'Pendidikan Profesi Guru untuk guru yang sudah mengajar. Tryout di Markaz ' +
    'menyiapkan tes objektif Uji Kompetensi (UKPPPG).',
  angkatan: [dalamJabatan2026],
};
