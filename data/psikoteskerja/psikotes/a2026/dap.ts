import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Draw A Person (DAP): menggambar seseorang di kertas A4 (5 menit), lalu unggah foto (3 menit). Tanpa skor.
 *
 * Dibuat dari draft prototipe PROTOTIPE-DRAW-A-PERSON.html (folder Draft Prototype, diubah
 * 8 September 2026): instruksi, empat keterangan di belakang kertas, bentuk pengumpulan, dan
 * tujuh tips panduan. Contoh: satu tugas menggambar (instruksi); pembahasannya memuat aspek
 * yang dinilai menurut dokumen sumber. Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'uraian',
        pertanyaan: `Gambarlah seseorang. Buatlah sedetail mungkin!
Waktu menggambar: 5 menit

Setelah selesai menggambar, balik kertas dan tuliskan keterangan mengenai orang yang kamu gambar pada bagian belakang kertas, meliputi:
1. Umur
2. Jenis Kelamin
3. Pekerjaan
4. Aktivitas`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Tidak ada kunci, skor, atau interpretasi otomatis di aplikasi. Jawaban peserta berupa gambar di sisi depan kertas A4 (pensil 2B) dan empat keterangan tertulis di sisi belakang; keduanya difoto atau dipindai lalu diunggah. Karena ditulis di kertas, umur, jenis kelamin, pekerjaan, dan aktivitas tidak tersimpan sebagai data terstruktur.

Aspek yang dinilai menurut panduan di dokumen sumber: tiga prinsip utama, yaitu proporsionalitas, kelengkapan, dan kedetailan gambar. Penilaian tidak didasarkan pada keindahan atau kemampuan menggambar secara artistik (ini bukan tes seni rupa). Bab teori dokumen sumber juga memuat sistem penilaian QSS dengan tiga komponen yang sama (proporsi, kelengkapan, detail) sebagai latar teori yang tidak dibangun di aplikasi.`,
        status: 'draft',
      },
    ],
  },
];

export const dap: Subtes = {
  kode: 'dap',
  nama: 'Draw A Person (DAP)',
  jumlahSoal: 1,
  waktuMenit: 5,
  bankSoal: false,
  formatKetentuan: `Tes menggambar: peserta menggambar seseorang di kertas A4 (satu lembar, dua sisi) selama 5 menit, lalu mengunggah hasilnya (3 menit). Aplikasi hanya menjaga waktu dan menerima berkas; menggambar dilakukan di kertas dengan pensil 2B.

Instruksi (dari bab Rancangan Aplikasi): "Gambarlah seseorang. Buatlah sedetail mungkin! Waktu menggambar: 5 menit". Setelah selesai, kertas dibalik dan peserta menuliskan keterangan tentang orang yang digambarnya di bagian belakang: umur, jenis kelamin, pekerjaan, dan aktivitas.

Alur: (1) onboarding: judul, disclaimer, instruksi, persiapan, dan empat konfirmasi; (2) pengerjaan: hitung mundur 5:00; pop-up "Yakin Ingin Menyelesaikan Pengerjaan?"; (3) unggah: hitung mundur 3:00, hasil harus memperlihatkan dua halaman (gambar dan keterangan), dengan tiga bentuk pengumpulan: A satu PDF 2 halaman, B satu gambar panjang yang memuat kedua halaman, atau C dua foto terpisah (JPG, JPEG, PNG, atau PDF); (4) simulasi selesai.

Tangkapan layar prototipe (panel penguji di bagian atas layar prototipe dipotong; pilihan "Dikerjakan Sistem" hanya demonstrasi di prototipe):
⟦gambar:gambar/psikoteskerja/dap-awal.webp⟧
Layar awal: judul, ringkasan (A4, 2B, 5 menit menggambar, 3 menit mengunggah), disclaimer, dan instruksi.
⟦gambar:gambar/psikoteskerja/dap-mengerjakan.webp⟧
Saat mengerjakan: kotak sisa waktu 5:00, instruksi, empat keterangan yang ditulis di belakang kertas, dan tombol Pengumpulan.
⟦gambar:gambar/psikoteskerja/dap-unggah.webp⟧
Unggah hasil: sisa waktu 3:00, dua halaman yang harus terlihat (gambar dan keterangan), dan pilihan bentuk pengumpulan.`,
  penilaian: `Aplikasi tidak memberi skor, penilaian psikologis, analisis kepribadian, diagnosis, maupun interpretasi atas gambar (disclaimer sumber, tampil di layar pembuka dan layar akhir), dan tidak membaca isi gambar. Validasi hanya menyentuh sifat mekanis berkas: jumlah, tipe, dan ukuran.

Latar teori di dokumen sumber: penilaian DAP memakai tiga prinsip utama, yaitu proporsionalitas, kelengkapan, dan kedetailan gambar (lihat Materi); bukan keindahan artistik. Sistem penilaian QSS di bab teori tidak dibangun di aplikasi.

Layar akhir di prototipe menampilkan hasil unggahan peserta dan tujuh tips umum dari panduan Tes DAP, sama untuk semua peserta dan bukan berdasarkan gambar peserta. Blok tips itu tambahan prototipe di luar dokumen, dan isinya hanya dari panduan.`,
  catatan: 'Dua bab dokumen sumber berbeda soal waktu: bab teori menyebut 10 menit, bab rancangan 5 menit. Prototipe memakai 5 menit (bab rancangan mengikat produk). Karena keterangan ditulis di kertas, peserta memilih sendiri bentuk pengumpulannya dan sistem hanya memeriksa jumlah serta tipe berkas; apakah isi halaman benar tidak bisa diperiksa tanpa membaca gambar, yang dilarang disclaimer.',
  materi: [
    { nama: 'Proporsionalitas', catatan: 'Prinsip penilaian menurut panduan: ukuran tiap bagian tubuh seimbang satu sama lain.' },
    { nama: 'Kelengkapan', catatan: 'Prinsip penilaian menurut panduan: gambar mencakup seluruh anggota tubuh dari ujung kepala hingga ujung kaki.' },
    { nama: 'Kedetailan gambar', catatan: 'Prinsip penilaian menurut panduan: tingkat kerincian gambar.' },
    { nama: 'Tips panduan 1: Perhatikan waktu pengerjaan', catatan: 'Tujuh hal yang perlu diperhatikan dari panduan Tes DAP; tips umum, bukan penilaian atas gambar tertentu.' },
    { nama: 'Tips panduan 2: Tambahkan ciri khas sesuai jenis kelamin figur' },
    { nama: 'Tips panduan 3: Gunakan prinsip keseimbangan' },
    { nama: 'Tips panduan 4: Lengkapi seluruh tubuh' },
    { nama: 'Tips panduan 5: Perhatikan tingkat detail' },
    { nama: 'Tips panduan 6: Ingat, ini bukan tes seni rupa' },
    { nama: 'Tips panduan 7: Gambarlah dalam konteks aktivitas nyata' },
  ],
  contoh,
};
