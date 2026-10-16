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
export type TipeSoal =
  | 'pg'
  | 'pg_kompleks'
  | 'pg_kategori'
  | 'isian_singkat'
  | 'benar_salah'
  | 'skala'
  | 'uraian';
export type Tingkat = 'mudah' | 'sedang' | 'sulit';
export type StatusReview = 'draft' | 'direview' | 'final';
export type StatusProduksi = 'belum_mulai' | 'berjalan' | 'selesai';
export type Keandalan = 'resmi' | 'alumni' | 'media' | 'asumsi';

export interface Opsi {
  label: string;
  teks: string;
}

/**
 * Teks soal (pertanyaan, opsi, pembahasan, stimulus) boleh memuat:
 *   - gambar: ⟦gambar:gambar/<platform>/<berkas>⟧ di posisinya;
 *   - rumus LaTeX di antara \( dan \), dirender KaTeX di server. Karena teks
 *     ditulis sebagai template literal, garis miringnya DIGANDAKAN di berkas:
 *     `nilai \\(\\frac{1}{2}\\) dari x`. Rumus yang menempati satu baris
 *     sendiri tampil sebagai blok. Koma desimal ditulis biasa ("0,6").
 * Rumus yang gagal diurai muncul sebagai temuan di halaman Cek Data.
 */
export interface Soal {
  nomor: number;
  tipe: TipeSoal;
  pertanyaan: string;
  /** Kosongkan untuk isian singkat. */
  opsi?: Opsi[];
  /**
   * Huruf opsi untuk pilihan ganda, atau nilai jawabannya untuk isian.
   * Kosongkan ('') kalau `tanpaKunci`.
   *
   * Dua tipe punya lebih dari satu nilai, ditulis dipisah koma:
   *   - `pg_kompleks` (PGK MCMA, beberapa jawaban benar): huruf semua opsi yang
   *     benar, mis. 'A, D';
   *   - `pg_kategori` (PGK Kategori): kategori jawaban tiap pernyataan menurut
   *     urutan `opsi`, mis. 'Salah, Salah, Benar'. Tiap nilai harus salah satu
   *     isi `kategori`.
   */
  kunci: string;
  /**
   * Hanya untuk `pg_kategori`: dua kategori yang tersedia untuk tiap pernyataan
   * (opsi), mis. ['Benar', 'Salah'], ['Setuju', 'Tidak Setuju'], atau
   * ['Tepat', 'Tidak Tepat']. Urutannya mengikuti urutan kolom di soal. Nama
   * kategori tidak boleh memuat koma, karena `kunci` dipisah dengan koma.
   */
  kategori?: [string, string];
  /**
   * `true` untuk butir yang memang TIDAK punya jawaban benar: tes kepribadian
   * dan minat (Big Five, EPPS, PAPI), uraian bebas, dan tugas menggambar.
   * Tampilan tidak menandai opsi mana pun sebagai kunci (bukan "KUNCI" dan
   * bukan "SKOR TERTINGGI"), dan Cek Data tidak menuntut kunci. Cara
   * penilaiannya ditulis di `pembahasan`: dimensi yang diukur, skor per opsi,
   * atau aspek yang dinilai.
   */
  tanpaKunci?: true;
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
  /**
   * Boleh memuat gambar ⟦gambar:gambar/<platform>/<berkas>⟧ dan rumus, seperti
   * teks soal. Dipakai, mis., untuk tangkapan layar yang menjelaskan bentuk tes.
   */
  formatKetentuan?: string;
  /** Aturan yang sama dengan `formatKetentuan`. */
  penilaian?: string;
  catatan?: string;
  materi?: Materi[];
  mapping?: Mapping[];
  contoh?: Kelompok[];
  /**
   * `false` untuk subtes yang memang TIDAK PUNYA butir soal: tes proyektif
   * (Wartegg, DAP), lembar kerja (Pauli), uraian bebas, tes fisik dan
   * kesehatan, atau aplikasi terpisah (GBA).
   *
   * Sengaja field eksplisit, bukan dideteksi dari teks catatan. Mencocokkan
   * kalimat seperti "bukan tes tertulis" rapuh: satu penulisan ulang catatan
   * dan subtesnya diam-diam masuk daftar kekurangan di halaman Kelengkapan.
   */
  bankSoal?: false;
}

