import type { Tahapan } from '@/lib/skema';
import { contohPenalaranUmum } from './contoh-pu';
import { contohPPU } from './contoh-ppu';
import { contohPBM } from './contoh-pbm';
import { contohPK } from './contoh-pk';

/**
 * Tes Potensi Skolastik (TPS) UTBK-SNBT 2027.
 *
 * Disusun dari "Kurikulum UTBK-SNBT 2027" (Product Management Cerebrum, September 2026):
 *   - nama subtes, jumlah soal, dan waktu dari tabel Materi Pembelajaran (bagian 2.1);
 *   - strategi tiap subtes dari bagian 2.1.2 dan tipe soal dari BAB IV;
 *   - contoh soal dari dokumen "Contoh Soal UTBK" dan "Penalaran Induktif" (lihat contoh-*.ts).
 *
 * Urutan subtes mengikuti daftar materi di kurikulum (PU, PPU, PBM, PK). Baris tabel di kurikulum
 * berurutan PU, PK, PPU, PBM; urutan pengerjaan resmi belum ditetapkan, jadi tidak diklaim di sini.
 *
 * Kunci jawaban: yang ada di sumber (16 soal Penalaran Induktif) berstatus 'direview'; kunci dan
 * pembahasan yang disusun ulang berstatus 'draft' dan menunggu tim akademik (catatan tiap subtes).
 */

const PENILAIAN =
  'Skor dilaporkan per subtes, bukan hanya satu nilai rata-rata. Pilihan ganda: jawaban benar ' +
  'menambah poin, sedangkan jawaban salah dan tidak diisi tidak mengurangi poin. Kurikulum tidak ' +
  'menjelaskan cara menghitung skor majemuk kompleks dan isian singkat. Bobot tiap subtes untuk ' +
  'tiap program studi tidak dipublikasikan.';

