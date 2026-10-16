import type { Angkatan } from '@/lib/skema';
import { tahapTps } from './t1-tes-potensi-skolastik';
import { tahapLiterasi } from './t2-tes-literasi';

/**
 * UTBK-SNBT 2027.
 *
 * Sumber utama: "Kurikulum UTBK-SNBT 2027" (Product Management, PT Cerebrum Edukanesia Nusantara,
 * September 2026). Belum ada ketentuan resmi UTBK-SNBT 2027: kurikulum memakai framework dan
 * jadwal resmi 2026 sebagai baseline, dan jadwal 2027 berasal dari proyeksi eksternal. Karena itu
 * angkatan dan kedua tahapannya berstatus 'indikasi', dan sumbernya berkeandalan 'asumsi'.
 *
 * Susunan: dua kelompok tes dalam satu rangkaian tanpa jeda, ditulis sebagai dua tahapan supaya
 * cocok dengan struktur data (Tahapan > Subtes):
 *   Tahap 1  Tes Potensi Skolastik (PU, PPU, PBM, PK)
 *   Tahap 2  Tes Literasi (LBI, LBE, PM)
 *
 * Contoh soal: 16 soal Penalaran Induktif dari dokumen "Penalaran Induktif" (dengan kunci dan
 * pembahasan, status 'direview'), dan soal dari dokumen "Contoh Soal UTBK" yang tidak memuat kunci
 * dan pembahasan (disusun ulang, status 'draft', menunggu tim akademik). Daftar soal sumber yang
 * tidak dimasukkan ada di komentar atas tiap berkas contoh-*.ts.
 *
 * Ketentuan yang bertahun 2026 di bawah (tahapan pendaftaran, persyaratan, pemilihan program studi)
 * adalah baseline 2026 menurut kurikulum, bukan ketentuan 2027.
 */
