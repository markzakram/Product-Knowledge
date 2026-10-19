/**
 * Penelusuran data.
 *
 * Semuanya sinkron dan tanpa cache: datanya ikut ter-bundle saat build, jadi
 * tidak ada yang perlu ditarik, ditunggu, atau di-refresh saat aplikasi jalan.
 */
import { PLATFORM, SEMUA_PLATFORM } from '../../data';
import { daftarKunci, type Angkatan, type Platform, type Subtes, type Tahapan, type Tes } from './skema';
import { subtesBisaSimulasi } from './simulasi';

/**
 * PLATFORM = yang tampil di halaman pembaca (tanpa `tampil: false`); semua
 * penelusuran di bawah memakainya, jadi platform yang disembunyikan tidak
 * ditemukan dan rutenya 404. SEMUA_PLATFORM = lengkap, hanya untuk pemeriksa isi.
 */
export { PLATFORM, SEMUA_PLATFORM };

export interface JalurSubtes {
  platform: Platform;
  tes: Tes;
  angkatan: Angkatan;
  tahapan: Tahapan;
  subtes: Subtes;
}

export interface JalurAngkatan {
  platform: Platform;
  tes: Tes;
  angkatan: Angkatan;
}

const sama = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

export function cariPlatform(slug: string): Platform | undefined {
  return PLATFORM.find((p) => sama(p.slug, slug));
}

export function cariAngkatan(
  slugPlatform: string,
  kodeTes: string,
  kodeAngkatan: string,
): JalurAngkatan | undefined {
  const platform = cariPlatform(slugPlatform);
  const tes = platform?.tes.find((t) => sama(t.kode, kodeTes));
  const angkatan = tes?.angkatan.find((a) => sama(a.kode, kodeAngkatan));
  if (!platform || !tes || !angkatan) return undefined;
  return { platform, tes, angkatan };
}

export function cariSubtes(
  slugPlatform: string,
  kodeTes: string,
  kodeAngkatan: string,
  kodeTahapan: string,
  kodeSubtes: string,
): JalurSubtes | undefined {
  const jalur = cariAngkatan(slugPlatform, kodeTes, kodeAngkatan);
  const tahapan = jalur?.angkatan.tahapan.find((t) => sama(t.kode, kodeTahapan));
  const subtes = tahapan?.subtes.find((s) => sama(s.kode, kodeSubtes));
  if (!jalur || !tahapan || !subtes) return undefined;
  return { ...jalur, tahapan, subtes };
}

/**
 * Nomor sebuah tahapan menurut alur resmi seleksinya: `nomorAwal` angkatan
 * (bawaannya 1) ditambah POSISI tahapan di `tahapan` angkatan itu.
 *
 * Nomor sengaja tidak ditanam di dalam `nama`, dan posisi di array belum tentu
 * sama dengan nomor tahap: angkatan hanya menulis tahapan yang punya isi. Seleksi
 * lanjutan IPDN dan PKN STAN dimulai dari tahap 3 (tahap 1 seleksi administrasi
 * dan tahap 2 SKD ada di tempat lain), jadi angkatannya `nomorAwal: 3`. Semua
 * tempat yang menomori tahapan harus lewat sini, bukan memakai indeks array.
 */
export const nomorTahapan = (a: Angkatan, t: Tahapan) =>
  (a.nomorAwal ?? 1) + a.tahapan.indexOf(t);

/** Label tahapan, mis. "Tahap 3: Tes Kemampuan Bahasa Inggris (TKBI)". */
export const labelTahapan = (a: Angkatan, t: Tahapan) =>
  `Tahap ${nomorTahapan(a, t)}: ${t.nama}`;

// ─── Tautan ──────────────────────────────────────────────────────────────

export const tautanPlatform = (p: Platform) => `/${p.slug}`;

export const tautanAngkatan = (j: JalurAngkatan) =>
  `/${j.platform.slug}/${j.tes.kode}/${j.angkatan.kode}`;

