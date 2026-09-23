import type { Tes } from '@/lib/skema';
import { lps2025 } from './a2025';

export const lps: Tes = {
  kode: 'lps',
  nama: 'LPS',
  instansi: 'Lembaga Penjamin Simpanan',
  kategori: 'Lembaga Negara',
  deskripsi:
    'Rekrutmen Lembaga Penjamin Simpanan. Tiga tahap tes: Tes Potensi, ' +
    'Psikotes, dan Tes Bahasa Inggris.',
  angkatan: [lps2025],
};
