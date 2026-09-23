'use client';

import { useEffect, useState } from 'react';
import type { Kelompok, Soal } from '@/lib/skema';
import { TeksBergambar } from './teks-bergambar';

const WARNA_REVIEW: Record<string, string> = {
  final: 'lencana lencana-hijau',
  direview: 'lencana lencana-kuning',
  draft: 'lencana lencana-abu',
};

const WARNA_TINGKAT: Record<string, string> = {
  mudah: 'lencana lencana-hijau',
  sedang: 'lencana lencana-kuning',
  sulit: 'lencana lencana-merah',
};

const LABEL_TIPE: Record<string, string> = {
  pg: 'Pilihan ganda',
  pg_kompleks: 'PG kompleks',
  isian_singkat: 'Isian singkat',
  benar_salah: 'Benar / Salah',
  skala: 'Berskala',
};

const KUNCI_SIMPAN = 'pk-latihan';

function KartuSoal({
  soal,
  latihan,
  terbuka,
  onBuka,
}: {
  soal: Soal;
  latihan: boolean;
  terbuka: boolean;
  onBuka: () => void;
}) {
  const kunci = soal.kunci.trim().toUpperCase();
  const opsi = soal.opsi ?? [];
  // Soal berskala tidak punya "jawaban benar" tunggal; kuncinya adalah opsi
  // berskor tertinggi. Labelnya dibedakan supaya tidak salah dibaca.
  const berskala = soal.tipe === 'skala';
  // Jawaban disembunyikan hanya kalau mode latihan menyala DAN soal ini
  // belum dibuka. Tiap soal dibuka sendiri-sendiri, bukan sekaligus.
  const tutup = latihan && !terbuka;

  return (
    // id dipakai tautan hasil pencarian dan berbagi satu soal
    <article className="soal" id={`soal-${soal.nomor}`}>
      <div className="soal-kepala">
        <span className="soal-nomor">SOAL {soal.nomor}</span>
        <span className="lencana lencana-aksen">{LABEL_TIPE[soal.tipe] ?? soal.tipe}</span>
        {soal.tingkat && (
          <span className={WARNA_TINGKAT[soal.tingkat] ?? 'lencana lencana-abu'}>
            {soal.tingkat}
          </span>
        )}
        {soal.status && (
          <span
            className={WARNA_REVIEW[soal.status] ?? 'lencana lencana-abu'}
            style={{ marginLeft: 'auto' }}
          >
            {soal.status}
          </span>
        )}
      </div>

      <div className="soal-badan">
        <p className="pra" style={{ fontWeight: 500 }}>
          <TeksBergambar teks={soal.pertanyaan} />
        </p>

        {soal.gambar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${soal.nomor}`} />
        )}

        {opsi.length > 0 ? (
          <ul className="opsi">
            {opsi.map((o) => {
              const ini = o.label === kunci && !tutup;
              return (
                <li key={o.label} className={ini ? 'benar' : undefined}>
                  <span className="opsi-label">{o.label}</span>
                  <span>
                    <TeksBergambar teks={o.teks} />
                  </span>
                  {ini && (
                    <span className="tanda-kunci">{berskala ? 'SKOR TERTINGGI' : 'KUNCI'}</span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="kunci-isian">
            Jawaban: <b>{tutup ? '•••' : soal.kunci || '—'}</b>
          </p>
        )}

        {tutup ? (
          <div className="pembahasan">
            <button type="button" className="tombol-buka" onClick={onBuka}>
              Lihat jawaban dan pembahasan
            </button>
          </div>
        ) : (
          <div className="pembahasan">
            {soal.pembahasan ? (
              <>
                <div className="pembahasan-label">Pembahasan</div>
                <p className="pra">
                  <TeksBergambar teks={soal.pembahasan} />
                </p>
              </>
            ) : (
              <span className="lencana lencana-merah">Pembahasan belum diisi</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function Kelompokan({
  kelompok,
  latihan,
  dibuka,
  buka,
}: {
  kelompok: Kelompok;
  latihan: boolean;
  dibuka: Set<string>;
  buka: (id: string) => void;
}) {
  const { stimulus, soal } = kelompok;
  const punyaStimulus = stimulus && (stimulus.isi || stimulus.gambar || stimulus.judul);

  const daftar = soal.map((s) => (
    <KartuSoal
      key={s.nomor}
      soal={s}
      latihan={latihan}
      terbuka={dibuka.has(String(s.nomor))}
      onBuka={() => buka(String(s.nomor))}
    />
  ));

  if (!punyaStimulus) return <>{daftar}</>;

  return (
    <div className="kelompok">
      <div className="soal" style={{ paddingBottom: 18 }}>
        <div className="stimulus">
          <div className="stimulus-label">
            Stimulus{stimulus.judul ? ` · ${stimulus.judul}` : ''}
            {soal.length > 1 && ` · dipakai ${soal.length} soal`}
          </div>
          {stimulus.isi && (
            <p className="pra">
              <TeksBergambar teks={stimulus.isi} />
            </p>
          )}
          {stimulus.gambar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="gambar-soal" src={`/${stimulus.gambar}`} alt="Gambar stimulus" />
          )}
        </div>
        <div style={{ padding: '0 18px' }}>{daftar}</div>
      </div>
    </div>
  );
}

/**
 * Daftar contoh soal dengan mode latihan.
 *
 * Datanya sudah ada; yang kurang hanya pilihan untuk tidak melihat jawabannya
 * dulu. Dengan satu sakelar, halaman ini berubah dari etalase jadi bahan
 * latihan — tanpa menambah data apa pun.
 *
 * Pilihan modenya disimpan supaya tidak perlu dinyalakan ulang tiap pindah
 * subtes; orang yang sedang berlatih biasanya melewati beberapa subtes
 * berturut-turut.
 */
export function DaftarSoal({ contoh }: { contoh: Kelompok[] }) {
  const [latihan, setLatihan] = useState(false);
  const [dibuka, setDibuka] = useState<Set<string>>(new Set());
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    try {
      setLatihan(localStorage.getItem(KUNCI_SIMPAN) === 'ya');
    } catch {
      /* localStorage bisa diblokir; biarkan mati. */
    }
    setSiap(true);
  }, []);

  function ubahMode(nyala: boolean) {
    setLatihan(nyala);
    setDibuka(new Set());
    try {
      localStorage.setItem(KUNCI_SIMPAN, nyala ? 'ya' : 'tidak');
    } catch {
      /* Tidak tersimpan, tapi tetap berlaku untuk sesi ini. */
    }
  }

  const total = contoh.reduce((n, k) => n + k.soal.length, 0);

  return (
    <>
      <div className="latihan-bar">
        <label className="saring-centang">
          <input
            type="checkbox"
            checked={siap && latihan}
            onChange={(e) => ubahMode(e.target.checked)}
          />
          Mode latihan — sembunyikan jawaban
        </label>
        {latihan && (
          <>
            <span className="kartu-kecil">
              {dibuka.size} dari {total} terbuka
            </span>
            {dibuka.size > 0 && (
              <button
                type="button"
                className="saring-hapus"
                onClick={() => setDibuka(new Set())}
              >
                Tutup semua
              </button>
            )}
          </>
        )}
      </div>

      {contoh.map((kelompok, i) => (
        <Kelompokan
          key={i}
          kelompok={kelompok}
          latihan={siap && latihan}
          dibuka={dibuka}
          buka={(id) => setDibuka((s) => new Set(s).add(id))}
        />
      ))}
    </>
  );
}
