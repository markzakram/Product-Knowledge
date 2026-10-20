import type { Tes } from '@/lib/skema';
import { papk2026 } from './a2026';

export const papk: Tes = {
  kode: 'papk',
  nama: 'Pa PK TNI',
  instansi: 'Tentara Nasional Indonesia',
  kategori: 'TNI',
  deskripsi:
    'Perwira Prajurit Karier (Pa PK) TNI, jalur penerimaan perwira bagi lulusan ' +
    'perguruan tinggi (D4, S1, S1 Profesi, S2) dari program studi yang dibutuhkan TNI.',
  angkatan: [papk2026],
};
