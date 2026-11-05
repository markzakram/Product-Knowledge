import type { Angkatan } from '@/lib/skema';
import { ujianTingkatB } from './ujian';

export const tingkatB: Angkatan = {
  kode: 'tingkat-b',
  nama: 'Tingkat B',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Tingkat B: 48 subtema dari 8 materi; menambah AKT, BDN, dan BTI pada cakupan Tingkat A. Satu sesi ujian daring (CAT) 210 menit; jumlah soal belum diumumkan resmi.',
  diperbarui: '2026-11-05',
  info: [
    {
      tipe: 'jadwal',
      judul: 'Jadwal ujian dan pengumuman',
      isi: `Periode 1-8 Tahun 2026 (PENG-7/PP/2026, 15 Okt 2026). Pendaftaran 16-20 Okt 2026. Ujian daring CAT: Tingkat A 26 Okt, Tingkat B 27 dan 29 Okt, Tingkat C 28 Okt, sesi 08.00-11.30 atau 13.00-16.30 WIB. Pengumuman kelulusan 12 November 2026; SKK terbit 19 November 2026, berlaku 3 tahun. Periode berikutnya belum diumumkan.
Jadwal ditulis berdasarkan informasi per 5 November 2026.`,
    },
    {
      tipe: 'penilaian',
      judul: 'Penilaian',
      isi: `Jumlah soal, bobot, dan batas per materi belum diumumkan resmi. Ringkasan latihan pihak ketiga (belum diverifikasi): lulus atau tidak lulus, batas 60 dari 100; jawaban salah atau kosong bernilai 0.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Catatan contoh soal',
      isi: `Contoh soal di sini adalah soal orisinal tim (bukan soal ujian dan bukan salinan bank latihan pihak ketiga). Tarif dan parameter hitungan belum dicek ke peraturan terbaru, jadi contoh berstatus draf sampai ditelaah.`,
    },
  ],
  tahapan: [ujianTingkatB],
  sumber: [
    {
      jenis: 'resmi',
      judul: 'Pengumuman BPPK PENG-7/PP/2026 (15 Okt 2026)',
      url: 'https://klc.kemenkeu.go.id/sertifikasi/t/bppk-ukp/info',
      tanggalAkses: '2026-11-05',
      keandalan: 'resmi',
      catatan:
        'Jadwal periode 1-8 tahun 2026. URL adalah halaman info peserta UKP di KLC Kemenkeu; berkas pengumumannya sendiri belum dibuka langsung.',
    },
    {
      jenis: 'resmi',
      judul: 'Cakupan Materi Uji Kompetensi Perpajakan (BPPK, 14 Okt 2026)',
      url: 'https://klc.kemenkeu.go.id/res/orkestra/api/files/stream-file/0257d0e9-2888-4953-b942-577e13b74af7',
      tanggalAkses: '2026-11-03',
      keandalan: 'resmi',
      catatan: 'Dasar daftar materi dan subtema per tingkat (12 halaman), dicocokkan per butir di UKP Generator.',
    },
    {
      jenis: 'resmi',
      judul: 'PMK 55/2026 (dasar UKP, menggantikan PMK 111/2014 s.t.d.d. PMK 175/2022)',
      keandalan: 'asumsi',
      catatan: 'Hanya dikutip dari catatan riset UKP Generator; teks PMK belum dibaca langsung.',
    },
    {
      jenis: 'internal',
      judul: 'UKP Generator, data/ukp-kasus (soal orisinal)',
      keandalan: 'asumsi',
      catatan: 'Sumber contoh soal. Berstatus draf; belum ditelaah penelaah materi.',
    },
    {
      jenis: 'media',
      judul: 'DDTCNews: BPPK, durasi Uji Kompetensi Perpajakan hanya 3-3,5 jam',
      url: 'https://news.ddtc.co.id/berita/nasional/1823132/bppk-durasi-uji-kompetensi-perpajakan-hanya-3-35-jam-tidak-3-hari',
      tanggalAkses: '2026-11-05',
      keandalan: 'media',
      catatan: 'Dasar durasi 210 menit per sesi.',
    },
  ],
};
