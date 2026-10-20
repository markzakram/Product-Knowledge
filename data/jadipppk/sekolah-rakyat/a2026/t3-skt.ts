import type { Tahapan } from '@/lib/skema';

const BELUM_DIUMUMKAN =
  'Jumlah soal dan alokasi waktu belum diumumkan (tertulis "diumumkan kemudian" di riset).';

/**
 * Seleksi Kompetensi Tambahan (SKT).
 *
 * Aspek yang dinilai berasal dari pedoman seleksi, tetapi instrumen, jumlah
 * soal, dan durasinya belum diumumkan, dan riset sendiri menyebut bentuk soalnya
 * "sangat sulit diprediksi" karena belum ada laporan soal dari peserta
 * seleksi sebelumnya. Maka statusnya 'indikasi'. Dugaan instrumen psikotes
 * dan tes Bahasa Inggris dari riset ditulis di `catatan` supaya tidak terbaca
 * sebagai ketentuan.
 *
 * Tes wawancara dilakukan asesor, jadi tidak punya bank soal (`bankSoal: false`).
 */
export const tahapSkt: Tahapan = {
  kode: 'skt',
  nama: 'Seleksi Kompetensi Tambahan (SKT)',
  mode: 'online',
  deskripsi:
    'Seleksi Kompetensi Tambahan (SKT) menilai kompetensi spesifik peserta ' +
    'sesuai kebutuhan jabatan, sebagai pelengkap kompetensi utama. Untuk Guru ' +
    'terdiri atas psikotes, tes kemampuan Bahasa Inggris, dan tes wawancara; ' +
    'untuk Tenaga Kependidikan hanya psikotes (teknis pelaksanaannya diumumkan ' +
    'kemudian). Semua dilaksanakan daring dari tempat kedudukan masing-masing ' +
    'peserta.\n\n' +
    'Bobot dalam nilai akhir: Guru 50 persen (psikotes 30, Bahasa Inggris 10, ' +
    'wawancara 10); Tendik 40 persen (psikotes).\n\n' +
    'Seluruh peserta wajib mengikuti semua bagian SKT. Peserta yang tidak ' +
    'mengikuti salah satu tahapan SKT dengan alasan apa pun didiskualifikasi.\n\n' +
    'Catatan riset: bentuk soal SKT sangat sulit diprediksi secara akurat. ' +
    'Belum ditemukan laporan soal dari peserta seleksi sebelumnya, dan pedoman ' +
    'resmi hanya menjelaskan aspek yang diukur, bukan instrumen, jumlah soal, ' +
    'durasi, atau mekanisme pengerjaannya.\n\n' +
    'Dua dokumen riset berbeda soal batas peserta SKT: dokumen kurikulum ' +
    '(Juni 2026) menulis paling banyak 2 kali kebutuhan formasi per jabatan, ' +
    'dokumen riset SKT (Juli 2026) menulis 3 kali. Lihat Informasi seleksi.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'psikotes',
      nama: 'Psikotes',
      formatKetentuan:
        `Untuk Guru dan Tendik. Dilaksanakan daring (online) dari tempat kedudukan masing-masing peserta, oleh Kementerian Sosial bekerja sama dengan lembaga atau unit berbadan hukum yang terakreditasi BKN.

Kriteria penilaian terdiri atas dua kelompok:
1. Potensi dan Sikap Kerja, dengan sembilan aspek: taraf kecerdasan, penalaran, pemecahan masalah, adaptabilitas, empati, potensi untuk mengarahkan orang lain, produktivitas kerja, motivasi, dan daya tahan terhadap stres.
2. Kepribadian dan Kesehatan Mental, dengan dua aspek: kepribadian dan status kesehatan mental.

Riset menulis bahwa psikotes dilakukan menggunakan metode wawancara dengan kriteria di atas; instrumen yang dipakai belum diumumkan.`,
      penilaian:
        `Hanya aspek potensi psikologi yang dinilai kuantitatif. Kesehatan mental tidak diberi nilai, melainkan dikelompokkan berdasarkan kategori.

Kriteria dan makna skala penilaian aspek-aspek potensi psikologi:
⟦gambar:gambar/jadipppk/cc9fc54963e7fbbd-sekolah-rakyat-012.png⟧

Kategori hasil skrining kesehatan mental:
⟦gambar:gambar/jadipppk/794e494f56803941-sekolah-rakyat-013.png⟧

Hasil psikotes berupa rekomendasi dengan kriteria berikut: Disarankan (nilai di atas 79,99), Dipertimbangkan (64,00 sampai 79,99), dan Kurang Disarankan (di bawah 64,00).
⟦gambar:gambar/jadipppk/530e32cd5b12f87c-sekolah-rakyat-014.png⟧
⟦gambar:gambar/jadipppk/e818465017131c39-sekolah-rakyat-015.png⟧

Peserta dinyatakan lulus psikotes apabila:
a. hasil potensi psikologi minimal Dipertimbangkan; dan
b. hasil kesehatan mental dinyatakan Mentality Healthy.`,
      catatan:
        `${BELUM_DIUMUMKAN} Rincian ini mengacu pada pola seleksi tahun sebelumnya dan dapat berubah.

Dugaan riset (bukan ketentuan resmi): psikotes kemungkinan besar berupa battery test, yaitu gabungan beberapa instrumen. Taraf kecerdasan dan penalaran lewat tes inteligensi dan logika verbal, numerik, dan abstrak; pemecahan masalah lewat SJT dan analisis kasus; adaptabilitas, empati, potensi mengarahkan orang lain, dan motivasi lewat PAPI Kostick, EPPS, dan SJT; produktivitas kerja lewat Kraepelin atau Pauli; daya tahan terhadap stres lewat Kraepelin/Pauli, PAPI Kostick, dan MMPI; kepribadian lewat PAPI Kostick, EPPS, MMPI, dengan Wartegg sebagai pelengkap; kesehatan mental lewat MMPI, SRQ, dan wawancara psikologis.

Evaluasi aplikasi menurut riset: taraf kecerdasan, penalaran, dan SJT dapat diterapkan di aplikasi. Kraepelin, Pauli, EPPS, PAPI Kostick, dan SRQ perlu fitur baru (EPPS, PAPI Kostick, dan SRQ juga perlu sistem penilaian baru). MMPI sulit karena penilaiannya rumit. Wartegg, BAUM, DAP, HTP, dan wawancara psikologis tidak dapat diterapkan di aplikasi.`,
      materi: [
        {
          nama: 'Taraf Kecerdasan',
          catatan: 'Kemampuan berpikir seseorang yang bersifat potensial dan aktual.',
        },
        {
          nama: 'Penalaran',
          catatan:
            'Kemampuan mengidentifikasi permasalahan berdasarkan telaahan terhadap berbagai informasi yang dimiliki.',
        },
        {
          nama: 'Pemecahan Masalah',
          catatan:
            'Kemampuan mencari alternatif solusi suatu permasalahan, membuat pertimbangan dengan memperhatikan aspek yang terkait, dan mengambil tindakan yang tepat sebagai solusi.',
        },
        {
          nama: 'Adaptabilitas',
          catatan: 'Kebutuhan untuk melakukan serta mengalami hal yang baru dan berbeda di kesehariannya.',
        },
        {
          nama: 'Empati',
          catatan:
            'Dorongan untuk memahami kondisi dan perasaan orang lain, serta menunjukkan kesediaan membantu dan menolong orang lain.',
        },
        {
          nama: 'Potensi untuk Mengarahkan Orang Lain',
          catatan:
            'Dorongan untuk menjadi pemimpin di dalam kelompok, membuat keputusan, serta memengaruhi orang lain untuk mencapai tujuan bersama.',
        },
        {
          nama: 'Produktivitas Kerja',
          catatan:
            'Kemampuan bekerja secara cepat, tepat, dan fokus untuk menampilkan hasil kerja yang baik.',
        },
        {
          nama: 'Motivasi',
          catatan:
            'Kesediaan dan dorongan mengerahkan upaya untuk mencapai target kerja dengan baik dan terus meningkat dari waktu ke waktu.',
        },
        {
          nama: 'Daya Tahan terhadap Stres',
          catatan: 'Kemampuan mengelola kondisi emosi atau perasaan dalam situasi kerja yang rutin.',
        },
        {
          nama: 'Kepribadian',
          catatan:
            'Karakteristik pribadi yang memengaruhi individu berperilaku di lingkungan secara efektif.',
        },
        {
          nama: 'Status Kesehatan Mental',
          catatan: 'Kondisi psikologis individu yang mencerminkan kesejahteraan mental.',
        },
      ],
    },
    {
      kode: 'bahasa-inggris',
      nama: 'Tes Kemampuan Bahasa Inggris',
      formatKetentuan:
        'Hanya untuk Guru. Menilai kemampuan berbahasa Inggris calon guru. ' +
        'Dilaksanakan daring dari tempat kedudukan masing-masing peserta, oleh ' +
        'Kementerian Sosial bekerja sama dengan lembaga atau unit yang telah ' +
        'terakreditasi sebagai lembaga penguji bahasa Inggris.',
      penilaian:
        'Peserta direkomendasikan apabila memperoleh nilai paling rendah 233 (dua ratus tiga puluh tiga).',
      catatan:
        `${BELUM_DIUMUMKAN}\n\n` +
        'Saran riset (bukan ketentuan resmi): format sebaiknya disesuaikan dengan ' +
        'TOEFL ITP atau Prediction, karena pedoman memuat tiga bagian yang sama ' +
        'dan tidak mencantumkan tes berbicara maupun menulis esai, sehingga tidak ' +
        'mengarah ke TOEFL iBT. Menurut evaluasi aplikasi di riset, tes Bahasa ' +
        'Inggris dengan pola TOEFL dapat diterapkan di aplikasi.',
      materi: [
        { nama: 'Structure and Written Expression' },
        { nama: 'Reading Comprehension' },
        { nama: 'Listening Comprehension' },
      ],
    },
    {
      kode: 'wawancara-skt',
      nama: 'Tes Wawancara',
      formatKetentuan:
        `Hanya untuk Guru. Menggali kompetensi calon guru yang sesuai dengan kebutuhan Sekolah Rakyat. Dilakukan oleh asesor yang telah mengikuti bimbingan teknis asesor guru Sekolah Rakyat. Dilaksanakan daring; calon guru dan asesor sama-sama berada di tempat kedudukan masing-masing.

Indikator penilaian:

1) Empati dan Kepekaan Sosial
- Mampu mendengarkan, merasakan, dan peduli terhadap kondisi peserta didik, rekan kerja, atau anggota komunitas pendidikan.
- Menggunakan bahasa dan tindakan yang menghargai keberagaman individu, seperti tidak menggunakan stereotip dan menyesuaikan pendekatan dengan kebutuhan peserta didik, rekan kerja, atau anggota komunitas pendidikan yang berbeda.
- Menyediakan waktu dan memberikan dukungan konkret kepada peserta didik, rekan kerja, atau anggota komunitas pendidikan yang mengalami kesulitan.
- Membangun hubungan yang harmonis dan tidak diskriminatif dengan peserta didik, rekan kerja, atau anggota komunitas pendidikan.

2) Pemahaman terhadap Perspektif Peserta Didik (recognizing children perspective)
- Menggali sudut pandang dan pengalaman belajar peserta didik melalui pengamatan atau percakapan yang terbuka dan penuh perhatian.
- Memberi kesempatan bagi siswa untuk berbagi pendapat dan ide.
- Menyesuaikan strategi pengajaran berdasarkan kebutuhan peserta didik.
- Menggunakan umpan balik dari peserta didik untuk memperbaiki proses belajar dan membangun interaksi yang lebih responsif.

3) Manajemen Kasus
- Mengidentifikasi dan menganalisis permasalahan peserta didik.
- Mengoordinasikan bantuan dengan pihak terkait (orang tua, guru lain, konselor, atau layanan pendukung lainnya) secara tepat waktu.
- Memberikan solusi yang sesuai dengan permasalahan peserta didik.
- Mempertahankan pola pikir yang positif dan terus berupaya saat menghadapi permasalahan peserta didik.`,
      penilaian:
        `Skala penilaian:
1 = Tidak memenuhi kriteria
2 = Memenuhi kriteria
3 = Melebihi kriteria

Hasil wawancara dikonversi ke bentuk kuantitatif.`,
      catatan: BELUM_DIUMUMKAN,
      bankSoal: false,
      materi: [
        {
          nama: 'Empati dan Kepekaan Sosial',
          catatan:
            'Kemampuan memahami, merasakan, dan menanggapi perasaan, kebutuhan, serta kondisi sosial peserta didik, rekan kerja, dan komunitas pendidikan dengan penuh kepedulian dan kesadaran terhadap perbedaan individu, kepekaan terhadap tantangan yang dihadapi orang lain, serta kemampuan membangun hubungan yang inklusif dan mendukung demi menciptakan lingkungan belajar yang harmonis dan tidak diskriminatif.',
        },
        {
          nama: 'Pemahaman terhadap Perspektif Peserta Didik',
          catatan:
            'Kemampuan memahami, menghargai, dan mempertimbangkan sudut pandang peserta didik, dengan menyesuaikan strategi pengajaran sesuai dengan kebutuhan belajar peserta didik dalam setiap proses pembelajaran dan interaksi.',
        },
        {
          nama: 'Manajemen Kasus',
          catatan:
            'Kemampuan mengidentifikasi, merencanakan, mengoordinasikan, mengelola, dan mengevaluasi permasalahan yang dihadapi peserta didik untuk memperoleh bantuan yang tepat agar peserta didik mampu melanjutkan proses pembelajaran dengan penuh semangat.',
        },
      ],
    },
  ],
};
