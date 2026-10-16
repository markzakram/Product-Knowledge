import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * Tes Deskripsi Diri: 9 bagian isian, 10 menit, tanpa skor.
 *
 * Dibuat dari draft prototipe PROTOTIPE-DESKRIPSI-DIRI.html (folder Draft Prototype, diubah
 * 26 Agustus 2026): katalog sembilan bagian (BAGIAN), judul dan instruksi dikutip apa adanya.
 * Contoh: kesembilan bagian, sebagai tugas uraian tanpa kunci. Boleh disunting tangan.
 *
 * bankSoal: false karena tes ini tidak punya bank soal; contoh di sini hanya memperlihatkan
 * isi tesnya.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'uraian',
        pertanyaan: `Bagian 1: Biodata
Isi informasi dasar mengenai dirimu sesuai data yang diminta.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'uraian',
        pertanyaan: `Bagian 2: Hobi
Tuliskan kegiatan yang kamu sukai atau rutin dilakukan pada waktu luang.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'uraian',
        pertanyaan: `Bagian 3: Cita-cita
Tuliskan cita-cita atau tujuan pekerjaan yang ingin kamu capai di masa depan.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'uraian',
        pertanyaan: `Bagian 4: Diri Sendiri dalam 5 Tahun
Ceritakan secara singkat bagaimana kamu membayangkan perkembangan dirimu dalam 5 tahun mendatang.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 5,
        tipe: 'uraian',
        pertanyaan: `Bagian 5: Moto Hidup
Tuliskan prinsip atau kalimat yang menjadi peganganmu dalam menjalani kehidupan.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 6,
        tipe: 'uraian',
        pertanyaan: `Bagian 6: Pengalaman Organisasi
Tuliskan organisasi yang pernah kamu ikuti beserta peran atau tanggung jawabmu.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 7,
        tipe: 'uraian',
        pertanyaan: `Bagian 7: Olahraga dan Kesenian
Tuliskan kegiatan olahraga atau kesenian yang pernah atau masih kamu lakukan.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 8,
        tipe: 'uraian',
        pertanyaan: `Bagian 8: Prestasi
Tuliskan pencapaian atau penghargaan yang pernah kamu peroleh, baik dalam bidang akademik maupun nonakademik.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Isian teks bebas (placeholder: "Tulis jawabanmu di sini..."); isinya dibaca dan ditafsirkan psikolog atau rekruter. Sumber tidak menyebut panjang minimum.',
        status: 'draft',
      },
      {
        nomor: 9,
        tipe: 'uraian',
        pertanyaan: `Bagian 9: Kelebihan dan Kekurangan Diri (20 Poin)
Tuliskan kelebihan dan kekurangan yang menggambarkan dirimu berdasarkan kondisi dan pengalaman sebenarnya.`,
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Tidak ada kunci atau skor. Aturan yang diperiksa sistem: jumlah poin kelebihan + kekurangan harus tepat 20 (gabungan, bukan 20 kelebihan dan 20 kekurangan secara terpisah), satu poin pada setiap kolom jawaban. Isi poinnya dibaca dan ditafsirkan psikolog atau rekruter.',
        status: 'draft',
      },
    ],
  },
];

