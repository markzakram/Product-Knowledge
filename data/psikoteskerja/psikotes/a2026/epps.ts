import type { Kelompok, Subtes } from '@/lib/skema';

/**
 * EPPS (Edwards Personal Preference Schedule): 225 pasang pernyataan, 15 kebutuhan, 45 menit.
 *
 * Dibuat dari draft prototipe PROTOTIPE-EPPS.html (folder Draft Prototype, diubah
 * 21 Agustus 2026; PROTOTIPE-SIMULASI-EPPS.html dan PROTOTIPE-EVALUASI-EPPS.html sebagai
 * pembanding, angkanya sama): 15 variabel, bank 225 pasang, matriks 15 x 15, norma A dan B.
 * Contoh: 10 pasang asli. Variabel tiap pilihan dihitung dari posisi soal pada matriks
 * (A = variabel baris, B = variabel kolom). Soal 135 dan 171 (cacat di sumber) tidak dipakai.
 * Boleh disunting tangan.
 */
const contoh: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya ingin menolong teman-teman saya, bila mereka berada dalam kesulitan.' },
          { label: 'B', teks: 'Saya ingin berkarya dan bekerja sebaik mungkin.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: 'Soal ulangan (soal konsistensi). Posisinya di diagonal matriks (baris Ach x kolom Ach), jadi tidak menambah skor. Pasangan pernyataannya mengulang soal 151 (A mengukur Nur, B mengukur Ach; redaksi di bank prototipe sedikit berbeda dari soal itu), dan jawabannya dibandingkan dengan jawaban soal 151 pada uji konsistensi (con).',
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya suka menceritakan hal-hal yang lucu waktu pesta.' },
          { label: 'B', teks: 'Saya ingin menulis roman, atau sandiwara yang hebat.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Exh x kolom Ach.
Memilih A memberi 1 poin ke Exhibition (Exh), variabel baris. Memilih B memberi 1 poin ke Achievement (Ach), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 22,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya suka memuji seseorang yang saya kagumi.' },
          { label: 'B', teks: 'Saya ingin merasa bebas melakukan yang saya kehendaki.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Def x kolom Aut.
Memilih A memberi 1 poin ke Deference (Def), variabel baris. Memilih B memberi 1 poin ke Autonomy (Aut), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 36,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya ingin menyelesaikan tugas yang memang membutuhkan ketrampilan serta usaha.' },
          { label: 'B', teks: 'Saya ingin teman-teman memberi dorongan kepada saya bila saya menghadapi kegagalan.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Ach x kolom Suc.
Memilih A memberi 1 poin ke Achievement (Ach), variabel baris. Memilih B memberi 1 poin ke Succorance (Suc), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 57,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          {
            label: 'A',
            teks: 'Saya suka mengikuti adat istiadat dan menghindarkan hal-hal yang mungkin dianggap tak wajar oleh orang-orang yang saya hormati.',
          },
          { label: 'B', teks: 'Saya suka mengikuti mode atau cara baru.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Def x kolom Chg.
Memilih A memberi 1 poin ke Deference (Def), variabel baris. Memilih B memberi 1 poin ke Change (Chg), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 63,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Jika saya harus bepergian, maka saya ingin segala sesuatunya telah direncanakan terlebih dahulu.' },
          { label: 'B', teks: 'Saya ingin mengerjakan teka-teki atau memecahkan persoalan-persoalan sampai selesai.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Ord x kolom End.
Memilih A memberi 1 poin ke Order (Ord), variabel baris. Memilih B memberi 1 poin ke Endurance (End), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 88,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya ingin diperlakukan dengan ramah oleh teman-teman saya.' },
          { label: 'B', teks: 'Saya ingin pekerjaan saya diatur dan direncanakan sebelum dimulai.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Suc x kolom Ord.
Memilih A memberi 1 poin ke Succorance (Suc), variabel baris. Memilih B memberi 1 poin ke Order (Ord), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 109,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Bila berada dalam suatu kelompok, saya ingin menentukan hal-hal yang akan dilakukan.' },
          { label: 'B', teks: 'Saya suka meramalkan bagaimana teman-teman saya akan bertindak dalam berbagai situasi.' },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Dom x kolom Int.
Memilih A memberi 1 poin ke Dominance (Dom), variabel baris. Memilih B memberi 1 poin ke Intraception (Int), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 140,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Bila saya melakukan kesalahan, saya merasa harus dihukum.' },
          {
            label: 'B',
            teks: 'Saya suka bertahan menghadapi suatu pekerjaan atau masalah sekalipun tampaknya seolah-olah saya tak akan berhasil.',
          },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Aba x kolom End.
Memilih A memberi 1 poin ke Abasement (Aba), variabel baris. Memilih B memberi 1 poin ke Endurance (End), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
      {
        nomor: 160,
        tipe: 'pg',
        pertanyaan: 'Manakah yang lebih menggambarkan diri Anda?',
        opsi: [
          { label: 'A', teks: 'Saya ingin membalas dendam terhadap orang yang menghina saya.' },
          {
            label: 'B',
            teks: 'Bila saya berada dalam suatu kelompok, saya suka menerima pimpinan orang lain dalam memutuskan hal-hal yang akan dilakukan.',
          },
        ],
        kunci: '',
        tanpaKunci: true,
        pembahasan: `Posisi pada matriks: baris Agg x kolom Def.
Memilih A memberi 1 poin ke Aggression (Agg), variabel baris. Memilih B memberi 1 poin ke Deference (Def), variabel kolom.
Tidak ada jawaban benar: tiap pilihan hanya menambah 1 poin ke variabelnya. Skor mentah sebuah variabel = poin dari barisnya + poin dari kolomnya (0 sampai 28).`,
        status: 'draft',
      },
    ],
  },
];

export const epps: Subtes = {
  kode: 'epps',
  nama: 'Edwards Personal Preference Schedule (EPPS)',
  jumlahSoal: 225,
  waktuMenit: 45,
  formatKetentuan: `225 pasang pernyataan (A dan B), satu pasang per layar. Peserta wajib memilih satu pernyataan yang lebih menggambarkan dirinya (forced choice): tidak ada pilihan netral, tidak boleh dikosongkan, dan tidak ada jawaban benar atau salah. Seluruh 225 pasang harus terisi. Di antara 225 pasang, 15 pasang adalah pengulangan soal lain (soal konsistensi) yang tidak diskor.

Pedoman pengerjaan di layar:
- Pernyataan disajikan berpasangan; pilih yang lebih menggambarkan diri Anda.
- Bila kedua pernyataan terasa cocok, tetap pilih satu yang lebih mirip. Bila tidak satu pun cocok, pilih yang kurang jauh dari gambaran diri.
- Jawab sesuai keadaan sekarang, bukan yang dianggap wajar atau seharusnya.
- Contoh di petunjuk: A "Saya suka berbicara tentang diri saya dengan orang lain." atau B "Saya suka bekerja untuk suatu tujuan yang telah saya tentukan bagi diri saya."; juga A "Saya bersusah hati bila gagal dalam sesuatu." atau B "Saya merasa gugup bila harus berbicara di depan orang banyak."

Waktu 45 menit.

Tangkapan layar prototipe:
⟦gambar:gambar/psikoteskerja/epps-awal.webp⟧
Layar awal: ringkasan tes (225 pasang pernyataan, 45 menit, 15 aspek, pilih A atau B). Pilihan "Mode Simulasi" hanya ada di prototipe untuk pengujian.
⟦gambar:gambar/psikoteskerja/epps-mengerjakan.webp⟧
Saat mengerjakan: satu pasang pernyataan per layar, tombol A dan B, dan panel navigasi 225 soal.`,
  penilaian: `Skoring otomatis penuh (aritmatika pada matriks 15 x 15 ditambah satu tabel norma), enam tahap:
1. Kumpulkan 225 jawaban A/B; tolak bila ada yang kosong.
2. Uji konsistensi: 15 soal yang dicetak ulang (di diagonal matriks) dibandingkan dengan soal aslinya. Jumlah pasangan yang jawabannya sama = con (maksimum 15). Bila con kurang dari 10, skoring dihentikan: hasil dianggap meragukan dan tidak perlu diinterpretasikan.
3. Hitung r dan c. Lembar jawaban adalah matriks 15 x 15 (3 blok x 5 baris x 15 kolom) dengan 15 variabel di baris dan kolom. Jawaban A memberi 1 poin ke variabel baris (r), jawaban B ke variabel kolom (c). Ke-15 sel diagonal (soal ulangan) tidak dihitung. Nomor soal = (blok x 75) + (kolom x 5) + (baris dalam blok) + 1.
4. Skor mentah s = r + c untuk tiap variabel (0 sampai 28). Total seluruh variabel wajib tepat 210 (225 - 15 soal ulangan).
5. Skor mentah diubah menjadi persentil memakai tabel norma per variabel; skor mentah yang sama bisa berarti persentil berbeda pada variabel berbeda.
6. Persentil dipetakan ke kategori atau simbol menurut norma yang dipilih:
- Norma A (Percentile): 97 ke atas Very High, 85-96 High, 17-84 Average, 4-16 Low, 3 ke bawah Very Low.
- Norma B (tabel simbol): +++ Sangat Tinggi (di atas 95), ++ Tinggi (85-95), + Cukup Tinggi (70-84), 0 Rata-rata (30-69), - Cukup Rendah (15-29), -- Rendah (5-14), --- Sangat Rendah (di bawah 5).

Interpretasi naratif dinamika kepribadian, keputusan kelulusan atau kecocokan posisi, dan pemilihan norma tetap menjadi wewenang psikolog.

Tangkapan layar hasil di prototipe (dari jawaban acak, hanya ilustrasi):
⟦gambar:gambar/psikoteskerja/epps-hasil.webp⟧
Laporan hasil: validasi konsistensi dan total skor, lalu kebutuhan paling menonjol dan paling rendah beserta persentil dan kategorinya.`,
  catatan: `Belum diputuskan di sumber: (1) dokumen memuat tiga sistem kategorisasi yang saling bertentangan. Contohnya persentil 82 berarti Average menurut Norma A tetapi Cukup Tinggi menurut Norma B. Norma C (Mean Needs, berbasis skor mentah dan jenis kelamin; tabel untuk wanita tidak punya baris +++) belum dipakai prototipe. Norma yang dipakai instansi harus diputuskan psikolog. (2) Skor mentah di luar rentang tabel persentil diberi aturan clamp di prototipe (di atas rentang = 99, di bawah rentang = 1) yang perlu dikonfirmasi psikolog. (3) Contoh perhitungan di dokumen sumber punya con = 9 (di bawah ambang 10) dan jumlah skor 209 (bukan 210), kemungkinan salah ketik.

Kalimat interpretasi per variabel yang tampil di prototipe hanya templat; kalimat finalnya wajib disusun atau disetujui psikolog. Dua soal (135 dan 171) bermasalah di buku sumber: teks pilihan A tidak cocok dengan variabel posisinya. Karena itu keduanya tidak dipakai sebagai contoh di sini.`,
  materi: [
    { nama: 'Ach: Achievement', catatan: 'Kebutuhan untuk sukses / mencapai sesuatu' },
    { nama: 'Def: Deference', catatan: 'Kebutuhan mengikuti dan memenuhi ekspektasi tertentu' },
    { nama: 'Ord: Order', catatan: 'Kebutuhan menjadi teratur dan terorganisasi' },
    { nama: 'Exh: Exhibition', catatan: 'Kebutuhan menjadi pusat perhatian' },
    { nama: 'Aut: Autonomy', catatan: 'Kebutuhan menjadi independen' },
    { nama: 'Aff: Affiliation', catatan: 'Keinginan berteman dan kecenderungan loyal' },
    { nama: 'Int: Intraception', catatan: 'Kebutuhan menganalisa diri sendiri dan orang lain' },
    { nama: 'Suc: Succorance', catatan: 'Kebutuhan dibantu orang lain' },
    { nama: 'Dom: Dominance', catatan: 'Kebutuhan untuk menjadi pemimpin' },
    { nama: 'Aba: Abasement', catatan: 'Kecenderungan merasa bersalah dan butuh berkompromi' },
    { nama: 'Nur: Nurturance', catatan: 'Kebutuhan menunjukkan kasih sayang dan dukungan' },
    { nama: 'Chg: Change', catatan: 'Kebutuhan akan perubahan' },
    { nama: 'End: Endurance', catatan: 'Kebutuhan tekun menyelesaikan sesuatu' },
    { nama: 'Het: Heterosexuality', catatan: 'Kebutuhan bergaul dengan lawan jenis dan mendapat afeksi dari mereka' },
    { nama: 'Agg: Aggression', catatan: 'Kebutuhan agresi verbal maupun fisik hingga bertentangan dengan orang lain' },
  ],
  contoh,
};
