import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TIU untuk SKD CPNS 2027, dari dokumen "Contoh Soal TIU SKD 2027" (tiu.pdf, 74 halaman,
 * dibuat 7 Oktober 2026). Isinya 59 soal pilihan ganda (opsi A sampai E) dengan kunci dan pembahasan
 * lengkap, dikelompokkan per submateri seperti di dokumen:
 * - Verbal (18): Silogisme 5, Analogi 1, Analitis 12.
 * - Numerik (29): Berhitung 5, Deret Angka 8, Soal Cerita 4, Kecukupan Data 12.
 * - Figural (12): Figural Analogi 1, Figural Ketidaksamaan 4, Figural Serial 3, Figural Matriks 4.
 * Judul kelompok mengikuti hierarki dokumen, misalnya "Numerik > Deret Angka > Matriks Deret". Nomor soal
 * berurutan 1 sampai 59 di seluruh subtes (Verbal 1-18, Numerik 19-47, Figural 48-59), mengikuti urutan
 * dokumen; di dokumen nomornya mulai dari 1 lagi di tiap submateri. Submateri "Deret Angka - Fibonacci" ada
 * sebagai judul di dokumen tetapi tidak punya soal, jadi tidak ada di sini.
 *
 * Dokumen tidak menulis tingkat kesulitan, jadi soal TIU tidak diberi `tingkat`.
 *
 * Rumus, pecahan, tabel, dan simbol logika ditulis sebagai LaTeX. Simbol yang hilang dari teks hasil
 * salinan PDF (panah implikasi, negasi, variabel premis, pecahan bertumpuk, pangkat, indeks) dipulihkan
 * dari berkas PDF-nya. Soal dan pembahasan bergambar (figural, diagram deret, denah, tabel bergambar)
 * memakai 81 rujukan gambar ke 80 berkas cpns2027-tiu-*.png di public/gambar/jadiasn/, lebar paling besar
 * 800 px (satu gambar soal dipakai ulang di pembahasannya). Tabel "Pecahan Istimewa" di dokumen berupa
 * gambar berisi rumus saja, jadi ditulis ulang sebagai LaTeX dan gambarnya tidak dipakai.
 *
 * Teks disalin dari dokumen tanpa diringkas. Yang diubah hanya salah ketik yang jelas: masyarakattetap,
 * memnuhi, berkerja, bersebrangan, dihari, diselesakan, subtitusi, lingkarang, jawabanya, "bilangan- bilangan",
 * "Pertanyaan (1) dan (2) TIDAK CUKUP" (menjadi "Pernyataan ...", ada di opsi E ke-12 soal Kecukupan Data),
 * nomor sisipan "5" yang tidak bermakna pada soal Jadwal, dan rentang "Senin - Jumat" pada soal Jadwal
 * (menjadi "Senin - Minggu", sesuai tabel pembahasan yang memuat hari Sabtu dan Minggu). Satu salah hitung
 * juga diperbaiki: pembahasan Deret Angka - Template (nomor 28) menulis U7 = (7 x 10) - 1 = 55, padahal
 * hasilnya 69 (suku terakhir pada soal). Nama metode "Towew" dan "Hijab" ditulis apa adanya.
 *
 * Tiga soal diperbaiki tim karena isi dokumennya bermasalah. Perbaikannya dikonfirmasi pada 15 Oktober 2026,
 * jadi statusnya 'direview' seperti soal lain. Temuannya perlu diteruskan ke tim riset agar dokumen
 * sumbernya ikut diperbaiki:
 * - Verbal > Analitis > Jadwal (nomor 13): kunci di dokumen tertulis C (Kamis), padahal hari Kamis sudah
 *   terisi telur dan pembahasan dokumen menyimpulkan gula dikirim hari Selasa. Kunci diperbaiki menjadi A.
 * - Verbal > Analitis > Distribusi & Kategori (nomor 17): kunci C sesuai data soal (hanya Toko C yang
 *   menjual kelima jenis bunga), tetapi pembahasan di dokumen menyimpulkan Toko D. Pembahasannya disusun
 *   ulang tim dari data soal: tabel ketersediaan bunga per toko, lalu eliminasi.
 * - Numerik > Deret Angka > Matriks Deret (nomor 30): pembahasan di dokumen menyebut "pola sebagai
 *   berikut" tetapi polanya tidak ditampilkan. Tim menuliskan pola yang cocok dengan ketiga kolom tabel
 *   (bilangan baris ketiga = rata-rata dua bilangan di atasnya), sehingga x = 4 sesuai kunci D.
 *
 * Status semua soal 'direview': belum ditinjau ulang untuk keperluan etalase.
 */
export const contohTiu: Kelompok[] = [
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis` },
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Lampu lalu lintas berwarna merah membuat kendaraan harus berhenti. Di saat kendaraan harus berhenti maka pejalan kaki boleh melintas. Saat ini lampu lalu lintas berwarna merah.

Kesimpulan yang tepat adalah …`,
        opsi: [
          { label: 'A', teks: `Pejalan kaki sedang menunggu` },
          { label: 'B', teks: `Kendaraan melaju kencang` },
          { label: 'C', teks: `Pejalan kaki boleh melintas` },
          { label: 'D', teks: `Kendaraan tidak berhenti` },
          { label: 'E', teks: `Lampu lalu lintas akan segera hijau` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Lampu lalu lintas berwarna merah membuat kendaraan harus berhenti.
Premis 2: Di saat kendaraan harus berhenti maka pejalan kaki boleh melintas
Premis 3: Saat ini lampu lalu lintas berwarna merah.

\\(p\\): Lampu berwarna merah
\\(q\\): Kendaraan berhenti
\\(r\\): Pejalan kaki melintas

Langkah 1 (Premis 1 + 2):
Premis 1: \\(p\\to q\\)
Premis 2: \\(q\\to r\\)
Gunakan hukum Silogisme
Kesimpulan (Premis 4): \\(p\\to r\\)

Langkah 2 (Premis 4 + 3):
Premis 4: \\(p\\to r\\)
Premis 3: \\(p\\)
Gunakan Modus Ponens
Kesimpulan: \\(r\\)

Jawaban: Pejalan kaki boleh melintas`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 2 Premis – Narasi` },
    soal: [
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Manajemen sebuah perusahaan teknologi menetapkan bahwa setiap karyawan divisi pengembangan produk berhak mendapatkan bonus akhir tahun dan cuti tambahan selama tiga hari harus berhasil merilis aplikasi dengan rating di atas 4.5. Siska adalah staf di divisi pengembangan produk yang baru saja merilis aplikasi baru dengan rating 4.2.

Kesimpulan yang paling tepat berdasarkan pernyataan tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `Siska pasti mendapatkan bonus akhir tahun dan cuti tambahan.` },
          { label: 'B', teks: `Siska belum memenuhi syarat minimum rating aplikasi untuk mendapatkan bonus dan cuti tambahan tersebut.` },
          { label: 'C', teks: `Siska bekerja di divisi keuangan perusahaan teknologi.` },
          { label: 'D', teks: `Semua karyawan di perusahaan tersebut wajib merilis aplikasi setiap bulan.` },
          { label: 'E', teks: `Aplikasi dengan rating 4.2 otomatis ditarik dari pasaran.` },
        ],
        kunci: 'B',
        pembahasan: `Premis 1: Setiap karyawan divisi pengembangan produk berhak mendapatkan bonus akhir tahun dan cuti tambahan selama tiga hari harus berhasil merilis aplikasi dengan rating di atas 4.5.
Premis 2: Siska adalah staf di divisi pengembangan produk yang baru saja merilis aplikasi baru dengan rating 4.2.

\\(p\\): Mendapatkan bonus akhir tahun dan cuti tambahan selama tiga hari
\\(q\\): Merilis aplikasi dengan rating di atas 4.5

Premis 1: \\(p\\to q\\)
Premis 2: \\(\\neg q\\)
Gunakan Modus Tollens
Kesimpulan: \\(\\neg p\\)
Jawaban: Tidak mendapatkan bonus akhir tahun dan cuti tambahan selama tiga hari.

Analisis setiap opsi:
A. Siska pasti mendapatkan bonus akhir tahun dan cuti tambahan.
→ \\(p\\) (bukan kesimpulan yang dicari)

B. Siska belum memenuhi syarat minimum rating aplikasi untuk mendapatkan bonus dan cuti tambahan tersebut.
→ \\(\\neg p\\) (kesimpulan yang dicari)

C. Siska bekerja di divisi keuangan perusahaan teknologi.
→ Bukan \\(p\\) dan maupun \\(q\\) (bukan kesimpulan yang dicari)

D. Semua karyawan di perusahaan tersebut wajib merilis aplikasi setiap bulan.
→ Bukan \\(p\\) dan maupun \\(q\\) (bukan kesimpulan yang dicari)

E. Aplikasi dengan rating 4.2 otomatis ditarik dari pasaran.
→ Bukan \\(p\\) dan maupun \\(q\\) (bukan kesimpulan yang dicari)`,
        status: 'direview',
      },
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Dalam proses pengelolaan sebuah toko roti, produk yang telah lolos pemeriksaan kualitas akan ditempatkan pada rak penjualan utama agar mudah ditemukan oleh pelanggan. Produk yang ditempatkan pada rak penjualan utama akan memperoleh label promosi khusus selama masa penjualan berlangsung. Toko tersebut menggunakan rak kayu berwarna cokelat yang dibersihkan setiap pagi sebelum toko dibuka.

