import type { Angkatan } from '@/lib/skema';
import { tahapTpd } from './t1-tes-potensi-dasar';
import { tahapTku } from './t2-tes-kemampuan-umum';
import { tahapKepribadian } from './t3-tes-kepribadian';
import { tahapKesehatan } from './t4-tes-kesehatan';
import { tahapWawancaraPanel } from './t5-wawancara-panel';

/**
 * PCAM 10.
 *
 * Disusun dari dokumen riset internal "JadiOJK - Riset PCAM dan MLE OJK 2026"
 * (Product Management, Oktober 2026), bukan dari paket tryout Markaz seperti
 * PCAM 9:
 *   Tahap 1  Tes Potensi Dasar: lengkap (subtes, jumlah soal, waktu, 32 contoh soal)
 *   Tahap 2-5  hanya nama dan ringkasan dari urutan seleksi (bagian 2.2)
 *
 * Nomor tahap mengikuti dokumen riset ("Tahap 1: Tes Potensi Dasar"), jadi
 * Seleksi Administrasi (sebelum Tahap 1) dan Penetapan dan Pemberkasan (sesudah
 * Tahap 5) tidak dijadikan tahapan; keduanya hanya disebut di info urutan seleksi.
 *
 * Jadwal dan persyaratan pendaftaran di dokumen riset (bagian 2.3 dan 2.4)
 * adalah milik seleksi PCAM 9 dan MLE 2025, jadi tidak dimasukkan.
 *
 * Jalur MLE: dokumen riset memakai satu tabel materi untuk PCAM dan MLE, jadi
 * Tahap 1 MLE sama dengan PCAM 10 dan tidak dibuat tes terpisah.
 */
export const pcam10: Angkatan = {
  kode: '10',
  nama: 'PCAM 10',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Lima tahap tes menurut dokumen riset: Tes Potensi Dasar, Tes Kemampuan Umum, Tes ' +
    'Kepribadian dan Wawancara Psikologi, Tes Kesehatan, lalu Wawancara Panel. Baru Tahap 1 ' +
    '(Tes Potensi Dasar) yang terisi lengkap; Tahap 2 sampai 5 masih dalam proses riset. ' +
    'Jalur MLE memakai materi Tahap 1 yang sama.',
  diperbarui: '2026-10-15',
  info: [
    {
      tipe: 'lainnya',
      judul: 'Urutan seleksi (mengacu pada PCAM 9 dan MLE 2025)',
      isi:
        'Seleksi Administrasi\n' +
        'Tahap 1: Tes Potensi Dasar (TPD)\n' +
        'Tahap 2: Tes Kemampuan Umum (TKU)\n' +
        'Tahap 3: Tes Kepribadian dan Wawancara Psikologi\n' +
        'Tahap 4: Tes Kesehatan\n' +
        'Tahap 5: Wawancara Panel\n' +
        'Penetapan dan Pemberkasan\n\n' +
        'Setiap peserta mengikuti tahapan sesuai hasil seleksi dan undangan yang diterima. ' +
        'Menurut dokumen riset, alur ini mengacu pada seleksi PCAM 9 dan MLE 2025 dan akan ' +
        'disesuaikan dengan ketentuan resmi penerimaan berikutnya. Seleksi Administrasi dan ' +
        'Penetapan dan Pemberkasan tidak dijadikan tahapan di halaman ini, supaya nomor tahap ' +
        'sama dengan dokumen riset (Tahap 1 = Tes Potensi Dasar).',
    },
    {
      tipe: 'lainnya',
      judul: 'Jalur MLE (Multi Level Entry)',
      isi:
        'Dokumen riset menyusun satu tabel materi untuk PCAM dan MLE, jadi Tahap 1 (Tes ' +
        'Potensi Dasar) MLE sama dengan PCAM 10: Kemampuan Umum 12 soal 10 menit dan ' +
        'Penalaran Numerik 10 soal 18 menit. Satu-satunya perbedaan jalur yang disebut di ' +
        'tabel itu ada di Tahap 2: khusus MLE bisa ada tambahan tes kemampuan bidang, ' +
        'tergantung kebijakan penyelenggara. Persyaratan MLE (usia, program studi, ' +
        'pengalaman kerja minimal 3 atau 6 tahun) berbeda dari PCAM dan belum dimasukkan ' +
        'ke data ini.',
    },
  ],
  tahapan: [tahapTpd, tahapTku, tahapKepribadian, tahapKesehatan, tahapWawancaraPanel],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiOJK - Riset PCAM dan MLE OJK 2026 (Product Management, Oktober 2026)',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan:
        'Jumlah soal, waktu, dan jenis soal Tahap 1 dari tabel Materi Pembelajaran (3.1) dan ' +
        'contoh soal BAB V. Alur seleksi mengacu pada PCAM 9 dan MLE 2025, bukan pengumuman ' +
        'resmi PCAM 10. Dokumen tidak memuat kunci dan pembahasan; keduanya disusun ulang ' +
        'dari soalnya dan berstatus draft.',
    },
  ],
};
