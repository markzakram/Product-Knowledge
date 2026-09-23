import type { Platform } from '@/lib/skema';
import { tpa } from './tpa';

/**
 * JagoTPA.
 *
 * Belum ada dokumen kurikulum untuk platform ini di repo. Strukturnya
 * diturunkan dari paket TRYOUT di Markaz (dibaca 23 September 2026), jadi
 * berstatus 'indikasi' dan sumbernya berkeandalan 'asumsi'.
 *
 * Markaz juga memuat tryout "Tahap 3 Special Hire BI Tahun 2024 - 2025"
 * (Tes Psikologi). Itu sengaja tidak ditulis: hanya tahap ketiganya yang
 * punya tryout, jadi tahap sebelumnya tidak diketahui dan penomoran tahapan
 * di situs akan menyesatkan.
 */
export const jagotpa: Platform = {
  kode: 'JAGOTPA',
  nama: 'JagoTPA',
  slug: 'jagotpa',
  logo: 'logo/icon-jagotpa.png',
  deskripsi: 'Persiapan Tes Potensi Akademik.',
  tes: [tpa],
};
