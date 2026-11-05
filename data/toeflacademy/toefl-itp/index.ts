import type { Tes } from '@/lib/skema';
import { itp2026 } from './a2026';

export const toeflItp: Tes = {
  kode: 'toefl-itp',
  nama: 'TOEFL ITP',
  instansi: 'ETS (format); latihan TOEFL Academy',
  kategori: 'Tes Bahasa Inggris',
  deskripsi:
    'Tes kemampuan bahasa Inggris tiga bagian: Listening Comprehension, Structure and Written Expression, dan Reading Comprehension.',
  angkatan: [itp2026],
};
