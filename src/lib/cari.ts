/**
 * Pencarian lintas entitas.
 *
 * Sengaja tanpa pustaka pencarian: seluruh data muat di memori dan sudah ikut
 * ter-bundle saat build, sementara pencocokan semua-kata lebih mudah ditebak
 * hasilnya daripada fuzzy matching yang kadang memunculkan yang tidak diminta.
 */
import {
  PLATFORM, semuaAngkatan, semuaSubtes,
  tautanAngkatan, tautanPlatform, tautanSubtes,
} from './data';

export type JenisHasil =
  | 'platform' | 'tes' | 'angkatan' | 'tahapan' | 'subtes' | 'materi' | 'soal' | 'info';

export interface Hasil {
  jenis: JenisHasil;
  judul: string;
  konteks: string;
  cuplikan: string;
  ke: string;
  skor: number;
}

const rapikan = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();

function cocok(teks: string, kata: string[]): number {
  const t = rapikan(teks);
  let skor = 0;
  for (const k of kata) {
    const i = t.indexOf(k);
    if (i === -1) return 0;
    // Kata yang muncul di awal teks lebih mungkin jadi yang dicari.
    skor += i === 0 ? 3 : i < 30 ? 2 : 1;
  }
  return skor;
}

function cuplik(teks: string, kata: string[], panjang = 170): string {
  const t = rapikan(teks);
  const i = kata.map((k) => t.indexOf(k)).filter((x) => x >= 0).sort((a, b) => a - b)[0] ?? 0;
  const mulai = Math.max(0, i - 55);
  const potong = teks.slice(mulai, mulai + panjang).replace(/\s+/g, ' ').trim();
  return (mulai > 0 ? '… ' : '') + potong + (mulai + panjang < teks.length ? ' …' : '');
}

export function cari(kueri: string, batas = 60): Hasil[] {
  const kata = rapikan(kueri).split(' ').filter(Boolean);
  if (kata.length === 0) return [];

  const hasil: Hasil[] = [];
  const tambah = (h: Hasil) => {
    if (h.skor > 0) hasil.push(h);
  };

  for (const p of PLATFORM) {
    tambah({
      jenis: 'platform', judul: p.nama, konteks: 'Platform',
      cuplikan: p.deskripsi ? cuplik(p.deskripsi, kata) : '',
      ke: tautanPlatform(p),
      skor: cocok(`${p.nama} ${p.deskripsi ?? ''}`, kata) * 6,
    });
    for (const t of p.tes) {
      tambah({
        jenis: 'tes', judul: t.nama, konteks: p.nama,
        cuplikan: t.deskripsi ? cuplik(t.deskripsi, kata) : (t.instansi ?? ''),
        ke: tautanPlatform(p),
        skor: cocok(`${t.nama} ${t.instansi ?? ''} ${t.kategori ?? ''} ${t.deskripsi ?? ''}`, kata) * 5,
      });
    }
  }

  for (const j of semuaAngkatan()) {
    const ke = tautanAngkatan(j);
    tambah({
      jenis: 'angkatan', judul: `${j.tes.nama} ${j.angkatan.nama}`,
      konteks: j.platform.nama,
      cuplikan: j.angkatan.ringkasan ? cuplik(j.angkatan.ringkasan, kata) : '',
      ke,
      skor: cocok(`${j.angkatan.nama} ${j.tes.nama} ${j.angkatan.tahun} ${j.angkatan.ringkasan ?? ''}`, kata) * 4,
    });

    for (const t of j.angkatan.tahapan) {
      tambah({
        jenis: 'tahapan', judul: t.nama,
        konteks: `${j.platform.nama} · ${j.angkatan.nama}`,
        cuplikan: t.deskripsi ? cuplik(t.deskripsi, kata) : '',
        ke,
        skor: cocok(`${t.nama} ${t.deskripsi ?? ''} ${t.mode ?? ''}`, kata) * 4,
      });
    }

    for (const i of j.angkatan.info ?? []) {
      tambah({
        jenis: 'info', judul: i.judul,
        konteks: `${j.angkatan.nama} · informasi seleksi`,
        cuplikan: cuplik(i.isi, kata), ke,
        skor: cocok(`${i.judul} ${i.isi}`, kata) * 2,
      });
    }
  }

  for (const j of semuaSubtes()) {
    const ke = tautanSubtes(j);
    const konteks = `${j.platform.nama} · ${j.tes.nama} ${j.angkatan.nama} · ${j.tahapan.nama}`;

    tambah({
      jenis: 'subtes', judul: j.subtes.nama, konteks,
      cuplikan: j.subtes.formatKetentuan ? cuplik(j.subtes.formatKetentuan, kata) : '',
      ke,
      skor: cocok(
        `${j.subtes.nama} ${j.subtes.formatKetentuan ?? ''} ${j.subtes.penilaian ?? ''} ${j.subtes.catatan ?? ''}`,
        kata,
      ) * 5,
    });

    for (const m of j.subtes.materi ?? []) {
      tambah({
        jenis: 'materi', judul: m.nama,
        konteks: `${j.subtes.nama} · ${j.tahapan.nama}`,
        cuplikan: m.catatan ?? '', ke,
        skor: cocok(`${m.nama} ${m.catatan ?? ''}`, kata) * 3,
      });
    }

    for (const kelompok of j.subtes.contoh ?? []) {
      const stim = `${kelompok.stimulus?.judul ?? ''} ${kelompok.stimulus?.isi ?? ''}`;
      for (const soal of kelompok.soal) {
        const gabungan =
          `${stim} ${soal.pertanyaan} ${(soal.opsi ?? []).map((o) => o.teks).join(' ')} ${soal.pembahasan}`;
        tambah({
          jenis: 'soal', judul: `Soal ${soal.nomor} — ${j.subtes.nama}`,
          konteks: `${j.tahapan.nama} · ${j.angkatan.nama}`,
          cuplikan: cuplik(gabungan, kata), ke,
          skor: cocok(gabungan, kata) * 2,
        });
      }
    }
  }

  return hasil.sort((a, b) => b.skor - a.skor).slice(0, batas);
}
