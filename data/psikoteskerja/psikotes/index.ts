import type { Tes } from '@/lib/skema';
import { psikotes2026 } from './a2026';

export const psikotes: Tes = {
  kode: 'psikotes',
  nama: 'Kumpulan Psikotes',
  kategori: 'Psikotes',
  deskripsi:
    'Sepuluh psikotes untuk seleksi kerja: empat tes kepribadian (Big Five, EPPS, PAPI Kostick, ' +
    'Deskripsi Diri), tiga tes kecepatan dan ketelitian (Ketelitian, Kraepelin, Pauli), dan tiga ' +
    'tes menggambar (Baum, DAP, Wartegg).',
  angkatan: [psikotes2026],
};
