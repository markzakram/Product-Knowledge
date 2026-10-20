import type { Tahapan } from '@/lib/skema';

const POLA_LAMA =
  'Detail materi, jumlah soal, alokasi waktu, dan penilaian soal masih ' +
  'mengacu pada pola seleksi tahun sebelumnya karena belum ada ketentuan ' +
  'resmi khusus tahun 2026. Informasi ini sementara dan dapat berubah ' +
  'mengikuti pengumuman resmi terbaru.';

/**
 * Seleksi Kompetensi dengan CAT BKN.
 *
 * Seluruh rinciannya di dokumen riset ditulis untuk PPPK Guru, dan dokumen itu
 * sendiri menyatakan angkanya masih mengikuti pola tahun sebelumnya (rujukan
 * utama PERMENPAN No. 38 Tahun 2017). Karena itu statusnya 'indikasi'.
 *
 * Contoh soal belum ada: dokumen riset hanya menautkan dokumen contoh soal
 * (Mansoswan dan Teknis) di Drive, tanpa memuat soalnya.
 */
export const tahapSeleksiKompetensi: Tahapan = {
  kode: 'seleksi-kompetensi',
  nama: 'Seleksi Kompetensi (CAT BKN)',
  deskripsi:
    'Seleksi kompetensi dengan CAT BKN untuk PPPK Guru terdiri atas kompetensi ' +
    'teknis, manajerial, sosial kultural, dan wawancara untuk menilai integritas ' +
    'dan moralitas. Bobotnya 50 persen dari nilai akhir Guru dan 60 persen dari ' +
    'nilai akhir Tendik.\n\n' +
    `${POLA_LAMA} Rujukan utama dokumen riset: PERMENPAN Nomor 38 Tahun 2017.\n\n` +
    'Rincian di bawah ini untuk PPPK Guru. Untuk Tenaga Kependidikan belum ada ' +
    'detail resmi; teknis pelaksanaannya diumumkan kemudian. Dokumen riset ' +
    'memperkirakan pola yang sama (teknis, manajerial, sosial kultural, dan ' +
    'wawancara), tetapi itu perkiraan, bukan ketentuan.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'teknis',
      nama: 'Kompetensi Teknis',
      jumlahSoal: 90,
      waktuMenit: 120,
      penilaian:
        `- Bobot skor per opsi 1 sampai 5; opsi yang tidak diberi bobot bernilai 0.
- Skor maksimal 450.
- Passing grade ditetapkan per jabatan (rentang historis sekitar 150 sampai 220).
Bobot per opsi mengacu pada hasil live score seleksi kompetensi PPPK Guru yang dikutip dokumen riset.`,
      catatan:
        `${POLA_LAMA} Waktu 120 menit tercatat hanya pada baris kompetensi ` +
        'teknis; sel waktu manajerial dan sosial kultural kosong, sedangkan ' +
        'total tabel riset 130 menit untuk 145 soal (120 menit ditambah 10 ' +
        'menit wawancara). Riset tidak menyatakan eksplisit bahwa 120 menit ' +
        'mencakup tiga subtes pertama.',
      materi: [{ nama: 'Pedagogik Profesional' }],
    },
    {
      kode: 'manajerial',
      nama: 'Kompetensi Manajerial',
      jumlahSoal: 25,
      penilaian:
        `- Bobot skor per opsi 1 sampai 4; opsi yang tidak diberi bobot bernilai 0.
- Skor maksimal 180 dan passing grade 130. Passing grade berbeda-beda setiap tahun dan datanya belum pasti.`,
      catatan:
        `${POLA_LAMA} Angka skor maksimal 180 tertulis pada baris manajerial. ` +
        'Angka itu sama dengan 45 soal dikali 4, jadi kemungkinan mencakup ' +
        'manajerial dan sosial kultural sekaligus (sel penilaian sosial ' +
        'kultural di riset kosong). Ini pembacaan kami, bukan pernyataan riset.',
      materi: [
        { nama: 'Integritas' },
        { nama: 'Kerja Sama' },
        { nama: 'Komunikasi' },
        { nama: 'Orientasi pada Hasil' },
        { nama: 'Pelayanan Publik' },
        { nama: 'Pengembangan Diri dan Orang Lain' },
        { nama: 'Mengelola Perubahan' },
        { nama: 'Pengambilan Keputusan' },
      ],
    },
    {
      kode: 'sosial-kultural',
      nama: 'Kompetensi Sosial Kultural',
      jumlahSoal: 20,
      penilaian:
        'Riset tidak mencantumkan rincian penilaian terpisah untuk subtes ini. ' +
        'Lihat penilaian Kompetensi Manajerial untuk skor maksimal dan passing grade.',
      catatan: POLA_LAMA,
      materi: [{ nama: 'Perekat Bangsa' }],
    },
    {
      kode: 'wawancara',
      nama: 'Wawancara Integritas dan Moralitas',
      jumlahSoal: 10,
      waktuMenit: 10,
      penilaian:
        `- Bobot skor per opsi 1 sampai 4; opsi yang tidak diberi bobot bernilai 0.
- Skor maksimal 40 dan passing grade 24.`,
      catatan: POLA_LAMA,
      materi: [
        { nama: 'Kejujuran' },
        { nama: 'Komitmen' },
        { nama: 'Kepatuhan' },
        { nama: 'Keadilan' },
        { nama: 'Etika' },
      ],
    },
  ],
};
