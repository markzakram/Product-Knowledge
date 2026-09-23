import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal tes objektif UKPPPG, dari paket tryout Markaz susunan Juli 2026.
 *
 * Paket sumber: "6 Tryout Tes Objektif UKPPPG" (ID 3754).
 *
 * Dihasilkan oleh skrip/ke-data.mjs, lalu boleh disunting tangan.
 * Status sengaja 'direview', bukan 'final': isinya berasal dari bank soal
 * produksi dan belum diperiksa ulang untuk keperluan etalase.
 */
/** 3 soal dari lesson "Pedagogik". */
export const contohPedagogik: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'pg',
      pertanyaan: `Portofolio menulis seorang siswa menunjukkan perbaikan besar dari draf awal ke draf akhir, tetapi produk akhirnya masih di bawah standar kelas. Guru perlu menilai capaian saat ini sekaligus memberi makna pada kemajuan proses.
Keputusan penilaian yang paling tepat adalah...`,
      opsi: [
        { label: 'A', teks: `memberi nilai penuh karena siswa telah berusaha keras` },
        { label: 'B', teks: `menilai hanya produk akhir dan mengabaikan seluruh draf` },
        { label: 'C', teks: `menaikkan standar khusus siswa agar kemajuan berikutnya lebih cepat` },
        { label: 'D', teks: `melaporkan capaian terhadap rubrik, mendokumentasikan kemajuan proses, dan menetapkan sasaran revisi berikutnya` },
        { label: 'E', teks: `mengganti nilai portofolio dengan kesan umum guru saat konferensi` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan:
A salah karena usaha dan kemajuan penting, tetapi nilai capaian tetap harus merujuk standar kompetensi yang diumumkan.
B salah karena pendekatan ini kehilangan bukti perkembangan dan strategi revisi yang relevan dalam portofolio.
C salah karena standar yang lebih tinggi secara sepihak mengurangi keadilan dan tidak menjelaskan dukungan yang diperlukan.
D benar karena keputusan ini memisahkan status kompetensi, perkembangan, dan tindak lanjut secara transparan.
E salah karena kesan umum kurang dapat ditelusuri dan tidak menggunakan bukti karya yang tersedia.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'pg',
      pertanyaan: `Dalam analisis iklan, seorang siswa menyatakan kelompok etnis tertentu 'memang cocok' dengan pekerjaan rendah karena sering digambarkan demikian di media. Beberapa teman menyetujui, sedangkan siswa dari kelompok tersebut tampak tidak nyaman.
Respons guru yang paling tepat adalah...`,
      opsi: [
        { label: 'A', teks: `mengabaikan komentar agar diskusi tidak berubah menjadi persoalan pribadi` },
        { label: 'B', teks: `memarahi siswa dan memberi label rasis di depan kelas` },
        { label: 'C', teks: `mengganti topik karena isu identitas terlalu sensitif untuk dibahas` },
        { label: 'D', teks: `meminta siswa terdampak menjelaskan mengapa stereotip itu menyakitkan` },
        { label: 'E', teks: `menghentikan generalisasi, menegaskan dampaknya, lalu memandu analisis bukti tentang seleksi representasi dan struktur kesempatan` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban: E
Pembahasan:
A salah karena pembiaran menormalkan stereotip dan mengabaikan keamanan siswa yang terdampak.
B salah karena pelabelan personal dapat memicu defensif dan tidak membongkar cara kerja representasi media.
C salah karena penghindaran menghilangkan kesempatan mengembangkan literasi media dan penghargaan terhadap martabat manusia.
D salah karena tanggung jawab edukasi tidak seharusnya dibebankan kepada siswa yang menjadi sasaran.
E benar karena respons ini melindungi siswa sekaligus mengubah peristiwa menjadi kajian kritis terhadap stereotip.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'pg',
      pertanyaan: `Guru ingin menerapkan inkuiri pada topik kualitas air, tetapi siswa belum terbiasa merumuskan variabel dan prosedur. Tindakan guru yang paling tepat adalah...`,
      opsi: [
        { label: 'A', teks: `memberikan inkuiri terbimbing dengan contoh pertanyaan, scaffolding variabel, lalu pelepasan bantuan bertahap` },
        { label: 'B', teks: `menambah jumlah latihan tanpa mengubah dukungan atau strategi` },
        { label: 'C', teks: `menyeragamkan tugas agar administrasi penilaian lebih sederhana` },
        { label: 'D', teks: `menurunkan tuntutan kompetensi agar semua siswa segera tuntas` },
        { label: 'E', teks: `mengalihkan seluruh tanggung jawab perbaikan kepada siswa` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan:
A benar karena tindakan tersebut langsung menanggapi masalah dalam stimulus, tetap selaras dengan tujuan belajar, dan menghasilkan bukti yang dapat digunakan untuk tindak lanjut.
B salah karena mengutamakan kemudahan prosedural daripada ketercapaian kompetensi.
C salah karena mengurangi kesempatan siswa membangun pemahaman dan tanggung jawab belajar.
D salah karena tidak menyelesaikan akar masalah yang tampak pada stimulus.
E salah karena tidak menggunakan data kebutuhan siswa sebagai dasar keputusan.`,
      status: 'direview',
    },
    ],
  },
];

/** 5 soal dari lesson "Situational Judgemental Test". */
export const contohSjt: Kelompok[] = [
  {
    soal: [
    {
      nomor: 1,
      tipe: 'skala',
      pertanyaan: `Pelaksanaan projek bazar wirausaha sekolah yang Anda koordinasikan menghasilkan keuntungan finansial yang sangat besar, namun memicu perselisihan sengit antarpeserta didik mengenai proporsi pembagian uang hasil keuntungan tersebut di dalam internal kelompok mereka. Langkah terbaik yang dapat Anda lakukan adalah...`,
      opsi: [
        { label: 'A', teks: `Mengambil alih seluruh uang keuntungan tersebut untuk disimpan secara permanen oleh guru pribadi agar perselisihan antarpeserta didik langsung berakhir saat itu juga.` },
        { label: 'B', teks: `Memasilitasi forum musyawarah kelompok untuk meninjau kembali kesepakatan awal kontribusi kerja dan membagi keuntungan secara adil, transparan, dan disepakati bersama.` },
        { label: 'C', teks: `Membagi rata uang keuntungan tersebut secara mutlak ke semua kepala anak tanpa mempertimbangkan perbedaan beban kerja nyata masing-masing anggota kelompok.` },
        { label: 'D', teks: `Menyerahkan penyelesaian konflik keuangan internal anak-anak tersebut sepenuhnya kepada pihak guru BK atau kepala sekolah untuk segera diputuskan.` },
        { label: 'E', teks: `Menghukum seluruh anggota kelompok dengan menyumbangkan paksa semua uang keuntungan tersebut ke panti asuhan luar tanpa persetujuan dari mereka.` },
      ],
      kunci: 'B',
      pembahasan: `Jawaban: B
Pembahasan
B (Skor 5) → Membimbing mereka bermusyawarah berbasis data kontribusi nyata mengajarkan nilai-nilai keadilan ekonomi, transparansi, komunikasi resolusi konflik, dan tata kelola bisnis yang dewasa pada siswa.
C (Skor 4) → Membagi rata mutlak adalah solusi praktis tercepat untuk meredam keributan, tetapi mengabaikan rasa keadilan bagi anggota kelompok yang telah mencurahkan waktu dan tenaga jauh lebih besar.
D (Skor 3) → Melempar masalah resolusi konflik internal proyek ke guru BK membantu meredakan ketegangan, tetapi mengurangi peran guru proyek sebagai mentor pembimbing utama aktivitas wirausaha anak.
E (Skor 2) → Menyumbangkan paksa uang hasil keringat anak sebagai bentuk hukuman kemarahan guru merupakan tindakan otoriter yang mencederai hak kepemilikan mereka dan memicu dendam psikologis.
A (Skor 1) → Menyita uang keuntungan proyek siswa untuk penguasaan pribadi guru dengan dalih penertiban konflik merupakan tindakan penggelapan material yang melanggar hukum dan moralitas.`,
      status: 'direview',
    },
    {
      nomor: 2,
      tipe: 'skala',
      pertanyaan: `Dalam jalannya diskusi kelompok mata pelajaran PPKn bertema toleransi kebangsaan, seorang peserta didik bersikeras mengeluarkan argumen verbal yang merendahkan nilai kesucian ritual ibadah pemeluk agama minoritas di kelas tersebut, sehingga memicu suasana tegang dan tidak nyaman. Tindakan yang paling tepat adalah...`,
      opsi: [
        { label: 'A', teks: `Membiarkan argumen rasis tersebut berkembang bebas di dalam forum diskusi atas nama kebebasan berpendapat dan pemenuhan hak asasi setiap peserta didik untuk berbicara.` },
        { label: 'B', teks: `Langsung mengeluarkan peserta didik tersebut dari dokumen keanggotaan kelas reguler dan memberikan vonis nilai angka nol pada nilai rapor kompetensi sikapnya semester ini.` },
        { label: 'C', teks: `Memukul meja guru dengan keras dan memarahi peserta didik tersebut dengan nada tinggi di depan teman-temannya agar ia langsung menyadari bahwa tindakannya salah.` },
        { label: 'D', teks: `Mengintervensi jalannya diskusi secara bijaksana, meluruskan pemahaman konsep toleransi kebhinekaan berdasarkan Pancasila, serta membangun dialog reflektif yang edukatif bagi seluruh kelas.` },
        { label: 'E', teks: `Meminta pemeluk agama minoritas di kelas tersebut untuk membalas argumen dengan nada yang sama kerasnya agar terjadi keseimbangan debat terbuka di dalam kelas.` },
      ],
      kunci: 'D',
      pembahasan: `Jawaban: D
Pembahasan
D (Skor 5) → Melakukan intervensi edukatif yang meluruskan miskonsepsi berbasis nilai Pancasila mengubah ketegangan SARA menjadi laboratorium pembelajaran toleransi riil yang mendalam bagi seluruh siswa.
C (Skor 4) → Menegur keras dengan kemarahan fisik menghentikan ujaran kebencian secara instan di kelas, tetapi atmosfer emosional guru yang meledak kurang memberikan keteladanan komunikasi yang bijak.
B (Skor 3) → Menjatuhkan hukuman nilai nol dan pengusiran langsung menegaskan ketegasan sanksi intoleransi, tetapi menutup ruang pembinaan karakter perbaikan pola pikir anak yang bersangkutan.
A (Skor 2) → Membiarkan ujaran diskriminasi SARA merajalela di dalam kelas dengan dalih kebebasan berpendapat merupakan pembiaran berbahaya yang merusak iklim kebinekaan dan keamanan mental siswa minoritas.
E (Skor 1) → Memprovokasi benturan horizontal antar-siswa berbasis sentimen agama di dalam kelas merupakan tindakan berbahaya yang menghancurkan kedamaian ekosistem pendidikan secara fatal.`,
      status: 'direview',
    },
    {
      nomor: 3,
      tipe: 'skala',
      pertanyaan: `Kelompok peserta didik binaan Anda dalam pameran proyek kewirausahaan sekolah berhasil menciptakan inovasi kemasan produk kosmetik herbal dari batok kelapa bekas yang sangat estetik, namun produk tersebut ditiru konsep desainnya secara persis oleh kelompok kelas paralel binaan guru lain. Tindakan terbaik Anda sebagai pembina adalah...`,
      opsi: [
        { label: 'A', teks: `Memarahi kelompok siswa binaan Anda atas kecerobohan mereka meletakkan draf contoh desain kemasan produk di tempat umum yang mudah dilihat kelas lain.` },
        { label: 'B', teks: `Menginstruksikan kelompok binaan Anda untuk melakukan aksi sabotase fisik merusak stan pameran kewirausahaan kelompok kelas paralel peniru tersebut sebagai balasan dendam.` },
        { label: 'C', teks: `Membantu kelompok mendokumentasikan orisinalitas proses kerja draf mereka, melakukan mediasi kepala dingin bersama rekan guru pembina kelas paralel lain untuk solusi kolaboratif.` },
        { label: 'D', teks: `Mengambil keputusan membatalkan keikutsertaan kelompok binaan Anda sendiri dari pameran kewirausahaan sekolah karena merasa kecewa konsep idenya telah bocor ditiru.` },
        { label: 'E', teks: `Menyuruh kelompok binaan Anda untuk membeli produk kosmetik pabrikan bermerek terkenal di pasar luar lalu mengklaimnya sebagai karya kreasi asli modifikasi baru tim mereka.` },
      ],
      kunci: 'C',
      pembahasan: `Jawaban: C
Pembahasan
C (Skor 5) → Mengumpulkan bukti dokumentasi draf orisinalitas proses kerja dan menempuh jalur mediasi profesional bersama guru pembina lain mengedukasi hak kekayaan intelektual secara kolaboratif solutif.
D (Skor 4) → Membatalkan keikutsertaan tim sendiri akibat ketersinggungan konsep bocor menyelamatkan kelompok dari konflik, tetapi menghancurkan seluruh hasil proses perjuangan fisik produk kerajinan anak.
A (Skor 3) → Menyalahkan siswa korban peniruan kemasan mencederai rasa aman hubungan emosional guru-murid dan membuat kelompok merasa tidak mendapatkan perlindungan pembelaan yang adil dari pembina.
B (Skor 2) → Menginstruksikan aksi sabotase fisik pengrusakan stan kelompok peniru mencerminkan kegagalan total kompetensi kepribadian moral guru yang menyuburkan premanisme anarki di sekolah.
E (Skor 1) → Menyuruh membeli produk pabrikan luar untuk diklaim sebagai karya modifikasi orisinal baru merupakan fraud plagiarisme berat yang merusak fondasi moral kejujuran ilmiah anak.`,
      status: 'direview',
    },
    {
      nomor: 4,
      tipe: 'skala',
      pertanyaan: `Sebagai wali kelas di sekolah reguler, Anda mendapati seorang peserta didik penyandang tunagrahita ringan (hambatan kecerdasan) sering kali ditinggal sendirian oleh teman-temannya saat pembagian kelompok belajar, sehingga ia menangis di pojok kelas karena merasa diasingkan. Langkah prioritas yang seharusnya Anda lakukan adalah...`,
      opsi: [
        { label: 'A', teks: `Merancang formasi kelompok secara heterogen terencana, menanamkan nilai-nilai inklusivitas kepada seluruh kelas, serta membimbing interaksi tim secara intensif.` },
        { label: 'B', teks: `Meminta orang tua siswa tersebut untuk segera memindahkannya ke Sekolah Luar Biasa (SLB) agar mendapatkan lingkungan pertemanan sejenis yang setara.` },
        { label: 'C', teks: `Membiarkan siswa tersebut belajar sendirian secara terpisah di meja guru sepanjang semester berjalan demi menjaga ketenangan suasana kelas reguler.` },
        { label: 'D', teks: `Menghukum seluruh peserta didik di kelas dengan tidak memberikan nilai tugas kelompok jika mereka tidak ada yang mau mengajaknya bergabung.` },
        { label: 'E', teks: `Menugaskan ketua kelas secara sepihak untuk menemani siswa tersebut belajar dan melarang anggota kelas lainnya ikut campur dalam aktivitas mereka.` },
      ],
      kunci: 'A',
      pembahasan: `Jawaban: A
Pembahasan
A (Skor 5) → Mengelola pembagian kelompok secara inklusif dan mengedukasi empati kemanusiaan seluruh kelas mewujudkan esensi sejati dari implementasi lingkungan aman sekolah ramah inklusi.
E (Skor 4) → Menunjuk ketua kelas sebagai pendamping memberikan perlindungan instan, tetapi membatasi ruang sosialisasi alami anak dengan anggota kelas lainnya dan memicu beban ganda ketua kelas.
C (Skor 3) → Memisahkan anak di meja guru mengamankan fisiknya dari penolakan teman, tetapi secara psikologis mempertegas sekat pengasingan dirinya dari dinamika sosial kelas reguler.
D (Skor 2) → Memberikan hukuman nilai massal kolektif tanpa adanya edukasi kesadaran moral memicu rasa benci tersembunyi dari siswa lain terhadap keberadaan siswa inklusi tersebut.
B (Skor 1) → Mengusir anak hambatan kecerdasan ringan ke SLB hanya karena guru enggan mengelola dinamika sosial inklusi di kelas reguler melanggar hak asasi akses pendidikan.`,
      status: 'direview',
    },
    {
      nomor: 5,
      tipe: 'skala',
      pertanyaan: `Dalam sebuah rapat koordinasi kurikulum sekolah, Anda mengusulkan model asesmen portofolio berbasis proyek mandiri untuk melatih kemandirian siswa, namun pimpinan dewan guru senior menolak keras karena menganggap sistem ujian tertulis pilihan ganda konvensional jauh lebih mudah dikoreksi dan hemat anggaran kertas. Respons profesional yang paling tepat adalah...`,
      opsi: [
        { label: 'A', teks: `Membatalkan rencana usulan tersebut dan memohon maaf secara mendalam kepada guru senior karena telah lancang mengganggu kenyamanan pola kerja lama mereka.` },
        { label: 'B', teks: `Memaksakan penerapan model portofolio proyek di seluruh kelas secara sepihak tanpa memedulikan hasil keputusan keputusan pleno rapat kurikulum sekolah.` },
        { label: 'C', teks: `Menyindir kapasitas pemahaman kompetensi pedagogik para guru senior yang menolak usulan Anda tersebut melalui tulisan status sindiran di akun media sosial publik.` },
        { label: 'D', teks: `Menyarankan kepada kepala sekolah untuk memberikan sanksi administratif pemotongan jabatan fungsional bagi semua guru senior yang menolak pembaruan asesmen.` },
        { label: 'E', teks: `Menerima masukan dengan terbuka, menyajikan data riset efektivitas portofolio, dan menawarkan uji coba model (pilot project) terbatas di kelas Anda sebagai contoh nyata.` },
      ],
      kunci: 'E',
      pembahasan: `Jawaban: E
Pembahasan
E (Skor 5) → Menghargai perbedaan pendapat, menyajikan argumen ilmiah berbasis riset, dan menawarkan solusi taktis kualitatif berupa proyek percontohan (pilot project) merupakan langkah diplomasi inovasi pembelajaran yang luar biasa.
A (Skor 4) → Mengalah mundur total demi kenyamanan senioritas menjaga stabilitas keharmonisan relasi ruang guru, tetapi mengorbankan momentum akselerasi mutu sistem asesmen perkembangan siswa.
B (Skor 3) → Memaksakan metode secara sepihak melanggar asas kepatuhan kolektif organisasi dan dapat memicu penolakan administrasi yang merusak jalannya standardisasi sistem nilai sekolah.
C (Skor 2) → Melakukan konfrontasi tidak langsung lewat sindiran media sosial mencerminkan buruknya kompetensi kepribadian moral komunikasi dan merusak iklim profesionalitas korps dewan guru.
D (Skor 1) → Menuntut hukuman jabatan bagi kolega senior yang berbeda pandangan pedagogis menunjukkan ketidaksediaan berdialog sehat dan merusak kebersamaan internal lembaga.`,
      status: 'direview',
    },
    ],
  },
];
