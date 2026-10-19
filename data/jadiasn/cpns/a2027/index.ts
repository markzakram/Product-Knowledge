import type { Angkatan } from '@/lib/skema';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapSkd } from './t2-skd';
import { tahapSkb } from './t3-skb';

/**
 * CPNS 2027.
 *
 * Sumber utama: "JadiASN - Riset Seleksi CPNS 2027" (Product Management, PT Cerebrum
 * Edukanesia Nusantara, Oktober 2026). Belum ada pengumuman resmi seleksi CPNS
 * 2027, jadi angkatan dan semua tahapannya berstatus 'indikasi'. Ketentuan yang
 * dikutip riset berasal dari aturan 2024 (PERMENPANRB No. 6, KEPMENPANRB No. 320,
 * 321, dan 350 Tahun 2024) dan bisa berubah saat pengumuman resmi terbit.
 *
 * Contoh soal SKD: satu paket 110 soal dari SKD Generator (TWK 30, TIU 35, TKP 45; berkas
 * contoh-skd.ts, dipakai juga oleh SKD Sekolah Kedinasan 2026). Kisi-kisi enam aspek TKP dan
 * ringkasan perubahan TIU tetap dari dua dokumen terpisah yang dirujuk riset BAB V:
 * "Panduan Produksi TKP SKD CPNS" dan "Contoh Soal TIU SKD 2027".
 *
 * Polanya mengikuti a2026 (yang tidak diubah). Bagian yang TIDAK dibahas riset
 * disalin dari a2026 dan diberi catatan sumber di tempatnya: tahapan SKB, bobot
 * nilai akhir SKD 40 persen dan SKB 60 persen, serta mode tahapan. Mapping SKD
 * memakai Mapping SKD 2027 dari SKD Generator (3 paket), bukan a2026.
 */
