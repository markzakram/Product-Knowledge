import type { Tahapan } from '@/lib/skema';
import { contohGeneratorTwk, contohGeneratorTiu, contohGeneratorTkp } from './contoh-skd';

/**
 * Seleksi Kompetensi Dasar CPNS 2027.
 *
 * Sumber: riset 2027 (BAB III dan V). Struktur mengikuti SKD a2026; bedanya:
 *  - waktu 130 menit hanya untuk penyandang disabilitas sensorik netra
 *    (a2026 menulis "penyandang disabilitas");
 *  - materi TWK memuat rincian tipe soal (kisi-kisi) dari riset;
 *  - materi TIU berubah (Verbal, Numerik, Figural), berdasarkan SKD Sekdin 2026;
 *  - TKP: elemen BerAKHLAK diuraikan, "Profesional" menjadi "Profesionalisme"; kisi-kisi
 *    tiap aspek (materi pokok dan rentang Bloom) dari "Panduan Produksi TKP SKD CPNS";
 *  - materi dan mapping tiap subtes mengikuti Mapping SKD 2027 dari SKD Generator (chapter
 *    berkuota, 3 paket x 30, 35, dan 45 soal), bukan a2026;
 *  - contoh soal: satu paket 110 soal dari SKD Generator (TWK 30, TIU 35, TKP 45), ditulis
 *    sekali di contoh-skd.ts dan dipakai juga oleh SKD Sekolah Kedinasan 2026. Paket ini
 *    menggantikan 125 contoh riset (40 TWK, 59 TIU, 26 TKP) yang masih ada di riwayat git
 *    (commit 24ad183).
 * `mode` disalin dari a2026.
 */
