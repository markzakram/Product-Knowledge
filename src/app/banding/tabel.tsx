'use client';

import { useEffect, useMemo, useState } from 'react';
import type { StatusData } from '@/lib/skema';
import { LABEL_STATUS } from '@/lib/skema';

export interface BarisSubtes {
  platform: string;
  slugPlatform: string;
  logo: string;
  tes: string;
  angkatan: string;
  tahapan: string;
  namaTahapan: string;
  subtes: string;
  jumlahSoal: number | null;
  waktuMenit: number | null;
  contoh: number;
  status: StatusData;
  penilaian: string;
  materi: string;
  ke: string;
}

type Urut = 'bawaan' | 'soal' | 'waktu' | 'contoh' | 'subtes';

const URUT_SAH: Urut[] = ['bawaan', 'soal', 'waktu', 'contoh', 'subtes'];
const STATUS_SAH = ['terkonfirmasi', 'indikasi', 'coming_soon'];

/** Nilai mentah dari URL, belum divalidasi. */
export interface SaringanAwal {
  q: string;
  platform: string;
  status: string;
  urut: string;
  contoh: boolean;
}

const rapikan = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

function waktuTeks(menit: number | null) {
  if (menit === null) return '—';
  const utuh = Math.floor(menit);
  const detik = Math.round((menit - utuh) * 60);
  return detik ? `${utuh}′ ${detik}″` : `${utuh}′`;
}

