import type { Tes } from '@/lib/skema';
import { sekolahRakyat2026 } from './a2026';

export const sekolahRakyat: Tes = {
  kode: 'sekolah-rakyat',
  nama: 'PPPK Sekolah Rakyat',
  instansi: 'Kementerian Sosial',
  kategori: 'Aparatur Sipil Negara',
  deskripsi:
    'Pengadaan PPPK Guru dan Tenaga Kependidikan Sekolah Rakyat tingkat ' +
    'instansi di lingkungan Kementerian Sosial. Seleksi terdiri atas seleksi ' +
    'administrasi, seleksi kompetensi CAT BKN, dan seleksi kompetensi tambahan.',
  angkatan: [sekolahRakyat2026],
};
