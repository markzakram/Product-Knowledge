import type { Tes } from '@/lib/skema';
import { tpa2026 } from './a2026';

export const tpa: Tes = {
  kode: 'tpa',
  nama: 'Tes Potensi Akademik (TPA)',
  kategori: 'Tes Potensi Akademik',
  deskripsi:
    'Tes potensi akademik tiga bagian: verbal, kuantitatif, dan penalaran. ' +
    'Penilaian tryout-nya di Markaz memakai templat nilai "TPA Bappenas".',
  angkatan: [tpa2026],
};