Kesimpulan yang paling tepat berdasarkan pernyataan tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `Produk yang memperoleh label promosi khusus pasti telah melalui seluruh pemeriksaan kualitas tanpa pengecualian.` },
          { label: 'B', teks: `Produk yang belum lolos pemeriksaan kualitas tetap dapat ditempatkan pada rak penjualan utama selama persediaan produk sedang terbatas.` },
          { label: 'C', teks: `Produk yang telah lolos pemeriksaan kualitas akan memperoleh label promosi khusus selama masa penjualan berlangsung.` },
          { label: 'D', teks: `Seluruh produk yang berada di dalam toko akan mendapatkan label promosi khusus tanpa mempertimbangkan hasil pemeriksaan kualitas.` },
          { label: 'E', teks: `Produk yang diletakkan pada rak kayu berwarna cokelat selalu menjadi produk dengan penjualan paling tinggi pada hari tersebut.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Produk yang telah lolos pemeriksaan kualitas akan ditempatkan pada rak penjualan utama agar mudah ditemukan oleh pelanggan.
Premis 2: Produk yang ditempatkan pada rak penjualan utama akan memperoleh label promosi khusus selama masa penjualan berlangsung.

Kalimat “Toko tersebut menggunakan rak kayu berwarna cokelat yang dibersihkan setiap pagi sebelum toko dibuka” merupakan informasi pengecoh karena tidak memiliki hubungan logis dengan proses pemeriksaan kualitas, penempatan produk, maupun pemberian label promosi.

\\(p\\): Produk lolos pemeriksaan kualitas
\\(q\\): Produk ditempatkan pada rak penjualan utama
\\(r\\): Produk memperoleh label promosi khusus

Premis 1: \\(p \\to q\\)
Premis 2: \\(q \\to r\\)
Gunakan hukum Silogisme
Kesimpulan: \\(p \\to r\\)
Jawaban: Produk yang telah lolos pemeriksaan kualitas akan memperoleh label promosi khusus selama masa penjualan berlangsung.

Analisis setiap opsi:
A. Produk yang memperoleh label promosi khusus pasti telah melalui seluruh pemeriksaan kualitas tanpa pengecualian.
→ \\(r \\to p\\), yaitu membalik hubungan kesimpulan \\(p \\to r\\) (bukan kesimpulan yang dicari)

B. Produk yang belum lolos pemeriksaan kualitas tetap dapat ditempatkan pada rak penjualan utama selama persediaan produk sedang terbatas.
→ \\(\\neg p \\to q\\), tidak sesuai dengan hubungan yang diberikan (bukan kesimpulan yang dicari)

C. Produk yang telah lolos pemeriksaan kualitas akan memperoleh label promosi khusus selama masa penjualan berlangsung.
→ \\(p \\to r\\) (kesimpulan yang dicari)

D. Seluruh produk yang berada di dalam toko akan mendapatkan label promosi khusus tanpa mempertimbangkan hasil pemeriksaan kualitas.
→ Bukan \\(p \\to r\\) karena cakupannya diperluas menjadi seluruh produk di toko (bukan kesimpulan yang dicari)

E. Produk yang diletakkan pada rak kayu berwarna cokelat selalu menjadi produk dengan penjualan paling tinggi pada hari tersebut.
→ Bukan \\(p\\), \\(q\\), maupun \\(r\\) dan berasal dari informasi pengecoh mengenai rak (bukan kesimpulan yang dicari)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Silogisme > 3 Premis – Narasi` },
    soal: [
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Dalam proses produksi roti, sebuah dapur produksi menetapkan bahwa adonan yang telah mencapai tingkat elastisitas sesuai standar harus dihentikan dari proses pengadukan agar teksturnya tidak berubah terlalu jauh. Adonan yang proses pengadukannya telah dihentikan pada tahap tersebut perlu diistirahatkan selama dua puluh menit sebelum memasuki proses pembentukan. Rafi sedang mengerjakan satu adonan yang berdasarkan pemeriksaan terakhir telah mencapai tingkat elastisitas sesuai standar.

Kesimpulan yang paling tepat berdasarkan pernyataan tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `Rafi perlu melanjutkan proses pengadukan selama beberapa menit agar adonan benar-benar siap memasuki tahap pembentukan.` },
          { label: 'B', teks: `Adonan yang dikerjakan Rafi dapat langsung memasuki proses pembentukan karena tingkat elastisitas yang ditentukan sudah tercapai.` },
          { label: 'C', teks: `Adonan yang sedang dikerjakan Rafi perlu diistirahatkan selama dua puluh menit sebelum memasuki proses pembentukan.` },
          { label: 'D', teks: `Rafi perlu menambahkan bahan lain ke dalam adonan sebelum proses pengadukan dapat dihentikan sesuai prosedur produksi.` },
          { label: 'E', teks: `Adonan yang dikerjakan Rafi belum dapat memasuki tahap berikutnya karena tingkat elastisitasnya masih berada di bawah standar produksi.` },
        ],
        kunci: 'C',
        pembahasan: `Premis 1: Adonan yang telah mencapai tingkat elastisitas sesuai standar harus dihentikan dari proses pengadukan agar teksturnya tetap terjaga.
Premis 2: Adonan yang proses pengadukannya telah dihentikan perlu diistirahatkan selama dua puluh menit sebelum memasuki proses pembentukan.
Premis 3: Adonan yang sedang dikerjakan Rafi telah mencapai tingkat elastisitas sesuai standar.

\\(p\\): Adonan mencapai tingkat elastisitas sesuai standar
\\(q\\): Proses pengadukan dihentikan
\\(r\\): Adonan diistirahatkan selama dua puluh menit

Langkah 1 (Premis 1 + 2):
Premis 1: \\(p \\to q\\)
Premis 2: \\(q \\to r\\)
Gunakan hukum Silogisme
Kesimpulan (Premis 4): \\(p \\to r\\)

Langkah 2 (Premis 4 + 3):
Premis 4: \\(p \\to r\\)
Premis 3: \\(p\\)
Gunakan Modus Ponens
Kesimpulan: \\(r\\)

Jawaban: Adonan yang sedang dikerjakan Rafi perlu diistirahatkan selama dua puluh menit sebelum memasuki proses pembentukan.

Analisis setiap opsi:
A. Rafi perlu melanjutkan proses pengadukan selama beberapa menit agar adonan benar-benar siap memasuki tahap pembentukan.
→ Pernyataan ini bertentangan dengan \\(q\\). Adonan yang telah mencapai tingkat elastisitas sesuai standar justru harus dihentikan dari proses pengadukan, bukan terus diaduk. Bukan kesimpulan yang dicari.

B. Adonan yang dikerjakan Rafi dapat langsung memasuki proses pembentukan karena tingkat elastisitas yang ditentukan sudah tercapai.
→ Pernyataan ini melewati \\(r\\). Setelah proses pengadukan dihentikan, adonan masih harus menjalani tahap pengistirahatan selama dua puluh menit sebelum pembentukan. Bukan kesimpulan yang dicari.

C. Adonan yang sedang dikerjakan Rafi perlu diistirahatkan selama dua puluh menit sebelum memasuki proses pembentukan.
→ \\(r\\), yaitu hasil akhir yang diperoleh dari Silogisme pada langkah pertama dan Modus Ponens pada langkah kedua. Kesimpulan yang dicari.

D. Rafi perlu menambahkan bahan lain ke dalam adonan sebelum proses pengadukan dapat dihentikan sesuai prosedur produksi.
→ Bukan \\(p\\), \\(q\\), maupun \\(r\\). Tidak terdapat informasi mengenai penambahan bahan lain dalam ketiga premis. Bukan kesimpulan yang dicari.

E. Adonan yang dikerjakan Rafi belum dapat memasuki tahap berikutnya karena tingkat elastisitasnya masih berada di bawah standar produksi.
→ Bertentangan dengan \\(p\\) karena pada pernyataan ketiga telah disebutkan bahwa adonan Rafi sudah mencapai tingkat elastisitas sesuai standar. Bukan kesimpulan yang dicari.`,
        status: 'direview',
      },
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Dalam sebuah kegiatan pendakian, Mira terbiasa menggunakan tongkat pendakian ketika permukaan jalur yang dilaluinya berada dalam kondisi licin akibat tanah yang basah. Penggunaan tongkat pendakian pada kondisi tersebut membuat laju perjalanan Mira menjadi lebih lambat karena setiap langkah harus dilakukan dengan lebih hati-hati. Pada pendakian kali ini, laju perjalanan Mira tidak menjadi lebih lambat dibandingkan kecepatan berjalannya dalam kondisi normal. Mira juga membawa jaket berwarna biru yang disimpan di bagian luar tas pendakiannya agar mudah diambil saat diperlukan.

Kesimpulan yang paling tepat berdasarkan pernyataan tersebut adalah ...`,
        opsi: [
          { label: 'A', teks: `Jalur pendakian yang sedang dilalui Mira tidak berada dalam kondisi licin akibat permukaan tanah yang basah.` },
          { label: 'B', teks: `Mira tetap menggunakan tongkat pendakian selama perjalanan meskipun laju berjalannya tidak mengalami perlambatan seperti biasanya.` },
          { label: 'C', teks: `Kondisi jalur yang dilewati Mira cukup aman sehingga ia dapat menempuh perjalanan tanpa membawa perlengkapan pendakian tambahan.` },
          { label: 'D', teks: `Mira memilih jalur pendakian yang lebih pendek sehingga kecepatan perjalanannya dapat dipertahankan seperti dalam kondisi normal.` },
          { label: 'E', teks: `Kondisi cuaca selama pendakian sedang cerah sehingga permukaan tanah pada jalur yang dilalui Mira tidak mengalami perubahan.` },
        ],
        kunci: 'A',
        pembahasan: `Premis 1: Permukaan jalur yang berada dalam kondisi licin akibat tanah yang basah membuat Mira menggunakan tongkat pendakian selama perjalanan.
Premis 2: Mira yang menggunakan tongkat pendakian pada kondisi tersebut memiliki laju perjalanan yang menjadi lebih lambat.
Premis 3: Pada pendakian kali ini, laju perjalanan Mira tidak menjadi lebih lambat dibandingkan kondisi normal.

Kalimat “Mira juga membawa jaket berwarna biru yang disimpan di bagian luar tas pendakiannya agar mudah diambil saat diperlukan” merupakan informasi pengecoh karena tidak memiliki hubungan logis dengan kondisi jalur, penggunaan tongkat pendakian, maupun laju perjalanan Mira.

\\(p\\): Permukaan jalur pendakian licin akibat tanah yang basah
\\(q\\): Mira menggunakan tongkat pendakian
\\(r\\): Laju perjalanan Mira menjadi lebih lambat

Langkah 1 (Premis 1 + 2):
Premis 1: \\(p \\to q\\)
Premis 2: \\(q \\to r\\)
Gunakan hukum Silogisme
Kesimpulan (Premis 4): \\(p \\to r\\)

Langkah 2 (Premis 4 + 3):
Premis 4: \\(p \\to r\\)
Premis 3: \\(\\neg r\\)
Gunakan Modus Tollens
Kesimpulan: \\(\\neg p\\)

Jawaban: Jalur pendakian yang sedang dilalui Mira tidak berada dalam kondisi licin akibat permukaan tanah yang basah.

Analisis setiap opsi:
A. Jalur pendakian yang sedang dilalui Mira tidak berada dalam kondisi licin akibat permukaan tanah yang basah.
→ \\(\\neg p\\) (kesimpulan yang dicari)

B. Mira tetap menggunakan tongkat pendakian selama perjalanan meskipun laju berjalannya tidak mengalami perlambatan seperti biasanya.
→ \\(q\\) (bukan kesimpulan yang dicari)

C. Kondisi jalur yang dilewati Mira cukup aman sehingga ia dapat menempuh perjalanan tanpa membawa perlengkapan pendakian tambahan.
→ Bukan \\(p\\), \\(q\\), maupun \\(r\\) (bukan kesimpulan yang dicari)

D. Mira memilih jalur pendakian yang lebih pendek sehingga kecepatan perjalanannya dapat dipertahankan seperti dalam kondisi normal.
→ Bukan \\(p\\), \\(q\\), maupun \\(r\\) (bukan kesimpulan yang dicari)

