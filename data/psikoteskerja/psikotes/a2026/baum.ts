import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Baum Tree Test: menggambar pohon di kertas A4 (5 menit), lalu unggah foto (3 menit). Tanpa skor.
 *
 * Dibuat dari draft prototipe PROTOTIPE-BAUM-TREE.html (folder Draft Prototype, diubah
 * 27 Agustus 2026): instruksi, tujuh pohon terlarang (LARANGAN), tujuh tips (TUJUH), dan
 * latar teori QSS. Contoh: satu tugas menggambar (instruksi); pembahasannya memuat aspek
 * yang dinilai menurut dokumen sumber. Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'uraian',
        pertanyaan: `Gambarlah sebuah pohon. Buatlah sedetail mungkin!

Namun, jangan menggambar jenis pohon berikut: Pohon Kelapa, Pohon Pisang, Pohon Bambu, Pohon Cemara, Pohon Beringin, Kaktus, Tanaman kecil.

Waktu menggambar: 5 menit.
Setelah selesai menggambar, tuliskan nama/jenis pohon yang kamu gambar pada bagian kiri bawah kertas pengerjaan.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci, skor, atau interpretasi otomatis di aplikasi. Jawaban peserta berupa gambar di kertas A4 (pensil 2B) yang difoto atau dipindai lalu diunggah.

Aspek yang dinilai menurut bab teori dokumen sumber (sistem penilaian QSS, Quantitative Scoring System; latar teori yang tidak dibangun di aplikasi):
1. Proporsi bagian pohon: keseimbangan ukuran akar, batang, dahan, dan tajuk/daun.
2. Kelengkapan struktur: sejauh mana akar (bila terlihat atau tersirat), batang, dahan, ranting, dan daun tergambar.
3. Detail gambar: tekstur kulit kayu, urat daun, buah, bunga, atau lingkungan sekitar yang relevan.
Menurut panduan, penilaian tidak didasarkan pada keindahan artistik; ini bukan tes seni rupa.`,
        status: 'draft',
      },
    ],
  },
];

