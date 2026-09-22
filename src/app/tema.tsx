'use client';

import { useEffect, useState } from 'react';

export type Tema = 'terang' | 'gelap' | 'sistem';

const KUNCI = 'pk-tema';

/**
 * Skrip yang dijalankan di <head> SEBELUM halaman digambar.
 *
 * Tanpa ini, mode gelap akan berkedip putih dulu sepersekian detik setiap
 * memuat halaman, karena React baru bisa menyetel tema setelah hidrasi.
 * Sengaja ditulis sebagai string agar ikut terkirim di HTML awal.
 */
export const SKRIP_TEMA = `
(function () {
  try {
    var p = localStorage.getItem('${KUNCI}') || 'sistem';
    var gelap = p === 'gelap' ||
      (p === 'sistem' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-tema', gelap ? 'gelap' : 'terang');
  } catch (e) {
    document.documentElement.setAttribute('data-tema', 'terang');
  }
})();
`;

function terapkan(pilihan: Tema) {
  const gelap =
    pilihan === 'gelap' ||
    (pilihan === 'sistem' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-tema', gelap ? 'gelap' : 'terang');
}

const PILIHAN: { nilai: Tema; teks: string }[] = [
  { nilai: 'terang', teks: 'Terang' },
  { nilai: 'gelap', teks: 'Gelap' },
  { nilai: 'sistem', teks: 'Sistem' },
];

export function PemilihTema() {
  // Bawaannya 'sistem'; nilai sebenarnya dibaca setelah mount supaya HTML yang
  // dikirim server dan yang dirender klien tidak berbeda.
  const [tema, setTema] = useState<Tema>('sistem');
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    try {
      const tersimpan = localStorage.getItem(KUNCI) as Tema | null;
      if (tersimpan) setTema(tersimpan);
    } catch {
      /* localStorage bisa diblokir; biarkan bawaan 'sistem'. */
    }
    setSiap(true);
  }, []);

  // Ikuti perubahan tema OS selama pengguna memilih 'sistem'.
  useEffect(() => {
    if (tema !== 'sistem') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const ubah = () => terapkan('sistem');
    mq.addEventListener('change', ubah);
    return () => mq.removeEventListener('change', ubah);
  }, [tema]);

  function pilih(nilai: Tema) {
    setTema(nilai);
    terapkan(nilai);
    try {
      localStorage.setItem(KUNCI, nilai);
    } catch {
      /* Pilihan tidak tersimpan, tapi tetap berlaku untuk sesi ini. */
    }
  }

  return (
    <div className="tema-grup" role="group" aria-label="Pilih tema tampilan">
      {PILIHAN.map((p) => (
        <button
          key={p.nilai}
          type="button"
          onClick={() => pilih(p.nilai)}
          aria-pressed={siap && tema === p.nilai}
        >
          {p.teks}
        </button>
      ))}
    </div>
  );
}