export const tautanSubtes = (j: JalurSubtes) =>
  `/${j.platform.slug}/${j.tes.kode}/${j.angkatan.kode}/${j.tahapan.kode}/${j.subtes.kode}`;

/** Id jangkar kartu tahapan di halaman angkatan. */
export const idTahapan = (t: Pick<Tahapan, 'kode'>) => `tahap-${t.kode}`;

/**
 * Id jangkar satu bagian Informasi seleksi di halaman angkatan, mis.
 * "info-3-persyaratan-umum". `urutan` (mulai dari 1, menurut posisi di `info`)
 * menjamin id tak pernah kembar walau dua judul sama; slug judulnya hanya supaya
 * tautan terbaca. Judul diubah, slug-nya ikut berubah, tapi tautan lama tetap
 * mendarat di halaman yang sama.
 */
export function idInfo(urutan: number, judul: string): string {
  const slug = judul
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .slice(0, 48)
    .replace(/-+$/, '');
  return slug ? `info-${urutan}-${slug}` : `info-${urutan}`;
}

export const tautanTahapan = (j: JalurAngkatan, t: Tahapan) =>
  `${tautanAngkatan(j)}#${idTahapan(t)}`;

/**
 * Judul sebuah angkatan, mis. "UTBK-SNBT Tahun 2027". Dipakai sebagai h1
 * halaman angkatan, remah, dan tombol "Buka …" di halaman platform, supaya yang
 * diklik dan yang dibuka bernama sama.
 *
 * Kata pertama nama angkatan tidak diulang bila sudah ada di nama tes (termasuk
 * di dalam kurung), karena nama angkatan sering memuat nama tesnya sendiri:
 * "PCAM OJK" + "PCAM 10" jadi "PCAM OJK 10", "Pertadate Pertamina" + "Pertadate
 * 2026" jadi "Pertadate Pertamina 2026", "Tes Kemampuan Akademik (TKA)" + "TKA
 * SMA 2026" jadi "Tes Kemampuan Akademik (TKA) SMA 2026". Nama angkatan yang
 * hanya satu kata dibiarkan utuh.
 */
export function judulAngkatan(tes: Tes, angkatan: Angkatan): string {
  const kata = (s: string) => s.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
  const m = angkatan.nama.trim().match(/^(\S+)\s+(.+)$/);
  if (m) {
    const kataTes = new Set(
      tes.nama.split(/[^\p{L}\p{N}]+/u).filter(Boolean).map((k) => k.toLowerCase()),
    );
    if (kataTes.has(kata(m[1]))) return `${tes.nama} ${m[2]}`;
  }
  return `${tes.nama} ${angkatan.nama}`;
}

/**
 * Subtes sebelum dan sesudah, dalam urutan tahapan lalu subtes.
 *
 * Orang meninjau subtes berurutan — TWK lalu TIU lalu TKP. Tanpa ini, tiap
 * perpindahan berarti mundur dua kali lewat remah. Melintasi batas tahapan
 * dengan sengaja: setelah subtes terakhir Tahap 1, yang berikutnya adalah
 * subtes pertama Tahap 2, bukan buntu.
 */
export function tetanggaSubtes(j: JalurSubtes) {
  const runtun: JalurSubtes[] = [];
  for (const tahapan of j.angkatan.tahapan) {
    for (const subtes of tahapan.subtes) {
      runtun.push({ platform: j.platform, tes: j.tes, angkatan: j.angkatan, tahapan, subtes });
    }
  }
  const i = runtun.findIndex((x) => x.subtes === j.subtes && x.tahapan === j.tahapan);
  return {
    sebelum: i > 0 ? runtun[i - 1] : null,
    sesudah: i >= 0 && i < runtun.length - 1 ? runtun[i + 1] : null,
    ke: i + 1,
    dari: runtun.length,
  };
}

// ─── Simulasi ────────────────────────────────────────────────────────────