export const tahapSkd: Tahapan = {
  kode: 'skd',
  nama: 'Seleksi Kompetensi Dasar (SKD)',
  mode: 'online',
  waktuBersama: true,
  deskripsi: `110 soal dengan sistem CAT BKN: TWK 30 soal, TIU 35 soal, dan TKP 45 soal. 100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Ketiga subtes dikerjakan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut. Hasil SKD menjadi dasar menentukan peserta yang berhak mengikuti SKB.

Nilai ambang batas (KEPMENPANRB No. 321 Tahun 2024):
- Ketentuan umum: TWK 65, TIU 80, TKP 166
- Cumlaude dan Diaspora: nilai kumulatif 311 dengan TIU minimal 85
- Penyandang disabilitas: nilai kumulatif 286 dengan TIU minimal 60
- Putra/Putri Papua dan Daerah Tertinggal: nilai kumulatif 286 dengan TIU minimal 60

Perubahan dari SKD 2024: riset hanya mencatat perubahan materi pada TIU (lihat Informasi Seleksi, "Perubahan TIU: SKD 2024 ke SKD 2027").`,
  status: 'indikasi',
  subtes: [
    {
      kode: 'twk',
      nama: 'Tes Wawasan Kebangsaan (TWK)',
      jumlahSoal: 30,
      waktuMenit: 100,
      formatKetentuan: `100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Pengerjaan 3 subtes dilakukan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut.`,
      penilaian: `Bobot benar 5 poin. Bobot salah atau tidak menjawab 0 poin. Skor maksimal 150. Nilai ambang batas 65 (ketentuan umum).`,
      catatan: `Daftar materi memakai chapter berkuota pada Mapping SKD 2027 dari SKD Generator (10 chapter, 30 soal per paket). Bahasa Negara (enam chapter terakhir) menguji kemampuan peserta dalam menggunakan bahasa Indonesia secara baik dan benar. Seperti: penentuan ide pokok; kesimpulan; pernyataan yang benar atau salah; makna kata pada penggalan kalimat (biasanya kata-kata ilmiah, bahkan yang jarang diketahui); perbaikan kalimat dan kata; tata tulis (huruf miring, titik dan koma, kutipan, dan sebagainya). Contoh soalnya adalah paket 1 dari SKD Generator (30 soal: 6 tiap materi, Bahasa Negara 1 tiap chapter).`,
      materi: [
        { nama: `Nasionalisme`, catatan: `6 soal per paket. Tipe soal berkaitan dengan peran warga negara, sikap kita, dan cara penerapan atau aplikasi saat ini untuk mewujudkan kepentingan nasional melalui cita-cita dan tujuan yang sama dengan tetap mempertahankan identitas nasional. Seperti: meneladani sikap nasionalisme dari peristiwa sejarah, tokoh pemuda, dan tokoh pahlawan; ciri dan sikap dalam mempertahankan persatuan dan kesatuan bangsa; sikap semangat kebangsaan dan persatuan; toleransi antar suku, agama, ras, dan golongan.` },
        { nama: `Integritas`, catatan: `6 soal per paket. Tipe soal berkaitan dengan peran warga negara dan sikap seseorang, agar mampu menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi sebagai satu kesatuan sikap untuk mencapai tujuan nasional.` },
        { nama: `Bela Negara`, catatan: `6 soal per paket. Mengukur kemampuan peserta dalam mempertahankan eksistensi bangsa dan negara. Mencakup beberapa aspek, seperti: kesadaran berbangsa dan bernegara; penghayatan nilai-nilai Pancasila; komitmen terhadap Negara Kesatuan Republik Indonesia (NKRI); peran aktif dalam menjaga kedaulatan negara.` },
        { nama: `Pilar Negara`, catatan: `6 soal per paket. Soal-soal yang keluar berupa pemahaman terhadap isi dan semangat UUD 1945, Bhinneka Tunggal Ika, dan penerapan sila-sila Pancasila pada kasus atau peristiwa yang relevan saat ini, misalnya pemilu, demo buruh, dan sebagainya.` },
        { nama: `Bahasa Negara > Ide pokok atau gagasan utama`, catatan: `1 soal per paket.` },
        { nama: `Bahasa Negara > Simpulan paragraf`, catatan: `1 soal per paket.` },
        { nama: `Bahasa Negara > Kalimat efektif dan tidak efektif`, catatan: `1 soal per paket.` },
        { nama: `Bahasa Negara > Kata baku dan tidak baku`, catatan: `1 soal per paket.` },
        { nama: `Bahasa Negara > Penulisan tanda baca`, catatan: `1 soal per paket.` },
        { nama: `Bahasa Negara > Penulisan Ejaan Bahasa Indonesia yang Disempurnakan (EYD)`, catatan: `1 soal per paket.` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 3,
          soalPerPaket: 30,
          dibutuhkan: 90,
          tersedia: 90,
          status: 'berjalan',
          catatan: `Mapping SKD 2027 (SKD Generator): 3 paket x 30 soal. Tersedia = 90 contoh tryout generator (18 soal tiap materi: Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Negara). Angka ketersediaan SIADU di workbook tidak dihitung.`,
        },
      ],
      contoh: contohGeneratorTwk,
    },
    {
      kode: 'tiu',
      nama: 'Tes Intelegensia Umum (TIU)',
      jumlahSoal: 35,
      waktuMenit: 100,
      formatKetentuan: `100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Pengerjaan 3 subtes dilakukan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut.`,
      penilaian: `Bobot benar 5 poin. Bobot salah atau tidak menjawab 0 poin. Skor maksimal 175. Nilai ambang batas 80 (ketentuan umum), 85 untuk Cumlaude dan Diaspora, dan 60 untuk penyandang disabilitas serta Putra/Putri Papua dan Daerah Tertinggal.`,
      catatan: `Rincian materi TIU 2027 mengikuti riset dan merupakan perubahan dari SKD 2024 berdasarkan SKD Sekdin 2026; belum ada pengumuman resmi (indikasi). Daftar materi memakai chapter berkuota pada Mapping SKD 2027 dari SKD Generator (21 chapter, 35 soal per paket). Contoh soalnya adalah paket 1 dari SKD Generator; 10 soal di antaranya (1 analogi kata, 1 deret angka, dan 8 figural bergambar) berasal dari dokumen "Contoh Soal TIU SKD 2027" yang dirujuk riset (BAB V, butir 5.2) karena belum ada di tryout generator. Materi Figural tetap sama dengan SKD 2024 (analogi, ketidaksamaan, serial, dan matriks 9 kotak). Deret Angka - Fibonacci hanya berupa judul di dokumen itu (tanpa soal) dan tidak berkuota di mapping. Dua puluh chapter lain di mapping tidak punya baris kuota sendiri (sebagian bergilir lewat rotasi antarpaket, sisanya untuk latihan): Verbal - urutan dan peringkat, jadwal, logika pernyataan, distribusi dan kategori, rute dan jalur; Numerik - aljabar (persamaan, sistem persamaan), bilangan (keterbagian, faktor dan kelipatan), soal cerita (aritmatika sosial, geometri, JKW, perbandingan senilai dan berbalik, VDW), dan deret angka (2 Towew, 3 Towew, Hijab, Template, Campuran, Fibonacci).`,
      materi: [
        { nama: `Verbal > Silogisme > 3 Premis`, catatan: `1 soal per paket.` },
        { nama: `Verbal > Silogisme > 2 Premis - Narasi`, catatan: `2 soal per paket.` },
        { nama: `Verbal > Silogisme > 3 Premis - Narasi`, catatan: `2 soal per paket.` },
        { nama: `Verbal > Analogi > 2 Kata`, catatan: `1 soal per paket. Contoh di paket ini dari dokumen "Contoh Soal TIU SKD 2027" karena belum ada di tryout generator.` },
        { nama: `Verbal > Analitis > Memperkuat/Memperlemah Argumen`, catatan: `3 soal per paket.` },
        { nama: `Verbal > Analitis > Susunan & Posisi`, catatan: `2 soal per paket.` },
        { nama: `Numerik > Berhitung > Operasi Hitung - Dasar`, catatan: `1 soal per paket.` },
        { nama: `Numerik > Berhitung > Perkalian Setara`, catatan: `1 soal per paket.` },
        { nama: `Numerik > Berhitung > Pembagian Setara`, catatan: `1 soal per paket.` },
        { nama: `Numerik > Kecukupan Data > Aljabar - Operasi Aljabar`, catatan: `2 soal per paket. Berotasi antarpaket bersama Aljabar - Persamaan dan Aljabar - Sistem Persamaan; paket 1 memakai Operasi Aljabar dan Persamaan.` },
        { nama: `Numerik > Kecukupan Data > Bilangan - Jenis dan Sifat Bilangan`, catatan: `1 soal per paket. Berotasi antarpaket: Jenis dan Sifat Bilangan (paket 1), Keterbagian Bilangan (paket 2), Faktor dan Kelipatan (paket 3).` },
        { nama: `Numerik > Kecukupan Data > Soal Cerita - Aljabar`, catatan: `3 soal per paket. Berotasi antarpaket: paket 1 Geometri, Perbandingan Senilai dan Berbalik, dan Aljabar; paket 2 JKW, Geometri, dan Perbandingan Senilai dan Berbalik; paket 3 VDW, JKW, dan Aritmatika Sosial.` },
        { nama: `Numerik > Deret Bilangan > Deret Angka - 1 Towew`, catatan: `1 soal per paket. Contoh di paket ini dari dokumen "Contoh Soal TIU SKD 2027": contoh deret di tryout generator bergambar dan gambarnya tidak ikut ke data.` },
        { nama: `Numerik > Deret Bilangan > Matriks Deret`, catatan: `2 soal per paket.` },
        { nama: `Numerik > Deret Bilangan > Pola Bilangan Tabel`, catatan: `2 soal per paket.` },
        { nama: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Pernyataan`, catatan: `1 soal per paket.` },
        { nama: `Numerik > Soal Cerita > Tabel Pernyataan - Kombinasi Optimal`, catatan: `1 soal per paket.` },
        { nama: `Figural > Figural Analogi`, catatan: `2 soal per paket. Contoh di paket ini hanya 1 soal, karena baru ada 1 contoh figural analogi bergambar.` },
        { nama: `Figural > Figural Ketidaksamaan`, catatan: `2 soal per paket.` },
        { nama: `Figural > Figural Serial`, catatan: `2 soal per paket.` },
        { nama: `Figural > Figural Matriks (Kotak 3x3)`, catatan: `2 soal per paket. Contoh di paket ini 3 soal, menutup kekurangan figural analogi.` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 3,
          soalPerPaket: 35,
          dibutuhkan: 105,
          tersedia: 87,
          status: 'berjalan',
          catatan: `Mapping SKD 2027 (SKD Generator): 3 paket x 35 soal. Tersedia = 87 contoh tryout generator (39 verbal dan 48 numerik); kurang 18 karena contoh figural dan analogi kata belum ada di dokumen tryout. Angka ketersediaan SIADU di workbook tidak dihitung.`,
        },
      ],
      contoh: contohGeneratorTiu,
    },
    {
      kode: 'tkp',
      nama: 'Tes Karakteristik Pribadi (TKP)',
      jumlahSoal: 45,
      waktuMenit: 100,
      formatKetentuan: `Soal berskala: setiap opsi punya bobot paling rendah 1 dan paling tinggi 5. 100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Pengerjaan 3 subtes dilakukan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut.`,
      penilaian: `Bobot benar paling rendah 1 dan paling tinggi 5. Bobot tidak menjawab 0. Skor maksimal 225. Nilai ambang batas 166 (ketentuan umum). Pada contoh soal produksi, lima opsi tiap soal memakai skor berbeda (1 sampai 5); skor 5 untuk respons yang paling lengkap dan proporsional (patuh aturan, adil, dan aktif membantu), sedangkan respons yang melanggar aturan atau integritas tidak boleh mendapat skor tinggi meskipun tampak membantu.`,
      catatan: `Semua materi mengacu pada nilai-nilai dasar ASN, yaitu elemen BerAKHLAK (Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif). Kisi-kisi enam aspek berasal dari "Panduan Produksi TKP SKD CPNS" (PT Cerebrum Edukanesia Nusantara, 2026) yang dirujuk riset (BAB V, butir 5.3). Contoh soalnya adalah paket 1 dari SKD Generator (45 soal: 8 Pelayanan Publik, 8 Jejaring Kerja, 8 Sosial Budaya, 7 TIK, 7 Profesionalisme, dan 7 Anti Radikalisme); kunci tiap contoh adalah opsi berskor 5, dan skor semua opsi ditulis di pembahasan. Ringkasan aturan produksi tiap aspek ada di Informasi Seleksi (item berjudul "TKP: ...").`,
      materi: [
        { nama: `Pelayanan Publik`, catatan: `8 soal per paket. Orientasi memberi layanan yang dapat diakses, adil, jelas, cepat, aman, akuntabel, dan berorientasi pada kebutuhan masyarakat; keramahan saja tidak cukup. Materi pokok dan rentang Bloom: Konsep Dasar dan Ruang Lingkup (C2-C5); Prinsip dan Standar (C3-C5); Pelayanan Prima dan Kepuasan (C3-C5); Adil, Inklusif, dan Tidak Diskriminatif (C3-C5); Pengambilan Keputusan (C4-C6).` },
        { nama: `Jejaring Kerja`, catatan: `8 soal per paket. Membangun dan memelihara hubungan profesional berdasarkan tujuan bersama, kepercayaan, komunikasi terbuka, saling menghargai, dan komitmen tindak lanjut, di dalam tim maupun lintas unit dan pemangku kepentingan. Materi pokok dan rentang Bloom: Konsep Dasar dan Prinsip (C2-C5); Komunikasi, Koordinasi, dan Berbagi Informasi (C3-C5); Kolaborasi dan Penyelesaian Masalah dalam Tim (C3-C5); Pengembangan Hubungan Kerja dan Kemitraan Produktif (C3-C5).` },
        { nama: `Sosial Budaya`, catatan: `8 soal per paket. Memahami dan merespons keragaman nilai, norma, identitas, kebiasaan, kelompok, dan perubahan sosial secara terbuka, adil, empatik, dan konstruktif; dinilai dari tindakan nyata, bukan dari pernyataan bahwa seseorang toleran. Materi pokok dan rentang Bloom: Konsep Dasar, Unsur, dan Struktur Sosial Budaya (C2-C4); Adaptasi dalam Masyarakat Majemuk (C3-C5); Empati, Kepedulian, dan Harmoni Sosial (C3-C5); Perubahan Sosial Budaya dan Penyelesaian Konflik (C4-C6).` },
        { nama: `Teknologi Informasi dan Komunikasi`, catatan: `7 soal per paket. Menggunakan, mempelajari, dan mengelola teknologi secara produktif, aman, etis, adaptif, dan bertanggung jawab; dinilai dari kualitas keputusan saat teknologi memberi peluang sekaligus risiko, bukan dari banyaknya aplikasi yang dikuasai. Materi pokok dan rentang Bloom: Konsep Dasar dan Pemanfaatan TIK dalam Pekerjaan (C2-C6); Adaptasi terhadap Perubahan Teknologi (C3-C6); Etika, Keamanan, dan Tanggung Jawab Digital (C2-C6).` },
        { nama: `Profesionalisme`, catatan: `7 soal per paket. Menjalankan peran berdasarkan kompetensi, standar, etika, tanggung jawab, dan orientasi mutu, dengan cara mencapai hasil yang dapat dipertanggungjawabkan. Materi pokok dan rentang Bloom: Konsep Dasar, Ciri, dan Etika Profesional (C2-C5); Tanggung Jawab, Akuntabilitas, dan Disiplin Kerja (C3-C5); Kualitas Kinerja, Penyelesaian Masalah, dan Pengembangan Kompetensi (C3-C6).` },
        { nama: `Anti Radikalisme`, catatan: `7 soal per paket. Menjaga kehidupan bersama yang damai, setara, plural, dan taat aturan lewat pencegahan serta respons terhadap intoleransi, propaganda kebencian, pemaksaan, dan pembenaran kekerasan. Materi pokok dan rentang Bloom: Konsep Dasar Anti Radikalisme (C2-C5); Ciri-Ciri dan Bentuk Paparan Radikalisme (C2-C5); Sikap Pencegahan dan Penolakan terhadap Radikalisme (C3-C5); Respons terhadap Radikalisme di Lingkungan Kerja, Sosial, dan Digital (C3-C6).` },
      ],
      mapping: [
        {
          tipe: 'tryout',
          paket: 3,
          soalPerPaket: 45,
          dibutuhkan: 135,
          tersedia: 135,
          status: 'berjalan',
          catatan: `Mapping SKD 2027 (SKD Generator): 3 paket x 45 soal. Tersedia = 135 contoh tryout generator (21 atau 24 soal tiap aspek). Angka ketersediaan SIADU di workbook tidak dihitung.`,
        },
      ],
      contoh: contohGeneratorTkp,
    },
  ],
};
