import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal TKA SMA 2026, mata uji Bahasa Indonesia: 20 soal dari BAB V (5.2)
 * laporan "Laporan TKA SMA Tahun 2026" (Product Management PT Cerebrum
 * Edukanesia Nusantara, Juni 2026).
 *
 * Ditulis tangan, BUKAN keluaran skrip/ke-data.mjs.
 *
 * Asal tiap bagian:
 *   - bacaan, soal, opsi, kunci, dan tingkat kesulitan: dari dokumen, nomor soal
 *     sama dengan nomor di dokumen; label "Materi" di pembahasan memakai label
 *     kolom Materi di BAB V;
 *   - pembahasan: TIDAK ada di dokumen, jadi disusun ulang dari teks bacaannya
 *     dan berstatus 'draft'. Jangan dinaikkan ke 'direview' atau 'final' sebelum
 *     diperiksa tim akademik.
 *
 * Pemetaan tipe soal: PG = 'pg'; PGK Kategori = 'pg_kategori' (kunci per
 * pernyataan menurut urutan opsi); PGK MCMA = 'pg_kompleks' (kunci berisi semua
 * huruf yang benar). Isi dokumen: 9 PG, 6 PGK Kategori (3, 7, 10, 13, 17, 19),
 * 5 PGK MCMA (5, 12, 16, 18, 20).
 *
 * Di dokumen, setiap soal mengulang bacaannya penuh. Di sini soal yang memakai
 * bacaan yang sama dikelompokkan di bawah satu stimulus, jadi urutan tampilnya
 * per bacaan, bukan menurut nomor. Enam bacaan: lautan dan plastik (soal 1, 5, 6,
 * 19), cerpen "Seragam" (2, 13, 20), teknologi hijau (3, 11, 14, 18), ekonomi
 * digital dan UKM (4, 10, 17), "Piala di Atas Dangau" (7, 12, 15), Rhodamin B
 * (8, 9, 16).
 *
 * Teks mengikuti dokumen apa adanya, termasuk salah ketik kecil di sumber
 * ("musin maddongi" di opsi A soal 7, "kleasifikasi" di opsi C soal 10). Dua
 * kejanggalan lain ditandai dengan kurung siku di teks: soal 4 tidak punya
 * kalimat pertanyaan di dokumen, dan opsi B soal 12 terpotong di sumber (berakhir
 * "untuk mengikuti"). Bacaan "Seragam" di soal 2 dan 13 berakhir dengan baris
 * sumber "(Kutipan Cerpen Seragam ...)", sedangkan di soal 20 baris itu tidak
 * ada; di sini baris itu ikut tampil di ketiga soalnya karena stimulusnya satu.
 * Satu perbaikan penyuntingan di bacaan itu: di dokumen kalimat "...melihat saya
 * mulai menangis dan menggigil antara kesakitan dan kedinginan" terbelah oleh
 * titik dan pergantian halaman ("menangis." lalu "dan menggigil ..."); di sini
 * disambung kembali menjadi satu kalimat.
 *
 * Gambar ada di public/gambar/cerebrum/ dengan nama tka-ind-<nomor>-<bagian>
 * (lima bagan pilihan jawaban soal 4).
 */

const teksPlastik = `Lautan mengalami ancaman pemanasan dan menjadi semakin asam karena kita terus memompa lebih banyak CO₂ ke atmosfer. Selain itu, lautan juga menghadapi ancaman lain dari manusia, yakni penggunaan plastik. Kehidupan modern saat ini didominasi oleh kemasan makanan berbahan plastik yang diolah dengan teknologi tinggi dan digunakan setiap hari oleh masyarakat. Dalam sebuah laporan telah disebutkan bahwa pada tahun 2050 sampah plastik di laut akan lebih banyak daripada jumlah ikan apabila kecenderungan ini terus berlanjut. Hal tersebut merupakan sebuah ancaman besar.

Dibutuhkan tindakan skala besar untuk berpindah dari kecenderungan tersebut mengingat banyak pihak yang terlibat dalam bidang pekerjaan ini. Masyarakat sektor swasta dan masyarakat sipil perlu mobilisasi untuk menangkap peluang ekonomi lain di luar dari pengelolaan plastik.

Solusi tersebut tidak mudah. Fakta bahwa harga minyak yang rendah mengakibatkan biaya yang dibutuhkan untuk daur ulang plastik jauh lebih mahal daripada memproduksi yang baru. Kondisi lain yang menunjukkan ekonomi di negara berkembang tumbuh lebih besar menjadikan penggunaan plastik juga meningkat. Solusi yang dibutuhkan adalah cara kita menggunakan plastik. Misalnya dengan mengurangi penggunaan plastik dalam kemasan atau menggunakannya kembali sebanyak yang kita bisa.

Produsen plastik juga dapat membantu dalam pengelolaan plastik, seperti memproduksi barang-barang plastik yang dapat digunakan kembali atau beralih ke plastik yang dapat dijadikan kompos. Solusi apa pun akan membawa perubahan besar dalam cara menggunakan produk yang terbuat dari plastik.`;

const teksSeragam = `Hampir 25 tahun lalu kami berpisah karena keluarga saya harus boyongan ke kota tempat kerja Ayah yang baru di luar pulau. Tak satupun barang tertinggal di rumah lama. Begitu juga dengan sahabatku, kami harus berpisah.

Bertemu dengannya setelah sekian lama, mengingatkan kembali pada pengalaman kami dahulu. Pengalaman yang menjadikan dia, walau tidak setiap waktu, selalu lekat di ingatan saya. Tentu dia mengingatnya pula, bahkan saya yakin rasa yang diidapnya lebih besar efeknya. Karena sebagai seorang sahabat, dia jelas jauh lebih tulus dan setia daripada saya. Tak terasa mata saya mulai berkaca-kaca.

Saat malam itu saya berada di sini, memperhatikannya belajar. Selesai belajar, dia menyuruh saya pulang karena hendak pergi mencari jangkrik. Saya langsung menyatakan ingin ikut, tapi dia keberatan. Ayah dan ibunya pun melarang. Saya sering mendengar cerita mengasyikan anak-anak beramai-ramai berangkat ke sawah selepas isya untuk mencari jangkrik. Sayang, Ayah tidak pernah membolehkan saya. Tapi malam itu saya nekat dan sahabat saya itu akhirnya tidak kuasa menolak. "Tidak ganti baju?" tanya saya heran begitu dia langsung memimpin untuk berangkat. Itu hari Jumat. Seragam coklat Pramuka yang dikenakannya sejak pagi masih akan terpakai untuk bersekolah sehari lagi. Dia memang tidak memiliki banyak pakaian hingga seragam sekolah biasa dipakai kapan saja. Tapi memakainya untuk pergi ke sawah mencari jangkrik, rasanya sangat tidak elok.

Saya mengambil alih obor dari tangannya. Rasanya belum terlalu lama kami berada di sana dan bumbung baru terisi beberapa ekor jangkrik ketika tiba-tiba angin berubah perangai. Kaget, pantat obor itu justru saya angkat tinggi-tinggi sehingga minyak mendorong sumbunya terlepas. Api dengan cepat berpindah membakar punggung saya! Terdengar teriakannya sembari melepaskan seragam coklatnya untuk dipakai menyabet punggung saya. Baju yang saya kenakan habis sepertiganya. Sahabat saya itu tanggap melingkupi tubuh saya dengan seragam coklatnya melihat saya mulai menangis dan menggigil antara kesakitan dan kedinginan. Sadar saya membutuhkan pertolongan secepatnya, dia menggendong saya lalu berlari sembari membujuk-bujuk saya untuk tetap tenang. Napasnya memburu kelelahan, tapi rasa tanggung jawab yang besar seperti memberinya kekuatan berlipat untuk tetap bersama saya.

(Kutipan Cerpen Seragam karya Aris Kurniawan Basuki dengan penyesuaian)`;

