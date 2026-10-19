import 'server-only';
import {
  judulAngkatan, kodeChip, kodeChipTahapan, labelTahapan, nomorTahapan, subtesBisaSimulasi,
  subtesSimulasiBerikutnya, tautanAngkatan, tautanPlatform, tautanSimulasiAngkatan,
  tautanSimulasiSubtes, tautanSubtes, type JalurAngkatan, type JalurSubtes,
} from './data';
import { siapkanKelompok, uraikan } from './isi-kaya';
import { teksPolos } from './rumus';
import type { SoalSiap } from './bagian';
import type { StatusData, Subtes, Tahapan } from './skema';
import {
  batasMenit, jumlahSoalSubtes, pilihKelompok,
  type BagianSim, type PropsSimulasi, type SoalSim, type SubtesSim,
} from './simulasi';

/**
 * Menyusun props halaman simulasi di SERVER.
 *
 * Semua yang butuh `@/lib/data` (judul, tautan, chip, subtes berikutnya) dan
 * KaTeX (teks soal diurai jadi HTML rumus) dihitung di sini, lalu dikirim ke
 * komponen klien sebagai data polos. Komponen klien sendiri tidak boleh
 * mengimpor data.ts: modul itu menarik seluruh isi `data/` ke bundel browser.
 */

const URUT_STATUS: StatusData[] = ['terkonfirmasi', 'indikasi', 'coming_soon'];
const terlemah = (...s: StatusData[]) =>
  s.reduce((a, b) => (URUT_STATUS.indexOf(b) > URUT_STATUS.indexOf(a) ? b : a));

/** Waktu sesi tahapan `waktuBersama`: yang terbesar bila angka subtesnya berbeda (sama dengan `durasiTahapan`). */
function waktuSesi(t: Tahapan): number | undefined {
  const ada = t.subtes.flatMap((s) => (s.waktuMenit === undefined ? [] : [s.waktuMenit]));
  return ada.length ? Math.max(...ada) : undefined;
}

/** Jumlah soal SELURUH subtes tahapan, termasuk yang tak punya contoh: itulah isi sesi yang waktunya dibagi. */
const jumlahSoalTahapan = (t: Tahapan) => t.subtes.reduce((n, s) => n + (s.jumlahSoal ?? 0), 0);

const LATEX_ATAU_GAMBAR = /\\\(|⟦gambar:/;
const ANGKA_KECIL: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
};

const angkaBiasa = (t: string) => [...t].map((c) => ANGKA_KECIL[c]).join('');

/**
 * Bentuk teks polos sebuah kunci yang bisa diketik. `teksPolos` menulis pecahan,
 * pangkat, dan indeks dengan angka Unicode kecil ("¹⁄₂", "10²"); di sini
 * dikembalikan ke yang bisa diketik di papan ketik biasa ("1/2", "10^2").
 */
const kunciKetik = (kunci: string) =>
  teksPolos(kunci)
    .replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁄([₀₁₂₃₄₅₆₇₈₉]+)/g, (_, a: string, b: string) => `${angkaBiasa(a)}/${angkaBiasa(b)}`)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => `^${angkaBiasa(m)}`)
    .replace(/[₀₁₂₃₄₅₆₇₈₉]+/g, (m) => `_${angkaBiasa(m)}`)
    .replace(/⁄/g, '/');

/** Kunci isian yang memuat rumus: KaTeX hanya ada di server, jadi tampilan dan bentuk polosnya disiapkan di sini. */
function sertakanKunci(s: SoalSiap): SoalSim {
  if (s.tipe !== 'isian_singkat' || !LATEX_ATAU_GAMBAR.test(s.kunci)) return s;
  return { ...s, kunciTampil: uraikan(s.kunci), kunciPolos: kunciKetik(s.kunci) };
}

function susunSubtes(s: Subtes, chip: string): SubtesSim {
  const { kelompok, parsial } = pilihKelompok(s.contoh, s.jumlahSoal);
  return {
    kode: s.kode,
    nama: s.nama,
    chip,
    jumlahSoal: s.jumlahSoal,
    parsial,
    kelompok: siapkanKelompok(kelompok).map((k) => ({ ...k, soal: k.soal.map(sertakanKunci) })),
  };
}

/** Mengapa sebuah subtes tak ikut simulasi, untuk layar awal. */
function alasanLewat(s: Subtes): string {
  if (s.bankSoal === false) return 'Bukan tes dengan soal tertulis';
  if ((s.contoh ?? []).length === 0) return 'Belum ada contoh soal';
  return 'Hanya soal uraian (tugas bebas)';
}

