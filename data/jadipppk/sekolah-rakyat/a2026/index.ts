import type { Angkatan } from '@/lib/skema';
import { tahapAdministrasi } from './t1-administrasi';
import { tahapSeleksiKompetensi } from './t2-seleksi-kompetensi';
import { tahapSkt } from './t3-skt';
import { tahapPengolahanNilai } from './t4-pengolahan-nilai';

/**
 * PPPK Sekolah Rakyat 2026.
 *
 * Disusun dari dua dokumen riset Product Management (kurikulum, Juni 2026, dan
 * evaluasi SKT, Juli 2026) yang bersandar pada lima dokumen resmi Kementerian
 * Sosial dan Kementerian PANRB. Dua jalur sekaligus: Guru dan Tenaga Kependidikan.
 *
 * Status 'indikasi' untuk angkatan, karena rincian seleksi kompetensi masih
 * mengikuti pola tahun sebelumnya, instrumen SKT belum diumumkan, dan jadwal
 * bersifat tentatif. Status per tahapan membedakan bagian yang sudah resmi
 * (administrasi, pengolahan nilai) dari yang belum.
 *
 * Contoh soal belum ada: riset hanya menautkan dokumen contoh soal (Mansoswan
 * dan Teknis) di Drive, tanpa memuat soalnya.
 *
 * Gambar tabel formasi, jadwal, dan skala penilaian psikotes dipasang di
 * posisi yang sama dengan dokumen riset.
 */