export { subtesBisaSimulasi };

/** Halaman simulasi satu subtes. Hanya ada untuk subtes yang `subtesBisaSimulasi`. */
export const tautanSimulasiSubtes = (j: JalurSubtes) => `${tautanSubtes(j)}/simulasi`;

/** Halaman simulasi seluruh angkatan. Hanya ada bila sedikitnya satu subtesnya bisa disimulasikan. */
export const tautanSimulasiAngkatan = (j: JalurAngkatan) => `${tautanAngkatan(j)}/simulasi`;

export const angkatanBisaSimulasi = (a: Angkatan) =>
  a.tahapan.some((t) => t.subtes.some(subtesBisaSimulasi));

/** Subtes sesudah yang ini (urutan tahapan lalu subtes) yang punya halaman simulasi. */
export function subtesSimulasiBerikutnya(j: JalurSubtes): JalurSubtes | null {
  for (let x = tetanggaSubtes(j).sesudah; x; x = tetanggaSubtes(x).sesudah) {
    if (subtesBisaSimulasi(x.subtes)) return x;
  }
  return null;
}

// ─── Penjelajahan menyeluruh ─────────────────────────────────────────────

/**
 * Semua angkatan di semua platform yang tampil, beserta jalurnya. Pemeriksa isi
 * memberi `SEMUA_PLATFORM` supaya platform yang disembunyikan ikut diperiksa.
 */
export function semuaAngkatan(daftar: Platform[] = PLATFORM): JalurAngkatan[] {
  const hasil: JalurAngkatan[] = [];
  for (const platform of daftar) {
    for (const tes of platform.tes) {
      for (const angkatan of tes.angkatan) hasil.push({ platform, tes, angkatan });
    }
  }
  return hasil;
}

/** Semua subtes di semua platform yang tampil, beserta jalurnya. `daftar` seperti di `semuaAngkatan`. */
export function semuaSubtes(daftar: Platform[] = PLATFORM): JalurSubtes[] {
  const hasil: JalurSubtes[] = [];
  for (const j of semuaAngkatan(daftar)) {
    for (const tahapan of j.angkatan.tahapan) {
      for (const subtes of tahapan.subtes) hasil.push({ ...j, tahapan, subtes });
    }
  }
  return hasil;
}

/** Jumlah contoh soal di satu subtes, melintasi semua kelompok stimulus. */
export const jumlahContoh = (s: Subtes) =>
  (s.contoh ?? []).reduce((n, k) => n + k.soal.length, 0);

// ─── Ringkasan untuk tampilan ────────────────────────────────────────────

/**
 * Durasi satu tahapan dalam menit. Tahapan `waktuBersama` (SKD: tiga subtes
 * dalam satu sesi 100 menit) dihitung SEKALI, yaitu waktu sesinya; selainnya
 * dijumlahkan per subtes.
 *
 * Inilah SATU-SATUNYA tempat waktu subtes dijumlahkan. Ubin Durasi, ringkasan
 * tahapan, dan total angkatan semuanya lewat sini (`angkaTahapan`,
 * `angkaAngkatan`), supaya SKD tak terbaca 300 menit di salah satunya.
 *
 * `tanpaMenit` = berapa subtes yang waktunya belum diketahui. Di tahapan satu
 * sesi, waktunya sudah diketahui selama ada satu subtes yang menyebutnya; bila
 * angkanya berbeda, yang terbesar dipakai karena sesi harus memuat semuanya.
 */
export function durasiTahapan(
  t: Pick<Tahapan, 'subtes' | 'waktuBersama'>,
): { menit: number; tanpaMenit: number } {
  const ada = t.subtes.flatMap((s) => (s.waktuMenit === undefined ? [] : [s.waktuMenit]));
  if (t.waktuBersama) {
    return ada.length
      ? { menit: Math.max(...ada), tanpaMenit: 0 }
      : { menit: 0, tanpaMenit: t.subtes.length };
  }
  return {
    // Menit boleh pecahan (7.5). Dibulatkan supaya jumlah pecahan tak berekor 0.30000000000000004.
    menit: Math.round(ada.reduce((n, m) => n + m, 0) * 100) / 100,
    tanpaMenit: t.subtes.length - ada.length,
  };
}

