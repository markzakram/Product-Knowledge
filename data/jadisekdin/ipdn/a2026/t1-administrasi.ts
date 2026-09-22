import type { Tahapan } from '@/lib/skema';

/** Tahap awal, memeriksa berkas dan syarat pendaftaran. */
export const tahapAdministrasi: Tahapan = {
  kode: 'administrasi',
  nama: 'Seleksi Administrasi',
  mode: 'online',
  deskripsi:
    'Verifikasi berkas pendaftaran. Peserta yang lolos berhak mengikuti SKD.',
  status: 'terkonfirmasi',
  subtes: [],
};
