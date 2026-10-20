import type { Tes } from '@/lib/skema';
import { prajabatan2026 } from './a2026';

export const prajabatan: Tes = {
  kode: 'prajabatan',
  nama: 'PPG Prajabatan',
  kategori: 'Pendidikan Profesi Guru',
  deskripsi:
    'Pendidikan Profesi Guru untuk lulusan S-1/D-IV yang belum terdaftar sebagai ' +
    'guru. Seleksi tiga tahap: administrasi, tes substantif (literasi, numerasi, ' +
    'penguasaan konten), dan wawancara.',
  angkatan: [prajabatan2026],
};