export interface Tahapan {
  kode: string;
  nama: string;
  mode?: Mode;
  deskripsi?: string;
  status: StatusData;
  /**
   * `true` bila SEMUA subtes di tahapan ini dikerjakan serentak dalam satu sesi
   * (SKD: TWK, TIU, dan TKP dalam satu sesi 100 menit). `waktuMenit` tiap subtes
   * lalu berisi waktu sesi itu, bukan jatah waktunya sendiri, jadi durasi
   * tahapan dihitung SEKALI, bukan dijumlahkan.
   *
   * Sengaja field eksplisit, bukan dideteksi dari angka yang kebetulan sama atau
   * dari kalimat di deskripsi. Dua subtes berurutan yang sama-sama 7 menit bukan
   * satu sesi, dan satu penulisan ulang deskripsi akan diam-diam menggandakan
   * lagi durasinya di semua halaman.
   */
  waktuBersama?: true;
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
  /** Jalur di bawah `public/`, mis. "logo/icon-jadiasn.png". */
  logo?: string;
  tes: Tes[];
}

/**
 * Arti tiap status, ditulis untuk PEMBACA yang akan meneruskannya ke peserta —
 * CS dan marketing — bukan untuk penyusun data.
 *
 * `boleh` adalah inti yang harus terbaca sekilas: apa yang boleh dan tidak
 * boleh dilakukan dengan informasi berstatus ini. Itulah alasan sistem status
 * ada; lencana tanpa penjelasan hanya jadi warna.
 */
export const LABEL_STATUS: Record<
  StatusData,
  { teks: string; kelas: string; arti: string; boleh: string }
> = {
  terkonfirmasi: {
    teks: 'Terkonfirmasi',
    kelas: 'lencana lencana-hijau',
    arti: 'Bersumber dari pengumuman resmi atau dokumen yang sudah diverifikasi.',
    boleh: 'Boleh disampaikan ke peserta.',
  },
  indikasi: {
    teks: 'Indikasi',
    kelas: 'lencana lencana-kuning',
    arti: 'Pola dari riset, pengalaman alumni, atau rekonstruksi tim — belum ada pengumuman resmi.',
    boleh: 'Jangan sampaikan ke peserta sebagai kepastian.',
  },
  coming_soon: {
    teks: 'Belum ada data',
    kelas: 'lencana lencana-abu',
    arti: 'Belum ada informasi sama sekali untuk bagian ini.',
    boleh: 'Jangan menebak isinya.',
  },
};

/** Tipe soal yang `kunci`-nya memuat beberapa nilai dipisah koma. */
const KUNCI_JAMAK: TipeSoal[] = ['pg_kompleks', 'pg_kategori'];

/**
 * Isi `kunci` sebagai daftar nilai, tanpa spasi di tepinya.
 *
 * `pg_kompleks` dan `pg_kategori` dipecah di koma ('A, D' menjadi ['A', 'D']);
 * tipe lain tetap satu nilai utuh, karena isian singkat boleh memuat koma
 * ("0,6"). Kunci kosong menghasilkan daftar kosong. Murni dan tanpa dependensi,
 * jadi aman dipakai komponen klien maupun pemeriksa isi.
 */
export function daftarKunci(soal: Pick<Soal, 'tipe' | 'kunci'>): string[] {
  const mentah = soal.kunci.trim();
  if (!mentah) return [];
  return KUNCI_JAMAK.includes(soal.tipe)
    ? mentah.split(',').map((k) => k.trim()).filter(Boolean)
    : [mentah];
}
