import type { Angkatan } from '@/lib/skema';
import { tahapT1 } from './t1-seleksi-potensi-dasar';
import { tahapT2 } from './t2-seleksi-pengetahuan-teknis';
import { tahapT3 } from './t3-seleksi-psikologi';
import { tahapT4 } from './t4-seleksi-kesehatan-dan-psikiatri';
import { tahapT5 } from './t5-seleksi-wawancara-pra-tahap-akhir';
import { tahapT6 } from './t6-town-hall-meeting-thm';

/**
 * PCPM Bank Indonesia - Angkatan 41
 *
 * Dihasilkan dari "Template Spreadsheet Master - Product Knowledge.xlsx" oleh skrip/impor-xlsx.mjs,
 * lalu boleh disunting tangan. Folder ini adalah sumber kebenarannya.
 * Satu tahapan = satu file, supaya diff PR mudah dibaca.
 */
export const pcpmbi41: Angkatan = {
  kode: '41',
  nama: `Angkatan 41`,
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan: `Seleksi 6 tahap. Tahap 1 sampai 3 sudah terkonfirmasi, Tahap 4 sampai 6 belum ada data.`,
  diperbarui: `2026-09-22`,
  info: [
    {
      tipe: 'persyaratan',
      judul: `Persyaratan Pendaftaran`,
      isi: `1. Warga Negara Indonesia (WNI).
2. Sehat jasmani dan rohani.
3. Usia per 31 Agustus 2026: S1 maksimal 26 tahun, S2 maksimal 28 tahun.
4. Lulus dengan strata pendidikan minimal S1.
5. IPK minimal 3,00 dari skala 4,00.
6. Lulusan dari program studi yang ditetapkan BI (Ilmu Ekonomi, Manajemen, Akuntansi, Ilmu Hukum, Psikologi, Teknik, Statistika, Ilmu Komputer, dan lainnya).
7. Lulusan luar negeri wajib SK Penyetaraan Ijazah dan konversi IPK dari Ditjen Diktiristek.
8. Diutamakan memiliki pengalaman berorganisasi.
9. Tidak memiliki ikatan dinas, atau bersedia melepaskannya.
10. Bersedia menandatangani perjanjian ikatan dinas dengan Bank Indonesia.
11. Bersedia mematuhi peraturan BI termasuk pengaturan hubungan keluarga.
12. Bersedia ditempatkan di seluruh kantor Bank Indonesia.`,
    },
    {
      tipe: 'jadwal',
      judul: `Jadwal Pelaksanaan`,
      isi: `Pengisian Online Application: 9-14 Agustus 2026
Pengumuman Hasil Seleksi Administrasi: 2 September 2026
Seleksi Potensi Dasar (Online): Minggu ke-1 September 2026
Pengumuman Hasil Potensi Dasar: Minggu ke-3 September 2026
Seleksi Pengetahuan Teknis (Online): Minggu ke-3 September 2026
Pengumuman Hasil Pengetahuan Teknis: Minggu ke-4 September 2026
Seleksi Psikologi (Online): Minggu ke-2 Oktober 2026
Pengumuman Hasil Psikologi: Minggu ke-4 Oktober 2026
Seleksi Kesehatan dan Psikiatri (Offline): Minggu ke-5 Oktober 2026
Pengumuman Hasil Kesehatan dan Psikiatri: Minggu ke-2 November 2026
Wawancara Pra Tahap Akhir: Minggu ke-3 November 2026
Pengumuman Hasil Wawancara: Minggu ke-1 Desember 2026
Seleksi Tahap Akhir: Minggu ke-1 Desember 2026
Pengumuman Hasil Akhir: TBA
Catatan: jadwal pelaksanaan dan pengumuman bersifat tentatif.`,
    },
    {
      tipe: 'penilaian',
      judul: `Sistem Penilaian Tahap 1`,
      isi: `Sistem penerimaan PCPM berbasis peringkat atau nilai tertinggi. Standar internal yang dipakai untuk Tahap 1 adalah skor minimal 80 dari 100. Skor 80 bukan jaminan lolos, melainkan batas minimal performa yang dianggap aman.`,
    },
  ],
  tahapan: [tahapT1, tahapT2, tahapT3, tahapT4, tahapT5, tahapT6],
  sumber: [
    {
      jenis: 'resmi',
      judul: `Microsite rekrutmen Bank Indonesia`,
      tanggalAkses: `2026-09-22`,
      keandalan: 'resmi',
      catatan: `Persyaratan dan jadwal pelaksanaan.`,
    },
    {
      jenis: 'internal',
      judul: `JadiPCPM - Riset dan Kurikulum Seleksi PCPM BI Angkatan 41`,
      tanggalAkses: `2026-09-22`,
      keandalan: 'resmi',
      catatan: `Dokumen internal Product Management, Agustus 2026.`,
    },
    {
      jenis: 'alumni',
      judul: `Laporan pengalaman peserta PCPM 39 dan 40`,
      tanggalAkses: `2026-09-22`,
      keandalan: 'alumni',
      catatan: `Dipakai untuk bagian yang berstatus indikasi.`,
    },
  ],
};
