import type { Angkatan } from '@/lib/skema';
import { tahapPendaftaranOnline } from './t1-pendaftaran-online';
import { tahapValidasi } from './t2-validasi';
import { tahapSeleksiDaerah } from './t3-seleksi-daerah';
import { tahapSeleksiPusat } from './t4-seleksi-pusat';
import { tahapPantukhirPusat } from './t5-pantukhir-pusat';

/**
 * Pa PK TNI 2026 (Gelombang I dan II).
 *
 * Disusun dari "Riset Seleksi Pa PK 2026" (Product Management, September 2026).
 * Jadwal pendaftaran dan kedudukan Sidang Pantukhir Pusat bersumber dari
 * portal dan publikasi resmi TNI; syarat pendidikan dan daftar program studi
 * Gelombang II diambil dari riset yang mengacu ke portal resmi. Tahap
 * validasi dan seleksi daerah bersumber dari pengalaman peserta sebelumnya
 * (sekunder), jadi tahapannya berstatus 'indikasi'. Tanggal uji yang belum
 * diumumkan tidak ditulis.
 */
export const papk2026: Angkatan = {
  kode: '2026',
  nama: 'Seleksi Pa PK 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Lima tahap dari pendaftaran online sampai Sidang Pantukhir Pusat, dibuka dalam dua gelombang. ' +
    'Hanya Seleksi Tingkat Daerah yang punya materi pembelajaran; susunan tes pusat belum dipublikasikan.',
  diperbarui: '2026-10-20',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Tentang Pa PK TNI',
      isi: `⟦gambar:gambar/jadiprajurit/e57b9c255c378117-papk-001.png⟧

Perwira Prajurit Karier (Pa PK) adalah jalur pembentukan perwira TNI bagi lulusan perguruan tinggi yang keahliannya dibutuhkan organisasi TNI. Penerimaan dapat mencakup D4, S1, S1 Profesi, S2, dan kategori tertentu seperti dokter spesialis, tergantung formasi gelombang yang berjalan. Setelah dinyatakan lulus dan menyelesaikan pendidikan pertama, peserta dilantik menjadi perwira sesuai ketentuan yang berlaku.

Pada 2026 penerimaan Pa PK dilaksanakan dalam lebih dari satu gelombang. Jadwal, program studi, kuota, dan persyaratan dapat berubah antargelombang, jadi selalu cocokkan dengan pengumuman resmi gelombang yang berjalan.`,
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal Pendaftaran 2026',
      isi: `Gelombang I: dibuka 25 Januari 2026, ditutup 25 Februari 2026 (portal resmi Rekrutmen TNI).
Gelombang II: dibuka 16 September 2026 pukul 13.00, ditutup 20 Oktober 2026 pukul 23.59 (portal registrasi Pa PK 2026).

Tanggal rinci pemeriksaan daerah, seleksi pusat, dan pembukaan pendidikan tidak seluruhnya ditampilkan terbuka pada halaman publik Gelombang II saat riset disusun. Jangan menyampaikan tanggal uji yang belum diumumkan; peserta perlu memantau akun registrasi dan pengumuman panitia.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Syarat Pendidikan, Akreditasi, dan IPK (Gelombang II 2026)',
      isi: `Pada Gelombang II 2026, pendaftaran dibuka bagi lulusan D4, S1, S1 Profesi, dan S2 sesuai kebutuhan program studi yang diumumkan.
1. Telah lulus dan memiliki ijazah D4/S1/S1 Profesi/S2 sesuai program studi yang dibutuhkan pada formasi Gelombang II 2026.
2. Akreditasi universitas dan program studi minimal B/Baik Sekali pada saat lulus.
3. Program studi berakreditasi A/Unggul: IPK minimal 2,80.
4. Program studi berakreditasi B/Baik Sekali: IPK minimal 3,00.
5. Membawa fotokopi sertifikat atau bukti akreditasi universitas dan program studi yang dikeluarkan lembaga akreditasi yang berwenang.
6. Ijazah luar negeri harus memperoleh pengesahan dari kementerian yang membidangi pendidikan tinggi dan dilengkapi transkrip hasil konversi sesuai ketentuan.
7. Kesesuaian nama program studi harus diperiksa terhadap daftar kebutuhan resmi; kemiripan nama jurusan tidak otomatis berarti memenuhi formasi.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Program Studi yang Dibutuhkan (Gelombang II 2026)',
      isi: `Daftar berikut memuat 55 program studi dalam 12 rumpun. Periksa kembali terhadap daftar kebutuhan resmi di portal sebelum menjawab calon peserta.

Kesehatan & Psikologi (13)
- Kedokteran Spesialis (Profesi)
- Kedokteran Umum
- Kedokteran Gigi
- Kedokteran Hewan
- Apoteker/Farmasi
- Analis Kesehatan
- Fisika (Konsentrasi Medis)
- Radiologi
- Fisioterapi
- Rekam Medis/Rekam Medik
- Gizi
- Psikologi (Profesi Psikolog)
- Magister Profesi Psikolog

Pertanian, Perikanan & Peternakan (9)
- Ilmu Pertanian
- Teknik Pertanian
- Agronomi dan Hortikultura
- Penyuluh Pertanian Lahan Kering
- Budidaya Perairan/Akuakultur
- Perikanan
- Permesinan Perikanan
- Ilmu Industri dan Peternakan
- Teknologi Hasil Ternak/Produksi Ternak

Transportasi & Kemaritiman (1)
- Transportasi Laut

Teknik & Rekayasa (11)
- Teknik Sipil
- Teknik Arsitektur
- Teknik Mesin
- Pendidikan Teknik Otomotif
- Teknik Kimia
- Teknik Metalurgi
- Teknik Nuklir
- Teknik Elektro
- Teknik Elektro Arus Kuat
- Teknik Elektro Arus Lemah
- Teknik Elektronika

Teknologi Informasi & Siber (5)
- Teknik Informatika
- Teknik Komputer dan Jaringan
- Sistem Informasi
- Rekayasa Kriptografi
- Rekayasa Keamanan Siber

Penerbangan & Dirgantara (2)
- Teknik Mesin Pesawat
- Teknik Penerbangan/Teknik Dirgantara

Geospasial & Kebumian (3)
- Teknik Geodesi
- Geografi
- Meteorologi

Olahraga & Pendidikan (2)
- Ilmu Keolahragaan
- Pendidikan Kurikulum dan Teknologi Pendidikan

Sosial & Administrasi (3)
- Kriminologi
- Administrasi Publik
- Hubungan Internasional

Bahasa & Humaniora (3)
- Bahasa/Sastra Inggris
- Sastra Rusia
- Bahasa dan Sastra Prancis

Kreatif & Multimedia (2)
- Desain Grafis
- Teknik Multimedia dan Jaringan

Agama (1)
- Pendidikan Agama Hindu`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Dokumen Administrasi dan Validasi',
      isi: `Daftar berikut menggambarkan dokumen yang dilaporkan dipakai pada pengalaman seleksi sebelumnya (status indikasi). Daftar final wajib disesuaikan dengan portal Rekrutmen TNI dan petunjuk Panselinda/Panitia Daerah pada gelombang berjalan.
1. Formulir pendaftaran/registrasi yang telah dicetak.
2. KTP peserta dan Kartu Keluarga.
3. KTP orang tua/wali bila diminta.
4. Akta kelahiran.
5. Ijazah dan dokumen pendidikan dari jenjang yang dipersyaratkan.
6. Ijazah perguruan tinggi dan transkrip akademik.
7. Bukti/sertifikat akreditasi universitas dan program studi yang berlaku saat lulus.
8. SKCK sesuai ketentuan panitia.
9. Surat keterangan bebas narkoba.
10. Surat kesehatan dari fasilitas kesehatan yang ditentukan.
11. Kartu BPJS/jaminan kesehatan aktif.
12. Dokumen persetujuan instansi bagi pendaftar yang sudah bekerja.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Pa PK dan Jalur Penerimaan TNI Lain',
      isi: `TNI terdiri atas TNI Angkatan Darat (AD), TNI Angkatan Laut (AL), dan TNI Angkatan Udara (AU). Tiap matra punya kebutuhan personel dan keahlian berbeda, tetapi penerimaan Pa PK dilaksanakan lewat jalur TNI dan calon dialokasikan sesuai kebutuhan organisasi.

- Taruna Akademi TNI: jalur pendidikan perwira bagi lulusan SMA/MA atau latar pendidikan yang ditetapkan pada pengumuman tahun berjalan. Calon masuk sejak jenjang pendidikan menengah dan menjalani pendidikan akademi.
- Bintara TNI: jalur keprajuritan dengan pangkat awal bintara setelah menyelesaikan pendidikan pertama. Persyaratan dan jurusan disusun per matra dan gelombang.
- Tamtama TNI: jalur keprajuritan tingkat awal yang berorientasi pada pembentukan dasar keprajuritan. Persyaratan ditetapkan masing-masing matra.
- Pa PK TNI: jalur pembentukan perwira bagi lulusan perguruan tinggi (D4/S1/S1 Profesi/S2 sesuai formasi). Peluangnya sangat bergantung pada kebutuhan program studi.
- Pa PSDP Penerbang TNI: jalur khusus penerbang dengan persyaratan berbeda dari Pa PK reguler (standar pendidikan, kompetensi penerbangan, dan ikatan dinas punya ketentuan tersendiri).

Perbedaan utama Taruna Akademi dan Pa PK: Taruna Akademi tidak berbasis formasi jurusan kuliah dan mengikuti materi seleksi Taruna Akademi TNI; Pa PK sangat bergantung pada kebutuhan program studi dan mengikuti pemeriksaan/pengujian Pa PK.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Penentuan Matra: TNI AD, TNI AL, atau TNI AU',
      isi: `Penentuan matra sering menimbulkan salah persepsi pada calon Pa PK. Yang bisa disampaikan:
- Sumber resmi TNI 2026 menyebut Sidang Pantukhir Pusat sebagai tahap akhir seleksi Pa PK, dengan unsur pimpinan dari ketiga matra.
- Sumber sekunder mengaitkan Pantukhir Pusat dengan plotting calon ke AD, AL, atau AU. Sumber resmi publik belum menjelaskan secara eksplisit bahwa seluruh penetapan matra selalu diputuskan hanya pada Pantukhir, maupun format angket pilihan matra yang berlaku untuk tiap gelombang.
- Kebutuhan program studi disusun menurut matra dan berubah tiap tahun. Sebagian program studi dekat dengan kebutuhan satu matra, sementara program studi umum dapat dibutuhkan lebih dari satu matra. Program studi memengaruhi peluang alokasi, tetapi tidak menentukan matra secara pasti. Contoh: Teknik Perkapalan pernah tercantum pada lebih dari satu kebutuhan matra, jadi jangan dianggap pasti masuk TNI AL.
- Calon dapat diminta mengisi minat atau pilihan matra saat pendaftaran atau validasi, bila formulirnya tersedia pada gelombang berjalan. Pilihan itu bahan pertimbangan, bukan jaminan penempatan: kebutuhan organisasi dan hasil seleksi tetap faktor utama.
- Rumus, bobot, atau prioritas penentuan matra tidak memiliki dasar resmi yang dipublikasikan; jangan menyebutkannya.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Pendidikan Setelah Dinyatakan Lulus',
      isi: `Alur umum rekrutmen TNI: pendaftaran daring, verifikasi/validasi, seleksi tingkat daerah, seleksi tingkat pusat, Sidang Pantukhir Pusat, pendidikan pertama, lalu pendidikan lanjutan/kematraan sesuai kebutuhan dan matra penempatan.

Publikasi resmi TNI tentang pendidikan Pa PK TA 2024 menunjukkan bahwa setelah pendidikan dasar keprajuritan, peserta melanjutkan ke pendidikan dasar golongan perwira (Diksargolpa) dan pendidikan kematraan (Dikmatra). Publikasi historis TNI juga mencatat pendidikan dasar keprajuritan Pa PK pernah berlangsung sekitar tujuh bulan di Akmil Magelang untuk peserta pria.

Durasi dan lokasi hanya acuan historis, bukan kepastian untuk setiap gelombang 2026.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Catatan Teknis Pelaksanaan Seleksi',
      isi: `Semua butir di bawah berasal dari pengalaman peserta dan bukan ketentuan tetap. Ikuti arahan panitia pada gelombang berjalan.
- Jumlah fotokopi: sumber pengalaman menyarankan banyak cadangan; verifikasi kembali.
- Dokumen asli: disarankan dibawa untuk pencocokan; ikuti daftar resmi panitia.
- Rapor/ijazah: dapat diminta pada pemeriksaan administrasi; siapkan sesuai instruksi.
- Ukuran kertas: pengalaman peserta menyebut F4 pada beberapa blanko; tidak dijadikan aturan baku.
- Warna tinta: pengalaman tahun tertentu menyebut tinta biru; ikuti arahan panitia saat itu.
- Grup/kanal informasi: peserta dapat memperoleh informasi lanjutan setelah validasi; pastikan kanalnya benar-benar resmi.
- Jam pelayanan: dapat berbeda tiap lokasi dan gelombang; cek pengumuman Panselinda/Panitia Daerah.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Dasar Hukum',
      isi: `Penyelenggaraan seleksi prajurit TNI mengacu pada:
1. UU Nomor 3 Tahun 2002 tentang Pertahanan Negara: dasar keterlibatan TNI dalam pertahanan kedaulatan negara.
2. UU Nomor 34 Tahun 2004 tentang Tentara Nasional Indonesia, sebagaimana diubah dengan UU Nomor 3 Tahun 2025: mengatur kedudukan, peran, fungsi, tugas, dan pembinaan prajurit TNI.
3. PP Nomor 39 Tahun 2010 tentang Administrasi Prajurit TNI: pedoman teknis proses penyediaan dan pendidikan prajurit.
4. PP Nomor 35 Tahun 2025 tentang Perubahan atas PP Nomor 39 Tahun 2010: aturan terbaru mengenai administrasi dan pembinaan prajurit.
5. PP Nomor 10 Tahun 2026, perubahan kedua atas PP Nomor 39 Tahun 2010, antara lain mengubah ketentuan terkait pangkat pertama.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Rencana Struktur Produk JadiPrajurit (rekomendasi riset)',
      isi: `Bagian ini rekomendasi produk dari dokumen riset, bukan ketentuan seleksi TNI.

Struktur course:
1. Orientasi Pa PK, jalur TNI, persyaratan, alur pendaftaran.
2. Kemampuan dasar: verbal, numerik, logika, figural, ketelitian.
3. Wawasan kebangsaan dan mental ideologi.
4. Psikologi: kognitif, kepribadian, observasi.
5. Akademik per rumpun program studi.
6. Simulasi seleksi daerah.
7. Simulasi seleksi pusat dan wawancara.
8. Tryout integratif dan dashboard evaluasi.

Komposisi tryout yang direkomendasikan: kemampuan dasar 35% (verbal, numerik, logika, ketelitian, wawasan kebangsaan), mental ideologi 20%, psikologi kognitif 20% (penalaran, pola, ketelitian), akademik prodi 15% (disesuaikan rumpun formasi), akademik umum 10% (literasi data, bahasa, metode ilmiah).

Metode belajar: synchronous (kelas daring/luring, simulasi wawancara, pembahasan soal) dan asynchronous (video, modul, bank soal, flashcard, latihan adaptif, tryout).`,
    },
  ],
  tahapan: [
    tahapPendaftaranOnline,
    tahapValidasi,
    tahapSeleksiDaerah,
    tahapSeleksiPusat,
    tahapPantukhirPusat,
  ],
  sumber: [
    {
      jenis: 'resmi',
      judul: 'Portal resmi Rekrutmen TNI dan portal registrasi Pa PK 2026',
      keandalan: 'resmi',
      catatan: 'Jadwal pendaftaran Gelombang I dan II. Acuan utama juga untuk persyaratan dan formasi.',
    },
    {
      jenis: 'resmi',
      judul: 'TNI.mil.id dan PPID TNI',
      keandalan: 'resmi',
      catatan: 'Pantukhir Pusat sebagai tahap akhir (Pa PK Gelombang I TA 2026) dan pendidikan Pa PK (TA 2024).',
    },
    {
      jenis: 'alumni',
      judul: 'Kompilasi pengalaman peserta dan penyedia bimbingan (JadiPrajurit, Taruna Persada, Makala Taruna, Bimbel Tidar, Slideshare)',
      keandalan: 'alumni',
      catatan: 'Dasar tahap validasi, seleksi daerah, dan penentuan matra. Wajib diverifikasi ke sumber resmi.',
    },
    {
      jenis: 'media',
      judul: 'Media arus utama (DetikEdu, Kompas)',
      keandalan: 'media',
      catatan: 'Ringkasan pengumuman dan konteks publik.',
    },
    {
      jenis: 'internal',
      judul: 'Riset Seleksi Pa PK 2026',
      keandalan: 'alumni',
      catatan: 'Dokumen Product Management PT Cerebrum Edukanesia Nusantara, September 2026. Menggabungkan sumber resmi dan sekunder; bagian dari sumber sekunder ditandai indikasi.',
    },
  ],
};
