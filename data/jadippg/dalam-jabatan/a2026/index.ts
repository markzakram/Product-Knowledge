import type { Angkatan } from '@/lib/skema';
import { tahapUkpppg } from './t1-ukpppg';
import { tahapUkin } from './t2-ukin';

/**
 * PPG Dalam Jabatan (Guru Tertentu) 2026, Tahap 2.
 *
 * Susunan UKPPPG, sasaran peserta, dan jadwal mengacu dokumen "JadiPPG - Riset
 * dan Kurikulum Program PPG 2026" (Product Management, Juli 2026). Dokumen
 * menyebut ujian tertulis (tes objektif PCK 35 soal dan SJT 30 soal, tes
 * subjektif) dan ujian kinerja (Ukin).
 *
 * Susunan tryout UKPPPG di Markaz BERUBAH di tengah tahun. Paket 1–5
 * (Februari 2026) berisi Pedagogik 30 dan SJT 20; paket 6–15 (Juli 2026)
 * berisi Pedagogik 35 dan SJT 30. Yang ditulis susunan Juli, karena itu yang
 * terbaru, dipakai paket aktif 6–10, dan cocok dengan dokumen kurikulum. Paket
 * 11–15 masih nonaktif saat dibaca, jadi tidak dijadikan acuan.
 */
export const dalamJabatan2026: Angkatan = {
  kode: '2026',
  nama: 'UKPPPG 2026 (Tahap 2)',
  tahun: 2026,
  status: 'terkonfirmasi',
  ringkasan:
    'Uji Kompetensi Peserta PPG (UKPPPG) untuk Guru Tertentu Tahap 2: ujian tertulis ' +
    '(Pedagogical Content Knowledge 35 soal, Situational Judgement Test 30 soal, ' +
    'dan tes subjektif 1 soal) serta ujian kinerja (perangkat pembelajaran dan video ' +
    'praktik pembelajaran). Paket tryout sebelum Juli 2026 masih memakai susunan 30 ' +
    'dan 20 soal.',
  diperbarui: '2026-10-20',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Gambaran PPG Guru Tertentu (Dalam Jabatan)',
      isi: `Pada 2026, PPG dilaksanakan melalui dua jalur utama: PPG bagi Calon Guru (Prajabatan) dan PPG bagi Guru Tertentu (Dalam Jabatan), dengan sasaran dan tahapan pelaksanaan yang berbeda.
PPG bagi Guru Tertentu ditujukan kepada guru aktif yang belum memiliki sertifikat pendidik. Peserta mengikuti proses lapor diri, pembelajaran melalui Ruang GTK, penyusunan jurnal pembelajaran, serta Uji Kompetensi Peserta PPG (UKPPPG). Persiapan pada jalur ini lebih menekankan kompetensi pedagogik, profesional, refleksi pembelajaran, dan kesiapan menghadapi UKPPPG.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Sasaran dan kriteria calon peserta',
      isi: `Calon peserta PPG bagi Guru Tertentu Tahun 2026 Tahap 2 berjumlah 60.896. Jumlah ini terdiri dari hasil seleksi administrasi periode 1 tahun 2026 dan antrean di tahun 2025. Rekapitulasi per provinsi ada di kartu berikutnya.
Kriteria yang dipenuhi antara lain:
a. terdaftar dalam Data Pokok Pendidikan (Dapodik);
b. belum memiliki Sertifikat Pendidik;
c. telah dinyatakan memenuhi persyaratan administrasi;
d. bukan peserta PPG di kementerian lain;
e. aktif mengajar pada tahun ajaran 2023/2024; dan
f. tersedianya Izin Bidang Studi PPG pada LPTK Penyelenggara.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Sebaran calon peserta per provinsi instansi',
      isi: `Calon peserta PPG bagi Guru Tertentu Tahun 2026 Tahap 2, menurut provinsi instansi:
1. Luar Negeri: 55
2. Prov. Aceh: 1.953
3. Prov. Bali: 814
4. Prov. Banten: 2.849
5. Prov. Bengkulu: 688
6. Prov. D.I. Yogyakarta: 599
7. Prov. D.K.I. Jakarta: 1.548
8. Prov. Gorontalo: 274
9. Prov. Jambi: 1.177
10. Prov. Jawa Barat: 8.565
11. Prov. Jawa Tengah: 3.964
12. Prov. Jawa Timur: 6.548
13. Prov. Kalimantan Barat: 1.303
14. Prov. Kalimantan Selatan: 1.025
15. Prov. Kalimantan Tengah: 1.105
16. Prov. Kalimantan Timur: 1.154
17. Prov. Kalimantan Utara: 245
18. Prov. Kepulauan Bangka Belitung: 347
19. Prov. Kepulauan Riau: 586
20. Prov. Lampung: 2.124
21. Prov. Maluku: 1.429
22. Prov. Maluku Utara: 842
23. Prov. Nusa Tenggara Barat: 1.884
24. Prov. Nusa Tenggara Timur: 1.875
25. Prov. Papua: 508
26. Prov. Papua Barat: 367
27. Prov. Papua Barat Daya: 314
28. Prov. Papua Pegunungan: 277
29. Prov. Papua Selatan: 220
30. Prov. Papua Tengah: 951
31. Prov. Riau: 2.002
32. Prov. Sulawesi Barat: 494
33. Prov. Sulawesi Selatan: 1.841
34. Prov. Sulawesi Tengah: 980
35. Prov. Sulawesi Tenggara: 899
36. Prov. Sulawesi Utara: 870
37. Prov. Sumatera Barat: 1.434
38. Prov. Sumatera Selatan: 2.361
39. Prov. Sumatera Utara: 4.425
Jumlah total: 60.896`,
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal 2026 (Tahap 2)',
      isi: `Pemanggilan/konfirmasi kesediaan di SIMPKB: 22–28 Juni 2026
Lapor diri di LPTK: 1–4 Juli 2026
Orientasi di LPTK: 8 Juli 2026
Pembelajaran mandiri di Ruang GTK: 8 Juli–12 Agustus 2026
Pembelajaran terbimbing: 18–23 Juli 2026
Pendaftaran UKPPPG first taker: 24 Juli–15 Agustus 2026
Pendaftaran UKPPPG retaker: 24 Juli–14 Agustus 2026
Dokumen riset belum memuat tanggal pelaksanaan UKPPPG itu sendiri.`,
    },
  ],
  tahapan: [tahapUkpppg, tahapUkin],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiPPG - Riset dan Kurikulum Program PPG 2026',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
      catatan:
        'Dokumen Product Management, Juli 2026. Dasar sasaran peserta, jadwal, serta materi ' +
        'ujian tertulis dan ujian kinerja.',
    },
    {
      jenis: 'internal',
      judul: 'Panduan Soal SJT - PPG (Google Docs)',
      url: 'https://docs.google.com/document/d/1oI8hbtDpor5U3bOrxXuf7zf49EIgiNfr/edit?usp=sharing',
      keandalan: 'resmi',
      catatan: 'Ditautkan di BAB IV dokumen riset. Isinya belum dibaca dan belum dimasukkan ke PK.',
    },
    {
      jenis: 'internal',
      judul: 'Markaz — paket tryout "Tryout PPG Dalam Jabatan 2026" nomor 6–10',
      tanggalAkses: '2026-09-23',
      keandalan: 'asumsi',
      catatan:
        'Sumber contoh soal Pedagogik dan SJT. Susunan paketnya (Pedagogik 35 soal dan SJT 30 ' +
        'soal) cocok dengan dokumen kurikulum.',
    },
  ],
};
