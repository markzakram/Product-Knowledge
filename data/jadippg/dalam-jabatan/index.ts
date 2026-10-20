import type { Tes } from '@/lib/skema';
import { dalamJabatan2026 } from './a2026';

export const dalamJabatan: Tes = {
  kode: 'dalam-jabatan',
  nama: 'PPG Dalam Jabatan',
  kategori: 'Pendidikan Profesi Guru',
  deskripsi:
    'Pendidikan Profesi Guru untuk guru aktif yang belum memiliki sertifikat ' +
    'pendidik (Guru Tertentu). Uji Kompetensi (UKPPPG) terdiri atas ujian tertulis ' +
    '(tes objektif PCK dan SJT, tes subjektif) dan ujian kinerja. Tryout di Markaz ' +
    'menyiapkan tes objektifnya.',
  angkatan: [dalamJabatan2026],
};
