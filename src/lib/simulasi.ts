import { daftarKunci, type StatusData, type Subtes, type TipeSoal } from './skema';
import type { Bagian, KelompokSiap, SoalSiap } from './bagian';

/**
 * Logika murni mode simulasi tes: memilih soal, menghitung batas waktu, menilai
 * jawaban, dan meringkas hasil.
 *
 * Dipakai server (menyusun rencana simulasi) maupun klien (menilai dan meringkas),
 * jadi berkas ini TIDAK boleh mengimpor `@/lib/data`: modul itu menarik seluruh
 * isi `data/` ke bundel browser. Yang diimpor hanya tipe dan `daftarKunci`.
 */

// ─── Rencana simulasi (bentuk data yang dikirim server ke klien) ──────────

/**
 * Soal siap tampil. `kunciTampil` dan `kunciPolos` hanya ada untuk isian yang
 * kuncinya memuat rumus LaTeX: rumus dirender KaTeX di server (tidak ada KaTeX di
 * klien), jadi server menyiapkan kunci untuk ditampilkan, dan bentuk teks polosnya
 * (yang bisa diketik) untuk membandingkan jawaban.
 */
export type SoalSim = SoalSiap & { kunciTampil?: Bagian[]; kunciPolos?: string };

export interface KelompokSim {
  stimulus?: KelompokSiap['stimulus'];
  soal: SoalSim[];
}

export interface SubtesSim {
  kode: string;
  nama: string;
  /** Kode chip, sama dengan yang tampil di halaman angkatan. */
  chip: string;
  /** `jumlahSoal` di data subtes; kosong bila belum diketahui. */
  jumlahSoal?: number;
  /** Contoh yang ada lebih sedikit dari `jumlahSoal`, jadi seluruhnya dipakai. */
  parsial: boolean;
  kelompok: KelompokSim[];
}

/**
 * Satu bagian = satu jatah waktu. Subtes biasa jadi satu bagian sendiri; seluruh
 * subtes sebuah tahapan `waktuBersama` (SKD) jadi SATU bagian dengan satu timer.
 */
export interface BagianSim {
  id: string;
  judul: string;
  chip: string;
  /** "Tahap 2: Seleksi Kompetensi Dasar". */
  tahap: string;
  subtes: SubtesSim[];
  /** Batas waktu dalam menit (boleh pecahan). Kosong = tanpa batas, stopwatch. */
  menit?: number;
  /** Waktu bagian ini adalah waktu satu sesi bersama (tahapan `waktuBersama`). */
  satuSesi?: true;
}

export interface PropsSimulasi {
  mode: 'subtes' | 'angkatan';
  /** Jalur halaman simulasi; juga kunci penyimpanan sesi. */
  jalur: string;
  /** "UTBK-SNBT Tahun 2027". */
  judul: string;
  /** Nama yang dikerjakan: nama subtes, atau judul angkatan. */
  nama: string;
  /** Status paling lemah di antara angkatan dan tahapan yang ikut. */
  status: StatusData;
  jejak: { teks: string; ke?: string }[];
  kembali: { href: string; teks: string };
  /** Subtes berikutnya yang punya simulasi; hanya untuk rute subtes. */
  berikutnya?: { href: string; nama: string };
  bagian: BagianSim[];
  dilewati: { nama: string; tahap: string; alasan: string }[];
}

// ─── Memilih soal ────────────────────────────────────────────────────────

/** Soal uraian (tugas bebas) tidak ikut: tak ada yang diisi dan dinilai di layar. */
export const soalIkut = (s: { tipe: TipeSoal }) => s.tipe !== 'uraian';

/** Subtes yang punya rute simulasi: ada butir soalnya, dan sedikitnya satu bukan uraian. */
export const subtesBisaSimulasi = (s: Pick<Subtes, 'bankSoal' | 'contoh'>) =>
  s.bankSoal !== false && (s.contoh ?? []).some((k) => k.soal.some(soalIkut));

/**
 * Aturan sebar murni: `titik` titik berjarak sama dijatuhkan di atas N soal (N = jumlah
 * `ukuran`), dan kelompok yang terkena titik ikut utuh. Kelompok ke-i terkena bila interval
 * [awal × titik/N, akhir × titik/N) memuat bilangan bulat, dengan awal dan akhir = posisi
 * kumulatif soal di batas kelompok itu. Dihitung dengan bilangan bulat saja, supaya batas
 * yang pas tak meleset karena galat pembulatan desimal.
 */