/**
 * Angka rangkuman satu tahapan atau satu angkatan.
 *
 * `soal` dan `menit` hanya menjumlahkan yang angkanya ADA. Yang kosong dihitung
 * terpisah (`tanpaSoal`, `tanpaMenit`) dan tidak dianggap 0: "belum diketahui"
 * dan "nol" itu beda, jadi jumlahnya baru boleh dibaca sebagai total utuh kalau
 * kedua hitungan itu 0.
 */
export interface AngkaSubtes {
  subtes: number;
  soal: number;
  menit: number;
  contoh: number;
  tanpaSoal: number;
  tanpaMenit: number;
  /** Seluruh subtes dikerjakan dalam satu sesi, jadi `menit` adalah waktu sesi itu. Hanya untuk satu tahapan. */
  satuSesi?: true;
}

export function angkaTahapan(t: Tahapan): AngkaSubtes {
  const a: AngkaSubtes = {
    subtes: t.subtes.length, soal: 0, menit: 0, contoh: 0, tanpaSoal: 0, tanpaMenit: 0,
  };
  for (const s of t.subtes) {
    if (s.jumlahSoal === undefined) a.tanpaSoal++;
    else a.soal += s.jumlahSoal;
    a.contoh += jumlahContoh(s);
  }
  const durasi = durasiTahapan(t);
  a.menit = durasi.menit;
  a.tanpaMenit = durasi.tanpaMenit;
  if (t.waktuBersama) a.satuSesi = true;
  return a;
}

/** Angka satu angkatan: jumlah angka semua tahapannya. */
export function angkaAngkatan(angkatan: Angkatan): AngkaSubtes {
  const total: AngkaSubtes = {
    subtes: 0, soal: 0, menit: 0, contoh: 0, tanpaSoal: 0, tanpaMenit: 0,
  };
  for (const t of angkatan.tahapan) {
    const a = angkaTahapan(t);
    total.subtes += a.subtes;
    total.soal += a.soal;
    total.menit += a.menit;
    total.contoh += a.contoh;
    total.tanpaSoal += a.tanpaSoal;
    total.tanpaMenit += a.tanpaMenit;
  }
  total.menit = Math.round(total.menit * 100) / 100;
  return total;
}

/** Angka berkoma desimal gaya Indonesia ("42,5"), paling banyak dua desimal. */
export const angkaId = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',');

/**
 * "30 soal · 30 mnt". Bagian yang tak ada dilewati; kosong bila keduanya tak ada.
 * `satuSesi`: subtes ini bagian dari tahapan `waktuBersama`, jadi waktunya milik
 * sesi, bukan miliknya sendiri, dan hanya jumlah soalnya yang ditampilkan.
 */
export function metaSubtes(
  s: Pick<Subtes, 'jumlahSoal' | 'waktuMenit'>,
  satuSesi = false,
): string {
  return [
    s.jumlahSoal === undefined ? '' : `${s.jumlahSoal} soal`,
    satuSesi || s.waktuMenit === undefined ? '' : `${angkaId(s.waktuMenit)} mnt`,
  ]
    .filter(Boolean)
    .join(' · ');
}

/**
 * ["90 soal", "105 menit"]; bagian yang tak satu pun subtesnya punya angka
 * dilewati. Tanda + berarti sebagian subtes belum punya angka, jadi jumlahnya
 * paling sedikit segitu. Tahapan satu sesi menulis "100 menit, satu sesi".
 */
