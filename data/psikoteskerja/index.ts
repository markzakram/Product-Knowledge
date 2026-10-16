import type { Platform } from '@/lib/skema';
import { psikotes } from './psikotes';

/**
 * Psikotes Kerja.
 *
 * Isinya disusun dari draft prototipe di folder Draft Prototype, bukan dari
 * dokumen kurikulum atau pengumuman resmi, jadi berstatus 'indikasi' dan
 * sumbernya berkeandalan 'asumsi'.
 */
export const psikoteskerja: Platform = {
  kode: 'PSIKOTESKERJA',
  nama: 'Psikotes Kerja',
  slug: 'psikoteskerja',
  logo: 'logo/icon-psikoteskerja.png',
  deskripsi: 'Sarana latihan dan gambaran pelaksanaan psikotes untuk seleksi kerja: tes kepribadian, tes kecepatan dan ketelitian, serta tes menggambar.',
  tes: [psikotes],
};
