'use client';

import { useEffect, useState } from 'react';
import type { KelompokSiap, SoalSiap } from '@/lib/bagian';
import { daftarKunci } from '@/lib/skema';
import { IsiKaya } from './isi-kaya';

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
  pg_kategori: 'PG kategori',
  isian_singkat: 'Isian singkat',
  benar_salah: 'Benar / Salah',
  skala: 'Berskala',
  uraian: 'Uraian / tugas bebas',
};

const KUNCI_SIMPAN = 'pk-latihan';

function KartuSoal({
  soal,
  latihan,
  terbuka,
  onBuka,
}: {
  soal: SoalSiap;
  latihan: boolean;
  terbuka: boolean;
  onBuka: () => void;
}) {
  const opsi = soal.opsi ?? [];
  // PG biasa punya satu huruf kunci, PG kompleks beberapa huruf. PG kategori
  // punya satu kategori per pernyataan, jadi semua barisnya ditandai.
  const kunciDaftar = daftarKunci(soal);
  const kunciHuruf = kunciDaftar.map((k) => k.toUpperCase());
  const berkategori = soal.tipe === 'pg_kategori' && kunciDaftar.length === opsi.length;
  // Soal berskala tidak punya "jawaban benar" tunggal; kuncinya adalah opsi
  // berskor tertinggi. Labelnya dibedakan supaya tidak salah dibaca.
  const berskala = soal.tipe === 'skala';
  // Tes kepribadian, uraian, dan tugas menggambar tidak punya jawaban benar:
  // tidak ada opsi yang ditandai dan tidak ada baris "Jawaban:".
  const tanpaKunci = soal.tanpaKunci === true;
  // Jawaban disembunyikan hanya kalau mode latihan menyala DAN soal ini
  // belum dibuka. Tiap soal dibuka sendiri-sendiri, bukan sekaligus.
  const tutup = latihan && !terbuka;

  return (
    // id dipakai tautan hasil pencarian dan berbagi satu soal
    <article className="soal" id={`soal-${soal.nomor}`}>
      <div className="soal-kepala">
        <span className="soal-nomor">SOAL {soal.nomor}</span>
        <span className="lencana lencana-aksen">{LABEL_TIPE[soal.tipe] ?? soal.tipe}</span>
        {tanpaKunci && <span className="lencana lencana-abu">Tanpa jawaban benar</span>}
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
          <IsiKaya bagian={soal.pertanyaan} />
        </p>

        {soal.gambar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${soal.nomor}`} />
        )}

        {soal.tipe === 'pg_kategori' && soal.kategori && (
          <p className="kartu-kecil" style={{ margin: '12px 0 0' }}>
            Tentukan kategori tiap pernyataan: {soal.kategori[0]} atau {soal.kategori[1]}.
          </p>
        )}

        {opsi.length > 0 ? (
          <ul className="opsi">
            {opsi.map((o, i) => {
              const ini =
                !tanpaKunci && !tutup && (berkategori || kunciHuruf.includes(o.label));
              return (
                <li key={o.label} className={ini ? 'benar' : undefined}>
                  <span className="opsi-label">{o.label}</span>
                  <span>
                    <IsiKaya bagian={o.teks} />
                  </span>
                  {ini && (
                    <span className="tanda-kunci">
                      {berkategori
                        ? `KUNCI: ${kunciDaftar[i].toUpperCase()}`
                        : berskala
                          ? 'SKOR TERTINGGI'
                          : 'KUNCI'}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : tanpaKunci ? null : (
          <p className="kunci-isian">
            Jawaban: <b>{tutup ? '•••' : soal.kunci || '—'}</b>
          </p>
        )}

        {tutup ? (
          <div className="pembahasan">
            <button type="button" className="tombol-buka" onClick={onBuka}>
              {tanpaKunci ? 'Lihat cara penilaian' : 'Lihat jawaban dan pembahasan'}
            </button>
          </div>
        ) : (
          <div className="pembahasan">
            {soal.pembahasan.length > 0 ? (
              <>
                <div className="pembahasan-label">{tanpaKunci ? 'Cara penilaian' : 'Pembahasan'}</div>
                <p className="pra">
                  <IsiKaya bagian={soal.pembahasan} />
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
  kelompok: KelompokSiap;
  latihan: boolean;
  dibuka: Set<string>;
  buka: (id: string) => void;
}) {
  const { stimulus, soal } = kelompok;
  const punyaStimulus = stimulus && (stimulus.isi?.length || stimulus.gambar || stimulus.judul);

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
          {stimulus.isi && stimulus.isi.length > 0 && (
            <p className="pra">
              <IsiKaya bagian={stimulus.isi} />
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
export function DaftarSoal({ contoh }: { contoh: KelompokSiap[] }) {
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