export function terkenaTitik(ukuran: number[], titik: number): boolean[] {
  const total = ukuran.reduce((a, b) => a + b, 0);
  let awal = 0;
  return ukuran.map((u) => {
    const akhir = awal + u;
    // Bilangan bulat terkecil yang >= awal × titik/N.
    const x = awal * titik;
    const bulat = (x - (x % total)) / total + (x % total === 0 ? 0 : 1);
    awal = akhir;
    return bulat * total < akhir * titik;
  });
}

/**
 * Kelompok mana yang ikut bila soalnya (N, jumlah `ukuran`) lebih banyak dari `jumlahSoal`
 * (T): disebar merata di seluruh daftar, bukan diambil dari depan, supaya semua bagian
 * subtes (verbal, numerik, figural) terwakili. Deterministik, urutan data tetap, kelompok
 * tetap utuh (stimulusnya dipakai bersama). Bila N <= T, semua ikut.
 *
 * Dasarnya `terkenaTitik` dengan T titik. Soal tunggal tepat satu per titik, jadi jumlahnya
 * T. Tapi kelompok besar terkena titik dan ikut SELURUHNYA: kalau semua kelompok sebesar
 * N/T atau lebih, semuanya terkena dan tak ada yang terpotong (TWK 5 kelompok × 8 soal
 * untuk T=30 tetap 40). Maka jumlah titik diturunkan (t <= T) sampai jumlah soalnya paling
 * sedikit T dan paling kecil: tak pernah kurang dari T, dan selisihnya hanya karena
 * kelompok utuh. Untuk soal tunggal t = T, yaitu aturan murni.
 */
export function kelompokTersebar(ukuran: number[], jumlahSoal: number): boolean[] {
  const total = ukuran.reduce((a, b) => a + b, 0);
  if (total <= jumlahSoal) return ukuran.map(() => true);
  let terbaik: boolean[] | null = null;
  let terkecil = Infinity;
  // t = T selalu cukup: tiap titik jatuh di satu kelompok, dan kelompok itu tak lebih kecil dari titiknya.
  for (let titik = 1; titik <= Math.ceil(jumlahSoal); titik++) {
    const ikut = terkenaTitik(ukuran, titik);
    const n = ukuran.reduce((a, u, i) => a + (ikut[i] ? u : 0), 0);
    if (n >= jumlahSoal && n < terkecil) {
      terkecil = n;
      terbaik = ikut;
    }
  }
  return terbaik ?? ukuran.map(() => true);
}

/**
 * Soal yang dipakai satu subtes (tanpa uraian). Contoh yang lebih banyak dari `jumlahSoal`
 * dipilih tersebar merata (`kelompokTersebar`). Yang lebih sedikit dipakai semuanya dan
 * hasilnya `parsial`. Tanpa `jumlahSoal`, semua soal ikut dan tidak parsial.
 */
export function pilihKelompok<K extends { soal: { tipe: TipeSoal }[] }>(
  contoh: K[] | undefined,
  jumlahSoal?: number,
): { kelompok: K[]; jumlah: number; parsial: boolean } {
  const ikut: K[] = [];
  for (const k of contoh ?? []) {
    const soal = k.soal.filter(soalIkut);
    if (soal.length > 0) ikut.push({ ...k, soal });
  }
  const total = ikut.reduce((n, k) => n + k.soal.length, 0);
  const batas = jumlahSoal !== undefined && jumlahSoal > 0 ? jumlahSoal : undefined;
  if (batas === undefined) return { kelompok: ikut, jumlah: total, parsial: false };

  const dipilih = kelompokTersebar(ikut.map((k) => k.soal.length), batas);
  const kelompok = ikut.filter((_, i) => dipilih[i]);
  return { kelompok, jumlah: kelompok.reduce((n, k) => n + k.soal.length, 0), parsial: total < batas };
}

/**
 * Batas waktu dalam menit: `waktuMenit` dikalikan porsi soal yang dipakai
 * (n / jumlahSoal, paling besar 1). Tanpa `jumlahSoal`, waktu penuh; tanpa
 * `waktuMenit`, tidak ada batas (stopwatch).
 *
 * Tahapan `waktuBersama` memakai fungsi yang sama dengan `waktuMenit` = waktu sesi
 * dan `jumlahSoal` = jumlah soal SELURUH subtes tahapan itu: TWK 30 soal dari sesi
 * 100 menit untuk 110 soal jatahnya 27,3 menit, bukan 100.
 */
