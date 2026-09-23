import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal seleksi kompetensi PPPK, dari paket tryout Markaz.
 *
 * Paket sumber: "25 Teknis PGSD - Guru SD" (ID 3630), "1 Tryout PPPK 2026" (ID 4471).
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
/** 5 soal dari lesson "Guru SD". */
export const contohTeknis: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Apa yang menjadi penyebab utama Jepang mengizinkan Indonesia untuk membentuk BPUPKI pada masa pendudukannya?`,
      opsi: [
        { label: 'A', teks: `Jepang berupaya untuk menguatkan pertahanan Indonesia` },
        { label: 'B', teks: `Jepang membutuhkan dukungan Indonesia dalam perang melawan Sekutu` },
        { label: 'C', teks: `Jepang berniat menguasai sumber daya alam Indonesia secara langsung` },
        { label: 'D', teks: `Jepang ingin memberikan kebebasan sepenuhnya pada Indonesia` },
        { label: 'E', teks: `Jepang menganggap Indonesia telah siap merdeka sepenuhnya` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B. Jepang membutuhkan dukungan Indonesia dalam perang melawan Sekutu
Pembahasan:
A salah: Jepang hanya berusaha mempertahankan wilayah pendudukan.
B benar: Dengan BPUPKI, Jepang berharap mendapatkan dukungan dari rakyat Indonesia.
C salah: Sumber daya sudah dimanfaatkan Jepang, bukan alasan pembentukan BPUPKI.
D salah: Jepang tidak ingin sepenuhnya melepaskan Indonesia pada masa itu.
E salah: Jepang belum sepenuhnya memberi kemerdekaan pada Indonesia.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Menurut teori belajar Piaget, siswa pada tahap operasional konkret biasanya menunjukkan kemampuan berpikir yang lebih baik dalam situasi yang melibatkan….`,
      opsi: [
        { label: 'A', teks: `Konsep abstrak.` },
        { label: 'B', teks: `Pemecahan masalah hipotetis.` },
        { label: 'C', teks: `Penggunaan objek fisik untuk memahami konsep.` },
        { label: 'D', teks: `Pemikiran deduktif.` },
        { label: 'E', teks: `Analisis peristiwa sejarah.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
A Salah: Siswa pada tahap operasional konkret kesulitan dengan konsep abstrak.
B Salah: Pemecahan masalah hipotetis lebih sesuai untuk tahap operasional formal.
C Benar: Penggunaan objek fisik membantu siswa operasional konkret memahami konsep lebih baik.
D Salah: Pemikiran deduktif biasanya berkembang di tahap operasional formal.
E Salah: Analisis sejarah melibatkan pemikiran abstrak, bukan konkret.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `ASEAN memiliki konsep "ASEAN Free Trade Area" (AFTA) yang bertujuan untuk mengurangi hambatan tarif di kawasan. Dalam praktiknya, hal ini diharapkan dapat meningkatkan daya saing produk-produk dalam negeri dan merangsang pertumbuhan ekonomi. Namun, untuk menjaga keseimbangan, setiap negara anggota perlu...`,
      opsi: [
        { label: 'A', teks: `Mengontrol ketat produk ekspor yang dikirim ke negara lain` },
        { label: 'B', teks: `Menyediakan insentif yang sama untuk semua sektor industri` },
        { label: 'C', teks: `Memastikan bahwa seluruh produk asing bebas masuk ke pasar dalam negeri` },
        { label: 'D', teks: `Melakukan evaluasi berkala terhadap produk lokal agar kompetitif` },
        { label: 'E', teks: `Mengurangi produksi lokal agar dapat fokus pada impor dari negara ASEAN` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D. Melakukan evaluasi berkala terhadap produk lokal agar kompetitif
Pembahasan:
A salah: Mengontrol ekspor bukanlah solusi untuk daya saing produk lokal.
B salah: Insentif yang sama tidak menjamin daya saing, tiap sektor berbeda kebutuhannya.
C salah: Masuknya produk asing tanpa pengawasan akan memengaruhi industri lokal.
D benar: Evaluasi produk lokal secara berkala membantu memastikan daya saing di AFTA.
E salah: Pengurangan produksi tidak sejalan dengan tujuan AFTA.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'pg',
      pertanyaan: `Salah satu siswa di kelas sering memberikan tanggapan yang tidak relevan selama diskusi. Bagaimana seharusnya guru menangani situasi ini agar interaksi tetap kondusif?`,
      opsi: [
        { label: 'A', teks: `Menegur siswa tersebut dengan keras di depan kelas agar dia berhenti memberikan tanggapan` },
        { label: 'B', teks: `Mengabaikan tanggapan siswa tersebut untuk menghindari gangguan lebih lanjut` },
        { label: 'C', teks: `Meminta siswa lain untuk memberikan tanggapan yang lebih relevan sebagai contoh` },
        { label: 'D', teks: `Mengarahkan siswa dengan sopan dan menjelaskan bagaimana memberikan tanggapan yang relevan` },
        { label: 'E', teks: `Memberikan tugas khusus kepada siswa tersebut agar dia lebih fokus pada pelajaran` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
A: Salah, teguran keras bisa membuat siswa merasa malu dan mengurangi motivasi untuk berpartisipasi.
B: Salah, mengabaikan tidak akan memperbaiki pemahaman siswa tentang topik diskusi.
C: Salah, meminta siswa lain untuk memberi contoh bisa membuat siswa tersebut merasa dibandingkan.
D: Benar, mengarahkan dengan sopan membantu siswa memahami cara memberikan tanggapan yang lebih baik.
E: Salah, tugas tambahan mungkin tidak memperbaiki kualitas interaksi dalam diskusi.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'pg',
      pertanyaan: `Assessment as learning menekankan keterlibatan siswa dalam proses penilaian sebagai bagian dari proses pembelajaran. guru dapat mendorong siswa untuk menggunakan assessment as learning dalam kelas dengan cara….`,
      opsi: [
        { label: 'A', teks: `Mengajak siswa untuk menetapkan tujuan belajar mereka sendiri, memantau` },
        { label: 'B', teks: `Membiarkan siswa menilai diri mereka sendiri tanpa bimbingan. kemajuan, dan merefleksikan hasil pembelajaran secara mandiri.` },
        { label: 'C', teks: `Memberikan hasil penilaian kepada siswa tanpa kesempatan untuk refleksi.` },
        { label: 'D', teks: `Menggunakan satu metode penilaian standar untuk semua siswa tanpa memperhatikan kebutuhan mereka.` },
        { label: 'E', teks: `Memberikan tes tertulis reguler tanpa memberikan umpan balik.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan:
A Benar: Assessment as learning melibatkan siswa dalam menetapkan tujuan, memantau kemajuan, dan refleksi mandiri sebagai bagian dari pembelajaran.
B Salah: Penilaian diri tanpa bimbingan tidak cukup mengembangkan kemampuan refleksi siswa.
C Salah: Tanpa refleksi, siswa tidak akan memahami bagaimana cara memperbaiki diri.
D Salah: Penilaian standar tidak mempertimbangkan kebutuhan belajar individu.
E Salah: Tes reguler tanpa umpan balik tidak mendorong proses belajar yang berkelanjutan.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Manajerial". */
export const contohManajerial: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Seorang kepala bagian sering merasa kewalahan karena menangani hampir semua pekerjaan sendiri. Padahal, staf yang ia pimpin cukup kompeten. Apa yang seharusnya ia lakukan untuk meningkatkan efektivitas manajerial?`,
      opsi: [
        { label: 'A', teks: `Terus bekerja keras karena tanggung jawab utama ada pada dirinya` },
        { label: 'B', teks: `Memberikan semua pekerjaan pada staf tanpa pengawasan` },
        { label: 'C', teks: `Mendelegasikan tugas sesuai kompetensi staf dan melakukan monitoring berkala` },
        { label: 'D', teks: `Menunda beberapa pekerjaan sampai ada waktu luang` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
A (1) Meski tanggung jawab berada di tangan kepala bagian, bekerja keras sendirian bukan solusi manajerial yang efektif. Hal ini bisa menyebabkan kelelahan, burnout, dan justru menghambat produktivitas jangka panjang. Kepemimpinan bukan hanya tentang menyelesaikan pekerjaan, tetapi juga mengatur dan memaksimalkan sumber daya manusia.
B (2) Mendelegasikan tugas memang penting, tetapi tanpa pengawasan atau monitoring, bisa berisiko menurunkan kualitas kerja. Pemimpin tetap perlu memastikan bahwa arahan, standar, dan capaian terjaga. Ini belum mencerminkan efektivitas manajerial yang seimbang.
C (4) Ini merupakan inti dari efektivitas manajerial: membagi tanggung jawab berdasarkan kemampuan staf, memberikan kepercayaan, dan tetap mengawasi hasil kerja. Delegasi yang bijak meningkatkan efisiensi, memberdayakan tim, dan menghindarkan pemimpin dari kelebihan beban kerja.
D (3) Menunda pekerjaan bisa menjadi bagian dari manajemen prioritas, tetapi bukan solusi berkelanjutan jika dilakukan karena tidak mampu membagi tugas. Ini menunjukkan bahwa masalah utamanya bukan waktu, melainkan pola kerja yang tidak efisien.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Anda mengetahui bahwa terdapat kesalahan data dalam laporan akhir yang akan segera dipresentasikan pimpinan. Namun, orang yang bertugas tidak berada di tempat. Apa yang Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Membiarkan saja karena bukan tanggung jawab Anda` },
        { label: 'B', teks: `Mengganti data tersebut dengan data sesuai asumsi Anda` },
        { label: 'C', teks: `Menunda penyampaian laporan dan mencari data yang benar terlebih dahulu` },
        { label: 'D', teks: `Menyampaikan laporan dengan catatan bahwa ada data yang perlu dikonfirmasi ulang` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
A. (1 poin) Mengabaikan kesalahan berisiko besar
B. (2 poin) Mengasumsikan data tanpa dasar berbahaya
C. (3 poin) Menunda dapat menyebabkan keterlambatan
D. (4 poin) Transparansi dan akurasi tetap terjaga dalam situasi mendesak`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Anda ditugaskan untuk memimpin sebuah tim kecil dalam proyek yang baru menggunakan pendekatan berbeda dari biasanya. Sebagian anggota merasa kurang yakin terhadap pendekatan ini. Apa tindakan Anda?`,
      opsi: [
        { label: 'A', teks: `Memberikan pemahaman kepada tim tentang manfaat pendekatan baru dan mengajak mereka mencoba terlebih dahulu` },
        { label: 'B', teks: `Menyesuaikan kembali metode kerja ke pendekatan yang lama agar tim nyaman` },
        { label: 'C', teks: `Menyerahkan seluruh pengambilan keputusan kepada pimpinan karena merasa belum siap` },
        { label: 'D', teks: `Mengabaikan keraguan anggota tim karena yakin semuanya akan menyesuaikan sendiri` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Memberikan pemahaman kepada tim tentang manfaat pendekatan baru dan mengajak mereka mencoba terlebih dahulu
Pembahasan:
A. (4 poin) Mengelola perubahan dengan pendekatan persuasif, edukatif, dan mendorong kolaborasi
B. (3 poin) Menghindari tantangan, bisa memperlambat inovasi
C. (2 poin) Sikap terlalu bergantung pada atasan, kurang percaya diri
D. (1 poin) Tidak responsif terhadap situasi tim, berpotensi menimbulkan resistensi`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Sebagai ketua organisasi mahasiswa, Anda harus menyampaikan kebijakan baru kepada anggota. Beberapa anggota tampak kurang memahami dan mulai menunjukkan penolakan terhadap kebijakan tersebut. Apa langkah terbaik yang dapat Anda ambil?`,
      opsi: [
        { label: 'A', teks: `Mengadakan diskusi terbuka untuk menjelaskan kebijakan secara detail dan mendengarkan pendapat anggota` },
        { label: 'B', teks: `Memaksa anggota untuk menerima kebijakan tanpa memberikan penjelasan lebih lanjut` },
        { label: 'C', teks: `Menyesuaikan cara penyampaian kebijakan agar lebih mudah dipahami oleh semua anggota` },
        { label: 'D', teks: `Mengabaikan penolakan dan tetap melanjutkan kebijakan tanpa mempertimbangkan pendapat anggota` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Mengadakan diskusi terbuka untuk menjelaskan kebijakan secara detail dan mendengarkan pendapat anggota
Pembahasan:
A. Mengadakan diskusi terbuka untuk menjelaskan kebijakan secara detail dan mendengarkan pendapat anggota. (4 Poin)
Pembahasan: Opsi ini menunjukkan komunikasi yang sangat baik. Mengadakan diskusi terbuka memungkinkan Anda menjelaskan kebijakan dengan jelas dan memberikan kesempatan bagi anggota untuk memberikan umpan balik. Pendekatan ini membangun hubungan dua arah yang memungkinkan anggota merasa didengarkan dan lebih mungkin menerima kebijakan yang disampaikan.
B. Memaksa anggota untuk menerima kebijakan tanpa memberikan penjelasan lebih lanjut. (1 Poin)
Pembahasan: Opsi ini menunjukkan kurangnya komunikasi yang bertujuan untuk menciptakan pemahaman yang jelas, membangun hubungan positif, serta mendorong penyelesaian masalah secara efektif dan produktif. Memaksa anggota tanpa penjelasan hanya menciptakan ketegangan dan potensi penolakan lebih lanjut. Tidak ada usaha untuk mendengarkan atau menjelaskan kebijakan, yang dapat merusak hubungan antara pemimpin dan anggota.
C. Menyesuaikan cara penyampaian kebijakan agar lebih mudah dipahami oleh semua anggota. (3 Poin)
Pembahasan: Opsi ini menunjukkan komunikasi yang cukup efektif. Menyesuaikan cara penyampaian kebijakan penting untuk memastikan semua anggota memahami kebijakan dengan lebih baik. Meskipun ini membantu, tetapi tentu saja opsi ini lebih terbatas dalam menjawab keberatan atau kekhawatiran anggota.
D. Mengabaikan penolakan dan tetap melanjutkan kebijakan tanpa mempertimbangkan pendapat anggota. (2 Poin)
Pembahasan: Meskipun kebijakan tetap dilaksanakan, mengabaikan pendapat anggota menunjukkan komunikasi yang buruk. Tidak mempertimbangkan pendapat anggota atau berdialog dengan mereka bisa menciptakan potensi kegagalan dalam implementasi kebijakan.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Kinerja tim pemasaran dalam kuartal terakhir menurun drastis. Sebagai manajer, apa tindakan pertama yang paling tepat Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menyusun strategi pemasaran baru tanpa melibatkan tim.` },
        { label: 'B', teks: `Melakukan evaluasi menyeluruh bersama tim untuk mengidentifikasi penyebab penurunan.` },
        { label: 'C', teks: `Menginstruksikan tim untuk meningkatkan kinerja tanpa menjelaskan alasan atau data.` },
        { label: 'D', teks: `Memindahkan anggota tim ke divisi lain yang lebih stabil.` },
      ],
      kunci: 'A',
      pembahasan: `• Pembahasan:
• A (2 poin): Menyusun strategi sendiri tanpa melibatkan tim dapat mempercepat proses, tetapi mengabaikan kolaborasi dan wawasan dari orang-orang yang terlibat langsung.
• B (4 poin): Melakukan evaluasi menyeluruh bersama tim adalah pendekatan terbaik. Hal ini bersifat partisipatif dan berbasis data, serta membantu memahami akar masalah secara komprehensif.
• C (1 poin): Menginstruksikan tanpa penjelasan atau data adalah gaya kepemimpinan otoriter yang dapat menimbulkan resistensi dan tidak menyelesaikan masalah secara tuntas.
• D (3 poin): Memindahkan anggota tim mungkin menyelesaikan masalah jangka pendek, namun tidak mengatasi penyebab utama penurunan kinerja.
―
Cara cepat:
Cari opsi yang berbasis evaluasi, kolaborasi, dan identifikasi masalah dengan pendekatan sistematis.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Sosiokultural". */
export const contohSosialKultural: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Seorang rekan kerja Anda sedang mengalami kesulitan dalam menyelesaikan tugas yang diberikan. Apa yang Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menawarkan bantuan untuk menyelesaikan tugas tersebut bersama` },
        { label: 'B', teks: `Memberitahunya untuk mencoba lebih keras dan jangan menyerah` },
        { label: 'C', teks: `Mengabaikan dan membiarkan dia menyelesaikannya sendiri` },
        { label: 'D', teks: `Mengkritik hasil kerjanya dan memberitahu dia bahwa dia harus lebih cepat` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Menawarkan bantuan untuk menyelesaikan tugas tersebut bersama
Pembahasan:
A. (4 poin) Menunjukkan empati dengan siap membantu dan meringankan bebannya.
B. (3 poin) Menyemangati bisa membantu, tapi tidak memberikan dukungan praktis yang dibutuhkan.
C. (2 poin) Mengabaikan rekan yang membutuhkan bantuan, yang bisa menurunkan semangatnya.
D. (1 poin) Kritik tanpa menawarkan bantuan hanya akan memperburuk situasi.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Dalam suatu proyek lintas daerah, Anda menjadi satu-satunya perwakilan dari daerah Indonesia Timur. Beberapa rekan kerja menunjukkan sikap meremehkan masukan Anda. Apa langkah paling tepat?`,
      opsi: [
        { label: 'A', teks: `Mengabaikannya dan fokus bekerja tanpa mempermasalahkan perlakuan mereka.` },
        { label: 'B', teks: `Mencari dukungan dari rekan yang bersikap netral agar suara Anda tetap didengar.` },
        { label: 'C', teks: `Menyampaikan secara terbuka bahwa Anda merasa diremehkan.` },
        { label: 'D', teks: `Melaporkan perilaku tersebut ke atasan karena sudah melukai harga diri Anda.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan:
A (1 poin): Tidak menyelesaikan masalah diskriminasi secara sistemik.
B (4 poin): Strategis dan membangun solidaritas untuk memperkuat posisi.
C (2 poin): Langsung, tetapi bisa dianggap emosional jika tidak dikemas baik.
D (3 poin): Solusi struktural, tapi sebaiknya diupayakan dulu secara informal.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Di kantor Anda, seorang rekan kerja mengalami keguguran dan sejak saat itu ia tampak murung dan tidak seceria biasanya. Ia jarang berbicara dengan siapa pun dan lebih sering menyendiri. Apa yang Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Saya menghormati privasinya dan memilih untuk tidak mengganggunya.` },
        { label: 'B', teks: `Saya menghampirinya dan menawarkan untuk mendengarkan ceritanya jika ia ingin berbagi.` },
        { label: 'C', teks: `Saya menyampaikan ke atasan agar bisa mengarahkan konseling untuknya.` },
        { label: 'D', teks: `Saya tetap bersikap seperti biasa agar ia tidak merasa dikasihani.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban:
B. Saya menghampirinya dan menawarkan untuk mendengarkan ceritanya jika ia ingin berbagi.
Pembahasan:
Opsi A: 2 poin
Karena jika saya menjauh dengan alasan menghormati privasi, saya justru bisa membuatnya merasa diabaikan.
Opsi B: 4 poin
Karena jika saya menghampirinya dan menawarkan untuk mendengarkan, saya menunjukkan empati secara langsung dan memberi ruang aman untuknya berbicara tanpa tekanan.
Opsi C: 3 poin
Karena jika saya menyampaikan ke atasan, itu bentuk kepedulian tidak langsung, tapi bisa dianggap mencampuri urusan pribadi jika tidak hati-hati.
Opsi D: 1 poin
Karena jika saya bersikap seolah tidak terjadi apa-apa, saya bisa dianggap tidak peduli terhadap kondisi emosionalnya.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Anda menjadi narasumber dalam diskusi pendidikan inklusif. Salah satu peserta menyampaikan pendapat yang menyinggung kelompok difabel. Apa yang Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Mengabaikannya untuk menjaga kelancaran diskusi.` },
        { label: 'B', teks: `Meminta peserta lain merespons agar terjadi diskusi terbuka.` },
        { label: 'C', teks: `Menyampaikan klarifikasi dengan tetap menghargai pendapat peserta.` },
        { label: 'D', teks: `Menghentikan peserta tersebut karena pernyataannya diskriminatif.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan:
A (1 poin): Mengabaikan potensi salah paham publik.
B (2 poin): Demokratis, tapi bisa memperkeruh situasi.
C (4 poin): Menunjukkan kepemimpinan wacana yang bijak dan edukatif.
D (3 poin): Tegas, namun bisa membuat suasana tidak nyaman.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Seorang kolega Anda mengubah penampilannya sesuai identitas gendernya. Beberapa pegawai mulai menjauhinya. Apa tindakan Anda?`,
      opsi: [
        { label: 'A', teks: `Melaporkan ke HR agar ada sesi edukasi keberagaman.` },
        { label: 'B', teks: `Membiarkannya karena khawatir dianggap ikut mendukung.` },
        { label: 'C', teks: `Mengingatkan rekan-rekan agar tidak mendiskriminasi.` },
        { label: 'D', teks: `Mengajak rekan tersebut bergabung dalam aktivitas sosial di kantor.` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
A (2 poin): Baik, tapi pasif dan lambat bila tidak disertai tindakan pribadi.
B (1 poin): Menghindar dan memperparah isolasi.
C (3 poin): Edukatif, namun bisa menimbulkan resistensi jika tidak disampaikan bijak.
D (4 poin): Mendorong inklusi lewat tindakan nyata.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Wawancara". */
export const contohWawancara: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Hampir semua pegawai di instansi Anda meminta uang tanda terima kasih atas pengurusan surat izin tertentu. Namun, menurut peraturan kantor, hal tersebut tidaklah diperbolehkan. Maka Anda...`,
      opsi: [
        { label: 'A', teks: `Mengikuti kebiasaan tersebut karena hampir semua rekan melakukannya` },
        { label: 'B', teks: `Menolak menerima uang tersebut karena bertentangan dengan aturan` },
        { label: 'C', teks: `Menerima uang tersebut jika nilainya kecil dan tidak memberatkan pemohon` },
        { label: 'D', teks: `Diam saja, tidak menolak namun juga tidak secara langsung memintanya` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban:
B. Menolak menerima uang tersebut karena bertentangan dengan aturan
Pembahasan:
Opsi A: 1 poin
Karena jika saya mengikuti kebiasaan yang melanggar aturan hanya demi menyesuaikan diri, saya berisiko kehilangan integritas dan kepercayaan.
Opsi B: 4 poin
Karena jika saya menolak pemberian tersebut, saya menjunjung tinggi aturan dan nilai integritas, serta menjadi contoh baik bagi rekan kerja lainnya.
Opsi C: 2 poin
Karena jika saya menerima uang sekecil apapun, saya tetap melanggar aturan dan membuka celah praktik yang tidak etis.
Opsi D: 3 poin
Karena jika saya bersikap pasif, saya tetap memberi ruang terjadinya pelanggaran walau tidak secara aktif terlibat.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Rekan kerja Anda sering datang terlambat dan tugasnya sering Anda yang menyelesaikan. Hal ini mulai memengaruhi kinerja Anda. Apa yang Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menyampaikan kondisi ini kepada atasan Anda.` },
        { label: 'B', teks: `Membicarakannya langsung dengan rekan Anda dengan cara yang sopan.` },
        { label: 'C', teks: `Terus menyelesaikan pekerjaannya karena tidak ingin memperkeruh suasana.` },
        { label: 'D', teks: `Mengeluh pada rekan kerja lain agar ikut menegur.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan:
A. 3 Poin – Melapor ke atasan bisa efektif, tapi lebih baik didahului dengan komunikasi langsung.
B. 4 Poin – Pendekatan langsung dan sopan menunjukkan kedewasaan emosional dan komunikasi asertif.
C. 2 Poin – Toleransi berlebihan bisa merugikan diri sendiri dan menciptakan ketidakseimbangan kerja tim.
D. 1 Poin – Mengeluh ke orang lain dapat menimbulkan gosip dan iklim kerja yang negatif.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Nilai yang sangat dijunjung oleh ASN adalah nilai integritas. Apakah Anda memiliki nilai tersebut?`,
      opsi: [
        { label: 'A', teks: `Ya, saya menganggap integritas sebagai hal yang paling penting dalam bekerja.` },
        { label: 'B', teks: `Saya tidak terlalu memikirkan nilai integritas, yang penting tugas selesai.` },
        { label: 'C', teks: `Saya menganggap integritas penting, namun ada kalanya nilai tersebut bisa digantikan dengan efisiensi.` },
        { label: 'D', teks: `Saya rasa integritas itu penting, tetapi saya percaya bahwa hasil lebih penting daripada prosesnya.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban:
A. Ya, saya menganggap integritas sebagai hal yang paling penting dalam bekerja.
Pembahasan:
Opsi A : 4 poin
Karena jika saya memiliki nilai integritas, saya akan selalu memastikan untuk bertindak dengan jujur dan transparan dalam setiap situasi, tidak hanya dihadapan atasan, tetapi juga saat berinteraksi dengan masyarakat. Integritas adalah prinsip dasar yang menjaga kepercayaan terhadap pekerjaan saya sebagai ASN.
Opsi B : 1 poin
Karena jika saya tidak terlalu memikirkan integritas, ini bisa berisiko merusak reputasi dan kepercayaan yang telah dibangun oleh institusi pemerintah. Penyelesaian tugas tanpa memperhatikan integritas dapat merusak nilai-nilai yang dijunjung oleh organisasi.
Opsi C : 2 poin
Karena jika saya menganggap integritas bisa digantikan dengan efisiensi, saya akan kehilangan fokus pada proses yang benar. Meskipun efisiensi penting, mengabaikan integritas dapat berdampak buruk pada hasil yang dicapai dan kepercayaan masyarakat terhadap institusi.
Opsi D : 3 poin
Karena jika saya lebih mengutamakan hasil daripada prosesnya, saya berpotensi melanggar prinsip-prinsip dasar integritas, seperti kejujuran dan keadilan. Hasil yang dicapai tanpa integritas tidak akan menciptakan dampak positif dalam jangka panjang.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Anda ditugaskan untuk menyelesaikan laporan mingguan yang harus dikumpulkan tepat waktu. Di saat yang sama, rekan Anda menawarkan untuk ikut bergabung dalam kegiatan sosial yang sangat Anda minati, tetapi waktunya bersamaan dengan penyelesaian laporan. Apa yang akan Anda lakukan?`,
      opsi: [
        { label: 'A', teks: `Menolak ajakan tersebut dan fokus menyelesaikan laporan tepat waktu` },
        { label: 'B', teks: `Menunda penyelesaian laporan dan mengikuti kegiatan sosial terlebih dahulu` },
        { label: 'C', teks: `Membagi waktu dengan ikut kegiatan sosial setengah hari lalu lanjut menyelesaikan laporan` },
        { label: 'D', teks: `Meminta rekan lain untuk menggantikan tugas laporan agar bisa ikut kegiatan sosial` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Menolak ajakan tersebut dan fokus menyelesaikan laporan tepat waktu
Pembahasan:
A. Menolak ajakan tersebut dan fokus menyelesaikan laporan tepat waktu (4 poin) Ini menunjukkan komitmen terhadap tanggung jawab utama dan disiplin terhadap waktu penyelesaian tugas.
B. Menunda penyelesaian laporan dan mengikuti kegiatan sosial terlebih dahulu (1 poin) Ini menunjukkan kurangnya prioritas terhadap tugas utama dan berpotensi mengganggu kinerja tim.
C. Membagi waktu dengan ikut kegiatan sosial setengah hari lalu lanjut menyelesaikan laporan (2 poin) Pilihan ini tampak bijak, tetapi berisiko mengurangi fokus dan kualitas dari laporan yang harus selesai tepat waktu.
D. Meminta rekan lain untuk menggantikan tugas laporan agar bisa ikut kegiatan sosial (3 poin) Ini menunjukkan usaha mencari solusi, tapi tetap kurang mencerminkan komitmen pribadi terhadap tanggung jawab.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Anda sedang bersaing dengan rekan kerja untuk mendapatkan promosi. Suatu hari, Anda mengetahui bahwa ia telah membuat kesalahan yang dapat memengaruhi penilaiannya.`,
      opsi: [
        { label: 'A', teks: `Mengajak rekan kerja berdiskusi untuk memastikan persaingan tetap sehat` },
        { label: 'B', teks: `Melaporkan kesalahannya agar peluang promosi Anda meningkat` },
        { label: 'C', teks: `Menjaga rahasia kesalahan rekan kerja dan fokus pada kinerja diri sendiri` },
        { label: 'D', teks: `Menyampaikan kepada rekan kerja bahwa Anda mengetahui kesalahannya` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A. Mengajak rekan kerja berdiskusi untuk memastikan persaingan tetap sehat
Pembahasan:
A. Mengajak rekan kerja berdiskusi untuk memastikan persaingan tetap sehat (4 Poin)
Pembahasan: Opsi ini menunjukkan sikap etis yang baik karena Anda menjaga komunikasi terbuka dengan rekan kerja dan mendukung suasana kompetisi yang adil. Opsi ini mencerminkan profesionalisme serta niat baik untuk menjaga hubungan kerja yang positif.
B. Melaporkan kesalahannya agar peluang promosi Anda meningkat (1 Poin)
Pembahasan: Opsi ini menunjukan tindakan tidak etis dan manipulatif. Melaporkan kesalahan rekan kerja dengan tujuan memanfaatkan situasi untuk keuntungan pribadi mencerminkan perilaku yang tidak etis. Pendekatan ini dapat merusak hubungan kerja, menciptakan suasana kompetisi yang tidak sehat, dan merugikan reputasi Anda di tempat kerja.
C. Menjaga rahasia kesalahan rekan kerja dan fokus pada kinerja diri sendiri (2 Poin)
Pembahasan: Opsi ini mencerminkan sikap netral dan menjaga hubungan baik. Dengan fokus pada kinerja sendiri, Anda menunjukkan sikap yang independen. Namun, menyimpan informasi tentang kesalahan tanpa memberikan solusi juga menunjukkan kurangnya rasa tanggung jawab terhadap keberhasilan tim secara keseluruhan.
D. Menyampaikan kepada rekan kerja bahwa Anda mengetahui kesalahannya (3 Poin)
Pembahasan: Opsi ini menunjukkan rasa tanggung jawab dan empati dengan memberi tahu rekan kerja secara langsung tanpa mempermalukannya. Namun, pendekatan ini belum sepenuhnya mendorong kolaborasi atau solusi jangka panjang. Hal ini juga dapat menimbulkan ketegangan jika rekan kerja merasa hanya dikritik tanpa diberikan jalan keluar.`,
      status: 'direview',
    },
    ],
  },
];
