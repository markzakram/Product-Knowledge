import type { Platform } from '@/lib/skema';
import { pppk } from './pppk';
import { sekolahRakyat } from './sekolah-rakyat';

/**
 * JadiPPPK.
 *
 * PPPK umum: belum ada dokumen kurikulum di repo. Strukturnya diturunkan dari
 * paket TRYOUT di Markaz (dibaca 23 September 2026), jadi berstatus 'indikasi'
 * dan sumbernya berkeandalan 'asumsi'.
 *
 * PPPK Sekolah Rakyat: disusun dari dokumen riset dan kurikulum Product
 * Management (Juni dan Juli 2026), bukan dari Markaz.
 *
 * Markaz JadiPPPK juga memuat "Tryout SKD 2027" dan tryout Badan Gizi
 * Nasional 2025. Keduanya tidak ditulis di sini: SKD adalah seleksi CPNS
 * (sudah ada di JadiASN), dan BGN adalah rekrutmen satu instansi yang
 * susunannya berbeda dari seleksi PPPK umum.
 */
export const jadipppk: Platform = {
  kode: 'JADIPPPK',
  nama: 'JadiPPPK',
  slug: 'jadipppk',
  logo: 'logo/icon-jadipppk.png',
  deskripsi: 'Persiapan seleksi Pegawai Pemerintah dengan Perjanjian Kerja.',
  tes: [pppk, sekolahRakyat],
};
