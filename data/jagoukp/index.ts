import type { Platform } from '@/lib/skema';
import { ukp } from './ukp';

/**
 * JagoUKP.
 *
 * Isi diturunkan dari dokumen resmi BPPK (Pengumuman PENG-7/PP/2026 dan
 * Cakupan Materi UKP 2026) lewat UKP Generator. Logonya sementara: belum ada
 * logo aplikasi JagoUKP, jadi dipotong dari ikon "Latihan Soal" pada lembar
 * ikon berwarna brand.
 */
export const jagoukp: Platform = {
  kode: 'JAGOUKP',
  nama: 'JagoUKP',
  slug: 'jagoukp',
  logo: 'logo/icon-jagoukp.png',
  deskripsi: 'Persiapan Uji Kompetensi Perpajakan (UKP) Tingkat A, B, dan C.',
  tes: [ukp],
};