const teksTeknologiHijau = `(1) Perubahan iklim yang semakin nyata dan ancaman terhadap kelestarian bumi menuntut kita untuk mencari solusi efektif dalam menjaga keseimbangan alam. (2) Salah satu solusi yang paling menjanjikan adalah penggunaan teknologi hijau. (3) Teknologi hijau juga dikenal sebagai teknologi ramah lingkungan. (4) Teknologi ini merupakan inovasi yang dirancang untuk mengatasi berbagai tantangan lingkungan global, terutama terkait dengan perubahan iklim.

(1) Perubahan iklim, yang dipicu oleh peningkatan emisi gas rumah kaca akibat aktivitas manusia, menyebabkan cuaca ekstrem, suhu global yang meningkat, dan naiknya permukaan air laut. (2) Hal tersebut juga memicu deforestasi, polusi, dan mengancam keberagaman hayati di seluruh dunia. (3) Oleh karena itu, kita harus mengambil langkah tegas agar dampak perubahan iklim ini tidak semakin parah. (4) Teknologi hijau seperti energi terbarukan (tenaga surya, angin) dapat mengurangi ketergantungan pada bahan bakar fosil yang menjadi penyebab utama emisi gas rumah kaca planet ini.

(1) Teknologi hijau juga sangat penting dalam upaya adaptasi terhadap dampak perubahan iklim yang sudah tidak bisa dihindari. (2) Sistem pertanian presisi, infrastruktur tahan bencana alam, serta teknologi untuk menginvestigasi banjir dan kekeringan adalah contoh bagaimana teknologi hijau bisa membantu masyarakat beradaptasi dengan kondisi yang berubah.

(1) Dengan kondisi bumi yang semakin menghadapi tantangan besar, seperti pemanasan global, polusi, kelangkaan sumber daya, dan hilangnya keanekaragaman hayati, penerapan teknologi hijau adalah keharusan. (2) Melalui teknologi hijau, kita dapat mengurangi dampak negatif terhadap lingkungan dan memperbaiki kualitas hidup.

Sumber: https://www.rri.co.id/iptek/1281411/`;

const teksUkm = `Ekonomi digital telah membawa perubahan besar dalam berbagai aspek bisnis, terutama bagi Usaha Kecil dan Menengah (UKM). Dengan adanya teknologi digital, UKM kini memiliki peluang lebih besar untuk berkembang dan bersaing di pasar yang lebih luas. Transformasi ini didorong oleh beberapa faktor utama, seperti perkembangan e-commerce, sistem pembayaran digital, pemasaran berbasis data, serta pemanfaatan teknologi berbasis kecerdasan buatan (artificial intelligence).

Salah satu perubahan signifikan dalam ekonomi digital adalah kemudahan akses ke platform e-commerce. UKM yang sebelumnya hanya mengandalkan toko fisik kini dapat menjual produknya melalui berbagai marketplace daring. Hal ini memungkinkan mereka menjangkau konsumen di luar wilayah lokal, bahkan hingga ke pasar internasional. Dengan biaya operasional yang lebih rendah dibandingkan toko fisik, UKM dapat mengalokasikan dana untuk inovasi dan peningkatan kualitas produk. Selain itu, sistem pengiriman yang semakin efisien memungkinkan UKM memenuhi pesanan dengan lebih cepat dan tepat waktu.

Selain akses pasar yang lebih luas, sistem pembayaran digital juga telah meningkatkan efisiensi transaksi keuangan. Penggunaan dompet digital dan pembayaran nontunai tidak hanya mempermudah konsumen dalam berbelanja, tetapi juga membantu UKM dalam mencatat keuangan secara lebih akurat. Keuntungan lain dari ekonomi digital adalah strategi pemasaran berbasis data. Melalui analisis data pelanggan, UKM dapat memahami tren pasar dan perilaku konsumen dengan lebih baik. Misalnya, penggunaan iklan digital yang ditargetkan memungkinkan UKM menjangkau segmen pasar yang lebih spesifik sehingga efektivitas promosi meningkat.

Meskipun menawarkan banyak manfaat, transformasi digital juga menghadirkan tantangan. UKM harus mampu beradaptasi dengan perkembangan teknologi dan meningkatkan literasi digital agar tetap kompetitif. Selain itu, keamanan data menjadi aspek penting yang harus diperhatikan dalam menjalankan bisnis secara digital untuk menghindari risiko peretasan dan penyalahgunaan informasi pelanggan. Dengan segala peluang dan tantangannya, ekonomi digital telah menjadi faktor kunci dalam mendorong pertumbuhan UKM. Jika dikelola dengan baik, digitalisasi dapat menjadi pendorong utama bagi keberlanjutan dan daya saing usaha kecil di era modern ini.

(Sumber: Kementerian Koperasi dan UKM Republik Indonesia)`;

const teksDangau = `"E...gurumu itu orang desa ini juga. Pasti tahu bahwa saat ini musim maddongi (mengusir burung saat buah padi mulai menguning). Besok kau menghadap, sampaikan bahwa kau membantu Ayah di sawah. Nah, pasti gurumu mengerti mengapa kamu tidak ke sekolah."

Aku terpana. Jawaban Ayah benar-benar membuatku hampir menangis histeris. Bagaimana tidak. Lomba semakin dekat, sementara masih banyak materi yang belum aku paham. Terbayang aku akan hancur dan tidak bisa bersaing dengan siswa sekolah lain. Ingin rasanya aku berteriak agar Ayahku tahu bagaimana kacaunya pikiranku. Namun, aku sadar bahwa ini adalah perbuatan yang tidak akan menyelesaikan masalah. Malah akan semakin membuat Ayahku geram. Otakku terus berpikir untuk mencari solusi terbaik. Sambil berjalan mengikuti Ayah dari belakang, aku mulai menyusun strategi. "Bagaimana kalau aku ke rumah iyye-ku (nenek), menyampaikan masalahku ini. Ya, hanya dia yang mampu menundukkan Ayah."

Esok harinya, sepulang sekolah, kuayunkan sepedaku menuju rumah iyye-ku.

"Kenapa kamu lesu?" Iyye menanyakan keadaanku. Aku pun menceritakan semuanya kepada iyye.

"Ya sudah, tidak usah sedih. Nanti kusampaikan pada ayahmu. Kau ke dalam, makan dulu, baru pulang," ujar iyye-ku.

(Piala di Atas Dangau, Muhammad Isrul, dengan penyesuaian)`;

