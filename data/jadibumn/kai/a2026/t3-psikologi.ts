import type { Kelompok, Subtes, Tahapan } from '@/lib/skema';
import { baum } from '../../../psikoteskerja/psikotes/a2026/baum';
import { dap } from '../../../psikoteskerja/psikotes/a2026/dap';
import { deskripsiDiri } from '../../../psikoteskerja/psikotes/a2026/deskripsi-diri';
import { epps } from '../../../psikoteskerja/psikotes/a2026/epps';
import { pauli } from '../../../psikoteskerja/psikotes/a2026/pauli';
import { wartegg } from '../../../psikoteskerja/psikotes/a2026/wartegg';
import {
  contohBangunRuang,
  contohHitungCepat,
  contohKelebihanKekurangan,
  contohKetelitian,
  contohMatematikaUmum,
  contohVerbal,
} from './t3-psikologi-contoh';

/**
 * Tes Psikologi PT KAI — satu-satunya tahapan yang punya materi pembelajaran.
 *
 * Status 'indikasi', bukan 'terkonfirmasi'. Dokumen risetnya menulis terus
 * terang: "Jenis subtes, jumlah soal, dan alokasi waktu dapat berbeda pada
 * setiap tahun dan periode rekrutmen. Namun, rincian berikut menggambarkan
 * pola yang paling sering digunakan." Menandainya terkonfirmasi berarti
 * menyampaikan pola sebagai kepastian.
 *
 * Angka mapping hanya dicantumkan untuk subtes yang bisa dibaca tanpa ragu
 * dari "BUMN - Mapping Psikotes PT.KAI.xlsx". Sel gabungan di sheet itu
 * membuat sebagian baris tidak bisa dipetakan otomatis dengan yakin, dan
 * angka yang meragukan lebih baik dikosongkan daripada salah.
 *
 * Diperkaya 20 Okt 2026 dari "JadiBUMN - Riset Psikologi PT KAI" (BAB I dan BAB II):
 *   - Urutan subtes mengikuti tabel riset (Ketelitian paling akhir). Waktu DAP dan Baum
 *     8 menit (sebelumnya tertulis 10), mengikuti riset.
 *   - Contoh soal Verbal, Hitung Cepat, Matematika Umum, Bangun Ruang, dan Ketelitian
 *     ada di t3-psikologi-contoh.ts.
 *   - Untuk Deskripsi Diri (sebagian), EPPS, Pauli, Wartegg, DAP, dan Baum riset hanya
 *     menaut ke dokumen "AllPlatform - Riset Tes Psikologi". Dokumen yang sama menjadi
 *     sumber Psikotes Kerja, jadi isi keenam subtes itu DIPAKAI ULANG dari
 *     data/psikoteskerja/psikotes/a2026 (diimpor, bukan disalin), dengan angka waktu dan
 *     jumlah butir diganti sesuai riset PT KAI. Jangan menyalin teksnya ke sini.
 */

/** Menggeser nomor soal supaya tidak kembar saat dua subtes digabung. */
const geserNomor = (daftar: Kelompok[] | undefined, selisih: number): Kelompok[] =>
  (daftar ?? []).map((k) => ({
    ...k,
    soal: k.soal.map((s) => ({ ...s, nomor: s.nomor + selisih })),
  }));

/** EPPS: isi dipakai ulang dari Psikotes Kerja; waktu 40 menit menurut riset PT KAI (prototipe: 45). */
const eppsKai: Subtes = {
  ...epps,
  waktuMenit: 40,
  formatKetentuan: `225 pasang pernyataan (A dan B). Peserta wajib memilih satu pernyataan yang lebih menggambarkan dirinya (forced choice): tidak ada pilihan netral, tidak boleh dikosongkan, dan tidak ada jawaban benar atau salah. Waktu 40 menit menurut riset PT KAI.

Di antara 225 pasang, 15 pasang adalah pengulangan soal lain (soal konsistensi) yang tidak diskor. Jawab sesuai keadaan sekarang, bukan yang dianggap wajar atau seharusnya. Bila kedua pernyataan terasa cocok, tetap pilih satu yang lebih mirip; bila tidak satu pun cocok, pilih yang kurang jauh dari gambaran diri.

Contoh butir, cara penilaian, dan 15 kebutuhan yang diukur di bawah dipakai ulang dari Psikotes Kerja. Isinya bersumber dari dokumen "AllPlatform - Riset Tes Psikologi", yang juga dirujuk riset PT KAI.`,
  catatan: `Waktu 40 menit mengikuti riset PT KAI. Prototipe Psikotes Kerja memakai 45 menit.

${epps.catatan ?? ''}`,
};

/** Pauli: isi dipakai ulang dari Psikotes Kerja; waktu 60 menit sama dengan riset PT KAI. */
const pauliKai: Subtes = {
  ...pauli,
  formatKetentuan: `Penjumlahan berantai, sekitar 2.000 operasi dalam 60 menit menurut riset PT KAI. Dinilai dari kecepatan, ketelitian, dan konsistensi.

${pauli.formatKetentuan ?? ''}`,
  catatan: `Riset PT KAI menulis sekitar 2.000 butir, sedangkan rancangan prototipe Psikotes Kerja memuat 3.920 sel jawaban; jumlah pastinya dapat berbeda pada tiap periode rekrutmen.

${pauli.catatan ?? ''}`,
};