export function batasMenit(p: { waktuMenit?: number; jumlahSoal?: number; n: number }): number | undefined {
  if (p.waktuMenit === undefined) return undefined;
  if (p.jumlahSoal === undefined || p.jumlahSoal <= 0) return p.waktuMenit;
  return p.waktuMenit * Math.min(1, p.n / p.jumlahSoal);
}

export interface Butir {
  /** Kunci unik: indeks subtes (di seluruh simulasi) + indeks soal di subtes. */
  id: string;
  /** Indeks bagian. */
  bagian: number;
  /** Indeks subtes di seluruh simulasi. */
  subtes: number;
  /** Nomor tampil; mulai dari 1 lagi di tiap subtes. */
  nomor: number;
  kelompok: KelompokSim;
  soal: SoalSim;
}

/** Semua butir per bagian, dalam urutan data: subtes demi subtes, kelompok demi kelompok. */
export function ratakan(bagian: BagianSim[]): Butir[][] {
  let subtes = 0;
  return bagian.map((b, bi) => {
    const hasil: Butir[] = [];
    for (const s of b.subtes) {
      let urut = 0;
      for (const k of s.kelompok) {
        for (const soal of k.soal) {
          hasil.push({ id: `${subtes}.${urut}`, bagian: bi, subtes, nomor: urut + 1, kelompok: k, soal });
          urut++;
        }
      }
      subtes++;
    }
    return hasil;
  });
}

/** Jumlah soal sebuah subtes yang ikut simulasi. */
export const jumlahSoalSubtes = (s: SubtesSim) => s.kelompok.reduce((n, k) => n + k.soal.length, 0);

/**
 * Tanda tangan rencana, disimpan bersama sesi. Bila data berubah (soal ditambah,
 * kunci diganti, batas waktu bergeser), tanda tangannya berubah dan sesi lama
 * dibuang, supaya jawaban lama tidak dinilai dengan kunci yang baru. Hanya identitas
 * soal yang dihitung (nomor, tipe, kunci, opsi), bukan teksnya: membetulkan salah
 * ketik tidak perlu menghapus sesi orang.
 */
