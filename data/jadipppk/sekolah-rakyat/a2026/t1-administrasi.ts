import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi administrasi PPPK Sekolah Rakyat. Tidak punya bank soal: persyaratan
 * dan jadwalnya ada di Informasi seleksi pada halaman angkatan.
 */
export const tahapAdministrasi: Tahapan = {
  kode: 'administrasi',
  nama: 'Seleksi Administrasi',
  deskripsi:
    'Tahap pertama untuk PPPK Guru maupun Tenaga Kependidikan. Pelamar Guru ' +
    'berasal dari lulusan PPG Prajabatan atau PPG Calon Guru; pelamar Tendik ' +
    'berasal dari PPPK paruh waktu di lingkungan Kementerian Sosial dan ' +
    'pelamar umum. Persyaratan lengkap dan jadwal tentatifnya (pendaftaran, ' +
    'seleksi administrasi, masa sanggah) ada di Informasi seleksi.',
  status: 'terkonfirmasi',
  subtes: [],
};