/**
 * DAP dan Baum satu subtes dengan satu jatah waktu 8 menit (riset PT KAI). Contoh, aspek yang
 * dinilai, dan tips dipakai ulang dari dua subtes terpisah di Psikotes Kerja (tiap tes 5 menit).
 */
const dapBaumKai: Subtes = {
  kode: 'dap-baum',
  nama: 'Tes Draw A Person (DAP) dan Tes Baum',
  waktuMenit: 8,
  bankSoal: false,
  formatKetentuan: `Tes menggambar proyektif: peserta menggambar seseorang (Draw A Person, DAP) dan sebatang pohon (Baum Tree Test) di kertas. Riset PT KAI memberi waktu 8 menit untuk kedua tes sekaligus, tanpa jumlah soal.

Instruksi contoh, aspek yang dinilai, dan tips di bawah dipakai ulang dari Psikotes Kerja yang bersumber dari dokumen "AllPlatform - Riset Tes Psikologi" (juga dirujuk riset PT KAI). Prototipe itu memakai 5 menit untuk tiap tes, jadi waktu yang tertulis pada soal contoh mengikuti prototipe, bukan riset PT KAI.`,
  penilaian: `Draw A Person (DAP):
${dap.penilaian ?? ''}

Baum Tree Test:
${baum.penilaian ?? ''}`,
  catatan: `Tes proyektif, tidak punya bank soal. Waktu 8 menit untuk DAP dan Baum sekaligus mengikuti riset PT KAI.

DAP: ${dap.catatan ?? ''}

Baum: ${baum.catatan ?? ''}`,
  materi: [
    ...(dap.materi ?? []).map((m) => ({ ...m, nama: `DAP: ${m.nama}` })),
    ...(baum.materi ?? []).map((m) => ({ ...m, nama: `Baum: ${m.nama}` })),
  ],
  contoh: [...(dap.contoh ?? []), ...geserNomor(baum.contoh, 1)],
};

/**
 * Deskripsi Diri: sembilan bagian dan tipe uraian tanpa kunci dipakai ulang dari Psikotes Kerja
 * (daftar bagiannya sama dengan riset PT KAI). Contoh jawaban Kelebihan dan Kekurangan dari riset
 * ditambahkan sebagai nomor 10 dan 11. `jumlahSoal` sengaja kosong: riset menulis "-".
 */
const deskripsiDiriKai: Subtes = {
  kode: 'deskripsi-diri',
  nama: 'Tes Deskripsi Diri',
  waktuMenit: 10,
  bankSoal: false,
  formatKetentuan: `Uraian bebas, bukan pilihan ganda. Isinya: biodata, hobi, cita-cita, diri sendiri dalam 5 tahun, moto hidup, pengalaman organisasi, olahraga dan kesenian, prestasi, serta kelebihan dan kekurangan (20 buah).

${deskripsiDiri.formatKetentuan ?? ''}`,
  penilaian: deskripsiDiri.penilaian,
  catatan: `Tidak punya bank soal; jumlah soal tidak berlaku. Contoh jawaban Kelebihan dan Kekurangan (nomor 10 dan 11) dari riset PT KAI; sembilan bagian di atasnya dipakai ulang dari Psikotes Kerja.

${deskripsiDiri.catatan ?? ''}`,
  materi: deskripsiDiri.materi,
  contoh: [...(deskripsiDiri.contoh ?? []), ...contohKelebihanKekurangan],
};

