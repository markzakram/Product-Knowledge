import type { Platform } from '@/lib/skema';
import { prajabatan } from './prajabatan';
import { dalamJabatan } from './dalam-jabatan';

/**
 * JadiPPG.
 *
 * Susunan seleksi, persyaratan, jadwal, dan materi tes mengacu dokumen
 * "JadiPPG - Riset dan Kurikulum Program PPG 2026" (Product Management, Juli
 * 2026), jadi berstatus 'terkonfirmasi'. Contoh soal berasal dari paket TRYOUT
 * di Markaz (dibaca 23 September 2026), sumbernya berkeandalan 'asumsi'.
 *
 * Markaz juga menyimpan puluhan kategori "Bidang Studi ..." (2024–2025) dan
 * tryout PPG 2024–2025. Yang ditulis hanya kategori 2026, supaya susunan
 * lama tidak terbaca sebagai yang berlaku.
 */
export const jadippg: Platform = {
  kode: 'JADIPPG',
  nama: 'JadiPPG',
  slug: 'jadippg',
  logo: 'logo/icon-jadippg.png',
  deskripsi: 'Persiapan seleksi dan uji kompetensi Pendidikan Profesi Guru.',
  tes: [prajabatan, dalamJabatan],
};
