import type { Platform } from '@/lib/skema';
import { papk } from './papk';

/**
 * JadiPrajurit.
 *
 * Baru satu tes yang ditulis: Perwira Prajurit Karier (Pa PK) TNI, disusun dari
 * dokumen "Riset Seleksi Pa PK 2026" (Product Management, September 2026).
 * Jalur TNI lain (Taruna Akademi, Bintara, Tamtama, Pa PSDP Penerbang) hanya
 * disinggung sebagai pembanding di informasi seleksi Pa PK; belum punya
 * dokumen riset sendiri, jadi belum ditulis sebagai tes.
 */
export const jadiprajurit: Platform = {
  kode: 'JADIPRAJURIT',
  nama: 'JadiPrajurit',
  slug: 'jadiprajurit',
  logo: 'logo/icon-jadiprajurit.png',
  deskripsi: 'Persiapan seleksi penerimaan prajurit Tentara Nasional Indonesia.',
  tes: [papk],
};
