import type { Platform } from '@/lib/skema';
import { toeflItp } from './toefl-itp';

/**
 * TOEFL Academy.
 *
 * Latihan TOEFL ITP. Format dan skala dicocokkan ke halaman ETS; soal contoh
 * berasal dari Toefl Generator (buatan AI, draft). Contoh Listening menunggu
 * pemutar audio di Product Knowledge.
 */
export const toeflacademy: Platform = {
  kode: 'TOEFLACADEMY',
  nama: 'TOEFL Academy',
  slug: 'toeflacademy',
  logo: 'logo/icon-toeflacademy.png',
  deskripsi: 'Latihan TOEFL ITP: Listening, Structure and Written Expression, dan Reading.',
  tes: [toeflItp],
};
