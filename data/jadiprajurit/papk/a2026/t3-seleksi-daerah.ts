import type { Kelompok, Tahapan } from '@/lib/skema';

/**
 * Seleksi Tingkat Daerah.
 *
 * Status 'indikasi': kelompok pemeriksaannya berasal dari sumber teknis
 * sekunder (pengalaman peserta). Riset menyebut rincian urutan dan sistem
 * gugur mengikuti panitia, jadi di sini tidak ada jumlah soal, durasi, atau
 * target angka.
 *
 * Contoh soal: satu soal Mental Ideologi beserta tiga contoh pertanyaan
 * wawancara, semuanya dari riset. Riset menyebut contoh soal dikembangkan
 * untuk pembelajaran, bukan soal resmi atau bocoran seleksi TNI. Subbab soal
 * lain di riset (Wawasan Kebangsaan, TIU, TKP, Penalaran Logis, Deret Angka,
 * Literasi Data, Bahasa Inggris) baru berupa judul tanpa soal, jadi tidak
 * ditulis di sini.
 */
const contohMentalIdeologi: Kelompok[] = [
  {
    soal: [
      {
        nomor: 1,
        tipe: 'pg',
        pertanyaan: 'Sikap yang paling mencerminkan komitmen terhadap NKRI dalam pelaksanaan tugas adalah ....',
        opsi: [
          { label: 'A', teks: 'mengutamakan kepentingan kelompok di atas aturan' },
          { label: 'B', teks: 'menjalankan tugas sesuai hukum, konstitusi, dan kepentingan negara' },
          { label: 'C', teks: 'mengikuti instruksi yang jelas melanggar hukum' },
          { label: 'D', teks: 'menyembunyikan pelanggaran untuk menjaga citra' },
          { label: 'E', teks: 'mengabaikan prosedur apabila hasilnya dianggap baik' },
        ],
        kunci: 'B',
        pembahasan:
          'Komitmen terhadap NKRI harus diwujudkan melalui kepatuhan pada hukum dan konstitusi. ' +
          'Integritas tidak identik dengan kepatuhan buta terhadap tindakan yang melanggar aturan.',
        status: 'draft',
      },
      {
        nomor: 2,
        tipe: 'uraian',
        pertanyaan: 'Contoh pertanyaan wawancara: Mengapa kamu memilih jalur Pa PK dibandingkan jalur karier lain yang sesuai dengan jurusanmu?',
        kunci: '',
        tanpaKunci: true,
        pembahasan:
          'Tidak ada jawaban benar atau salah. Wawancara dipakai untuk menilai konsistensi, motivasi, ' +
          'dan pemahaman kebangsaan.',
        status: 'draft',
      },
      {
        nomor: 3,
        tipe: 'uraian',
        pertanyaan: 'Contoh pertanyaan wawancara: Apa yang kamu pahami tentang perbedaan peran TNI AD, TNI AL, dan TNI AU?',
        kunci: '',
        tanpaKunci: true,
        pembahasan:
          'Tidak ada jawaban benar atau salah. Wawancara dipakai untuk menilai konsistensi, motivasi, ' +
          'dan pemahaman kebangsaan.',
        status: 'draft',
      },
      {
        nomor: 4,
        tipe: 'uraian',
        pertanyaan: 'Contoh pertanyaan wawancara: Bagaimana kamu merespons apabila pilihan matra yang kamu inginkan berbeda dari kebutuhan organisasi?',
        kunci: '',
        tanpaKunci: true,
        pembahasan:
          'Tidak ada jawaban benar atau salah. Wawancara dipakai untuk menilai konsistensi, motivasi, ' +
          'dan pemahaman kebangsaan.',
        status: 'draft',
      },
    ],
  },
];

