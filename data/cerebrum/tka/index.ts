import type { Tes } from '@/lib/skema';
import { tka2026 } from './a2026';

/**
 * Tes Kemampuan Akademik (TKA) jenjang SMA/MA/SMK di platform Cerebrum.
 *
 * Disusun dari "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum
 * Edukanesia Nusantara, Juni 2026). Didaftarkan ke platform di
 * data/cerebrum/index.ts (bukan di sini).
 */
export const tka: Tes = {
  kode: 'tka',
  nama: 'Tes Kemampuan Akademik (TKA)',
  instansi: 'Pemerintah (pedoman Kepmendikdasmen No. 95/M/2025)',
  kategori: 'Tes Akademik SMA/MA/SMK',
  deskripsi:
    'Penilaian terstandar capaian akademik murid oleh Pemerintah, berbasis komputer, untuk murid kelas ' +
    '12 SMA/MA/SMALB/Paket C dan SMK/MAK. Peserta mengerjakan 3 mata uji wajib (Bahasa Indonesia, ' +
    'Matematika, Bahasa Inggris) dan 2 mata uji pilihan, dengan tiga tipe soal: Pilihan Ganda, PGK ' +
    'Kategori, dan PGK MCMA. Data disusun dari laporan internal Product Management Cerebrum (Juni 2026): ' +
    'ketentuan, persyaratan, jadwal, kisi-kisi, dan 60 contoh soal mata uji wajib; mata uji pilihan baru ' +
    'berupa daftar nama.',
  angkatan: [tka2026],
};