export const cpns2027: Angkatan = {
  kode: '2027',
  nama: 'Formasi 2027',
  tahun: 2027,
  status: 'indikasi',
  ringkasan:
    'Tiga tahap: seleksi administrasi, SKD (TWK 30, TIU 35, TKP 45 soal), lalu SKB. ' +
    'Isinya mengikuti riset Product Management Oktober 2026; belum ada pengumuman resmi ' +
    'seleksi CPNS 2027. Perubahan materi TIU adalah proyeksi dari SKD Sekdin 2026. ' +
    'Contoh soal SKD: satu paket 110 soal dari SKD Generator (draf).',
  diperbarui: '2026-10-19',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Catatan Status dan Sumber Informasi 2027',
      isi: `Belum ada pengumuman resmi seleksi CPNS 2027. Isi angkatan ini bersumber dari riset internal "JadiASN - Riset Seleksi CPNS 2027" (Product Management, Oktober 2026) dan berstatus indikasi, jadi jangan disampaikan ke peserta sebagai kepastian.

- Ketentuan seleksi (persyaratan umum, batas usia, jumlah soal, bobot, nilai ambang batas) dikutip riset dari PERMENPANRB No. 6 Tahun 2024 serta KEPMENPANRB No. 320, 321, dan 350 Tahun 2024. Riset memakainya sebagai acuan; ketentuan siklus 2027 bisa berbeda saat pengumuman resmi terbit.
- Perubahan materi TIU 2027 adalah proyeksi tim riset berdasarkan SKD Sekdin 2026.
- Yang tidak dibahas riset (SKB, bobot nilai akhir SKD 40 persen dan SKB 60 persen, mode tahapan) disalin dari data CPNS 2026 (a2026) dan diberi catatan sumber di tempatnya.
- Ringkasan perubahan TIU berasal dari dokumen "Contoh Soal TIU SKD 2027"; kisi-kisi dan ringkasan aturan produksi enam aspek TKP berasal dari "Panduan Produksi TKP SKD CPNS" (PT Cerebrum Edukanesia Nusantara, 2026). Keduanya dokumen terpisah yang dirujuk riset.
- Contoh soal SKD (TWK 30, TIU 35, TKP 45) adalah satu paket dari SKD Generator, memakai kuota Mapping SKD 2027. Sebanyak 100 soal berasal dari contoh tryout internal 2027 dan berstatus draft sampai ditelaah tim; 10 soal TIU (1 analogi kata, 1 deret angka, dan 8 figural bergambar) berasal dari dokumen "Contoh Soal TIU SKD 2027" dan berstatus direview, karena belum ada di tryout generator. Paket yang sama dipakai di SKD Sekolah Kedinasan 2026.
- Contoh soal riset sebelumnya (40 TWK, 59 TIU, 26 TKP) sudah diganti paket itu dan masih ada di riwayat git (commit 24ad183).`,
    },
    {
      tipe: 'pendahuluan',
      judul: 'Gambaran Umum ASN',
      isi: `Aparatur Sipil Negara (ASN) adalah pegawai yang bekerja pada instansi pemerintah pusat dan daerah untuk melaksanakan tugas pemerintahan dan pelayanan publik. ASN berperan sebagai pelaksana kebijakan publik, pelayan masyarakat, serta perekat dan pemersatu bangsa. Dalam menjalankan tugasnya, ASN dituntut bekerja secara profesional, netral, dan berintegritas sesuai dengan prinsip sistem merit (UU Nomor 20 Tahun 2023 tentang ASN).

ASN terdiri atas dua jenis:
1. Pegawai Negeri Sipil (PNS): warga negara Indonesia yang diangkat sebagai pegawai ASN secara tetap oleh pejabat yang berwenang dan memiliki Nomor Induk Pegawai (NIP) secara nasional. PNS menjalankan tugas pemerintahan dan pelayanan publik dengan status kepegawaian permanen.
2. Pegawai Pemerintah dengan Perjanjian Kerja (PPPK): warga negara Indonesia yang diangkat sebagai pegawai ASN berdasarkan perjanjian kerja untuk jangka waktu tertentu guna melaksanakan tugas pemerintahan sesuai kebutuhan instansi. PPPK berkedudukan sebagai ASN, tetapi hubungan kerjanya bersifat kontraktual.

Pembagian ini memberi pemerintah fleksibilitas memenuhi kebutuhan aparatur sesuai karakteristik jabatan, dan menjadi dasar untuk memahami perbedaan jalur seleksi CPNS dan PPPK.`,
    },
    {
      tipe: 'pendahuluan',
      judul: 'Perbedaan CPNS dan PPPK',
      isi: `Status kepegawaian
- CPNS: tahap awal sebelum seseorang diangkat menjadi Pegawai Negeri Sipil (PNS) dengan status kepegawaian tetap.
- PPPK: pegawai ASN dengan hubungan kerja berdasarkan perjanjian kerja untuk jangka waktu tertentu.

Pola pengangkatan
- CPNS: diangkat melalui tahapan seleksi dan masa percobaan sebelum ditetapkan sebagai PNS.
- PPPK: diangkat langsung sebagai ASN berdasarkan kontrak kerja sesuai kebutuhan instansi tanpa melalui masa CPNS.

Sistem seleksi
- CPNS: seleksi bersifat kompetitif dan menggunakan sistem peringkat dengan nilai ambang batas tertentu.
- PPPK: seleksi lebih menekankan pemenuhan kompetensi sesuai jabatan yang dilamar dan disesuaikan dengan kebutuhan instansi.

Karakter jabatan
- CPNS: umumnya mengisi jabatan yang bersifat berjenjang dan memiliki jalur pengembangan karier jangka panjang.
- PPPK: lebih diarahkan untuk mengisi jabatan fungsional atau jabatan tertentu yang membutuhkan keahlian spesifik.

Dasar: UU Nomor 20 Tahun 2023 dan PERMENPANRB No. 6 Tahun 2024.`,
    },
    {
      tipe: 'pendahuluan',
      judul: 'Tahapan Seleksi CASN',
      isi: `Seleksi Calon Aparatur Sipil Negara (CASN) memiliki dua jalur utama, CPNS dan PPPK. Keduanya sama-sama diawali seleksi administrasi, tetapi tahapan berikutnya berbeda.

Seleksi CPNS secara umum:
1. Seleksi Administrasi: pemeriksaan kesesuaian persyaratan dan dokumen pendaftaran dengan ketentuan yang berlaku.
2. Seleksi Kompetensi Dasar (SKD): menilai kompetensi dasar peserta sesuai standar nasional.
3. Seleksi Kompetensi Bidang (SKB): menilai kompetensi peserta sesuai dengan jabatan atau bidang yang dilamar.

Seleksi PPPK secara umum:
1. Seleksi Administrasi: pemeriksaan kelengkapan dan kesesuaian persyaratan administrasi peserta.
2. Seleksi Kompetensi: menilai kompetensi peserta sesuai kebutuhan jabatan, meliputi kompetensi teknis dan kompetensi pendukung lainnya.

Kurikulum CPNS dan PPPK dibahas terpisah di dokumen riset yang berbeda; angkatan ini hanya memuat jalur CPNS.`,
    },
    {
      tipe: 'pendahuluan',
      judul: 'Latar Belakang SKD',
      isi: `Seleksi Kompetensi Dasar (SKD) dalam rekrutmen CPNS adalah tahap awal yang krusial untuk menjaring individu berkualitas mengisi jabatan di lingkungan pemerintahan. SKD mengukur kompetensi dasar calon peserta, meliputi pengetahuan umum (TWK), tes intelegensia umum (TIU), dan tes karakteristik pribadi (TKP). Melalui SKD diharapkan diperoleh calon pegawai yang memiliki integritas, profesionalisme, loyalitas, dan komitmen tinggi terhadap negara dan bangsa.

Landasan hukumnya adalah UU Nomor 20 Tahun 2023 tentang ASN, payung hukum seluruh manajemen ASN termasuk rekrutmen. Mekanisme seleksi, materi yang diujikan, nilai ambang batas, dan tata cara pelaksanaan SKD diatur lebih lanjut lewat peraturan menteri dan keputusan menteri yang bersifat teknis, serta pedoman pelaksanaan seleksi yang ditetapkan instansi pembina kepegawaian secara nasional.

SKD dilaksanakan dengan sistem Computer Assisted Test (CAT) untuk meningkatkan objektivitas, efisiensi, dan transparansi. Peserta mengerjakan sejumlah soal dalam waktu terbatas. Hasil SKD menjadi dasar menentukan peserta yang berhak mengikuti tahap berikutnya, yaitu SKB.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Peserta dan Batas Usia',
      isi: `Rentang usia pelamar menurut kategori pelamar atau jabatan:
- Pelamar CPNS umum: 18 sampai 35 tahun (KEPMENPANRB No. 320 Tahun 2024, Diktum KETIGA)
- Dokter dan dokter gigi dengan kualifikasi dokter gigi spesialis: 18 sampai 40 tahun (KEPMENPANRB No. 320 Tahun 2024, Diktum KEEMPAT)
- Dokter pendidik klinis: 18 sampai 40 tahun (KEPMENPANRB No. 320 Tahun 2024, Diktum KEEMPAT)
- Dosen, peneliti, dan perekayasa dengan kualifikasi pendidikan doktor: 18 sampai 40 tahun (KEPMENPANRB No. 320 Tahun 2024, Diktum KEEMPAT)
- Pelamar CPNS di Wilayah Papua dan Daerah Otonomi Baru (DOP) Papua: 18 sampai 48 tahun (KEPMENPANRB No. 350 Tahun 2024, Diktum KEENAM)
- Eks Tenaga Honorer Kategori II (THK-II) Orang Asli Papua (OAP): 18 sampai 50 tahun (KEPMENPANRB No. 350 Tahun 2024, Diktum KEENAM)`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan Umum',
      isi: `Sesuai PERMENPANRB No. 6 Tahun 2024 Pasal 23, setiap warga negara Indonesia mempunyai kesempatan yang sama untuk melamar menjadi ASN dengan memenuhi persyaratan dan prosedur berikut:
1. Usia sesuai dengan ketentuan pada bagian Peserta dan Batas Usia.
2. Tidak pernah dipidana dengan pidana penjara berdasarkan putusan pengadilan yang telah memiliki kekuatan hukum tetap karena melakukan tindak pidana dengan pidana penjara 2 tahun atau lebih.
3. Tidak pernah diberhentikan dengan hormat tidak atas permintaan sendiri atau tidak dengan hormat sebagai PNS, PPPK, prajurit Tentara Nasional Indonesia, anggota Kepolisian Negara Republik Indonesia, atau diberhentikan tidak dengan hormat sebagai pegawai swasta.
4. Tidak berkedudukan sebagai calon PNS, PNS, prajurit Tentara Nasional Indonesia, atau anggota Kepolisian Negara Republik Indonesia.
5. Tidak menjadi anggota atau pengurus partai politik atau terlibat politik praktis.
6. Memiliki kualifikasi pendidikan sesuai dengan persyaratan jabatan.
7. Memiliki kompetensi yang dibuktikan dengan sertifikasi keahlian tertentu yang masih berlaku dari lembaga profesi yang berwenang untuk jabatan yang mempersyaratkan.
8. Sehat jasmani dan rohani sesuai dengan persyaratan jabatan yang dilamar.
9. Bersedia ditempatkan di seluruh wilayah Negara Kesatuan Republik Indonesia atau negara lain yang ditentukan oleh instansi pemerintah.
10. Persyaratan lain sesuai kebutuhan jabatan yang ditetapkan oleh Pejabat Pembina Kepegawaian (PPK).`,
    },
    {
      tipe: 'penilaian',
      judul: 'Sistem Penilaian Seleksi CASN',
      isi: `Sistem penilaian dirancang mengukur kemampuan peserta secara objektif dan adil sesuai kompetensi yang dibutuhkan jabatan. Penilaian tidak hanya menitikberatkan penguasaan pengetahuan, tetapi juga kesesuaian kompetensi peserta dengan tuntutan tugas dan fungsi jabatan yang dilamar (Peraturan BKN Nomor 5 Tahun 2024 tentang Pedoman CAT).

Prinsip umumnya:
1. Penilaian berbasis kompetensi: mengukur kompetensi yang relevan dengan jabatan, baik teknis maupun pendukung. Hasilnya mencerminkan kesiapan peserta menjalankan tugas jabatan yang dilamar.
2. Penggunaan Computer Assisted Test (CAT): penilaian dilakukan langsung, objektif, dan transparan; intervensi manual diminimalkan dan hasil tes dapat dipantau secara real time.
3. Nilai ambang batas dan peringkat: nilai ambang batas menjadi batas minimal kelulusan pada tahapan tertentu, dan penetapan kelulusan juga mempertimbangkan peringkat peserta berdasarkan nilai yang diperoleh, sesuai ketentuan yang berlaku.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Perubahan TIU: SKD 2024 ke SKD 2027',
      isi: `Perubahan materi TIU dari SKD CPNS 2024 ke SKD CPNS 2027 menurut riset, berdasarkan SKD Sekdin 2026. Ini proyeksi tim riset, bukan pengumuman resmi (indikasi): jangan disampaikan ke peserta sebagai kepastian.

Verbal - Analogi
- 2024: 2 Kata, Kalimat
- 2027: 2 Kata

Verbal - Silogisme
- 2024: 2 Premis
- 2027: 3 Premis, 2 Premis - Narasi, 3 Premis - Narasi

Verbal - Analitis
- 2024: Susunan & Posisi, Urutan & Peringkat, Jadwal, Logika Pernyataan, Distribusi & Kategori, Rute & Jalur
- 2027: Memperkuat/Memperlemah Argumen, Susunan & Posisi, Urutan & Peringkat, Jadwal, Logika Pernyataan, Distribusi & Kategori, Rute & Jalur

Numerik - Deret Angka
- 2024: Deret Angka - 1 Towew, Deret Angka - 2 Towew, Deret Angka - 3 Towew, Deret Angka - Hijab, Deret Angka - Template, Deret Angka - Campuran, Deret Angka - Fibonacci
- 2027: sama dengan 2024, ditambah Matriks Deret dan Pola Bilangan Tabel

Numerik - Berhitung
- 2024: Operasi Hitung - Pecahan Sederhana
- 2027: Operasi Hitung - Pecahan Sederhana, Perkalian Setara, Pembagian Setara

Numerik - Soal Cerita
- 2024: Rata-rata, Perbandingan Senilai dan Berbalik, Polemik Proyek, JKW (Jarak, Kecepatan, Waktu), VDW (Volume, Debit, Waktu), Tabel, Aritmatika Sosial
- 2027: Tabel Pernyataan - Kombinasi Pernyataan, Tabel Pernyataan - Kombinasi Optimal

Numerik - Perbandingan Kuantitatif
- 2024: Hubungan 2 Variabel dan Tabel - Berhitung, Hubungan 2 Variabel dan Tabel - Soal Cerita
- 2027: Kecukupan Data - Aljabar, Kecukupan Data - Bilangan, Kecukupan Data - Soal Cerita

Figural
- 2024: Analogi, Ketidaksamaan, Serial, Matriks (9 Kotak)
- 2027: tetap sama`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Taksonomi Bloom untuk Penyusun Soal',
      isi: `Panduan produksi TKP memakai Taksonomi Bloom untuk menentukan jenjang berpikir tiap soal. Tiap contoh soal di panduan itu mencantumkan Level Bloom dan Tingkat Kesulitan.

- C1 Mengingat (Mudah): mengenali atau menyebutkan kembali informasi dasar yang eksplisit. Hindari kosakata terlalu asing agar soal tidak terasa sulit secara tidak proporsional.
- C2 Memahami (Sedang): memahami makna, konsep, atau hubungan, bukan sekadar hafalan. Pengecoh boleh mulai mirip, tetapi tidak terlalu menjebak.
- C3 Menerapkan (Sulit): memakai konsep, aturan, atau prinsip pada konteks baru dan perlu beberapa langkah. Pastikan data cukup dan tidak ada lebih dari satu jawaban benar.
- C4 Menganalisis (HOTS): menguraikan informasi, membandingkan unsur, menemukan hubungan sebab-akibat atau pola tersembunyi. HOTS utama; pengecoh kuat tetapi harus bisa dieliminasi dengan alasan logis.
- C5 Mengevaluasi (HOTS): menimbang dan memilih opsi paling tepat berdasarkan kriteria. Beberapa opsi tampak benar, hanya satu yang paling tepat; hindari opsi yang sama-sama benar tanpa pembeda jelas.
- C6 Menciptakan (HOTS): pada pilihan ganda, memilih rancangan, strategi, susunan, atau solusi terbaik yang dibangun dari beberapa informasi. Dipakai selektif.

Catatan penting: level Bloom bukan satu-satunya penentu kesulitan. Panjang stimulus, kejelasan perintah, kompleksitas data, jumlah langkah, keabstrakan konsep, dan kualitas pengecoh ikut menentukan. Soal C1 bisa sulit bila istilahnya terlalu asing, sedangkan soal C4 atau C5 bisa terlalu mudah bila pola jawabannya terlalu terlihat.

Rentang Bloom dan tingkat kesulitan tiap materi pokok ada di item tiap aspek (Pelayanan Publik sampai Anti Radikalisme).`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Pelayanan Publik',
      isi: `Mengukur orientasi peserta dalam memberikan layanan yang dapat diakses, adil, jelas, cepat, aman, akuntabel, dan berorientasi pada kebutuhan masyarakat. Yang diuji tidak terbatas pada keramahan: petugas yang ramah tetapi memberi informasi salah, melanggar prosedur, atau tidak adil tetap berkualitas rendah.

Hierarki penilaian respons (urutan filter untuk menentukan skor):
1. Legalitas dan integritas: pelanggaran serius tidak boleh menjadi skor 5 meskipun tampak membantu.
2. Hak, keselamatan, dan keadilan: pilih kasih, manipulasi antrean, atau diskriminasi menurunkan skor.
3. Orientasi pada kebutuhan: respons solutif lebih tinggi daripada yang pasif atau sekadar mengalihkan.
4. Empati dan komunikasi: memperkuat skor, tetapi tidak menggantikan solusi.
5. Efektivitas dan keberlanjutan: perbaikan akar masalah lebih tinggi daripada tindakan kosmetik.
6. Akuntabilitas dan tindak lanjut: eskalasi atau koordinasi yang tepat menaikkan skor bila memang diperlukan.

Prinsip kunci: respons terbaik hampir selalu memadukan dua sisi, yaitu tetap patuh dan adil tetapi aktif membantu. Hindari pasangan semu "taat aturan tetapi tidak peduli" versus "peduli tetapi melanggar aturan"; opsi skor 5 harus menunjukkan cara membantu tanpa mengorbankan integritas.

Lima materi pokok (rentang Bloom; tingkat kesulitan; fokus dan contoh konflik):
1.1 Konsep Dasar dan Ruang Lingkup (C2-C5; Sedang-HOTS): tujuan layanan, pihak yang dilayani, partisipasi, pengaduan, perbaikan berkelanjutan; target internal versus kebutuhan masyarakat. Indikator: orientasi pengguna, partisipasi, keberlanjutan, keterhubungan layanan.
1.2 Prinsip dan Standar (C3-C5; Sedang-HOTS): SOP, syarat, waktu, biaya, transparansi, akuntabilitas, kepastian proses; kepatuhan prosedur versus kemudahan layanan. Prinsip penilaian: kepastian dan legalitas, keterbukaan, akuntabilitas, kesetaraan, ketepatan waktu, kemudahan akses, keamanan dan kerahasiaan.
1.3 Pelayanan Prima dan Kepuasan (C3-C5; Sedang-HOTS): empati, komunikasi, respons cepat, service recovery, pengelolaan emosi; warga marah, sistem lambat, atau informasi tidak jelas. Kesalahan umum penyusun: menjadikan "meminta maaf" otomatis skor 5, menilai ketegasan sebagai kasar, memberi skor tinggi pada janji yang tidak realistis.
1.4 Adil, Inklusif, dan Tidak Diskriminatif (C3-C5; Sedang-HOTS): kesetaraan, akomodasi layak, akses kelompok rentan, anti-favoritisme; loket prioritas, hambatan disabilitas, atau kesenjangan digital. Akomodasi tidak boleh menjadi perlakuan istimewa karena kedekatan, tekanan, jabatan, atau kemampuan ekonomi.
1.5 Pengambilan Keputusan (C4-C6; Sulit-HOTS): analisis risiko, urgensi, kewenangan, koordinasi, diskresi yang sah; situasi darurat, aturan berubah, atau dokumen bermasalah. Bentuk paling kuat untuk soal TKP: semua opsi tampak masuk akal, hanya satu yang paling lengkap dan proporsional.`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Jejaring Kerja',
      isi: `Kemampuan membangun dan memelihara hubungan profesional yang dilandasi tujuan bersama, kepercayaan, komunikasi terbuka, saling menghargai, pertukaran informasi atau sumber daya yang tepat, serta komitmen tindak lanjut. Mencakup hubungan di dalam tim maupun lintas unit, organisasi, sektor, komunitas, dan pemangku kepentingan lain.

Hierarki penilaian respons (urutan filter untuk menentukan skor):
1. Integritas dan batas etis: relasi, data, dan koneksi dipakai secara sah, transparan, dan tanpa konflik kepentingan; penyalahgunaan relasi tidak boleh bernilai tinggi.
2. Tujuan dan kepentingan bersama: respons yang terlalu individualistis atau berpihak menurunkan skor.
3. Kepercayaan dan penghargaan: mempermalukan, menekan, atau mengabaikan pihak lain menurunkan skor.
4. Komunikasi dan informasi: informasi akurat, relevan, dibagikan ke pihak yang tepat lewat saluran yang sesuai; menahan, menyebarkan selektif, atau membagikan data tanpa verifikasi menurunkan skor.
5. Koordinasi dan kejelasan peran: kolaborasi tanpa pembagian peran mudah menjadi simbolik dan tidak produktif.
6. Efektivitas dan keberlanjutan: solusi bersama dan mekanisme evaluasi lebih tinggi daripada tindakan sesaat.

Prinsip kunci: respons terbaik bukan selalu yang paling formal atau paling akrab. Nilai tinggi muncul ketika peserta memilih cara yang tepat untuk pihak, masalah, waktu, dan risiko: langsung tetapi sopan, terbuka tetapi menjaga kerahasiaan, kolaboratif tetapi tetap jelas peran dan tanggung jawabnya.

Empat materi pokok (rentang Bloom; tingkat kesulitan; fokus dan contoh konflik):
2.1 Konsep Dasar dan Prinsip (C2-C5; Sedang-HOTS): tujuan bersama, kepercayaan, kesetaraan, timbal balik, keterbukaan, etika, akuntabilitas; pihak belum percaya, hubungan terlalu formal, atau kerja sama berat sebelah. Panduan tidak memuat contoh soal untuk materi ini.
2.2 Komunikasi, Koordinasi, dan Berbagi Informasi (C3-C5; Sedang-HOTS): komunikasi langsung, mendengar aktif, akses informasi, verifikasi data, kanal, waktu, kejelasan peran; data terlambat, informasi tidak merata, rapat tidak efektif, atau salah koordinasi. Pembeda skor 5 dan 4: skor 5 membagikan informasi lewat kanal bersama kepada semua pihak relevan dan menyediakan ruang klarifikasi, sedangkan skor 4 hanya menjangkau sebagian pihak atau belum memberi kepastian.
2.3 Kolaborasi dan Penyelesaian Masalah dalam Tim (C3-C5; Sedang-HOTS): partisipasi, pembagian tugas, mediasi, keputusan bersama, dukungan, umpan balik, tanggung jawab kolektif; konflik, anggota pasif, dominasi, beban tidak seimbang, atau target terlambat. Respons skor tinggi menggali fakta, memediasi secara objektif, memperjelas peran, dan meninjau kapasitas; pengecoh umum: menyalahkan, mengambil alih tugas, atau memaksakan keputusan.
2.4 Pengembangan Hubungan Kerja dan Kemitraan Produktif (C3-C5; Sedang-HOTS): pemetaan mitra, manfaat timbal balik, pemanfaatan jejaring secara etis, pemeliharaan relasi, evaluasi, keberlanjutan. Tahap kemitraan: pemetaan, pendekatan, perancangan, pelaksanaan, pemeliharaan, evaluasi.`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Sosial Budaya',
      isi: `Kompetensi memahami dan merespons keragaman nilai, norma, identitas, kebiasaan, kelompok, dan perubahan sosial secara terbuka, adil, empatik, serta konstruktif. Terlihat dari tindakan nyata dalam interaksi, bukan dari pernyataan bahwa seseorang toleran atau menghargai budaya.

Empat materi pokok (rentang Bloom; tingkat kesulitan; fokus dan contoh konflik):
3.1 Konsep Dasar, Unsur, dan Struktur Sosial Budaya (C2-C4; Sedang-HOTS): nilai, norma, adat, kebiasaan, identitas, peran sosial, lembaga sosial, struktur sosial, hubungan antarkelompok; salah memahami norma lokal, benturan peran formal dan informal, atau perbedaan adat. Bukan hafalan istilah sosiologi, tetapi kemampuan membaca struktur sosial sebelum bertindak. Indikator: membedakan penghormatan budaya dari kepatuhan buta, menghindari generalisasi kelompok, memahami makna simbolik sebelum menilai.
3.2 Adaptasi dalam Masyarakat Majemuk (C3-C5; Sulit-HOTS): keterbukaan, toleransi, penyesuaian komunikasi, bahasa, tata krama, kebiasaan, fleksibilitas; masuk lingkungan baru, kesulitan memahami bahasa lokal, atau tuntutan mengikuti tata cara setempat. Pembeda: adaptasi (mencari informasi, bertanya dengan sopan, menyesuaikan secara proporsional, tetap menjaga aturan dan keselamatan) versus penyeragaman (memaksakan cara sendiri atau mengikuti semua kebiasaan tanpa batas).
3.3 Empati, Kepedulian, dan Harmoni Sosial (C3-C5; Sulit-HOTS): empati, kepedulian, dukungan sosial, inklusivitas, partisipasi setara, nondiskriminasi, perlindungan martabat; kelompok minoritas tersisih, rekan didiskriminasi, atau stereotip. Tingkatan respons empatik: empati pasif (belum cukup untuk skor tinggi), dukungan personal, intervensi kelompok, perbaikan sistem (cocok untuk skenario pimpinan atau kebijakan).
3.4 Perubahan Sosial Budaya dan Penyelesaian Konflik (C4-C6; HOTS): perubahan nilai, modernisasi, pelestarian budaya, dialog, musyawarah, mediasi, integrasi sosial; konflik antargenerasi, penolakan perubahan, atau pembangunan yang berbenturan dengan nilai lokal. Urutan penyelesaian konflik: stabilisasi, klarifikasi, dialog, keputusan, tindak lanjut.`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Teknologi Informasi dan Komunikasi',
      isi: `Kemampuan menggunakan, mempelajari, dan mengelola teknologi secara produktif, aman, etis, adaptif, dan bertanggung jawab. Terlihat dari kualitas keputusan ketika teknologi memberi peluang sekaligus risiko, bukan dari banyaknya aplikasi yang dikuasai.

Tiga materi pokok (rentang Bloom; tingkat kesulitan; fokus dan contoh konflik):
4.1 Konsep Dasar dan Pemanfaatan TIK dalam Pekerjaan (C2-C6; Sedang-HOTS): efisiensi, produktivitas, akurasi, pemilihan teknologi, kolaborasi digital, otomatisasi, validasi hasil, kesinambungan pekerjaan; memilih cara manual atau digital, aplikasi yang belum teruji, hasil otomatisasi tidak akurat, atau sistem antarunit tidak terintegrasi. Yang diuji ketepatan memilih alat, bukan langkah teknis aplikasi. Kesalahan umum: memakai alat terbaru hanya karena canggih, mengejar kecepatan tanpa verifikasi, menerima keluaran aplikasi atau AI tanpa validasi.
4.2 Adaptasi terhadap Perubahan Teknologi (C3-C6; Sulit-HOTS): pembelajaran mandiri, kesiapan berubah, penerapan bertahap, pendampingan, berbagi pengetahuan, pengelolaan resistensi, evaluasi; pegawai menolak sistem baru, kemampuan digital tidak merata, atau perubahan tanpa pelatihan. Spektrum adaptasi: memahami, belajar, mencoba terkontrol, berbagi dan mendampingi, mengelola transisi, mengevaluasi. Pengecoh umum: menunggu instruksi, menolak karena cara lama masih berjalan, memaksa semua beralih, mencoba pada data penting tanpa izin.
4.3 Etika, Keamanan, dan Tanggung Jawab Digital (C2-C6; Sedang-HOTS): privasi, kerahasiaan, keamanan akses, verifikasi informasi, etika bermedia, perlindungan data, pelaporan insiden, akuntabilitas digital; phishing, berbagi kata sandi, aplikasi tidak resmi, kebocoran data, atau penggunaan AI tanpa verifikasi. Fokusnya bukan teknik keamanan siber, tetapi mengenali risiko, membatasi tindakan, melapor lewat jalur yang tepat, menjaga bukti, dan mencegah pengulangan. Dimensi: kerahasiaan, integritas, ketersediaan, privasi dan minimalisasi, jejak dan akuntabilitas, etika komunikasi, penggunaan AI atau otomatisasi.`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Profesionalisme',
      isi: `Kemampuan menjalankan peran berdasarkan kompetensi, standar, etika, tanggung jawab, dan orientasi mutu. Profesional tidak hanya mencapai hasil, tetapi memastikan caranya dapat dipertanggungjawabkan, menghormati pihak lain, menjaga kepentingan organisasi, dan terus memperbaiki kemampuan serta sistem kerja.

Komponen penilaian utama: standar dan etika; tanggung jawab; akuntabilitas; disiplin; mutu kinerja; penyelesaian masalah; pengembangan kompetensi.

Profesionalisme bukan: kepatuhan buta kepada atasan ketika instruksi bertentangan dengan standar; mengejar kesempurnaan sampai pekerjaan terlambat; mengambil semua tugas sendiri agar terlihat mampu; melaporkan setiap kesalahan kecil secara formal tanpa klarifikasi; menjaga citra dengan menutup-nutupi masalah; menilai kinerja hanya dari kesibukan atau jam kerja panjang.

Tiga materi pokok (rentang Bloom; tingkat kesulitan; fokus dan contoh konflik):
5.1 Konsep Dasar, Ciri, dan Etika Profesional (C2-C5; Sedang-HOTS): integritas kerja, objektivitas, ketelitian, etika komunikasi, batas kewenangan, kerahasiaan, kepatuhan terhadap standar, kepercayaan profesional; diminta menyetujui dokumen yang belum diperiksa, menemukan kesalahan rekan senior, menghadapi konflik kepentingan, atau diminta membagikan informasi rahasia. Inti penilaian: konsistensi antara nilai, proses, dan hasil.
5.2 Tanggung Jawab, Akuntabilitas, dan Disiplin Kerja (C3-C5; Sedang-HOTS): komitmen, disiplin, ketepatan waktu, prioritas, transparansi, pertanggungjawaban, kepatuhan prosedur, delegasi, tindak lanjut; tenggat terancam, rekan melanggar disiplin, kesalahan kerja, atau beberapa tugas mendesak sekaligus. Tanggung jawab berfokus pada siapa yang harus bertindak, akuntabilitas pada bagaimana keputusan dapat dibuktikan, disiplin pada konsistensi menjalankan kewajiban dan aturan.
5.3 Kualitas Kinerja, Penyelesaian Masalah, dan Pengembangan Kompetensi (C3-C6; Sedang-HOTS): orientasi mutu, pemecahan masalah, adaptabilitas, efisiensi, pemanfaatan sumber daya, pembelajaran, umpan balik, pembinaan, perbaikan berkelanjutan; perangkat kerja bermasalah, sumber daya terbatas, kualitas hendak dikurangi, atau kesalahan yang sama terus berulang. Siklus penyelesaian masalah: klarifikasi, analisis, prioritas, tindakan, kendali, belajar.`,
    },
    {
      tipe: 'lainnya',
      judul: 'TKP: Aspek Anti Radikalisme',
      isi: `Kemampuan menjaga kehidupan bersama yang damai, setara, plural, dan taat aturan melalui pencegahan serta respons terhadap intoleransi sistematis, dehumanisasi, propaganda kebencian, pemaksaan, pembenaran kekerasan, perekrutan, dan tindakan yang mengancam hak atau keselamatan orang lain.

Komponen penilaian utama: ketepatan identifikasi (membedakan fakta, dugaan, kritik, intoleransi, propaganda, dan ancaman); proporsionalitas; keselamatan; non-diskriminasi; kewenangan; pencegahan; komunikasi.

Anti radikalisme bukan: membungkam perbedaan pendapat atau kritik yang disampaikan damai; menyimpulkan seseorang berbahaya hanya dari agama, suku, ras, pakaian, nama, atau komunitas; menyebarkan ulang konten provokatif; menghadapi kelompok atau akun berisiko seorang diri; melaporkan setiap pernyataan yang tidak disukai tanpa verifikasi; mengandalkan tindakan represif ketika dialog masih memadai; memaksakan dialog ketika ada ancaman nyata.

Empat materi pokok (rentang Bloom; tingkat kesulitan; fokus):
6.1 Konsep Dasar Anti Radikalisme (C2-C5; Sedang-HOTS): toleransi, persatuan, penghormatan hak, nondiskriminasi, penolakan kekerasan, moderasi, keadilan, dan pembedaan kritik dari intoleransi.
6.2 Ciri-Ciri dan Bentuk Paparan Radikalisme (C2-C5; Sedang-HOTS): ujaran kebencian, dehumanisasi, propaganda, intoleransi, pembenaran kekerasan, perekrutan, tekanan kelompok, konten provokatif. Identifikasi dilihat dari isi pesan, pola komunikasi, tekanan kelompok, perilaku digital, dan dampak; satu unggahan ambigu, keanggotaan komunitas yang sah, atau sekadar mengikuti akun bukan bukti yang cukup.
6.3 Sikap Pencegahan dan Penolakan terhadap Radikalisme (C3-C5; Sulit-HOTS): klarifikasi, edukasi, dialog, penolakan tegas, perlindungan pihak terdampak, penghentian penyebaran, dokumentasi, pelaporan yang proporsional. Urutan respons: cermati, lindungi, pilih cara, tindak lanjut, evaluasi.
6.4 Respons terhadap Radikalisme di Lingkungan Kerja, Sosial, dan Digital (C3-C6; Sulit-HOTS): penilaian risiko, kekuatan bukti, pengulangan, keselamatan, kewenangan, koordinasi, moderasi digital, perlindungan pelapor, eskalasi resmi. Dialog atau klarifikasi lebih tepat bila informasi masih ambigu, perilaku baru terjadi sekali, dan peserta aman untuk berbicara; pelaporan atau eskalasi lebih tepat bila ada ancaman, ajakan pemaksaan atau kekerasan, perilaku berulang atau terorganisasi, atau peserta tidak berwenang.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Simulasi CAT SKD',
      isi: `Simulasi CAT SKD CPNS yang dirujuk riset:
- Simulasi CAT BKN: https://cat.bkn.go.id/simulasi/ujian_peserta
- Simulasi CAT Figma: prototipe CAT di Figma (tautannya ada di dokumen riset)`,
    },
    {
      tipe: 'lainnya',
      judul: 'Tujuan, Metode, dan Evaluasi Pembelajaran',
      isi: `Tujuan pembelajaran umum: peserta mampu memahami, menganalisis, dan mengaplikasikan konsep-konsep kunci yang diujikan dalam SKD untuk memenuhi nilai ambang batas setiap subtes (TWK, TIU, dan TKP) dan bersaing secara peringkat dalam simulasi CAT SKD.

Tujuan pembelajaran khusus, peserta mampu:
1. Mengidentifikasi kompetensi inti pada TWK, TIU, dan TKP.
2. Menganalisis pola-pola soal CAT SKD berdasarkan tingkat kesulitan dan kategori yang diujikan.
3. Mengaplikasikan strategi pengerjaan soal secara efektif untuk mengoptimalkan waktu dalam simulasi CAT SKD.
4. Mengevaluasi hasil simulasi sebelumnya untuk mengembangkan pendekatan belajar yang lebih efektif.

Metode pembelajaran, dua pendekatan:
1. Synchronous: pembelajaran langsung atau waktu nyata (real-time) lewat konferensi video seperti Zoom atau Google Meet, dengan metode ceramah, latihan, dan diskusi.
2. Asynchronous: pembelajaran tidak langsung memakai video pembelajaran, dengan metode ceramah.

Evaluasi, tiga sasaran:
1. Evaluasi program: mengukur keberhasilan dan efektivitas program pembelajaran (sejauh mana tujuan tercapai dan area apa yang perlu diperbaiki). Memakai kuesioner yang dibagikan di akhir pembelajaran dan diisi oleh peserta dan pengajar.
2. Evaluasi pengajar: mengidentifikasi kekuatan dan kelemahan pengajar serta memberi masukan untuk pengembangan profesional. Memakai kuesioner di akhir pembelajaran yang diisi oleh peserta.
3. Evaluasi peserta: mengukur sejauh mana peserta mencapai tujuan pembelajaran, lewat latihan soal dan try out untuk menguji pemahaman. Tipe soal SKD dan contoh soal disesuaikan dengan yang asli supaya peserta mendapat pengalaman langsung lewat simulasi.`,
    },
  ],
  tahapan: [tahapAdministrasi, tahapSkd, tahapSkb],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiASN - Riset Seleksi CPNS 2027',
      tanggalAkses: '2026-10-15',
      keandalan: 'resmi',
      catatan:
        'Dokumen Product Management, PT Cerebrum Edukanesia Nusantara, Oktober 2026 ' +
        '(sampulnya berjudul "Riset SKD CPNS 2027"). ' +
        'Perubahan materi TIU 2027 di dalamnya adalah proyeksi berdasarkan SKD Sekdin 2026.',
    },
    {
      jenis: 'internal',
      judul: 'Contoh Soal TIU SKD 2027',
      tanggalAkses: '2026-10-15',
      keandalan: 'resmi',
      catatan:
        'Dokumen PDF 74 halaman (dibuat 7 Oktober 2026) yang dirujuk riset BAB V butir 5.2. Sumber 10 soal TIU di paket contoh SKD ' +
        '(1 analogi kata, 1 deret angka, dan 8 figural bergambar). Contoh TIU lainnya dari dokumen ini sudah diganti paket SKD Generator ' +
        'dan masih ada di riwayat git (commit 24ad183).',
    },
    {
      jenis: 'internal',
      judul: 'Panduan Produksi TKP SKD CPNS',
      tanggalAkses: '2026-10-15',
      keandalan: 'resmi',
      catatan:
        'PT Cerebrum Edukanesia Nusantara, 2026 (riset BAB V butir 5.3 menyebutnya "Panduan Produksi Soal TKP JadiASN"). ' +
        'Sumber kisi-kisi dan ringkasan aturan produksi enam aspek. Contoh soal TKP dari panduan ini (26 soal) sudah diganti paket ' +
        'SKD Generator dan masih ada di riwayat git (commit 24ad183).',
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
        'tidak dihitung). Berstatus draf sampai ditelaah tim. Sumber 100 dari 110 soal paket contoh SKD. Angka ketersediaan SIADU tidak dihitung.',
    },
    {
      jenis: 'resmi',
      judul: 'PERMENPANRB No. 6 Tahun 2024',
      keandalan: 'resmi',
      catatan: 'Dasar persyaratan umum (Pasal 23). Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'resmi',
      judul: 'KEPMENPANRB No. 321 Tahun 2024',
      keandalan: 'resmi',
      catatan:
        'Dasar jumlah soal, distribusi subtes, waktu pengerjaan, dan nilai ambang batas SKD. ' +
        'Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'resmi',
      judul: 'KEPMENPANRB No. 320 Tahun 2024',
      keandalan: 'resmi',
      catatan:
        'Dasar batas usia pelamar umum (Diktum KETIGA) dan jabatan tertentu (Diktum KEEMPAT). ' +
        'Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'resmi',
      judul: 'KEPMENPANRB No. 350 Tahun 2024',
      keandalan: 'resmi',
      catatan:
        'Dasar batas usia pelamar Papua dan Daerah Otonomi Baru Papua (Diktum KEENAM). ' +
        'Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'resmi',
      judul: 'Peraturan BKN No. 5 Tahun 2024 tentang Pedoman CAT',
      keandalan: 'resmi',
      catatan: 'Dasar sistem penilaian dan penggunaan CAT. Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'resmi',
      judul: 'UU No. 20 Tahun 2023 tentang Aparatur Sipil Negara',
      keandalan: 'resmi',
      catatan:
        'Dasar sistem merit serta pengertian ASN, PNS, dan PPPK. Dikutip lewat riset 2027; dokumen aslinya belum diperiksa.',
    },
    {
      jenis: 'internal',
      judul: 'Data CPNS Formasi 2026 (a2026) di Product Knowledge',
      keandalan: 'asumsi',
      catatan:
        'Dipakai untuk bagian yang tidak dibahas riset 2027: tahapan SKB, bobot nilai akhir ' +
        '(SKD 40 persen, SKB 60 persen), dan mode tahapan. Anggapan sementara: sama dengan 2026.',
    },
  ],
};
