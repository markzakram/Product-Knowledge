/**
 * Bentuk data Product Knowledge.
 *
 * Datanya bersarang, bukan tabel berelasi: soal ada di dalam subtes, subtes di
 * dalam tahapan, tahapan di dalam angkatan. Tidak ada kolom `*_id` sama sekali.
 *
 * Konsekuensinya penting: relasi putus menjadi MUSTAHIL, bukan sekadar
 * terdeteksi. Tidak ada lagi baris yang hilang dari aplikasi gara-gara satu
 * huruf salah ketik di kolom penghubung, karena tidak ada kolom penghubung.
 *
 * Sumber kebenarannya file di folder `data/`. Menambah angkatan berarti menulis
 * satu file baru dan mengimpornya - diperiksa compiler, direview lewat PR,
 * dan tercatat di riwayat git lengkap dengan siapa mengubah apa.
 */

export type StatusData = 'terkonfirmasi' | 'indikasi' | 'coming_soon';
export type Mode = 'online' | 'offline' | 'hybrid';
export type TipeKonten = 'tryout' | 'latsol';
export type TipeSoal = 'pg' | 'pg_kompleks' | 'isian_singkat' | 'benar_salah' | 'skala';
export type Tingkat = 'mudah' | 'sedang' | 'sulit';
export type StatusReview = 'draft' | 'direview' | 'final';
export type StatusProduksi = 'belum_mulai' | 'berjalan' | 'selesai';
export type Keandalan = 'resmi' | 'alumni' | 'media' | 'asumsi';

export interface Opsi {
  label: string;
  teks: string;
}

export interface Soal {
  nomor: number;
  tipe: TipeSoal;
  pertanyaan: string;
  /** Kosongkan untuk isian singkat. */
  opsi?: Opsi[];
  /** Huruf opsi untuk pilihan ganda, atau nilai jawabannya untuk isian. */
  kunci: string;
  pembahasan: string;
  /** Jalur di bawah `public/`, mis. "gambar/jadipcpm/digit-01.png". */
  gambar?: string;
  tingkat?: Tingkat;
  status?: StatusReview;
}

/**
 * Sekelompok soal yang berbagi satu stimulus.
 *
 * Semua soal tinggal di dalam kelompok, termasuk yang berdiri sendiri - itu
 * cukup kelompok tanpa stimulus. Seragam begini menghindari tipe gabungan
 * yang harus dibedakan satu per satu saat dirender.
 */
export interface Kelompok {
  stimulus?: {
    judul?: string;
    isi?: string;
    gambar?: string;
  };
  soal: Soal[];
}

export interface Materi {
  nama: string;
  catatan?: string;
}

export interface Mapping {
  tipe: TipeKonten;
  paket?: number;
  soalPerPaket?: number;
  dibutuhkan: number;
  /** Kosongkan kalau belum dihitung. Jangan tulis 0 - artinya beda. */
  tersedia?: number;
  pic?: string;
  status?: StatusProduksi;
  catatan?: string;
}

export interface Subtes {
  /** Dipakai di URL, huruf kecil. */
  kode: string;
  nama: string;
  jumlahSoal?: number;
  /** Desimal berarti pecahan menit: 7.5 = 7 menit 30 detik. */
  waktuMenit?: number;
  formatKetentuan?: string;
  penilaian?: string;
  catatan?: string;
  materi?: Materi[];
  mapping?: Mapping[];
  contoh?: Kelompok[];
}

export interface Tahapan {
  kode: string;
  nama: string;
  mode?: Mode;
  deskripsi?: string;
  status: StatusData;
  subtes: Subtes[];
}

export interface Info {
  tipe: 'pendahuluan' | 'persyaratan' | 'jadwal' | 'penilaian' | 'lainnya';
  judul: string;
  isi: string;
}

export interface Sumber {
  jenis: 'resmi' | 'internal' | 'alumni' | 'media';
  judul: string;
  url?: string;
  tanggalAkses?: string;
  keandalan: Keandalan;
  catatan?: string;
}

export interface Angkatan {
  kode: string;
  nama: string;
  tahun: number;
  status: StatusData;
  ringkasan?: string;
  pic?: string;
  diperbarui?: string;
  info?: Info[];
  tahapan: Tahapan[];
  sumber?: Sumber[];
}

export interface Tes {
  kode: string;
  nama: string;
  instansi?: string;
  kategori?: string;
  deskripsi?: string;
  angkatan: Angkatan[];
}

export interface Platform {
  kode: string;
  nama: string;
  slug: string;
  deskripsi?: string;
  tes: Tes[];
}

export const LABEL_STATUS: Record<StatusData, { teks: string; kelas: string }> = {
  terkonfirmasi: { teks: 'Terkonfirmasi', kelas: 'lencana lencana-hijau' },
  indikasi: { teks: 'Indikasi', kelas: 'lencana lencana-kuning' },
  coming_soon: { teks: 'Belum ada data', kelas: 'lencana lencana-abu' },
};
