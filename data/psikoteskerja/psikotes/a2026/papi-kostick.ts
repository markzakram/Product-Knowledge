import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * PAPI Kostick (Perception and Preference Inventory), 90 pasang pernyataan, 20 aspek, +-30 menit.
 *
 * Dibuat dari draft prototipe PROTOTIPE-PAPI-KOSTICK.html (folder Draft Prototype, diubah
 * 30 September 2026): 90 pasang pernyataan (SOAL), norma 20 aspek (NORMA), dan tujuh bidang
 * (BIDANG). Huruf tujuan tiap pilihan (ka dan kb) dihitung prototipe dari geometri lembar
 * jawaban dan cocok 20/20 dengan contoh penilaian pedoman. Contoh: pasangan 1-10 (kolom
 * pertama lembar jawaban). Boleh disunting tangan.
 *
 * Teks pernyataan berasal dari dokumen lama, bukan dari pedoman: lihat catatan subtes.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya seorang pekerja keras' },
          { label: 'b', teks: 'Saya bukan seorang pemurung' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 1, kolom 1 (nomor 1).
Memilih a memberi 1 poin ke aspek G (Peran Pekerja Keras / Hard Intense Worked). Memilih b memberi 1 poin ke aspek E (Pengendalian Emosi / Emotional Resistant).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka bekerja lebih baik dari orang lain' },
          { label: 'b', teks: 'Saya suka mengerjakan apa yang sedang saya kerjakan, sampai selesai' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 2, kolom 1 (nomor 2).
Memilih a memberi 1 poin ke aspek A (Kebutuhan Berprestasi / Need to Achieve). Memilih b memberi 1 poin ke aspek N (Menyelesaikan Tugas / Need to Finish Task).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka menunjukkan caranya melaksanakan sesuatu hal' },
          { label: 'b', teks: 'Saya ingin bekerja sebaik mungkin' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 3, kolom 1 (nomor 3).
Memilih a memberi 1 poin ke aspek P (Kebutuhan Mengatur Orang Lain / Need to Control Others). Memilih b memberi 1 poin ke aspek A (Kebutuhan Berprestasi / Need to Achieve).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka berkelakar' },
          { label: 'b', teks: 'Saya senang mengatakan kepada orang lain, apa yang harus dilakukannya' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 4, kolom 1 (nomor 4).
Memilih a memberi 1 poin ke aspek X (Kebutuhan untuk Diperhatikan / Need to be Noticed). Memilih b memberi 1 poin ke aspek P (Kebutuhan Mengatur Orang Lain / Need to Control Others).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka menggabungkan diri dengan kelompok-kelompok' },
          { label: 'b', teks: 'Saya suka diperhatikan oleh kelompok-kelompok' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 5, kolom 1 (nomor 5).
Memilih a memberi 1 poin ke aspek B (Diterima dalam Kelompok / Need to Belong to Groups). Memilih b memberi 1 poin ke aspek X (Kebutuhan untuk Diperhatikan / Need to be Noticed).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya senang bersahabat intim dengan seseorang' },
          { label: 'b', teks: 'Saya senang bersahabat dengan sekelompok orang' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 6, kolom 1 (nomor 6).
Memilih a memberi 1 poin ke aspek O (Kedekatan dan Kasih Sayang / Need for Closeness and Affection). Memilih b memberi 1 poin ke aspek B (Diterima dalam Kelompok / Need to Belong to Groups).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya cepat berubah bila hal itu diperlukan' },
          { label: 'b', teks: 'Saya berusaha untuk intim dengan teman-teman' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 7, kolom 1 (nomor 7).
Memilih a memberi 1 poin ke aspek Z (Kebutuhan untuk Berubah / Need for Change). Memilih b memberi 1 poin ke aspek O (Kedekatan dan Kasih Sayang / Need for Closeness and Affection).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka membalas dendam bila saya benar-benar disakiti' },
          { label: 'b', teks: 'Saya suka melakukan hal-hal yang baru dan berbeda' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 8, kolom 1 (nomor 8).
Memilih a memberi 1 poin ke aspek K (Kebutuhan untuk Agresif / Need to be Forceful). Memilih b memberi 1 poin ke aspek Z (Kebutuhan untuk Berubah / Need for Change).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya ingin atasan saya menyukai saya' },
          { label: 'b', teks: 'Saya suka mengatakan kepada orang lain, bila mereka salah' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 9, kolom 1 (nomor 9).
Memilih a memberi 1 poin ke aspek F (Membantu Atasan / Need to Support Authority). Memilih b memberi 1 poin ke aspek K (Kebutuhan untuk Agresif / Need to be Forceful).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: 'Mana yang paling mendekati gambaran diri Anda?',
        opsi: [
          { label: 'a', teks: 'Saya suka mengikuti perintah-perintah yang diberikan kepada saya' },
          { label: 'b', teks: 'Saya suka menyenangkan hati orang yang memimpin saya' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada lembar jawaban: baris 10, kolom 1 (nomor 10).
Memilih a memberi 1 poin ke aspek W (Mengikuti Aturan dan Pengawasan / Need for Rules and Supervision). Memilih b memberi 1 poin ke aspek F (Membantu Atasan / Need to Support Authority).
Tidak ada jawaban benar: tiap pilihan menambah tepat 1 poin ke satu aspek, dan huruf tujuannya ditentukan oleh posisi nomor pada lembar jawaban.`,
        status: 'draft',
      },
    ],
  },
];

export const papiKostick: Subtes = {
  kode: 'papi-kostick',
  nama: 'PAPI Kostick (Perception and Preference Inventory)',
  jumlahSoal: 90,
  waktuMenit: 30,
  formatKetentuan: `90 pasang pernyataan (varian PAPI-I, ipsatif) yang berkaitan dengan situasi kerja. Dari setiap pasang peserta memilih satu pernyataan, a (atas) atau b (bawah), yang paling mendekati gambaran dirinya. Tidak ada jawaban benar atau salah dan tidak ada nilai lulus.

Petunjuk di layar (disusun dari pedoman, tanpa kalimat tambahan):
1. Anda akan mengerjakan 90 pasang pernyataan yang berkaitan dengan situasi kerja.
2. Dari setiap pasangan, pilih satu pernyataan yang paling mendekati gambaran diri Anda.
3. Waktu pengerjaan sekitar 30 menit. Kerjakan secepat mungkin.

Kata "sekitar" membuat batas waktu bersifat lunak di prototipe: waktu habis tidak memaksa pengiriman.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/papi-awal.webp⟧
Layar petunjuk: tiga butir petunjuk dari pedoman.
⟦gambar:gambar/psikoteskerja/papi-mengerjakan.webp⟧
Saat mengerjakan: satu pasang pernyataan (a dan b) per layar, hitung mundur sekitar 30 menit, dan peta 90 nomor.`,
  penilaian: `Hasilnya 20 skor aspek: 10 skor Peran (Roles: G L I T V S R D C E) dan 10 skor Kebutuhan (Needs: N A P X B O Z K F W), masing-masing berskala 0 sampai 9. Aspek dikelompokkan ke tujuh bidang (lihat Materi).

Kunci skor tidak berupa tabel: ia tertanam pada lembar jawaban, yaitu kisi 10 baris x 9 kolom berisi nomor 1-90. Memilih pernyataan a atau b memberi 1 poin ke satu huruf tujuan (ka untuk a, kb untuk b) yang ditentukan oleh posisi nomor pada lembar, bukan oleh isi pernyataan. Tiap pasang memaksa satu pilihan, sehingga skornya ipsatif dan jumlahnya tetap.

Empat langkah penilaian dalam pedoman:
a. Jumlahkan panah terpilih ke kotak huruf Peran (G L I T V S R D C E). Jumlah seluruh skor Peran harus 45.
b. Jumlahkan panah terpilih ke kotak huruf Kebutuhan (N A P X B O Z K F W). Jumlah seluruh skor Kebutuhan harus 45.
c. Pindahkan 20 skor ke lembar psikogram (roda 20 jari-jari; Z dan K berskala terbalik), lingkari angkanya, lalu hubungkan menjadi diagram profil.
d. Baca profil: skor tiap aspek dibaca menurut rentang norma pada tabel "Interpretasi Skor per Aspek" pedoman (lihat Materi).

Pedoman tidak memuat nilai lulus, peringkat, skor atau tafsiran per bidang, rekomendasi kelayakan kerja, maupun pembanding antar peserta.

Tangkapan layar hasil di prototipe (memakai contoh penilaian dari pedoman):
⟦gambar:gambar/psikoteskerja/papi-hasil.webp⟧
Layar hasil: skor Peran dan Kebutuhan (masing-masing berjumlah 45) dan lembar jawaban terisi.`,
  catatan: `Belum pasti: (1) pedoman tidak memuat bank pernyataan. Ke-180 pernyataan di prototipe berasal dari dokumen lama (pdf-papi-kostick_compress.pdf), dan lembar contoh di pedoman bertanda hak cipta M.M. Kostick / PA International, jadi sebelum produksi perlu bank pernyataan resmi yang berlisensi. (2) Dua aspek masih punya skor tanpa tafsiran: T (Pace) untuk skor 7-9 dan V (Vigorous Type) untuk skor 8-9. (3) "Sekitar 30 menit": batas lunak atau keras belum diputuskan; pada batas keras, peserta yang belum selesai tidak mungkin mencapai Peran 45 dan Kebutuhan 45. (4) Pedoman juga menyebut PAPI-N (126 butir, normatif) untuk mengukur Needs dan Roles di tempat kerja; prototipe hanya memuat PAPI-I 90 pasang.

Lima soal (23, 24, 63, 73, 85) berisi dua pernyataan yang sama-sama menyangkal suatu sifat; poinnya diberikan silang ke huruf pasangannya. Itu pola yang konsisten, bukan salah urut, dan kelimanya tidak dipakai sebagai contoh di sini.`,
  materi: [
    {
      nama: 'Kepemimpinan (Leadership) · L: Peran sebagai Pemimpin (Leadership Role)',
      catatan: 'Skor Peran (Roles). Skor 5-9: Memproyeksikan diri sebagai pemimpin dan cenderung menggunakan/mengarahkan orang lain untuk mencapai tujuan. Skor 0-4: Cenderung tidak secara aktif menggunakan orang lain dalam bekerja.',
    },
    {
      nama: 'Kepemimpinan (Leadership) · P: Kebutuhan Mengatur Orang Lain (Need to Control Others)',
      catatan: 'Skor Kebutuhan (Needs). Skor 5-9: Kebutuhan tinggi untuk menerima tanggung jawab atas orang lain dan menjadi pihak yang bertanggung jawab. Skor 0-4: Keinginan untuk bertanggung jawab atas pekerjaan dan tindakan orang lain lebih rendah.',
    },
    {
      nama: 'Kepemimpinan (Leadership) · I: Membuat Keputusan (Ease in Decision Making)',
      catatan: 'Skor Peran (Roles). Skor 0-1: Cenderung menghindari pengambilan keputusan atau melihat perannya lebih sebagai pemberi saran. Skor 2-3: Ragu-ragu dalam mengambil keputusan. Skor 4-5: Berhati-hati dan cermat dalam mengambil keputusan. Skor 6-7: Secara alami percaya diri dalam mengambil keputusan dan proses keputusan cenderung mengalir secara logis. Skor 8-9: Sangat percaya diri dalam pengambilan keputusan.',
    },
    {
      nama: 'Arah Kerja (Work Direction) · N: Menyelesaikan Tugas (Need to Finish Task)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-2: Sangat menyukai menangani banyak pekerjaan yang berbeda dan menikmati variasi. Skor 3-5: Cukup berkomitmen untuk menuntaskan tugas, tetapi tetap nyaman mendelegasikan pekerjaan. Skor 6-7: Lebih menyukai menangani satu pekerjaan pada satu waktu, tetapi masih dapat mengubah prioritas meskipun dengan sedikit kesulitan. Skor 8-9: Menunjukkan komitmen yang sangat kuat pada satu pekerjaan pada satu waktu.',
    },
    {
      nama: 'Arah Kerja (Work Direction) · G: Peran Pekerja Keras (Hard Intense Worked)',
      catatan: 'Skor Peran (Roles). Skor 0-2: Memberikan sedikit atau hampir tidak ada penekanan pada kerja keras sebagai suatu konsep. Skor 3-4: Bekerja sekeras tuntutan tugas dan memusatkan usaha pada bagian yang dinilai bermanfaat. Skor 5-7: Bekerja keras tetapi tetap objektif. Skor 8-9: Memberikan penekanan yang sangat tinggi pada kerja keras sebagai suatu konsep.',
    },
    {
      nama: 'Arah Kerja (Work Direction) · A: Kebutuhan Berprestasi (Need to Achieve)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-4: Tidak secara sadar berusaha keras untuk mencapai keberhasilan. Skor 5-7: Mengetahui apa yang ingin dicapai dan berusaha untuk mencapainya. Skor 8-9: Menunjukkan ambisi yang sangat tinggi.',
    },
    {
      nama: 'Aktivitas Kerja (Work Activity) · T: Peran Sibuk (Pace)',
      catatan: 'Skor Peran (Roles). Skor < 4: Melakukan segala sesuatu menurut kemauannya sendiri. Skor 4-6: Tergolong aktif secara internal dan mental. Skor 7-9: tidak dirumuskan di pedoman.',
    },
    {
      nama: 'Aktivitas Kerja (Work Activity) · V: Peran Penuh Semangat (Vigorous Type)',
      catatan: 'Skor Peran (Roles). Skor < 5: Cenderung pasif. Skor 5-7: Aktif secara fisik dan cenderung sportif. Skor 8-9: tidak dirumuskan di pedoman.',
    },
    {
      nama: 'Gaya Bekerja (Work Style) · C: Tipe Pengatur (Organized Type)',
      catatan: 'Skor Peran (Roles). Skor 0-2: Fleksibel, tetapi cenderung tidak teratur. Skor 3-5: Teratur, tetapi tidak tergolong fleksibel. Skor 6-9: Keteraturan tinggi dan cenderung kaku.',
    },
    {
      nama: 'Gaya Bekerja (Work Style) · D: Bekerja dengan Hal Rinci (Interest in Working with Details)',
      catatan: 'Skor Peran (Roles). Skor 0-3: Menyadari kebutuhan akan kecermatan, tetapi tidak berminat bekerja secara detail. Skor 4-9: Minat tinggi untuk bekerja secara detail.',
    },
    {
      nama: 'Gaya Bekerja (Work Style) · R: Tipe Teoretis (Theoretical Type)',
      catatan: 'Skor Peran (Roles). Skor 0-4: Kurang menaruh perhatian pada hal teoretis dan cenderung praktis. Skor 5-9: Nilai penalaran tergolong tinggi.',
    },
    {
      nama: 'Sifat Temperamen (Temperament) · Z: Kebutuhan untuk Berubah (Need for Change)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-1: Mencari lingkungan yang stabil dan tidak banyak berubah. Skor 2-3: Kurang bersedia berubah dan tidak mudah beradaptasi; perubahan lebih mudah diterima jika alasannya dijelaskan dengan baik. Skor 4-5: Adaptif dan menikmati perubahan dalam tingkat tertentu. Skor 6-7: Antusias terhadap perubahan dan akan mencarinya, tetapi tetap dengan tingkat selektivitas tertentu. Skor 8-9: Cenderung gelisah atau frustrasi dan secara aktif mencari perubahan serta variasi.',
    },
    {
      nama: 'Sifat Temperamen (Temperament) · E: Pengendalian Emosi (Emotional Resistant)',
      catatan: 'Skor Peran (Roles). Skor 0-1: Sangat terbuka dan ekspresif; reaksi terhadap orang dan situasi tampak jelas. Skor 2-3: Sangat terbuka sehingga pikiran atau perasaan relatif mudah terbaca. Skor 4-6: Memiliki kontrol yang cukup untuk menahan emosi; mampu bereaksi sekaligus mengendalikan perasaan. Skor 7-9: Mampu menyimpan pikiran atau perasaan untuk dirinya sendiri.',
    },
    {
      nama: 'Sifat Temperamen (Temperament) · K: Kebutuhan untuk Agresif (Need to be Forceful)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-1: Cenderung mengalihkan konflik dan bahkan dapat tidak mengenali adanya konflik. Skor 2-3: Lebih memilih menghindari konflik, merasionalisasi situasi, dan melihat sudut pandang orang lain. Skor 4-5: Tidak mencari maupun menghindari konflik; mau mendengarkan pandangan orang lain, tetapi dapat menjadi keras kepala ketika mempertahankan pandangannya. Skor 6-7: Menyampaikan pandangan dengan cukup tegas dan positif. Skor 8-9: Cenderung mudah tersinggung, reaktif, dan agresif.',
    },
    {
      nama: 'Posisi Atasan-Bawahan (Followership) · F: Membantu Atasan (Need to Support Authority)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-3: Loyalitas lebih berorientasi pada kepentingan sendiri. Skor 4-6: Menunjukkan loyalitas terhadap perusahaan. Skor 7: Loyalitas terhadap individu yang memiliki otoritas meningkat. Skor 8-9: Cenderung mencari identifikasi personal dengan individu yang memiliki otoritas.',
    },
    {
      nama: 'Posisi Atasan-Bawahan (Followership) · W: Mengikuti Aturan dan Pengawasan (Need for Rules and Supervision)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-3: Mampu bekerja berdasarkan tujuan dan hanya membutuhkan kerangka umum. Skor 4-5: Membutuhkan masalah diberi sedikit penanda atau panduan dan parameter kerja didefinisikan. Skor 6-7: Membutuhkan tugas didefinisikan dengan jelas dan dapat bekerja dengan keyakinan yang lebih rendah bila arahan kurang jelas. Skor 8-9: Menghendaki segala sesuatu dijelaskan secara rinci; inisiatif cenderung lebih rendah.',
    },
    {
      nama: 'Relasi Sosial (Social Nature) · O: Kedekatan dan Kasih Sayang (Need for Closeness and Affection)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-2: Cenderung berjarak dalam hubungan satu lawan satu, lebih berorientasi pada fungsi, serta relatif objektif dan analitis. Skor 3-5: Tidak secara aktif mencari maupun menghindari kontak personal yang dekat. Skor 6-9: Semakin mempertimbangkan apa yang dipikirkan orang lain dan peka terhadap kebutuhan orang lain.',
    },
    {
      nama: 'Relasi Sosial (Social Nature) · B: Diterima dalam Kelompok (Need to Belong to Groups)',
      catatan: 'Skor Kebutuhan (Needs). Skor 0-2: Cenderung tidak terlalu membutuhkan keterlibatan dalam kelompok dan dapat lebih menyendiri. Skor 3-5: Selektif dalam bergabung dengan kelompok kerja apabila nilai dan minatnya sesuai. Skor 6-9: Membutuhkan menjadi bagian dari suatu kelompok.',
    },
    {
      nama: 'Relasi Sosial (Social Nature) · S: Peran Hubungan Sosial (Social Extension)',
      catatan: 'Skor Peran (Roles). Skor 0-2: Lebih memperhatikan hal lain selain orang, misalnya tugas pekerjaan. Skor 3-4: Kurang percaya diri dalam interaksi sosial dan dapat menunjukkan kurangnya keyakinan diri. Skor 5-9: Kepercayaan diri dalam hubungan sosial meningkat dan menikmati interaksi sosial.',
    },
    {
      nama: 'Relasi Sosial (Social Nature) · X: Kebutuhan untuk Diperhatikan (Need to be Noticed)',
      catatan: 'Skor Kebutuhan (Needs). Skor < 2: Cenderung pemalu. Skor 2-3: Rendah hati dan tulus. Skor 4-5: Memiliki pola perilaku yang unik. Skor 6-9: Membutuhkan perhatian nyata.',
    },
  ],
  contoh,
};