export const tahapPsikologi: Tahapan = {
  kode: 'psikologi',
  nama: 'Tes Psikologi',
  mode: 'offline',
  deskripsi: `Materi pembelajaran JadiBUMN untuk PT KAI berfokus pada tahapan ini.

Catatan dari dokumen riset: jenis subtes, jumlah soal, dan alokasi waktu dapat berbeda tiap tahun dan periode rekrutmen. Rincian di bawah adalah pola yang paling sering digunakan.

Tes Hitung Cepat dan Tes Matematika Umum terkadang hanya salah satunya yang diujikan, atau keduanya digabungkan, bergantung pada periode penyelenggara rekrutmen.`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'verbal',
      nama: 'Tes Verbal',
      jumlahSoal: 50,
      waktuMenit: 7,
      formatKetentuan: `Multiple Choice Multiple Answer. Setiap nomor terdiri atas lima pilihan kata (A sampai E), dan peserta memilih dua kata yang benar. Pada soal Sinonim, dua kata itu memiliki arti sama atau paling dekat; pada soal Antonim, maknanya saling bertentangan.`,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      materi: [
        { nama: 'Sinonim', catatan: 'Mengukur kemampuan mengenali hubungan persamaan makna antarkata.' },
        { nama: 'Antonim', catatan: 'Mengukur kemampuan mengenali kata-kata yang memiliki makna berlawanan.' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 300, status: 'berjalan' },
      ],
      contoh: contohVerbal,
    },
    {
      kode: 'hitung-cepat',
      nama: 'Tes Hitung Cepat',
      jumlahSoal: 25,
      waktuMenit: 7,
      formatKetentuan: `Perhitungan sederhana: kali, bagi, tambah, kurang (Kabataku). Soal mengukur kemampuan melakukan operasi hitung dasar secara tepat dan efisien. Kerjakan operasi sesuai urutan perhitungan, kemudian pilih jawaban yang paling tepat.`,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      catatan: 'Kadang hanya salah satu antara Hitung Cepat dan Matematika Umum yang diujikan. Hasil riset dan mapping hitung cepat ada di dokumen "BUMN - Mapping Hitung Cepat PT KAI".',
      materi: [
        { nama: 'Kabataku', catatan: 'Tingkat kesulitan mudah sampai sedang' },
        { nama: 'Urutan operasi hitung', catatan: 'Operasi di dalam tanda kurung dikerjakan lebih dulu (contoh soal 1).' },
        { nama: 'Bilangan desimal', catatan: 'Penjumlahan dan pengurangan bilangan desimal (contoh soal 2).' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 25, dibutuhkan: 250, tersedia: 175, status: 'berjalan' },
      ],
      contoh: contohHitungCepat,
    },
    {
      kode: 'matematika-umum',
      nama: 'Tes Matematika Umum',
      jumlahSoal: 25,
      waktuMenit: 7,
      formatKetentuan: `Soal cerita. Soal mengukur kemampuan memahami dan menyelesaikan permasalahan matematika yang berkaitan dengan kehidupan sehari-hari. Bacalah setiap soal dengan teliti, tentukan informasi yang diketahui, kemudian pilih jawaban yang paling tepat.`,
      penilaian: '(jumlah benar / jumlah soal) x 100',
      catatan: 'Kadang hanya salah satu antara Hitung Cepat dan Matematika Umum yang diujikan.',
      materi: [
        { nama: 'Operasi hitung' },
        { nama: 'Perbandingan' },
        { nama: 'Usia' },
        { nama: 'Keuntungan' },
        { nama: 'Waktu dan kecepatan' },
        { nama: 'Perbandingan berbalik nilai' },
        { nama: 'Aljabar' },
        { nama: 'Rata-rata' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 25, dibutuhkan: 250, tersedia: 175, status: 'berjalan' },
      ],
      contoh: contohMatematikaUmum,
    },
    {
      kode: 'bangun-ruang',
      nama: 'Tes Bangun Ruang',
      jumlahSoal: 50,
      waktuMenit: 7,
      formatKetentuan: `Jaring-jaring bangun ruang acak. Soal mengukur kemampuan mencocokkan bentuk tiga dimensi dengan jaring-jaring pembentuknya. Soal dapat menampilkan bangun ruang, termasuk bentuk tidak beraturan, lalu peserta memilih jaring-jaring yang tepat; atau menampilkan jaring-jaring lalu peserta menentukan bangun ruang yang terbentuk setelah dilipat. Perhatikan bentuk, jumlah, ukuran, dan posisi setiap sisi sebelum memilih jawaban.`,
      catatan: 'Soal berbentuk gambar. Dua contoh dari riset sudah ada gambarnya di repo; gambar untuk bank soal lainnya belum ada. Riset tidak memberi kunci dan pembahasan kedua contoh itu: keduanya disusun dari membaca gambar dan perlu dicek tim akademik.',
      materi: [
        { nama: 'Mencari jaring-jaring dari bangun ruang', catatan: 'Bangun ruang ditampilkan, termasuk bentuk tidak beraturan; peserta memilih jaring-jaringnya (contoh soal 2).' },
        { nama: 'Menentukan bangun ruang dari jaring-jaring', catatan: 'Jaring-jaring ditampilkan; peserta menentukan bangun ruang yang terbentuk setelah dilipat (contoh soal 1).' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 50, dibutuhkan: 500, tersedia: 300, status: 'berjalan' },
      ],
      contoh: contohBangunRuang,
    },
    deskripsiDiriKai,
    eppsKai,
    pauliKai,
    wartegg,
    dapBaumKai,
    {
      kode: 'ketelitian',
      nama: 'Tes Ketelitian',
      jumlahSoal: 90,
      waktuMenit: 2,
      formatKetentuan: `Perhatikan susunan huruf, angka, atau simbol di kiri (Kolom 1) dan di kanan (Kolom 2). Jika sama, pilih opsi "S". Jika ada yang berbeda, pilih opsi "T".`,
      materi: [
        { nama: 'Huruf atau kata', catatan: 'Contoh soal 1: Robert Pattinson.' },
        { nama: 'Huruf dan angka (alfanumerik)', catatan: 'Contoh soal 2: Kot65465345.' },
        { nama: 'Campuran huruf, angka, dan simbol', catatan: 'Contoh soal 3: 6^T%$F7(34!H#.' },
      ],
      mapping: [
        { tipe: 'tryout', paket: 10, soalPerPaket: 90, dibutuhkan: 900, tersedia: 950, status: 'selesai' },
      ],
      contoh: contohKetelitian,
    },
  ],
};
