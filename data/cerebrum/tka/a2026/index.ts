import type { Angkatan } from '@/lib/skema';
import { tahapWajib } from './t1-mata-uji-wajib';
import { tahapPilihan } from './t2-mata-uji-pilihan';

/**
 * TKA SMA 2026 (Tes Kemampuan Akademik jenjang SMA/MA/SMK).
 *
 * Disusun dari "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum
 * Edukanesia Nusantara, Juni 2026), 83 halaman:
 *   BAB I    pendahuluan, ketentuan umum, persyaratan peserta, jadwal (info)
 *   BAB II   materi pembelajaran dan matriks asesmen (kisi-kisi dan jumlah soal)
 *   BAB III  evaluasi program belajar Cerebrum (info)
 *   BAB IV   tipe soal: PG, PGK Kategori, PGK MCMA (penilaian dan format)
 *   BAB V    contoh soal: 20 per mata uji wajib (60 soal)
 *   BAB VI   rancangan belajar Cerebrum (info)
 *
 * Status 'indikasi': dokumen adalah laporan internal tanpa rujukan ke pengumuman
 * resmi, jadi jadwalnya diperlakukan sebagai proyeksi. Naikkan ke 'terkonfirmasi'
 * hanya setelah dicocokkan dengan pengumuman pemerintah.
 *
 * Tahun angkatan 2026 mengikuti sampul dan jadwal dokumen. BAB IV menulis "TKA
 * SMA 2025" di satu kalimat; dianggap salah ketik.
 */
