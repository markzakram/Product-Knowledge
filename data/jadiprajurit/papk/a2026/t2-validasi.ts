import type { Tahapan } from '@/lib/skema';

/**
 * Validasi / daftar ulang.
 *
 * Status 'indikasi': urutannya diambil dari rangkuman pengalaman seleksi
 * sebelumnya (sumber sekunder), bukan dari pengumuman resmi gelombang 2026.
 */
export const tahapValidasi: Tahapan = {
  kode: 'validasi',
  nama: 'Validasi / Daftar Ulang',
  mode: 'offline',
  deskripsi: `Menurut rangkuman pengalaman seleksi sebelumnya, validasi berjalan seperti ini:
1. Datang ke lokasi validasi dengan membawa berkas asli dan salinan sesuai petunjuk.
2. Pemeriksaan berkas: kelengkapan dan kecocokan data.
3. Pemeriksaan fisik awal: tinggi dan berat badan sesuai ketentuan.
4. Dokumentasi atau foto, mengikuti arahan petugas.
5. Nomor peserta atau informasi lanjutan lewat kanal yang ditetapkan panitia.

Urutan dan bentuk pelaksanaannya dapat berbeda antardaerah. Bukan tes tertulis, tidak ada bank soal.`,
  status: 'indikasi',
  subtes: [],
};
