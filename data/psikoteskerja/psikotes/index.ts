import type { Tes } from '@/lib/skema';
import { psikotes2026 } from './a2026';

export const psikotes: Tes = {
  kode: 'psikotes',
  nama: 'Kumpulan Psikotes',
  kategori: 'Psikotes',
  deskripsi:
    'Tujuh psikotes untuk seleksi kerja: dua tes kepribadian (EPPS, Deskripsi Diri), dua tes ' +
    'kecepatan dan ketelitian (Ketelitian, Pauli), dan tiga tes menggambar (Baum, DAP, Wartegg).',
  angkatan: [psikotes2026],
};
