import type { Angkatan } from '@/lib/skema';
import { infoLinearitas } from './linearitas';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapTesSubstantif } from './t2-tes-substantif';
import { tahapWawancara } from './t3-wawancara';

/**
 * PPG Prajabatan 2026 (PPG Calon Guru).
 *
 * Susunan seleksi, persyaratan, pembiayaan, linearitas, dan jadwal mengacu
 * dokumen "JadiPPG - Riset dan Kurikulum Program PPG 2026" (Product Management,
 * Juli 2026). Tiga tahapan: administrasi (Tahap I), tes substantif (Tahap II),
 * dan wawancara (Tahap III), sama dengan nomor tahap di dokumen.
 *
 * Contoh soal tes substantif tetap dari paket tryout Markaz. Kategori tryout
 * "Tryout PPG Prajabatan 2026" di Markaz berisi DUA seri: lima paket berlabel
 * "Archieve" (Literasi 30, Numerasi 30) dan sepuluh paket "Tryout Tes Substantif
 * PPG Prajabatan" (Literasi 15, Numerasi 15). Yang dipakai seri kedua, sesuai
 * jumlah soal di dokumen kurikulum; seri yang diarsipkan bukan susunan yang berlaku.
 */
export const prajabatan2026: Angkatan = {
  kode: '2026',
  nama: 'Seleksi 2026',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Tiga tahap seleksi berurutan: administrasi lewat SIMPKB, tes substantif luring dengan CAT ' +
    '(literasi 15 soal, numerasi 15 soal, penguasaan konten 70 soal), lalu wawancara daring. ' +
    'Peserta yang lulus kuliah dua semester di LPTK.',
  diperbarui: '2026-10-20',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Gambaran PPG Calon Guru (Prajabatan)',
      isi: `Program Pendidikan Profesi Guru (PPG) adalah salah satu upaya pemerintah untuk menghasilkan guru yang profesional, kompeten, dan memiliki sertifikat pendidik. Pada 2026, PPG dilaksanakan melalui dua jalur utama: PPG bagi Calon Guru (Prajabatan) dan PPG bagi Guru Tertentu (Dalam Jabatan), dengan sasaran dan tahapan pelaksanaan yang berbeda.
PPG bagi Calon Guru ditujukan kepada lulusan S-1 atau D-IV yang belum terdaftar sebagai guru. Peserta harus melalui seleksi administrasi, tes substantif, dan wawancara. Persiapannya perlu mencakup kemampuan literasi, numerasi, penguasaan bidang studi, penyusunan esai, serta kesiapan menjawab pertanyaan wawancara.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan umum',
      isi: `1. Warga Negara Indonesia.
2. Tidak terdaftar sebagai guru/kepala sekolah pada Dapodik dan Simpatika.
3. Berusia paling tinggi 32 tahun pada 31 Desember tahun pendaftaran.
4. Memiliki kualifikasi S-1/D-IV yang terdaftar pada PD-Dikti atau basis penyetaraan ijazah luar negeri.
5. IPK paling rendah 3,00.
6. Menyiapkan surat sehat jasmani dan rohani, surat berkelakuan baik, serta surat bebas NAPZA untuk diserahkan saat lapor diri setelah lulus.
7. Menandatangani pakta integritas.
8. Mengikuti seleksi administrasi, tes substantif, dan wawancara.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Pembiayaan',
      isi: `- Perkuliahan berlangsung selama dua semester di LPTK.
- Biaya pendidikan ditetapkan Rp8.500.000 per semester.
- Peserta yang lulus dan ditetapkan memperoleh bantuan pemerintah Rp17.000.000 untuk dua semester.
- Biaya pendaftaran seleksi untuk tahap administrasi dan tes substantif sebesar Rp200.000.
- Transportasi, akomodasi, kelengkapan administrasi, dan biaya pribadi selama seleksi ditanggung peserta.`,
    },
    ...infoLinearitas,
    {
      tipe: 'lainnya',
      judul: 'Tahapan seleksi',
      isi: `⟦gambar:gambar/jadippg/db1a55af20a12994-ppg-2026-002.png⟧
Ada 3 (tiga) tahapan seleksi:
1. Tahap I: seleksi administrasi, untuk menyeleksi kesesuaian data pendaftar dengan persyaratan administrasi. Dilakukan secara daring lewat aplikasi Sistem Informasi Manajemen Pengembangan Keprofesian Berkelanjutan (SIMPKB).
2. Tahap II: tes substantif, untuk menyeleksi kompetensi bidang studi serta literasi dan numerasi, meliputi Tes Penguasaan Bidang dan Tes Kemampuan Dasar Literasi dan Numerasi. Dilaksanakan secara luring di Tempat Uji Kompetensi (TUK) yang ditunjuk, memakai aplikasi Computer Assisted Test (CAT).
3. Tahap III: tes wawancara, untuk menggali kompetensi profesional dan personal calon peserta. Dilaksanakan secara daring lewat media/platform virtual meeting.

Tahapan seleksi bersifat sekuensial: peserta yang dinyatakan tidak lulus pada satu tahap tidak dapat melanjutkan ke tahap berikutnya. Biaya pendaftaran seleksi tahap I dan II sebesar Rp200.000 ditanggung calon peserta dan dibayarkan saat mendaftar di SIMPKB.

Urutan pada bagan alur: registrasi/login SIMPKB; Seleksi Tahap 1 (data diri, esai, bidang studi, lokasi seleksi, preferensi lokasi pengabdian); pembayaran biaya pendaftaran; pengumuman hasil Seleksi Tahap 1; cetak kartu peserta; Seleksi Tahap 2 (tes substantif); pengumuman hasil Seleksi Tahap 2; pengumuman jadwal wawancara; Seleksi Tahap 3 (wawancara); pengumuman hasil Seleksi Tahap 3; konfirmasi kesediaan; penetapan mahasiswa PPG bagi Calon Guru (Prajabatan); lapor diri di LPTK; orientasi; awal perkuliahan.`,
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal seleksi 2026',
      isi: `Pendaftaran seleksi: 27 Juni–25 Juli 2026
Pengumuman administrasi: 26–28 Juli 2026
Cetak kartu peserta: 28 Juli–2 Agustus 2026
Tes substantif: 3–7 Agustus 2026
Pengumuman tes substantif: 26 Agustus 2026
Pengumuman jadwal wawancara: 29 Agustus 2026
Wawancara: 31 Agustus–16 September 2026
Pengumuman hasil akhir: 21 September 2026`,
    },
    {
      tipe: 'lainnya',
      judul: 'Perkuliahan',
      isi: `Perkuliahan berlangsung selama dua semester di LPTK. Gambar di bawah dilampirkan di dokumen riset, tetapi berlabel "PPG Calon Guru 2025" dan "Semester 1/2 Tahun 2025"; dokumen belum memuat distribusi mata kuliah yang khusus berlabel 2026.

Distribusi mata kuliah, bidang studi umum:
Semester 1 (18 sks): Filosofi Pendidikan dan Pendidikan Nilai (2 sks); Pemahaman tentang Peserta Didik dan Pembelajaran* (3 sks); Pembelajaran Mendalam dan Asesmen Dasar* (3 sks); Praktik Pengalaman Lapangan (PPL) Terbimbing (6 sks); Pola Pikir Bertumbuh (Growth mindset) dalam Pembelajaran (2 sks); MK Pilihan Selektif/Elektif (2 sks).
Semester 2 (20 sks): Pembelajaran Sosial Emosional* (3 sks); Pembelajaran Mendalam dan Asesmen Lanjut* (3 sks); Praktik Pengalaman Lapangan (PPL) Mandiri (8 sks); Projek Kepemimpinan (2 sks); Seminar Pendidikan Profesi Guru (2 sks); MK Pilihan Selektif/Elektif (2 sks).

Distribusi mata kuliah, bidang studi Bimbingan dan Konseling (BK):
Semester 1 (18 sks): Filosofi Pendidikan dan Pendidikan Nilai (2 sks); Asesmen dan Layanan BK* (4 sks); Praktik Pengalaman Lapangan (PPL) Terbimbing (6 sks); Pola Pikir Bertumbuh (Growth mindset) dalam Pembelajaran (2 sks); Praktikum Konseling Individu* (2 sks); MK Pilihan Selektif/Elektif (2 sks).
Semester 2 (20 sks): Pembelajaran Sosial Emosional* (3 sks); Praktikum Konseling Kelompok* (3 sks); Praktik Pengalaman Lapangan (PPL) Mandiri (8 sks); Projek Kepemimpinan (2 sks); Seminar Pendidikan Profesi Guru (2 sks); MK Pilihan Selektif/Elektif (2 sks).

Tanda * berarti mata kuliah terhubung dengan PPL.

⟦gambar:gambar/jadippg/07c3ceddf34b6fef-ppg-2026-003.png⟧
⟦gambar:gambar/jadippg/b9aca52478e43f12-ppg-2026-004.png⟧

Daftar mata kuliah selektif (pilihan) beserta catatan keberlakuannya per bidang studi:
⟦gambar:gambar/jadippg/a3a4817483c3297d-ppg-2026-005.png⟧`,
    },
  ],
  tahapan: [tahapAdministrasi, tahapTesSubstantif, tahapWawancara],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiPPG - Riset dan Kurikulum Program PPG 2026',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
      catatan:
        'Dokumen Product Management, Juli 2026. Dasar persyaratan, pembiayaan, linearitas, tahapan, ' +
        'jadwal, dan materi tes substantif serta wawancara.',
    },
    {
      jenis: 'internal',
      judul: 'Panduan Soal Literasi - PPG (Google Docs)',
      url: 'https://docs.google.com/document/d/1ffA8H9GeK2GyIZcWX119IeQM3Zx422I-/edit?usp=sharing',
      keandalan: 'resmi',
      catatan: 'Ditautkan di BAB IV dokumen riset. Isinya belum dibaca dan belum dimasukkan ke PK.',
    },
    {
      jenis: 'internal',
      judul: 'Panduan Soal Numerasi - PPG (Google Docs)',
      url: 'https://docs.google.com/document/d/1hss7NttbFdpzy_6yQebRtXD8lzfkCHqJ/edit?usp=sharing',
      keandalan: 'resmi',
      catatan: 'Ditautkan di BAB IV dokumen riset. Isinya belum dibaca dan belum dimasukkan ke PK.',
    },
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tryout PPG Prajabatan 2026", seri "Tryout Tes Substantif PPG Prajabatan"',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Sumber contoh soal literasi dan numerasi. Susunan paketnya (15 soal literasi dan 15 soal ' +
        'numerasi) cocok dengan dokumen kurikulum.',
    },
  ],
};