E. Kondisi cuaca selama pendakian sedang cerah sehingga permukaan tanah pada jalur yang dilalui Mira tidak mengalami perubahan.
→ Bukan \\(p\\), \\(q\\), maupun \\(r\\) (bukan kesimpulan yang dicari)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analogi > 2 Kata` },
    soal: [
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Cepat : Lambat = ... : ...`,
        opsi: [
          { label: 'A', teks: `Awal : Akhir` },
          { label: 'B', teks: `Keras : Batu` },
          { label: 'C', teks: `Panjang : Jalan` },
          { label: 'D', teks: `Tinggi : Gedung` },
          { label: 'E', teks: `Manis : Gula` },
        ],
        kunci: 'A',
        pembahasan: `Kata "cepat" dan "lambat" memiliki hubungan antonim atau berlawanan makna. Pola yang sama terdapat pada opsi A, yaitu "awal" dan "akhir" yang juga merupakan pasangan kata berlawanan makna.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Memperkuat/Memperlemah` },
    soal: [
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Penggunaan transportasi umum dapat mengurangi kemacetan karena mampu mengangkut banyak orang dalam satu kendaraan. Oleh karena itu, semakin banyak masyarakat beralih ke transportasi umum, semakin berkurang kemacetan di kota.

Manakah pernyataan berikut yang MEMPERLEMAH pernyataan di atas?`,
        opsi: [
          { label: 'A', teks: `Transportasi umum memiliki kapasitas penumpang yang lebih besar daripada kendaraan pribadi.` },
          { label: 'B', teks: `Banyak transportasi umum memiliki jadwal keberangkatan yang tidak menentu sehingga masyarakat tetap memilih kendaraan pribadi.` },
          { label: 'C', teks: `Sebagian besar masyarakat menggunakan transportasi umum untuk pergi bekerja.` },
          { label: 'D', teks: `Pemerintah terus menambah jumlah armada transportasi umum di perkotaan.` },
          { label: 'E', teks: `Penggunaan transportasi umum dapat mengurangi jumlah kendaraan pribadi di jalan.` },
        ],
        kunci: 'B',
        pembahasan: `Berdasarkan pernyataan yang diberikan, kita perlu mencari informasi yang dapat memperlemah hubungan antara penggunaan transportasi umum dan berkurangnya kemacetan.

Analisis Logika: Transportasi Umum dan Kemacetan
Argumen pada soal menyatakan bahwa transportasi umum dapat mengangkut banyak orang dalam satu kendaraan. Jika masyarakat beralih dari kendaraan pribadi ke transportasi umum, jumlah kendaraan di jalan akan berkurang sehingga kemacetan juga dapat berkurang.
Jadi, untuk memperlemah argumen tersebut, kita perlu mencari pernyataan yang menunjukkan bahwa masyarakat belum tentu beralih ke transportasi umum atau bahwa penggunaan kendaraan pribadi masih tetap tinggi.

Kata Kunci (Keyword)
Transportasi umum → mengangkut banyak orang → kendaraan pribadi berkurang → kemacetan berkurang.

Jawaban Benar B. Banyak transportasi umum memiliki jadwal keberangkatan yang tidak menentu sehingga masyarakat tetap memilih kendaraan pribadi.

Pembahasan Jawaban Benar:
Pilihan B memperlemah argumen karena menunjukkan adanya alasan masyarakat tetap menggunakan kendaraan pribadi, yaitu jadwal transportasi umum yang tidak menentu.
Jika masyarakat tetap menggunakan kendaraan pribadi, jumlah kendaraan di jalan tidak banyak berkurang. Akibatnya, anggapan bahwa semakin banyak penggunaan transportasi umum akan mengurangi kemacetan menjadi kurang kuat.

Pembahasan Setiap Opsi yang Salah
A. Transportasi umum memiliki kapasitas penumpang yang lebih besar daripada kendaraan pribadi.
Salah. Pernyataan ini justru mendukung argumen karena menunjukkan bahwa satu kendaraan umum dapat mengangkut lebih banyak orang.

C. Sebagian besar masyarakat menggunakan transportasi umum untuk pergi bekerja.
Salah. Pernyataan ini cenderung memperkuat argumen karena menunjukkan bahwa banyak masyarakat sudah menggunakan transportasi umum.

D. Pemerintah terus menambah jumlah armada transportasi umum di perkotaan.
Salah. Penambahan armada membuat transportasi umum semakin tersedia sehingga dapat mendorong masyarakat menggunakannya.

E. Penggunaan transportasi umum dapat mengurangi jumlah kendaraan pribadi di jalan.
Salah. Pernyataan ini langsung mendukung alasan utama bahwa transportasi umum dapat membantu mengurangi kemacetan.`,
        status: 'direview',
      },
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Penggunaan ruang terbuka hijau di kawasan perkotaan dapat membantu menurunkan suhu lingkungan karena pepohonan mampu memberikan keteduhan dan menyerap panas. Oleh karena itu, semakin luas ruang terbuka hijau di suatu kota, semakin rendah suhu udara di kawasan tersebut.

Manakah pernyataan berikut yang MEMPERKUAT pernyataan di atas?`,
        opsi: [
          { label: 'A', teks: `Sebagian masyarakat lebih memilih beraktivitas di dalam ruangan saat cuaca panas.` },
          { label: 'B', teks: `Pembangunan gedung bertingkat terus meningkat di beberapa wilayah perkotaan.` },
          { label: 'C', teks: `Kawasan kota yang memiliki lebih banyak pepohonan tercatat memiliki suhu rata-rata lebih rendah dibandingkan kawasan yang minim pepohonan.` },
          { label: 'D', teks: `Ruang terbuka hijau membutuhkan biaya perawatan yang cukup besar setiap tahun.` },
          { label: 'E', teks: `Beberapa taman kota digunakan masyarakat sebagai tempat berolahraga pada pagi hari.` },
        ],
        kunci: 'C',
        pembahasan: `Berdasarkan pernyataan yang diberikan, kita perlu mencari informasi yang dapat memperkuat hubungan antara keberadaan ruang terbuka hijau dan penurunan suhu lingkungan.

Analisis Logika: Ruang Terbuka Hijau dan Suhu Kota
Argumen pada soal menyatakan bahwa pepohonan pada ruang terbuka hijau dapat memberikan keteduhan dan menyerap panas. Oleh karena itu, semakin banyak ruang terbuka hijau, suhu lingkungan seharusnya semakin rendah.
Jadi, pernyataan yang memperkuat harus memberikan bukti atau informasi yang mendukung bahwa kawasan dengan lebih banyak ruang hijau memang memiliki suhu yang lebih rendah.

Kata Kunci (Keyword)
Ruang terbuka hijau → lebih banyak pepohonan → panas berkurang → suhu lingkungan lebih rendah.

Jawaban Benar C. Kawasan kota yang memiliki lebih banyak pepohonan tercatat memiliki suhu rata-rata lebih rendah dibandingkan kawasan yang minim pepohonan.

Pembahasan Jawaban Benar:
Pilihan C memperkuat argumen karena memberikan bukti bahwa kawasan dengan lebih banyak pepohonan memang memiliki suhu rata-rata yang lebih rendah.
Hal tersebut sesuai dengan hubungan yang dijelaskan pada soal, yaitu bahwa keberadaan ruang terbuka hijau dapat membantu mengurangi panas di kawasan perkotaan. Dengan demikian, kesimpulan bahwa semakin luas ruang terbuka hijau maka suhu lingkungan dapat semakin rendah menjadi lebih kuat.

Pembahasan Setiap Opsi yang Salah
A. Sebagian masyarakat lebih memilih beraktivitas di dalam ruangan saat cuaca panas.
Salah. Pernyataan ini membahas pilihan aktivitas masyarakat, bukan hubungan antara ruang terbuka hijau dan suhu lingkungan.

B. Pembangunan gedung bertingkat terus meningkat di beberapa wilayah perkotaan.
Salah. Informasi tersebut tidak menunjukkan bahwa ruang terbuka hijau dapat menurunkan suhu.

D. Ruang terbuka hijau membutuhkan biaya perawatan yang cukup besar setiap tahun.
Salah. Biaya perawatan tidak berkaitan dengan kemampuan ruang terbuka hijau dalam mengurangi suhu lingkungan.

E. Beberapa taman kota digunakan masyarakat sebagai tempat berolahraga pada pagi hari.
Salah. Pernyataan ini menunjukkan fungsi taman sebagai tempat aktivitas, tetapi tidak membuktikan bahwa keberadaan taman dapat menurunkan suhu.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Susunan & Posisi` },
    soal: [
      {
        nomor: 9,
        tipe: 'pg',
        pertanyaan: `Terdapat lima orang (A, B, C, D, dan E) berdiri berjejer dari kiri ke kanan. A tidak berada di posisi paling kiri maupun paling kanan. B berdiri di sebelah kiri C. D berdiri tepat di tengah. E tidak berdiri di samping C dan tidak berada di antara tiga posisi pertama.

Siapakah yang berdiri di posisi paling kanan?`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'E',
        pembahasan: `Posisi tengah dari lima tempat adalah posisi ke-3, sehingga D berada di posisi ke-3.
E tidak berada di antara tiga posisi pertama, sehingga E hanya mungkin berada di posisi ke-4 atau ke-5.

Jika E berada di posisi ke-4, maka susunan menjadi tidak sesuai karena A berpotensi berada di ujung, padahal A tidak boleh berada di posisi paling kiri maupun paling kanan.

Dengan demikian, E harus berada di posisi ke-5 atau posisi paling kanan.
Jadi, jawaban yang benar adalah E.

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|c|c|} \\hline 1 & 2 & 3 & 4 & 5 \\\\ \\hline \\text{B} & \\text{C} & \\text{D} & \\text{A} & \\text{E} \\\\ \\hline \\end{array}\\)`,
        status: 'direview',
      },
      {
        nomor: 10,
        tipe: 'pg',
        pertanyaan: `Delapan kepala keluarga, yaitu Angga, Bima, Candra, Dika, Endang, Faisal, Gilang, dan Hasan, duduk melingkar saling berhadapan dalam sebuah rapat. Dika duduk berhadapan dengan Angga. Hasan duduk di sebelah kiri Dika dan berhadapan dengan Endang. Endang duduk di antara Angga dan Bima. Faisal duduk berhadapan dengan Gilang. Gilang tidak duduk di samping Hasan.

Di manakah posisi Candra duduk?`,
        opsi: [
          { label: 'A', teks: `Di antara Gilang dan Faisal` },
          { label: 'B', teks: `Di antara Gilang dan Hasan` },
          { label: 'C', teks: `Tepat di samping kiri Bima` },
          { label: 'D', teks: `Tepat di samping kanan Dika` },
          { label: 'E', teks: `Tepat di samping kiri Angga` },
        ],
        kunci: 'B',
        pembahasan: `Petunjuk utama yang harus dipasang terlebih dahulu adalah pasangan berhadapan: Dika dengan Angga, Hasan dengan Endang, dan Faisal dengan Gilang.

Hasan berada di sebelah kiri Dika. Endang berada di antara Angga dan Bima. Gilang tidak boleh berada di samping Hasan.

Setelah posisi pasangan berhadapan dan larangan duduk di samping Hasan dipenuhi, posisi kosong yang tersisa untuk Candra berada di antara Gilang dan Hasan.

Jadi, jawaban yang benar adalah B.

⟦gambar:gambar/jadiasn/cpns2027-tiu-susunan-posisi-s02-pembahasan-1.png⟧`,
        status: 'direview',
      },
      {
        nomor: 11,
        tipe: 'pg',
        pertanyaan: `Delapan siswa duduk pada wahana yang tersusun dalam 5 baris dan 2 kursi pada setiap baris. Siswa tersebut adalah Rina, Santi, Tono, Uli, Vina, Wawan, Yudi, dan Zaki.
Rina dan Santi duduk di baris 1. Tono duduk tepat di belakang Rina. Uli duduk di samping Tono. Vina dan Wawan duduk bersama pada satu baris, tetapi bukan baris 1. Yudi tidak duduk di baris 1.

Di baris berapakah posisi Zaki?`,
        opsi: [
          { label: 'A', teks: `Baris 1` },
          { label: 'B', teks: `Baris 2` },
          { label: 'C', teks: `Baris 3` },
          { label: 'D', teks: `Baris 4` },
          { label: 'E', teks: `Tidak cukup data` },
        ],
        kunci: 'E',
        pembahasan: `Baris 1 sudah ditempati Rina dan Santi.
Tono duduk tepat di belakang Rina, dan Uli duduk di samping Tono, sehingga satu baris berikutnya ditempati Tono dan Uli.

Vina dan Wawan harus berada pada satu baris yang sama dan bukan baris 1. Yudi tidak berada di baris 1.

Informasi yang tersedia belum menentukan secara pasti baris yang ditempati Zaki karena masih ada beberapa kemungkinan penempatan yang valid.
Jadi, jawaban yang benar adalah E.

\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|} \\hline & \\textbf{Kursi Kiri} & \\textbf{Kursi Kanan} \\\\ \\hline \\text{Baris 1} & \\text{Rina} & \\text{Santi} \\\\ \\hline \\text{Baris 2} & \\text{Tono} & \\text{Uli} \\\\ \\hline \\text{Baris 3} & ? & ? \\\\ \\hline \\text{Baris 4} & \\text{Vina} & \\text{Wawan} \\\\ \\hline \\text{Baris 5} & ? & ? \\\\ \\hline \\end{array}\\)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Urutan & Peringkat` },
    soal: [
      {
        nomor: 12,
        tipe: 'pg',
        pertanyaan: `Sekolah Sukamaju mengadakan lomba lari yang diikuti enam siswa, yaitu Anisah, Bobi, Helmi, Intan, Jonathan, dan Yasmin. Yasmin berada di posisi ketiga. Helmi memasuki garis finis tepat sebelum Yasmin. Helmi lebih lambat daripada Bobi. Anisah lebih cepat daripada Intan tetapi lebih lambat daripada Yasmin. Jonathan berada di urutan terakhir.

Urutan pelari yang benar dari posisi pertama hingga terakhir adalah ...`,
        opsi: [
          { label: 'A', teks: `Bobi - Helmi - Yasmin - Jonathan - Anisah - Intan` },
          { label: 'B', teks: `Bobi - Helmi - Yasmin - Intan - Anisah - Jonathan` },
          { label: 'C', teks: `Bobi - Helmi - Yasmin - Anisah - Intan - Jonathan` },
          { label: 'D', teks: `Bobi - Anisah - Yasmin - Helmi - Intan - Jonathan` },
          { label: 'E', teks: `Bobi - Anisah - Intan - Yasmin - Helmi - Jonathan` },
        ],
        kunci: 'C',
        pembahasan: `Yasmin berada di posisi ketiga.

Helmi tepat sebelum Yasmin, sehingga Helmi berada di posisi kedua.

Helmi lebih lambat daripada Bobi, sehingga Bobi berada sebelum Helmi. Posisi yang tersedia sebelum Helmi adalah posisi pertama, maka Bobi berada di posisi pertama.

Anisah lebih cepat daripada Intan tetapi lebih lambat daripada Yasmin. Karena Yasmin berada di posisi ketiga, Anisah berada setelah Yasmin dan sebelum Intan.

Jonathan berada di urutan terakhir.

Urutan yang terbentuk adalah Bobi - Helmi - Yasmin - Anisah - Intan - Jonathan.
Jadi, jawaban yang benar adalah C.

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|c|c|c|} \\hline 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline \\text{Bobi} & \\text{Helmi} & \\text{Yasmin} & \\text{Anisah} & \\text{Intan} & \\text{Jonathan} \\\\ \\hline \\end{array}\\)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Jadwal` },
    soal: [
      {
        nomor: 13,
        tipe: 'pg',
        pertanyaan: `Toko Berkah Bergizi adalah sebuah toko yang menjual beberapa kebutuhan pokok yaitu beras, gula, minyak goreng, daging ayam, telur, bawang dan garam. Toko tersebut bekerjasama dengan tujuh distributor yang disebut sebagai distributor A, B, C, D, E, F dan G. Diketahui bahwa setiap bahan pokok yang dikirim ke Toko Berkah Bergizi berasal dari distributor yang berbeda dan masing-masing dikirim sekali dalam seminggu di hari yang berbeda pula. Terdapat beberapa informasi sebagai berikut:

1. Beras dikirim dari distributor D pada hari Rabu.
2. Minyak goreng tidak dikirim dari distributor A ataupun C.
3. Bawang dikirim pada hari Jumat oleh distributor E.
4. Minyak goreng dikirim keesokan hari dari pengiriman daging ayam oleh distributor F pada hari Sabtu.
5. Garam dikirim pada hari Senin, tetapi tidak dikirim dari distributor C ataupun G.
6. Telur dikirim pada hari Kamis oleh distributor A.

Berdasarkan informasi tersebut, gula dikirim pada hari....`,
        opsi: [
          { label: 'A', teks: `Selasa` },
          { label: 'B', teks: `Rabu` },
          { label: 'C', teks: `Kamis` },
          { label: 'D', teks: `Sabtu` },
          { label: 'E', teks: `Minggu` },
        ],
        kunci: 'A',
        pembahasan: `Berdasarkan informasi pada soal, dapat dipastikan setiap bahan pokok dikirim di hari yang berbeda dalam hari Senin - Minggu oleh distributor yang berbeda pula.

Berdasarkan informasi 1, 3, 4, 5 dan 6, didapatkan:
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|} \\hline \\textbf{Hari} & \\textbf{Bahan Pokok} & \\textbf{Distributor} \\\\ \\hline \\text{Senin} & \\text{Garam} &  \\\\ \\hline \\text{Selasa} &  &  \\\\ \\hline \\text{Rabu} & \\text{Beras} & \\text{D} \\\\ \\hline \\text{Kamis} & \\text{Telur} & \\text{A} \\\\ \\hline \\text{Jumat} & \\text{Bawang} & \\text{E} \\\\ \\hline \\text{Sabtu} & \\text{Daging Ayam} & \\text{F} \\\\ \\hline \\text{Minggu} & \\text{Minyak Goreng} &  \\\\ \\hline \\end{array}\\)

Dengan demikian, gula pasti dikirim pada hari Selasa.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Logika Pernyataan` },
    soal: [
      {
        nomor: 14,
        tipe: 'pg',
        pertanyaan: `Katia menyusun lima sepatu pada rak bertingkat lima. Lima sepatu tersebut adalah sepatu olahraga biru, sepatu olahraga merah, sepatu pantofel, sepatu gunung, dan sepatu berhak. Terdapat beberapa informasi sebagai berikut:
1. Sepatu olahraga biru tidak ditempatkan pada rak paling atas.
2. Sepatu berhak dan sepatu pantofel diposisikan berurutan pada rak.
3. Terdapat satu jenis sepatu yang memisahkan sepatu berhak dan sepatu olahraga merah.

Jika sepatu berhak ditempatkan pada rak urutan ketiga dari atas, manakah pernyataan di bawah ini yang PASTI benar?`,
        opsi: [
          { label: 'A', teks: `Sepatu pantofel tidak ditempatkan pada rak kelima dari atas.` },
          { label: 'B', teks: `Sepatu olahraga biru tidak ditempatkan pada rak keempat dari atas.` },
          { label: 'C', teks: `Sepatu pantofel ditempatkan pada rak paling atas.` },
          { label: 'D', teks: `Sepatu gunung ditempatkan pada paling bawah.` },
          { label: 'E', teks: `Sepatu olahraga merah ditempatkan pada rak kedua dari atas.` },
        ],
        kunci: 'A',
        pembahasan: `Sepatu berhak berada di rak ke-3.
Sepatu pantofel harus berurutan dengan sepatu berhak, sehingga sepatu pantofel hanya mungkin berada di rak ke-2 atau ke-4.
Dengan demikian, sepatu pantofel pasti tidak berada di rak ke-5.

Opsi B, C, D, dan E belum tentu benar karena masih bergantung pada susunan sepatu lainnya. Jadi, jawaban yang benar adalah A.

1 Sepatu olahraga merah (mungkin)
2 Sepatu pantofel (mungkin)
3 Sepatu berhak (pasti)
4 Sepatu pantofel (mungkin)
5 Sepatu olahraga merah (mungkin)`,
        status: 'direview',
      },
      {
        nomor: 15,
        tipe: 'pg',
        pertanyaan: `Lima kue, yaitu A, B, C, D, dan E, dipajang pada etalase bernomor 1 sampai 5 dari kiri ke kanan. Ketentuannya sebagai berikut:
1. B harus tepat di sebelah C.
2. D tidak boleh berada di petak 1 atau petak 5.
3. A berada di petak 3.
4. E tidak boleh berada di sebelah B.

Jika C berada di petak 1, maka pernyataan di bawah ini mungkin benar, kecuali ...`,
        opsi: [
          { label: 'A', teks: `B berada di petak 2.` },
          { label: 'B', teks: `D berada di petak 4.` },
          { label: 'C', teks: `E berada di petak 5.` },
          { label: 'D', teks: `A berada di petak 3.` },
          { label: 'E', teks: `D berada di petak 5.` },
        ],
        kunci: 'E',
        pembahasan: `Jika C berada di petak 1, maka B harus berada tepat di sebelah C, yaitu di petak 2.
A sudah ditentukan berada di petak 3.
D tidak boleh berada di petak 1 atau petak 5. Petak 1 sudah ditempati C dan petak 3 sudah ditempati A, sehingga D berada di petak 4.
Sisa petak untuk E adalah petak 5. Posisi ini juga sesuai karena E tidak berada di sebelah B. Maka susunan yang terbentuk adalah C - B - A - D - E.
D tidak mungkin berada di petak 5. Jadi, jawaban yang benar adalah E.

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|c|c|} \\hline 1 & 2 & 3 & 4 & 5 \\\\ \\hline \\text{C} & \\text{B} & \\text{A} & \\text{D} & \\text{E} \\\\ \\hline \\end{array}\\)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Distribusi & Kategori` },
    soal: [
      {
        nomor: 16,
        tipe: 'pg',
        pertanyaan: `Sukma, Bayu, dan Alya bersekolah di SMA yang sama. Masing-masing dari mereka mengikuti dua jenis ekstrakurikuler di sekolahnya. Terdapat beberapa informasi sebagai berikut:
1. Hanya salah satu di antara mereka yang tidak mengikuti ekstrakurikuler basket.
2. Bayu adalah satu-satunya di antara mereka yang mengikuti ekstrakurikuler paduan suara.
3. Alya mengikuti ekstrakurikuler basket.
4. Sukma dan Bayu sama-sama mengikuti ekstrakurikuler teater.

Di antara mereka bertiga, siapakah yang mengikuti ekstrakurikuler fotografi?`,
        opsi: [
          { label: 'A', teks: `Hanya Alya` },
          { label: 'B', teks: `Hanya Bayu` },
          { label: 'C', teks: `Hanya Sukma` },
          { label: 'D', teks: `Sukma dan Bayu` },
          { label: 'E', teks: `Sukma dan Alya` },
        ],
        kunci: 'A',
        pembahasan: `Bayu mengikuti paduan suara dan teater. Karena setiap siswa mengikuti dua ekstrakurikuler, Bayu tidak mengikuti basket.

Hanya satu siswa yang tidak mengikuti basket. Karena Bayu tidak mengikuti basket, maka Sukma dan Alya mengikuti basket.

Sukma dan Bayu sama-sama mengikuti teater. Maka Sukma mengikuti basket dan teater.

Alya sudah diketahui mengikuti basket. Karena fotografi belum dimiliki oleh Sukma maupun Bayu, maka fotografi diikuti oleh Alya.
Jadi, jawaban yang benar adalah A.

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline \\textbf{Sukma} & \\textbf{Bayu} & \\textbf{Alya} \\\\ \\hline \\text{Basket} & \\text{Paduan Suara} & \\text{Basket} \\\\ \\hline \\text{Teater} & \\text{Teater} & \\text{Fotografi} \\\\ \\hline \\end{array}\\)`,
        status: 'direview',
      },
      {
        nomor: 17,
        tipe: 'pg',
        pertanyaan: `Gina membutuhkan berbagai jenis bunga untuk kado pernikahan orang tuanya. Terdapat lima toko bunga di kota tersebut, yaitu Toko A, Toko B, Toko C, Toko D, dan Toko E. Bunga mawar dapat ditemukan di Toko A, B, C, dan E. Semua toko menjual bunga lili. Hanya Toko B yang tidak menjual bunga anggrek. Toko B dan Toko E tidak menjual bunga tulip. Bunga dahlia dapat ditemukan di Toko B, C, dan E.

Toko apa yang akan dikunjungi Gina jika Gina membutuhkan bunga mawar, lili, anggrek, tulip, dan dahlia?`,
        opsi: [
          { label: 'A', teks: `Toko A` },
          { label: 'B', teks: `Toko B` },
          { label: 'C', teks: `Toko C` },
          { label: 'D', teks: `Toko D` },
          { label: 'E', teks: `Toko E` },
        ],
        kunci: 'C',
        pembahasan: `Gina membutuhkan mawar, lili, anggrek, tulip, dan dahlia.

\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|c|c|c|} \\hline \\textbf{Toko} & \\textbf{A} & \\textbf{B} & \\textbf{C} & \\textbf{D} & \\textbf{E} \\\\ \\hline \\text{Mawar} & \\checkmark & \\checkmark & \\checkmark & \\text{x} & \\checkmark \\\\ \\hline \\text{Lili} & \\checkmark & \\checkmark & \\checkmark & \\checkmark & \\checkmark \\\\ \\hline \\text{Anggrek} & \\checkmark & \\text{x} & \\checkmark & \\checkmark & \\checkmark \\\\ \\hline \\text{Tulip} & \\checkmark & \\text{x} & \\checkmark & \\checkmark & \\text{x} \\\\ \\hline \\text{Dahlia} & \\text{x} & \\checkmark & \\checkmark & \\text{x} & \\checkmark \\\\ \\hline \\end{array}\\)

Tanda \\(\\checkmark\\) berarti bunga tersedia di toko tersebut, sedangkan tanda x berarti bunga tidak tersedia.

Toko A tidak menjual dahlia, Toko B tidak menjual anggrek dan tulip, Toko D tidak menjual mawar dan dahlia, dan Toko E tidak menjual tulip. Hanya Toko C yang menjual kelima jenis bunga yang dibutuhkan Gina.

Jadi, toko yang akan dikunjungi Gina adalah Toko C.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Verbal > Analitis > Rute & Jalur` },
    soal: [
      {
        nomor: 18,
        tipe: 'pg',
        pertanyaan: `Risa pergi ke festival makanan. Di dekat pintu masuk, ia melihat gerai A. Dari gerai A dapat pergi ke gerai B dan C. Dari gerai B dapat pergi ke gerai D dan E. Gerai D dan gerai E saling terhubung. Dari gerai D dapat menuju gerai I. Dari gerai E dapat menuju gerai I dan H. Dari gerai C dapat menuju gerai G. Gerai G terhubung dengan gerai H. Dari gerai H dan I langsung terhubung dengan gerai J yang berada di dekat pintu keluar.

Berapa banyak rute yang dapat dilewati Risa dari pintu masuk hingga pintu keluar jika tidak diperbolehkan mengunjungi gerai sebelumnya?`,
        opsi: [
          { label: 'A', teks: `3 rute` },
          { label: 'B', teks: `4 rute` },
          { label: 'C', teks: `5 rute` },
          { label: 'D', teks: `6 rute` },
          { label: 'E', teks: `7 rute` },
        ],
        kunci: 'E',
        pembahasan: `Daftar rute yang mungkin adalah sebagai berikut:
1. A - B - D - I - J
2. A - B - D - E - I - J
3. A - B - D - E - H - J
4. A - B - E - I - J
5. A - B - E - H - J
6. A - B - E - D - I - J
7. A - C - G - H - J

Jadi, terdapat 7 rute yang dapat dilewati.
Jadi, jawaban yang benar adalah E.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Operasi Hitung – Dasar` },
    soal: [
      {
        nomor: 19,
        tipe: 'pg',
        pertanyaan: `Hasil dari \\(\\frac{3}{5} + \\frac{1}{5} - \\frac{7}{10}\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `0,1` },
          { label: 'B', teks: `0,3` },
          { label: 'C', teks: `0,55` },
          { label: 'D', teks: `0,7` },
          { label: 'E', teks: `1` },
        ],
        kunci: 'A',
        pembahasan: `\\(\\begin{aligned} & \\frac{3}{5} + \\frac{1}{5} - \\frac{7}{10} \\\\ &= \\frac{3 + 1}{5} - \\frac{7}{10} \\\\ &= \\frac{4}{5} - \\frac{7}{10} \\\\ &= \\frac{8}{10} - \\frac{7}{10} \\\\ &= \\frac{1}{10} \\\\ &= 0,1 \\end{aligned}\\)`,
        status: 'direview',
      },
      {
        nomor: 20,
        tipe: 'pg',
        pertanyaan: `Hasil dari \\(18 + 0,75 \\times \\frac{1}{2}\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `\\(18\\frac{1}{8}\\)` },
          { label: 'B', teks: `\\(18\\frac{3}{8}\\)` },
          { label: 'C', teks: `\\(18\\frac{5}{8}\\)` },
          { label: 'D', teks: `\\(18\\frac{7}{8}\\)` },
          { label: 'E', teks: `\\(19\\frac{1}{8}\\)` },
        ],
        kunci: 'B',
        pembahasan: `\\(18 + 0,75 \\times \\frac{1}{2}\\)
Gunakan tabel pecahan istimewa berikut.
Pecahan Istimewa
\\(\\def\\arraystretch{1.6}\\begin{array}{|l|l|l|l|} \\hline \\frac{1}{2}=0,5=50\\% & & & \\\\ \\hline \\frac{1}{3}=0,3333=33,33\\% & \\frac{2}{3}=0,6667=66,67\\% & & \\\\ \\hline \\frac{1}{4}=0,25=25\\% & \\frac{3}{4}=0,75=75\\% & & \\\\ \\hline \\frac{1}{6}=0,1667=16,67\\% & \\frac{5}{6}=0,8333=83,33\\% & & \\\\ \\hline \\frac{1}{8}=0,125=12,5\\% & \\frac{3}{8}=0,375=37,5\\% & \\frac{5}{8}=0,625=62,5\\% & \\frac{7}{8}=0,875=87,5\\% \\\\ \\hline \\end{array}\\)

\\(\\begin{aligned} &= 18 + \\frac{3}{4} \\times \\frac{1}{2} \\\\ &= 18 + \\frac{3 \\times 1}{4 \\times 2} \\\\ &= 18 + \\frac{3}{8} \\\\ &= 18\\frac{3}{8} \\end{aligned}\\)`,
        status: 'direview',
      },
      {
        nomor: 21,
        tipe: 'pg',
        pertanyaan: `Hasil dari \\(2\\frac{1}{2} + 0,75 \\div \\frac{3}{4} - 1\\) adalah ...`,
        opsi: [
          { label: 'A', teks: `2,5` },
          { label: 'B', teks: `3,0` },
          { label: 'C', teks: `3,5` },
          { label: 'D', teks: `4,0` },
          { label: 'E', teks: `4,5` },
        ],
        kunci: 'A',
        pembahasan: `\\(2\\frac{1}{2} + 0,75 \\div \\frac{3}{4} - 1\\)
Gunakan tabel pecahan istimewa berikut.
Pecahan Istimewa
\\(\\def\\arraystretch{1.6}\\begin{array}{|l|l|l|l|} \\hline \\frac{1}{2}=0,5=50\\% & & & \\\\ \\hline \\frac{1}{3}=0,3333=33,33\\% & \\frac{2}{3}=0,6667=66,67\\% & & \\\\ \\hline \\frac{1}{4}=0,25=25\\% & \\frac{3}{4}=0,75=75\\% & & \\\\ \\hline \\frac{1}{6}=0,1667=16,67\\% & \\frac{5}{6}=0,8333=83,33\\% & & \\\\ \\hline \\frac{1}{8}=0,125=12,5\\% & \\frac{3}{8}=0,375=37,5\\% & \\frac{5}{8}=0,625=62,5\\% & \\frac{7}{8}=0,875=87,5\\% \\\\ \\hline \\end{array}\\)

\\(\\begin{aligned} &= 2\\frac{1}{2} + \\frac{3}{4} \\div \\frac{3}{4} - 1 \\\\ &= 2\\frac{1}{2} + \\frac{3}{4} \\times \\frac{4}{3} - 1 \\\\ &= 2\\frac{1}{2} + 1 - 1 \\\\ &= 2\\frac{1}{2} \\\\ &= 2,5 \\end{aligned}\\)`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Perkalian Setara` },
    soal: [
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: `Sebuah percetakan sedang menentukan kombinasi jumlah paket dan banyaknya brosur dalam setiap paket. Kombinasi yang menghasilkan jumlah brosur keseluruhan yang sama adalah...`,
        opsi: [
          { label: 'A', teks: `18 × 800 sama dengan 24 × 650` },
          { label: 'B', teks: `20 × 720 sama dengan 30 × 500` },
          { label: 'C', teks: `24 × 750 sama dengan 30 × 600` },
          { label: 'D', teks: `32 × 450 sama dengan 36 × 420` },
          { label: 'E', teks: `40 × 360 sama dengan 45 × 300` },
        ],
        kunci: 'C',
        pembahasan: `Eliminasi 0 secara berseberangan di setiap opsi:
A. 18 × 800 sama dengan 24 × 650 → 18 × 80 sama dengan 24 × 65
B. 20 × 720 sama dengan 30 × 500 → 2 × 72 sama dengan 3 × 50
C. 24 × 750 sama dengan 30 × 600 → 24 × 75 sama dengan 30 × 60
D. 32 × 450 sama dengan 36 × 420 → 32 × 45 sama dengan 36 × 42
E. 40 × 360 sama dengan 45 × 300 → 4 × 36 sama dengan 45 × 3

Periksa digit terakhir dari perkalian digit terakhir.
Jika hasil digit terakhirnya sama, maka lanjutkan pengerjaan. Jika tidak sama, maka lanjutkan ke opsi berikutnya.

A. 18 × 80 sama dengan 24 × 65
18 × 80 → 8 × 0 = 0 (Digit terakhir adalah 0)
24 × 65 → 4 × 5 = 20 (Digit terakhir adalah 0)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
18 × 80 = 1440
24 × 65 = 1560
Hasil berbeda. Lanjutkan ke opsi selanjutnya.

B. 2 × 72 sama dengan 3 × 50
2 × 72 → 2 × 2 = 4 (Digit terakhir adalah 4)
3 × 50 → 3 × 0 = 0 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.

C. 24 × 75 sama dengan 30 × 60
24 × 75 → 4 × 5 = 20 (Digit terakhir adalah 0)
30 × 60 → 0 × 0 = 0 (Digit terakhir adalah 0)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
24 × 75 = 1800
30 × 60 = 1800
Hasilnya sama. Jadi, jawabannya adalah C.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Berhitung > Pembagian Setara` },
    soal: [
      {
        nomor: 23,
        tipe: 'pg',
        pertanyaan: `Sebuah gudang akan membagi sejumlah kotak makanan secara merata ke beberapa rak. Kombinasi yang menghasilkan jumlah kotak makanan pada setiap rak yang sama adalah...`,
        opsi: [
          { label: 'A', teks: `840 ÷ 20 sama dengan 960 ÷ 24` },
          { label: 'B', teks: `900 ÷ 25 sama dengan 1080 ÷ 27` },
          { label: 'C', teks: `1260 ÷ 30 sama dengan 1320 ÷ 33` },
          { label: 'D', teks: `1120 ÷ 28 sama dengan 1440 ÷ 36` },
          { label: 'E', teks: `1500 ÷ 50 sama dengan 1600 ÷ 40` },
        ],
        kunci: 'D',
        pembahasan: `Ubah setiap pembagian menjadi perkalian setara dengan perkalian silang:
A. 840 ÷ 20 sama dengan 960 ÷ 24
\\(\\frac{840}{20} = \\frac{960}{24}\\)
\\(\\Leftrightarrow 840 \\times 24 = 960 \\times 20\\)
→ 840 × 24 sama dengan 960 × 20

B. 900 ÷ 25 sama dengan 1080 ÷ 27
\\(\\frac{900}{25} = \\frac{1080}{27}\\)
\\(\\Leftrightarrow 900 \\times 27 = 1080 \\times 25\\)
→ 900 × 27 sama dengan 1080 × 25

C. 1260 ÷ 30 sama dengan 1320 ÷ 33
\\(\\frac{1260}{30} = \\frac{1320}{33}\\)
\\(\\Leftrightarrow 1260 \\times 33 = 1320 \\times 30\\)
→ 1260 × 33 sama dengan 1320 × 30

D. 1120 ÷ 28 sama dengan 1440 ÷ 36
\\(\\frac{1120}{28} = \\frac{1440}{36}\\)
\\(\\Leftrightarrow 1120 \\times 36 = 1440 \\times 28\\)
→ 1120 × 36 sama dengan 1440 × 28

E. 1500 ÷ 50 sama dengan 1600 ÷ 40
\\(\\frac{1500}{50} = \\frac{1600}{40}\\)
\\(\\Leftrightarrow 1500 \\times 40 = 1600 \\times 50\\)
→ 1500 × 40 sama dengan 1600 × 50

Eliminasi 0 secara berseberangan di setiap opsi:
A. 840 × 24 sama dengan 960 × 20 → 84 × 24 sama dengan 96 × 20
B. 900 × 27 sama dengan 1080 × 25 → 90 × 27 sama dengan 108 × 25
C. 1260 × 33 sama dengan 1320 × 30 → 126 × 33 sama dengan 132 × 30
D. 1120 × 36 sama dengan 1440 × 28 → 112 × 36 sama dengan 144 × 28
E. 1500 × 40 sama dengan 1600 × 50 → 15 × 4 sama dengan 16 × 5

Periksa digit terakhir dari perkalian digit terakhir.
Jika hasil digit terakhirnya sama, maka lanjutkan pengerjaan. Jika tidak sama, maka lanjutkan ke opsi berikutnya.

A. 84 × 24 sama dengan 96 × 20
84 × 24 → 4 × 4 = 16 (Digit terakhir adalah 6)
96 × 20 → 6 × 0 = 0 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.

B. 90 × 27 sama dengan 108 × 25
90 × 27 → 0 × 7 = 0 (Digit terakhir adalah 0)
108 × 25 → 8 × 5 = 40 (Digit terakhir adalah 0)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
90 × 27 = 2430
108 × 25 = 2700
Hasil berbeda. Lanjutkan ke opsi selanjutnya.

C. 126 × 33 sama dengan 132 × 30
126 × 33 → 6 × 3 = 18 (Digit terakhir adalah 8)
132 × 30 → 2 × 0 = 0 (Digit terakhir adalah 0)
Karena digit terakhirnya berbeda, maka lanjutkan ke opsi selanjutnya.

D. 112 × 36 sama dengan 144 × 28
112 × 36 → 2 × 6 = 12 (Digit terakhir adalah 2)
144 × 28 → 4 × 8 = 32 (Digit terakhir adalah 2)
Karena digit terakhirnya sama, maka lakukan perkalian penuhnya.
112 × 36 = 4032
144 × 28 = 4032
Hasilnya sama. Jadi, jawabannya adalah D.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - 1 Towew` },
    soal: [
      {
        nomor: 24,
        tipe: 'pg',
        pertanyaan: `2, 4, 6, 8, 10, ...`,
        opsi: [
          { label: 'A', teks: `11` },
          { label: 'B', teks: `12` },
          { label: 'C', teks: `13` },
          { label: 'D', teks: `14` },
          { label: 'E', teks: `16` },
        ],
        kunci: 'B',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-1-towew-s01-pembahasan-1.png⟧

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\uparrow \\uparrow \\uparrow \\text{ atau }\\downarrow \\downarrow \\downarrow  & \\text{1 Towew} \\\\ \\hline \\uparrow \\downarrow \\uparrow \\text{ atau }\\downarrow \\uparrow \\downarrow  & \\text{2 Towew} \\\\ \\hline \\uparrow \\uparrow \\downarrow \\text{ atau }\\downarrow \\downarrow \\uparrow  & \\text{3 Towew} \\\\ \\hline \\end{array}\\)

↑ ↑ ↑ artinya 1 towew

Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-1-towew-s01-pembahasan-2.png⟧

Pola tambahannya tetap, yaitu +2. Maka suku berikutnya adalah 10 + 2 = 12.
Jadi, jawaban yang benar adalah B.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - 2 Towew` },
    soal: [
      {
        nomor: 25,
        tipe: 'pg',
        pertanyaan: `22, 18, 26, 22, 30, 26, ..., ...`,
        opsi: [
          { label: 'A', teks: `30, 34` },
          { label: 'B', teks: `34, 30` },
          { label: 'C', teks: `34, 38` },
          { label: 'D', teks: `38, 34` },
          { label: 'E', teks: `40, 36` },
        ],
        kunci: 'B',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-2-towew-s03-pembahasan-1.png⟧

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\uparrow \\uparrow \\uparrow \\text{ atau }\\downarrow \\downarrow \\downarrow  & \\text{1 Towew} \\\\ \\hline \\uparrow \\downarrow \\uparrow \\text{ atau }\\downarrow \\uparrow \\downarrow  & \\text{2 Towew} \\\\ \\hline \\uparrow \\uparrow \\downarrow \\text{ atau }\\downarrow \\downarrow \\uparrow  & \\text{3 Towew} \\\\ \\hline \\end{array}\\)

↑ ↓ ↑ artinya 2 towew

Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-2-towew-s03-pembahasan-2.png⟧

Pada larik ganjil, suku berikutnya adalah 30 + 4 = 34.
Pada larik genap, suku berikutnya adalah 26 + 4 = 30.
Jadi, dua bilangan berikutnya adalah 34 dan 30. Jawaban yang benar adalah B.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - 3 Towew` },
    soal: [
      {
        nomor: 26,
        tipe: 'pg',
        pertanyaan: `5, 8, 7, 5, 11, 8, 5, 14, 9, ...`,
        opsi: [
          { label: 'A', teks: `5` },
          { label: 'B', teks: `7` },
          { label: 'C', teks: `10` },
          { label: 'D', teks: `14` },
          { label: 'E', teks: `17` },
        ],
        kunci: 'A',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-3-towew-s02-pembahasan-1.png⟧

\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\uparrow \\uparrow \\uparrow \\text{ atau }\\downarrow \\downarrow \\downarrow  & \\text{1 Towew} \\\\ \\hline \\uparrow \\downarrow \\uparrow \\text{ atau }\\downarrow \\uparrow \\downarrow  & \\text{2 Towew} \\\\ \\hline \\uparrow \\uparrow \\downarrow \\text{ atau }\\downarrow \\downarrow \\uparrow  & \\text{3 Towew} \\\\ \\hline \\end{array}\\)

↓ ↓ ↑ artinya 3 towew

Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-3-towew-s02-pembahasan-2.png⟧

Suku yang ditanyakan berada pada larik ke-1. Larik ke-1 memiliki pola tetap, yaitu 5, 5, 5, sehingga suku berikutnya adalah 5.
Jadi, jawaban yang benar adalah A.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - Hijab` },
    soal: [
      {
        nomor: 27,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Suku ke-} & \\textbf{Nilai} \\\\ \\hline 1 & 15 \\\\ \\hline 2 & 21 \\\\ \\hline 3 & 27 \\\\ \\hline 4 & \\text{?} \\\\ \\hline 5 & 39 \\\\ \\hline 6 & \\text{?} \\\\ \\hline 7 & 51 \\\\ \\hline \\end{array}\\)
Selisih nilai pada suku ke-6 dan suku ke-4 adalah…`,
        opsi: [
          { label: 'A', teks: `3` },
          { label: 'B', teks: `6` },
          { label: 'C', teks: `9` },
          { label: 'D', teks: `12` },
          { label: 'E', teks: `18` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan pola bilangannya: 15, 21, 27, ?, 39, ?, 51
Beda antarsuku: 21 − 15 = 6, berarti polanya bertambah 6 setiap suku.
Maka:
U₄ = 27 + 6 = 33
U₆ = 39 + 6 = 45
U₆ − U₄ = 45 − 33 = 12
Jawaban: D`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - Template` },
    soal: [
      {
        nomor: 28,
        tipe: 'pg',
        pertanyaan: `3, 11, ..., 29, ..., 55, 69`,
        opsi: [
          { label: 'A', teks: `15, 35` },
          { label: 'B', teks: `17, 37` },
          { label: 'C', teks: `17, 39` },
          { label: 'D', teks: `19, 39` },
          { label: 'E', teks: `21, 41` },
        ],
        kunci: 'C',
        pembahasan: `Pola yang terlihat:
\\(U_{1} = (1 \\times 4) -1 = 3\\)
\\(U_{2} = (2 \\times 5) + 1 = 11\\)
\\(U_{3} = (3 \\times 6) -1 = 17\\)
\\(U_{4} = (4 \\times 7) + 1 = 29\\)
\\(U_{5} = (5 \\times 8) -1 = 39\\)
\\(U_{6} = (6 \\times 9) + 1 = 55\\)
\\(U_{7} = (7 \\times 10) -1 = 69\\)
\\(U_{n}= [n(n+ 3)] \\mp 1\\)
dengan (-) untuk suku ganjil dan (+) untuk suku genap
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-template-s05-pembahasan-1.png⟧`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Deret Angka - Campuran` },
    soal: [
      {
        nomor: 29,
        tipe: 'pg',
        pertanyaan: `2, 7, 22, ..., 202`,
        opsi: [
          { label: 'A', teks: `56` },
          { label: 'B', teks: `61` },
          { label: 'C', teks: `67` },
          { label: 'D', teks: `72` },
          { label: 'E', teks: `81` },
        ],
        kunci: 'C',
        pembahasan: `Pola yang terlihat:
⟦gambar:gambar/jadiasn/cpns2027-tiu-deret-angka-campuran-s04-pembahasan-1.png⟧

2 × 3 + 1 = 7
7 × 3 + 1 = 22
22 × 3 + 1 = 67
67 × 3 + 1 = 202
Jadi, bilangan yang rumpang adalah 67. Jawaban yang benar adalah C.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Matriks Deret` },
    soal: [
      {
        nomor: 30,
        tipe: 'pg',
        pertanyaan: `Tentukan nilai x.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline 2 & -3 & 0 \\\\ \\hline 6 & 9 & 8 \\\\ \\hline 4 & 3 & \\text{x} \\\\ \\hline \\end{array}\\)
Pilihan jawaban:`,
        opsi: [
          { label: 'A', teks: `−8` },
          { label: 'B', teks: `−4` },
          { label: 'C', teks: `0` },
          { label: 'D', teks: `4` },
          { label: 'E', teks: `6` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan bilangan pada tabel. Bilangan pada baris ketiga adalah rata-rata dua bilangan di atasnya pada kolom yang sama:
\\((2 + 6) \\div 2 = 4\\)
\\((-3 + 9) \\div 2 = 3\\)
\\((0 + 8) \\div 2 = \\text{x}\\)
Maka, diperoleh nilai x = 4.
Jawaban: D`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Deret Angka > Pola Bilangan Tabel` },
    soal: [
      {
        nomor: 31,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|} \\hline \\textbf{Urutan ke-} & \\textbf{Nilai} \\\\ \\hline 1 & 0 \\\\ \\hline 2 & 3 \\\\ \\hline 9 & 24 \\\\ \\hline 18 & \\text{?} \\\\ \\hline 25 & 72 \\\\ \\hline \\end{array}\\)
Jika perubahan nilai mengikuti pola yang sama, nilai pada urutan ke-18 adalah...`,
        opsi: [
          { label: 'A', teks: `23` },
          { label: 'B', teks: `29` },
          { label: 'C', teks: `30` },
          { label: 'D', teks: `31` },
          { label: 'E', teks: `51` },
        ],
        kunci: 'E',
        pembahasan: `Perhatikan hubungan antara urutan dan nilainya.
• Urutan ke-1 → 3(1) − 3 = 0
• Urutan ke-2 → 3(2) − 3 = 3
• Urutan ke-9 → 3(9) − 3 = 24
• Urutan ke-25 → 3(25) − 3 = 72
Maka pola yang digunakan adalah:
Nilai = 3 × urutan−3
Untuk urutan ke-18 → 3(18) − 3 = 54 − 3 = 51
Jadi, nilai pada urutan ke-18 adalah 51.
Jawaban: E`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Pernyataan` },
    soal: [
      {
        nomor: 32,
        tipe: 'pg',
        pertanyaan: `Daftar harga di sebuah toko alat tulis:
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|} \\hline \\textbf{Barang} & \\textbf{Harga} \\\\ \\hline \\text{Pulpen} & \\text{Rp4.500} \\\\ \\hline \\text{Buku tulis} & \\text{Rp6.000} \\\\ \\hline \\text{Pensil} & \\text{Rp3.000} \\\\ \\hline \\text{Penghapus} & \\text{Rp2.500} \\\\ \\hline \\end{array}\\)

Pernyataan:
(1) Rani membeli 2 pulpen dan 1 buku tulis seharga Rp15.000.
(2) Sinta membeli 3 pensil dan 2 penghapus seharga Rp13.000.
(3) Doni membeli 1 buku tulis, 1 pensil, dan 1 penghapus seharga Rp11.500.
(4) Eka membeli 4 pulpen seharga Rp17.000.

Kombinasi pernyataan yang benar adalah ....`,
        opsi: [
          { label: 'A', teks: `1 dan 2` },
          { label: 'B', teks: `1 dan 3` },
          { label: 'C', teks: `2 dan 4` },
          { label: 'D', teks: `1, 2, dan 3` },
          { label: 'E', teks: `1, 2, 3, dan 4` },
        ],
        kunci: 'B',
        pembahasan: `(1) 9.000 + 6.000 = 15.000 ✓
(2) 9.000 + 5.000 = 14.000 ≠ 13.000 ✗    coret A, C, D, E
(3) 6.000 + 3.000 + 2.500 = 11.500 ✓
(4) 4 × 4.500 = 18.000 ≠ 17.000 ✗
Benar: 1 dan 3`,
        status: 'direview',
      },
      {
        nomor: 33,
        tipe: 'pg',
        pertanyaan: `Peserta kegiatan ekstrakurikuler di sebuah sekolah:
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|c|} \\hline \\textbf{Kegiatan} & \\textbf{Kelas VII} & \\textbf{Kelas VIII} & \\textbf{Kelas IX} \\\\ \\hline \\text{Pramuka} & 12 & 9 & 7 \\\\ \\hline \\text{Futsal} & 8 & 10 & 6 \\\\ \\hline \\text{Tari} & 5 & 8 & 11 \\\\ \\hline \\text{Robotik} & 6 & 4 & 8 \\\\ \\hline \\end{array}\\)

Pernyataan:
(1) Kelas VII memiliki peserta pramuka terbanyak.
(2) Total peserta futsal sama dengan total peserta tari.
(3) Kelas IX memiliki peserta robotik terbanyak.
(4) Total peserta kelas VIII adalah 32 orang.

Kombinasi pernyataan yang benar adalah ....`,
        opsi: [
          { label: 'A', teks: `1 dan 4` },
          { label: 'B', teks: `2 dan 3` },
          { label: 'C', teks: `1, 3, dan 4` },
          { label: 'D', teks: `2, 3, dan 4` },
          { label: 'E', teks: `1, 2, dan 3` },
        ],
        kunci: 'E',
        pembahasan: `(1) pramuka: 12 > 9 > 7    kelas VII ✓
(2) futsal 8+10+6 = 24 ; tari 5+8+11 = 24 ✓ sama
(3) robotik: 8 > 6 > 4    kelas IX ✓
(4) kelas VIII: 9+10+8+4 = 31, bukan 32 ✗
Benar: 1, 2, dan 3`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Optimal` },
    soal: [
      {
        nomor: 34,
        tipe: 'pg',
        pertanyaan: `Sebanyak 480 pegawai sebuah perusahaan akan mengikuti kegiatan pelatihan di luar kota. Untuk menuju lokasi kegiatan, perusahaan menyediakan tiga jenis bus dengan kapasitas sebagai berikut:
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|} \\hline \\textbf{Jenis Bus} & \\textbf{Kapasitas} \\\\ \\hline \\text{Bus A} & \\text{40 orang} \\\\ \\hline \\text{Bus B} & \\text{60 orang} \\\\ \\hline \\text{Bus C} & \\text{80 orang} \\\\ \\hline \\end{array}\\)

Dengan ketentuan:
(1) Seluruh pegawai harus dapat terangkut.
(2) Jumlah kursi kosong dari seluruh bus yang digunakan tidak boleh lebih dari 20 kursi.

Kombinasi bus yang memenuhi ketentuan tersebut adalah...`,
        opsi: [
          { label: 'A', teks: `2 Bus A dan 3 Bus C` },
          { label: 'B', teks: `5 Bus B dan 3 Bus C` },
          { label: 'C', teks: `3 Bus A, 2 Bus B, dan 3 Bus C` },
          { label: 'D', teks: `2 Bus A, 2 Bus B, dan 3 Bus C` },
          { label: 'E', teks: `4 Bus A, 2 Bus B, dan 2 Bus C` },
        ],
        kunci: 'C',
        pembahasan: `Periksa total kapasitas setiap pilihan.
A. 2 Bus A dan 3 Bus C = 2(40) + 3(80) = 320
Kapasitas tidak cukup untuk 480 pegawai.

B. 5 Bus B dan 3 Bus C = 5(60) + 3(80)
= 300 + 240
= 540
Kursi kosong: 540 − 480 = 60 kursi
Oleh karena 60 > 20, pilihan ini tidak memenuhi ketentuan.

C. 3 Bus A, 2 Bus B, dan 3 Bus C = 3(40) + 2(60) + 3(80)
= 120 + 120 + 240
= 480
Seluruh pegawai dapat terangkut dan tidak ada kursi kosong.

D. 2 Bus A, 2 Bus B, dan 3 Bus C=2(40)+2(60)+3(80)
= 80+120+240
= 440
Kapasitas tidak cukup.

E. 4 Bus A, 2 Bus B, dan 2 Bus C =4(40)+ 2(60)+ 2(80)
= 160+120+160
= 440
Kapasitas tidak cukup.

Jadi, kombinasi bus yang memenuhi seluruh ketentuan adalah 3 Bus A, 2 Bus B, dan 3 Bus C.`,
        status: 'direview',
      },
      {
        nomor: 35,
        tipe: 'pg',
        pertanyaan: `Sekolah menyewa bus untuk mengangkut peserta studi wisata.
\\(\\def\\arraystretch{1.4}\\begin{array}{|c|c|c|} \\hline \\textbf{Bus} & \\textbf{Kapasitas} & \\textbf{Biaya} \\\\ \\hline \\text{A} & \\text{20 orang} & \\text{Rp950.000} \\\\ \\hline \\text{B} & \\text{35 orang} & \\text{Rp1.400.000} \\\\ \\hline \\text{C} & \\text{50 orang} & \\text{Rp1.900.000} \\\\ \\hline \\end{array}\\)
Pernyataan:
(1) Peserta berjumlah 120 orang.
(2) Semua peserta harus memperoleh tempat duduk.
(3) Bus dapat dipilih lebih dari satu.
(4) Sekolah ingin biaya paling rendah.

Kombinasi bus yang paling hemat adalah ....`,
        opsi: [
          { label: 'A', teks: `6 bus A` },
          { label: 'B', teks: `1 bus A dan 2 bus C` },
          { label: 'C', teks: `2 bus B dan 1 bus C` },
          { label: 'D', teks: `1 bus B dan 2 bus C` },
          { label: 'E', teks: `4 bus B` },
        ],
        kunci: 'C',
        pembahasan: `Harga per kursi: A 47.500 · B 40.000 · C 38.000
Cari kombinasi yang kursinya PAS 120 dan murah:
C. 2B + 1C = 70 + 50 = 120    2,8 jt + 1,9 jt = Rp4.700.000
B. 1A + 2C = 20 + 100 = 120    Rp4.750.000 (beda tipis!)
A 5,7 jt · D 5,2 jt (135 kursi) · E 5,6 jt
Paling hemat: C`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Aljabar - Operasi Aljabar` },
    soal: [
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: `Diketahui dua bilangan positif A dan B. Tentukan apakah A lebih besar daripada B!
(1). \\(A+ B= 420\\)
(2). \\(A-B= 60\\)`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Diketahui A dan B merupakan bilangan positif.
Pernyataan (1):
\\(A+ B= 420\\)
Informasi tersebut belum dapat menentukan hubungan A dan B.
Misalnya: \\(A= 220\\), \\(B= 200\\), maka \\(A> B\\).
Namun, bisa juga: \\(A= 200\\), \\(B= 220\\), maka \\(A< B\\).
Jadi, pernyataan (1) saja tidak cukup.

Pernyataan (2):
\\(A-B= 60\\)
Karena: \\(60 > 0\\), maka
\\(A-B> 0\\)
\\(A> B\\)
Hubungan A dan B dapat diketahui secara pasti. Jadi, pernyataan (2) saja cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Aljabar - Persamaan` },
    soal: [
      {
        nomor: 37,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(x\\) merupakan bilangan real. Berapakah nilai \\(x\\)?
(1) \\(3x-5 = 16\\)
(2) \\(x^{2} = 49\\)`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'A',
        pembahasan: `Pernyataan (1):
\\(3x-5 = 16\\)
\\(3x= 21\\)
\\(x= 7\\)
Pernyataan (1) menghasilkan satu nilai \\(x\\) yang unik. Pernyataan (1) SAJA cukup.

Pernyataan (2):
\\(x^{2} = 49\\)
\\(x= \\pm 7\\)
Masih terdapat dua kemungkinan nilai \\(x\\), yaitu \\(7\\) atau \\(-7\\). Pernyataan (2) SAJA tidak cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Aljabar - Sistem Persamaan` },
    soal: [
      {
        nomor: 38,
        tipe: 'pg',
        pertanyaan: `Diketahui bahwa variabel \\(x\\) dan \\(y\\) merupakan bilangan real yang memenuhi persamaan \\(x+ y= 7\\). Berapakah nilai dari \\(2x+ y\\)?
Pilihlah informasi yang cukup untuk menjawab pertanyaan tersebut.
(1) \\(x-y= 1\\)
(2) \\(2x-y= 5\\)`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'D',
        pembahasan: `Nilai yang ditanyakan: \\(2x+ y\\) = ...
Diketahui: \\(x\\) dan \\(y\\) merupakan bilangan real, \\(x+ y= 7\\)
(1) Diketahui \\(x-y= 1\\)
\\(x+ y= 7\\)
\\(x-y= 1\\)
Jumlahkan kedua persamaan:
\\((x+ y) + (x-y) = 7 + 1\\)
\\(2x= 8\\)
\\(x= 4\\)
Nilai \\(x= 4\\), substitusi ke salah satu persamaan
\\(x-y= 1\\)
\\(4 -y= 1\\)
\\(4 -1 = y\\)
\\(3 = y\\)
Maka nilai \\(2x+ y= 8 + 3 = 11\\)
Pernyataan (1) saja cukup untuk menjawab pertanyaan.

(2) Diketahui \\(2x-y= 5\\)
\\(x+ y= 7\\)
\\(2x-y= 5\\)
Jumlahkan kedua persamaan:
\\((x+ y) + (2x-y) = 7 + 5\\)
\\(3x= 12\\)
\\(x= 4\\)
\\(x+ y= 7\\)
\\(4 + y= 7\\)
\\(y= 7 -4\\)
\\(y= 3\\)
Maka: \\(2x+ y= 2(4) + 3 = 11\\)
Pernyataan (2) saja cukup untuk menjawab pertanyaan.
Salah satu pernyataan cukup untuk menjawab pertanyaan.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Bilangan - Jenis dan Sifat Bilangan` },
    soal: [
      {
        nomor: 39,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(n\\) merupakan bilangan bulat positif. Apakah \\(n\\) merupakan bilangan prima?
(1) \\(n\\) merupakan bilangan ganjil yang lebih besar dari \\(2\\).
(2) \\(n\\) memiliki tepat dua faktor positif, yaitu \\(1\\) dan \\(n\\).`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Pernyataan (1):
Bilangan ganjil yang lebih besar dari \\(2\\) belum tentu prima. Contoh: \\(n= 9\\) bukan prima, sedangkan \\(n= 11\\) prima. Pernyataan (1) SAJA tidak cukup.

Pernyataan (2):
Bilangan bulat positif yang memiliki tepat dua faktor positif, yaitu \\(1\\) dan dirinya sendiri, merupakan bilangan prima. Maka \\(n\\) pasti prima. Pernyataan (2) SAJA cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Bilangan - Keterbagian Bilangan` },
    soal: [
      {
        nomor: 40,
        tipe: 'pg',
        pertanyaan: `Diketahui \\(n\\) merupakan bilangan bulat. Apakah \\(n\\) habis dibagi \\(4\\)?
(1) \\(n= 6k+ 2\\), untuk suatu bilangan bulat \\(k\\).
(2) \\(n= 12m\\), untuk suatu bilangan bulat \\(m\\).`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Pernyataan (1):
Jika \\(k= 1\\), maka \\(n= 8\\) dan habis dibagi \\(4\\). Jika \\(k= 2\\), maka \\(n= 14\\) dan tidak habis dibagi \\(4\\). Pernyataan (1) SAJA tidak cukup.

Pernyataan (2):
\\(n= 12m= 4(3m)\\)
Karena \\(n\\) selalu dapat dinyatakan sebagai \\(4\\) dikali bilangan bulat, maka \\(n\\) pasti habis dibagi \\(4\\).
Pernyataan (2) SAJA cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Bilangan - Faktor dan Kelipatan` },
    soal: [
      {
        nomor: 41,
        tipe: 'pg',
        pertanyaan: `Berapakah nilai \\(x\\)?
(1) \\(x^{2} = 49\\)
(2) \\(x\\) merupakan faktor prima dari 21 yang lebih besar dari 5`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Pernyataan (1):
\\(x^{2} = 49\\)
\\(x= \\pm \\sqrt{49}\\)
\\(x= 7\\) atau \\(x= -7\\)
Terdapat dua kemungkinan nilai \\(x\\), sehingga pernyataan (1) saja tidak cukup.

Pernyataan (2):
Faktor prima dari 21 adalah: 3 dan 7
Karena \\(x\\) merupakan faktor prima yang lebih besar dari 5, maka \\(x= 7\\)
Nilai \\(x\\) dapat diketahui secara pasti, sehingga pernyataan (2) saja cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Aljabar` },
    soal: [
      {
        nomor: 42,
        tipe: 'pg',
        pertanyaan: `Sebuah pusat workshop menyediakan dua jenis layanan, yaitu Workshop Offline dan Akses Streaming. Setiap tiket hanya berlaku untuk satu peserta. Perhatikan tabel berikut.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|} \\hline \\textbf{Jenis Peserta} & \\textbf{Harga/Tiket} & \\textbf{Jumlah Tiket Terjual} \\\\ \\hline \\text{Workshop Offline} & \\text{Rp150.000} & m \\\\ \\hline \\text{Akses Streaming} & \\text{Rp75.000} & n \\\\ \\hline \\end{array}\\)

Berapakah total pendapatan yang diperoleh dari pendaftaran seluruh peserta workshop? Pilihlah informasi yang dapat digunakan untuk menjawab pertanyaan tersebut!
(1) Jumlah peserta workshop offline dan akses streaming adalah 180 peserta.
(2) Jumlah peserta akses streaming 60 peserta lebih banyak daripada peserta workshop offline.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Diketahui:
Total pendapatan: \\(150.000m+ 75.000n\\)
Pernyataan (1):
Jumlah peserta workshop offline dan akses streaming adalah 180 peserta.
\\(m+ n= 180\\)
Pernyataan ini belum cukup karena terdapat banyak kemungkinan nilai \\(m\\) dan \\(n\\).
Pernyataan (1) SAJA tidak cukup.
Pernyataan (2):
Jumlah peserta akses streaming 60 peserta lebih banyak daripada peserta workshop offline.
\\(n= m+ 60\\)
Pernyataan ini juga belum cukup karena nilai \\(m\\) dan \\(n\\) belum diketahui secara pasti
Pernyataan (2) SAJA tidak cukup.
Pernyataan (1) dan (2) bersama-sama:
Diketahui:
\\(m+ n= 180\\)
\\(n= m+ 60\\)
Substitusi:
\\(m+ (m+ 60) = 180\\)
\\(2m+ 60 = 180\\)
\\(2m= 120\\)
\\(m= 60\\)
Maka:
\\(n= m+ 60\\)
\\(n= 60 + 60 = 120\\)
Pendapatan total:
\\(= (150.000)(60) + (75.000)(120)\\)
\\(= 9.000.000 + 9.000.000\\)
\\(= 18.000.000\\)
Jadi, kedua pernyataan bersama-sama cukup untuk menentukan total pendapatan.
Jawaban: C`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Aritmatika Sosial` },
    soal: [
      {
        nomor: 43,
        tipe: 'pg',
        pertanyaan: `Seorang penjual memperoleh keuntungan dari penjualan secangkir kopi. Berapakah modal penjual untuk secangkir kopi tersebut?
(1) Harga jual secangkir kopi adalah Rp25.000.
(2) Penjual memperoleh keuntungan sebesar 25% dari modal.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Ingat rumus:
\\(HJ = M(1 + u) \\to \\textbf{HaJi MIu}\\)
dengan
• \\(HJ\\) = harga jual / harga akhir / nilai akhir
• \\(M\\) = modal / harga beli / harga awal / nilai awal
• \\(u\\) = persentase perubahan dalam bentuk desimal

Pernyataan (1):
Harga jual secangkir kopi adalah Rp25.000.
\\(HJ= \\text{Rp}25.000\\)
Gunakan rumus:
\\(HJ= M(1 + u)\\)
Nilai u atau persentase keuntungan belum diketahui. Oleh karena itu, modal belum dapat ditentukan secara pasti.
Pernyataan (1) SAJA tidak cukup.

Pernyataan (2):
Penjual memperoleh keuntungan sebesar 25% dari modal.
\\(u= 25\\%\\)
Harga jual belum diketahui. Dengan hanya mengetahui persentase keuntungan, modal belum dapat ditentukan secara pasti.
Pernyataan (2) SAJA tidak cukup.

Pernyataan (1) dan (2) bersama-sama:
Diketahui:
\\(HJ= \\text{Rp}25.000\\)
\\(u= 25\\%\\)
\\(HJ= M(1 + u)\\)
\\(\\text{Rp}25.000 = M(1 + 25\\%)\\)
\\(M = \\frac{\\text{Rp}25.000}{1 + 25\\%}\\)
\\(M = \\frac{\\text{Rp}25.000}{1 + 0,25}\\)
\\(M = \\frac{\\text{Rp}25.000}{1,25}\\)
\\(M= \\text{Rp}20.000\\)
Jadi, kedua pernyataan bersama-sama cukup untuk menentukan modal penjual, tetapi masing-masing pernyataan saja tidak cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Geometri` },
    soal: [
      {
        nomor: 44,
        tipe: 'pg',
        pertanyaan: `Sebuah aula berbentuk persegi akan dipasangi keramik. Berapakah luas lantai aula tersebut?
(1) Panjang salah satu sisi aula adalah 15 meter
(2) Lebar aula tersebut adalah 15 meter
Pilihlah informasi yang dapat digunakan untuk menjawab pertanyaan`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'D',
        pembahasan: `Diketahui aula berbentuk persegi. Luas persegi dapat dihitung dengan rumus
\\(L= s\\times s\\)
dengan \\(s\\) adalah panjang sisi persegi

Pernyataan (1):
Panjang salah satu sisi aula adalah 15 meter
\\(s= 15\\)
Maka luas aula:
\\(L= s\\times s\\)
\\(L= 15 \\times 15\\)
\\(L= 225 m^{2}\\)
Pernyataan (1) SAJA cukup.

Pernyataan (2):
Lebar aula tersebut adalah 15 meter
Pada bangun persegi, seluruh sisinya memiliki panjang yang sama, sehingga
\\(s= 15\\)
Maka luas aula:
\\(L= s\\times s\\)
\\(L= 15 \\times 15\\)
\\(L= 225 m^{2}\\)
Pernyataan (2) SAJA cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - JKW (Jarak, Kecepatan, Waktu)` },
    soal: [
      {
        nomor: 45,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut!
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|} \\hline \\textbf{Jenis} & \\textbf{Waktu} & \\textbf{Kecepatan} \\\\ \\hline \\text{Mobil X} & p & \\text{70 km/jam} \\\\ \\hline \\text{Mobil Y} & q & \\text{50 km/jam} \\\\ \\hline \\end{array}\\)
Berapa jarak yang ditempuh oleh Mobil Y?
Pilihlah informasi yang dapat digunakan untuk menjawab pertanyaan
(1) Mobil Y menempuh jarak yang sama dengan Mobil X
(2) Mobil Y menempuh perjalanan selama 5 jam`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Jarak tempuh diperoleh dengan mengalikan kecepatan dan waktu:
INGAT:
⟦gambar:gambar/jadiasn/cpns2027-tiu-jkw-s01-pembahasan-1.png⟧

\\(J= K\\times W\\)

Pernyataan (1): Mobil Y menempuh jarak yang sama dengan Mobil X.
\\(J_{x}= 70 \\times p\\)
Karena \\(p\\) tidak diketahui, jarak Mobil X juga belum dapat diketahui secara numerik. Maka, pernyataan (1) SAJA tidak cukup untuk menjawab pertanyaan.

Pernyataan (2): Mobil Y menempuh perjalanan selama 5 jam.
\\(J_{y}= 50 \\times 5 = 250\\) km
Jadi, pernyataan (2) SAJA cukup`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - Perbandingan Senilai dan Berbalik` },
    soal: [
      {
        nomor: 46,
        tipe: 'pg',
        pertanyaan: `Perhatikan tabel berikut.
Kelompok mesin A dan kelompok mesin B digunakan untuk menyelesaikan target pesanan masing-masing.
\\(\\def\\arraystretch{1.4}\\begin{array}{|l|c|c|} \\hline \\textbf{Kelompok Mesin} & \\textbf{Jumlah Mesin} & \\textbf{Waktu Produksi} \\\\ \\hline \\text{Kelompok mesin A} & \\text{6 mesin} & \\text{18 jam} \\\\ \\hline \\text{Kelompok mesin B} & x\\text{ mesin} & t\\text{ jam} \\\\ \\hline \\end{array}\\)

Jika laju produksi setiap mesin sama, apakah kelompok mesin B dapat menyelesaikan target pesanannya dalam waktu maksimal 9 jam?
Pilihlah informasi yang dapat digunakan untuk menjawab pertanyaan tersebut!
(1) Kelompok mesin B terdiri dari 12 mesin
(2) Kelompok mesin B terdiri dari 12 mesin dan target pesanannya sama dengan kelompok mesin A`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'B',
        pembahasan: `Pernyataan (1):
Kelompok mesin B terdiri dari 12 mesin, tetapi jumlah pesanan tidak diketahui. Oleh karena itu, waktu yang diperlukan untuk menyelesaikan pesanan belum dapat ditentukan.
Jadi, pernyataan (1) saja tidak cukup.

Pernyataan (2):
Kelompok mesin B terdiri dari 12 mesin dan target pesanannya sama dengan kelompok mesin A
Diketahui:
Karena target pesanan sama, maka dapat diselesaikan dengan cara perbandingan berbalik nilai.
\\(t = \\frac{6 \\times 18}{12}\\)
\\(t = \\frac{18}{2}\\)
\\(t= 9\\)
Karena \\(9 \\le 9\\), maka kelompok mesin B dapat menyelesaikan pesanan dalam waktu maksimal 9 jam.
Jadi, pernyataan (2) saja cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Numerik > Kecukupan Data > Soal Cerita - VDW (Volume, Debit, Waktu)` },
    soal: [
      {
        nomor: 47,
        tipe: 'pg',
        pertanyaan: `Sebuah bak air memiliki dua lubang pembuangan dengan diameter berbeda. Kedua lubang dibuka secara bersamaan sehingga air keluar dengan debit yang berbeda. Berapa waktu yang diperlukan hingga bak tersebut kosong?
(1) Volume air dalam bak adalah \\(V= 9.000\\) liter.
(2) Lubang pertama memiliki debit \\(D_{1} = 150\\) liter/menit dan lubang kedua \\(D_{2} = 50\\) liter/menit.`,
        opsi: [
          { label: 'A', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup.` },
          { label: 'B', teks: `Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup.` },
          { label: 'C', teks: `KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.` },
          { label: 'D', teks: `Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup` },
          { label: 'E', teks: `Pernyataan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan.` },
        ],
        kunci: 'C',
        pembahasan: `Diketahui:
\\(V= 9.000\\) liter
\\(D_{1} = 150\\) liter/menit
\\(D_{2} = 50\\) liter/menit
Ditanyakan:
\\(W=?\\)
INGAT:
Vas DeWi

⟦gambar:gambar/jadiasn/cpns2027-tiu-vdw-s01-pembahasan-1.png⟧

Hubungan pada segitiga Vas DeWi:
\\(V= D\\times W\\)
\\(D = \\frac{V}{W}\\)
\\(W = \\frac{V}{D}\\)
Evaluasi Pernyataan (1)
Pernyataan (1) hanya memberikan volume air dalam bak.
\\(W = \\frac{V}{D_{\\text{total}}}\\)
Nilai debit total belum diketahui, sehingga waktu pengosongan belum dapat ditentukan secara tunggal.
Kesimpulan: Pernyataan (1) SAJA tidak cukup.

Evaluasi Pernyataan (2)
Karena kedua lubang dibuka secara bersamaan, debit total adalah jumlah debit kedua lubang.
\\(D_{\\text{total}}= D_{1} + D_{2}\\)
\\(D_{\\text{total}}= 150 + 50\\)
\\(D_{\\text{total}}= 200\\) liter/menit
Namun, volume air belum diketahui, sehingga waktu pengosongan belum dapat ditentukan secara tunggal.
Kesimpulan: Pernyataan (2) SAJA tidak cukup.

Evaluasi Pernyataan (1) dan (2) Bersama-sama
Jika kedua pernyataan digabungkan, volume dan debit total telah diketahui.
\\(W = \\frac{V}{D_{\\text{total}}}\\)
\\(W = \\frac{9000}{200}\\)
\\(W= 45\\) menit
Jadi, kedua pernyataan bersama-sama cukup untuk menentukan waktu pengosongan bak, tetapi masing-masing pernyataan secara terpisah tidak cukup.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Analogi` },
    soal: [
      {
        nomor: 48,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar yang tepat untuk menggantikan tanda tanya "?", sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Berdasarkan pasangan gambar yang diketahui, didapatkan hubungan sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-1.png⟧

Dengan mengaplikasikan hubungan yang sama, didapatkan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-analogi-s01-pembahasan-2.png⟧`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Ketidaksamaan` },
    soal: [
      {
        nomor: 49,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'C',
        pembahasan: `Kita perhatikan keseluruhan gambar. Perhatikan:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-pembahasan-1.png⟧

Objek diputar-putar dan urutan objek-objek sama. Bisa lihat urutan objek searah jarum jam yaitu kotak, bulan, lingkaran, segitiga. Maka yang berbeda adalah
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s01-pembahasan-2.png⟧`,
        status: 'direview',
      },
      {
        nomor: 50,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'C',
        pembahasan: `Perhatikanlah perbedaan di bawah ini:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s02-pembahasan-1.png⟧`,
        status: 'direview',
      },
      {
        nomor: 51,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s03-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'B',
        pembahasan: `Pada susunan gambar tersebut, terlihat pola paritas (ganjil–genap) pada jumlah bidang berwarna hitam. Opsi B memiliki jumlah bidang hitam genap, sedangkan keempat opsi lainnya memiliki jumlah bidang hitam ganjil.

Karena pola yang konsisten pada matriks mengharuskan gambar yang melengkapi susunan memiliki jumlah bidang hitam genap, maka pilihan yang sesuai hanyalah opsi B.`,
        status: 'direview',
      },
      {
        nomor: 52,
        tipe: 'pg',
        pertanyaan: `Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s04-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `A` },
          { label: 'B', teks: `B` },
          { label: 'C', teks: `C` },
          { label: 'D', teks: `D` },
          { label: 'E', teks: `E` },
        ],
        kunci: 'E',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-ketidaksamaan-s04-pembahasan-1.png⟧

Berdasarkan jumlah sisinya, gambar A berpasangan dengan gambar C dan gambar B berpasangan dengan gambar D. Sedangkan gambar E tidak berpasangan.
Jadi yang berbeda adalah gambar E.`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Serial` },
    soal: [
      {
        nomor: 53,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar berikutnya dari seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-soal.png⟧

⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-pembahasan-2.png⟧
1. Berputar 90 derajat searah jarum jam
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s01-pembahasan-3.png⟧
2. Berputar 90 derajat berlawanan arah jarum jam
3. Objek lingkaran dan objek lingkaran berubah warna dari putih ke hitam, dari hitam ke putih

Maka jawabannya A`,
        status: 'direview',
      },
      {
        nomor: 54,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar berikutnya dari seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s02-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Terdapat dua pola jumlah objek yang berjalan secara bersamaan.
Jumlah bintang berkurang satu pada setiap kotak: 4, 3, 2, 1, sehingga kotak kelima tidak memiliki bintang.
Jumlah bulan sabit bertambah dua pada setiap kotak: 0, 2, 4, 6, sehingga kotak kelima memiliki 8 bulan sabit.

Opsi A menampilkan 8 bulan sabit tanpa bintang. Jadi, jawaban yang benar adalah A.`,
        status: 'direview',
      },
      {
        nomor: 55,
        tipe: 'pg',
        pertanyaan: `Tentukanlah gambar berikutnya dari seri gambar di bawah ini!
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Berlaku pola sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-serial-s03-pembahasan-1.png⟧`,
        status: 'direview',
      },
    ],
  },
  {
    stimulus: { judul: `Figural > Figural Matriks` },
    soal: [
      {
        nomor: 56,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s01-opsi-e.png⟧` },
        ],
        kunci: 'B',
        pembahasan: `Setiap baris dan kolom memiliki bangun datar bintang, lingkaran besar, lingkaran kecil, segitiga, dan persegi panjang. Masing-masing bangun datar bergesar searah jarum jam. Bangun datar yang berwarna hitam pada masing-masing kotak mengikuti pola berikut:
Lingkaran kecil → Segitiga → Persegi panjang → Bintang → Lingkaran besar`,
        status: 'direview',
      },
      {
        nomor: 57,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Perhatikan bahwa jumlah unsur merupakan bilangan-bilangan prima berurutan, sebagai berikut:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s02-pembahasan-1.png⟧`,
        status: 'direview',
      },
      {
        nomor: 58,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-opsi-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-pembahasan-1.png⟧

Perhatikan bagian bangun datar di tengah masing-masing kotak terlebih dahulu (yang dilingkari merah). Setiap baris memiliki aturan sebagai berikut:
• Setiap baris gambar terdiri atas masing-masing 1 dari 3 macam, yaitu segitiga, lingkaran, dan persegi.
• Setiap baris gambar terdiri atas masing-masing 1 dari 3 warna, yaitu putih, abu-abu, dan hitam.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-pembahasan-2.png⟧

Maka pilihan yang memungkinkan setelah eliminasi opsi adalah A dan B.

⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-pembahasan-3.png⟧

Sekarang perhatikan bagian bangun datar di kiri atas masing-masing kotak (yang dilingkari merah). Setiap baris memiliki aturan yang sama seperti sebelumnya yaitu:
• Setiap baris gambar terdiri atas masing-masing 1 dari 3 macam, yaitu segitiga, lingkaran, dan persegi.
• Setiap baris gambar terdiri atas masing-masing 1 dari 3 warna, yaitu putih, abu-abu, dan hitam.
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s03-pembahasan-4.png⟧

Sehingga jika dikombinasikan adalah segitiga hitam di bagian tengah kotak dan lingkaran hitam di bagian kiri atas hitam. Opsi yang memiliki kombinasi ini adalah opsi A`,
        status: 'direview',
      },
      {
        nomor: 59,
        tipe: 'pg',
        pertanyaan: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-soal.png⟧`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-opsi-e.png⟧` },
        ],
        kunci: 'D',
        pembahasan: `Perhatikan baris pertama:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-1.png⟧

Perhatikan baris kedua:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-2.png⟧

Maka baris ketiga:
⟦gambar:gambar/jadiasn/cpns2027-tiu-figural-matriks-s04-pembahasan-3.png⟧`,
        status: 'direview',
      },
    ],
  },
];
