import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Literasi dalam Bahasa Indonesia (LBI) UTBK-SNBT 2027.
 *
 * Sumber: dokumen internal "Contoh Soal UTBK" (bagian LBI, 8 soal; semuanya dipasang). Dokumen itu TIDAK
 * memuat kunci dan pembahasan, jadi semuanya disusun ulang (soal hitungan dicek dengan Python) dan
 * berstatus 'draft' sampai diperiksa tim akademik. Salah ketik jelas di sumber diperbaiki ("indicator"
 * menjadi "indikator", "zat perisai" menjadi "zat perisa", huruf kapital yang keliru, dan "Ar C = 12 dan
 * O = 16" menjadi "Ar C = 12 dan Ar O = 16").
 *
 * Puisi di soal no. 2: sumber menyebutnya "Tanda-Tanda" karya Taufiq Ismail, tetapi keempat lariknya tidak
 * ditemukan di puisi Taufiq Ismail yang judulnya mirip, "Membaca Tanda-Tanda" (bertema kerusakan alam).
 * Atas persetujuan user (15 Okt 2026), judul dan nama penyair tidak ditampilkan; stimulusnya diberi judul
 * "Penggalan Puisi" sampai tim riset memberi sumbernya.
 */
export const contohLBI: Kelompok[] = [
  // ── Menggali dan mengungkapkan informasi teks - Informasi eksplisit teks umum ────
  {
    stimulus: {
      judul: 'Bacaan · Susu dan Kandungan Gizinya',
      isi: `Susu merupakan minuman bergizi tinggi yang dibutuhkan oleh balita untuk dapat tumbuh dan berkembang secara optimal. Namun, susu sering kali digolongkan sebagai minuman yang berharga cukup mahal, terutama sediaan susu yang telah mengalami berbagai proses pengolahan. Di pasaran, susu tersedia dalam bentuk minuman kemasan yang biasanya telah ditambahkan sukrosa serta zat perisa tertentu untuk memberikan variasi rasa. Kandungan gizi dalam susu sangat dipengaruhi oleh jenis ternak yang menghasilkannya, jenis makanan yang dikonsumsi ternak, dan tingkat kesehatan ternak. Setiap 100 mL susu sapi murni rata-rata dapat menghasilkan energi sekitar 259 kJ.

Umumnya, kandungan susu sapi murni menurut berat adalah 87% air, 3,7% lemak, 3,5% protein, 4,9% laktosa, 0,07% mineral, dan sisanya berupa berbagai jenis vitamin, enzim, dan lain-lain. Mineral yang terdapat dalam susu sapi murni di antaranya adalah kalsium, fosfor, natrium, besi, tembaga, dan seng. Kalsium dan fosfor merupakan mineral penting untuk pertumbuhan tulang dan gigi.

Susu juga mengandung vitamin yang larut dalam lemak, yaitu vitamin A, D, E, dan K, serta vitamin yang larut dalam air, yaitu vitamin B dan C. Selain itu, di dalam susu juga terdapat beberapa jenis enzim, seperti peroksidase, katalase, fosfatase, dan lipase. Lipase berfungsi untuk menghidrolisis lipid. Di antara enzim-enzim tersebut, peroksidase dan fosfatase umumnya digunakan sebagai indikator kecukupan pasteurisasi susu karena kedua enzim ini akan rusak pada suhu pasteurisasi, sementara vitamin, mineral, dan enzim lain tidak mengalami perubahan.

(Diadaptasi dari berbagai sumber)`,
    },
    soal: [
      // contoh hal. 41, Informasi eksplisit teks umum no. 1
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Simbol salah satu mineral yang terkandung dalam susu sesuai dengan bacaan di atas adalah...`,
        opsi: [
          { label: 'A', teks: `F` },
          { label: 'B', teks: `N` },
          { label: 'C', teks: `Be` },
          { label: 'D', teks: `Cu` },
          { label: 'E', teks: `Se` },
        ],
        kunci: 'D',
        pembahasan: `Submateri: Menggali dan mengungkapkan informasi teks - Informasi eksplisit teks umum.
Bacaan menyebut mineral dalam susu sapi murni: kalsium, fosfor, natrium, besi, tembaga, dan seng. Simbol unsurnya: Ca, P, Na, Fe, Cu, dan Zn.
Dari pilihan yang ada, hanya Cu (tembaga) yang termasuk daftar itu. F (fluor), N (nitrogen), Be (berilium), dan Se (selenium) tidak disebut sebagai mineral dalam bacaan.
Jawaban: D`,
        status: 'draft',
      },
    ],
  },
  // ── Menginterpretasi makna dan proses dalam teks eksplanatif dan sastra - Menemukan tema/makna dalam teks sastra ────
  {
    stimulus: {
      judul: 'Penggalan Puisi',
      isi: `Ada tanda-tanda yang salah kita baca
Ada peringatan yang tak kita gubris
Ada yang berubah, ada yang punah
Ada yang tak kunjung sembuh`,
    },
    soal: [
      // contoh hal. 41, Menemukan tema/makna dalam teks sastra no. 1
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Larik “Ada yang tak kunjung sembuh” dalam konteks kritik sosial yang dibangun penyair paling tepat dimaknai sebagai...`,
        opsi: [
          { label: 'A', teks: `Wabah penyakit fisik yang mematikan di suatu wilayah.` },
          { label: 'B', teks: `Ketidakmampuan alam beregenerasi akibat polusi industri.` },
          { label: 'C', teks: `Masalah moral dan ketidakadilan yang sudah mendarah daging.` },
          { label: 'D', teks: `Kesedihan mendalam individu yang kehilangan harapan hidup.` },
          { label: 'E', teks: `Kegagalan sistem medis dalam menangani krisis kesehatan global.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Menginterpretasi makna dan proses dalam teks eksplanatif dan sastra - Menemukan tema/makna dalam teks sastra.
Larik "Ada yang tak kunjung sembuh" menutup rangkaian larik tentang tanda-tanda yang salah dibaca, peringatan yang tidak digubris, serta hal yang berubah dan punah. Semua larik itu menyoroti sikap "kita" yang terus mengabaikan peringatan, jadi "sembuh" dipakai sebagai kiasan, bukan sakit badan.
Yang "tak kunjung sembuh" adalah penyakit sosial yang lama dibiarkan: masalah moral dan ketidakadilan yang sudah mendarah daging (opsi C).
Opsi B paling mengecoh karena larik "ada yang punah" bisa dibaca sebagai kerusakan alam. Namun, puisi tidak menyebut polusi industri, dan soal meminta makna dalam konteks kritik sosial yang dibangun penyair, yaitu sikap manusia yang tidak mau membaca tanda. Opsi A dan E memaknai larik itu secara harfiah sebagai penyakit atau kegagalan layanan medis. Opsi D membahas perasaan individu, padahal konteksnya kritik sosial.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  // ── Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora ────
  {
    stimulus: {
      judul: 'Bacaan · Subsidi Produksi Barang Pokok',
      isi: `Untuk menjaga keterjangkauan harga barang pokok, pemerintah memberikan subsidi produksi kepada sejumlah produsen. Subsidi tersebut diberikan untuk membantu mengurangi beban biaya produksi sehingga produsen dapat mempertahankan atau meningkatkan jumlah barang yang diproduksi. Pasar barang tersebut diasumsikan berada dalam kondisi persaingan sempurna, dengan jumlah penjual dan pembeli yang banyak serta harga terbentuk melalui mekanisme pasar.`,
    },
    soal: [
      // contoh hal. 42, unsur eksplanatif no. 1
      {
        nomor: 3,
        tipe: 'pg',
        pertanyaan: `Dalam kondisi pasar persaingan sempurna, jika pemerintah memberikan subsidi produksi kepada produsen barang pokok, maka dampak yang akan terlihat pada kurva keseimbangan adalah...`,
        opsi: [
          { label: 'A', teks: `Kurva penawaran bergeser ke kiri, harga naik, kuantitas turun.` },
          { label: 'B', teks: `Kurva penawaran bergeser ke kanan, harga turun, kuantitas naik.` },
          { label: 'C', teks: `Kurva permintaan bergeser ke kanan, harga naik, kuantitas naik.` },
          { label: 'D', teks: `Kurva permintaan bergeser ke kiri, harga turun, kuantitas turun.` },
          { label: 'E', teks: `Titik keseimbangan tetap, namun produsen mendapatkan laba super normal.` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
Subsidi produksi mengurangi beban biaya produksi, sehingga produsen bersedia menawarkan lebih banyak barang pada setiap tingkat harga. Kurva penawaran bergeser ke kanan.
Pada pasar persaingan sempurna, penawaran yang bertambah menurunkan harga keseimbangan dan menaikkan kuantitas keseimbangan (opsi B).
Subsidi produksi tidak langsung mengubah permintaan (opsi C dan D), dan titik keseimbangan tidak tetap karena kurva penawaran bergeser (opsi E). Opsi A adalah dampak pajak, bukan subsidi.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Denyut Jantung sebagai Gejala Periodik',
      isi: `Jantung manusia bekerja secara berulang untuk memompa darah ke seluruh tubuh. Aktivitas ini dapat diamati melalui jumlah denyutan jantung dalam satu menit. Dalam kajian fisika, denyutan jantung dapat dianalisis sebagai fenomena periodik yang memiliki frekuensi dan periode. Kedua besaran tersebut digunakan untuk menggambarkan banyaknya siklus yang terjadi setiap detik dan waktu yang diperlukan untuk menyelesaikan satu siklus. Jantung seorang pasien berdenyut 120 kali per menit (takikardia).`,
    },
    soal: [
      // contoh hal. 42, unsur eksplanatif no. 2
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: `Jika satu denyutan dianggap sebagai satu siklus gelombang, maka frekuensi (f) dan periode (T) detak jantung tersebut dalam satuan SI adalah...`,
        opsi: [
          { label: 'A', teks: `\\(f = 2\\ \\text{Hz}\\) dan \\(T = 0,5\\ \\text{s}\\)` },
          { label: 'B', teks: `\\(f = 0,5\\ \\text{Hz}\\) dan \\(T = 2\\ \\text{s}\\)` },
          { label: 'C', teks: `\\(f = 120\\ \\text{Hz}\\) dan \\(T = 0,008\\ \\text{s}\\)` },
          { label: 'D', teks: `\\(f = 1\\ \\text{Hz}\\) dan \\(T = 1\\ \\text{s}\\)` },
          { label: 'E', teks: `\\(f = 60\\ \\text{Hz}\\) dan \\(T = 0,016\\ \\text{s}\\)` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
Jantung berdenyut 120 kali per menit, artinya 120 siklus dalam 60 detik.
Frekuensi: \\(f = \\frac{120}{60\\ \\text{s}} = 2\\ \\text{Hz}\\).
Periode: \\(T = \\frac{1}{f} = \\frac{1}{2} = 0,5\\ \\text{s}\\).
Opsi C dan E memakai satuan per menit atau angka denyut tanpa mengubahnya ke satuan SI (hertz dan sekon). Opsi B tertukar antara frekuensi dan periode.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Es Kutub dan Keseimbangan Energi Bumi',
      isi: `Wilayah kutub memiliki hamparan es dan salju yang berperan penting dalam menjaga keseimbangan suhu Bumi. Permukaan es memiliki kemampuan untuk memantulkan sebagian besar radiasi matahari kembali ke angkasa. Namun, peningkatan suhu global menyebabkan luas tutupan es di wilayah kutub terus berkurang. Perubahan ini dapat memengaruhi keseimbangan energi Bumi dan memicu proses umpan balik dalam sistem iklim.`,
    },
    soal: [
      // contoh hal. 42, unsur eksplanatif no. 3
      {
        nomor: 5,
        tipe: 'pg',
        pertanyaan: `Fenomena Ice-Albedo Feedback menjelaskan bahwa pencairan es di kutub akan mempercepat pemanasan global. Hal ini terjadi karena...`,
        opsi: [
          { label: 'A', teks: `Es yang mencair melepaskan gas oksigen yang memerangkap panas.` },
          { label: 'B', teks: `Permukaan laut yang gelap menyerap lebih banyak radiasi matahari daripada es.` },
          { label: 'C', teks: `Volume air laut yang bertambah mendinginkan atmosfer secara mendadak.` },
          { label: 'D', teks: `Air laut hasil pencairan es mengandung kadar garam yang sangat tinggi.` },
          { label: 'E', teks: `Es yang mencair meningkatkan tekanan udara di wilayah ekuator.` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
Bacaan menyebut permukaan es memantulkan sebagian besar radiasi matahari kembali ke angkasa. Ketika es mencair, permukaan yang terbuka adalah laut yang lebih gelap.
Permukaan yang lebih gelap memantulkan lebih sedikit dan menyerap lebih banyak radiasi matahari, sehingga suhu naik dan pencairan makin cepat (umpan balik yang memperkuat pemanasan). Itulah opsi B.
Opsi A, C, D, dan E memuat penjelasan yang tidak sesuai dengan mekanisme pantulan radiasi (albedo) yang diuraikan bacaan.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Mol, Massa, dan Jumlah Partikel',
      isi: `Dalam suatu percobaan kimia, seorang siswa mempelajari hubungan antara massa zat, jumlah mol, dan jumlah partikel penyusunnya. Jumlah molekul dalam suatu sampel gas dapat ditentukan berdasarkan massa gas, massa molar, dan konstanta Avogadro. Konsep ini digunakan dalam perhitungan stoikiometri untuk mengetahui jumlah partikel zat meskipun partikel tersebut tidak dapat dihitung secara langsung.`,
    },
    soal: [
      // contoh hal. 42-43, unsur eksplanatif no. 4
      {
        nomor: 6,
        tipe: 'pg',
        pertanyaan: `Sebuah tabung berisi 22 gram gas karbon dioksida (\\(\\text{CO}_{2}\\)). Jika diketahui \\(A_r\\) C = 12 dan \\(A_r\\) O = 16, berapakah jumlah molekul yang terdapat dalam tabung tersebut? (Bilangan Avogadro \\(L = 6,02 \\times 10^{23}\\))`,
        opsi: [
          { label: 'A', teks: `\\(3,01 \\times 10^{22}\\) molekul` },
          { label: 'B', teks: `\\(6,02 \\times 10^{22}\\) molekul` },
          { label: 'C', teks: `\\(3,01 \\times 10^{23}\\) molekul` },
          { label: 'D', teks: `\\(6,02 \\times 10^{23}\\) molekul` },
          { label: 'E', teks: `\\(1,204 \\times 10^{24}\\) molekul` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
Massa molar \\(\\text{CO}_{2}\\) = \\(12 + 2 \\times 16 = 44\\) g/mol.
Jumlah mol = \\(\\frac{22\\ \\text{g}}{44\\ \\text{g/mol}} = 0,5\\) mol.
Jumlah molekul = mol \\(\\times\\) bilangan Avogadro = \\(0,5 \\times 6,02 \\times 10^{23} = 3,01 \\times 10^{23}\\) molekul.
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Distilasi Bertingkat Minyak Bumi',
      isi: `Dalam industri pengolahan minyak bumi, proses distilasi bertingkat digunakan untuk memisahkan berbagai senyawa hidrokarbon berdasarkan perbedaan titik didihnya. Setiap fraksi minyak bumi memiliki karakteristik fisik yang berbeda sehingga dapat dimanfaatkan untuk berbagai kebutuhan, seperti bahan bakar kendaraan, bahan baku industri, dan pelumas. Perbedaan sifat fisik tersebut berkaitan dengan karakteristik molekul masing-masing senyawa hidrokarbon.`,
    },
    soal: [
      // contoh hal. 43, unsur eksplanatif no. 5
      {
        nomor: 7,
        tipe: 'pg',
        pertanyaan: `Manakah di antara senyawa hidrokarbon berikut yang memiliki titik didih paling tinggi?`,
        opsi: [
          { label: 'A', teks: `Metana (\\(\\text{CH}_{4}\\))` },
          { label: 'B', teks: `Etana (\\(\\text{C}_{2}\\text{H}_{6}\\))` },
          { label: 'C', teks: `Propana (\\(\\text{C}_{3}\\text{H}_{8}\\))` },
          { label: 'D', teks: `n-Butana (\\(\\text{C}_{4}\\text{H}_{10}\\))` },
          { label: 'E', teks: `n-Pentana (\\(\\text{C}_{5}\\text{H}_{12}\\))` },
        ],
        kunci: 'E',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
Bacaan menyebut perbedaan titik didih berkaitan dengan karakteristik molekul. Pada hidrokarbon rantai lurus sejenis (alkana), makin panjang rantai karbon, makin besar massa molekul dan gaya tarik antarmolekul (gaya London), sehingga makin tinggi titik didihnya.
Urutan jumlah atom C: metana (1) < etana (2) < propana (3) < n-butana (4) < n-pentana (5). Titik didih tertinggi dimiliki n-pentana (opsi E), sekitar 36 derajat Celsius, sedangkan metana mendidih jauh lebih rendah (sekitar -162 derajat Celsius).
Jawaban: E`,
        status: 'draft',
      },
    ],
  },
  {
    stimulus: {
      judul: 'Bacaan · Hubungan Diplomatik Majapahit',
      isi: `Pada masa Kerajaan Majapahit, hubungan dengan kerajaan-kerajaan lain menjadi bagian penting dalam memperluas pengaruh politik dan perdagangan. Selain menjalin hubungan dengan wilayah-wilayah di Nusantara, Majapahit juga melakukan hubungan diplomatik dengan sejumlah kerajaan di kawasan Asia Tenggara. Hubungan tersebut mencerminkan adanya berbagai bentuk interaksi politik antar kerajaan pada masa itu.`,
    },
    soal: [
      // contoh hal. 43, unsur eksplanatif no. 6
      {
        nomor: 8,
        tipe: 'pg',
        pertanyaan: `Strategi “Mitreka Satata” yang diterapkan Majapahit pada masa Gajah Mada menunjukkan bahwa hubungan Majapahit dengan kerajaan di luar Nusantara (seperti Siam dan Champa) adalah sebagai...`,
        opsi: [
          { label: 'A', teks: `Wilayah jajahan yang harus membayar upeti paksa.` },
          { label: 'B', teks: `Musuh bebuyutan yang harus dihancurkan melalui militer.` },
          { label: 'C', teks: `Negara sahabat yang kedudukannya sederajat.` },
          { label: 'D', teks: `Bagian integral dari sistem pemerintahan pusat di Majapahit.` },
          { label: 'E', teks: `Kerajaan bawahan yang memiliki otonomi terbatas, tetapi tetap berada di bawah kendali politik Majapahit.` },
        ],
        kunci: 'C',
        pembahasan: `Submateri: Memahami Informasi - Unsur eksplanatif teks populer saintek dan sosial humaniora.
"Mitreka Satata" berarti persahabatan atau hubungan antarnegara yang sederajat. Dalam bacaan, strategi ini dipakai untuk hubungan dengan kerajaan di luar Nusantara seperti Siam dan Champa, berbeda dengan wilayah Nusantara yang dipersatukan di bawah pengaruh Majapahit.
Jadi kerajaan-kerajaan itu diperlakukan sebagai negara sahabat yang kedudukannya sederajat (opsi C).
Opsi A, B, D, dan E menggambarkan hubungan jajahan, permusuhan, atau penguasaan politik, yang bertentangan dengan makna "mitra yang sederajat".
Jawaban: C`,
        status: 'draft',
      },
    ],
  },
];
