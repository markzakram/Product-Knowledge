import type { Angkatan } from '@/lib/skema';
import { tahapSkd } from './t2-skd';

/**
 * SKD Sekolah Kedinasan 2026.
 *
 * Satu SKD dipakai semua sekolah kedinasan, jadi ia tes sendiri; IPDN dan PKN
 * STAN hanya menyimpan seleksi lanjutannya. Nomor tahap mengikuti alur resmi:
 * tahap 1 seleksi administrasi di tiap sekolah, SKD tahap 2 (`nomorAwal: 2`),
 * seleksi lanjutan mulai tahap 3.
 */
export const skdKedinasan2026: Angkatan = {
  kode: '2026',
  nama: 'SKD 2026',
  tahun: 2026,
  nomorAwal: 2,
  status: 'terkonfirmasi',
  ringkasan:
    'Tiga subtes dikerjakan serentak dalam satu sesi 100 menit. Dipakai semua ' +
    'sekolah kedinasan; seleksi lanjutan ada di tesnya sendiri.',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Nomor tahap',
      isi:
        'Nomor tahap mengikuti alur seleksi sekolah kedinasan. Tahap 1 adalah seleksi ' +
        'administrasi di tiap sekolah, SKD adalah tahap 2, dan seleksi lanjutan masing-masing ' +
        'sekolah dimulai dari tahap 3. Halaman ini hanya memuat SKD, jadi penomorannya dimulai ' +
        'dari Tahap 2. Seleksi administrasi dan seleksi lanjutan dijelaskan di tes tiap sekolah, ' +
        'mis. Seleksi Lanjutan IPDN dan Seleksi Lanjutan PKN STAN.',
    },
  ],
  tahapan: [tahapSkd],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiSekdin - Riset dan Kurikulum Sekolah Kedinasan SKD',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management, April 2026.',
    },
    {
      jenis: 'internal',
      judul: 'Mapping ASN',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan:
        'Sumber angka mapping tryout SKD sebelumnya (30 paket implisit). Sudah diganti Mapping SKD 2027 ' +
        'dari SKD Generator di tiap subtes; disimpan sebagai riwayat sumber.',
    },
    {
      jenis: 'internal',
      judul: 'SKD Generator - mapping SKD 2027 (skd-mapping.json)',
      tanggalAkses: '2026-10-19',
      keandalan: 'resmi',
      catatan:
        'Mapping SKD 2027.xlsx (sheet "1 TO 0 Latsol" dan rotasi tiga paket) yang dibaca SKD Generator: 57 chapter, 37 di antaranya ' +
        'berkuota (TWK 30, TIU 35, TKP 45 soal per paket). Dasar materi, mapping, dan susunan paket contoh soal SKD.',
    },
    {
      jenis: 'internal',
      judul: 'SKD Generator - 12 dokumen tryout 2027',
      tanggalAkses: '2026-10-19',
      keandalan: 'asumsi',
      catatan:
        'Contoh tryout internal: 12 dokumen tim yang diterima SKD Generator (312 soal: TWK 90, TIU 87, TKP 135; satu dokumen versi awal ' +
        'tidak dihitung). Berstatus draf sampai ditelaah tim. Sumber 100 dari 110 soal paket contoh SKD (10 soal TIU lainnya dari ' +
        'dokumen riset CPNS 2027 "Contoh Soal TIU SKD 2027"). Angka ketersediaan SIADU tidak dihitung.',
    },
  ],
};
