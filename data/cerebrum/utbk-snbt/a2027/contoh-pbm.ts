import type { Kelompok } from '@/lib/skema';

/**
 * Contoh soal Pemahaman Bacaan dan Menulis (PBM) UTBK-SNBT 2027.
 *
 * Sumber: dokumen internal "Contoh Soal UTBK" (bagian PBM, hanya 2 soal; keduanya dipasang di sini). Dokumen
 * itu TIDAK memuat kunci dan pembahasan, jadi keduanya disusun ulang dan berstatus 'draft' sampai diperiksa
 * tim akademik. Kunci Kalimat Efektif ditentukan dengan eliminasi (hanya satu kalimat yang bermasalah).
 * Salah ketik jelas di sumber diperbaiki (mis. "sekedar" menjadi "sekadar").
 */
export const contohPBM: Kelompok[] = [
  // ── Dasar-dasar Kalimat - Kalimat Efektif ─────────────────────────────────
  {
    soal: [
      // contoh hal. 40, Kalimat Efektif no. 1
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: `Bacalah kalimat berikut!
(1) Perpustakaan sekolah memiliki peran penting dalam meningkatkan budaya literasi peserta didik. (2) Selain menyediakan buku pelajaran perpustakaan juga menghadirkan berbagai bacaan popular yang menarik minat siswa. (3) Namun, sebagian siswa masih jarang berkunjung karena lebih tertarik menggunakan gawai pada waktu luang. (4) Oleh karena itu, sekolah mulai mengadakan program wajib membaca selama lima belas menit sebelum pelajaran dimulai. (5) Program tersebut diharapkan mampu menumbuhkan kebiasaan membaca dan memperluas wawasan siswa. (6) Jika dilaksanakan secara konsisten, kegiatan itu dapat memberi dampak positif bagi seluruh warga sekolah.
Kalimat yang tidak efektif pada paragraf tersebut terdapat pada ....`,
        opsi: [
          { label: 'A', teks: `Kalimat 1` },
          { label: 'B', teks: `Kalimat 2` },
          { label: 'C', teks: `Kalimat 4` },
          { label: 'D', teks: `Kalimat 5` },
          { label: 'E', teks: `Kalimat 6` },
        ],
        kunci: 'B',
        pembahasan: `Submateri: Dasar-dasar Kalimat - Kalimat Efektif.
Kalimat efektif jelas, hemat, padu, dan sesuai kaidah penulisan. Tiap kalimat diperiksa:
- Kalimat (1), (4), (5), dan (6) lengkap (subjek dan predikat jelas), hemat, dan hubungan antarbagiannya tepat.
- Kalimat (3) memakai "karena" dengan tepat untuk menyatakan alasan.
- Kalimat (2) bermasalah: anak kalimat "Selain menyediakan buku pelajaran" tidak dipisahkan dari induk kalimatnya dengan tanda koma. Akibatnya "buku pelajaran perpustakaan" terbaca sebagai satu frasa dan subjek kalimat ("perpustakaan") menjadi kabur. Bentuk yang efektif: "Selain menyediakan buku pelajaran, perpustakaan juga menghadirkan ...".
Dengan eliminasi, kalimat yang tidak efektif adalah kalimat 2.
Jawaban: B`,
        status: 'draft',
      },
    ],
  },
  // ── Kata Ganti dan Kata Sambung - Kata Sambung (Konjungsi) ────────────────
  {
    stimulus: {
      judul: 'Bacaan · Kenikmatan Hidup yang Sederhana',
      isi: `(1) Seseorang dapat menemukan kenikmatan hidup dengan cara sederhana. (2) Sebagai contoh, dalam kehidupan sehari-hari kita dapat menikmati berjalan tanpa gangguan dari ponsel. (3) Menikmati hal-hal kecil seperti itu terdengar sepele. (4) Namun, sebenarnya hal tersebut sangat sulit dilakukan karena selalu ada dorongan untuk melakukan kegiatan yang produktif.

(5) Sayangnya, keberadaan teknologi, seperti ponsel pintar dan internet, menghambat banyak orang untuk menikmati kegiatan sederhana tersebut. (6) Meskipun banyak yang menganggap bermain media sosial termasuk kategori kegiatan sederhana, kegiatan tersebut tidak membuat otak berhenti bekerja. (7) Alasannya adalah informasi yang masuk ke otak juga tidak berhenti. (8) Hal itu tentu saja berbeda dengan berjalan keliling kompleks atau sekadar duduk menikmati matahari terbenam.`,
    },
    soal: [
      // contoh hal. 40, Kata Sambung (Konjungsi) no. 1
      {
        nomor: 2,
        tipe: 'pg',
        pertanyaan: `Fungsi kata penghubung karena dalam kalimat (4) adalah ...`,
        opsi: [
          { label: 'A', teks: `menjelaskan hubungan sebab-akibat` },
          { label: 'B', teks: `memerinci informasi sebelumnya` },
          { label: 'C', teks: `menegaskan kondisi berlawanan` },
          { label: 'D', teks: `mempertentangkan pernyataan` },
          { label: 'E', teks: `menentukan pilihan` },
        ],
        kunci: 'A',
        pembahasan: `Submateri: Kata Ganti dan Kata Sambung - Kata Sambung (Konjungsi).
Kalimat (4): "Namun, sebenarnya hal tersebut sangat sulit dilakukan karena selalu ada dorongan untuk melakukan kegiatan yang produktif."
Kata "karena" menghubungkan hal yang terjadi (sangat sulit dilakukan) dengan alasannya (selalu ada dorongan untuk melakukan kegiatan yang produktif). Jadi fungsinya menyatakan hubungan sebab-akibat (alasan).
Fungsi memerinci, menegaskan kondisi berlawanan, mempertentangkan, dan menentukan pilihan dipakai oleh konjungsi lain (mis. yaitu, tetapi, namun, atau), bukan oleh "karena".
Jawaban: A`,
        status: 'draft',
      },
    ],
  },
];
