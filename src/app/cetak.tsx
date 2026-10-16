'use client';

import { useEffect } from 'react';
import { Ikon } from './komponen';

/**
 * Tombol cetak halaman angkatan.
 *
 * Bagian yang dilipat (<details>, mis. Informasi seleksi) tidak ikut tercetak
 * kalau sedang tertutup, padahal itu isi yang paling dicari di kertas. Jadi
 * semuanya dibuka sebelum cetak dan hanya yang tadinya tertutup dikembalikan
 * sesudahnya; yang memang sedang dibuka pembaca tidak disentuh.
 *
 * Pendengarnya dipasang di komponen ini, jadi Ctrl+P ikut tertangani selama
 * halamannya memuat tombol ini, bukan hanya klik pada tombolnya.
 */
export function Cetak() {
  useEffect(() => {
    const dibuka = new Set<HTMLDetailsElement>();

    const bukaSemua = () => {
      document.querySelectorAll('details').forEach((d) => {
        if (!d.open) {
          d.open = true;
          dibuka.add(d);
        }
      });
    };
    const kembalikan = () => {
      dibuka.forEach((d) => {
        d.open = false;
      });
      dibuka.clear();
    };

    window.addEventListener('beforeprint', bukaSemua);
    window.addEventListener('afterprint', kembalikan);

    // Cadangan untuk peramban yang tak mengirim beforeprint/afterprint (iOS
    // Safari); media query print berubah di saat yang sama. Aman dipanggil
    // dua kali: bukaSemua dan kembalikan tak melakukan apa-apa kali kedua.
    const cetak = window.matchMedia('print');
    const ubah = (e: MediaQueryListEvent) => (e.matches ? bukaSemua() : kembalikan());
    cetak.addEventListener?.('change', ubah);

    return () => {
      window.removeEventListener('beforeprint', bukaSemua);
      window.removeEventListener('afterprint', kembalikan);
      cetak.removeEventListener?.('change', ubah);
    };
  }, []);

  return (
    <button type="button" className="aksi aksi-garis tanpa-cetak" onClick={() => window.print()}>
      <Ikon nama="cetak" ukuran={17} />
      Cetak
    </button>
  );
}