function bagianSoalMenit(a: AngkaSubtes): string[] {
  const hasil: string[] = [];
  if (a.subtes > a.tanpaSoal) hasil.push(`${a.soal}${a.tanpaSoal ? '+' : ''} soal`);
  if (a.subtes > a.tanpaMenit) {
    hasil.push(
      `${angkaId(a.menit)}${a.tanpaMenit ? '+' : ''} menit${a.satuSesi ? ', satu sesi' : ''}`,
    );
  }
  return hasil;
}

/** Ringkasan satu tahapan: "4 subtes · 90 soal · 90 menit". */
export const ringkasAngka = (a: AngkaSubtes) =>
  [`${a.subtes} subtes`, ...bagianSoalMenit(a)].join(' · ');

/** Total satu angkatan: "160 soal · 195 menit · 141 contoh soal". Kosong bila tak ada subtes. */
export function totalAngka(a: AngkaSubtes): string {
  if (a.subtes === 0) return '';
  return [...bagianSoalMenit(a), a.contoh ? `${a.contoh} contoh soal` : 'belum ada contoh soal'].join(
    ' · ',
  );
}

/**
 * Angka per platform, dipakai kepala halaman platform dan kartu platform di
 * beranda supaya keduanya selalu sama. Dihitung per OBJEK subtes (seperti
 * `kelengkapan`): subtes yang dirujuk beberapa angkatan adalah satu objek, dan
 * kalau dihitung per jalur ia terhitung berkali-kali. Saat ini tidak ada subtes
 * yang dirujuk bersama (SKD sekolah kedinasan sudah menjadi tes sendiri), tapi
 * mekanismenya dibiarkan supaya tetap benar bila nanti ada lagi.
 */
export function angkaPlatform(p: Platform) {
  const unik = new Set<Subtes>();
  for (const t of p.tes) {
    for (const a of t.angkatan) {
      for (const h of a.tahapan) {
        for (const s of h.subtes) unik.add(s);
      }
    }
  }
  return {
    tes: p.tes.length,
    subtes: unik.size,
    contoh: [...unik].reduce((n, s) => n + jumlahContoh(s), 0),
  };
}

/**
 * Angkatan yang dibuka lebih dulu di halaman platform: tahun terbaru yang
 * bukan `coming_soon` dan sudah punya tahapan. Bila tak ada yang memenuhi,
 * yang terbaru dan punya tahapan; bila itu pun tak ada, yang terbaru.
 */
export function angkatanAwal(tes: Tes): Angkatan | undefined {
  const urut = [...tes.angkatan].sort((a, b) => b.tahun - a.tahun);
  return (
    urut.find((a) => a.status !== 'coming_soon' && a.tahapan.length > 0) ??
    urut.find((a) => a.tahapan.length > 0) ??
    urut[0]
  );
}

// ─── Kode chip subtes ────────────────────────────────────────────────────

/** Kata yang tak ikut jadi inisial: "Tes" di depan nama dan kata penghubung. */
const KATA_BUANG = new Set([
  'tes', 'dan', 'dalam', 'di', 'dari', 'untuk', 'yang', 'serta', 'atau', 'dengan', 'and',
]);

/**
 * Singkatan SATU subtes untuk chip, diturunkan dari namanya (`kode` di data
 * itu slug URL huruf kecil, bukan untuk dibaca). Aturannya berurutan:
 *   (a) singkatan 2-6 huruf kapital dalam kurung di akhir nama: "… (PU)" jadi PU;
 *   (b) dua kata bermakna atau lebih: inisialnya, "Hitung Cepat" jadi HC;
 *   (c) satu kata bermakna: tiga huruf awalnya, "Verbal" jadi VER.
 * Kata bermakna = kata selain `KATA_BUANG`. Keterangan dalam kurung yang bukan
 * singkatan ("(Tes Koran)") bukan bagian nama, jadi tak ikut dihitung. Bentrok
 * antar-subtes dan chip yang kepanjangan diurus `kodeChipTahapan`.
 */
