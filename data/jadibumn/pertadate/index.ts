import type { Tes } from '@/lib/skema';
import { pertadate2026 } from './a2026';

export const pertadate: Tes = {
  kode: 'pertadate',
  nama: 'Pertadate Pertamina',
  instansi: 'PT Pertamina (Persero)',
  kategori: 'BUMN',
  deskripsi:
    'Pertamina Talent Development Acceleration, jalur rekrutmen Pertamina. ' +
    'Materi pembelajaran berfokus pada tahapan Tes Online.',
  angkatan: [pertadate2026],
};
