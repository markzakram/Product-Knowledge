import type { Tahapan } from '@/lib/skema';
import { epps } from './epps';
import { deskripsiDiri } from './deskripsi-diri';
import { ketelitian } from './ketelitian';
import { pauli } from './pauli';
import { baum } from './baum';
import { dap } from './dap';
import { wartegg } from './wartegg';

/**
 * Tujuh subtes psikotes kerja dalam SATU tahapan.
 *
 * Tes-tes ini tidak berurutan seperti tahap seleksi; urutan di daftar hanya
 * mengelompokkan jenisnya (kepribadian, kecepatan dan ketelitian, menggambar).
 * Karena itu semuanya dimasukkan ke satu tahapan, bukan tiga, supaya penomoran
 * "Tahap 1, 2, 3" di aplikasi tidak terbaca sebagai urutan pengerjaan.
 *
 * Hanya psikotes yang sudah ada di platform kita yang ditampilkan. Big Five,
 * Kraepelin, dan PAPI Kostick dikeluarkan 19 Oktober 2026 karena belum ada di
 * platform; berkasnya masih ada di riwayat git. Jangan menambah subtes lain
 * tanpa diminta.
 */
export const tahapPsikotes: Tahapan = {
  kode: 'psikotes',
  nama: 'Subtes Psikotes',
  deskripsi: `Tujuh subtes dalam tiga kelompok:
- Tes kepribadian (tidak ada jawaban benar atau salah): EPPS, Deskripsi Diri.
- Tes kecepatan dan ketelitian: Ketelitian, Pauli.
- Tes menggambar (proyektif): Baum Tree Test, Draw A Person, Wartegg.

Urutan di daftar hanya mengelompokkan jenis tes, bukan urutan pengerjaan.`,
  status: 'indikasi',
  subtes: [epps, deskripsiDiri, ketelitian, pauli, baum, dap, wartegg],
};