export function kodeChip(nama: string): string {
  const bersih = nama.trim();
  const singkatan = bersih.match(/\(([A-Z]{2,6})\)\s*$/);
  if (singkatan) return singkatan[1];

  const kata = bersih
    .replace(/\([^)]*\)/g, ' ')
    .split(/\s+/)
    .map((k) => k.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter((k) => k && !KATA_BUANG.has(k.toLowerCase()));
  if (kata.length >= 2) return kata.map((k) => k[0]).join('').toUpperCase();
  if (kata.length === 1) return kata[0].slice(0, 3).toUpperCase();
  return '';
}

/**
 * Kode chip semua subtes dalam SATU tahapan, dengan aturan (d): bila ada dua
 * chip yang sama, atau ada chip lebih dari 4 huruf, SELURUH tahapan itu memakai
 * nomor urut 1, 2, 3. Sengaja semua, bukan hanya yang bentrok: campuran huruf
 * dan nomor dalam satu daftar lebih membingungkan daripada nomor saja.
 */
export function kodeChipTahapan(nama: string[]): string[] {
  const huruf = nama.map(kodeChip);
  const bentrok = new Set(huruf).size < huruf.length;
  const tidakMuat = huruf.some((k) => !k || k.length > 4);
  return bentrok || tidakMuat ? nama.map((_, i) => String(i + 1)) : huruf;
}

// ─── Rekap produksi ──────────────────────────────────────────────────────

/**
 * Kekurangan soal PER SUBTES, diurutkan dari yang paling besar.
 *
 * Dijumlahkan per subtes, bukan per baris mapping, karena angka `tersedia` di
 * sumbernya sering gabungan tryout dan latsol sekaligus. Menghitung per baris
 * membuat TPK PCPM 41 terbaca kurang 175, padahal sebenarnya 225.
 */