export const tka2026: Angkatan = {
  kode: '2026',
  nama: 'TKA SMA 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'TKA jenjang SMA/MA/SMK tahun 2026: ujian berbasis komputer dengan 3 mata uji wajib (Matematika 25 ' +
    'soal, Bahasa Indonesia 30 soal, Bahasa Inggris 30 soal) dan 2 mata uji pilihan dari 19 pilihan. Tiga ' +
    'tipe soal: Pilihan Ganda, PGK Kategori, dan PGK MCMA. Pelaksanaan utama 26 Oktober sampai 8 November ' +
    '2026 menurut dokumen internal, belum dicocokkan dengan pengumuman resmi. Terisi: ketentuan, ' +
    'persyaratan, jadwal, kisi-kisi, dan 60 contoh soal mata uji wajib. Belum ada: waktu pengerjaan dan ' +
    'seluruh materi mata uji pilihan.',
  diperbarui: '2026-10-15',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Tentang TKA (Tes Kemampuan Akademik)',
      isi:
        'TKA adalah penilaian terstandar capaian akademik murid oleh Pemerintah, dilaksanakan berbasis ' +
        'komputer. Latar belakangnya: tidak tersedianya laporan capaian akademik individu murid dari ' +
        'penilaian terstandar pada beberapa tahun terakhir. Membandingkan murid dari satuan pendidikan ' +
        'berbeda lewat data masing-masing sekolah, misalnya rapor, menimbulkan masalah objektivitas dan ' +
        'keadilan, terutama pada proses seleksi.\n\n' +
        'TKA dipakai bila diperlukan data objektif capaian akademik murid: seleksi masuk jenjang ' +
        'pendidikan lebih lanjut, seleksi akademik lain, penyetaraan jalur pendidikan, pemetaan mutu, dan ' +
        'perbaikan proses pembelajaran.\n\n' +
        'Dasar pelaksanaan: Kepmendikdasmen Nomor 95/M/2025 tentang Pedoman Penyelenggaraan Tes ' +
        'Kemampuan Akademik.\n\n' +
        'Tujuan (di antaranya, menurut dokumen):\n' +
        '1. memperoleh informasi capaian akademik murid yang terstandar untuk keperluan seleksi akademik;\n' +
        '2. menjamin akses murid pendidikan nonformal dan informal terhadap penyetaraan hasil belajar;\n' +
        '3. mendorong peningkatan kapasitas pendidik dalam mengembangkan penilaian yang berkualitas;\n' +
        '4. memberi informasi kepada murid tentang kekuatan dan kelemahan dalam bidang akademik.',
    },
    {
      tipe: 'lainnya',
      judul: 'Ketentuan umum',
      isi:
        '1. Tidak diwajibkan untuk diikuti seluruh siswa. Bagi peserta didik kelas 12 ' +
        'SMA/MA/SMALB/Paket C dan sederajat, hasil TKA dapat dipakai sebagai parameter seleksi perguruan ' +
        'tinggi jalur prestasi (SNBP).\n' +
        '2. Mata uji TKA mencakup 3 mata pelajaran wajib dan 2 mata pelajaran pilihan.\n' +
        '3. Dilaksanakan serentak pada periode yang ditetapkan pemerintah.\n' +
        '4. Diselenggarakan berbasis komputer (Asesmen Nasional Berbasis Komputer/ANBK) dengan aplikasi ' +
        'peramban ujian.\n' +
        '5. Nilai TKA tidak menentukan kelulusan siswa dari satuan pendidikan. Hasilnya berfungsi sebagai ' +
        'pemetaan mutu dan evaluasi sistem pendidikan nasional secara makro, dan sebagai validasi nilai ' +
        'rapor sekolah untuk keperluan seleksi masuk perguruan tinggi (seperti SNBP).',
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan peserta',
      isi:
        '1. Terdaftar sebagai peserta didik kelas XII jenjang SMA/MA, yang memiliki laporan hasil belajar ' +
        'dari semester 1 sampai semester 5.\n' +
        '2. Terdaftar sebagai kelas 12 SMK/MAK pada program 3 tahun, yang memiliki laporan hasil belajar ' +
        'dari semester 1 sampai semester 5.\n' +
        '3. Terdaftar sebagai kelas 13 SMK pada program 4 tahun, yang memiliki laporan hasil belajar dari ' +
        'semester 1 sampai semester 6.\n' +
        '4. Peserta didik berkebutuhan khusus tetap dapat mengikuti TKA selama tidak mengalami hambatan ' +
        'intelektual.\n' +
        '5. Memiliki NISN yang tercatat dalam sistem Dapodik.\n' +
        '6. Terdaftar dalam Daftar Nominasi Tetap (DNT) TKA yang ditetapkan oleh sekolah.\n' +
        '7. Memiliki kartu peserta TKA yang telah diterbitkan sekolah.\n' +
        '8. Peserta yang berhalangan hadir dan dapat membuktikannya dengan surat keterangan resmi berhak ' +
        'mengikuti TKA susulan sesuai jadwal.\n' +
        '9. Peserta wajib mengikuti seluruh mata uji TKA: mata uji wajib (Bahasa Indonesia, Matematika, ' +
        'dan Bahasa Inggris) serta 2 mata uji pilihan.\n' +
        '10. Untuk mata uji pilihan jenjang SMK/MAK, pilihan pertama adalah mata pelajaran Produk/Projek ' +
        'Kreatif dan Kewirausahaan, dan pilihan kedua adalah mata pelajaran yang lain.',
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal pelaksanaan (SMA/MA/SMK sederajat)',
      isi:
        'Pendaftaran: 18 Agustus - 27 September 2026\n' +
        'Simulasi: 21-27 September 2026\n' +
        'Gladi Bersih: 5-18 Oktober 2026\n' +
        'Pelaksanaan Utama: 26 Oktober - 8 November 2026\n' +
        'Pelaksanaan Susulan: 16-29 November 2026\n' +
        'Pengolahan Hasil: 8 November - 22 Desember 2026\n' +
        'Pengumuman Hasil: 23 Desember 2026\n' +
        'Catatan: jadwal ini berasal dari dokumen internal Product Management (Juni 2026) tanpa rujukan ' +
        'ke pengumuman resmi, jadi berstatus indikasi sampai dicocokkan dengan pengumuman pemerintah.',
    },
    {
      tipe: 'penilaian',
      judul: 'Tipe soal dan penilaian',
      isi:
        'TKA SMA memakai 3 tipe soal:\n' +
        '1. Pilihan Ganda (PG): 5 opsi (A sampai E) dan satu jawaban benar. Jawaban benar menambah 1 ' +
        'poin; jawaban salah dan tidak diisi tidak mengurangi poin. Tipe ini dipastikan ada di semua ' +
        'subtes.\n' +
        '2. PGK Kategori: peserta menentukan kategori tiap pernyataan (biasanya Benar-Salah, ' +
        'Setuju-Tidak Setuju, atau Tepat-Tidak Tepat), dinilai per baris atau pernyataan. Peserta tetap ' +
        'mendapat poin parsial bila hanya sebagian pernyataan yang dijawab benar.\n' +
        '3. PGK MCMA (Multiple Choice Multiple Answer): lebih dari satu jawaban benar dalam satu soal, ' +
        'biasanya dengan 5 opsi (A sampai E). Poin penuh hanya bila semua opsi yang benar dipilih; bila ' +
        'hanya sebagian, poin dianggap kurang atau salah. Tujuannya menghindari tebakan acak dan mengukur ' +
        'penguasaan materi secara menyeluruh.\n' +
        'Dokumen tidak menyebut bobot poin PGK Kategori dan MCMA, rumus skor akhir, atau skala nilai.',
    },
    {
      tipe: 'lainnya',
      judul: 'Mata uji TKA (wajib dan pilihan)',
      isi:
        'Mata uji wajib (peserta wajib mengikuti ketiganya):\n' +
        '1. Bahasa Indonesia: berfokus pada keterampilan membaca.\n' +
        '2. Bahasa Inggris: mengukur keterampilan membaca beragam jenis teks berbahasa Inggris dalam ' +
        'berbagai situasi komunikasi sehari-hari, vokasional, dan akademik.\n' +
        '3. Matematika: mengukur kemampuan memahami fakta, konsep, prinsip, dan prosedur matematika, serta ' +
        'menerapkannya untuk menyelesaikan masalah (problem solving).\n' +
        'Jumlah soal menurut matriks asesmen: Bahasa Indonesia 30, Bahasa Inggris 30, Matematika 25. Kolom ' +
        'waktu pengerjaan di dokumen tidak berisi angka.\n\n' +
        'Mata uji pilihan (peserta memilih 2 dari 19):\n' +
        'Matematika Lanjutan; Bahasa Indonesia Lanjutan; Bahasa Inggris Lanjutan; Fisika; Kimia; Biologi; ' +
        'Ekonomi; Sosiologi; Geografi; Sejarah; PKN; Antropologi; Bahasa Arab; Bahasa Prancis; Bahasa ' +
        'Jerman; Bahasa Jepang; Bahasa Korea; Bahasa Mandarin; Produk Projek Kreatif dan Kewirausahaan.\n' +
        'Dokumen hanya mencantumkan daftarnya: jumlah soal, kisi-kisi, dan contoh soal mata uji pilihan ' +
        'tidak ada.',
    },
    {
      tipe: 'lainnya',
      judul: 'Rancangan belajar Cerebrum (ringkas)',
      isi:
        'Rancangan program belajar internal Cerebrum untuk persiapan TKA SMA (BAB VI dan BAB III ' +
        'dokumen), bukan ketentuan resmi TKA.\n\n' +
        'Tiap sub topik dialokasikan 75 menit:\n' +
        '- Matematika: 10 sub topik (Bilangan real; Persamaan dan Pertidaksamaan Linear; Fungsi; Barisan ' +
        'dan Deret; Objek Geometri; Transformasi Geometri; Pengukuran; Perbandingan Trigonometri; Data; ' +
        'Pola Barisan).\n' +
        '- Bahasa Indonesia: 11 sub topik (Pemahaman Tekstual 3, Pemahaman Inferensial 3, Evaluasi dan ' +
        'Apresiasi 5).\n' +
        '- Bahasa Inggris: 17 sub topik (Pemahaman Tekstual 5, Pemahaman Inferensial 7, Evaluasi dan ' +
        'Apresiasi 5).\n\n' +
        'Alur aktivitas kelas (satu daftar yang sama untuk semua sub topik dan ketiga mata uji): 1. Salam ' +
        'sapa; 2. Perkenalan judul kelas; 3. Agenda Pembelajaran; 4. Tujuan Pembelajaran; 5. Aturan Kelas; ' +
        '6. Profil Cerebrum; 7. Perkenalan Guru; 8. Guru menjelaskan materi; 9. Latihan: Diskusi ' +
        'Interaktif; 10. Tanya Jawab; 11. Penugasan mengerjakan latihan soal di LMS.\n\n' +
        'Evaluasi: (a) program, lewat kuesioner di akhir pembelajaran yang diisi peserta dan pengajar ' +
        '(ketercapaian materi, kesesuaian jadwal, kejelasan alur, kualitas bahan ajar, efektivitas ' +
        'latihan, manfaat try out); (b) pengajar, lewat kuesioner yang diisi peserta di akhir pembelajaran ' +
        '(penguasaan materi, kejelasan penyampaian, pembahasan soal, strategi pengerjaan, interaksi, ' +
        'motivasi); (c) peserta, lewat latihan soal (pemahaman setelah materi) dan try out (simulasi yang ' +
        'menyerupai pelaksanaan TKA SMA).',
    },
  ],
  tahapan: [tahapWajib, tahapPilihan],
  sumber: [
    {
      jenis: 'internal',
      judul: 'Laporan TKA SMA Tahun 2026 (Product Management PT Cerebrum Edukanesia Nusantara, Juni 2026)',
      tanggalAkses: '2026-10-15',
      keandalan: 'asumsi',
      catatan:
        'Sumber seluruh isi tes ini (BAB I sampai VI; sampul bertuliskan "LAPORAN FR"). Dokumen internal ' +
        'tanpa tautan atau kutipan ke pengumuman resmi: ketentuan, persyaratan, jadwal, dan kisi-kisinya ' +
        'belum dicocokkan dengan sumber resmi. Dokumen merujuk Kepmendikdasmen Nomor 95/M/2025, tetapi ' +
        'aturan itu tidak dibaca langsung. Dokumen hanya memuat soal dan kunci jawaban; pembahasan di data ' +
        'ini disusun ulang dan berstatus draft.',
    },
  ],
};
