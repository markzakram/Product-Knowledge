import type { Angkatan } from '@/lib/skema';
import { tahapTkbi } from './t3-tkbi';
import { tahapKesehatan1 } from './t4-kesehatan-1';
import { tahapPsikologi } from './t5-psikologi';
import { tahapPenentuanAkhir } from './t6-penentuan-akhir';

/**
 * SPCP IPDN 2026: seleksi lanjutan khas IPDN.
 *
 * Seleksi administrasi (tahap 1) dijelaskan di informasi seleksi, dan SKD
 * (tahap 2) ada di tes "SKD Sekolah Kedinasan". Karena itu tahapan pertama di
 * sini, TKBI, bernomor tahap 3 (`nomorAwal: 3`), sama dengan nama berkasnya.
 */
export const ipdn2026: Angkatan = {
  kode: '2026',
  nama: 'SPCP 2026',
  tahun: 2026,
  nomorAwal: 3,
  status: 'terkonfirmasi',
  ringkasan:
    'Empat tahap seleksi lanjutan khas IPDN, dimulai dari TKBI (Tahap 3). Seleksi ' +
    'administrasi dan alur lengkap ada di informasi seleksi; SKD ada di tes SKD ' +
    'Sekolah Kedinasan.',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Alur seleksi lengkap',
      isi: `1. Seleksi Administrasi (di IPDN).
2. Seleksi Kompetensi Dasar (SKD), dipakai semua sekolah kedinasan; lihat tes SKD Sekolah Kedinasan 2026 di JadiSekdin.
3. Seleksi Lanjutan IPDN: Tes Kemampuan Bahasa Inggris (TKBI), Tes Kesehatan Tahap 1, Tes Psikologi, Integritas, dan Kejujuran, lalu Seleksi Penentuan Akhir (Tes Kesehatan tahap 2, Tes Kesamaptaan, Wawancara).
Di halaman ini seleksi lanjutan dinomori mengikuti alur resmi: Tahap 3 (TKBI) sampai Tahap 6 (Penentuan Akhir).`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Seleksi Administrasi',
      isi: `- Tahap 1 dari alur seleksi, dilakukan online, untuk memeriksa berkas dan syarat pendaftaran.
- Verifikasi berkas pendaftaran. Peserta yang lolos berhak mengikuti SKD.`,
    },
  ],
  tahapan: [tahapTkbi, tahapKesehatan1, tahapPsikologi, tahapPenentuanAkhir],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiSekdin - Riset dan Kurikulum Seleksi Lanjutan IPDN',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management, September 2026.',
    },
    {
      jenis: 'internal',
      judul: 'Sekdin - Mapping Seleksi Lanjutan',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Sumber angka tryout, latsol, dan ketersediaan SIADU.',
    },
  ],
};