const teksRhodamin = `Teks 1

Rhodamin B adalah zat pewarna yang tersedia di pasar untuk industri tekstil. Zat ini sering disalahgunakan sebagai zat pewarna makanan dan kosmetik di berbagai negara. Jenis makanan yang mengandung Rhodamin B di antaranya kerupuk, terasi, dan makanan ringan. Zat ini juga banyak ditemukan pada kembang gula, sirup, manisan, dawet, bubur, ikan asap, dan cendol. Tampilan makanan yang menggunakan zat ini cenderung menarik dan terkesan menawarkan cita rasa tinggi sehingga ketika harga jualnya tidak semahal tampilannya, banyak yang tertarik untuk membeli dan mengonsumsinya. Zat ini paling berbahaya bila dikonsumsi karena menyebabkan gangguan pada fungsi hati, bahkan kanker hati. Apabila mengonsumsi makanan yang mengandung Rhodamin B, dalam tubuh akan terjadi penumpukan lemak sehingga lama-kelamaan jumlahnya akan terus bertambah. Dampaknya baru akan kelihatan setelah puluhan tahun kemudian. Jika sudah masuk dalam tubuh, akan mengendap pada jaringan hati dan lemak, tidak dapat dikeluarkan, dan dalam jangka waktu lama bisa bersifat karsinogenik.

Teks 2

Rhodamin B berbentuk serbuk kristal, berwarna hijau atau ungu kemerahan, tidak berbau, dan dalam larutan akan berwarna merah terang berpendar atau berfluoresensi. Rhodamin B merupakan zat warna golongan xanthenes dyes, dan digunakan pada industri tekstil dan kertas, sebagai pewarna kain, kosmetika, produk pembersih mulut, dan sabun. Rhodamin B memiliki berbagai nama lain, antara lain: Tetra ethyl rhodamin; Rheoninine B, D, & C; Red No. 19; Food Red 15; ADC Rhodamine B; Aizen Rhodamine; dan Brilliant Pink B. Rhodamin B mengandung senyawa klorin (Cl) yang merupakan senyawa halogen yang berbahaya dan reaktif. Jika tertelan, senyawa ini akan berusaha mencapai kestabilan dalam tubuh dengan cara mengikat senyawa lain dalam tubuh. Mengonsumsi bahan pangan yang mengandung Rhodamin B dalam jangka panjang dapat terakumulasi di dalam tubuh dan dapat menyebabkan gejala pembesaran hati dan ginjal, gangguan fungsi hati, kerusakan hati, gangguan fisiologis tubuh, bahkan dapat menyebabkan timbulnya kanker hati.`;

