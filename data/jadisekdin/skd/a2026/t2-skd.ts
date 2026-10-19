import type { Tahapan } from '@/lib/skema';
import {
  contohGeneratorTwk,
  contohGeneratorTiu,
  contohGeneratorTkp,
} from '../../../jadiasn/cpns/a2027/contoh-skd';

/**
 * Seleksi Kompetensi Dasar (SKD) 2026, tahap 2 dari alur seleksi sekolah
 * kedinasan (angkatannya memakai `nomorAwal: 2`).
 *
 * SKD dipakai semua sekolah kedinasan dan berdiri sebagai tesnya sendiri (SKD
 * Sekolah Kedinasan). Seleksi lanjutan tiap sekolah ada di tesnya masing-masing,
 * mis. IPDN dan PKN STAN.
 *
 * Materi dan mapping tiap subtes mengikuti Mapping SKD 2027 dari SKD Generator
 * (chapter berkuota, 3 paket x 30, 35, dan 45 soal). Contoh soal: satu paket 110
 * soal dari SKD Generator (TWK 30, TIU 35, TKP 45), SAMA dengan paket SKD CPNS 2027
 * dan ditulis sekali di data/jadiasn/cpns/a2027/contoh-skd.ts, jadi perubahan di
 * sana berlaku di kedua angkatan. Ambang batas dan ketentuan di berkas ini tetap
 * milik SKD Sekolah Kedinasan. Contoh lama (soal tulisan tangan dan hasil Markaz)
 * sudah diganti; masih ada di riwayat git (commit 24ad183).
 *
 * Sumber: JadiSekdin - Riset dan Kurikulum Sekolah Kedinasan SKD.docx (Product
 * Management, April 2026) untuk ketentuan; SKD Generator (Mapping SKD 2027 dan
 * contoh tryout 2027) untuk materi, mapping, dan contoh soal.
 */
export const tahapSkd: Tahapan = {
  kode: 'skd',
  nama: 'Seleksi Kompetensi Dasar (SKD)',
  mode: 'online',
  waktuBersama: true,
  deskripsi: `110 soal dikerjakan dalam 100 menit dengan sistem CAT. Ketiga subtes dikerjakan serentak dalam satu sesi, bukan per subtes.

Nilai ambang batas ketentuan umum: TWK 65, TIU 80, TKP 156.
Jalur Afirmasi Kewilayahan: nilai kumulatif SKD 281 dengan TIU minimal 55.`,
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'twk',
      nama: 'Tes Wawasan Kebangsaan (TWK)',
      jumlahSoal: 30,
      waktuMenit: 100,
      formatKetentuan: `Pilihan ganda, satu jawaban benar. Waktu 100 menit berlaku untuk ketiga subtes sekaligus, tidak dipisah per subtes.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 150. Nilai ambang batas 65.`,
      materi: [
        { nama: `Nasionalisme`, catatan: `6 soal per paket. Peran warga negara, sikap, dan penerapannya untuk mewujudkan kepentingan nasional dengan tetap mempertahankan identitas nasional.` },
        { nama: `Integritas`, catatan: `6 soal per paket. Menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi sebagai satu kesatuan sikap.` },
        { nama: `Bela Negara`, catatan: `6 soal per paket. Kesadaran berbangsa dan bernegara, penghayatan nilai Pancasila, komitmen terhadap NKRI, dan peran aktif menjaga kedaulatan.` },
        { nama: `Pilar Negara`, catatan: `6 soal per paket. Pemahaman isi dan semangat UUD 1945, Bhinneka Tunggal Ika, dan penerapan sila Pancasila pada peristiwa relevan.` },
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
      formatKetentuan: `Pilihan ganda, satu jawaban benar. Waktu 100 menit berlaku untuk ketiga subtes sekaligus.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 175. Nilai ambang batas 80.`,
      catatan: `Daftar materi memakai chapter berkuota pada Mapping SKD 2027 dari SKD Generator (21 chapter, 35 soal per paket). Contoh soalnya adalah paket 1 dari SKD Generator, sama dengan SKD CPNS 2027; 10 soal di antaranya (1 analogi kata, 1 deret angka, dan 8 figural bergambar) berasal dari dokumen "Contoh Soal TIU SKD 2027" karena belum ada di tryout generator. Dua puluh chapter lain di mapping tidak punya baris kuota sendiri (sebagian bergilir lewat rotasi antarpaket, sisanya untuk latihan): Verbal - urutan dan peringkat, jadwal, logika pernyataan, distribusi dan kategori, rute dan jalur; Numerik - aljabar (persamaan, sistem persamaan), bilangan (keterbagian, faktor dan kelipatan), soal cerita (aritmatika sosial, geometri, JKW, perbandingan senilai dan berbalik, VDW), dan deret angka (2 Towew, 3 Towew, Hijab, Template, Campuran, Fibonacci).`,
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
      formatKetentuan: `Soal berskala: setiap opsi punya skor, tidak ada opsi yang sepenuhnya salah. Waktu 100 menit berlaku untuk ketiga subtes sekaligus.`,
      penilaian: `Skor per opsi paling rendah 1 dan paling tinggi 5. Tidak menjawab 0. Skor maksimal 225. Nilai ambang batas 156.`,
      catatan: `Seluruh materi mengacu pada nilai dasar ASN, yaitu BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan Kolaboratif. Contoh soalnya adalah paket 1 dari SKD Generator (45 soal), sama dengan SKD CPNS 2027; kunci tiap contoh adalah opsi berskor 5, dan skor semua opsi ditulis di pembahasan.`,
      materi: [
        { nama: `Pelayanan Publik`, catatan: `8 soal per paket. Konsep dan ruang lingkup, prinsip dan standar, sikap pelayanan prima, pelayanan yang adil dan inklusif, pengambilan keputusan dalam skenario pelayanan.` },
        { nama: `Jejaring Kerja`, catatan: `8 soal per paket. Konsep dan prinsip jejaring kerja, komunikasi dan koordinasi, kolaborasi dan penyelesaian masalah, pengembangan kemitraan.` },
        { nama: `Sosial Budaya`, catatan: `8 soal per paket. Konsep dan struktur sosial, adaptasi dalam masyarakat majemuk.` },
        { nama: `Teknologi Informasi dan Komunikasi`, catatan: `7 soal per paket.` },
        { nama: `Profesionalisme`, catatan: `7 soal per paket.` },
        { nama: `Anti Radikalisme`, catatan: `7 soal per paket.` },
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