export const utbk2027: Angkatan = {
  kode: '2027',
  nama: 'Tahun 2027',
  tahun: 2027,
  status: 'indikasi',
  ringkasan:
    'Dua kelompok tes dalam satu rangkaian berbasis komputer, tanpa jeda: Tes Potensi Skolastik ' +
    '(Penalaran Umum, Pengetahuan dan Pemahaman Umum, Pemahaman Bacaan dan Menulis, Pengetahuan ' +
    'Kuantitatif; 90 soal, 90 menit) dan Tes Literasi (Literasi Bahasa Indonesia, Literasi Bahasa ' +
    'Inggris, Penalaran Matematika; 70 soal, 105 menit). Total tujuh subtes, 160 soal, 195 menit. ' +
    'Seluruhnya proyeksi dari framework resmi UTBK-SNBT 2026; ketentuan resmi 2027 belum terbit. ' +
    'Terisi: ketentuan, persyaratan, pemilihan program studi, penilaian, jadwal proyeksi, kisi-kisi, ' +
    'tipe soal, dan contoh soal enam subtes (Literasi Bahasa Inggris belum punya contoh).',
  diperbarui: '2026-10-15',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Gambaran UTBK-SNBT 2027',
      isi: `UTBK (Ujian Tulis Berbasis Komputer) adalah instrumen utama seleksi SNBT (Seleksi Nasional Berdasarkan Tes) untuk memprediksi kesiapan calon mahasiswa mengikuti pendidikan tinggi. Penyelenggaraannya berada dalam sistem SNPMB (Seleksi Nasional Penerimaan Mahasiswa Baru) melalui Pusat UTBK dan Sub Pusat UTBK di perguruan tinggi negeri yang ditetapkan. Semua informasi resmi (ketentuan, registrasi, panduan, jadwal, pengumuman hasil) disampaikan lewat kanal resmi SNPMB.

Struktur: tujuh subtes, total 160 soal dan 195 menit, tanpa jeda istirahat antarsubtes.
- Tes Potensi Skolastik (TPS): 90 soal, 90 menit. Penalaran Umum (30 soal, 30 menit), Pengetahuan dan Pemahaman Umum (20 soal, 15 menit), Pemahaman Bacaan dan Menulis (20 soal, 25 menit), Pengetahuan Kuantitatif (20 soal, 20 menit).
- Tes Literasi: 70 soal, 105 menit. Literasi Bahasa Indonesia (30 soal, 42,5 menit), Literasi Bahasa Inggris (20 soal, 20 menit), Penalaran Matematika (20 soal, 42,5 menit).

Kurikulum ini disusun lebih awal (September 2026) supaya produksi materi, soal, video, live class, dan tryout bisa berjalan sebelum pengumuman resmi 2027. Karena framework 2027 belum tersedia, struktur 2026 dipakai sebagai baseline; informasi visual proyeksi 2027 yang dihimpun menunjukkan struktur yang sama (jumlah subtes, jumlah soal, dan waktu). Semua angka di sini harus ditinjau ulang bila SNPMB mengubah struktur, durasi, jumlah soal, tipe soal, atau kompetensi yang diuji.

Urutan subtes di halaman ini mengikuti daftar materi di kurikulum. Urutan pengerjaan resmi belum ditetapkan.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Tahapan Pendaftaran dan Seleksi (baseline 2026)',
      isi: `Urutan di bawah mengacu pada alur resmi UTBK-SNBT 2026 sebagai baseline operasional. Jadwal, ketentuan teknis, dan mekanisme 2027 harus disesuaikan setelah panduan resmi UTBK-SNBT 2027 diterbitkan SNPMB.

1. Registrasi akun SNPMB Siswa lewat portal resmi SNPMB.
2. Melengkapi biodata peserta, lalu verifikasi dan validasi data sesuai ketentuan.
3. Memilih program studi tujuan dengan memperhatikan jumlah dan kombinasi pilihan.
4. Mengunggah portofolio bagi peserta yang memilih program studi bidang seni dan/atau olahraga.
5. Memilih kota atau wilayah pelaksanaan serta Pusat UTBK yang tersedia.
6. Membayar biaya UTBK sesuai ketentuan tahun pelaksanaan.
7. Menyelesaikan pendaftaran dan mengunduh Kartu Peserta UTBK-SNBT.
8. Mengikuti UTBK sesuai lokasi, tanggal, dan sesi pada Kartu Peserta.
9. Memeriksa pengumuman hasil SNBT lewat kanal resmi yang ditetapkan.
10. Mengunduh sertifikat hasil UTBK, lalu mengikuti verifikasi dan daftar ulang di PTN tujuan bila dinyatakan lulus seleksi.
11. Peserta SNBT hanya boleh mengikuti UTBK 2026 satu kali.
12. Hasil UTBK 2026 hanya berlaku untuk SNBT dan penerimaan di PTN tahun 2026.
13. Seleksi jalur SNBT 2026 berdasarkan hasil UTBK 2026, ditambah portofolio bagi peserta yang memilih program studi seni dan/atau olahraga.
14. Siswa yang sudah dinyatakan lulus seleksi jalur SNBP 2026, SNBP 2025, dan SNBP 2024 tidak dapat mengikuti SNBT 2026.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan Peserta (baseline 2026)',
      isi: `a. Memiliki Akun SNPMB Siswa (registrasi di Portal SNPMB).
b. Warga Negara Indonesia (WNI) yang memiliki Nomor Induk Kependudukan (NIK).
c. Siswa SMA/SMK/MA atau sederajat pada kelas terakhir tahun 2026, atau peserta didik Paket C tahun 2026, dengan umur maksimal 25 tahun (per 1 Juli 2026). Siswa yang belum punya ijazah membawa surat keterangan siswa kelas 12 yang memuat identitas (nama, kelas, NISN, dan NPSN), pas foto terbaru berwarna, tanda tangan Kepala Sekolah/Madrasah, serta stempel/cap sekolah.
d. Lulusan SMA/SMK/MA atau sederajat tahun 2024 dan 2025, atau lulusan Paket C tahun 2024 dan 2025, dengan umur maksimal 25 tahun (per 1 Juli 2026).
e. Lulusan SMA sederajat dari luar negeri harus memiliki ijazah yang sudah disetarakan.
f. Peserta yang memilih program studi bidang Seni dan/atau Olahraga wajib mengunggah portofolio.
g. Memiliki kesehatan yang memadai sehingga tidak mengganggu kelancaran proses studi.
h. Peserta berkebutuhan khusus tunanetra wajib mengunggah Surat Pernyataan Tuna Netra.
i. Membayar biaya UTBK.

Catatan: tahun kelulusan dan batas umur di atas adalah ketentuan UTBK-SNBT 2026. Ketentuan 2027 menunggu pengumuman resmi SNPMB.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Ketentuan Pemilihan Program Studi (baseline 2026)',
      isi: `Peserta boleh memilih paling banyak empat program studi dengan kombinasi yang ditetapkan. Pola ini diperkirakan tetap pada 2027; ketentuan 2026 dipakai sebagai baseline sementara dan harus ditinjau setelah SNPMB menerbitkan ketentuan resmi.

- 1 pilihan: bebas memilih di program apa pun. Contoh: 1 Diploma Tiga; atau 1 Diploma Empat/Sarjana Terapan; atau 1 Sarjana.
- 2 pilihan: bebas memilih di program apa pun. Contoh: 2 Diploma Tiga; atau 2 Diploma Empat/Sarjana Terapan; atau 2 Sarjana; atau 1 Diploma Tiga dan 1 Sarjana; atau 1 Diploma Empat/Sarjana Terapan dan 1 Sarjana.
- 3 pilihan: dua program akademik dan satu program vokasi; atau satu program akademik dan dua program vokasi; atau tiga program vokasi dengan minimal satu program Diploma Tiga. Contoh: 2 Diploma Tiga dan 1 Sarjana; 2 Diploma Empat/Sarjana Terapan dan 1 Sarjana; 2 Sarjana dan 1 Diploma Tiga; 2 Sarjana dan 1 Diploma Empat/Sarjana Terapan; 2 Diploma Empat/Sarjana Terapan dan 1 program Diploma Tiga.
- 4 pilihan: dua program akademik dan dua program vokasi dengan minimal satu program studi Diploma Tiga; atau satu program akademik dan tiga program vokasi dengan minimal satu program studi Diploma Tiga. Contoh: 2 Sarjana, 1 Diploma Tiga, dan 1 Diploma Empat/Sarjana Terapan; atau 1 Sarjana, 2 Diploma Empat/Sarjana Terapan, dan 1 Diploma Tiga.

Catatan penyusun: contoh terakhir pada 3 pilihan tertulis "2 Diploma Empat/Sarjana Terapan dan 11 program Diploma Tiga" di kurikulum; di sini dibaca "1 program Diploma Tiga" karena ketentuannya tiga pilihan.`,
    },
    {
      tipe: 'penilaian',
      judul: 'Sistem Penilaian dan Implikasinya untuk Strategi Belajar',
      isi: `- Struktur skor: peserta memperoleh skor pada masing-masing dari tujuh subtes, bukan hanya satu nilai rata-rata. Karena itu evaluasi hasil belajar dilakukan per subtes, tidak hanya dari skor total.
- Pada SNBT 2026, seleksi didasarkan pada hasil UTBK serta portofolio bagi peserta yang memilih program studi seni dan/atau olahraga. Relevansi hasil tiap subtes dapat berbeda sesuai program studi yang dipilih, dan formula serta besaran bobot tiap subtes di tiap program studi tidak dipublikasikan.
- Peserta dengan skor total lebih tinggi belum tentu punya posisi seleksi yang lebih kuat bila capaiannya pada subtes yang relevan dengan program studi tujuan lebih rendah.
- Kurikulum 2027 tidak menetapkan bobot numerik per program studi tanpa dasar resmi. Strategi belajarnya: kuasai seluruh subtes sebagai kompetensi dasar, lalu perkuat subtes yang lebih erat dengan program studi tujuan.
- Pilihan ganda: jawaban benar menambah poin, sedangkan jawaban salah dan tidak diisi tidak mengurangi poin.
- Status ketentuan 2027: ketentuan resmi mekanisme penilaian UTBK-SNBT 2027 belum terbit; sistem 2026 dipakai sebagai baseline. Pernyataan bahwa "sistem skor UTBK 2027 berubah" belum dapat disebut fakta resmi. Yang sudah terkonfirmasi adalah mekanisme pembobotan subtes pada seleksi 2026.`,
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal UTBK-SNBT 2027 (proyeksi)',
      isi: `Jadwal resmi UTBK-SNBT 2027 belum diterbitkan SNPMB. Tanggal 2027 di bawah adalah proyeksi operasional (dari jadwal resmi 2026, pola tahun-tahun sebelumnya, dan proyeksi eksternal) untuk perencanaan materi, pembelajaran, tryout, dan live class. Jangan disampaikan ke peserta sebagai kepastian.

Tahun | Pendaftaran | Pelaksanaan UTBK | Pengumuman hasil | Status
2024 | 21 Maret–5 April | 30 April–7 Mei | 13 Juni | riwayat pada materi referensi
2025 | 11–27 Maret | 23 April–3 Mei | 28 Mei | resmi SNPMB 2025
2026 | 25 Maret–7 April | 21–30 April | 25 Mei | resmi SNPMB 2026
2027 | 23 Maret–6 April | 19–28 April | 22 Mei | proyeksi eksternal; belum resmi

Untuk perencanaan internal: Maret sampai awal April sebagai periode persiapan pendaftaran, akhir April sampai awal Mei sebagai periode pelaksanaan UTBK, dan akhir Mei sebagai perkiraan pengumuman hasil. Setelah jadwal resmi terbit, semua agenda terkait disesuaikan.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Tipe Soal',
      isi: `Tiga tipe soal (baseline 2026; proyeksi 2027 tetap memakainya sampai ada ketentuan resmi baru). Contoh tampilannya ada di halaman subtes.
1. Pilihan ganda: memilih satu jawaban paling tepat dari lima opsi (A sampai E), satu jawaban benar. Dipastikan ada di semua subtes.
2. Majemuk kompleks: mengevaluasi lebih dari satu pernyataan atau alternatif jawaban dalam satu butir, berupa beberapa pernyataan, tabel kategori, atau pilihan respons yang dinilai berdasarkan stimulus. Mengukur analisis, konsistensi penalaran, dan kemampuan memadukan beberapa informasi sekaligus. Sering muncul pada soal berbacaan atau berpenalaran: PBM, PU, Literasi Bahasa Indonesia, dan Penalaran Matematika. Di aplikasi ini ditulis sebagai "PG kategori" (tiap pernyataan dikategorikan, mis. Benar/Salah atau Ya/Tidak) atau "PG kompleks" (memilih semua jawaban yang benar).
3. Isian singkat (rumpang): mengisi jawaban langsung tanpa opsi, berupa angka, simbol, huruf, atau teks singkat. Terutama pada materi kuantitatif dan matematis (Penalaran Umum bagian kuantitatif, Pengetahuan Kuantitatif, Penalaran Matematika), tetapi dapat muncul di semua subtes.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Prioritas Materi Proyeksi 2027',
      isi: `Prioritas dipakai hanya untuk menentukan urutan produksi materi, bank soal, latihan, dan tryout. Istilah ini tidak berarti materi itu pasti lebih sering muncul di UTBK-SNBT 2027, dan daftarnya perlu ditinjau ulang setelah framework resmi 2027 terbit.
- Penalaran Umum: deduktif/silogisme; induktif; kesesuaian pernyataan dan penarikan simpulan; kuantitatif; analitis.
- Pengetahuan Kuantitatif: bilangan, aljabar, geometri dan pengukuran, analisis data, peluang; problem solving dan data sufficiency sebagai bentuk latihan.
- PPU: makna kata/frasa, sinonim-antonim, majas, idiom/peribahasa, kosakata umum, konjungsi, logika bahasa/Bahasa Panda.
- PBM: tata paragraf, pemilihan dan penataan gagasan, morfologi, sintaksis, ejaan/EYD, perbaikan kalimat.
- Literasi Bahasa Indonesia: semantik, teks sastra/personal, pragmatik, teks saintek, sosial, dan humaniora.
- Literasi Bahasa Inggris: vocabulary in context, reading comprehension, inference, reference, synonym-antonym in context, functional text; grammar sebagai kompetensi pendukung.
- Penalaran Matematika: merumuskan, menggunakan, menafsirkan, dan mengevaluasi; bilangan, aljabar/fungsi, geometri, data, peluang, aritmatika sosial.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Tujuan Pembelajaran, Metode, dan Evaluasi',
      isi: `Tujuan umum: peserta mampu memahami, menganalisis, mengevaluasi, dan mengaplikasikan kemampuan penalaran, literasi, serta kuantitatif yang diujikan lewat strategi penyelesaian masalah yang akurat dan efisien, dan menunjukkan peningkatan performa secara konsisten melalui latihan dan simulasi.

Tujuan khusus:
- Mengidentifikasi kompetensi inti pada tujuh subtes UTBK-SNBT.
- Menerapkan penalaran induktif, deduktif, dan kuantitatif dalam berbagai bentuk stimulus.
- Memahami, menginterpretasi, mengevaluasi, dan merefleksi informasi dalam teks Bahasa Indonesia dan Bahasa Inggris.
- Memodelkan permasalahan kontekstual ke dalam bentuk matematika dan mengevaluasi kewajaran hasilnya.
- Memilih strategi pengerjaan berdasarkan karakter soal dan keterbatasan waktu.
- Mengevaluasi kesalahan berdasarkan kategori konsep, reasoning, reading, calculation, dan time management.
- Memakai hasil latihan dan tryout sebagai dasar rencana remediasi personal.

Metode pembelajaran: synchronous (waktu nyata lewat video konferensi, dengan ceramah, latihan, dan diskusi) dan asynchronous (video pembelajaran).

Evaluasi: program (kesesuaian materi dengan framework terbaru, perkembangan hasil belajar, tingkat penyelesaian aktivitas, konsistensi penguasaan materi, umpan balik peserta dan pengajar), pengajar (ketepatan konsep, kejelasan penyampaian, pengelolaan waktu, kualitas pembahasan soal, respons terhadap pertanyaan, konsistensi memakai kurikulum), dan peserta (tes diagnostik, latihan topikal, latihan berbatas waktu, mini tryout, full tryout, dan remediasi).`,
    },
  ],
  tahapan: [tahapTps, tahapLiterasi],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Kurikulum UTBK-SNBT 2027 (Product Management, PT Cerebrum Edukanesia Nusantara, September 2026)',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan:
        'Struktur, jumlah soal, waktu, materi, dan tipe soal 2027 adalah proyeksi dari framework resmi ' +
        'UTBK-SNBT 2026; jadwal 2027 berasal dari proyeksi eksternal. Belum ada ketentuan resmi SNPMB 2027.',
    },
    {
      jenis: 'internal',
      judul: 'Contoh Soal UTBK (dokumen tim, 77 halaman, tanpa kunci dan pembahasan)',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan:
        'Sumber contoh soal PU, PPU, PBM, PK, Literasi Bahasa Indonesia, dan Penalaran Matematika. ' +
        'Kunci dan pembahasan disusun ulang tim (draft, menunggu tim akademik). Soal yang kuncinya ' +
        'ambigu atau datanya keliru dan soal kembar tidak dimasukkan; dari sisanya dipilih sekitar lima ' +
        'sampai tujuh soal per submateri. Daftar soal yang dilewati ada di komentar awal berkas contoh-*.ts.',
    },
    {
      jenis: 'internal',
      judul: 'Penalaran Induktif (dokumen tim, 16 soal lengkap dengan kunci dan pembahasan)',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan:
        'Kunci dan pembahasan 16 soal Penalaran Umum diambil dari dokumen ini (status direview). ' +
        'Sebagian soalnya adalah versi perbaikan soal di "Contoh Soal UTBK"; yang sama memakai versi ini.',
    },
  ],
};
