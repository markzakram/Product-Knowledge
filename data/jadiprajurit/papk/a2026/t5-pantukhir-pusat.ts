import type { Tahapan } from '@/lib/skema';

/**
 * Sidang Pantukhir Pusat.
 *
 * Status 'terkonfirmasi' hanya untuk kedudukannya sebagai tahap akhir
 * (publikasi resmi TNI untuk Pa PK Gelombang I TA 2026). Mekanisme internal
 * penetapan kelulusan dan matra tidak dipublikasikan.
 */
export const tahapPantukhirPusat: Tahapan = {
  kode: 'pantukhir-pusat',
  nama: 'Sidang Pantukhir Pusat',
  deskripsi: `Tahap akhir seleksi Pa PK dan tahap penentuan akhir kelulusan peserta. Sidang melibatkan unsur pimpinan dari ketiga matra (TNI AD, TNI AL, dan TNI AU).

Rumus, bobot, atau prioritas penentuan kelulusan dan matra tidak dipublikasikan, jangan menyampaikannya sebagai kepastian. Bukan tes tertulis, tidak ada bank soal.`,
  status: 'terkonfirmasi',
  subtes: [],
};