export const sekolahRakyat2026: Angkatan = {
  kode: '2026',
  nama: 'Seleksi 2026',
  tahun: 2026,
  status: 'indikasi',
  ringkasan:
    'Dua jalur: PPPK Guru (3.053 formasi) dan Tenaga Kependidikan (5.127 ' +
    'formasi). Empat tahap: seleksi administrasi, seleksi kompetensi CAT BKN, ' +
    'seleksi kompetensi tambahan, lalu pengolahan nilai sampai pemberkasan. ' +
    'Rincian soal seleksi kompetensi dan SKT belum resmi.',
  diperbarui: '2026-10-20',
  info: [
    {
      tipe: 'pendahuluan',
      judul: 'Gambaran umum',
      isi: `⟦gambar:gambar/jadipppk/77c093cc286a9209-sekolah-rakyat-001.png⟧
Seleksi PPPK Guru dan Tenaga Kependidikan Sekolah Rakyat Tahun 2026 adalah pengadaan tingkat instansi di lingkungan Kementerian Sosial Republik Indonesia.

Sekolah Rakyat adalah satuan pendidikan berasrama yang dirancang untuk memberikan akses pendidikan formal sekaligus membentuk peserta didik agar memiliki keterampilan hidup, pola pikir positif, nilai-nilai luhur, kemandirian, dan kemampuan kepemimpinan. Guru menjadi ujung tombak layanan pembelajaran, sedangkan tenaga kependidikan mendukung tata kelola sekolah, pengasuhan, layanan asrama, administrasi, pengelolaan data, dan pengelolaan keuangan.

Seleksi ini menjaring calon aparatur yang tidak hanya memenuhi syarat administratif, tetapi juga memiliki kompetensi teknis, kemampuan manajerial, kepekaan sosial kultural, integritas, kesiapan psikologis, dan karakter kerja yang sesuai dengan kebutuhan Sekolah Rakyat.

Total kebutuhan PPPK Sekolah Rakyat Tahun 2026 adalah 8.180 formasi:
1. PPPK Jabatan Fungsional Guru: 3.053 formasi.
2. PPPK Tenaga Kependidikan: 5.127 formasi.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Dasar hukum',
      isi: `Seleksi mengacu pada lima dokumen resmi:
1. Keputusan Menteri PANRB Nomor 215 Tahun 2026 tentang Penetapan Kebutuhan PPPK melalui Pengadaan Tingkat Instansi di Lingkungan Kementerian Sosial Tahun 2026.
2. Surat Menteri Sosial Nomor S-732/MS/HM.01.03/5/2026 tentang Surat Permohonan Persetujuan Penetapan Pedoman Pengadaan Guru dan Tendik Sekolah Rakyat.
3. Surat Menteri PANRB Nomor B/2864/M.SM.01.00/2026 tentang Persetujuan Pedoman Seleksi PPPK melalui Pengadaan Tingkat Instansi di Lingkungan Kementerian Sosial Tahun 2026.
4. Pengumuman Nomor 1995/1/KP.01.01/06/2026 tentang Seleksi Pengadaan PPPK Jabatan Fungsional Guru pada Sekolah Rakyat Tahun 2026.
5. Pengumuman Nomor 1996/1/KP.01.01/06/2026 tentang Seleksi Pengadaan PPPK untuk Tenaga Kependidikan pada Sekolah Rakyat di Lingkungan Kementerian Sosial Republik Indonesia Tahun 2026.

Detail materi seleksi kompetensi belum punya ketentuan resmi khusus tahun 2026, sehingga dokumen riset mengacu pada pola tahun sebelumnya dengan rujukan utama PERMENPAN Nomor 38 Tahun 2017.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Peserta seleksi',
      isi: `PPPK Guru:
1. Lulusan PPG Prajabatan atau PPG Calon Guru yang belum terdata sebagai guru pada Data Pokok Pendidikan (Dapodik) Kementerian Pendidikan Dasar dan Menengah.
2. Lulusan PPG Prajabatan atau PPG Calon Guru yang sudah terdata sebagai guru bukan ASN pada Dapodik Kementerian Pendidikan Dasar dan Menengah.

PPPK Tenaga Kependidikan:
1. PPPK paruh waktu di lingkungan Kementerian Sosial.
2. Pelamar umum.
Jabatan tenaga kependidikan yang menjadi sasaran: Wali Asuh, Wali Asrama, Operator Sekolah, Pengelola Keuangan, dan Tenaga Administrasi.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Formasi PPPK Guru',
      isi: `Formasi PPPK Jabatan Fungsional Guru Sekolah Rakyat Tahun 2026 terdiri atas 18 jabatan dengan total 3.053 formasi.
⟦gambar:gambar/jadipppk/050e8b9e42814844-sekolah-rakyat-002.png⟧
⟦gambar:gambar/jadipppk/f5bffd7aa6c01489-sekolah-rakyat-003.png⟧
⟦gambar:gambar/jadipppk/4a0054540f469259-sekolah-rakyat-004.png⟧`,
    },
    {
      tipe: 'lainnya',
      judul: 'Formasi PPPK Tenaga Kependidikan',
      isi: `Formasi PPPK Tenaga Kependidikan Sekolah Rakyat Tahun 2026 terdiri atas 5 jenis kebutuhan dengan total 5.127 formasi.
⟦gambar:gambar/jadipppk/ca04d196646ba3b9-sekolah-rakyat-005.png⟧
⟦gambar:gambar/jadipppk/35c52c57864a46d4-sekolah-rakyat-006.png⟧`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan PPPK Guru',
      isi: `Persyaratan umum:
1. Warga Negara Indonesia (WNI) yang bertakwa kepada Tuhan Yang Maha Esa.
2. Usia paling rendah 20 tahun dan paling tinggi 40 tahun pada saat ditetapkan sebagai bakal calon guru.
3. Tidak pernah dipidana dengan pidana penjara berdasarkan putusan pengadilan yang telah berkekuatan hukum tetap karena melakukan tindak pidana dengan pidana penjara 2 tahun atau lebih.
4. Tidak pernah diberhentikan dengan hormat tidak atas permintaan sendiri atau tidak dengan hormat sebagai Aparatur Sipil Negara, prajurit TNI, atau anggota Polri, atau diberhentikan tidak dengan hormat sebagai pegawai swasta.
5. Tidak berkedudukan sebagai Aparatur Sipil Negara, prajurit TNI, atau anggota Polri.
6. Tidak menjadi anggota atau pengurus partai politik atau terlibat politik praktis.
7. Memiliki kualifikasi pendidikan akademik sarjana (S-1) atau diploma empat (D-IV)/Sarjana Terapan.
8. Memiliki sertifikat pendidik.
9. Sehat jasmani dan rohani sesuai persyaratan jabatan yang dilamar, dibuktikan dengan surat keterangan dokter dan diserahkan pada saat pengangkatan.
10. Bebas dari narkotika, psikotropika, dan zat adiktif lainnya (NAPZA), dibuktikan dengan surat keterangan dokter dan diserahkan pada saat pengangkatan.
11. Memiliki catatan kepolisian yang bersih, dibuktikan dengan surat keterangan catatan kepolisian dan diserahkan pada saat pengangkatan.
12. Bersedia ditempatkan di seluruh wilayah Negara Kesatuan Republik Indonesia.

Persyaratan khusus:
1. Memiliki indeks prestasi kumulatif (IPK) minimal 3,00.
2. Bersedia bekerja bertempat tinggal di sekitar Sekolah Rakyat dan/atau diprioritaskan tinggal di asrama Sekolah Rakyat.
3. Memiliki surat izin untuk mengikuti seleksi PPPK JF Guru pada Sekolah Rakyat yang ditandatangani oleh:
   a. minimal pejabat administrator yang membidangi kepegawaian pada dinas pendidikan kabupaten/kota/provinsi, bagi pelamar guru yang mengajar pada satuan pendidikan yang diselenggarakan oleh pemerintah;
   b. ketua yayasan, bagi pelamar guru yang mengajar pada satuan pendidikan yang diselenggarakan oleh masyarakat.`,
    },
    {
      tipe: 'persyaratan',
      judul: 'Persyaratan PPPK Tenaga Kependidikan',
      isi: `1. Warga Negara Indonesia (WNI) yang bertakwa kepada Tuhan Yang Maha Esa.
2. Usia paling rendah 20 tahun dan paling tinggi 45 tahun.
3. Tidak pernah dipidana dengan pidana penjara berdasarkan putusan pengadilan yang telah berkekuatan hukum tetap karena melakukan tindak pidana dengan pidana penjara 2 tahun atau lebih.
4. Tidak pernah diberhentikan dengan hormat tidak atas permintaan sendiri atau tidak dengan hormat sebagai Aparatur Sipil Negara, prajurit TNI, atau anggota Polri, atau diberhentikan tidak dengan hormat sebagai pegawai swasta.
5. Tidak pernah diberhentikan karena pelanggaran disiplin dari tempat bekerja sebelumnya.
6. Tidak berkedudukan sebagai Calon Pegawai Negeri Sipil, Pegawai Negeri Sipil, PPPK, prajurit TNI, atau anggota Polri.
7. Tidak menjadi anggota atau pengurus partai politik atau terlibat politik praktis.
8. Memiliki kualifikasi pendidikan sesuai dengan persyaratan jabatan.
9. Sehat jasmani dan rohani sesuai persyaratan jabatan yang dilamar, dibuktikan dengan surat keterangan dokter dan diserahkan pada saat pengangkatan.
10. Bebas dari narkotika, psikotropika, dan zat adiktif lainnya (NAPZA), dibuktikan dengan surat keterangan dokter dan diserahkan pada saat pengangkatan.
11. Memiliki catatan kepolisian yang bersih, dibuktikan dengan surat keterangan catatan kepolisian dan diserahkan pada saat pengangkatan.
12. Lulusan perguruan tinggi dengan akreditasi jurusan/program studi minimal B bagi lulusan S-1, D-IV, dan D-III.
13. Memiliki indeks prestasi kumulatif (IPK) minimal 3,10 bagi lulusan S-1, D-IV, dan D-III.
14. Bersedia ditempatkan di seluruh wilayah Negara Kesatuan Republik Indonesia.
15. Bersedia bekerja secara sif, bertempat tinggal di sekitar Sekolah Rakyat dan/atau diprioritaskan tinggal di asrama Sekolah Rakyat.`,
    },
    {
      tipe: 'jadwal',
      judul: 'Jadwal seleksi (tentatif)',
      isi: `Jadwal seleksi PPPK Guru dan Tenaga Kependidikan Sekolah Rakyat Tahun 2026 bersifat tentatif dan dapat berubah sesuai pengumuman resmi.
⟦gambar:gambar/jadipppk/8f701d7e789b0efa-sekolah-rakyat-007.png⟧
⟦gambar:gambar/jadipppk/612d35786430deab-sekolah-rakyat-008.png⟧
⟦gambar:gambar/jadipppk/01d74cbf89dfb7d4-sekolah-rakyat-009.png⟧
⟦gambar:gambar/jadipppk/b9cb0372584ef24b-sekolah-rakyat-010.png⟧`,
    },
    {
      tipe: 'penilaian',
      judul: 'Tahapan dan bobot seleksi',
      isi: `Tahapan PPPK Guru:
1. Seleksi administrasi.
2. Seleksi kompetensi dengan CAT BKN: kompetensi teknis, manajerial, sosial kultural, dan wawancara untuk menilai integritas dan moralitas.
3. Seleksi kompetensi tambahan: psikotes, tes kemampuan Bahasa Inggris, dan tes wawancara.
4. Pengolahan nilai.
5. Pengumuman kelulusan.
6. Masa sanggah.
7. Pengisian daftar riwayat hidup dan pemberkasan.

Tahapan PPPK Tenaga Kependidikan: sama, tetapi seleksi kompetensi CAT BKN dan seleksi kompetensi tambahan (hanya psikotes) teknis pelaksanaannya akan diumumkan kemudian.

Bobot dalam nilai akhir:
- Guru: Seleksi Kompetensi (CAT BKN) 50 persen; Seleksi Kompetensi Tambahan 50 persen, terdiri atas psikotes 30 persen, tes Bahasa Inggris 10 persen, dan tes wawancara 10 persen.
- Tendik: Seleksi Kompetensi (CAT BKN) 60 persen; Seleksi Kompetensi Tambahan berupa psikotes (non-CAT) 40 persen.`,
    },
    {
      tipe: 'penilaian',
      judul: 'Sistem kelulusan PPPK Guru',
      isi: `Peserta seleksi kompetensi tambahan: pelamar yang telah mengikuti ujian Computer Assisted Test (CAT), paling banyak sejumlah 2 kali kebutuhan formasi pada masing-masing jabatan (menurut dokumen kurikulum Juni 2026; dokumen riset SKT Juli 2026 menulis 3 kali, jadi pastikan ke pengumuman resmi). Pemeringkatannya:
1. Nilai total Seleksi Kompetensi CAT tertinggi.
2. Bila sama, nilai seleksi kompetensi teknis tertinggi.
3. Bila sama, nilai manajerial tertinggi.
4. Bila sama, nilai sosial kultural tertinggi.
5. Bila sama, indeks prestasi kumulatif tertinggi.
6. Bila sama, usia tertinggi.
7. Bila usia masih sama, semua pelamar diikutsertakan.

Penentuan kelulusan berdasarkan hasil integrasi nilai terbaik. Bila nilai akhir sama, urutan penentunya:
1. Nilai seleksi kompetensi CAT BKN tertinggi.
2. Bila sama, nilai seleksi kompetensi teknis tertinggi.
3. Bila sama, nilai manajerial tertinggi.
4. Bila sama, nilai sosial kultural tertinggi.
5. Bila sama, nilai psikotes tertinggi.
6. Bila sama, nilai tes kemampuan Bahasa Inggris tertinggi.
7. Bila sama, nilai tes wawancara tertinggi.
8. Bila sama, usia tertinggi.

Bila masih ada kebutuhan yang belum terpenuhi, dapat diisi oleh peserta pada jabatan yang sama dan berperingkat terbaik berdasarkan hasil integrasi nilai pada lokasi formasi di provinsi yang sama.`,
    },
    {
      tipe: 'penilaian',
      judul: 'Sistem kelulusan PPPK Tenaga Kependidikan',
      isi: `Peserta seleksi kompetensi tambahan: pelamar yang telah mengikuti ujian CAT, paling banyak sejumlah 2 kali kebutuhan formasi pada masing-masing jabatan (menurut dokumen kurikulum Juni 2026; dokumen riset SKT Juli 2026 menulis 3 kali, jadi pastikan ke pengumuman resmi). Pemeringkatannya:
1. Nilai total Seleksi Kompetensi CAT tertinggi.
2. Bila sama, nilai seleksi kompetensi teknis tertinggi.
3. Bila sama, nilai manajerial tertinggi.
4. Bila sama, nilai sosial kultural tertinggi.
5. Bila sama, indeks prestasi kumulatif tertinggi.
6. Bila sama, usia tertinggi.
7. Bila usia masih sama, semua pelamar diikutsertakan.

Penentuan kelulusan berdasarkan peringkat terbaik yang berlaku berurutan dengan prioritas:
1. PPPK paruh waktu di lingkungan Kementerian Sosial RI.
2. Pelamar yang memiliki ijazah yang diterbitkan perguruan tinggi yang diselenggarakan Kementerian Sosial RI.
3. Pelamar yang memiliki Sertifikat Sumber Daya Manusia Kesejahteraan Sosial yang diterbitkan lembaga sertifikasi profesi Kementerian Sosial RI.
4. Pelamar umum.

Selanjutnya penentuan kelulusan berdasarkan hasil integrasi nilai terbaik. Bila nilai akhir sama, urutan penentunya:
1. Nilai seleksi kompetensi CAT BKN tertinggi.
2. Bila sama, nilai seleksi kompetensi teknis tertinggi.
3. Bila sama, nilai manajerial tertinggi.
4. Bila sama, nilai sosial kultural tertinggi.
5. Bila sama, nilai psikotes.
6. Bila sama, indeks prestasi kumulatif tertinggi.
7. Bila sama, usia tertinggi.`,
    },
    {
      tipe: 'lainnya',
      judul: 'Seleksi Kompetensi Tambahan (SKT)',
      isi: `⟦gambar:gambar/jadipppk/77c093cc286a9209-sekolah-rakyat-011.png⟧
Seleksi Kompetensi Tambahan (SKT) adalah tahapan untuk menilai kompetensi spesifik peserta sesuai kebutuhan jabatan, sebagai pelengkap kompetensi utama, dalam rangka memperoleh calon guru yang sesuai.

SKT terdiri atas:
1. Psikotes (untuk Guru dan Tendik).
2. Tes kemampuan Bahasa Inggris (untuk Guru saja).
3. Tes wawancara (untuk Guru saja).

Hasil SKT disampaikan Kementerian Sosial kepada BKN untuk pengolahan nilai, yaitu mengintegrasikan nilai seleksi kompetensi CAT dan SKT. Seluruh peserta wajib mengikuti SKT; peserta yang tidak mengikuti salah satu tahapannya dengan alasan apa pun didiskualifikasi.

Dokumen riset SKT (Juli 2026) menulis peserta SKT paling banyak 3 kali kebutuhan formasi per jabatan, dengan urutan pemeringkatan yang sama seperti di atas. Dokumen kurikulum (Juni 2026) menulis 2 kali. Perbedaan ini belum terselesaikan di riset.

Materi dan penilaian tiap tes ada di halaman tahap Seleksi Kompetensi Tambahan.`,
    },
  ],
  tahapan: [tahapAdministrasi, tahapSeleksiKompetensi, tahapSkt, tahapPengolahanNilai],
  sumber: [
    {
      jenis: 'internal',
      judul: 'JadiPPPK - Riset dan Kurikulum Seleksi PPPK Sekolah Rakyat 2026',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
      catatan:
        'Dokumen Product Management, Juni 2026, disusun dari lima dokumen resmi. Rincian seleksi kompetensi di dalamnya masih mengikuti pola tahun sebelumnya dan sementara.',
    },
    {
      jenis: 'internal',
      judul: 'JadiPPPK - Riset Seleksi Kompetensi Tambahan PPPK SR 2026',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
      catatan:
        'Dokumen Product Management, Juli 2026. Aspek penilaian, bobot, dan kelulusan berasal dari pedoman; prediksi instrumen dan evaluasi aplikasi adalah dugaan tim.',
    },
    {
      jenis: 'internal',
      judul: 'JadiPPPK - Dokumen Kompetensi dan Contoh Soal Mansoswan - PPPK Guru dan Tendik Sekolah Rakyat 2026',
      url: 'https://drive.google.com/file/d/1vwWKmMTWy3hTZJBSh51vlX_smbylpUzb/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'asumsi',
      catatan: 'Hanya ditautkan di riset; isinya belum dibaca dan belum dimasukkan ke Product Knowledge.',
    },
    {
      jenis: 'internal',
      judul: 'JadiPPPK - Dokumen Kompetensi dan Contoh Soal Teknis - Seleksi PPPK Guru dan Tendik Sekolah Rakyat 2026',
      url: 'https://drive.google.com/file/d/1HMpZ7R1tWNUEAqdbSuNGyNOYoeZaWv-Y/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'asumsi',
      catatan: 'Hanya ditautkan di riset; isinya belum dibaca dan belum dimasukkan ke Product Knowledge.',
    },
    {
      jenis: 'resmi',
      judul: 'Keputusan Menteri PANRB Nomor 215 Tahun 2026 (kebutuhan PPPK Kementerian Sosial)',
      url: 'https://drive.google.com/file/d/1Stj3hyC5-1MnC8NLP6KsV9p8qZzHiqx1/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
    },
    {
      jenis: 'resmi',
      judul: 'Surat Menteri Sosial Nomor S-732/MS/HM.01.03/5/2026 (pedoman pengadaan Guru dan Tendik Sekolah Rakyat)',
      url: 'https://drive.google.com/file/d/1_5_0_iZyaqKK5SKXmen7RBl9MyDgfWMB/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
      catatan: 'Halaman 12 sampai 14 memuat penilaian psikotes.',
    },
    {
      jenis: 'resmi',
      judul: 'Surat Menteri PANRB Nomor B/2864/M.SM.01.00/2026 (persetujuan pedoman seleksi)',
      url: 'https://drive.google.com/file/d/1X40lxZNn90sAHKPTO5AW048XcVO16bu9/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
    },
    {
      jenis: 'resmi',
      judul: 'Pengumuman Nomor 1995/1/KP.01.01/06/2026 (seleksi PPPK JF Guru Sekolah Rakyat)',
      url: 'https://drive.google.com/file/d/14dG1msPOpHIv75v4XX0ZsvgalB8HO5nk/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
    },
    {
      jenis: 'resmi',
      judul: 'Pengumuman Nomor 1996/1/KP.01.01/06/2026 (seleksi PPPK Tenaga Kependidikan Sekolah Rakyat)',
      url: 'https://drive.google.com/file/d/15zfDv4IqgzCuTNn-8vy8733y5CKtr2oH/view',
      tanggalAkses: '2026-10-20',
      keandalan: 'resmi',
    },
  ],
};
