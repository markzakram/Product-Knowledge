import type { Angkatan } from '@/lib/skema';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapKesehatanAwal } from './t2-kesehatan-awal';
import { tahapPsikologi } from './t3-psikologi';
import { tahapWawancara } from './t4-wawancara';
import { tahapKesehatanAkhir } from './t5-kesehatan-akhir';

export const kai2026: Angkatan = {
  kode: '2026',
  nama: 'Rekrutmen 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Lima tahap. Hanya Tes Psikologi yang punya materi pembelajaran; ' +
    'tahapan lain berupa administrasi, kesehatan, dan wawancara.',
  diperbarui: '2026-10-20',
  tahapan: [
    tahapAdministrasi,
    tahapKesehatanAwal,
    tahapPsikologi,
    tahapWawancara,
    tahapKesehatanAkhir,
  ],
  sumber: [
    {
      jenis: 'internal',
      judul: 'RISET DAN EVALUASI REKRUTMEN PT KAI',
      tanggalAkses: '2026-09-22',
      keandalan: 'alumni',
      catatan: 'Dokumen Product Management, Juli 2026. Rincian subtes disusun dari pola yang paling sering muncul, bukan pengumuman resmi.',
    },
    {
      jenis: 'internal',
      judul: 'BUMN - Mapping Psikotes PT.KAI',
      tanggalAkses: '2026-09-22',
      keandalan: 'resmi',
      catatan: 'Sumber angka tryout dan ketersediaan SIADU.',
    },
    {
      jenis: 'internal',
      judul: 'JadiBUMN - Riset Psikologi PT KAI',
      tanggalAkses: '2026-10-20',
      keandalan: 'alumni',
      catatan: 'Dokumen Product Management, Juli 2026. BAB I memuat tahapan seleksi dan alokasi subtes; BAB II memuat contoh soal Verbal, Hitung Cepat, Matematika Umum, Bangun Ruang, Deskripsi Diri, dan Ketelitian. Kunci dan pembahasan Bangun Ruang tidak ada di riset: disusun dari membaca gambar soal.',
    },
    {
      jenis: 'internal',
      judul: 'AllPlatform - Riset Tes Psikologi',
      tanggalAkses: '2026-10-20',
      keandalan: 'asumsi',
      catatan: 'Dirujuk riset PT KAI untuk EPPS, Pauli, Wartegg, DAP, dan Baum; riset hanya memuat tautannya. Materi keenam subtes itu dipakai ulang dari Psikotes Kerja, yang bersumber dari dokumen ini.',
    },
  ],
};
