import { Fragment } from 'react';

/**
 * Teks yang boleh memuat gambar inline.
 *
 * Scraper menyimpan gambar sebagai penanda ⟦gambar:jalur⟧ di posisi aslinya di
 * dalam teks — supaya gambar di tengah pembahasan (tabel kebenaran, pola
 * figural) tetap berada di antara kalimat yang merujuknya, bukan ditumpuk di
 * ujung.
 *
 * Penanda hanya dirender sebagai gambar kalau isinya jalur lokal gambar/...
 * atau URL https. Selain itu ditampilkan sebagai teks apa adanya — penanda
 * yang janggal tidak boleh berubah jadi atribut src.
 */
const POLA = /⟦gambar:([^⟧]+)⟧/g;
const AMAN = /^(gambar\/[A-Za-z0-9._/-]+|https:\/\/[^\s"'<>]+)$/;

export function adaGambar(teks: string) {
  return /⟦gambar:/.test(teks);
}

/** Teks tanpa penanda gambar — untuk pencarian dan dokumen. */
export function tanpaGambar(teks: string, ganti = '') {
  return teks.replace(POLA, ganti).replace(/\n{3,}/g, '\n\n').trim();
}

export function TeksBergambar({ teks, className }: { teks: string; className?: string }) {
  const bagian: { jenis: 'teks' | 'gambar'; isi: string }[] = [];
  let terakhir = 0;
  for (const m of teks.matchAll(POLA)) {
    const i = m.index ?? 0;
    if (i > terakhir) bagian.push({ jenis: 'teks', isi: teks.slice(terakhir, i) });
    bagian.push({ jenis: 'gambar', isi: m[1].trim() });
    terakhir = i + m[0].length;
  }
  if (terakhir < teks.length) bagian.push({ jenis: 'teks', isi: teks.slice(terakhir) });

  // Teks tanpa gambar dirender persis seperti sebelumnya.
  if (!bagian.some((b) => b.jenis === 'gambar')) {
    return <span className={className}>{teks}</span>;
  }

  return (
    <span className={className}>
      {bagian.map((b, n) => {
        if (b.jenis === 'teks') return <Fragment key={n}>{b.isi.replace(/^\n+|\n+$/g, '')}</Fragment>;
        if (!AMAN.test(b.isi)) return <Fragment key={n}>{`⟦gambar:${b.isi}⟧`}</Fragment>;
        const src = b.isi.startsWith('https://') ? b.isi : `/${b.isi}`;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={n} className="gambar-soal gambar-inline" src={src} alt="" loading="lazy" />
        );
      })}
    </span>
  );
}
