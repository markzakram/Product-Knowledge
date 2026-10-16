import type { Tahapan } from '@/lib/skema';
import { bigFive } from './big-five';
import { epps } from './epps';
import { papiKostick } from './papi-kostick';
import { deskripsiDiri } from './deskripsi-diri';
import { ketelitian } from './ketelitian';
import { kraepelin } from './kraepelin';
import { pauli } from './pauli';
import { baum } from './baum';
import { dap } from './dap';
import { wartegg } from './wartegg';

/**
 * Sepuluh subtes psikotes kerja dalam SATU tahapan.
 *
 * Tes-tes ini tidak berurutan seperti tahap seleksi; urutan di daftar hanya
 * mengelompokkan jenisnya (kepribadian, kecepatan dan ketelitian, menggambar).
 * Karena itu semuanya dimasukkan ke satu tahapan, bukan tiga, supaya penomoran
 * "Tahap 1, 2, 3" di aplikasi tidak terbaca sebagai urutan pengerjaan.
 */
export const tahapPsikotes: Tahapan = {
  kode: 'psikotes',
  nama: 'Subtes Psikotes',
  deskripsi: `Sepuluh subtes dalam tiga kelompok:
- Tes kepribadian (tidak ada jawaban benar atau salah): Big Five, EPPS, PAPI Kostick, Deskripsi Diri.
- Tes kecepatan dan ketelitian: Ketelitian, Kraepelin, Pauli.
- Tes menggambar (proyektif): Baum Tree Test, Draw A Person, Wartegg.

Urutan di daftar hanya mengelompokkan jenis tes, bukan urutan pengerjaan.`,
  status: 'indikasi',
  subtes: [bigFive, epps, papiKostick, deskripsiDiri, ketelitian, kraepelin, pauli, baum, dap, wartegg],
};
