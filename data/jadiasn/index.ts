import type { Platform } from '@/lib/skema';
import { cpns2026 } from './cpns/a2026';

export const jadiasn: Platform = {
  kode: 'JADIASN',
  nama: 'JadiASN',
  slug: 'jadiasn',
  deskripsi: 'Persiapan seleksi Calon Pegawai Negeri Sipil.',
  tes: [
    {
      kode: 'cpns',
      nama: 'CPNS',
      instansi: 'Kementerian PANRB dan BKN',
      kategori: 'Aparatur Sipil Negara',
      deskripsi:
        'Pengadaan Calon Pegawai Negeri Sipil. SKD memakai CAT BKN, ' +
        'SKB menyesuaikan jabatan dan instansi.',
      angkatan: [cpns2026],
    },
  ],
};