export function TabelBanding({ baris, awal }: { baris: BarisSubtes[]; awal: SaringanAwal }) {
  const daftarPlatform = useMemo(
    () => [...new Set(baris.map((b) => b.platform))].sort(),
    [baris],
  );

  // Nilai dari URL divalidasi dulu. Tautan bisa disunting tangan atau
  // terpotong saat disalin; nilai yang tidak dikenal diabaikan, bukan
  // dibiarkan menghasilkan tabel kosong tanpa penjelasan.
  const [kueri, setKueri] = useState(awal.q.slice(0, 120));
  const [platform, setPlatform] = useState(
    daftarPlatform.includes(awal.platform) ? awal.platform : '',
  );
  const [status, setStatus] = useState(STATUS_SAH.includes(awal.status) ? awal.status : '');
  const [hanyaBerisi, setHanyaBerisi] = useState(awal.contoh);
  const [urut, setUrut] = useState<Urut>(
    URUT_SAH.includes(awal.urut as Urut) ? (awal.urut as Urut) : 'bawaan',
  );
  const [tersalin, setTersalin] = useState(false);

  // Saringan disimpan di URL supaya bisa dibagikan dan bertahan saat muat
  // ulang. replaceState, bukan push: tiap huruf yang diketik tidak boleh
  // menambah satu entri riwayat — tombol Kembali harus keluar dari halaman.
  useEffect(() => {
    const p = new URLSearchParams();
    if (kueri.trim()) p.set('q', kueri.trim());
    if (platform) p.set('platform', platform);
    if (status) p.set('status', status);
    if (urut !== 'bawaan') p.set('urut', urut);
    if (hanyaBerisi) p.set('contoh', '1');
    const cari = p.toString();
    const tujuan = `${location.pathname}${cari ? `?${cari}` : ''}`;
    if (tujuan !== `${location.pathname}${location.search}`) {
      history.replaceState(null, '', tujuan);
    }
    setTersalin(false);
  }, [kueri, platform, status, urut, hanyaBerisi]);

  async function salinTautan() {
    try {
      await navigator.clipboard.writeText(location.href);
      setTersalin(true);
    } catch {
      /* Clipboard bisa ditolak peramban; tautannya tetap ada di bilah alamat. */
    }
  }

  const tersaring = useMemo(() => {
    const kata = rapikan(kueri).split(' ').filter(Boolean);
    let out = baris.filter((b) => {
      if (platform && b.platform !== platform) return false;
      if (status && b.status !== status) return false;
      if (hanyaBerisi && b.contoh === 0) return false;
      if (!kata.length) return true;
      // Dicocokkan ke seluruh baris, termasuk materi dan penilaian — supaya
      // "inggris" menemukan subtes bernama lain yang materinya bahasa Inggris,
      // dan "166" menemukan subtes berdasarkan ambang batasnya.
      const semua = rapikan(
        `${b.platform} ${b.tes} ${b.angkatan} ${b.namaTahapan} ${b.subtes} ${b.materi} ${b.penilaian}`,
      );
      return kata.every((k) => semua.includes(k));
    });

    const angka = (v: number | null) => (v === null ? -1 : v);
    if (urut === 'soal') out = [...out].sort((a, b) => angka(b.jumlahSoal) - angka(a.jumlahSoal));
    else if (urut === 'waktu') out = [...out].sort((a, b) => angka(b.waktuMenit) - angka(a.waktuMenit));
    else if (urut === 'contoh') out = [...out].sort((a, b) => b.contoh - a.contoh);
    else if (urut === 'subtes') out = [...out].sort((a, b) => a.subtes.localeCompare(b.subtes, 'id'));
    return out;
  }, [baris, kueri, platform, status, hanyaBerisi, urut]);

  // Subtes yang namanya muncul di lebih dari satu platform — itu yang paling
  // menarik dibandingkan, jadi ditandai.
  const bersama = useMemo(() => {
    const peta = new Map<string, Set<string>>();
    for (const b of baris) {
      const k = rapikan(b.subtes);
      if (!peta.has(k)) peta.set(k, new Set());
      peta.get(k)!.add(b.platform);
    }
    return peta;
  }, [baris]);

  const adaSaringan = Boolean(kueri || platform || status || hanyaBerisi);

  return (
    <>
      <div className="saring">
        <input
          type="search"
          className="saring-cari"
          placeholder="Saring: nama subtes, materi, penilaian, angka ambang batas…"
          value={kueri}
          onChange={(e) => setKueri(e.target.value)}
          aria-label="Saring subtes"
        />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)} aria-label="Platform">
          <option value="">Semua platform</option>
          {daftarPlatform.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status data">
          <option value="">Semua status</option>
          <option value="terkonfirmasi">Terkonfirmasi</option>
          <option value="indikasi">Indikasi</option>
          <option value="coming_soon">Belum ada data</option>
        </select>
        <select value={urut} onChange={(e) => setUrut(e.target.value as Urut)} aria-label="Urutkan">
          <option value="bawaan">Urutan asli</option>
          <option value="subtes">Nama subtes</option>
          <option value="soal">Jumlah soal</option>
          <option value="waktu">Waktu</option>
          <option value="contoh">Contoh soal</option>
        </select>
        <label className="saring-centang">
          <input
            type="checkbox"
            checked={hanyaBerisi}
            onChange={(e) => setHanyaBerisi(e.target.checked)}
          />
          Punya contoh soal
        </label>
        {adaSaringan && (
          <button
            type="button"
            className="saring-hapus"
            onClick={() => {
              setKueri('');
              setPlatform('');
              setStatus('');
              setHanyaBerisi(false);
            }}
          >
            Bersihkan
          </button>
        )}
      </div>

      <div className="saring-hasil">
        <span className="kartu-kecil">
          {tersaring.length} dari {baris.length} subtes
          {adaSaringan ? ' cocok dengan saringan' : ''}.
        </span>
        {adaSaringan && (
          <button type="button" className="saring-salin" onClick={salinTautan}>
            {tersalin ? 'Tautan tersalin ✓' : 'Salin tautan saringan ini'}
          </button>
        )}
      </div>

      {tersaring.length === 0 ? (
        <div className="kosong">
          <b>Tidak ada yang cocok</b>
          Coba kata yang lebih pendek, atau bersihkan saringannya.
        </div>
      ) : (
        <div className="tabel-bungkus">
          <table className="tabel-banding">
            <thead>
              <tr>
                <th>Subtes</th>
                <th>Platform</th>
                <th>Tahapan</th>
                <th className="angka">Soal</th>
                <th className="angka">Waktu</th>
                <th className="angka">Contoh</th>
                <th>Penilaian</th>
              </tr>
            </thead>
            <tbody>
              {tersaring.map((b) => {
                const di = bersama.get(rapikan(b.subtes))?.size ?? 1;
                return (
                  <tr key={b.ke}>
                    <td>
                      <a href={b.ke}>
                        <b>{b.subtes}</b>
                      </a>
                      {di > 1 && (
                        <span className="lencana lencana-kuning banding-bersama">
                          {di} platform
                        </span>
                      )}
                      {b.materi && <div className="kartu-kecil">{b.materi}</div>}
                    </td>
                    <td>
                      <span className="banding-platform">
                        {b.logo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img className="logo logo-mini" src={`/${b.logo}`} alt="" aria-hidden />
                        )}
                        {b.platform}
                      </span>
                      <div className="kartu-kecil">
                        {b.tes} {b.angkatan}
                      </div>
                    </td>
                    <td>
                      <span
                        className={LABEL_STATUS[b.status].kelas}
                        title={`${LABEL_STATUS[b.status].arti} ${LABEL_STATUS[b.status].boleh}`}
                      >
                        {LABEL_STATUS[b.status].teks}
                      </span>
                      <div className="kartu-kecil">{b.tahapan}</div>
                    </td>
                    <td className="angka" data-label="Soal">{b.jumlahSoal ?? '—'}</td>
                    <td className="angka" data-label="Waktu">{waktuTeks(b.waktuMenit)}</td>
                    <td className="angka" data-label="Contoh">
                      {b.contoh ? (
                        <span className="lencana lencana-hijau">{b.contoh}</span>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="banding-penilaian">{b.penilaian || '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
