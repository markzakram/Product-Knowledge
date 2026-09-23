import type { Tes } from '@/lib/skema';
import { pppk2026 } from './a2026';

export const pppk: Tes = {
  kode: 'pppk',
  nama: 'PPPK',
  instansi: 'Kementerian PANRB dan BKN',
  kategori: 'Aparatur Sipil Negara',
  deskripsi:
    'Pengadaan Pegawai Pemerintah dengan Perjanjian Kerja. Seleksi kompetensi ' +
    'terdiri dari kompetensi teknis sesuai jabatan, manajerial, sosial ' +
    'kultural, dan wawancara.',
  angkatan: [pppk2026],
};
