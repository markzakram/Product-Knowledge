import type { Tahapan } from '@/lib/skema';
import { contohTwk } from './contoh-skd';
import { contohTiu } from './contoh-tiu';
import { contohTkp } from './contoh-tkp';

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
 *  - contoh soal: 40 soal TWK dari riset (contoh-skd.ts), 59 soal TIU dari dokumen "Contoh
 *    Soal TIU SKD 2027" (contoh-tiu.ts), dan 26 soal TKP dari "Panduan Produksi TKP SKD CPNS"
 *    (contoh-tkp.ts); kedua dokumen itu dirujuk riset BAB V butir 5.2 dan 5.3.
 * Mapping produksi tidak disalin dari a2026 karena riset tidak membahasnya.
 * `mode` disalin dari a2026.
 */
export const tahapSkd: Tahapan = {
  kode: 'skd',
  nama: 'Seleksi Kompetensi Dasar (SKD)',
  mode: 'online',
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
      materi: [
        { nama: `Nasionalisme`, catatan: `Tipe soal berkaitan dengan peran warga negara, sikap kita, dan cara penerapan atau aplikasi saat ini untuk mewujudkan kepentingan nasional melalui cita-cita dan tujuan yang sama dengan tetap mempertahankan identitas nasional. Seperti: meneladani sikap nasionalisme dari peristiwa sejarah, tokoh pemuda, dan tokoh pahlawan; ciri dan sikap dalam mempertahankan persatuan dan kesatuan bangsa; sikap semangat kebangsaan dan persatuan; toleransi antar suku, agama, ras, dan golongan.` },
        { nama: `Integritas`, catatan: `Tipe soal berkaitan dengan peran warga negara dan sikap seseorang, agar mampu menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi sebagai satu kesatuan sikap untuk mencapai tujuan nasional.` },
        { nama: `Bela Negara`, catatan: `Mengukur kemampuan peserta dalam mempertahankan eksistensi bangsa dan negara. Mencakup beberapa aspek, seperti: kesadaran berbangsa dan bernegara; penghayatan nilai-nilai Pancasila; komitmen terhadap Negara Kesatuan Republik Indonesia (NKRI); peran aktif dalam menjaga kedaulatan negara.` },
        { nama: `Pilar Negara`, catatan: `Soal-soal yang keluar berupa pemahaman terhadap isi dan semangat UUD 1945, Bhinneka Tunggal Ika, dan penerapan sila-sila Pancasila pada kasus atau peristiwa yang relevan saat ini, misalnya pemilu, demo buruh, dan sebagainya.` },
        { nama: `Bahasa Negara`, catatan: `Menguji kemampuan peserta dalam menggunakan bahasa Indonesia secara baik dan benar. Seperti: penentuan ide pokok; kesimpulan; pernyataan yang benar atau salah; makna kata pada penggalan kalimat (biasanya kata-kata ilmiah, bahkan yang jarang diketahui); perbaikan kalimat dan kata; tata tulis (huruf miring, titik dan koma, kutipan, dan sebagainya).` },
      ],
      contoh: contohTwk,
    },
    {
      kode: 'tiu',
      nama: 'Tes Intelegensia Umum (TIU)',
      jumlahSoal: 35,
      waktuMenit: 100,
      formatKetentuan: `100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Pengerjaan 3 subtes dilakukan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut.`,
      penilaian: `Bobot benar 5 poin. Bobot salah atau tidak menjawab 0 poin. Skor maksimal 175. Nilai ambang batas 80 (ketentuan umum), 85 untuk Cumlaude dan Diaspora, dan 60 untuk penyandang disabilitas serta Putra/Putri Papua dan Daerah Tertinggal.`,
      catatan: `Rincian materi TIU 2027 mengikuti riset dan merupakan perubahan dari SKD 2024 berdasarkan SKD Sekdin 2026; belum ada pengumuman resmi (indikasi). Contoh soalnya (59 soal) berasal dari dokumen "Contoh Soal TIU SKD 2027" yang dirujuk riset (BAB V, butir 5.2). Deret Angka - Fibonacci hanya berupa judul di dokumen itu (tanpa soal), jadi tidak ada di contoh soal.`,
      materi: [
        { nama: `Verbal`, catatan: `Analogi (2 kata); silogisme (3 premis; 2 premis narasi; 3 premis narasi); analitis (memperkuat/memperlemah argumen; susunan dan posisi; urutan dan peringkat; jadwal; logika pernyataan; distribusi dan kategori; rute dan jalur).` },
        { nama: `Numerik`, catatan: `Berhitung (operasi hitung pecahan sederhana, perkalian setara, pembagian setara); deret angka (1 Towew, 2 Towew, 3 Towew, Hijab, Template, Campuran, Fibonacci, Matriks Deret, Pola Bilangan Tabel); soal cerita (tabel pernyataan: kombinasi pernyataan dan kombinasi optimal); kecukupan data (aljabar, bilangan, soal cerita).` },
        { nama: `Figural`, catatan: `Analogi, ketidaksamaan, serial, dan matriks (9 kotak). Tetap sama dengan SKD 2024.` },
      ],
      contoh: contohTiu,
    },
    {
      kode: 'tkp',
      nama: 'Tes Karakteristik Pribadi (TKP)',
      jumlahSoal: 45,
      waktuMenit: 100,
      formatKetentuan: `Soal berskala: setiap opsi punya bobot paling rendah 1 dan paling tinggi 5. 100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas sensorik netra. Pengerjaan 3 subtes dilakukan serentak, sehingga 110 soal harus diselesaikan dalam rentang waktu tersebut.`,
      penilaian: `Bobot benar paling rendah 1 dan paling tinggi 5. Bobot tidak menjawab 0. Skor maksimal 225. Nilai ambang batas 166 (ketentuan umum). Pada contoh soal produksi, lima opsi tiap soal memakai skor berbeda (1 sampai 5); skor 5 untuk respons yang paling lengkap dan proporsional (patuh aturan, adil, dan aktif membantu), sedangkan respons yang melanggar aturan atau integritas tidak boleh mendapat skor tinggi meskipun tampak membantu.`,
      catatan: `Semua materi mengacu pada nilai-nilai dasar ASN, yaitu elemen BerAKHLAK (Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif). Contoh soalnya (26 soal) dan kisi-kisi enam aspek berasal dari "Panduan Produksi TKP SKD CPNS" (PT Cerebrum Edukanesia Nusantara, 2026) yang dirujuk riset (BAB V, butir 5.3). Kunci tiap contoh adalah opsi berskor 5; skor semua opsi, Level Bloom, dan tingkat kesulitan ditulis di pembahasan. Ringkasan aturan produksi tiap aspek ada di Informasi Seleksi (item berjudul "TKP: ...").`,
      materi: [
        { nama: `Pelayanan Publik`, catatan: `Orientasi memberi layanan yang dapat diakses, adil, jelas, cepat, aman, akuntabel, dan berorientasi pada kebutuhan masyarakat; keramahan saja tidak cukup. Materi pokok dan rentang Bloom: Konsep Dasar dan Ruang Lingkup (C2-C5); Prinsip dan Standar (C3-C5); Pelayanan Prima dan Kepuasan (C3-C5); Adil, Inklusif, dan Tidak Diskriminatif (C3-C5); Pengambilan Keputusan (C4-C6).` },
        { nama: `Jejaring Kerja`, catatan: `Membangun dan memelihara hubungan profesional berdasarkan tujuan bersama, kepercayaan, komunikasi terbuka, saling menghargai, dan komitmen tindak lanjut, di dalam tim maupun lintas unit dan pemangku kepentingan. Materi pokok dan rentang Bloom: Konsep Dasar dan Prinsip (C2-C5); Komunikasi, Koordinasi, dan Berbagi Informasi (C3-C5); Kolaborasi dan Penyelesaian Masalah dalam Tim (C3-C5); Pengembangan Hubungan Kerja dan Kemitraan Produktif (C3-C5).` },
        { nama: `Sosial Budaya`, catatan: `Memahami dan merespons keragaman nilai, norma, identitas, kebiasaan, kelompok, dan perubahan sosial secara terbuka, adil, empatik, dan konstruktif; dinilai dari tindakan nyata, bukan dari pernyataan bahwa seseorang toleran. Materi pokok dan rentang Bloom: Konsep Dasar, Unsur, dan Struktur Sosial Budaya (C2-C4); Adaptasi dalam Masyarakat Majemuk (C3-C5); Empati, Kepedulian, dan Harmoni Sosial (C3-C5); Perubahan Sosial Budaya dan Penyelesaian Konflik (C4-C6).` },
        { nama: `Teknologi Informasi dan Komunikasi`, catatan: `Menggunakan, mempelajari, dan mengelola teknologi secara produktif, aman, etis, adaptif, dan bertanggung jawab; dinilai dari kualitas keputusan saat teknologi memberi peluang sekaligus risiko, bukan dari banyaknya aplikasi yang dikuasai. Materi pokok dan rentang Bloom: Konsep Dasar dan Pemanfaatan TIK dalam Pekerjaan (C2-C6); Adaptasi terhadap Perubahan Teknologi (C3-C6); Etika, Keamanan, dan Tanggung Jawab Digital (C2-C6).` },
        { nama: `Profesionalisme`, catatan: `Menjalankan peran berdasarkan kompetensi, standar, etika, tanggung jawab, dan orientasi mutu, dengan cara mencapai hasil yang dapat dipertanggungjawabkan. Materi pokok dan rentang Bloom: Konsep Dasar, Ciri, dan Etika Profesional (C2-C5); Tanggung Jawab, Akuntabilitas, dan Disiplin Kerja (C3-C5); Kualitas Kinerja, Penyelesaian Masalah, dan Pengembangan Kompetensi (C3-C6).` },
        { nama: `Anti Radikalisme`, catatan: `Menjaga kehidupan bersama yang damai, setara, plural, dan taat aturan lewat pencegahan serta respons terhadap intoleransi, propaganda kebencian, pemaksaan, dan pembenaran kekerasan. Materi pokok dan rentang Bloom: Konsep Dasar Anti Radikalisme (C2-C5); Ciri-Ciri dan Bentuk Paparan Radikalisme (C2-C5); Sikap Pencegahan dan Penolakan terhadap Radikalisme (C3-C5); Respons terhadap Radikalisme di Lingkungan Kerja, Sosial, dan Digital (C3-C6).` },
      ],
      contoh: contohTkp,
    },
  ],
};