export const baum: Subtes = {
  kode: 'baum',
  nama: 'Baum Tree Test',
  jumlahSoal: 1,
  waktuMenit: 5,
  bankSoal: false,
  formatKetentuan: `Tes menggambar: peserta menggambar sebuah pohon di kertas A4 selama 5 menit, lalu mengunggah fotonya (3 menit). Menggambar dilakukan di atas kertas; aplikasi tidak menyediakan kanvas dan hanya menjaga waktu serta menerima berkas.

Instruksi (dari bab Rancangan Aplikasi): "Gambarlah sebuah pohon. Buatlah sedetail mungkin!" Jenis pohon yang tidak boleh digambar: Pohon Kelapa, Pohon Pisang, Pohon Bambu, Pohon Cemara, Pohon Beringin, Kaktus, Tanaman kecil. Setelah selesai menggambar, peserta menuliskan nama/jenis pohon di bagian kiri bawah kertas. Alat: 1 lembar kertas A4 polos, pensil 2B (bukan pena), dan tempat yang nyaman. Waktu 5 menit belum dimulai pada tahap persiapan.

Alur: (1) onboarding: judul, disclaimer, instruksi, daftar larangan, persiapan alat, dan empat konfirmasi; (2) pengerjaan: hitung mundur 5:00; pop-up "Yakin Ingin Menyelesaikan Pengerjaan?"; (3) unggah: hitung mundur 3:00, satu berkas JPG, JPEG, PNG, atau PDF yang memperlihatkan seluruh gambar pohon dan nama/jenis pohon di kiri bawah; (4) simulasi selesai. Setelah pengumpulan dikonfirmasi tidak ada jalan kembali.

Tangkapan layar prototipe (panel penguji di bagian atas layar prototipe dipotong):
⟦gambar:gambar/psikoteskerja/baum-awal.webp⟧
Layar awal: judul, ringkasan (A4, 2B, 5 menit menggambar, 3 menit mengunggah), disclaimer, dan instruksi.
⟦gambar:gambar/psikoteskerja/baum-mengerjakan.webp⟧
Saat mengerjakan: kotak sisa waktu 5:00, instruksi, daftar pohon yang tidak boleh digambar, dan tombol Pengumpulan.
⟦gambar:gambar/psikoteskerja/baum-unggah.webp⟧
Unggah hasil: kotak sisa waktu 3:00, syarat isi foto, format berkas yang diterima, dan contoh bentuk lembar (bukan gambar peserta).`,
  penilaian: `Aplikasi tidak memberi skor, penilaian psikologis, analisis kepribadian, diagnosis, maupun interpretasi atas gambar (disclaimer sumber, tampil di layar pembuka dan layar akhir), dan tidak membaca isi gambar. Validasi hanya menyentuh sifat mekanis berkas: tipe, ukuran, dan jumlah.

Latar teori di dokumen sumber: penilaian Baum memakai QSS (Quantitative Scoring System) dengan tiga komponen, yaitu proporsi bagian pohon, kelengkapan struktur, dan detail gambar (lihat Materi). Bab rancangan menyatakan "kami tidak menyediakan skor", jadi QSS hanya didokumentasikan sebagai latar dan tidak dibangun. Penilaian pada tes ini tidak didasarkan pada keindahan artistik.

Layar akhir di prototipe menampilkan hasil unggahan peserta dan tujuh tips umum dari panduan Tes Baum, sama untuk semua peserta dan bukan berdasarkan gambar peserta. Blok tips itu tambahan prototipe, bukan permintaan bab Rancangan Aplikasi.`,
  catatan: 'Bab teori dan bab rancangan di dokumen sumber berbeda, dan prototipe memakai bab rancangan: daftar pohon terlarang (bab teori: perdu, pinus/cemara, palma/kelapa, bambu, rumput-rumputan; bab rancangan: tujuh butir di atas), durasi menggambar (bab teori 10 menit, bab rancangan 5 menit), dan penilaian (bab teori QSS, bab rancangan tanpa skor). Dokumen tidak menyebut apa yang terjadi saat waktu habis: prototipe memindahkan peserta otomatis ke layar unggah, dan menutup sesi tanpa unggahan bila waktu unggah habis. Nama pohon ditulis di kertas, jadi daftar larangan hanya berupa teks instruksi dan tidak bisa divalidasi aplikasi.',
  materi: [
    {
      nama: 'Proporsi bagian pohon',
      catatan: 'Komponen QSS (latar teori, tidak dibangun di aplikasi): keseimbangan ukuran antar bagian, yaitu akar, batang, dahan, dan tajuk/daun.',
    },
    { nama: 'Kelengkapan struktur', catatan: 'Komponen QSS: sejauh mana akar (bila terlihat atau tersirat), batang, dahan, ranting, dan daun tergambar.' },
    { nama: 'Detail gambar', catatan: 'Komponen QSS: tekstur kulit kayu, urat daun, buah, bunga, atau lingkungan sekitar yang relevan.' },
    { nama: 'Tips panduan 1: Perhatikan waktu pengerjaan', catatan: 'Tujuh hal yang perlu diperhatikan dari panduan Tes Baum; tips umum, bukan penilaian atas gambar tertentu.' },
    { nama: 'Tips panduan 2: Tambahkan ciri khas pada gambar' },
    { nama: 'Tips panduan 3: Gunakan prinsip keseimbangan (proporsionalitas)' },
    { nama: 'Tips panduan 4: Lengkapi seluruh bagian pohon' },
    { nama: 'Tips panduan 5: Perhatikan tingkat detail gambar' },
    { nama: 'Tips panduan 6: Ingat bahwa ini bukan tes seni rupa' },
    { nama: 'Tips panduan 7: Gambarlah dalam kondisi yang hidup dan produktif' },
  ],
  contoh,
};
