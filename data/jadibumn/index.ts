import type { Platform } from '@/lib/skema';
import { kai } from './kai';
import { pertadate } from './pertadate';

/**
 * JadiBUMN.
 *
 * Baru dua tes yang ditulis: PT KAI dan Pertadate Pertamina. Markaz punya
 * bank soal untuk tes bersama BUMN (TKD dan Core Values AKHLAK), Telkom, dan
 * Mind.id, tapi tes-tes itu belum punya dokumen kurikulum di repo sehingga
 * strukturnya belum bisa ditulis tanpa menebak.
 */
export const jadibumn: Platform = {
  kode: 'JADIBUMN',
  nama: 'JadiBUMN',
  slug: 'jadibumn',
  logo: 'logo/icon-jadibumn.png',
  deskripsi: 'Persiapan seleksi rekrutmen Badan Usaha Milik Negara.',
  tes: [kai, pertadate],
};
