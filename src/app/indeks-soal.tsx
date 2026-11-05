'use client';

import { useEffect, useRef, useState } from 'react';
import type { KategoriIndeks } from '@/lib/indeks-soal';

export interface SubtesIndeks {
  nama: string;
  jumlah: number;
  href: string;
  aktif: boolean;
}

/** Garis baca: sekian bagian tinggi layar di bawah header. */
const BAGIAN_LAYAR = 0.3;

/** Tinggi header lengket (token CSS --tinggi-kepala) dan garis baca di bawahnya, dalam px. */
function ukuran() {
  const kepala = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tinggi-kepala')) || 0;
  const tinggi = window.innerHeight;
  return { kepala, tinggi, garis: kepala + (tinggi - kepala) * BAGIAN_LAYAR };
}

/**
 * Index samping halaman subtes.
 *
 * Semua tautannya `<a href="#…">` asli, jadi tetap melompat tanpa JS. IntersectionObserver
 * hanya menandai category/lesson yang sedang dibaca (aria-current="location") dan
 * menggulir panel bila penandanya keluar dari panel.
 *
 * `varian="samping"`: kolom lengket di layar lebar (Subtes + Isi soal).
 * `varian="atas"`: blok lipat di layar sempit (Isi soal saja; navigasi subtes sudah
 * ada di dasar halaman). CSS membuang yang tak dipakai dengan display: none.
 */
export function IndeksSoal({
  varian,
  subtes,
  isi,
}: {
  varian: 'samping' | 'atas';
  subtes: SubtesIndeks[];
  isi: KategoriIndeks[];
}) {
  const [aktif, setAktif] = useState<{ kategori: number; lesson: number } | null>(null);
  const akar = useRef<HTMLElement>(null);

  // Penanda posisi. Pengamat hanya pemicu: tiap kali tujuan melewati garis baca,
  // posisi semua tujuan dibaca ulang.
  useEffect(() => {
    if (isi.length === 0) return;
    const sasaran: { id: string; kategori: number; lesson: number }[] = [];
    isi.forEach((k, ik) => {
      sasaran.push({ id: k.ke, kategori: ik, lesson: -1 });
      k.lesson.forEach((l, il) => sasaran.push({ id: l.ke, kategori: ik, lesson: il }));
    });

    let pengamat: IntersectionObserver | null = null;

    function hitung() {
      const { garis } = ukuran();
      let terbaik: { kategori: number; lesson: number } | null = null;
      let atas = -Infinity;
      for (const s of sasaran) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const t = el.getBoundingClientRect().top;
        // Seri: lesson menang atas category (urutan sasaran: category, lalu lesson-nya).
        if (t <= garis + 1 && t >= atas) {
          atas = t;
          terbaik = { kategori: s.kategori, lesson: s.lesson };
        }
      }
      setAktif((lama) =>
        lama && terbaik && lama.kategori === terbaik.kategori && lama.lesson === terbaik.lesson ? lama : terbaik,
      );
    }

    function pasang() {
      pengamat?.disconnect();
      const { kepala, tinggi, garis } = ukuran();
      // Pita dari bawah header sampai garis baca: tujuan yang puncaknya melewati
      // garis baca masuk atau keluar dari pita, dan itu memicu hitung().
      // Tidak boleh negatif: di jendela tersembunyi atau amat pendek (tinggi 0)
      // selisihnya negatif, "--123px" ditolak browser dan seluruh halaman mogok.
      pengamat = new IntersectionObserver(hitung, {
        rootMargin: `-${Math.max(0, Math.round(kepala))}px 0px -${Math.max(0, Math.round(tinggi - garis))}px 0px`,
        threshold: [0, 1],
      });
      for (const s of sasaran) {
        const el = document.getElementById(s.id);
        if (el) pengamat.observe(el);
      }
      hitung();
    }

    pasang();
    window.addEventListener('resize', pasang);
    window.addEventListener('hashchange', hitung);
    return () => {
      pengamat?.disconnect();
      window.removeEventListener('resize', pasang);
      window.removeEventListener('hashchange', hitung);
    };
  }, [isi]);

  // Panel digulir sendiri (bukan scrollIntoView, yang ikut menggulir halaman).
  useEffect(() => {
    const panel = akar.current;
    if (!panel || panel.offsetParent === null || panel.scrollHeight <= panel.clientHeight) return;
    const item = panel.querySelector<HTMLElement>('[aria-current="location"]');
    if (!item) return;
    const p = panel.getBoundingClientRect();
    const i = item.getBoundingClientRect();
    if (i.top < p.top) panel.scrollTop += i.top - p.top - 8;
    else if (i.bottom > p.bottom) panel.scrollTop += i.bottom - p.bottom + 8;
  }, [aktif]);

  const adaSubtes = varian === 'samping' && subtes.length > 1;
  const adaIsi = isi.length > 0;
  if (!adaSubtes && !adaIsi) return null;

  const daftarIsi = adaIsi && (
    <nav aria-label="Isi soal">
      <ul className="indeks-daftar">
        {isi.map((k, ik) => {
          const kini = aktif?.kategori === ik;
          return (
            <li key={`${k.nama}-${ik}`}>
              <a
                className="indeks-tautan indeks-kategori"
                href={`#${k.ke}`}
                aria-current={kini && aktif!.lesson < 0 ? 'location' : undefined}
                data-kini={kini ? 'ya' : undefined}
                onClick={() => setAktif({ kategori: ik, lesson: -1 })}
              >
                <span className="indeks-nama">{k.nama}</span>
                <span className="indeks-jumlah">{k.jumlah}</span>
              </a>
              {k.lesson.length > 0 && (
                <ul className="indeks-daftar indeks-anak">
                  {k.lesson.map((l, il) => (
                    <li key={`${l.nama}-${il}`}>
                      <a
                        className="indeks-tautan"
                        href={`#${l.ke}`}
                        aria-current={kini && aktif!.lesson === il ? 'location' : undefined}
                        onClick={() => setAktif({ kategori: ik, lesson: il })}
                      >
                        <span className="indeks-nama">{l.nama}</span>
                        <span className="indeks-jumlah">{l.jumlah}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  if (varian === 'atas') {
    return (
      <details className="indeks-atas tanpa-cetak">
        <summary>Index soal</summary>
        <div className="indeks-badan">{daftarIsi}</div>
      </details>
    );
  }

  return (
    <aside
      ref={akar}
      className="indeks-samping tanpa-cetak"
      aria-label="Index halaman"
    >
      {adaSubtes && (
        <nav className="ang-samping-kartu" aria-label="Subtes tahapan ini">
          <div className="label-mini indeks-judul">Subtes</div>
          <ul className="indeks-daftar">
            {subtes.map((s) => (
              <li key={s.href}>
                <a
                  className="indeks-tautan"
                  href={s.href}
                  aria-current={s.aktif ? 'page' : undefined}
                >
                  <span className="indeks-nama">{s.nama}</span>
                  {s.jumlah > 0 && <span className="indeks-jumlah">{s.jumlah}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {adaIsi && (
        <div className="ang-samping-kartu">
          <div className="label-mini indeks-judul">Isi soal</div>
          {daftarIsi}
        </div>
      )}
    </aside>
  );
}
