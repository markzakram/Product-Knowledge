import type { Angkatan } from '@/lib/skema';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapSkd } from './t2-skd';
import { tahapSkb } from './t3-skb';

/**
 * CPNS 2026.
 *
 * Dokumen sumber tidak menyebut tahun siklusnya. Angka tahun di sini adalah
 * siklus yang sedang disiapkan; seluruh ketentuan mengacu PERMENPANRB No. 6
 * Tahun 2024, yang masih berlaku saat dokumen disusun.
 */
export const cpns2026: Angkatan = {
  kode: '2026',
  nama: 'Formasi 2026',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Tiga tahap: administrasi, SKD, lalu SKB. Nilai akhir menggabungkan SKD ' +
    '40 persen dan SKB 60 persen.',
  diperbarui: '2026-09-22',
  info: [
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan Umum',
      isi: `Sesuai PERMENPANRB No. 6 Tahun 2024 Pasal 23:
1. Usia sesuai ketentuan jabatan yang dilamar.
2. Tidak pernah dipidana penjara 2 tahun atau lebih berdasarkan putusan berkekuatan hukum tetap.
3. Tidak pernah diberhentikan sebagai PNS, PPPK, prajurit TNI, anggota Polri, atau pegawai swasta.
4. Tidak berkedudukan sebagai calon PNS, PNS, prajurit TNI, atau anggota Polri.
5. Tidak menjadi anggota atau pengurus partai politik dan tidak terlibat politik praktis.
6. Memiliki kualifikasi pendidikan sesuai persyaratan jabatan.
7. Memiliki sertifikasi keahlian yang masih berlaku untuk jabatan yang mempersyaratkan.
8. Sehat jasmani dan rohani sesuai persyaratan jabatan.
9. Bersedia ditempatkan di seluruh wilayah NKRI atau negara lain yang ditentukan instansi.
10. Persyaratan lain sesuai kebutuhan jabatan yang ditetapkan oleh PPK.`,
    },
  ],
  tahapan: [tahapAdministrasi, tahapSkd, tahapSkb],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiASN - Riset dan Kurikulum SKD',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management.',
    },
    {
      jenis: 'internal',
      judul: 'JadiASN - Riset dan Kurikulum SKB',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dokumen Product Management.',
    },
    {
      jenis: 'resmi',
      judul: 'PERMENPANRB No. 6 Tahun 2024',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Dasar persyaratan umum (Pasal 23) dan bentuk SKB (Pasal 34).',
    },
  ],
};
