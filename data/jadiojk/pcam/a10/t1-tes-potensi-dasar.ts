import type { Tahapan } from '@/lib/skema';
import { contohKemampuanUmum, contohPenalaranNumerik } from './contoh';

/**
 * Tes Potensi Dasar PCAM 10 (Tahap 1).
 *
 * Disusun dari dokumen riset "JadiOJK - Riset PCAM dan MLE OJK 2026":
 *   - nama subtes, jumlah soal, dan waktu dari tabel Materi Pembelajaran
 *     (bagian 3.1);
 *   - jenis soal dan contoh dari BAB V (5.1.1 Kemampuan Umum dan 5.1.2
 *     Penalaran Numerik).
 *
 * Kolom "Penilaian Soal" di tabel itu hanya berisi placeholder "Sistem
 * Skoring …", jadi sistem skoring sengaja tidak diisi. MLE memakai tabel yang
 * sama dengan PCAM, jadi tidak dibuat tes terpisah.
 */
export const tahapTpd: Tahapan = {
  kode: 'tpd',
  nama: 'Tes Potensi Dasar (TPD)',
  deskripsi:
    'Dua subtes: Kemampuan Umum (pilihan ganda: verbal, numerik, figural) dan ' +
    'Penalaran Numerik (tes interaktif: tabel, bar chart, line graph, pie chart). ' +
    'Jumlah soal dan waktu mengikuti tabel Materi Pembelajaran di dokumen riset ' +
    '(bagian 3.1). Jalur MLE memakai materi TPD yang sama.',
  status: 'indikasi',
  subtes: [
    {
      kode: 'kemampuan-umum',
      nama: 'Kemampuan Umum',
      jumlahSoal: 12,
      waktuMenit: 10,
      formatKetentuan:
        'Pilihan ganda. Tiga jenis soal: verbal (satu pernyataan dari sebuah bacaan, ' +
        'dijawab Benar, Salah, atau Tidak Diketahui), numerik (soal cerita, tabel, dan ' +
        'grafik batang), dan figural (serial dan matriks; pilihan jawaban berupa gambar).',
      penilaian:
        'Belum diketahui. Kolom Penilaian Soal di dokumen riset hanya berisi placeholder ' +
        '"Sistem Skoring …".',
      catatan:
        'Contoh soal diambil dari BAB V dokumen riset (24 soal; tes sesungguhnya 12 soal). ' +
        'Dokumen riset hanya memuat soal dan pilihan jawaban. Kunci dan pembahasan di halaman ' +
        'ini disusun ulang dari soalnya (dihitung, atau dianalisis polanya untuk soal figural), ' +
        'bukan salinan dari dokumen riset, dan berstatus draft sampai diperiksa tim akademik.',
      materi: [
        {
          nama: 'Verbal (Verbal Reasoning)',
          catatan: 'bacaan pendek dengan satu pernyataan: Benar, Salah, atau Tidak Diketahui',
        },
        {
          nama: 'Numerik: Soal Cerita',
          catatan:
            'bilangan dan perbandingan, aljabar dasar, laju dan waktu, aritmatika keuangan',
        },
        {
          nama: 'Numerik: Tabel',
          catatan:
            'bilangan dan perbandingan, persentase dan pertumbuhan, rata-rata, ' +
            'aritmatika keuangan, aljabar dasar, pengukuran dan konversi satuan',
        },
        {
          nama: 'Numerik: Grafik Batang',
          catatan: 'persentase dan perbandingan',
        },
        {
          nama: 'Figural: Serial',
          catatan: 'The Next Box dan The Next Double Box',
        },
        {
          nama: 'Figural: Matriks',
          catatan: 'kotak 5x5, 5x6, 2x2 bersekat, dan 3x3',
        },
      ],
      contoh: contohKemampuanUmum,
    },
    {
      kode: 'penalaran-numerik',
      nama: 'Penalaran Numerik',
      jumlahSoal: 10,
      waktuMenit: 18,
      formatKetentuan:
        'Tes interaktif (interactive test), bukan pilihan ganda biasa: peserta mengatur ' +
        'tampilan tabel, bar chart, line graph, atau pie chart sesuai informasi pada soal. ' +
        'Soal tabel memakai satu tab per orang, dengan pilihan jawaban di tiap tab.',
      penilaian:
        'Belum diketahui. Kolom Penilaian Soal di dokumen riset hanya berisi placeholder ' +
        '"Sistem Skoring …".',
      catatan:
        'Contoh soal diambil dari BAB V dokumen riset: 8 soal (Bar Chart 2, Table 2, Line ' +
        'Graph 2, Pie Chart 2). Dokumen riset hanya memuat soal dan tangkapan layarnya. Kunci ' +
        'dan pembahasan di halaman ini disusun ulang dari soalnya (dihitung), bukan salinan ' +
        'dari dokumen riset, dan berstatus draft sampai diperiksa tim akademik. Jawabannya ' +
        'berupa kondisi akhir grafik atau pilihan per tab, bukan satu huruf.',
      materi: [
        {
          nama: 'Table',
          catatan: 'dua jenis di contoh: 2 opsi (mencapai atau tidak mencapai target) dan 3-4 opsi (kategori komisi)',
        },
        {
          nama: 'Bar Chart',
          catatan: 'mengatur tinggi batang dan persentase tiap bagiannya',
        },
        {
          nama: 'Line Graph',
          catatan: 'menggambar nilai tiap titik pada grafik garis',
        },
        {
          nama: 'Pie Chart',
          catatan: 'mengatur proporsi: informasi penuh, atau satu informasi dikosongkan dan harus dicari',
        },
      ],
      contoh: contohPenalaranNumerik,
    },
  ],
};
