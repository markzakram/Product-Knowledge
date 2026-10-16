import type { Tahapan } from '@/lib/skema';

/** Tahap 4 PCAM 10. Dokumen riset hanya menyebut namanya di urutan seleksi (bagian 2.2). */
export const tahapKesehatan: Tahapan = {
  kode: 'kesehatan',
  nama: 'Tes Kesehatan',
  deskripsi:
    'Belum lengkap: dokumen riset hanya menyebut tahap ini di urutan seleksi (bagian 2.2), ' +
    'tanpa rincian pelaksanaan.',
  status: 'coming_soon',
  subtes: [],
};
