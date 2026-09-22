import type { Tahapan } from '@/lib/skema';

/**
 * Seleksi Kompetensi Dasar CPNS.
 *
 * MIRIP tapi TIDAK SAMA dengan SKD sekolah kedinasan: ambang batas TKP di sini
 * 166, sedangkan di sekolah kedinasan 156. Jalur afirmasinya juga berbeda.
 * Karena itu SKD CPNS ditulis terpisah, bukan merujuk bersama/skd-2026.
 */
export const tahapSkd: Tahapan = {
  kode: 'skd',
  nama: 'Seleksi Kompetensi Dasar (SKD)',
  mode: 'online',
  deskripsi: `110 soal dengan sistem CAT BKN. 100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas. Ketiga subtes dikerjakan serentak dalam satu sesi.

Nilai ambang batas:
- Ketentuan umum: TWK 65, TIU 80, TKP 166
- Cumlaude dan Diaspora: nilai kumulatif 311 dengan TIU minimal 85
- Penyandang disabilitas: nilai kumulatif 286 dengan TIU minimal 60
- Putra/Putri Papua dan Daerah Tertinggal: nilai kumulatif 286 dengan TIU minimal 60`,
  status: 'terkonfirmasi',
  subtes: [
    {
      kode: 'twk',
      nama: 'Tes Wawasan Kebangsaan (TWK)',
      jumlahSoal: 30,
      waktuMenit: 100,
      formatKetentuan: `100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas. Ketiga subtes dikerjakan serentak dalam satu sesi.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 150. Nilai ambang batas 65.`,
      materi: [
        { nama: `Nasionalisme`, catatan: `Peran warga negara dan penerapannya untuk mewujudkan kepentingan nasional dengan tetap mempertahankan identitas nasional.` },
        { nama: `Integritas`, catatan: `Menjunjung tinggi kejujuran, ketangguhan, komitmen, dan konsistensi.` },
        { nama: `Bela Negara`, catatan: `Kesadaran berbangsa dan bernegara serta mempertahankan eksistensi bangsa.` },
        { nama: `Pilar Negara`, catatan: `UUD 1945, Bhinneka Tunggal Ika, dan penerapan sila Pancasila pada peristiwa relevan.` },
        { nama: `Bahasa Negara`, catatan: `Penggunaan bahasa Indonesia yang baik dan benar.` },
      ],
      mapping: [
        { tipe: 'tryout', soalPerPaket: 30, dibutuhkan: 900, tersedia: 2016, status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx. Bank soal SKD dipakai bersama JadiSekdin, karena subtesnya sama persis. Sheet berlabel "15 Paket" tetapi totalnya sama dengan 30 paket, jadi jumlah paket sengaja dikosongkan.` },
      ],
      contoh: [
        {
          soal: [
        {
            nomor: 1,
            tipe: 'pg',
            pertanyaan: `Pada awal abad ke-20, muncul berbagai organisasi pergerakan di Indonesia seperti Budi Utomo, Sarekat Islam, dan Perhimpunan Indonesia. Puncak dari kesadaran untuk bersatu sebagai satu bangsa, satu tanah air, dan satu bahasa diwujudkan melalui sebuah peristiwa penting yang menjadi simbol kebangkitan nasionalisme Indonesia. Berdasarkan uraian tersebut, peristiwa yang menjadi tonggak lahirnya nasionalisme Indonesia adalah…`,
            opsi: [
              { label: 'A', teks: `Proklamasi Kemerdekaan` },
              { label: 'B', teks: `Kongres Pemuda II dan Sumpah Pemuda 1928` },
              { label: 'C', teks: `Reformasi 1998` },
              { label: 'D', teks: `Pembentukan BPUPKI` },
              { label: 'E', teks: `Gerakan Non-Blok` },
            ],
            kunci: 'B',
            pembahasan: `Konsep: Kebangkitan nasional dan Sumpah Pemuda 1928
Kata Kunci: Kongres Pemuda II, Sumpah Pemuda, persatuan bangsa, nasionalisme, kebangkitan nasional

Pada awal abad ke-20, muncul berbagai organisasi pergerakan nasional seperti Budi Utomo, Sarekat Islam, dan Perhimpunan Indonesia yang menandai kebangkitan kesadaran nasional. Puncak dari kesadaran untuk bersatu sebagai satu bangsa, satu tanah air, dan satu bahasa diwujudkan dalam Kongres Pemuda II pada tahun 1928, yang melahirkan Sumpah Pemuda. Peristiwa ini menjadi tonggak penting lahirnya nasionalisme Indonesia, karena mempersatukan berbagai suku, agama, dan daerah dalam semangat kebangsaan yang sama. 

Pembahasan Opsi Salah:
Opsi A salah, karena Proklamasi Kemerdekaan merupakan puncak perjuangan nasionalisme, bukan awal kebangkitannya.
Opsi C salah, karena Reformasi 1998 berhubungan dengan pembaruan sistem pemerintahan, bukan lahirnya nasionalisme.
Opsi D salah, karena BPUPKI dibentuk menjelang kemerdekaan untuk menyusun dasar negara, bukan simbol awal nasionalisme.
Opsi E salah, karena Gerakan Non-Blok adalah kerja sama internasional, bukan peristiwa kebangkitan nasional Indonesia.

Carcep:
Kongres Pemuda II tahun 1928 yang menghasilkan Sumpah Pemuda menjadi tonggak lahirnya nasionalisme Indonesia, karena menegaskan tekad persatuan dalam satu bangsa, satu tanah air, dan satu bahasa Indonesia.`,
            tingkat: 'mudah',
            status: 'final',
          },
        {
            nomor: 2,
            tipe: 'pg',
            pertanyaan: `Indonesia dikenal sebagai negara multikultural dengan ratusan suku, agama, dan bahasa daerah. Tantangan nasionalisme di era modern adalah menjaga persatuan di tengah keberagaman tersebut. Cara paling tepat untuk memperkuat nasionalisme multikultural di lingkungan masyarakat adalah…`,
            opsi: [
              { label: 'A', teks: `Mengutamakan budaya suku mayoritas sebagai identitas nasional` },
              { label: 'B', teks: `Menyeragamkan seluruh budaya daerah agar tidak ada perbedaan mencolok` },
              { label: 'C', teks: `Menghargai dan melestarikan perbedaan sebagai kekayaan bangsa yang memperkuat persatuan` },
              { label: 'D', teks: `Membatasi interaksi antar etnis agar menghindari konflik` },
              { label: 'E', teks: `Menghapus bahasa daerah demi mempermudah komunikasi nasional` },
            ],
            kunci: 'C',
            pembahasan: `Konsep yang digunakan: Nasionalisme multikultural
Kata Kunci: Keberagaman, Toleransi, Persatuan

Nasionalisme di negara multikultural diwujudkan melalui penghargaan terhadap perbedaan yang ada. Menghormati keberagaman dan menjadikannya sumber kekuatan bangsa merupakan kunci menjaga persatuan Indonesia.

Alasan opsi lain salah:
Opsi A salah karena menimbulkan diskriminasi.
Opsi B salah karena menyeragamkan berarti meniadakan keragaman.
Opsi D salah karena justru memperlebar jarak sosial.
Opsi E salah karena bahasa daerah adalah identitas budaya.

Tips & Trick :
Nasionalisme multikultural sama dengan Bhinneka Tunggal Ika, berbeda tapi tetap satu.`,
            tingkat: 'sedang',
            status: 'final',
          },
          ],
        },
      ],
    },
    {
      kode: 'tiu',
      nama: 'Tes Intelegensia Umum (TIU)',
      jumlahSoal: 35,
      waktuMenit: 100,
      formatKetentuan: `100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas. Ketiga subtes dikerjakan serentak dalam satu sesi.`,
      penilaian: `Benar 5 poin. Salah atau tidak menjawab 0 poin. Skor maksimal 175. Nilai ambang batas 80.`,
      catatan: `Contoh soal belum dimasukkan. Dokumen kurikulum menunjuk ke "Panduan Produksi Soal TIU JadiASN.pdf" yang belum ada di repo.`,
      materi: [
        { nama: `Verbal`, catatan: `Analogi, silogisme, dan analitis.` },
        { nama: `Numerik`, catatan: `Berhitung, deret angka, perbandingan kuantitatif, dan soal cerita.` },
        { nama: `Figural`, catatan: `Analogi, ketidaksamaan, dan serial.` },
      ],
      mapping: [
        { tipe: 'tryout', soalPerPaket: 35, dibutuhkan: 1050, tersedia: 2088, status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx. Bank soal SKD dipakai bersama JadiSekdin, karena subtesnya sama persis. Sheet berlabel "15 Paket" tetapi totalnya sama dengan 30 paket, jadi jumlah paket sengaja dikosongkan.` },
      ],
    },
    {
      kode: 'tkp',
      nama: 'Tes Karakteristik Pribadi (TKP)',
      jumlahSoal: 45,
      waktuMenit: 100,
      formatKetentuan: `Soal berskala: setiap opsi punya skor, tidak ada opsi yang sepenuhnya salah. 100 menit untuk peserta umum dan 130 menit untuk penyandang disabilitas. Ketiga subtes dikerjakan serentak dalam satu sesi.`,
      penilaian: `Skor per opsi paling rendah 1 dan paling tinggi 5. Tidak menjawab 0. Skor maksimal 225. Nilai ambang batas 166.`,
      catatan: `Materi mengacu pada nilai dasar ASN BerAKHLAK. Contoh soal belum dimasukkan; dokumen menunjuk ke "Panduan Produksi Soal TKP JadiASN.pdf" yang belum ada di repo.`,
      materi: [
        { nama: `Pelayanan Publik` },
        { nama: `Jejaring Kerja` },
        { nama: `Sosial Budaya` },
        { nama: `Teknologi Informasi dan Komunikasi` },
        { nama: `Profesional` },
        { nama: `Anti Radikalisme` },
      ],
      mapping: [
        { tipe: 'tryout', soalPerPaket: 45, dibutuhkan: 1350, tersedia: 1536, status: 'selesai',
          catatan: `Angka dari Mapping ASN.xlsx. Bank soal SKD dipakai bersama JadiSekdin, karena subtesnya sama persis. Sheet berlabel "15 Paket" tetapi totalnya sama dengan 30 paket, jadi jumlah paket sengaja dikosongkan.` },
      ],
    },
  ],
};