export function gapProduksi() {
  return semuaSubtes()
    .map((j) => {
      const mapping = j.subtes.mapping ?? [];
      // Subtes yang `tersedia`-nya belum diisi sama sekali dilewati:
      // kekurangannya belum bisa dihitung, dan menampilkan 0 akan menyesatkan.
      if (!mapping.some((m) => m.tersedia !== undefined)) return null;
      const dibutuhkan = mapping.reduce((n, m) => n + m.dibutuhkan, 0);
      const tersedia = mapping.reduce((n, m) => n + (m.tersedia ?? 0), 0);
      return {
        ...j,
        dibutuhkan,
        tersedia,
        kurang: dibutuhkan - tersedia,
        jenis: mapping.map((m) => m.tipe).join(' + '),
        pic: mapping.map((m) => m.pic).find(Boolean) ?? '',
        catatan: mapping.map((m) => m.catatan).find(Boolean) ?? '',
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .filter((x) => x.kurang > 0)
    .sort((a, b) => b.kurang - a.kurang);
}

/** Berapa baris mapping yang kolom tersedia-nya masih kosong. */
export const mappingBelumDiisi = () =>
  semuaSubtes().reduce(
    (n, j) => n + (j.subtes.mapping ?? []).filter((m) => m.tersedia === undefined).length,
    0,
  );

// ─── Pemeriksa isi ───────────────────────────────────────────────────────

export interface Temuan {
  jenis: string;
  lokasi: string;
  ke: string;
  pesan: string;
}

/**
 * Memeriksa hal-hal yang TIDAK bisa ditangkap compiler.
 *
 * Relasi putus dan salah ketik nama field sudah mustahil sejak datanya
 * bersarang dan bertipe, jadi yang tersisa hanya soal isi: kunci yang tidak
 * menunjuk opsi mana pun, pembahasan kosong, nomor soal ganda.
 *
 * Memeriksa SEMUA platform, termasuk yang disembunyikan (`tampil: false`): datanya
 * tetap dikerjakan, jadi harus tetap benar sebelum platformnya ditampilkan.
 */
export function periksaIsi(): Temuan[] {
  const temuan: Temuan[] = [];

  for (const j of semuaSubtes(SEMUA_PLATFORM)) {
    const ke = tautanSubtes(j);
    const lokasi = `${j.platform.nama} · ${j.angkatan.nama} · ${labelTahapan(j.angkatan, j.tahapan)} · ${j.subtes.nama}`;
    const nomor = new Map<number, number>();

    for (const kelompok of j.subtes.contoh ?? []) {
      for (const soal of kelompok.soal) {
        nomor.set(soal.nomor, (nomor.get(soal.nomor) ?? 0) + 1);

        // Butir `tanpaKunci` (tes kepribadian, uraian, tugas gambar) memang tidak
        // punya kunci, jadi kunci tidak diperiksa.
        if (!soal.tanpaKunci && soal.opsi?.length && soal.tipe === 'pg_kategori') {
          // PGK Kategori: satu nilai kunci per pernyataan, dan tiap nilai harus
          // salah satu dari dua kategori soal.
          const kategori = (soal.kategori ?? []).map((k) => k.trim().toLowerCase());
          const kunci = daftarKunci(soal);
          if (kategori.length !== 2 || kategori.some((k) => !k)) {
            temuan.push({
              jenis: 'Kategori tidak lengkap', lokasi, ke,
              pesan: `Soal ${soal.nomor}: PG kategori harus punya tepat dua nama kategori.`,
            });
          } else if (
            kunci.length !== soal.opsi.length ||
            kunci.some((k) => !kategori.includes(k.toLowerCase()))
          ) {
            temuan.push({
              jenis: 'Kunci tidak cocok', lokasi, ke,
              pesan: `Soal ${soal.nomor}: kunci "${soal.kunci}" harus ${soal.opsi.length} nilai, masing-masing salah satu dari ${soal.kategori!.join(' / ')}.`,
            });
          }
        } else if (!soal.tanpaKunci && soal.opsi?.length) {
          const label = soal.opsi.map((o) => o.label);
          // PG biasa: satu huruf. PG kompleks: beberapa huruf dipisah koma.
          const kunci = daftarKunci(soal).map((k) => k.toUpperCase());
          if (!kunci.length || kunci.some((k) => !label.includes(k))) {
            temuan.push({
              jenis: 'Kunci tidak cocok', lokasi, ke,
              pesan: `Soal ${soal.nomor}: kunci "${soal.kunci}" tidak ada di opsi (${label.join(', ')}).`,
            });
          }
        } else if (!soal.tanpaKunci && !soal.kunci.trim()) {
          temuan.push({
            jenis: 'Kunci kosong', lokasi, ke,
            pesan: `Soal ${soal.nomor}: isian singkat tanpa jawaban.`,
          });
        }

        if (!soal.pembahasan.trim()) {
          temuan.push({
            jenis: 'Pembahasan kosong', lokasi, ke,
            pesan: `Soal ${soal.nomor}: belum ada pembahasan.`,
          });
        }
      }
    }

    for (const [n, kali] of nomor) {
      if (kali > 1) {
        temuan.push({
          jenis: 'Nomor ganda', lokasi, ke,
          pesan: `Nomor ${n} dipakai ${kali} soal di subtes yang sama.`,
        });
      }
    }

    const mapping = j.subtes.mapping ?? [];
    for (const m of mapping) {
      if (m.paket && m.soalPerPaket && m.paket * m.soalPerPaket !== m.dibutuhkan) {
        temuan.push({
          jenis: 'Mapping janggal', lokasi, ke,
          pesan: `${m.tipe}: ${m.paket} paket x ${m.soalPerPaket} soal = ${m.paket * m.soalPerPaket}, tapi dibutuhkan ditulis ${m.dibutuhkan}.`,
        });
      }
    }
  }

  return temuan;
}

// ─── Kelengkapan isi ─────────────────────────────────────────────────────

/** Subtes yang memang punya butir soal, jadi layak punya contoh soal. */
export const butuhContoh = (s: Subtes) => s.bankSoal !== false;

export interface CelahSubtes {
  jalur: JalurSubtes;
  /** Berapa tes yang memakai subtes ini (lebih dari satu = dipakai bersama). */
  dipakaiDi: number;
}

export interface KelengkapanPlatform {
  platform: Platform;
  butuh: number;
  ada: number;
  tanpaContoh: CelahSubtes[];
  tanpaMateri: CelahSubtes[];
  tahapanTidakPasti: { jalur: JalurAngkatan; tahapan: Tahapan }[];
  /** Subtes yang sengaja tidak dihitung karena memang tak punya butir soal. */
  tanpaBankSoal: CelahSubtes[];
}

/**
 * Daftar kerja isi yang belum lengkap, per platform.
 *
 * Dihitung per OBJEK subtes, bukan per jalur. Subtes yang dirujuk beberapa
 * angkatan adalah satu objek; kalau dihitung per jalur, satu kekurangan muncul
 * berkali-kali, padahal mengisinya sekali sudah menyelesaikan semuanya. Daftar
 * kerja yang menggandakan pekerjaan menyesatkan tim. Saat ini tidak ada subtes
 * yang dirujuk bersama, tapi mekanismenya dibiarkan untuk kasus berikutnya.
 */
export function kelengkapan() {
  const hasil: KelengkapanPlatform[] = [];

  for (const platform of PLATFORM) {
    const perObjek = new Map<Subtes, CelahSubtes>();
    for (const j of semuaSubtes()) {
      if (j.platform !== platform) continue;
      const ada = perObjek.get(j.subtes);
      if (ada) ada.dipakaiDi++;
      else perObjek.set(j.subtes, { jalur: j, dipakaiDi: 1 });
    }
    const semua = [...perObjek.values()];
    const layak = semua.filter((c) => butuhContoh(c.jalur.subtes));

    const tahapanTidakPasti: KelengkapanPlatform['tahapanTidakPasti'] = [];
    const sudahTahap = new Set<Tahapan>();
    for (const j of semuaAngkatan()) {
      if (j.platform !== platform) continue;
      for (const t of j.angkatan.tahapan) {
        if (t.status === 'terkonfirmasi' || sudahTahap.has(t)) continue;
        sudahTahap.add(t);
        tahapanTidakPasti.push({ jalur: j, tahapan: t });
      }
    }

    hasil.push({
      platform,
      butuh: layak.length,
      ada: layak.filter((c) => jumlahContoh(c.jalur.subtes) > 0).length,
      tanpaContoh: layak.filter((c) => jumlahContoh(c.jalur.subtes) === 0),
      tanpaMateri: layak.filter((c) => (c.jalur.subtes.materi ?? []).length === 0),
      tahapanTidakPasti,
      tanpaBankSoal: semua.filter((c) => !butuhContoh(c.jalur.subtes)),
    });
  }

  const terisi = hasil.filter((h) => h.butuh + h.tanpaBankSoal.length > 0);
  return {
    terisi: terisi.sort((a, b) => b.tanpaContoh.length - a.tanpaContoh.length),
    kosong: hasil.filter((h) => h.butuh + h.tanpaBankSoal.length === 0).map((h) => h.platform),
    total: {
      butuh: terisi.reduce((n, h) => n + h.butuh, 0),
      ada: terisi.reduce((n, h) => n + h.ada, 0),
      tanpaContoh: terisi.reduce((n, h) => n + h.tanpaContoh.length, 0),
      tanpaMateri: terisi.reduce((n, h) => n + h.tanpaMateri.length, 0),
      tahapanTidakPasti: terisi.reduce((n, h) => n + h.tahapanTidakPasti.length, 0),
      tanpaBankSoal: terisi.reduce((n, h) => n + h.tanpaBankSoal.length, 0),
    },
  };
}