export function tandaTangan(bagian: BagianSim[]): string {
  let h = 2166136261;
  const tambah = (t: string) => {
    for (let i = 0; i < t.length; i++) {
      h ^= t.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    h ^= 124;
    h = Math.imul(h, 16777619);
  };
  let n = 0;
  for (const b of bagian) {
    tambah(`${b.id}|${b.menit ?? ''}`);
    for (const s of b.subtes) {
      tambah(`${s.kode}|${s.parsial ? 1 : 0}`);
      for (const k of s.kelompok) {
        for (const q of k.soal) {
          n++;
          tambah(
            [
              q.nomor, q.tipe, q.kunci, q.tanpaKunci ? 1 : 0, (q.opsi ?? []).map((o) => o.label).join(''),
              (q.kategori ?? []).join('/'),
            ].join('|'),
          );
        }
      }
    }
  }
  return `${(h >>> 0).toString(36)}-${n}`;
}

// ─── Bentuk jawaban ──────────────────────────────────────────────────────

/** Bagian soal yang dipakai logika jawaban; `Soal` dan `SoalSim` sama-sama memenuhinya. */
export interface SoalDasar {
  tipe: TipeSoal;
  kunci: string;
  opsi?: { label: string }[];
  kategori?: [string, string];
  tanpaKunci?: true;
  kunciPolos?: string;
}

/**
 * Cara soal dijawab, dan cara jawabannya disimpan (selalu `string[]`):
 *   pilih     satu huruf opsi: ['B'];
 *   centang   semua huruf yang dicentang: ['A', 'D'];
 *   kategori  satu kategori per pernyataan, '' bila belum dipilih: ['Benar', '', 'Salah'];
 *   isian     teks yang diketik: ['27'].
 * PG kategori tanpa opsi atau tanpa dua kategori (data cacat, ditangkap Cek Data)
 * jatuh ke isian supaya tetap bisa dijawab.
 */
export type BentukJawaban = 'pilih' | 'centang' | 'kategori' | 'isian';

export function bentukJawaban(s: SoalDasar): BentukJawaban {
  switch (s.tipe) {
    case 'pg_kompleks':
      return 'centang';
    case 'pg_kategori':
      return s.opsi?.length && s.kategori ? 'kategori' : 'isian';
    case 'isian_singkat':
    case 'uraian':
      return 'isian';
    default:
      return 'pilih';
  }
}

/**
 * Huruf yang bisa dipilih pada soal pilihan. Soal yang opsinya ada di dalam gambar
 * tidak punya daftar `opsi`; huruf A sampai E ditampilkan polos, diperluas sampai
 * huruf kunci bila kuncinya lebih jauh.
 */
export function pilihanSoal(s: SoalDasar): string[] {
  if (s.opsi?.length) return s.opsi.map((o) => o.label);
  const akhir = Math.max(
    69,
    ...daftarKunci(s).map((k) => (/^[A-Za-z]$/.test(k) ? k.toUpperCase().charCodeAt(0) : 0)),
  );
  return Array.from({ length: akhir - 64 }, (_, i) => String.fromCharCode(65 + i));
}

/** Semua opsi berupa gambar saja (soal figural): ditampilkan sebagai ubin berhuruf. */
export function opsiFigural(opsi: { teks: Bagian[] }[] | undefined): boolean {
  return (
    !!opsi?.length &&
    opsi.every(
      (o) =>
        o.teks.some((b) => b.jenis === 'gambar') &&
        o.teks.every((b) => b.jenis === 'gambar' || (b.jenis === 'teks' && !b.isi.trim())),
    )
  );
}

const kecil = (t: string) => t.trim().toLowerCase();
const besar = (t: string) => t.trim().toUpperCase();

export type StatusJawab = 'kosong' | 'sebagian' | 'penuh';

/** `sebagian` hanya untuk PG kategori yang baru sebagian pernyataannya dipilih. */
export function statusJawab(s: SoalDasar, jawaban: string[] | undefined): StatusJawab {
  if (!jawaban?.length) return 'kosong';
  switch (bentukJawaban(s)) {
    case 'isian':
      return jawaban[0]?.trim() ? 'penuh' : 'kosong';
    case 'kategori': {
      const terisi = jawaban.filter(Boolean).length;
      return terisi === 0 ? 'kosong' : terisi >= (s.opsi?.length ?? 0) ? 'penuh' : 'sebagian';
    }
    default:
      return jawaban.some(Boolean) ? 'penuh' : 'kosong';
  }
}

/**
 * Jawaban baru setelah huruf `h` diketuk. Pilihan tunggal berganti ke huruf itu (diketuk
 * lagi, jawaban dilepas); centang menambah atau melepas huruf itu saja, dan hasilnya
 * tetap berurutan seperti daftar pilihan.
 */
export function ketukPilihan(s: SoalDasar, jawaban: string[] | undefined, h: string): string[] {
  const dipilih = new Set((jawaban ?? []).filter(Boolean).map(besar));
  const ada = dipilih.has(besar(h));
  if (bentukJawaban(s) !== 'centang') return ada ? [] : [h];
  return pilihanSoal(s).filter((x) => (besar(x) === besar(h) ? !ada : dipilih.has(besar(x))));
}

/**
 * Jawaban PG kategori setelah satu pernyataan diketuk: kategori itu dipilih untuk
 * barisnya (diketuk lagi, dilepas). Barisnya selalu sepanjang jumlah pernyataan,
 * '' untuk yang belum dipilih; bila tak ada satu pun, hasilnya daftar kosong.
 */
export function ketukKategori(jawaban: string[] | undefined, baris: number, jumlah: number, kategori: string): string[] {
  const hasil = Array.from({ length: jumlah }, (_, i) => jawaban?.[i] ?? '');
  hasil[baris] = hasil[baris] === kategori ? '' : kategori;
  return hasil.some(Boolean) ? hasil : [];
}

// ─── Menilai ─────────────────────────────────────────────────────────────

/**
 * Isian dibandingkan setelah dinormalkan: spasi di tepi dan di dalam dibuang, huruf
 * dikecilkan, dan koma dianggap titik. Jadi "6 3 0" sama dengan "630", "O" sama
 * dengan "o", dan "0,5" sama dengan "0.5".
 */
export const normalisasiIsian = (t: string) => t.trim().toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');

/** Kunci isian lebih panjang dari ini (tanpa spasi), atau sepanjang kalimat, tidak dinilai. */
const BATAS_KARAKTER_KUNCI = 24;
const BATAS_KATA_KUNCI = 4;

/**
 * Isian dinilai otomatis hanya bila kuncinya jawaban pendek: paling banyak 24
 * karakter di luar spasi dan kurang dari 4 kata (kata = potongan berspasi dengan
 * sedikitnya dua huruf berurutan). Angka, huruf, dan deret angka seperti
 * "6 3 0 9 0 2 5 0" lolos. Kunci yang berupa kalimat, misalnya rincian hitungan PCAM
 * ("Tahun 1: total $1.500, ditanggung sendiri 20% ($300) …"), tidak: mustahil
 * mengetiknya persis sama, jadi kuncinya ditampilkan untuk dibandingkan sendiri.
 * Salah mengira kalimat sebagai jawaban pendek akan menyalahkan jawaban yang benar;
 * sebaliknya hanya membuat soalnya tak berskor, jadi batasnya sengaja ketat.
 */
export function isianBisaDinilai(kunci: string): boolean {
  if (kunci.includes('⟦')) return false;
  const polos = normalisasiIsian(kunci);
  if (!polos || polos.length > BATAS_KARAKTER_KUNCI) return false;
  const kata = kunci.split(/\s+/).filter((t) => /\p{L}{2,}/u.test(t)).length;
  return kata < BATAS_KATA_KUNCI;
}

/**
 * Soal yang punya skor benar atau salah. Tidak dinilai: `skala` (soal TKP dan
 * sejenisnya, tak ada jawaban benar tunggal; skor per opsi hanya tertulis di
 * pembahasan), soal `tanpaKunci`, isian berkunci kalimat, dan soal yang kuncinya
 * tak bisa dibaca (kosong, atau jumlah nilai PG kategori tak sama dengan jumlah
 * pernyataan).
 */
export function dapatDinilai(s: SoalDasar): boolean {
  if (s.tanpaKunci || s.tipe === 'skala' || !s.kunci.trim()) return false;
  switch (bentukJawaban(s)) {
    case 'isian':
      return isianBisaDinilai(s.kunciPolos ?? s.kunci);
    case 'kategori':
      return daftarKunci(s).length === (s.opsi?.length ?? 0);
    default:
      return true;
  }
}

export interface RincianKategori {
  label: string;
  /** Kategori yang dipilih; '' bila tak dipilih. */
  jawab: string;
  kunci: string;
  benar: boolean;
}

export type StatusNilai = 'benar' | 'salah' | 'kosong' | 'tidak-dinilai';

export interface Penilaian {
  status: StatusNilai;
  /** Ada jawaban, termasuk soal yang tidak dinilai. */
  dijawab: boolean;
  /** Hanya PG kategori: hasil tiap pernyataan. */
  rincian?: RincianKategori[];
}

function rincianKategori(s: SoalDasar, jawaban: string[] | undefined): RincianKategori[] {
  const kunci = daftarKunci(s);
  return (s.opsi ?? []).map((o, i) => {
    const jawab = jawaban?.[i] ?? '';
    return { label: o.label, jawab, kunci: kunci[i] ?? '', benar: jawab !== '' && kecil(jawab) === kecil(kunci[i] ?? '') };
  });
}

/**
 * Menilai satu jawaban. Pilihan ganda dan benar/salah: benar bila sama dengan
 * kunci. PG kompleks: himpunan huruf sama persis. PG kategori: semua pernyataan
 * cocok. Isian: sama setelah dinormalkan. Tidak dijawab adalah `kosong`, terpisah
 * dari `salah`.
 */
export function nilai(s: SoalDasar, jawaban: string[] | undefined): Penilaian {
  const bentuk = bentukJawaban(s);
  const dijawab = statusJawab(s, jawaban) !== 'kosong';
  const rincian = bentuk === 'kategori' ? rincianKategori(s, jawaban) : undefined;

  if (!dapatDinilai(s)) return { status: 'tidak-dinilai', dijawab, rincian };
  if (!dijawab) return { status: 'kosong', dijawab, rincian };

  let cocok: boolean;
  switch (bentuk) {
    case 'centang': {
      const kunci = new Set(daftarKunci(s).map(besar));
      const dipilih = new Set((jawaban ?? []).filter(Boolean).map(besar));
      cocok = kunci.size === dipilih.size && [...kunci].every((k) => dipilih.has(k));
      break;
    }
    case 'kategori':
      cocok = !!rincian && rincian.length > 0 && rincian.every((r) => r.benar);
      break;
    case 'isian':
      cocok = normalisasiIsian(jawaban?.[0] ?? '') === normalisasiIsian(s.kunciPolos ?? s.kunci);
      break;
    default:
      cocok = besar(jawaban?.[0] ?? '') === besar(daftarKunci(s)[0] ?? '');
  }
  return { status: cocok ? 'benar' : 'salah', dijawab, rincian };
}

// ─── Meringkas hasil ─────────────────────────────────────────────────────

export interface Ringkasan {
  total: number;
  /** Soal yang punya skor (benar + salah + kosong). */
  dinilai: number;
  benar: number;
  salah: number;
  /** Soal dinilai yang tidak dijawab; dihitung terpisah dari salah. */
  kosong: number;
  tidakDinilai: number;
  /** Semua soal yang tidak dijawab, dinilai maupun tidak. */
  tidakDijawab: number;
  ragu: number;
  /** Soal dinilai berstatus draf: skornya memuat soal yang belum direview. */
  draf: number;
  /** Persen benar dari soal dinilai; kosong bila tak ada soal dinilai (jangan dibagi nol). */
  persen: number | null;
}

export function ringkas(daftar: { penilaian: Penilaian; ragu: boolean; draf: boolean }[]): Ringkasan {
  const r: Ringkasan = {
    total: daftar.length, dinilai: 0, benar: 0, salah: 0, kosong: 0, tidakDinilai: 0,
    tidakDijawab: 0, ragu: 0, draf: 0, persen: null,
  };
  for (const { penilaian, ragu, draf } of daftar) {
    if (ragu) r.ragu++;
    if (!penilaian.dijawab) r.tidakDijawab++;
    if (penilaian.status === 'tidak-dinilai') {
      r.tidakDinilai++;
      continue;
    }
    r.dinilai++;
    if (draf) r.draf++;
    if (penilaian.status === 'benar') r.benar++;
    else if (penilaian.status === 'salah') r.salah++;
    else r.kosong++;
  }
  r.persen = r.dinilai > 0 ? Math.round((r.benar / r.dinilai) * 100) : null;
  return r;
}

// ─── Waktu dan teks ──────────────────────────────────────────────────────

/** Detik utuh sebagai "24:18", atau "1:40:00" bila sejam atau lebih. */
export function formatJam(detik: number): string {
  const d = Math.max(0, Math.floor(detik));
  const j = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const dua = (n: number) => String(n).padStart(2, '0');
  return j > 0 ? `${j}:${dua(m)}:${dua(d % 60)}` : `${dua(m)}:${dua(d % 60)}`;
}

/**
 * Satu-satunya format lama waktu di layar simulasi (layar awal, daftar bagian, hasil): di
 * bawah semenit dalam detik ("18 detik", bukan "0,3 mnt"), selebihnya menit dan detik
 * ("7 mnt 12 dtk", "30 mnt"). Detik dibulatkan. Menit tidak diubah jadi jam, supaya angka
 * seperti "100 mnt" sama dengan yang tertulis di halaman angkatan. Jam di timer lain
 * soal: itu `formatJam` ("24:18").
 */
export function formatDurasi(ms: number): string {
  const total = Math.round(Math.max(0, ms) / 1000);
  if (total < 60) return `${total} detik`;
  const detik = total % 60;
  return detik ? `${Math.floor(total / 60)} mnt ${detik} dtk` : `${total / 60} mnt`;
}

/** `formatDurasi` untuk batas waktu yang ditulis dalam menit (boleh pecahan). */
export const formatMenit = (menit: number) => formatDurasi(menit * 60_000);

export const LABEL_TIPE: Record<TipeSoal, string> = {
  pg: 'Pilihan ganda',
  pg_kompleks: 'PG kompleks',
  pg_kategori: 'PG kategori',
  isian_singkat: 'Isian singkat',
  benar_salah: 'Benar / Salah',
  skala: 'Berskala',
  uraian: 'Uraian / tugas bebas',
};