export const tahapSeleksiDaerah: Tahapan = {
  kode: 'seleksi-daerah',
  nama: 'Seleksi Tingkat Daerah',
  deskripsi: `Sumber teknis sekunder menggambarkan seleksi tingkat daerah mencakup empat kelompok pemeriksaan yang berulang kali muncul dalam pengalaman peserta: kesehatan, kesamaptaan atau jasmani, Mental Ideologi, dan psikologi. Administrasi lanjutan dapat menyertainya bila ditetapkan panitia.

Rincian urutan serta sistem gugur mengikuti panitia. Jenis dan urutan pemeriksaan di bawah adalah pola dari pengalaman peserta, bukan pengumuman resmi gelombang 2026.`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'kesehatan',
      nama: 'Pemeriksaan Kesehatan',
      catatan:
        'Persiapan difokuskan pada pemahaman dokumen, pemeriksaan kesehatan yang dipersyaratkan, dan ' +
        'kesiapan mengikuti pemeriksaan resmi. Diagnosis, standar medis rinci, dan keputusan memenuhi ' +
        'syarat atau tidak memenuhi syarat sepenuhnya merupakan kewenangan tim kesehatan seleksi.',
      bankSoal: false,
    },
    {
      kode: 'kesamaptaan',
      nama: 'Kesamaptaan Jasmani',
      catatan:
        'Daftar materi adalah jenis aktivitas yang pernah digunakan dalam kesamaptaan menurut rangkuman teknis. ' +
        'Target angka dan program latihan sengaja tidak ditetapkan: standar resmi mengikuti ketentuan panitia.',
      materi: [
        { nama: 'Lari 12 menit' },
        { nama: 'Pull-up (pria) / chinning (wanita)' },
        { nama: 'Push-up' },
        { nama: 'Sit-up' },
        { nama: 'Shuttle run' },
        { nama: 'Renang' },
      ],
      bankSoal: false,
    },
    {
      kode: 'mental-ideologi',
      nama: 'Mental Ideologi',
      catatan:
        'Materi mencakup wawancara untuk menilai konsistensi, motivasi, dan pemahaman kebangsaan. ' +
        'Contoh soal dikembangkan untuk pembelajaran, bukan soal resmi atau bocoran seleksi TNI.',
      materi: [
        { nama: 'Pancasila dan nilai-nilainya' },
        { nama: 'UUD 1945 dan dasar konstitusional' },
        { nama: 'NKRI, nasionalisme, patriotisme, dan bela negara' },
        { nama: 'Sejarah Indonesia serta isu pemberontakan/gerakan separatis dalam konteks wawasan kebangsaan' },
        { nama: 'Profil pribadi, keluarga, pendidikan, pengalaman, dan motivasi menjadi TNI' },
        { nama: 'Integritas, etika, toleransi, dan pertanyaan situasional' },
        { nama: 'Wawasan sosial, isu aktual, serta pengetahuan umum yang relevan' },
        { nama: 'Wawancara untuk menilai konsistensi, motivasi, dan pemahaman kebangsaan' },
      ],
      contoh: contohMentalIdeologi,
    },
    {
      kode: 'psikologi',
      nama: 'Psikologi',
      catatan:
        'Latihan dilakukan secara wajar, tanpa diarahkan untuk memanipulasi instrumen kepribadian. ' +
        'Instrumen yang dipakai mengikuti panitia.',
      materi: [
        { nama: 'Penalaran verbal', catatan: 'Sinonim, antonim, analogi, hubungan kata, silogisme' },
        { nama: 'Penalaran numerik', catatan: 'Operasi hitung, deret angka, pola, dan logika aritmatika' },
        { nama: 'Simbol dan ketelitian' },
        { nama: 'Kemampuan spasial/visual', catatan: 'Bentuk, kubus, dan pola gambar' },
        { nama: 'Inventori kepribadian atau instrumen psikologi lain sesuai panitia' },
        {
          nama: 'Wawasan kebangsaan/pengetahuan umum',
          catatan: 'Dapat muncul dalam beberapa bentuk latihan menurut pengalaman peserta',
        },
      ],
    },
  ],
};
