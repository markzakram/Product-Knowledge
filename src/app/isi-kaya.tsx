import { Fragment } from 'react';
import type { Bagian } from '@/lib/bagian';

/**
 * Menampilkan teks soal yang sudah diurai di server (lib/isi-kaya.ts).
 *
 * Tidak mengurai apa pun dan tidak memuat KaTeX: rumus datang sebagai HTML
 * yang sudah jadi. Karena itu komponen ini aman dipakai di komponen klien
 * tanpa menambah bundel browser.
 *
 * HTML rumus dihasilkan KaTeX dengan trust: false dari data kita sendiri —
 * perintah yang bisa menyisipkan tautan atau atribut ditolak KaTeX.
 */
export function IsiKaya({ bagian }: { bagian: Bagian[] }) {
  return (
    <>
      {bagian.map((b, n) => {
        if (b.jenis === 'teks') return <Fragment key={n}>{b.isi}</Fragment>;
        if (b.jenis === 'gambar') {
          // eslint-disable-next-line @next/next/no-img-element
          return <img key={n} className="gambar-soal gambar-inline" src={b.src} alt="" loading="lazy" />;
        }
        return (
          <span
            key={n}
            className={b.blok ? 'rumus rumus-blok' : 'rumus'}
            dangerouslySetInnerHTML={{ __html: b.html }}
          />
        );
      })}
    </>
  );
}
