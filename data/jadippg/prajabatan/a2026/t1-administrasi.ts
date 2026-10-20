import type { Tahapan } from '@/lib/skema';

export const tahapAdministrasi: Tahapan = {
  kode: 'administrasi',
  nama: 'Seleksi Administrasi',
  mode: 'online',
  deskripsi: `Tahap I: seleksi administrasi untuk menyeleksi kesesuaian data pendaftar dengan persyaratan administrasi. Dilakukan secara daring lewat aplikasi Sistem Informasi Manajemen Pengembangan Keprofesian Berkelanjutan (SIMPKB).

Menurut bagan alur seleksi, pendaftaran di SIMPKB mencakup pengisian data diri, esai, bidang studi, lokasi seleksi, dan preferensi lokasi pengabdian. Biaya pendaftaran seleksi Tahap I dan II sebesar Rp200.000 dibayarkan saat mendaftar di SIMPKB.`,
  status: 'terkonfirmasi',
  subtes: [],
};
