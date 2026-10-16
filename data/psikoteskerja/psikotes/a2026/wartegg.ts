import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Tes Wartegg: delapan kotak bentuk awal yang dikembangkan menjadi gambar (15 menit). Tanpa skor.
 *
 * Dibuat dari draft prototipe PROTOTIPE-WARTEGG.html (folder Draft Prototype, diubah
 * 26 Agustus 2026): definisi delapan stimulus (STIMULUS), makna tiap kotak (MAKNA, rujukan
 * bacaan tim), instruksi, dan alur layar. Gambar stimulus wartegg-kotak.webp adalah tangkapan
 * layar kartu delapan kotak pada layar pengerjaan prototipe. Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    stimulus: {
      judul: 'Delapan kotak Wartegg',
      isi: 'Delapan kotak berisi pola garis awal yang belum selesai: empat pola garis lurus (III, IV, V, VI) dan empat pola garis lengkung (I, II, VII, VIII), seperti yang tampil di layar pengerjaan prototipe. Dokumen sumber menggolongkan kotak I dan VII (titik) sebagai kelompok lengkung.',
      gambar: 'gambar/psikoteskerja/wartegg-kotak.webp',
    },
    soal: [
      {
        nomor: 1,
        tipe: 'uraian',
        pertanyaan: `Pada simulasi ini, kamu akan mengerjakan 8 kotak gambar yang masing-masing telah memiliki bentuk atau garis awal. Tugasmu adalah mengembangkan setiap bentuk atau garis tersebut menjadi sebuah gambar sesuai dengan idemu sendiri.

Waktu pengerjaan: 15 menit. Kamu tidak harus mengerjakan kotak secara berurutan dari kotak pertama hingga kedelapan.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci, skor, atau interpretasi otomatis di aplikasi. Jawaban peserta berupa gambar di kertas (lembar Tes Wartegg yang dicetak, atau kertas sendiri dengan delapan kotak yang digambar ulang) yang difoto atau dipindai lalu diunggah.

Makna psikologis tiap kotak menurut dokumen sumber (rujukan bacaan tim: tidak dipakai aplikasi dan tidak boleh tampil di layar peserta):
I (satu titik pejal di tengah kotak): Penyesuaian diri. Titik di tengah adalah titik awal dan pusat. Lazim dibaca sebagai cara seseorang memandang dirinya dan menempatkan diri di lingkungan baru.
II (garis gelombang pendek di kiri atas): Kelenturan perasaan. Garis gelombang bebas mengarah pada kehidupan emosional, keluwesan bergerak, dan cara menjalin hubungan dengan orang lain.
III (tiga garis tegak yang makin tinggi di kiri bawah): Ambisi dan perencanaan. Tiga garis yang meninggi bertahap dibaca sebagai cita-cita, dorongan maju, dan cara menyusun langkah bertingkat.
IV (bujur sangkar hitam kecil di kanan atas): Menghadapi kesulitan. Bujur sangkar hitam pejal adalah unsur berat dan tidak nyaman — dibaca sebagai cara memperlakukan masalah dan beban.
V (dua garis lurus yang bersilang di kiri bawah): Dorongan dan keputusan. Dua garis lurus yang bersilang membentuk ketegangan arah: energi, daya juang, dan cara mengambil keputusan saat ada tarikan berlawanan.
VI (satu garis mendatar di kiri atas dan satu garis tegak di kanan, terpisah): Menyatukan yang terpisah. Satu garis mendatar dan satu tegak yang tidak bersentuhan — kemampuan analisis dan sintesis, menyambungkan hal yang terpisah.
VII (tujuh titik kecil menyusun busur setengah lingkaran di tengah bawah): Kepekaan dan kehati-hatian. Titik-titik halus yang menyusun busur mengarah pada sensitivitas, kelembutan, dan kehati-hatian dalam bersikap.
VIII (busur lengkung besar seperti kubah di bagian atas): Rasa aman dan perlindungan. Busur lengkung besar yang melindungi ruang di bawahnya — kebutuhan rasa aman dan hubungan dengan lingkungan sosial terdekat.`,
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'uraian',
        pertanyaan: `Setiap selesai mengerjakan satu gambar, tuliskan nomor urutan pengerjaan 1-8 di bawah kotak tersebut. Contoh: bila pertama kali mengerjakan kotak ke-5, tuliskan angka 1 di bawah kotak itu; bila berikutnya mengerjakan kotak ke-2, tuliskan angka 2; lanjutkan hingga seluruh gambar memiliki nomor urutan.

Setelah menggambar, tuliskan pada bagian kiri bawah kertas pengerjaan nomor (berdasarkan urutan pengerjaan, bukan nomor posisi kotak) untuk:
- Gambar paling disukai
- Gambar paling tidak disukai
- Gambar paling mudah dikerjakan
- Gambar paling sulit dikerjakan`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci atau skor otomatis; keempat isian dan nomor urutan ditulis di kertas.

Panduan tes (dikutip prototipe) menyebut urutan pengerjaan dapat memberi gambaran tentang cara berpikir, pengambilan prioritas, dan kecenderungan menyelesaikan masalah. Urutan penuh 1-8 bisa menggambarkan kepribadian yang teratur dan disiplin, namun terkadang dianggap terlalu kaku atau konservatif. Urutan sepenuhnya acak (misalnya 5, 7, 6, 8, 3, 2, 4, 1) bisa mencerminkan seseorang yang sangat kreatif dan inovatif, namun berpotensi dianggap kurang memperhatikan aturan atau struktur kerja. Tip panduan: urutan sebaiknya tidak sepenuhnya berurutan maupun sepenuhnya acak, misalnya 1, 2, 3, 4 kemudian 8, 7, 6, 5.

Keterangan di atas adalah informasi umum tentang bagaimana tes ini biasa dibaca psikolog, bukan penilaian atas urutan yang dipakai peserta mana pun.`,
        status: 'draft',
      },
    ],
  },
];

export const wartegg: Subtes = {
  kode: 'wartegg',
  nama: 'Tes Wartegg',
  jumlahSoal: 8,
  waktuMenit: 15,
  bankSoal: false,
  formatKetentuan: `Tes menggambar proyektif: delapan kotak berisi bentuk atau garis awal yang harus dikembangkan peserta menjadi gambar sesuai idenya sendiri, selama 15 menit. Peserta mengerjakannya di kertas (lembar Tes Wartegg A4 yang diunduh dan dicetak, atau kertas sendiri dengan delapan kotak dan bentuk awal yang digambar ulang), lalu mengunggah foto, hasil pindai, atau PDF-nya (JPG, PNG, atau PDF) dalam 3 menit. Kotak di layar hanya rujukan bentuk awal.

Cara mencatat: peserta tidak harus mengerjakan kotak secara berurutan; setiap selesai satu gambar, ia menuliskan nomor urutan pengerjaan 1-8 di bawah kotak itu. Di bagian kiri bawah kertas ia menuliskan nomor urutan untuk gambar paling disukai, paling tidak disukai, paling mudah, dan paling sulit dikerjakan. Hasil unggahan harus memperlihatkan seluruh 8 kotak dengan jelas, tidak terpotong, dengan nomor urutan terlihat.

Waktu 15 menit belum dimulai pada tahap persiapan; peserta mencentang empat konfirmasi lebih dulu. Ada dua penghitung terpisah: 15 menit mengerjakan, lalu 3 menit mengunggah.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/wartegg-awal.webp⟧
Layar awal: pengantar tes (8 kotak gambar, 15 menit mengerjakan, 3 menit mengunggah, lembar A4 yang dapat diunduh) dan pratinjau lembar.
⟦gambar:gambar/psikoteskerja/wartegg-instruksi.webp⟧
Layar instruksi: cara mencatat urutan pengerjaan dan empat isian di kiri bawah kertas.`,
  penilaian: `Aplikasi tidak memberi skor, penilaian psikologis, analisis kepribadian, maupun interpretasi atas gambar (disclaimer sumber, tampil di layar pembuka dan layar akhir), dan tidak membaca isi gambar. Hasil unggahan hanya ditampilkan kembali kepada peserta.

Rujukan bacaan psikolog di dokumen sumber: makna psikologis tiap kotak (lihat pembahasan contoh soal di bawah) dan cara urutan pengerjaan dibaca. Rujukan itu tidak dipakai aplikasi dan tidak ditampilkan di layar peserta.`,
  catatan: 'Kotak I dan VII berisi titik, bukan garis lengkung, tetapi dokumen sumber tetap menggolongkannya sebagai kelompok lengkung; ikuti apa adanya. Dokumen sumber menyinggung varian 12 kotak lewat satu tautan tanpa melampirkan stimulusnya; prototipe hanya memuat varian 8 kotak. Tabel makna tiap kotak adalah rujukan bacaan tim, bukan aturan program, dan tidak boleh ditampilkan berdampingan dengan gambar peserta karena akan terbaca sebagai interpretasi.',
  materi: [
    { nama: 'Kotak I (kelompok lengkung)', catatan: 'Satu titik pejal di tengah kotak.' },
    { nama: 'Kotak II (kelompok lengkung)', catatan: 'Garis gelombang pendek di kiri atas.' },
    { nama: 'Kotak III (kelompok lurus)', catatan: 'Tiga garis tegak yang makin tinggi di kiri bawah.' },
    { nama: 'Kotak IV (kelompok lurus)', catatan: 'Bujur sangkar hitam kecil di kanan atas.' },
    { nama: 'Kotak V (kelompok lurus)', catatan: 'Dua garis lurus yang bersilang di kiri bawah.' },
    { nama: 'Kotak VI (kelompok lurus)', catatan: 'Satu garis mendatar di kiri atas dan satu garis tegak di kanan, terpisah.' },
    { nama: 'Kotak VII (kelompok lengkung)', catatan: 'Tujuh titik kecil menyusun busur setengah lingkaran di tengah bawah.' },
    { nama: 'Kotak VIII (kelompok lengkung)', catatan: 'Busur lengkung besar seperti kubah di bagian atas.' },
  ],
  contoh,
};
