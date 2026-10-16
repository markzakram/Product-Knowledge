import type { Tahapan } from '@/lib/skema';

/**
 * Mata uji pilihan TKA SMA 2026. Sengaja tanpa subtes dan tanpa contoh: laporan
 * "Laporan TKA SMA Tahun 2026" (BAB II, 2.1.B) dan persyaratan peserta (BAB I,
 * 1.3.i dan 1.3.j) hanya mencantumkan daftar namanya dan aturan memilihnya,
 * tanpa jumlah soal, waktu, kisi-kisi, atau contoh soal.
 *
 * Ini BUKAN tahap seleksi terpisah. Peserta mengikuti 3 mata uji wajib dan 2 mata
 * uji pilihan dalam satu pelaksanaan TKA; dokumen tidak menjelaskan urutan atau
 * hari pengerjaannya. Tahapan ini hanya wadah supaya celah datanya terlihat di
 * halaman angkatan; isi subtes ditambahkan bila datanya sudah ada.
 */
export const tahapPilihan: Tahapan = {
  kode: 'mata-uji-pilihan',
  nama: 'Mata Uji Pilihan',
  deskripsi:
    'Belum lengkap: dokumen hanya mencantumkan daftar mata uji pilihan, tanpa jumlah soal, waktu, ' +
    'kisi-kisi, atau contoh soal. Peserta wajib mengikuti 2 mata uji pilihan di samping 3 mata uji wajib ' +
    '(bukan tahap seleksi terpisah; dokumen tidak menjelaskan urutan atau hari pengerjaannya). ' +
    'Daftar pilihan (19): Matematika Lanjutan; Bahasa Indonesia Lanjutan; Bahasa Inggris Lanjutan; ' +
    'Fisika; Kimia; Biologi; Ekonomi; Sosiologi; Geografi; Sejarah; PKN; Antropologi; Bahasa Arab; ' +
    'Bahasa Prancis; Bahasa Jerman; Bahasa Jepang; Bahasa Korea; Bahasa Mandarin; Produk Projek ' +
    'Kreatif dan Kewirausahaan. Khusus SMK/MAK, pilihan pertama adalah mata pelajaran Produk/Projek ' +
    'Kreatif dan Kewirausahaan dan pilihan kedua adalah mata pelajaran yang lain.',
  status: 'coming_soon',
  subtes: [],
};
