import 'server-only';
import katex from 'katex';
import type { Bagian, KelompokSiap, SoalSiap } from './bagian';
import type { Kelompok, Soal, Subtes } from './skema';
import {
  SEMUA_PLATFORM, idInfo, labelTahapan, semuaAngkatan, semuaSubtes, tautanAngkatan, tautanSubtes,
  type Temuan,
} from './data';
import { POLA_RUMUS } from './rumus';

/**
 * Mengurai teks soal menjadi teks, gambar, dan rumus — di SERVER.
 *
 * Rumus dirender KaTeX di sini, lalu HTML-nya dikirim ke komponen klien.
 * Merender di klien berarti mengirim pustaka KaTeX (~75 KB gzip) ke setiap
 * halaman subtes, padahal datanya statis dan hasilnya selalu sama.
 */

const POLA = /⟦gambar:([^⟧]+)⟧|\\\(([\s\S]+?)\\\)/g;

/**
 * Penanda hanya jadi gambar kalau isinya jalur lokal gambar/... atau URL
 * https. Selain itu tampil sebagai teks apa adanya — penanda yang janggal
 * tidak boleh berubah jadi atribut src.
 */
const AMAN = /^(gambar\/[A-Za-z0-9._/-]+|https:\/\/[^\s"'<>]+)$/;

/**
 * Koma desimal "0,6" di mode matematika LaTeX dibaca tanda baca dan diberi
 * spasi sesudahnya ("0, 6"). {,} membuatnya rapat. Dilakukan saat render,
 * bukan di data, supaya LaTeX di berkas tetap mudah dibaca.
 */
const komaDesimal = (latex: string) => latex.replace(/(\d),(?=\d)/g, '$1{,}');

const OPSI_KATEX = { throwOnError: false, strict: 'ignore', trust: false, output: 'htmlAndMathml' } as const;

export function renderRumus(latex: string, blok: boolean) {
  return katex.renderToString(komaDesimal(latex), { ...OPSI_KATEX, displayMode: blok });
}

const blokElemen = (b?: Bagian) => !!b && (b.jenis === 'gambar' || (b.jenis === 'rumus' && b.blok));

export function uraikan(teks: string): Bagian[] {
  const bagian: Bagian[] = [];
  let terakhir = 0;
  for (const m of teks.matchAll(POLA)) {
    const i = m.index ?? 0;
    if (i > terakhir) bagian.push({ jenis: 'teks', isi: teks.slice(terakhir, i) });
    if (m[1] !== undefined) {
      const jalur = m[1].trim();
      if (AMAN.test(jalur)) {
        bagian.push({ jenis: 'gambar', src: jalur.startsWith('https://') ? jalur : `/${jalur}` });
      } else {
        bagian.push({ jenis: 'teks', isi: m[0] });
      }
    } else {
      // Rumus yang menempati satu baris sendiri ditampilkan sebagai blok.
      const blok = /(^|\n)[ \t]*$/.test(teks.slice(0, i)) && /^[ \t]*(\n|$)/.test(teks.slice(i + m[0].length));
      bagian.push({ jenis: 'rumus', html: renderRumus(m[2], blok), blok });
    }
    terakhir = i + m[0].length;
  }
  if (terakhir < teks.length) bagian.push({ jenis: 'teks', isi: teks.slice(terakhir) });

  // Gambar dan rumus blok sudah memisahkan baris. Baris baru yang menempel
  // padanya, di dalam .pra (pre-wrap), akan tampil sebagai baris kosong.
  return bagian
    .map((b, n) => {
      if (b.jenis !== 'teks') return b;
      let isi = b.isi;
      if (blokElemen(bagian[n - 1])) isi = isi.replace(/^[ \t]*\n/, '');
      if (blokElemen(bagian[n + 1])) isi = isi.replace(/\n[ \t]*$/, '');
      return { ...b, isi };
    })
    .filter((b) => b.jenis !== 'teks' || b.isi !== '');
}

function siapkanSoal(s: Soal): SoalSiap {
  return {
    ...s,
    pertanyaan: uraikan(s.pertanyaan),
    opsi: s.opsi?.map((o) => ({ label: o.label, teks: uraikan(o.teks) })),
    pembahasan: uraikan(s.pembahasan),
  };
}

export function siapkanKelompok(daftar: Kelompok[]): KelompokSiap[] {
  return daftar.map((k) => ({
    stimulus: k.stimulus && { ...k.stimulus, isi: k.stimulus.isi ? uraikan(k.stimulus.isi) : undefined },
    soal: k.soal.map(siapkanSoal),
  }));
}

/**
 * Rumus yang gagal diurai KaTeX. Saat tampil, KaTeX menulisnya merah alih-alih
 * menggagalkan halaman; di sini kegagalan itu dijadikan temuan Cek Data.
 *
 * Yang diperiksa: teks soal (pertanyaan, opsi, pembahasan, stimulus), format
 * dan penilaian subtes, serta isi Informasi seleksi di halaman angkatan;
 * semuanya ditampilkan lewat uraikan() dan boleh memuat rumus.
 *
 * Memeriksa SEMUA platform, termasuk yang disembunyikan (`tampil: false`), seperti
 * periksaIsi: datanya tetap dikerjakan, jadi rumusnya harus tetap valid.
 */
export function periksaRumus(): Temuan[] {
  const temuan: Temuan[] = [];

  /** Satu teks: pembatas harus berpasangan dan tiap rumusnya harus bisa diurai KaTeX. */
  const periksaTeks = (t: string, lokasi: string, ke: string, sebut: string) => {
    const buka = (t.match(/\\\(/g) ?? []).length;
    const tutup = (t.match(/\\\)/g) ?? []).length;
    if (buka !== tutup) {
      temuan.push({ jenis: 'Rumus tidak valid', lokasi, ke, pesan: `${sebut}: pembatas \\( dan \\) tidak berpasangan (${buka} buka, ${tutup} tutup).` });
    }
    for (const m of t.matchAll(POLA_RUMUS)) {
      try {
        katex.renderToString(komaDesimal(m[1]), { ...OPSI_KATEX, throwOnError: true });
      } catch (e) {
        temuan.push({
          jenis: 'Rumus tidak valid', lokasi, ke,
          pesan: `${sebut}: ${(e as Error).message.replace(/^KaTeX parse error: /, '')}`,
        });
      }
    }
  };

  // Satu objek subtes atau soal boleh dirujuk lebih dari satu angkatan (saat ini tak
  // ada yang begitu); cukup diperiksa sekali supaya temuannya tak ganda.
  const sudah = new Set<Soal>();
  const subtesSudah = new Set<Subtes>();
  for (const j of semuaSubtes(SEMUA_PLATFORM)) {
    const ke = tautanSubtes(j);
    const lokasi = `${j.platform.nama} · ${j.angkatan.nama} · ${labelTahapan(j.angkatan, j.tahapan)} · ${j.subtes.nama}`;
    if (!subtesSudah.has(j.subtes)) {
      subtesSudah.add(j.subtes);
      if (j.subtes.formatKetentuan) periksaTeks(j.subtes.formatKetentuan, lokasi, ke, 'Format dan ketentuan');
      if (j.subtes.penilaian) periksaTeks(j.subtes.penilaian, lokasi, ke, 'Penilaian');
    }
    for (const k of j.subtes.contoh ?? []) {
      for (const soal of k.soal) {
        if (sudah.has(soal)) continue;
        sudah.add(soal);
        const teks = [soal.pertanyaan, soal.pembahasan, ...(soal.opsi ?? []).map((o) => o.teks)];
        if (k.stimulus?.isi) teks.push(k.stimulus.isi);
        for (const t of teks) periksaTeks(t, lokasi, ke, `Soal ${soal.nomor}`);
      }
    }
  }

  // Informasi seleksi: tautannya langsung ke bagian yang bermasalah (jangkar idInfo).
  for (const j of semuaAngkatan(SEMUA_PLATFORM)) {
    (j.angkatan.info ?? []).forEach((i, k) => {
      const lokasi = `${j.platform.nama} · ${j.angkatan.nama} · Info: ${i.judul}`;
      periksaTeks(i.isi, lokasi, `${tautanAngkatan(j)}#${idInfo(k + 1, i.judul)}`, 'Isi informasi');
    });
  }
  return temuan;
}
