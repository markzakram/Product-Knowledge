'use client';

import { useEffect, useRef } from 'react';
import { audioAman } from '@/lib/audio';

/**
 * Pemutar audio sebuah soal (Soal.audio), dipakai halaman subtes dan simulasi.
 *
 * Hanya tampil kalau jalurnya lolos pola aman (lib/audio.ts); jalur yang
 * janggal tidak pernah jadi atribut src. preload="none": audio baru diunduh
 * saat diputar, jadi halaman dengan puluhan soal tidak memuat puluhan berkas.
 *
 * Satu halaman, satu suara: memutar sebuah audio menjeda yang lain. Ulang
 * putar bebas karena ini latihan.
 */
let sedangBunyi: HTMLAudioElement | null = null;

export function AudioSoal({ src, nomor }: { src?: string; nomor: number }) {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const el = ref.current;
    return () => {
      // Elemen yang dilepas (pindah soal) berhenti; jangan simpan rujukannya.
      if (el && sedangBunyi === el) sedangBunyi = null;
      el?.pause();
    };
  }, [src]);

  if (!audioAman(src)) return null;
  return (
    <div className="audio-soal tanpa-cetak">
      <audio
        ref={ref}
        controls
        preload="none"
        src={`/${src}`}
        aria-label={`Audio soal ${nomor}`}
        onPlay={(e) => {
          if (sedangBunyi && sedangBunyi !== e.currentTarget) sedangBunyi.pause();
          sedangBunyi = e.currentTarget;
        }}
        onEnded={(e) => {
          if (sedangBunyi === e.currentTarget) sedangBunyi = null;
        }}
      />
    </div>
  );
}
