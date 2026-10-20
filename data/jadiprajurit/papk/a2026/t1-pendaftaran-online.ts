import type { Tahapan } from '@/lib/skema';

/** Pendaftaran Online (portal resmi Rekrutmen TNI / registrasi Pa PK). */
export const tahapPendaftaranOnline: Tahapan = {
  kode: 'pendaftaran-online',
  nama: 'Pendaftaran Online',
  mode: 'online',
  deskripsi: `Peserta membuat akun, mengisi data diri dan pendidikan, memilih atau mengisi formasi yang tersedia, lalu mencetak formulir registrasi sesuai petunjuk portal.

Bukan tes tertulis, tidak ada bank soal. Jadwal pendaftaran, syarat pendidikan, dan daftar program studi ada di bagian Informasi seleksi.`,
  status: 'terkonfirmasi',
  subtes: [],
};