export const tahapTps: Tahapan = {
  kode: 'tps',
  nama: 'Tes Potensi Skolastik (TPS)',
  mode: 'offline',
  deskripsi:
    'Kelompok pertama UTBK-SNBT: empat subtes, 90 soal, 90 menit (Penalaran Umum 30 soal, ' +
    'Pengetahuan dan Pemahaman Umum 20, Pemahaman Bacaan dan Menulis 20, Pengetahuan Kuantitatif 20). ' +
    'Dikerjakan dengan komputer di Pusat UTBK; "offline" di sini berarti tatap muka di lokasi tes, ' +
    'bukan dari rumah. Tidak ada jeda antarsubtes. Strukturnya proyeksi dari framework resmi 2026.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'pu',
      nama: 'Penalaran Umum (PU)',
      jumlahSoal: 30,
      waktuMenit: 30,
      formatKetentuan: `30 soal dalam 30 menit (rata-rata sekitar 1 menit per soal), terbagi tiga bagian yang masing-masing 10 soal dan 10 menit: Penalaran Induktif, Penalaran Deduktif, dan Penalaran Kuantitatif.

Tipe soal: pilihan ganda (lima opsi A sampai E, satu jawaban benar), majemuk kompleks (beberapa pernyataan dinilai sekaligus), dan isian singkat (terutama pada bagian kuantitatif).
Contoh tampilan majemuk kompleks, tiap pernyataan dijawab Benar atau Salah (tangkapan layar dari kurikulum):
⟦gambar:gambar/cerebrum/utbk2027-tipe-majemuk-kompleks.png⟧
Contoh majemuk kompleks lain, tiap pernyataan dijawab Ya atau Tidak (tabel kosong dari soal kertas berpetak di kurikulum; soalnya dipasang sebagai contoh Pola Barisan):
⟦gambar:gambar/cerebrum/utbk2027-tipe-majemuk-ya-tidak.png⟧
Contoh tampilan isian singkat, jawaban diketik langsung:
⟦gambar:gambar/cerebrum/utbk2027-tipe-isian-pu.png⟧

Strategi menurut kurikulum: kenali bentuk penalaran sebelum menyelesaikan, yaitu apakah soal meminta identifikasi pola, hubungan sebab-akibat, penarikan kesimpulan, pengujian argumen, atau analisis kuantitatif. Pada penalaran induktif, cari pola hubungan antarinformasi dan jangan menambah asumsi di luar stimulus. Pada penalaran deduktif, bedakan premis, konsekuensi, dan kesimpulan yang dapat diturunkan secara logis. Pada penalaran kuantitatif, pakai representasi atau hitungan paling sederhana yang sudah memberi jawaban.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. 16 soal (Penalaran Induktif dan satu Silogisme) ' +
        'memakai kunci dan pembahasan dari dokumen "Penalaran Induktif" dan berstatus direview. 22 soal ' +
        'lain berasal dari dokumen "Contoh Soal UTBK" (21 soal) dan BAB IV kurikulum (1 soal) yang ' +
        'tidak memuat kunci dan pembahasan: kunci dan pembahasannya disusun ulang oleh tim, dicek ulang ' +
        '(logika dengan tabel kebenaran, hitungan dengan Python), dan berstatus draft sampai diperiksa ' +
        'tim akademik. Dari 55 soal PU di dokumen "Contoh Soal UTBK", 14 soal Penalaran Induktif ' +
        'diganti versi lengkapnya dari dokumen "Penalaran Induktif", 10 soal tidak dimasukkan karena ' +
        'kuncinya ambigu atau datanya keliru, dan 10 soal karena kembar dengan soal lain. Modus ' +
        'Ponens dan Menyangkal Anteseden belum punya contoh.',
      materi: [
        {
          nama: 'Penalaran Induktif (10 soal, 10 menit)',
          catatan:
            'generalisasi; analogi; hubungan kausalitas; analitik (model urutan, pola, bahasa buatan, ' +
            'huruf acak/Bahasa Panda); kesesuaian pernyataan',
        },
        {
          nama: 'Penalaran Deduktif (10 soal, 10 menit)',
          catatan:
            'silogisme; modus ponens; modus tollens; argumen berantai (memperkuat, memperlemah, dan ' +
            'sebagainya); menyangkal anteseden; mengafirmasi konsekuensi',
        },
        {
          nama: 'Penalaran Kuantitatif (10 soal, 10 menit)',
          catatan:
            'operasi bilangan; perbandingan kuantitatif; persentase dan proporsi; soal cerita; ' +
            'statistika sederhana; tabel dan grafik; kecukupan data; pola barisan',
        },
      ],
      contoh: contohPenalaranUmum,
    },
    {
      kode: 'ppu',
      nama: 'Pengetahuan dan Pemahaman Umum (PPU)',
      jumlahSoal: 20,
      waktuMenit: 15,
      formatKetentuan: `20 soal dalam 15 menit (rata-rata sekitar 45 detik per soal), salah satu subtes dengan tuntutan kecepatan tertinggi. Soal berupa pilihan ganda dengan stimulus kalimat, wacana, atau sandi bahasa; tipe majemuk kompleks dan isian singkat dapat muncul di subtes mana pun.

Strategi menurut kurikulum: latih pengenalan pola kebahasaan secara otomatis, terutama makna kata dan frasa, hubungan antarbagian wacana, semantik, morfologi, sintaksis, dan analogi bahasa. Jangan membaca seluruh teks dengan kedalaman yang sama di setiap soal: fokus bacaan ditentukan oleh informasi yang ditanyakan. Pada soal makna kata atau frasa, konteks kalimat di sekitar kata sasaran menjadi prioritas. Pada soal kewacanaan, temukan dulu hubungan logis antarkalimat atau antarparagraf.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. Delapan contoh soal berasal dari dokumen ' +
        '"Contoh Soal UTBK" (bagian PPU, 14 soal) yang tidak memuat kunci dan pembahasan; kunci dan ' +
        'pembahasannya disusun ulang oleh tim dan berstatus draft. Enam soal sumber tidak dimasukkan: ' +
        'lima karena kuncinya ambigu (Makna no. 1 sampai 4 dan Morfologi no. 1; tiap soal punya dua ' +
        'pilihan yang sama-sama dapat dipertahankan) dan satu karena kembar dengan soal Bahasa Panda ' +
        'lain. Makna kata, morfologi, majas, dan kata konotatif/denotatif belum punya contoh.',
      materi: [
        { nama: 'Makna: kata, frasa, dan makna asosiasi', catatan: 'makna bertingkat, makna imbuhan yang sama' },
        { nama: 'Pemahaman bacaan pada wacana: ide pokok dan makna' },
        {
          nama: 'Kewacanaan',
          catatan: 'hubungan antarparagraf, kesesuaian atau kelogisan antarkalimat dalam wacana',
        },
        { nama: 'Semantik: sinonim' },
        { nama: 'Morfologi', catatan: 'kata rumpang, bentuk kata dan imbuhan' },
        { nama: 'Sintaksis: kalimat baku' },
        { nama: 'Analogi dan logika: Bahasa Panda' },
        { nama: 'Teks eksplanatif dan argumentatif' },
        { nama: 'Penggunaan majas' },
        { nama: 'Kata konotatif dan denotatif' },
        { nama: 'Kelompok kata berpasangan tetap' },
      ],
      contoh: contohPPU,
    },
    {
      kode: 'pbm',
      nama: 'Pemahaman Bacaan dan Menulis (PBM)',
      jumlahSoal: 20,
      waktuMenit: 25,
      formatKetentuan: `20 soal dalam 25 menit (rata-rata sekitar 75 detik per soal). Framework 2026 menajamkan cakupan PBM menjadi tiga bagian:
- Pemilihan Gagasan: penentuan judul, diksi, dan gagasan pelengkap.
- Penataan Gagasan: kalimat inti, penggabungan kalimat, pengurutan kalimat, penempatan kalimat, dan variasi kalimat.
- Perbaikan Gagasan: perbaikan kata serapan, penulisan huruf, kata gabung, kata sambung, kata mubazir, kalimat, dan diksi.

Strategi menurut kurikulum: tentukan dulu fungsi bagian bahasa yang diuji. Jangan hanya mencari bentuk yang terdengar paling baik; tentukan hubungan struktur, makna, kelogisan, keefektifan, dan ketepatan bahasanya. Dalam latihan, bandingkan alternatif jawaban dengan alasan kebahasaan yang eksplisit.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. Dokumen "Contoh Soal UTBK" hanya memuat dua soal ' +
        'PBM dan keduanya dipasang; karena tanpa kunci dan pembahasan di sumber, keduanya disusun ulang ' +
        'oleh tim dan berstatus draft. Kunci soal Kalimat Efektif ditentukan dengan eliminasi (hanya ' +
        'satu kalimat yang bermasalah), jadi tingkat keyakinannya sedang. Kohesi dan koherensi serta ' +
        'penulisan dan teknik bahasa belum punya contoh.',
      materi: [
        {
          nama: 'Dasar-dasar Kalimat',
          catatan: 'kalimat efektif; kalimat inti; kalimat tidak padu; penggunaan kalimat yang tepat; jenis makna',
        },
        {
          nama: 'Kata Ganti dan Kata Sambung',
          catatan: 'kata ganti; kata rujukan; kata sambung (konjungsi); imbuhan',
        },
        { nama: 'Kohesi dan Koherensi', catatan: 'kohesi dan koherensi; mengisi kalimat rumpang' },
        {
          nama: 'Penulisan dan Teknik Bahasa',
          catatan:
            'penulisan kata dan tanda baca yang salah; hukum KPTS; teknik mengutip; penulisan daftar ' +
            'pustaka, surat, dan lainnya',
        },
      ],
      contoh: contohPBM,
    },
    {
      kode: 'pk',
      nama: 'Pengetahuan Kuantitatif (PK)',
      jumlahSoal: 20,
      waktuMenit: 20,
      formatKetentuan: `20 soal dalam 20 menit (rata-rata sekitar 60 detik per soal). Cakupan menurut framework 2026: bilangan, aljabar, geometri dan pengukuran, analisis data, dan peluang. Selain konsep, subtes ini menuntut berpikir logis, sistematis, kritis, analitis, kreatif, dan argumentatif.

Tipe soal: pilihan ganda, dan isian singkat untuk hitungan. Bentuk khas pada contoh soal: membandingkan kuantitas P dan Q, menilai kecukupan data dari dua pernyataan, menentukan pernyataan yang benar, dan teka-teki kisi operasi. Contoh tampilan isian singkat:
⟦gambar:gambar/cerebrum/utbk2027-tipe-isian-pk.png⟧

Strategi menurut kurikulum: tentukan konsep utama dengan cepat sebelum menghitung. Hindari penyelesaian yang terlalu panjang bila ada sifat, pola, substitusi, eliminasi, atau pendekatan numerik yang lebih efisien. Pada soal evaluasi langkah penyelesaian, tidak perlu mengulang seluruh proses: periksa titik perubahan konsep atau operasi yang berpotensi salah.`,
      penilaian: PENILAIAN,
      catatan:
        'Kunci dan pembahasan menunggu tim akademik. 48 contoh soal berasal dari dokumen "Contoh Soal ' +
        'UTBK" (bagian PK, 71 soal) yang tidak memuat kunci dan pembahasan; kunci dan pembahasannya ' +
        'disusun ulang oleh tim, setiap hitungan dicek ulang dengan Python, dan berstatus draft. 23 soal ' +
        'sumber tidak dimasukkan: 13 karena datanya keliru atau kuncinya ambigu, 4 karena kembar, dan 6 ' +
        'sah tetapi tidak dipilih demi batas jumlah soal per submateri. Dua angka yang salah ketik di ' +
        'sumber sudah diganti: "141 jam" pada Perbandingan Senilai dan Tak Senilai menjadi "11 jam", dan ' +
        'panjang busur 7 pada Geometri no. 1 menjadi π. Hanya nilai itu yang membuat soalnya punya ' +
        'jawaban. Algoritma: diagram alir belum punya contoh.',
      materi: [
        { nama: 'Bilangan dan operasi bilangan' },
        { nama: 'Perbandingan senilai dan tak senilai' },
        { nama: 'Pola dan barisan' },
        { nama: 'Aritmatika sosial' },
        { nama: 'Statistika' },
        { nama: 'Sistem persamaan dan pertidaksamaan linear' },
        { nama: 'Geometri', catatan: 'bangun datar, ruang, garis-sudut' },
        { nama: 'FPB dan KPK' },
        { nama: 'Eksponen dan logaritma' },
        { nama: 'Relasi dan fungsi' },
        { nama: 'Fungsi dan invers' },
        { nama: 'Algoritma: diagram alir' },
        { nama: 'Trigonometri' },
        {
          nama: 'Cakupan tambahan di dokumen contoh soal',
          catatan: 'persamaan aljabar; persamaan dan pertidaksamaan nilai mutlak; matriks (tidak ada di tabel materi kurikulum)',
        },
      ],
      contoh: contohPK,
    },
  ],
};
