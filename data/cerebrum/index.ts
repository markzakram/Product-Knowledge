import type { Platform } from '@/lib/skema';
import { tka } from './tka';
import { utbk } from './utbk-snbt';

/**
 * Cerebrum.
 *
 * Isi: UTBK-SNBT (data/cerebrum/utbk-snbt) dan TKA (data/cerebrum/tka). Tiap tes ditulis di
 * foldernya sendiri dan didaftarkan di daftar `tes` di bawah; urutannya adalah urutan tampil.
 */
export const cerebrum: Platform = {
  kode: 'CEREBRUM',
  nama: 'Cerebrum',
  slug: 'cerebrum',
  logo: 'logo/icon-cerebrum.png',
  tes: [utbk, tka],
};
