'use client';

import { useEffect, useState } from 'react';

/** Peristiwa beforeinstallprompt (Chrome, Edge, Android); belum ada di lib DOM. */
interface TawaranBrowser extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const KUNCI_TUTUP = 'pk-tawaran-pasang-ditutup';
const JEDA_TUTUP_MS = 30 * 24 * 60 * 60 * 1000;

function baruDitutup() {
  try {
    const t = Number(localStorage.getItem(KUNCI_TUTUP));
    return !!t && Date.now() - t < JEDA_TUTUP_MS;
  } catch {
    return false;
  }
}

const sudahTerpasang = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

/**
 * Service worker dan tawaran memasang aplikasi.
 *
 * Service worker hanya didaftarkan di build produksi, dengan ID build sebagai
 * versi cache (public/sw.js). Di server dev, service worker yang tersisa dari
 * build produksi di alamat yang sama justru dilepas — kalau tidak, ia akan
 * menyajikan halaman lama dari cache dan perubahan kode seolah tidak berlaku.
 *
 * Tawaran pasang tampil sebagai bilah tipis di atas konten, bukan tombol di
 * header: di ponsel header sudah penuh oleh merek dan pemilih tema. Chrome,
 * Edge, dan Android punya dialog pasang sendiri (beforeinstallprompt); Safari
 * di iPhone tidak, jadi di sana yang tampil petunjuk langkahnya.
 */
export function Pwa() {
  const [tawaran, setTawaran] = useState<TawaranBrowser | null>(null);
  const [ios, setIos] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    if (process.env.NODE_ENV !== 'production') {
      navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
      return;
    }
    navigator.serviceWorker
      .register(`/sw.js?v=${process.env.NEXT_PUBLIC_VERSI_BUILD ?? 'dev'}`, { scope: '/' })
      .catch(() => {
        /* tanpa service worker aplikasi tetap jalan, hanya tidak offline */
      });
  }, []);

  useEffect(() => {
    if (sudahTerpasang() || baruDitutup()) return;
    const tangkap = (e: Event) => {
      // Dialog bawaan ditahan; gantinya bilah di bawah, yang bisa ditutup.
      e.preventDefault();
      setTawaran(e as TawaranBrowser);
    };
    const terpasang = () => setTawaran(null);
    window.addEventListener('beforeinstallprompt', tangkap);
    window.addEventListener('appinstalled', terpasang);
    // Semua browser di iPhone/iPad memakai WebKit dan tidak punya
    // beforeinstallprompt; iPad modern mengaku "Macintosh" tapi punya layar sentuh.
    const ua = navigator.userAgent;
    setIos(/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1));
    return () => {
      window.removeEventListener('beforeinstallprompt', tangkap);
      window.removeEventListener('appinstalled', terpasang);
    };
  }, []);

  const tutup = () => {
    try {
      localStorage.setItem(KUNCI_TUTUP, String(Date.now()));
    } catch {
      /* penyimpanan diblokir: cukup tutup untuk kunjungan ini */
    }
    setTawaran(null);
    setIos(false);
  };

  if (!tawaran && !ios) return null;

  return (
    <aside className="pasang" aria-label="Pasang aplikasi">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pasang-ikon" src="/pwa/ikon-192.png" alt="" aria-hidden />
      <p className="pasang-teks">
        <b>Pasang Product Knowledge</b>
        {tawaran ? (
          <span> — buka dari layar utama, halaman yang pernah dibuka tetap terbaca tanpa sinyal.</span>
        ) : (
          <span> — ketuk tombol Bagikan, lalu pilih “Tambahkan ke Layar Utama”.</span>
        )}
      </p>
      {tawaran && (
        <button
          type="button"
          className="tombol pasang-tombol"
          onClick={async () => {
            await tawaran.prompt();
            await tawaran.userChoice.catch(() => undefined);
            setTawaran(null);
          }}
        >
          Pasang
        </button>
      )}
      <button type="button" className="pasang-tutup" onClick={tutup} aria-label="Tutup tawaran pasang">
        ×
      </button>
    </aside>
  );
}