export const contohBahasaIndonesia: Kelompok[] = [
  // ── Bacaan 1: lautan dan plastik (soal 1, 5, 6, 19) ───────────────────
  {
    stimulus: { judul: 'Teks tentang ancaman bagi lautan', isi: teksPlastik },
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `Makna istilah mobilisasi pada paragraf kedua teks tersebut adalah....`,
        opsi: [
          { label: 'A', teks: `Bergerak bersama` },
          { label: 'B', teks: `Melangkah cepat` },
          { label: 'C', teks: `Beradu cepat` },
          { label: 'D', teks: `Mengatur Bersama` },
          { label: 'E', teks: `Berpikir Bersama` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Pemahaman Tekstual · Mengidentifikasi penggunaan kata serapan.
Pada paragraf kedua: "Masyarakat sektor swasta dan masyarakat sipil perlu mobilisasi untuk menangkap peluang ekonomi lain di luar dari pengelolaan plastik." Konteksnya, banyak pihak perlu dikerahkan atau digerakkan bersama-sama untuk menangkap peluang. Mobilisasi berarti pengerahan, jadi maknanya paling dekat dengan "bergerak bersama".
Melangkah cepat dan beradu cepat menekankan kecepatan atau persaingan, sedangkan mengatur bersama dan berpikir bersama menekankan perencanaan atau pemikiran; tidak ada yang sesuai dengan "mengerahkan pihak-pihak untuk bertindak".
Jawaban: A`,
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'pg_kompleks',
        tingkat: 'sedang',
        pertanyaan: `Mengapa lautan menghadapi ancaman pada 2050?

Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Sampah plastik di laut akan lebih banyak daripada jumlah ikan.` },
          { label: 'B', teks: `Lautan akan terus mengalami pemanasan dan semakin asam.` },
          { label: 'C', teks: `Manusia terus memompa lebih banyak CO₂ ke atmosfer.` },
          { label: 'D', teks: `Jumlah ikan yang terancam punah semakin banyak.` },
          { label: 'E', teks: `Penggunaan plastik terus meningkat dan tidak dikelola dengan baik` },
        ],
        kunci: 'A, E',
        pembahasan: `Materi: Pemahaman Tekstual · Mengidentifikasi informasi tersurat. Tipe: PGK MCMA.
Teks mengaitkan tahun 2050 dengan laporan bahwa sampah plastik di laut akan lebih banyak daripada ikan "apabila kecenderungan ini terus berlanjut". Kecenderungan itu dijelaskan di paragraf ketiga: penggunaan plastik meningkat (terutama di negara berkembang) dan biaya daur ulang jauh lebih mahal daripada produksi baru.
A. Benar: tersurat di paragraf pertama.
E. Benar: penggunaan plastik yang meningkat dan sulit dikelola/didaur ulang adalah penyebab kecenderungan itu.
B dan C. Salah: pemanasan, keasaman, dan pemompaan CO₂ adalah ancaman yang sudah terjadi sekarang, tidak dikaitkan dengan tahun 2050.
D. Salah: teks tidak menyebut ikan yang terancam punah.
Jawaban: A, E`,
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `Apa gagasan utama yang disampaikan pada paragraf pertama teks tersebut?`,
        opsi: [
          { label: 'A', teks: `Ancaman plastik terhadap lautan` },
          { label: 'B', teks: `Efek dari pemanasan laut` },
          { label: 'C', teks: `Kadar tingkat keasaman laut` },
          { label: 'D', teks: `Pemompaan CO₂ ke atmosfer` },
          { label: 'E', teks: `Ancaman bagi negara berkembang` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan ide pokok, tokoh, peristiwa, konflik, atau nilai.
Paragraf pertama membuka dengan pemanasan dan keasaman laut akibat CO₂, lalu "Selain itu" beralih ke ancaman lain dari manusia, yakni plastik: kemasan plastik yang dipakai setiap hari dan laporan bahwa pada 2050 sampah plastik di laut lebih banyak daripada ikan. Bagian terbesar paragraf membahas plastik, dan kalimat penutupnya ("Hal tersebut merupakan sebuah ancaman besar") merujuk ke sana. Gagasan utamanya: ancaman plastik terhadap lautan.
B, C, dan D hanya rincian pembuka paragraf. E tidak dibahas di paragraf pertama (negara berkembang baru muncul di paragraf ketiga).
Jawaban: A`,
        status: 'draft',
      },
      {
        nomor: 19,
        tipe: 'pg_kategori',
        tingkat: 'sulit',
        pertanyaan: `"Solusi tersebut tidak mudah."
Mengapa penulis menggunakan kalimat tersebut pada teks?
Tentukan Benar atau Salah untuk setiap pernyataan berikut!`,
        opsi: [
          { label: 'A', teks: `Menginformasikan kepada pembaca bahwa pemecahan masalah sampah merupakan tanggung jawab utama kita sebagai masyarakat sipil sehingga sulit untuk diselesaikan.` },
          { label: 'B', teks: `Menunjukkan kepada pembaca bahwa permasalahan sampah plastik sangat rumit dan tidak bisa diselesaikan dalam jangka waktu singkat.` },
          { label: 'C', teks: `Membuktikan kepada pembaca bahwa permasalahan sampah yang rumit disebabkan pemecahan masalah yang bergantung pada perekonomian negara berkembang.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Salah, Benar, Salah',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai ketepatan penggunaan bahasa. Tipe: PGK Kategori.
Kalimat "Solusi tersebut tidak mudah." langsung disusul alasan: harga minyak rendah membuat daur ulang plastik jauh lebih mahal daripada produksi baru, dan penggunaan plastik naik seiring pertumbuhan ekonomi negara berkembang. Fungsinya menegaskan bahwa masalah plastik rumit dan tidak selesai dalam waktu singkat.
A. Salah: teks tidak menyebut tanggung jawab utama ada pada masyarakat sipil; paragraf kedua justru menyebut banyak pihak yang terlibat.
B. Benar: sesuai fungsi kalimat itu.
C. Salah: ekonomi negara berkembang hanya salah satu kondisi yang menambah penggunaan plastik, bukan sebab tunggal kerumitan, dan penulis tidak sedang "membuktikan" hal itu.
Jawaban: A. Salah; B. Benar; C. Salah`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 2: cerpen "Seragam" (soal 2, 13, 20) ───────────────────────
  {
    stimulus: { judul: 'Kutipan cerpen "Seragam"', isi: teksSeragam },
    soal: [
      {
        nomor: 2,
        tipe: 'pg',
        tingkat: 'mudah',
        pertanyaan: `"Hampir 25 tahun lalu kami berpisah karena keluarga saya harus boyongan ke kota tempat kerja Ayah yang baru di luar pulau."

Penggunaan kata serapan boyongan dapat memperjelas peristiwa yang dialami tokoh saya, yaitu ...`,
        opsi: [
          { label: 'A', teks: `Peristiwa pindahan yang sering dialami pegawai suatu instansi untuk kepentingan promosi jabatan.` },
          { label: 'B', teks: `Peristiwa pindah rumah dari kampung halaman ke tempat yang jauh untuk jangka waktu lama.` },
          { label: 'C', teks: `Pindah rumah bersama seluruh anggota keluarga dengan membawa semua barang rumah tangga.` },
          { label: 'D', teks: `Pindah rumah untuk mengikuti tugas kedinasan orang tua di tempat baru yang letaknya sangat jauh.` },
          { label: 'E', teks: `Kegiatan pindah rumah untuk sementara waktu dan akan berpindah lagi ke rumah dinas yang lain.` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Pemahaman Tekstual · Mengidentifikasi penggunaan kata serapan.
Kalimat itu sudah menyebut alasan pindah (kota tempat kerja Ayah yang baru) dan jaraknya (di luar pulau). Yang ditambahkan kata boyongan (serapan dari bahasa Jawa) adalah cara pindahnya: seluruh keluarga ikut dan membawa seluruh isi rumah. Kalimat berikutnya menguatkan: "Tak satupun barang tertinggal di rumah lama."
A (promosi jabatan) dan D (tugas kedinasan) menambah alasan yang tidak ada di teks; B dan E menambah keterangan jangka waktu (lama atau sementara) yang tidak disebut.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 13,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `Peristiwa apa yang mungkin akan terjadi kepada sahabatnya jika tokoh saya tidak ikut mencari jangkrik malam itu?

Tentukan Tepat atau Tidak Tepat untuk setiap pernyataan berikut!`,
        opsi: [
          { label: 'A', teks: `Sahabat tokoh saya masih memiliki seragam pramuka untuk dipakai.` },
          { label: 'B', teks: `Punggung sahabat tokoh saya tidak akan memiliki luka bakar.` },
          { label: 'C', teks: `Sahabat tokoh saya akan mencari jangkrik tanpa perlu berlari.` },
        ],
        kategori: ['Tepat', 'Tidak Tepat'],
        kunci: 'Tepat, Tidak Tepat, Tepat',
        pembahasan: `Materi: Pemahaman Inferensial · Memprediksi lanjutan atau akhir teks. Tipe: PGK Kategori.
Soalnya berupa pengandaian: apa yang terjadi pada sahabat bila tokoh saya tidak ikut malam itu.
A. Tepat: sahabat itu "tidak memiliki banyak pakaian" dan seragam Pramuka dipakainya untuk menyabet api serta menyelimuti tokoh saya. Tanpa kejadian itu seragamnya tetap utuh untuk dipakai sekolah esok hari.
C. Tepat: ia berlari karena menggendong tokoh saya yang terluka. Tanpa kejadian itu ia bisa mencari jangkrik tanpa berlari.
B. Kunci dokumen: Tidak Tepat. Catatan: dalam teks, yang terbakar adalah punggung tokoh saya, bukan punggung sahabatnya, sehingga pernyataan B ("punggung sahabat ... tidak akan memiliki luka bakar") tampak benar baik dengan maupun tanpa kejadian itu. Ada kemungkinan salah ketik pada pernyataan B atau pada kuncinya; perlu dikonfirmasi tim akademik.
Jawaban (menurut kunci dokumen): A. Tepat; B. Tidak Tepat; C. Tepat`,
        status: 'draft',
      },
      {
        nomor: 20,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Kalimat mana saja dari dalam kutipan cerpen tersebut yang membuktikan karakter sahabat tokoh saya merupakan seorang yang setia kawan?
Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Saya langsung menyatakan ingin ikut, tapi dia keberatan.` },
          { label: 'B', teks: `Dia memang tidak memiliki banyak pakaian hingga seragam sekolah biasa dipakai kapan saja.` },
          { label: 'C', teks: `Sahabat saya itu tanggap melingkupi tubuh saya dengan seragam coklatnya.` },
          { label: 'D', teks: `Dia menggendong saya lalu berlari sembari membujuk-bujuk saya untuk tetap tenang.` },
          { label: 'E', teks: `Rasa tanggung jawab yang besar seperti memberinya kekuatan berlipat untuk tetap bersama saya.` },
        ],
        kunci: 'C, D, E',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai bagian teks yang menggambarkan karakter, peristiwa, atau latar dalam teks fiksi. Tipe: PGK MCMA.
Setia kawan berarti tetap menolong dan menemani sahabat saat kesulitan. Bukti dalam teks:
C. Benar: sahabat itu segera melindungi tokoh saya yang terbakar dengan seragamnya.
D. Benar: ia menggendong, berlari mencari pertolongan, dan menenangkan tokoh saya.
E. Benar: rasa tanggung jawabnya membuatnya kuat untuk tetap bersama tokoh saya.
A. Salah: kalimat ini hanya menyatakan keinginan tokoh saya dan keberatan sahabatnya di awal, bukan tindakan setia kawan.
B. Salah: kalimat ini menggambarkan keadaan ekonomi sahabat, bukan sikapnya terhadap teman.
Jawaban: C, D, E`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 3: teknologi hijau (soal 3, 11, 14, 18) ────────────────────
  {
    stimulus: { judul: 'Teks tentang teknologi hijau', isi: teksTeknologiHijau },
    soal: [
      {
        nomor: 3,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `Manakah kalimat yang memiliki penggunaan kata serapan yang tepat?

Tentukan Tepat atau Tidak Tepat pada setiap pernyataan berikut`,
        opsi: [
          { label: 'A', teks: `Kata "deforestasi" pada kalimat (2) paragraf kedua.` },
          { label: 'B', teks: `Kata "menginvestigasi" pada kalimat (2) paragraf ketiga.` },
          { label: 'C', teks: `Kata "polusi" pada kalimat (1) paragraf keempat.` },
        ],
        kategori: ['Tepat', 'Tidak Tepat'],
        kunci: 'Tepat, Tidak Tepat, Tepat',
        pembahasan: `Materi: Pemahaman Tekstual · Mengidentifikasi penggunaan kata serapan. Tipe: PGK Kategori.
A. Tepat: "deforestasi" adalah serapan dari bahasa Inggris (deforestation) untuk penggundulan hutan, dan dipakai tepat pada kalimat (2) paragraf kedua.
C. Tepat: "polusi" adalah serapan baku untuk pencemaran, dan dipakai tepat pada kalimat (1) paragraf keempat.
B. Kunci dokumen: Tidak Tepat. Dugaan alasannya: "investigasi" adalah kata benda (penyelidikan), sehingga bentuk kata kerja "menginvestigasi" dinilai kurang tepat; padanan yang lebih lazim adalah "menyelidiki" atau "melakukan investigasi". Alasan ini disusun ulang dan perlu dikonfirmasi tim bahasa.
Jawaban (menurut kunci dokumen): A. Tepat; B. Tidak Tepat; C. Tepat`,
        status: 'draft',
      },
      {
        nomor: 11,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Hubungan makna antara kalimat (2) dan (3) pada paragraf kedua adalah...`,
        opsi: [
          { label: 'A', teks: `Akibat-sebab yang diperkuat dengan contoh deforestasi dan kerusakan lingkungan` },
          { label: 'B', teks: `Sebab-akibat yang mengajak pembaca untuk mengambil langkah tegas` },
          { label: 'C', teks: `Penegasan yang diperinci dengan contoh konkret yang bisa diaplikasikan pembaca` },
          { label: 'D', teks: `Perbandingan dari dua pandangan terkait dampak negatif deforestasi` },
          { label: 'E', teks: `Penyimpulan bahwa teknologi hijau merupakan solusi masalah deforestasi` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Pemahaman Inferensial · Menjelaskan hubungan makna antarkalimat/antarparagraf.
Kalimat (2) paragraf kedua menyebut dampak perubahan iklim: memicu deforestasi, polusi, dan mengancam keberagaman hayati. Kalimat (3) diawali "Oleh karena itu" (penanda akibat) lalu mengajak kita mengambil langkah tegas agar dampaknya tidak makin parah. Jadi (2) adalah sebab/masalah dan (3) adalah akibatnya berupa ajakan bertindak: hubungan sebab-akibat yang mengajak pembaca bertindak.
A membalik urutan dan menambah "contoh" yang tidak ada; C tidak punya contoh konkret yang bisa diaplikasikan; D tidak membandingkan dua pandangan; E menyimpulkan hal yang baru dibahas di kalimat (4).
Jawaban: B`,
        status: 'draft',
      },
      {
        nomor: 14,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Kalimat yang tepat untuk mengakhiri uraian pada paragraf keempat adalah ...`,
        opsi: [
          { label: 'A', teks: `Pada sisi lain, teknologi hijau memunculkan deforestasi dan polusi.` },
          { label: 'B', teks: `Sehingga dampak negatif lingkungan berdampak pula pada kualitas hidup.` },
          { label: 'C', teks: `Di samping itu, teknologi hijau dapat menciptakan dunia yang lebih baik untuk generasi yang akan datang.` },
          { label: 'D', teks: `Di samping itu, bumi yang menggunakan teknologi hijau akan semakin menghadapi tantangan besar.` },
          { label: 'E', teks: `Jadi, teknologi hijau berperan dalam menghilangnya keanekaragaman hayati.` },
        ],
        kunci: 'C',
        pembahasan: `Materi: Pemahaman Inferensial · Memprediksi lanjutan atau akhir teks.
Paragraf keempat menegaskan bahwa penerapan teknologi hijau adalah keharusan dan manfaatnya mengurangi dampak negatif serta memperbaiki kualitas hidup. Kalimat penutup yang tepat melanjutkan manfaat itu dengan nada positif dan konjungsi yang sesuai: "Di samping itu, teknologi hijau dapat menciptakan dunia yang lebih baik untuk generasi yang akan datang."
A, D, dan E bertentangan dengan isi (teknologi hijau digambarkan sebagai solusi, bukan penyebab masalah). B diawali "Sehingga", yang tidak lazim untuk membuka kalimat, dan hanya mengulang gagasan sebelumnya.
Jawaban: C`,
        status: 'draft',
      },
      {
        nomor: 18,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Manakah fakta-fakta yang mendukung simpulan bahwa teknologi hijau berperan dalam perubahan iklim?

Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Teknologi hijau merupakan inovasi yang dirancang untuk mengatasi berbagai tantangan lingkungan global, terutama terkait dengan perubahan iklim.` },
          { label: 'B', teks: `Perubahan iklim, yang dipicu oleh peningkatan emisi gas rumah kaca akibat aktivitas manusia, menyebabkan cuaca ekstrem, suhu global menurun, dan naiknya permukaan air laut.` },
          { label: 'C', teks: `Teknologi hijau seperti energi terbarukan (tenaga surya, angin) dapat mengurangi ketergantungan pada bahan bakar fosil.` },
          { label: 'D', teks: `Teknologi hijau juga sangat penting dalam upaya adaptasi terhadap dampak perubahan teknologi yang sudah tidak bisa dihindari.` },
          { label: 'E', teks: `Melalui teknologi hijau, kita dapat mengurangi dampak negatif terhadap lingkungan dan memperbaiki kualitas hidup.` },
        ],
        kunci: 'A, C, E',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai keakuratan, kesesuaian, kecukupan, atau ketepatan informasi dalam teks. Tipe: PGK MCMA.
Fakta pendukung harus sesuai dengan teks asli:
A. Benar: sama dengan kalimat (4) paragraf pertama.
C. Benar: sama dengan kalimat (4) paragraf kedua (energi terbarukan mengurangi ketergantungan pada bahan bakar fosil, penyebab utama emisi).
E. Benar: sama dengan kalimat (2) paragraf keempat.
B. Salah: kalimat aslinya "suhu global yang meningkat"; pada opsi diubah menjadi "menurun".
D. Salah: kalimat aslinya "dampak perubahan iklim"; pada opsi diubah menjadi "dampak perubahan teknologi".
Jawaban: A, C, E`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 4: ekonomi digital dan UKM (soal 4, 10, 17) ────────────────
  {
    stimulus: {
      judul: 'Dampak Ekonomi Digital terhadap Pertumbuhan Usaha Kecil dan Menengah (UKM)',
      isi: teksUkm,
    },
    soal: [
      {
        nomor: 4,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `[Kalimat pertanyaan tidak tercantum di dokumen sumber. Pilihan jawabannya berupa lima bagan, dan butir ini menguji kemampuan menyusun kerangka atau bagan dari bagian-bagian penting teks.]`,
        opsi: [
          { label: 'A', teks: `⟦gambar:gambar/cerebrum/tka-ind-04-a.png⟧` },
          { label: 'B', teks: `⟦gambar:gambar/cerebrum/tka-ind-04-b.png⟧` },
          { label: 'C', teks: `⟦gambar:gambar/cerebrum/tka-ind-04-c.png⟧` },
          { label: 'D', teks: `⟦gambar:gambar/cerebrum/tka-ind-04-d.png⟧` },
          { label: 'E', teks: `⟦gambar:gambar/cerebrum/tka-ind-04-e.png⟧` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Pemahaman Tekstual · Menyusun kerangka atau bagan.
Bagian-bagian penting teks: (1) dampak ekonomi digital (paragraf pertama: perubahan besar dan peluang bersaing); (2) manfaat teknis yang diperoleh (paragraf kedua dan ketiga: akses e-commerce, biaya operasional rendah, pembayaran digital, pemasaran berbasis data); (3) tantangan adaptasi teknologi dan keamanan digital (paragraf keempat); (4) peluang pertumbuhan dan keberlanjutan UKM (kesimpulan paragraf keempat).
Bagan A berpusat pada "Ekonomi Digital" dengan empat cabang yang persis memuat keempat bagian itu.
B (pariwisata lokal, ekspor, layanan publik), C ("keterbatasan jangkauan", padahal teks menyebut jangkauan makin luas), D (UKM tradisional), dan E (literasi keuangan, sertifikasi halal) memuat topik yang tidak dibahas atau bertentangan dengan teks.
Jawaban: A`,
        status: 'draft',
      },
      {
        nomor: 10,
        tipe: 'pg_kategori',
        tingkat: 'sulit',
        pertanyaan: `Bagaimana pola pengembangan paragraf ke-1, ke-2, dan ke-3 pada teks tersebut?

Tentukan Benar atau Salah untuk setiap pernyataan berdasarkan isi teks!`,
        opsi: [
          { label: 'A', teks: `Paragraf pertama (1) menggunakan pola sebab-akibat karena menjelaskan bagaimana teknologi digital menyebabkan perubahan bagi UKM.` },
          { label: 'B', teks: `Paragraf kedua (2) menggunakan pola proses karena menjelaskan langkah-langkah bagaimana UKM memanfaatkan e-commerce.` },
          { label: 'C', teks: `Paragraf ketiga (3) menggunakan pola kleasifikasi karena membagi sistem pembayaran UKM menjadi beberapa kategori yang berbeda.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Benar, Salah',
        pembahasan: `Materi: Pemahaman Inferensial · Menjelaskan hubungan makna antarkalimat/antarparagraf. Tipe: PGK Kategori.
A. Benar: paragraf pertama menjelaskan bahwa teknologi digital (sebab) membawa perubahan besar dan peluang bagi UKM (akibat), serta faktor-faktor pendorongnya.
B. Benar menurut kunci dokumen: paragraf kedua menguraikan perubahan cara UKM berjualan lewat e-commerce secara berurutan (dari toko fisik ke marketplace, lalu jangkauan pasar, biaya, dan pengiriman). Catatan: uraiannya lebih mirip penjelasan manfaat daripada langkah-langkah, jadi kunci B perlu dikonfirmasi tim akademik.
C. Salah: paragraf ketiga membahas manfaat pembayaran digital dan pemasaran berbasis data; tidak ada pembagian sistem pembayaran menjadi kategori, jadi bukan pola klasifikasi.
Jawaban: A. Benar; B. Benar; C. Salah`,
        status: 'draft',
      },
      {
        nomor: 17,
        tipe: 'pg_kategori',
        tingkat: 'sulit',
        pertanyaan: `Dini : Teks tersebut sangat menarik dan bisa menambah wawasan kita, terutama jika kita berencana untuk mengembangkan suatu bisnis kecil.

Rio : Iya, pilihan katanya juga sangat mudah dimengerti sehingga orang yang awam terhadap istilah di bidang ekonomi juga mudah untuk memahami isi informasi yang disajikan.

Sena : Aku sependapat dengan kalian berdua, tetapi rasanya teks tersebut akan lebih baik jika disertai data pertumbuhan UKM dalam kurun waktu lima tahun terakhir atau pendapat ahli di bidang ekonomi.

Berdasarkan percakapan tersebut, mengapa pendapat Sena sangat baik dalam menilai keakuratan dari informasi yang disajikan tersebut?`,
        opsi: [
          { label: 'A', teks: `Sena menyoroti bahwa teks harus mudah dipahami oleh semua kalangan, termasuk yang awam terhadap ekonomi.` },
          { label: 'B', teks: `Sena mempertimbangkan kelengkapan dan dasar bukti dari informasi yang merupakan bagian dari menilai keakuratan teks.` },
          { label: 'C', teks: `Sena memiliki inisiatif untuk memperbaiki isi teks dengan pendapat pribadinya sebagai ahli ekonomi agar lebih informatif.` },
        ],
        kategori: ['Setuju', 'Tidak Setuju'],
        kunci: 'Tidak Setuju, Setuju, Tidak Setuju',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai keakuratan, kesesuaian, kecukupan, atau ketepatan informasi dalam teks. Tipe: PGK Kategori.
Sena mengusulkan teks dilengkapi data pertumbuhan UKM lima tahun terakhir atau pendapat ahli: itu menilai kelengkapan dan dasar bukti informasi, yang termasuk menilai keakuratan.
A. Tidak Setuju: kemudahan dipahami orang awam adalah poin Rio, bukan Sena.
B. Setuju: sesuai usulan Sena (data dan pendapat ahli sebagai dasar bukti).
C. Tidak Setuju: Sena meminta pendapat ahli ditambahkan, bukan menawarkan pendapat pribadinya sebagai ahli ekonomi.
Jawaban: A. Tidak Setuju; B. Setuju; C. Tidak Setuju`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 5: "Piala di Atas Dangau" (soal 7, 12, 15) ─────────────────
  {
    stimulus: { judul: 'Kutipan "Piala di Atas Dangau"', isi: teksDangau },
    soal: [
      {
        nomor: 7,
        tipe: 'pg_kategori',
        tingkat: 'sedang',
        pertanyaan: `Apa permasalahan yang dihadapi tokoh aku dalam kutipan tersebut?

Tentukan Benar atau Salah untuk setiap pernyataan berikut!`,
        opsi: [
          { label: 'A', teks: `Kekecewaan dan kesedihan tokoh aku terhadap sikap Ayahnya yang tidak mengizinkannya masuk sekolah di musin maddongi, padahal dia harus mempersiapkan diri untuk bersaing dalam lomba dengan siswa sekolah lain.` },
          { label: 'B', teks: `Kemarahan hati tokoh aku terhadap Ayahnya yang melarang dia pergi sekolah karena sedang musim maddongi di sawah dan dia diberi tugas menghalau burung yang hinggap pada padi di sawah mereka.` },
          { label: 'C', teks: `Perasaan tertekan tokoh aku terhadap peraturan keluarganya yang mengharuskan dia tidak masuk sekolah setiap musim maddongi, padahal dia ingin sekali belajar dan tidak mau ketinggalan pelajaran.` },
        ],
        kategori: ['Benar', 'Salah'],
        kunci: 'Benar, Salah, Salah',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan ide pokok, tokoh, peristiwa, konflik, atau nilai. Tipe: PGK Kategori.
Masalah tokoh aku: Ayah menyuruhnya membantu di sawah pada musim maddongi sehingga ia tidak sekolah, padahal lomba makin dekat dan banyak materi belum ia pahami.
A. Benar: ia "hampir menangis histeris" dan membayangkan dirinya akan hancur dalam persaingan lomba: kecewa dan sedih.
B. Salah: ia ingin berteriak, tetapi sadar itu tidak menyelesaikan masalah dan malah membuat Ayah geram. Ia memilih mencari solusi (ke rumah iyye), jadi emosinya kecewa, sedih, dan cemas, bukan marah.
C. Salah: teks tidak menyebut peraturan keluarga yang berlaku setiap musim maddongi; yang diceritakan hanya larangan sekolah pada musim itu.
Jawaban: A. Benar; B. Salah; C. Salah`,
        status: 'draft',
      },
      {
        nomor: 12,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Apa yang akan terjadi jika tokoh aku tidak datang ke rumah iyye?

Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Iyye akan datang menasehati Ayah karena melarang tokoh aku untuk belajar.` },
          { label: 'B', teks: `Tokoh aku akan kehilangan kesempatan belajar untuk mengikuti [lanjutan kalimat tidak ada di dokumen sumber]` },
          { label: 'C', teks: `Ayah akan tetap melarang tokoh aku untuk belajar dan mengikuti lomba.` },
          { label: 'D', teks: `Permasalahan tokoh aku dan ayah akan berlarut karena tidak terselesaikan.` },
          { label: 'E', teks: `Tokoh aku tidak akan bisa fokus untuk belajar dan mengikuti lomba yang diadakan sekolah.` },
        ],
        kunci: 'B, D',
        pembahasan: `Materi: Pemahaman Inferensial · Memprediksi lanjutan atau akhir teks. Tipe: PGK MCMA.
Strategi yang disusun tokoh aku untuk menyelesaikan masalahnya adalah meminta bantuan iyye, karena "hanya dia yang mampu menundukkan Ayah". Jika ia tidak datang:
A. Salah: iyye tidak tahu masalahnya, jadi tidak akan menasihati Ayah.
B. Benar: ia tetap harus membantu di sawah dan kehilangan kesempatan belajar menjelang lomba (opsi ini terpotong di dokumen sumber).
D. Benar: tanpa perantara, masalah dengan Ayah tidak terselesaikan dan berlarut.
C. Salah: terlalu mutlak; teks hanya menyebut Ayah melarang sekolah pada musim maddongi, bukan melarang mengikuti lomba.
E. Salah: perasaan tidak bisa fokus adalah dugaan yang tidak ditunjukkan teks.
Jawaban: B, D`,
        status: 'draft',
      },
      {
        nomor: 15,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Keterkaitan nilai sosial dalam kutipan cerpen tersebut dengan kehidupan sehari-hari adalah ...`,
        opsi: [
          { label: 'A', teks: `Masih ditemukan orang tua yang tidak memedulikan pendidikan anaknya demi membantu pekerjaan mereka.` },
          { label: 'B', teks: `Terbenturnya cita-cita anak karena tradisi sebuah keluarga yang mengutamakan anak mampu bekerja mandiri.` },
          { label: 'C', teks: `Asumsi bahwa bekerja lebih bermanfaat daripada sekolah yang dianggap tidak menghasilkan apa-apa untuk keluarga.` },
          { label: 'D', teks: `Kebiasaan anak-anak tidak sekolah di musim maddongi demi menjalankan tradisi di lingkungan keluarga mereka.` },
          { label: 'E', teks: `Orang tua mengarahkan anak-anak untuk rajin bekerja membantu mereka di sawah agar bisa melanjutkan kehidupannya kelak.` },
        ],
        kunci: 'A',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai relevansi dengan kehidupan sehari-hari.
Dalam cerpen, Ayah menyuruh anaknya tidak sekolah untuk membantu di sawah walau lomba sudah dekat: kepentingan pekerjaan keluarga didahulukan daripada pendidikan anak. Pola ini masih bisa ditemui sehari-hari, dan itulah yang dirumuskan opsi A.
B, C, D, dan E memuat generalisasi yang tidak didukung teks: tradisi keluarga yang melatih kemandirian anak, asumsi bahwa sekolah tidak berguna, kebiasaan semua anak, atau tujuan jangka panjang orang tua.
Jawaban: A`,
        status: 'draft',
      },
    ],
  },

  // ── Bacaan 6: Rhodamin B, Teks 1 dan Teks 2 (soal 8, 9, 16) ──────────
  {
    stimulus: { judul: 'Teks 1 dan Teks 2 tentang Rhodamin B', isi: teksRhodamin },
    soal: [
      {
        nomor: 8,
        tipe: 'pg',
        tingkat: 'sedang',
        pertanyaan: `Tujuan penulis sesuai teks 1 adalah...`,
        opsi: [
          { label: 'A', teks: `Menginformasikan jenis dan rasa makanan yang mengandung Rhodamin B.` },
          { label: 'B', teks: `Menjelaskan dampak penggunaan Rhodamin B pada bahan-bahan industri.` },
          { label: 'C', teks: `Mengimbau agar masyarakat tidak menggunakan barang-barang yang mengandung Rhodamin B.` },
          { label: 'D', teks: `Menginformasikan dampak mengonsumsi makanan yang mengandung Rhodamin B bagi tubuh.` },
          { label: 'E', teks: `Menjelaskan gejala yang timbul akibat mengkonsumsi makanan yang mengandung Rhodamin B.` },
        ],
        kunci: 'D',
        pembahasan: `Materi: Pemahaman Inferensial · Menyimpulkan ide pokok, tokoh, peristiwa, konflik, atau nilai.
Teks 1 menjelaskan bahwa Rhodamin B, pewarna tekstil, disalahgunakan pada makanan, lalu menekankan bahayanya bila dikonsumsi: gangguan fungsi hati, kanker hati, penumpukan lemak, dan sifat karsinogenik. Tujuan penulis: menginformasikan dampak mengonsumsi makanan yang mengandung Rhodamin B bagi tubuh.
A hanya rincian (contoh makanan), B tidak dibahas, C tidak ada kalimat ajakan atau larangan, dan E terlalu sempit: gejala yang lebih rinci baru ada di Teks 2.
Jawaban: D`,
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'pg',
        tingkat: 'sulit',
        pertanyaan: `Pernyataan yang tepat sesuai isi kedua teks tersebut berkaitan dengan Rhodamin B adalah ...`,
        opsi: [
          { label: 'A', teks: `Rhodamin B sering disalahgunakan sebagai pewarna makanan karena menawarkan cita rasa yang tinggi.` },
          { label: 'B', teks: `Rhodamin B berdampak buruk bagi kesehatan, tetapi diperlukan pada industri, seperti tekstil dan kertas.` },
          { label: 'C', teks: `Rhodamin B berdampak buruk bagi kesehatan, tetapi mudah ditemukan pada kembang gula dan sirup.` },
          { label: 'D', teks: `Rhodamin B yang berbentuk serbuk kristal dan berwarna hijau digunakan pada industri tekstil dan kertas.` },
          { label: 'E', teks: `Rhodamin B berdampak buruk bagi kesehatan, meskipun dampak itu baru terlihat beberapa tahun kemudian.` },
        ],
        kunci: 'B',
        pembahasan: `Materi: Pemahaman Inferensial · Menjelaskan hubungan makna antarkalimat/antarparagraf.
Soal meminta pernyataan yang sesuai dengan kedua teks sekaligus. B menggabungkan keduanya: bahaya kesehatan (Teks 1 dan 2) dan penggunaan di industri tekstil dan kertas (Teks 1 menyebut tersedia untuk industri tekstil, Teks 2 menyebut digunakan pada industri tekstil dan kertas).
A tidak didukung kedua teks: Teks 1 hanya menyebut tampilan makanan "terkesan" bercita rasa tinggi, dan Teks 2 tidak membahas alasan penyalahgunaan itu. C hanya bersumber dari Teks 1. D memuat "berwarna hijau" padahal teks menyebut "hijau atau ungu kemerahan". E menyebut "beberapa tahun", padahal Teks 1 menyebut "puluhan tahun".
Jawaban: B`,
        status: 'draft',
      },
      {
        nomor: 16,
        tipe: 'pg_kompleks',
        tingkat: 'sulit',
        pertanyaan: `Mengapa kedua teks tersebut menyebutkan dampak kesehatan yang timbul dari konsumsi pangan yang terkontaminasi Rhodamin B?

Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.`,
        opsi: [
          { label: 'A', teks: `Mendorong masyarakat untuk menghindari Rhodamin B dalam berbagai keperluan.` },
          { label: 'B', teks: `Meningkatkan kesadaran masyarakat tentang bahaya Rhodamin B dalam makanan` },
          { label: 'C', teks: `Menunjukkan bahwa Rhodamin B aman digunakan dalam industri tekstil dan kertas.` },
          { label: 'D', teks: `Menjelaskan bahwa Rhodamin B adalah zat berbahaya jika dikonsumsi, terutama dalam jangka panjang.` },
          { label: 'E', teks: `Memperingatkan masyarakat agar menghindari makanan berwarna mencolok yang berisiko mengandung Rhodamin B.` },
        ],
        kunci: 'B, D, E',
        pembahasan: `Materi: Evaluasi dan Apresiasi · Menilai keakuratan, kesesuaian, kecukupan, atau ketepatan informasi dalam teks. Tipe: PGK MCMA.
Kedua teks menguraikan bahaya Rhodamin B bila dikonsumsi (gangguan dan kerusakan hati, kanker hati, penumpukan dalam tubuh dalam jangka panjang). Tujuan penyebutannya:
B. Benar: meningkatkan kesadaran akan bahaya Rhodamin B pada makanan.
D. Benar: menjelaskan bahwa zat ini berbahaya bila dikonsumsi, terutama dalam jangka panjang.
E. Benar: Teks 1 mengaitkan Rhodamin B dengan makanan yang tampilannya menarik, sehingga pembaca diperingatkan agar menghindari makanan berwarna mencolok yang berisiko mengandung zat ini.
A. Salah: terlalu luas ("dalam berbagai keperluan"); teks mempersoalkan konsumsi, dan penggunaan di industri tekstil dan kertas disebut tanpa larangan.
C. Salah: tidak ada pernyataan bahwa zat ini aman, di industri sekalipun.
Jawaban: B, D, E`,
        status: 'draft',
      },
    ],
  },
];
