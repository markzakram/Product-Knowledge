'use client';

import { useEffect } from 'react';

/**
 * Pintasan papan ketik untuk kotak pencarian.
 *
 * Aplikasi ini alat cari-jawab-cepat, dan kotak pencarian adalah antarmuka
 * utamanya. Mengharuskan tangan pindah ke tetikus untuk mencapainya
 * menghilangkan sebagian besar kecepatan itu.
 *
 *   /        fokus ke pencarian
 *   Ctrl+K   sama, untuk yang terbiasa dari aplikasi lain
 *   Esc      lepas fokus
 */
export function PintasanCari() {
  useEffect(() => {
    function tekan(e: KeyboardEvent) {
      const el = document.activeElement as HTMLElement | null;
      const sedangMengetik =
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el?.isContentEditable === true;

      const kotak = document.getElementById('kotak-cari') as HTMLInputElement | null;
      if (!kotak) return;

      if (e.key === 'Escape' && el === kotak) {
        kotak.blur();
        return;
      }
      // "/" hanya berlaku saat tidak sedang mengetik di tempat lain —
      // kalau tidak, garis miring jadi mustahil diketik di kotak mana pun.
      if (e.key === '/' && !sedangMengetik) {
        e.preventDefault();
        kotak.focus();
        kotak.select();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        kotak.focus();
        kotak.select();
      }
    }
    window.addEventListener('keydown', tekan);
    return () => window.removeEventListener('keydown', tekan);
  }, []);

  return null;
}