export function rencanaSubtes(j: JalurSubtes): PropsSimulasi {
  const { platform, tes, angkatan, tahapan, subtes } = j;
  const judul = judulAngkatan(tes, angkatan);
  const chip = kodeChipTahapan(tahapan.subtes.map((s) => s.nama))[tahapan.subtes.indexOf(subtes)];
  const sim = susunSubtes(subtes, chip);
  const n = jumlahSoalSubtes(sim);
  // Subtes dari tahapan `waktuBersama` mendapat porsi dari waktu sesi, menurut jumlah soal SELURUH tahapan.
  const menit = tahapan.waktuBersama
    ? batasMenit({ waktuMenit: waktuSesi(tahapan), jumlahSoal: jumlahSoalTahapan(tahapan), n })
    : batasMenit({ waktuMenit: subtes.waktuMenit, jumlahSoal: subtes.jumlahSoal, n });
  const berikutnya = subtesSimulasiBerikutnya(j);

  return {
    mode: 'subtes',
    jalur: tautanSimulasiSubtes(j),
    judul,
    nama: subtes.nama,
    status: terlemah(angkatan.status, tahapan.status),
    jejak: [
      { teks: 'Platform', ke: '/' },
      { teks: platform.nama, ke: tautanPlatform(platform) },
      { teks: judul, ke: tautanAngkatan(j) },
      { teks: labelTahapan(angkatan, tahapan) },
      { teks: subtes.nama, ke: tautanSubtes(j) },
      { teks: 'Simulasi' },
    ],
    kembali: { href: tautanSubtes(j), teks: `Kembali ke ${subtes.nama}` },
    berikutnya: berikutnya
      ? { href: tautanSimulasiSubtes(berikutnya), nama: berikutnya.subtes.nama }
      : undefined,
    bagian: [
      {
        id: 'b0',
        judul: subtes.nama,
        chip,
        tahap: labelTahapan(angkatan, tahapan),
        subtes: [sim],
        menit,
        ...(tahapan.waktuBersama ? { satuSesi: true as const } : {}),
      },
    ],
    dilewati: [],
  };
}

export function rencanaAngkatan(j: JalurAngkatan): PropsSimulasi {
  const { platform, tes, angkatan } = j;
  const judul = judulAngkatan(tes, angkatan);
  const bagian: BagianSim[] = [];
  const dilewati: PropsSimulasi['dilewati'] = [];
  const status: StatusData[] = [angkatan.status];

  angkatan.tahapan.forEach((tahapan) => {
    const chip = kodeChipTahapan(tahapan.subtes.map((s) => s.nama));
    const tahap = labelTahapan(angkatan, tahapan);
    const ikut: { asli: Subtes; sim: SubtesSim }[] = [];

    tahapan.subtes.forEach((s, i) => {
      if (subtesBisaSimulasi(s)) ikut.push({ asli: s, sim: susunSubtes(s, chip[i]) });
      else dilewati.push({ nama: s.nama, tahap, alasan: alasanLewat(s) });
    });
    if (ikut.length === 0) return;
    status.push(tahapan.status);

    if (tahapan.waktuBersama) {
      // Satu sesi, satu timer: seluruh subtesnya satu bagian.
      bagian.push({
        id: `b${bagian.length}`,
        judul: tahapan.nama,
        chip: kodeChip(tahapan.nama) || String(nomorTahapan(angkatan, tahapan)),
        tahap,
        subtes: ikut.map((x) => x.sim),
        menit: batasMenit({
          waktuMenit: waktuSesi(tahapan),
          jumlahSoal: jumlahSoalTahapan(tahapan),
          n: ikut.reduce((n, x) => n + jumlahSoalSubtes(x.sim), 0),
        }),
        satuSesi: true,
      });
      return;
    }
    for (const { asli, sim } of ikut) {
      bagian.push({
        id: `b${bagian.length}`,
        judul: sim.nama,
        chip: sim.chip,
        tahap,
        subtes: [sim],
        menit: batasMenit({ waktuMenit: asli.waktuMenit, jumlahSoal: asli.jumlahSoal, n: jumlahSoalSubtes(sim) }),
      });
    }
  });

  return {
    mode: 'angkatan',
    jalur: tautanSimulasiAngkatan(j),
    judul,
    nama: judul,
    status: terlemah(...status),
    jejak: [
      { teks: 'Platform', ke: '/' },
      { teks: platform.nama, ke: tautanPlatform(platform) },
      { teks: judul, ke: tautanAngkatan(j) },
      { teks: 'Simulasi' },
    ],
    kembali: { href: tautanAngkatan(j), teks: `Kembali ke ${judul}` },
    bagian,
    dilewati,
  };
}