export const deskripsiDiri: Subtes = {
  kode: 'deskripsi-diri',
  nama: 'Tes Deskripsi Diri',
  jumlahSoal: 9,
  waktuMenit: 10,
  bankSoal: false,
  formatKetentuan: `Peserta menuliskan sendiri gambaran dirinya dalam 9 bagian berurutan: 8 bagian teks bebas (Biodata, Hobi, Cita-cita, Diri Sendiri dalam 5 Tahun, Moto Hidup, Pengalaman Organisasi, Olahraga dan Kesenian, Prestasi) dan bagian 9 berupa daftar poin Kelebihan dan Kekurangan Diri. Bentuknya uraian bebas: tidak ada pilihan jawaban, seluruh isi datang dari peserta. Seluruh bagian wajib terisi dalam 10 menit.

Pembuka di layar (dikutip dari sumber): "Pada simulasi ini, kamu akan diminta mengisi beberapa informasi mengenai diri sendiri, seperti pengalaman, minat, tujuan, serta kelebihan dan kekurangan diri. Jawablah setiap bagian berdasarkan kondisi dan pengalaman dirimu sendiri. Gunakan jawaban yang jujur, jelas, dan singkat, serta pastikan seluruh bagian terisi sebelum menyelesaikan simulasi."

Aturan bagian 9 (20 poin): "Kamu harus mengisi total 20 poin yang merupakan gabungan antara kelebihan dan kekurangan diri. Jumlah 20 poin tersebut bukan 20 kelebihan dan 20 kekurangan secara terpisah." Satu kelebihan atau kekurangan ditulis pada setiap kolom jawaban.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/deskripsi-diri-awal.webp⟧
Layar awal: ringkasan tes (9 bagian isian, 10 menit, 20 poin) dan disclaimer sumber. Pilihan "Mode Simulasi" hanya ada di prototipe untuk pengujian.
⟦gambar:gambar/psikoteskerja/deskripsi-diri-mengerjakan.webp⟧
Saat mengerjakan, bagian 9: penghitung 20 poin dan dua kolom, Kelebihan Diri dan Kekurangan Diri (contoh isian bawaan prototipe).`,
  penilaian: `Tidak ada skor, nilai, atau interpretasi otomatis, dan sumber melarang menambahkannya. Satu-satunya aturan yang diperiksa sistem adalah jumlah poin bagian 9 harus tepat 20. Jawaban dibaca dan ditafsirkan psikolog atau rekruter. Statistik pengisian (bagian terisi, jumlah poin, jumlah kata, waktu terpakai) hanya fakta pengisian, bukan penilaian.

Disclaimer sumber: "Simulasi ini dibuat sebagai sarana latihan dan gambaran mengenai Tes Deskripsi Diri yang dapat ditemui dalam proses seleksi. Simulasi ini tidak menyediakan skor, penilaian psikologis, maupun kesimpulan mengenai kepribadian peserta. Bentuk pertanyaan dan pelaksanaan tes sebenarnya dapat berbeda sesuai kebijakan penyelenggara rekrutmen."

Tangkapan layar hasil di prototipe:
⟦gambar:gambar/psikoteskerja/deskripsi-diri-hasil.webp⟧
Lembar rekap: status pengiriman, statistik pengisian, dan jawaban peserta (isian contoh bawaan prototipe).`,
  catatan: 'Belum ditetapkan di sumber: (1) panjang minimum jawaban tiap bagian (prototipe tidak memberlakukan minimum); (2) apakah komposisi 20 kelebihan + 0 kekurangan sah (prototipe mengizinkannya tetapi menandainya dengan peringatan); (3) daftar isian Biodata, karena instruksinya "sesuai data yang diminta" tetapi daftar field tidak ada di dokumen (prototipe memakai satu kotak teks bebas). Sumber memakai sapaan "kamu".',
  materi: [
    { nama: '1. Biodata', catatan: 'teks bebas' },
    { nama: '2. Hobi', catatan: 'teks bebas' },
    { nama: '3. Cita-cita', catatan: 'teks bebas' },
    { nama: '4. Diri Sendiri dalam 5 Tahun', catatan: 'teks bebas' },
    { nama: '5. Moto Hidup', catatan: 'teks bebas' },
    { nama: '6. Pengalaman Organisasi', catatan: 'teks bebas' },
    { nama: '7. Olahraga dan Kesenian', catatan: 'teks bebas' },
    { nama: '8. Prestasi', catatan: 'teks bebas' },
    { nama: '9. Kelebihan dan Kekurangan Diri (20 Poin)', catatan: 'daftar 20 poin' },
  ],
  contoh,
};
