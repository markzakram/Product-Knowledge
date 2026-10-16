'use client';

import { useLayoutEffect } from 'react';

/**
 * Mode fokus: selama komponen ini terpasang, <body> memakai atribut `data-fokus`,
 * dan globals.css menyembunyikan header situs, nav bawah, dan tawaran pasang
 * (`.kepala`, `.nav-bawah`, `.pasang`). Dipakai layar yang punya bilah atas
 * sendiri, yaitu simulasi yang sedang dikerjakan.
 *
 * Header dan nav bawah dirender layout.tsx untuk semua halaman, jadi halaman
 * tidak bisa membuangnya dari dalam; atribut di <body> adalah satu-satunya
 * kait yang bisa dijangkau CSS. Layout effect, bukan effect biasa, supaya
 * header tak sempat tergambar satu frame sebelum disembunyikan.
 */
export function Fokus() {
  useLayoutEffect(() => {
    document.body.setAttribute('data-fokus', '');
    return () => document.body.removeAttribute('data-fokus');
  }, []);
  return null;
}
