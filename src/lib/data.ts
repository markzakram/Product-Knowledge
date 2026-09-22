/**
 * Penelusuran data.
 *
 * Semuanya sinkron dan tanpa cache: datanya ikut ter-bundle saat build, jadi
 * tidak ada yang perlu ditarik, ditunggu, atau di-refresh saat aplikasi jalan.
 */
import { PLATFORM } from '../../data';
import type { Angkatan, Platform, Subtes, Tahapan, Tes } from './skema';

export { PLATFORM };

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
 * Label tahapan, bernomor menurut POSISINYA di angkatan.
 *
 * Nomor sengaja tidak ditanam di dalam `nama`, karena satu tahapan bisa dipakai
 * di posisi berbeda: SKD adalah tahap ke-2 di IPDN dan juga di PKN STAN, tapi
 * objeknya sama persis. Menanam "Tahap 1" di namanya membuat salah satu salah.
 */
export const labelTahapan = (a: Angkatan, t: Tahapan) =>
  `Tahap ${a.tahapan.indexOf(t) + 1}: ${t.nama}`;

// ─── Tautan ──────────────────────────────────────────────────────────────

export const tautanPlatform = (p: Platform) => `/${p.slug}`;

export const tautanAngkatan = (j: JalurAngkatan) =>
  `/${j.platform.slug}/${j.tes.kode}/${j.angkatan.kode}`;

export const tautanSubtes = (j: JalurSubtes) =>
  `/${j.platform.slug}/${j.tes.kode}/${j.angkatan.kode}/${j.tahapan.kode}/${j.subtes.kode}`;

// ─── Penjelajahan menyeluruh ─────────────────────────────────────────────

/** Semua angkatan di semua platform, beserta jalurnya. */
export function semuaAngkatan(): JalurAngkatan[] {
  const hasil: JalurAngkatan[] = [];
  for (const platform of PLATFORM) {
    for (const tes of platform.tes) {
      for (const angkatan of tes.angkatan) hasil.push({ platform, tes, angkatan });
    }
  }
  return hasil;
}

/** Semua subtes di semua platform, beserta jalurnya. */
export function semuaSubtes(): JalurSubtes[] {
  const hasil: JalurSubtes[] = [];
  for (const j of semuaAngkatan()) {
    for (const tahapan of j.angkatan.tahapan) {
      for (const subtes of tahapan.subtes) hasil.push({ ...j, tahapan, subtes });
    }
  }
  return hasil;
}

/** Jumlah contoh soal di satu subtes, melintasi semua kelompok stimulus. */
export const jumlahContoh = (s: Subtes) =>
  (s.contoh ?? []).reduce((n, k) => n + k.soal.length, 0);

export function ringkasPlatform(p: Platform) {
  const angkatan = p.tes.flatMap((t) => t.angkatan);
  const tahapan = angkatan.flatMap((a) => a.tahapan);
  const subtes = tahapan.flatMap((t) => t.subtes);
  return {
    tes: p.tes.length,
    angkatan: angkatan.length,
    tahapan: tahapan.length,
    subtes: subtes.length,
    soal: subtes.reduce((n, s) => n + jumlahContoh(s), 0),
  };
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
 */
export function periksaIsi(): Temuan[] {
  const temuan: Temuan[] = [];

  for (const j of semuaSubtes()) {
    const ke = tautanSubtes(j);
    const lokasi = `${j.platform.nama} · ${j.angkatan.nama} · ${labelTahapan(j.angkatan, j.tahapan)} · ${j.subtes.nama}`;
    const nomor = new Map<number, number>();

    for (const kelompok of j.subtes.contoh ?? []) {
      for (const soal of kelompok.soal) {
        nomor.set(soal.nomor, (nomor.get(soal.nomor) ?? 0) + 1);

        if (soal.opsi?.length) {
          const label = soal.opsi.map((o) => o.label);
          if (!label.includes(soal.kunci.trim().toUpperCase())) {
            temuan.push({
              jenis: 'Kunci tidak cocok', lokasi, ke,
              pesan: `Soal ${soal.nomor}: kunci "${soal.kunci}" tidak ada di opsi (${label.join(', ')}).`,
            });
          }
        } else if (!soal.kunci.trim()) {
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
