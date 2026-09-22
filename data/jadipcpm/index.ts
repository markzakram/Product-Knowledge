import type { Platform } from '@/lib/skema';
import { pcpmBI } from './pcpm-bi';

export const jadipcpm: Platform = {
  kode: 'JADIPCPM',
  nama: 'JadiPCPM',
  slug: 'jadipcpm',
  deskripsi: 'Persiapan seleksi Pendidikan Calon Pegawai Asisten Manajer Bank Indonesia.',
  tes: [pcpmBI],
};
