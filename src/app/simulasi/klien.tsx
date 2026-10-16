'use client';

import { useEffect, useId, useMemo, useReducer, useRef, useState, type ReactNode } from 'react';
import { daftarKunci, LABEL_STATUS } from '@/lib/skema';
import {
  bentukJawaban, dapatDinilai, formatDurasi, formatJam, formatMenit, jumlahSoalSubtes, ketukKategori,
  ketukPilihan, LABEL_TIPE, nilai, opsiFigural, pilihanSoal, ratakan, ringkas, statusJawab,
  tandaTangan,
  type BagianSim, type Butir, type Penilaian, type PropsSimulasi, type Ringkasan, type SoalSim,
  type SubtesSim,
} from '@/lib/simulasi';
import { Fokus } from '../fokus';
import { IsiKaya } from '../isi-kaya';
import { Ikon, Kosong, Remah, Status } from '../komponen';

/**
 * Mode simulasi tes: layar awal, layar ujian, dan layar hasil di satu rute.
 *
 * Semua data datang sebagai props polos dari server (src/lib/rencana-simulasi.ts):
 * teks soal sudah diurai, rumus sudah dirender. Berkas ini sengaja tidak
 * mengimpor `@/lib/data` (menarik seluruh isi `data/` ke bundel browser) maupun
 * KaTeX; logika penilaiannya ada di `@/lib/simulasi`.
 *
 * Sesi (jawaban, tanda ragu, posisi, kapan tiap bagian dimulai, bagian yang selesai)
 * disimpan di sessionStorage per rute, jadi memuat ulang halaman tidak menghilangkan
 * pekerjaan. Sisa waktu SELALU dihitung dari cap waktu mulai, bukan dari detak
 * penghitung, sehingga tetap benar setelah muat ulang atau tab yang lama di latar.
 */

const AWALAN_SIMPAN = 'pk-simulasi';
const SEMENIT = 60_000;
/** Di bawah ini penghitung berganti ke warna peringatan. */
const AMBANG_PERINGATAN_MS = 5 * SEMENIT;

// ─── Sesi ────────────────────────────────────────────────────────────────

type Fase = 'awal' | 'jalan' | 'hasil';

interface Waktu {
  /** Kapan bagian dimulai (ms sejak epoch); kosong bila belum. */
  mulai?: number;
  /** Kapan bagian berakhir; kosong bila belum selesai. */
  selesai?: number;
  /** Berakhir karena waktu habis, bukan karena Selesai. */
  habis?: true;
}

interface Sesi {
  fase: Fase;
  /** Bagian yang sedang dikerjakan. */
  aktif: number;
  /** Posisi soal di bagian aktif. */
  pos: number;
  jawaban: Record<string, string[]>;
  ragu: Record<string, true>;
  waktu: Waktu[];
}

type Aksi =
  | { jenis: 'pulih'; sesi: Sesi }
  | { jenis: 'mulai'; sekarang: number }
  | { jenis: 'jawab'; id: string; nilai: string[] }
  | { jenis: 'ragu'; id: string }
  | { jenis: 'pos'; pos: number }
  | { jenis: 'selesai'; bagian: number; sekarang: number; habis: boolean; batasMs?: number }
  | { jenis: 'ulang' };

const batasMs = (b: BagianSim) => (b.menit === undefined ? undefined : Math.round(b.menit * SEMENIT));

const sesiAwal = (n: number): Sesi => ({
  fase: 'awal', aktif: 0, pos: 0, jawaban: {}, ragu: {}, waktu: Array.from({ length: n }, () => ({})),
});

/**
 * Menutup bagian aktif lalu membuka bagian berikutnya, atau pindah ke hasil bila
 * itu bagian terakhir. Waktu habis menutupnya tepat di batasnya (bukan saat
 * terdeteksi, yang bisa jauh lebih lambat bila tab tak aktif), tapi bagian
 * berikutnya mulai dari sekarang: orang tak boleh kehilangan jatah bagian
 * berikutnya karena halamannya sedang tertutup.
 */
function akhiriBagian(s: Sesi, sekarang: number, habis: boolean, batas?: number): Sesi {
  const waktu = s.waktu.map((w) => ({ ...w }));
  const w = waktu[s.aktif];
  w.selesai = habis && batas !== undefined && w.mulai !== undefined ? Math.min(sekarang, w.mulai + batas) : sekarang;
  if (habis) w.habis = true;
  const berikut = s.aktif + 1;
  if (berikut < waktu.length) {
    waktu[berikut].mulai = sekarang;
    return { ...s, aktif: berikut, pos: 0, waktu };
  }
  return { ...s, fase: 'hasil', waktu };
}

function reduce(s: Sesi, a: Aksi, idBagian: Map<string, number>): Sesi {
  switch (a.jenis) {
    case 'pulih':
      return a.sesi;
    case 'ulang':
      return sesiAwal(s.waktu.length);
    case 'mulai': {
      if (s.fase !== 'awal' || s.waktu.length === 0) return s;
      const waktu = s.waktu.map(() => ({}) as Waktu);
      waktu[0].mulai = a.sekarang;
      return { ...s, fase: 'jalan', aktif: 0, pos: 0, jawaban: {}, ragu: {}, waktu };
    }
    case 'jawab': {
      // Hanya soal di bagian yang sedang berjalan; bagian yang sudah selesai terkunci.
      if (s.fase !== 'jalan' || idBagian.get(a.id) !== s.aktif) return s;
      const jawaban = { ...s.jawaban };
      if (a.nilai.length === 0 || a.nilai.every((t) => t === '')) delete jawaban[a.id];
      else jawaban[a.id] = a.nilai;
      return { ...s, jawaban };
    }
    case 'ragu': {
      if (s.fase !== 'jalan' || idBagian.get(a.id) !== s.aktif) return s;
      const ragu = { ...s.ragu };
      if (ragu[a.id]) delete ragu[a.id];
      else ragu[a.id] = true;
      return { ...s, ragu };
    }
    case 'pos':
      return s.fase === 'jalan' ? { ...s, pos: a.pos } : s;
    case 'selesai':
      // Detak penghitung bisa memanggil ini berkali-kali; hanya yang pertama berlaku.
      return s.fase === 'jalan' && s.aktif === a.bagian ? akhiriBagian(s, a.sekarang, a.habis, a.batasMs) : s;
  }
}

// ─── Penyimpanan sesi ────────────────────────────────────────────────────

const angka = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) ? x : undefined);
const daftarTeks = (x: unknown) => (Array.isArray(x) && x.every((t) => typeof t === 'string') ? (x as string[]) : null);
const objek = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x);

/**
 * Membaca sesi tersimpan. Dibuang (dan dihapus) bila bentuknya tak sah atau tanda
 * tangannya beda dengan rencana sekarang: data berubah sesudah sesi disimpan, jadi
 * jawaban lama tak boleh dinilai dengan kunci yang baru.
 */
function baca(kunci: string, ttd: string, jumlahBagian: number): Sesi | null {
  try {
    const mentah = sessionStorage.getItem(kunci);
    if (!mentah) return null;
    const d: unknown = JSON.parse(mentah);
    if (
      !objek(d) || d.v !== 1 || d.ttd !== ttd || (d.fase !== 'jalan' && d.fase !== 'hasil') ||
      !Array.isArray(d.waktu) || d.waktu.length !== jumlahBagian ||
      !Number.isInteger(d.aktif) || (d.aktif as number) < 0 || (d.aktif as number) >= jumlahBagian ||
      !Number.isInteger(d.pos) || (d.pos as number) < 0 || !objek(d.jawaban) || !objek(d.ragu)
    ) {
      sessionStorage.removeItem(kunci);
      return null;
    }
    const waktu: Waktu[] = d.waktu.map((w: unknown) => {
      const o = objek(w) ? w : {};
      return { mulai: angka(o.mulai), selesai: angka(o.selesai), ...(o.habis ? { habis: true as const } : {}) };
    });
    if (d.fase === 'jalan' && waktu[d.aktif as number].mulai === undefined) {
      sessionStorage.removeItem(kunci);
      return null;
    }
    const jawaban: Record<string, string[]> = {};
    for (const [id, v] of Object.entries(d.jawaban)) {
      const t = daftarTeks(v);
      if (t) jawaban[id] = t;
    }
    const ragu: Record<string, true> = {};
    for (const [id, v] of Object.entries(d.ragu)) if (v) ragu[id] = true;
    return { fase: d.fase, aktif: d.aktif as number, pos: d.pos as number, jawaban, ragu, waktu };
  } catch {
    return null;
  }
}

function simpan(kunci: string, ttd: string, s: Sesi) {
  try {
    if (s.fase === 'awal') sessionStorage.removeItem(kunci);
    else sessionStorage.setItem(kunci, JSON.stringify({ v: 1, ttd, ...s }));
  } catch {
    /* sessionStorage bisa diblokir atau penuh; simulasi tetap jalan, hanya tak tahan muat ulang. */
  }
}

// ─── Hitungan kecil ──────────────────────────────────────────────────────

const jumlahSoalBagian = (b: BagianSim) => b.subtes.reduce((n, s) => n + jumlahSoalSubtes(s), 0);
const jumlahDraf = (b: BagianSim) =>
  b.subtes.reduce((n, s) => n + s.kelompok.reduce((m, k) => m + k.soal.filter((q) => q.status === 'draft').length, 0), 0);
/** Batas waktu satu bagian untuk dibaca orang; tanpa batas = stopwatch. Format durasinya satu-satunya: `formatDurasi`. */
const batasTeks = (menit?: number) => (menit === undefined ? 'tanpa batas waktu' : formatMenit(menit));
const sebut = (n: number, kata: string) => `${n} ${kata}`;

/** Lama pengerjaan satu bagian; tak pernah melebihi batasnya (jam yang jalan setelah habis tak dihitung). */
function terpakaiMs(w: Waktu, batas?: number) {
  if (w.mulai === undefined) return 0;
  const t = Math.max(0, (w.selesai ?? w.mulai) - w.mulai);
  return batas === undefined ? t : Math.min(t, batas);
}

function pesanHabis(bagian: BagianSim[], i: number) {
  const berikut = bagian[i + 1];
  return `Waktu ${bagian[i].judul} habis. Jawaban bagian itu dikunci${
    berikut ? `, dan simulasi lanjut ke ${berikut.judul}.` : '; simulasi selesai.'
  }`;
}

// ─── Komponen utama ──────────────────────────────────────────────────────

export function Simulasi(props: PropsSimulasi) {
  const { bagian, jalur } = props;
  const butirBagian = useMemo(() => ratakan(bagian), [bagian]);
  const idBagian = useMemo(() => {
    const peta = new Map<string, number>();
    butirBagian.forEach((daftar, i) => daftar.forEach((b) => peta.set(b.id, i)));
    return peta;
  }, [butirBagian]);
  const ttd = useMemo(() => tandaTangan(bagian), [bagian]);
  const kunciSimpan = `${AWALAN_SIMPAN}:${jalur}`;

  const [sesi, kirim] = useReducer((s: Sesi, a: Aksi) => reduce(s, a, idBagian), bagian.length, sesiAwal);
  // Server tak bisa membaca sessionStorage. Sampai sesi tersimpan dibaca (`siap`), yang
  // tampil hanya kerangka, BUKAN layar awal: muat ulang di tengah ujian tak boleh
  // menampilkan layar awal sekejap lalu melompat. Ketukan sebelum hidrasi pun tak
  // mengenai apa pun, jadi tak bisa menimpa sesi yang akan dipulihkan.
  const [siap, setSiap] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    const tersimpan = baca(kunciSimpan, ttd, bagian.length);
    if (tersimpan) {
      let baru = tersimpan;
      // Bagian yang waktunya habis selagi halaman tertutup ditutup sekarang juga.
      if (baru.fase === 'jalan') {
        const batas = batasMs(bagian[baru.aktif]);
        const mulai = baru.waktu[baru.aktif].mulai;
        const sekarang = Date.now();
        if (batas !== undefined && mulai !== undefined && sekarang - mulai >= batas) {
          setInfo(pesanHabis(bagian, baru.aktif));
          baru = akhiriBagian(baru, sekarang, true, batas);
        }
      }
      kirim({ jenis: 'pulih', sesi: baru });
    }
    setSiap(true);
  }, [kunciSimpan, ttd, bagian]);

  useEffect(() => {
    if (siap) simpan(kunciSimpan, ttd, sesi);
  }, [siap, kunciSimpan, ttd, sesi]);

  // Layar berganti isi (soal, bagian, hasil) tanpa pindah halaman: kembali ke atas. Pindah
  // fase atau bagian, termasuk sesi yang baru dipulihkan, juga memindahkan fokus ke isi
  // barunya (#sim-fokus: soal yang aktif atau judul hasil); tombol yang tadi difokuskan
  // sudah hilang dan fokus akan jatuh ke <body>. Render pertama (kerangka) dilewati.
  const dulu = useRef<string | null>(null);
  useEffect(() => {
    const kini = `${sesi.fase}.${sesi.aktif}.${sesi.pos}`;
    const sebelum = dulu.current;
    dulu.current = kini;
    if (sebelum === null || sebelum === kini) return;
    window.scrollTo({ top: 0 });
    if (sebelum.split('.').slice(0, 2).join('.') !== kini.split('.').slice(0, 2).join('.')) {
      document.getElementById('sim-fokus')?.focus({ preventScroll: true });
    }
  }, [sesi.fase, sesi.aktif, sesi.pos]);

  if (bagian.length === 0) {
    return <Kosong teks="Belum ada soal untuk disimulasikan" sebab="Subtes ini belum punya contoh soal yang bisa dikerjakan." />;
  }
  if (!siap) return <Memuat nama={props.nama} />;
  const ulangi = () => {
    setInfo(null);
    kirim({ jenis: 'ulang' });
  };
  if (sesi.fase === 'jalan') {
    return <Ujian props={props} sesi={sesi} kirim={kirim} butir={butirBagian} info={info} setInfo={setInfo} onUlang={ulangi} />;
  }
  if (sesi.fase === 'hasil') {
    return <Hasil props={props} sesi={sesi} butir={butirBagian} info={info} setInfo={setInfo} onUlang={ulangi} />;
  }
  return <Awal props={props} onMulai={() => kirim({ jenis: 'mulai', sekarang: Date.now() })} />;
}

/** Kerangka selama sesi tersimpan dibaca; sebentar saja, lalu layar awal, ujian, atau hasil. */
function Memuat({ nama }: { nama: string }) {
  return (
    <div className="sim sim-memuat" role="status" aria-live="polite">
      <p className="kartu-kecil">Memuat simulasi {nama}…</p>
    </div>
  );
}

// ─── Layar awal ──────────────────────────────────────────────────────────

function Awal({ props, onMulai }: { props: PropsSimulasi; onMulai: () => void }) {
  const { bagian, dilewati, status, judul, nama } = props;
  const label = LABEL_STATUS[status];
  const totalSoal = bagian.reduce((n, b) => n + jumlahSoalBagian(b), 0);
  const totalMenit = bagian.reduce((n, b) => n + (b.menit ?? 0), 0);
  const tanpaBatas = bagian.filter((b) => b.menit === undefined).length;
  const totalDraf = bagian.reduce((n, b) => n + jumlahDraf(b), 0);
  const dikunci = status === 'coming_soon';

  return (
    <div className="sim sim-awal">
      <Remah jejak={props.jejak} />
      <section className="ang-kepala">
        <div className="ang-kepala-teks">
          <div className="ang-judul">
            <h1>Simulasi {nama}</h1>
            <Status nilai={status} />
          </div>
          {/* Rute angkatan: judulnya sudah di h1. Rute subtes: tunjukkan angkatan dan tahapannya. */}
          {props.mode === 'subtes' && <p className="ang-meta">{judul} · {bagian[0].tahap}</p>}
          <p className="ang-ringkasan">
            Kerjakan seperti ujian sungguhan: waktu berjalan, soal dikerjakan satu per satu, dan skor serta
            pembahasan muncul setelah selesai. Ini latihan dari contoh soal, bukan skor resmi.
          </p>
        </div>
      </section>

      {/* Isi `arti` dan `boleh` apa adanya dari LABEL_STATUS, seperti di halaman angkatan:
          simulasi dari data yang belum pasti tak boleh dibaca sebagai kepastian. */}
      {status !== 'terkonfirmasi' && (
        <div className={`banner ${status === 'indikasi' ? 'banner-kuning' : 'banner-abu'}`} role="note">
          <Ikon nama="info" />
          <span>
            <b>{label.teks}:</b> {label.arti} {label.boleh}
          </span>
        </div>
      )}

      <div className="sim-awal-tata">
        <div className="sim-awal-utama">
          <div className="bagian-kepala">
            <h2>Bagian simulasi</h2>
            <span className="bagian-ket">
              {sebut(totalSoal, 'soal')} · {totalMenit > 0 ? formatMenit(totalMenit) : 'tanpa batas waktu'}
              {totalMenit > 0 && tanpaBatas > 0 ? ` + ${tanpaBatas} bagian tanpa batas` : ''}
            </span>
          </div>
          <ol className="sim-bagian-daftar">
            {bagian.map((b) => {
              const n = jumlahSoalBagian(b);
              const draf = jumlahDraf(b);
              return (
                <li key={b.id} className="sim-bagian-butir">
                  <span className="chip-kode" title={b.judul}>{b.chip}</span>
                  <div className="sim-bagian-teks">
                    <b>{b.judul}</b>
                    <span className="kartu-kecil">{b.tahap}</span>
                    {b.menit === undefined && (
                      <span className="kartu-kecil">
                        Waktu resmi belum tercatat, jadi tanpa batas waktu: stopwatch berjalan naik.
                      </span>
                    )}
                    {b.subtes.length > 1 && (
                      <ul className="sim-bagian-sub">
                        {b.subtes.map((s) => (
                          <li key={s.kode}>
                            {s.nama} · {sebut(jumlahSoalSubtes(s), 'soal')}
                            {s.parsial && s.jumlahSoal !== undefined && (
                              <span className="kartu-kecil"> (parsial, dari {s.jumlahSoal})</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="sim-bagian-meta">
                    <span>{sebut(n, 'soal')} · {batasTeks(b.menit)}</span>
                    {b.satuSesi && (
                      <span className="kartu-kecil">
                        {props.mode === 'subtes' ? 'porsi dari waktu sesi' : 'satu sesi untuk semua subtes'}
                      </span>
                    )}
                    {b.subtes.length === 1 && b.subtes[0].parsial && (
                      <span className="lencana lencana-kuning" title="Contoh soal yang ada lebih sedikit dari jumlah soal sebenarnya, jadi seluruhnya dipakai dan waktunya disesuaikan.">
                        Parsial{b.subtes[0].jumlahSoal !== undefined ? ` · dari ${b.subtes[0].jumlahSoal}` : ''}
                      </span>
                    )}
                    {draf > 0 && <span className="lencana lencana-abu">{draf} draf</span>}
                  </div>
                </li>
              );
            })}
          </ol>

          {dilewati.length > 0 && (
            <div className="panel sim-dilewati">
              <div className="label-mini">Tidak ikut simulasi</div>
              <ul className="daftar">
                {dilewati.map((d, i) => (
                  <li key={i}>
                    {d.nama} <span className="kartu-kecil">— {d.alasan}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="sim-awal-aksi">
            {dikunci ? (
              <p className="kartu-kecil">Belum ada data untuk disimulasikan.</p>
            ) : (
              <button type="button" className="aksi aksi-utama" onClick={onMulai}>
                <Ikon nama="putar" ukuran={16} />
                Mulai simulasi
              </button>
            )}
            <a className="aksi aksi-garis" href={props.kembali.href}>
              {props.kembali.teks}
            </a>
          </div>
        </div>

        <aside className="samping" aria-label="Aturan simulasi">
          <section className="samping-kartu sim-aturan">
            <h2 className="samping-judul">Cara kerja</h2>
            <ul className="daftar">
              <li>Waktu mulai berjalan saat kamu menekan Mulai, dan dihitung dari jam perangkat: tetap benar setelah halaman dimuat ulang.</li>
              <li>Di dalam satu bagian kamu bebas pindah soal. Bagian yang sudah selesai tidak bisa dibuka lagi.</li>
              <li>Saat waktu habis, jawaban bagian itu dikunci dan simulasi lanjut ke bagian berikutnya.</li>
              {tanpaBatas > 0 && (
                <li>
                  Bagian tanpa batas waktu memakai stopwatch (waktu naik, tidak habis) karena waktu resmi
                  tesnya belum tercatat di data.
                </li>
              )}
              <li>Jawaban tersimpan di tab ini sampai ditutup.</li>
              <li>Pintasan: A sampai E memilih jawaban, panah kiri dan kanan pindah soal, R menandai ragu-ragu.</li>
              <li>Soal berskala (misalnya TKP) dan soal tanpa jawaban benar tidak dinilai.</li>
              {totalDraf > 0 && <li>{sebut(totalDraf, 'soal')} berstatus draf (belum direview); skornya ikut menghitung soal itu.</li>}
            </ul>
          </section>
        </aside>
      </div>

    </div>
  );
}

// ─── Penghitung waktu ────────────────────────────────────────────────────

/** Detik tersisa (dibulatkan ke atas, supaya 00:00 hanya muncul saat benar-benar habis), atau detik berjalan bila tak ada batas. */
const hitungDetik = (mulai: number, batas?: number) => {
  const lewat = Date.now() - mulai;
  return batas === undefined ? Math.floor(lewat / 1000) : Math.max(0, Math.ceil((batas - lewat) / 1000));
};

/**
 * Sisa waktu (atau waktu berjalan, bila bagian tak dibatasi) dari cap waktu mulai.
 * Detak hanya memicu penggambaran ulang; angkanya selalu dihitung dari jam, jadi
 * detak yang tertahan di tab latar tak membuatnya meleset. Habis waktu dilaporkan
 * lewat `onHabis`, yang boleh terpanggil berkali-kali (reducer hanya menerima yang pertama).
 */
function Penghitung({ mulai, batas, onHabis }: { mulai: number; batas?: number; onHabis: () => void }) {
  const [detik, setDetik] = useState(() => hitungDetik(mulai, batas));
  const habisRef = useRef(onHabis);
  useEffect(() => {
    habisRef.current = onHabis;
  });

  useEffect(() => {
    const detak = () => {
      setDetik(hitungDetik(mulai, batas));
      if (batas !== undefined && Date.now() - mulai >= batas) habisRef.current();
    };
    detak();
    const jam = setInterval(detak, 250);
    document.addEventListener('visibilitychange', detak);
    return () => {
      clearInterval(jam);
      document.removeEventListener('visibilitychange', detak);
    };
  }, [mulai, batas]);

  const terbatas = batas !== undefined;
  const mendesak = terbatas && detik * 1000 < AMBANG_PERINGATAN_MS;
  // Pembaca layar diberi tahu di dua ambang saja; menyuarakan tiap detik tak berguna.
  const pesan = detik === 300 ? 'Sisa waktu 5 menit' : detik === 60 ? 'Sisa waktu 1 menit' : '';

  return (
    <>
      <span
        className={`sim-timer${mendesak ? ' sim-timer-desak' : ''}${terbatas ? '' : ' sim-timer-stopwatch'}`}
        role="timer"
        aria-label={terbatas ? 'Sisa waktu, menghitung mundur' : 'Waktu berjalan, menghitung naik dari nol'}
      >
        <span className="sim-timer-jam">
          <Ikon nama="jam" ukuran={18} />
        </span>
        {/* Stopwatch di ponsel: teks "berjalan" disembunyikan karena sempit, jadi angkanya
            diberi panah naik (menggantikan ikon jam). Tanpa penanda, "00:05" terbaca seperti
            hitung mundur yang macet. */}
        {!terbatas && (
          <span className="sim-timer-naik" aria-hidden>
            <Ikon nama="naik" ukuran={13} />
          </span>
        )}
        <span className="sim-timer-angka">{formatJam(detik)}</span>
        <span className="sim-timer-ket">{terbatas ? 'tersisa' : 'berjalan'}</span>
      </span>
      <span className="sr-saja" role="status" aria-live="polite">
        {pesan}
      </span>
    </>
  );
}

// ─── Dialog ──────────────────────────────────────────────────────────────

/**
 * Dialog modal memakai <dialog> bawaan: fokus terkurung, Esc menutup, dan fokus
 * kembali ke pemicunya, semuanya dari peramban. Isinya baru dirender saat terbuka.
 * Dialog tak punya padding sendiri: ketukan di luar kotak isi sampai ke elemen
 * <dialog> itu sendiri, dan itulah yang dibaca sebagai "tutup".
 */
function Dialog({
  buka, onTutup, kelas, labelId, children,
}: { buka: boolean; onTutup: () => void; kelas: string; labelId: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    // Peramban tanpa <dialog> modal (iOS sebelum 15.4) tak boleh menjatuhkan seluruh halaman:
    // dialognya dibuka biasa, tanpa kurungan fokus.
    if (buka && !d.open) {
      if (typeof d.showModal === 'function') d.showModal();
      else d.setAttribute('open', '');
    } else if (!buka && d.open) {
      if (typeof d.close === 'function') d.close();
      else d.removeAttribute('open');
    }
  }, [buka]);
  return (
    <dialog
      ref={ref}
      className={kelas}
      aria-labelledby={labelId}
      onClose={onTutup}
      onClick={(e) => {
        if (e.target === ref.current) onTutup();
      }}
    >
      {buka ? children : null}
    </dialog>
  );
}

function Pemberitahuan({ teks, onTutup }: { teks: string; onTutup: () => void }) {
  // Tutup otomatis setelah beberapa detik. Lewat ref supaya penggambaran ulang induknya
  // (tiap ketikan di isian) tak mengulang hitungan mundurnya.
  const tutupRef = useRef(onTutup);
  useEffect(() => {
    tutupRef.current = onTutup;
  });
  useEffect(() => {
    const t = setTimeout(() => tutupRef.current(), 12_000);
    return () => clearTimeout(t);
  }, [teks]);
  return (
    <div className="sim-info" role="status">
      <Ikon nama="info" />
      <span>{teks}</span>
      <button type="button" className="sim-info-tutup" onClick={onTutup} aria-label="Tutup pemberitahuan">
        <Ikon nama="tutup" ukuran={16} />
      </button>
    </div>
  );
}

// ─── Layar ujian ─────────────────────────────────────────────────────────

function Ujian({
  props, sesi, kirim, butir, info, setInfo, onUlang,
}: {
  props: PropsSimulasi;
  sesi: Sesi;
  kirim: (a: Aksi) => void;
  butir: Butir[][];
  info: string | null;
  setInfo: (t: string | null) => void;
  onUlang: () => void;
}) {
  const { bagian } = props;
  const b = bagian[sesi.aktif];
  const daftar = butir[sesi.aktif];
  const pos = Math.max(0, Math.min(sesi.pos, daftar.length - 1));
  const ini = daftar[pos];
  const batas = batasMs(b);
  const mulai = sesi.waktu[sesi.aktif].mulai ?? 0;
  const adaBerikut = sesi.aktif + 1 < bagian.length;
  const terakhirDiBagian = pos === daftar.length - 1;
  const raguIni = !!sesi.ragu[ini.id];
  const jawabIni = sesi.jawaban[ini.id];

  const [lembar, setLembar] = useState(false);
  const [konfirmasi, setKonfirmasi] = useState(false);
  const [ulang, setUlang] = useState(false);
  const idKonfirmasi = useId();
  const idUlang = useId();
  const idLembar = useId();
  const idSoal = useId();

  // Letak subtes soal ini di bagian, dan jumlah soalnya (nomor mulai ulang di tiap subtes).
  const subtesAwal = daftar[0].subtes;
  const subtesIni = b.subtes[ini.subtes - subtesAwal];
  const jumlahDiSubtes = daftar.filter((x) => x.subtes === ini.subtes).length;

  const statusBagian = daftar.map((x) => statusJawab(x.soal, sesi.jawaban[x.id]));
  const dijawab = statusBagian.filter((s) => s !== 'kosong').length;
  const kosong = statusBagian.filter((s) => s === 'kosong').length;
  const sebagian = statusBagian.filter((s) => s === 'sebagian').length;
  const persen = Math.round((dijawab / daftar.length) * 100);

  const pindah = (p: number) => kirim({ jenis: 'pos', pos: Math.max(0, Math.min(daftar.length - 1, p)) });
  const jawab = (v: string[]) => kirim({ jenis: 'jawab', id: ini.id, nilai: v });
  const togelRagu = () => kirim({ jenis: 'ragu', id: ini.id });

  function akhiri(habis: boolean) {
    setKonfirmasi(false);
    setLembar(false);
    kirim({ jenis: 'selesai', bagian: sesi.aktif, sekarang: Date.now(), habis, batasMs: batas });
    if (habis) setInfo(pesanHabis(bagian, sesi.aktif));
    else setInfo(adaBerikut ? `${b.judul} selesai. Sekarang ${bagian[sesi.aktif + 1].judul}.` : null);
  }
  // Mengakhiri bagian tak bisa dibatalkan, jadi soal yang belum terisi dikonfirmasi dulu.
  const mintaSelesai = () => (kosong + sebagian > 0 ? setKonfirmasi(true) : akhiri(false));

  // Pintasan papan ketik. Pendengarnya dipasang sekali; yang dijalankan selalu versi terbaru.
  const tekanRef = useRef<(e: KeyboardEvent) => void>(() => {});
  useEffect(() => {
    tekanRef.current = (e) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      // Sedang mengetik di isian, atau ada dialog terbuka: tombol milik yang lain.
      const el = document.activeElement;
      if (
        el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement ||
        (el instanceof HTMLElement && el.isContentEditable) || document.querySelector('dialog[open]')
      ) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        pindah(pos + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        pindah(pos - 1);
      } else if (e.key === 'r' || e.key === 'R') {
        if (!e.repeat) togelRagu();
      } else if (/^[a-eA-E]$/.test(e.key) && !e.repeat) {
        const bentuk = bentukJawaban(ini.soal);
        if (bentuk !== 'pilih' && bentuk !== 'centang') return;
        const huruf = pilihanSoal(ini.soal);
        const ditekan = e.key.toUpperCase();
        let h = huruf.find((x) => x.toUpperCase() === ditekan);
        // Label bukan huruf (misalnya STS, TS, N, S, SS): A sampai E berarti urutan opsinya.
        if (!h && !huruf.some((x) => /^[A-E]$/i.test(x))) h = huruf[ditekan.charCodeAt(0) - 65];
        if (h) jawab(ketukPilihan(ini.soal, jawabIni, h));
      }
    };
  });
  useEffect(() => {
    const f = (e: KeyboardEvent) => tekanRef.current(e);
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  }, []);

  const panel = (
    <>
      <PanelNomor b={b} daftar={daftar} sesi={sesi} pos={pos} onPilih={(p) => { pindah(p); setLembar(false); }} />
      <PanelUrutan props={props} sesi={sesi} butir={butir} />
    </>
  );
  // Keluar menyimpan sesinya (waktu tetap berjalan); mulai ulang membuangnya. Tanpa yang kedua,
  // orang yang berhenti di tengah dan kembali lagi hanya bisa melanjutkan sesi lama.
  const aksiLain = (
    <div className="sim-lain">
      <a className="sim-keluar-teks" href={props.kembali.href}>
        Keluar simulasi
      </a>
      <button type="button" className="sim-ulang-teks" onClick={() => { setLembar(false); setUlang(true); }}>
        Mulai ulang
      </button>
    </div>
  );

  return (
    <div className="sim sim-jalan">
      <Fokus />
      <h1 className="sr-saja">Simulasi {props.nama}</h1>
      <header className="sim-bar">
        <div className="sim-bar-isi">
          <a className="sim-keluar" href={props.kembali.href} aria-label="Keluar dari simulasi">
            <Ikon nama="tutup" ukuran={22} />
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sim-mark" src="/logo/pk-mark.png" alt="" aria-hidden />
          <div className="sim-judul">
            <div className="sim-judul-atas">Simulasi · {props.judul}</div>
            <div className="sim-judul-nama">{b.judul}</div>
            <button
              type="button"
              className="sim-nomor-ponsel"
              onClick={() => setLembar(true)}
              aria-haspopup="dialog"
              aria-label={`Soal ${ini.nomor} dari ${jumlahDiSubtes}. Buka daftar nomor soal`}
            >
              <span className="sim-nomor-penuh">Soal {ini.nomor} dari {jumlahDiSubtes}</span>
              <span className="sim-nomor-ringkas" aria-hidden>Soal {ini.nomor}/{jumlahDiSubtes}</span>
              <Ikon nama="bawah" ukuran={16} />
            </button>
          </div>
          <div className="sim-progres">
            <div className="sim-progres-teks">
              <span>Soal {ini.nomor} dari {jumlahDiSubtes}</span>
              <span>Dijawab {dijawab} dari {daftar.length}</span>
            </div>
            <div className="sim-batang" role="progressbar" aria-label="Soal terjawab" aria-valuemin={0} aria-valuemax={daftar.length} aria-valuenow={dijawab}>
              <div className="sim-batang-isi" style={{ width: `${persen}%` }} />
            </div>
          </div>
          <div className="sim-bar-aksi">
            <Penghitung
              key={`${sesi.aktif}-${mulai}`}
              mulai={mulai}
              batas={batas}
              onHabis={() => akhiri(true)}
            />
            <button type="button" className="aksi aksi-garis sim-selesai" onClick={mintaSelesai}>
              Selesai
            </button>
          </div>
        </div>
        <div className="sim-batang-tipis" role="progressbar" aria-label="Soal terjawab" aria-valuemin={0} aria-valuemax={daftar.length} aria-valuenow={dijawab}>
          <div className="sim-batang-isi" style={{ width: `${persen}%` }} />
        </div>
      </header>

      {info && <Pemberitahuan teks={info} onTutup={() => setInfo(null)} />}

      <main className="sim-utama">
        <div className="sim-kolom">
          <SoalLayar
            key={ini.id}
            butir={ini}
            subtes={b.subtes.length > 1 ? subtesIni : undefined}
            jawaban={jawabIni}
            ragu={raguIni}
            onJawab={jawab}
            idSoal={idSoal}
          />
          <div className="sim-aksi">
            <button type="button" className="aksi aksi-garis sim-sebelumnya" onClick={() => pindah(pos - 1)} disabled={pos === 0} aria-label="Soal sebelumnya">
              <Ikon nama="kiri" />
              <span className="sim-teks-lebar">Sebelumnya</span>
            </button>
            {/* Tanpa aria-pressed: teksnya sendiri sudah berganti (Tandai / Batal), dan label yang
                berubah bersama status tekan dibaca pembaca layar sebagai kebalikannya. */}
            <button type="button" className={`aksi aksi-garis sim-ragu${raguIni ? ' sim-ragu-aktif' : ''}`} onClick={togelRagu}>
              <Ikon nama="bendera" ukuran={17} />
              <span className="sim-teks-lebar">{raguIni ? 'Batal ragu-ragu' : 'Tandai ragu-ragu'}</span>
              <span className="sim-teks-sempit">Ragu-ragu</span>
            </button>
            <span className="sim-spasi" />
            {terakhirDiBagian ? (
              <button type="button" className="aksi aksi-utama sim-lanjut" onClick={mintaSelesai}>
                {adaBerikut ? 'Selesai bagian' : 'Lihat hasil'}
              </button>
            ) : (
              <button type="button" className="aksi aksi-utama sim-lanjut" onClick={() => pindah(pos + 1)}>
                Berikutnya
                <Ikon nama="panah" />
              </button>
            )}
          </div>
        </div>
        <aside className="sim-samping" aria-label="Navigasi soal">
          {panel}
          {aksiLain}
        </aside>
      </main>

      <div className="sr-saja" role="status" aria-live="polite">
        Soal {ini.nomor} dari {jumlahDiSubtes}
        {raguIni ? ', ragu-ragu' : ''}
      </div>

      {/* Daftar nomor di ponsel: lembar dari bawah, bukan kolom samping. */}
      <Dialog buka={lembar} onTutup={() => setLembar(false)} kelas="sim-lembar" labelId={idLembar}>
        <div className="sim-lembar-isi">
          <div className="sim-lembar-kepala">
            <h2 id={idLembar}>Daftar soal</h2>
            <button type="button" className="aksi aksi-garis" onClick={() => setLembar(false)}>
              Tutup
            </button>
          </div>
          {panel}
          {aksiLain}
        </div>
      </Dialog>

      <Dialog buka={ulang} onTutup={() => setUlang(false)} kelas="sim-dialog" labelId={idUlang}>
        <div className="sim-dialog-isi">
          <h2 id={idUlang}>Mulai ulang dari awal?</h2>
          <p>
            Semua jawaban dan waktu yang sudah berjalan <b>dihapus</b>, dan simulasi kembali ke layar awal.
            Kalau hanya ingin berhenti sebentar, pilih Keluar simulasi: sesinya tersimpan di tab ini.
          </p>
          <div className="sim-dialog-aksi">
            <button type="button" className="aksi aksi-garis" onClick={() => setUlang(false)} autoFocus>
              Batal
            </button>
            <button type="button" className="aksi aksi-utama" onClick={onUlang}>
              Mulai ulang
            </button>
          </div>
        </div>
      </Dialog>

      <Dialog buka={konfirmasi} onTutup={() => setKonfirmasi(false)} kelas="sim-dialog" labelId={idKonfirmasi}>
        <div className="sim-dialog-isi">
          <h2 id={idKonfirmasi}>{adaBerikut ? `Akhiri ${b.judul}?` : 'Akhiri simulasi?'}</h2>
          <p>
            {kosong > 0 && <>Masih ada <b>{sebut(kosong, 'soal')}</b> yang belum dijawab. </>}
            {sebagian > 0 && <><b>{sebut(sebagian, 'soal')}</b> baru dijawab sebagian. </>}
            Setelah diakhiri, jawaban bagian ini tidak bisa diubah dan bagiannya tidak bisa dibuka lagi.
          </p>
          <div className="sim-dialog-aksi">
            <button type="button" className="aksi aksi-garis" onClick={() => setKonfirmasi(false)} autoFocus>
              Lanjut mengerjakan
            </button>
            <button type="button" className="aksi aksi-utama" onClick={() => akhiri(false)}>
              {adaBerikut ? 'Akhiri bagian' : 'Akhiri dan lihat hasil'}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

/** Kotak nomor bagian aktif, dikelompokkan per subtes bila satu bagian memuat beberapa subtes. */
function PanelNomor({
  b, daftar, sesi, pos, onPilih,
}: { b: BagianSim; daftar: Butir[]; sesi: Sesi; pos: number; onPilih: (p: number) => void }) {
  const awal = daftar[0].subtes;
  const grup = b.subtes.map((s, k) => ({
    s,
    isi: daftar.map((x, p) => ({ x, p })).filter(({ x }) => x.subtes === awal + k),
  }));
  return (
    <section className="sim-panel" aria-label="Nomor soal">
      <div className="sim-panel-kepala">
        <h2>Nomor soal</h2>
        <span>{b.chip} · {sebut(daftar.length, 'soal')}</span>
      </div>
      {grup.map(({ s, isi }) => (
        <div key={s.kode} className="sim-grup">
          {b.subtes.length > 1 && (
            <div className="sim-grup-label">
              <span className="chip-kode">{s.chip}</span> {s.nama}
            </div>
          )}
          <div className="sim-grid">
            {isi.map(({ x, p }) => {
              const st = statusJawab(x.soal, sesi.jawaban[x.id]);
              const ragu = !!sesi.ragu[x.id];
              const kelas = ragu ? 'sim-no-ragu' : st === 'kosong' ? 'sim-no-kosong' : 'sim-no-jawab';
              const nama = ragu ? 'ragu-ragu' : st === 'penuh' ? 'dijawab' : st === 'sebagian' ? 'dijawab sebagian' : 'belum dijawab';
              return (
                <button
                  key={x.id}
                  type="button"
                  className={`sim-no ${kelas}${p === pos ? ' sim-no-ini' : ''}`}
                  aria-label={`Soal ${x.nomor}${b.subtes.length > 1 ? ` ${s.nama}` : ''}, ${nama}${p === pos ? ', sedang dibuka' : ''}`}
                  aria-current={p === pos ? 'true' : undefined}
                  onClick={() => onPilih(p)}
                >
                  {x.nomor}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="sim-legenda">
        <span><i className="sim-contoh sim-no-jawab" />Dijawab</span>
        <span><i className="sim-contoh sim-no-ragu" />Ragu-ragu</span>
        <span><i className="sim-contoh sim-no-kosong" />Belum</span>
      </div>
    </section>
  );
}

/** Urutan bagian simulasi dan posisinya sekarang. */
function PanelUrutan({ props, sesi, butir }: { props: PropsSimulasi; sesi: Sesi; butir: Butir[][] }) {
  return (
    <section className="sim-panel" aria-label="Urutan bagian">
      <h2 className="sim-panel-judul">{props.mode === 'angkatan' ? 'Urutan bagian' : 'Subtes'}</h2>
      <ol className="sim-urutan">
        {props.bagian.map((x, i) => {
          const keadaan = i < sesi.aktif ? 'Selesai' : i === sesi.aktif ? 'Sedang' : 'Belum';
          return (
            <li key={x.id} className="sim-urutan-butir" aria-current={i === sesi.aktif ? 'step' : undefined}>
              <span className="chip-kode" title={x.judul}>{x.chip}</span>
              <span className="sim-urutan-teks">
                {x.judul}
                <span className="kartu-kecil">{sebut(butir[i].length, 'soal')} · {batasTeks(x.menit)}</span>
              </span>
              <span className={`sim-urutan-status sim-urutan-${keadaan.toLowerCase()}`}>{keadaan}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

// ─── Satu soal di layar ujian ────────────────────────────────────────────

function Lencana({ status }: { status?: string }) {
  return status === 'draft' ? (
    <span className="lencana lencana-abu" title="Soal ini masih draf: belum direview tim akademik.">Draf</span>
  ) : null;
}

function SoalLayar({
  butir, subtes, jawaban, ragu, onJawab, idSoal,
}: {
  butir: Butir;
  subtes?: { chip: string; nama: string };
  jawaban?: string[];
  ragu: boolean;
  onJawab: (v: string[]) => void;
  idSoal: string;
}) {
  const { soal, kelompok } = butir;
  const bentuk = bentukJawaban(soal);
  const stimulus = kelompok.stimulus;
  const adaStimulus = !!stimulus && !!(stimulus.isi?.length || stimulus.gambar || stimulus.judul);

  return (
    <article className="sim-kartu" id="sim-fokus" tabIndex={-1} aria-labelledby={idSoal}>
      <div className="sim-kartu-kepala">
        <span className="sim-kartu-no" id={idSoal}>Soal {butir.nomor}</span>
        {subtes && <span className="chip-kode" title={subtes.nama}>{subtes.chip}</span>}
        <span className="lencana lencana-aksen">{LABEL_TIPE[soal.tipe] ?? soal.tipe}</span>
        {soal.tanpaKunci && <span className="lencana lencana-abu">Tanpa jawaban benar</span>}
        <Lencana status={soal.status} />
        {ragu && <span className="lencana lencana-kuning">Ragu-ragu</span>}
      </div>

      {/* Stimulus kelompok tampil bersama tiap soalnya, supaya soal tak pernah terbaca tanpa bahannya. */}
      {adaStimulus && stimulus && (
        <div className="stimulus">
          <div className="stimulus-label">Stimulus{stimulus.judul ? ` · ${stimulus.judul}` : ''}</div>
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
      )}

      <div className="pra sim-pertanyaan">
        <IsiKaya bagian={soal.pertanyaan} />
      </div>
      {soal.gambar && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${butir.nomor}`} />
      )}

      {bentuk === 'kategori' ? (
        <JawabKategori soal={soal} jawaban={jawaban} onJawab={onJawab} />
      ) : bentuk === 'isian' ? (
        <JawabIsian soal={soal} jawaban={jawaban} onJawab={onJawab} />
      ) : (
        <Pilihan soal={soal} jawaban={jawaban} banyak={bentuk === 'centang'} onJawab={onJawab} />
      )}
    </article>
  );
}

/** Pilihan ganda, benar/salah, berskala (satu pilihan), dan PG kompleks (centang banyak). */
function Pilihan({
  soal, jawaban, banyak, onJawab,
}: { soal: SoalSim; jawaban?: string[]; banyak: boolean; onJawab: (v: string[]) => void }) {
  const huruf = pilihanSoal(soal);
  const dipilih = new Set((jawaban ?? []).map((h) => h.toUpperCase()));
  const adaIsi = !!soal.opsi?.length;
  const figural = opsiFigural(soal.opsi);

  return (
    <>
      {banyak && <p className="sim-petunjuk">Pilih semua jawaban yang benar.</p>}
      {!adaIsi && <p className="sim-petunjuk">Pilihan jawaban ada pada gambar soal.</p>}
      <div
        role="group"
        aria-label={banyak ? 'Pilihan jawaban, boleh lebih dari satu' : 'Pilihan jawaban'}
        className={`sim-opsi${figural ? ' sim-opsi-figural' : ''}${adaIsi ? '' : ' sim-opsi-huruf'}${banyak ? ' sim-opsi-centang' : ''}`}
      >
        {huruf.map((h) => {
          const o = soal.opsi?.find((x) => x.label === h);
          return (
            <button
              key={h}
              type="button"
              className="sim-pilihan"
              aria-pressed={dipilih.has(h.toUpperCase())}
              onClick={() => onJawab(ketukPilihan(soal, jawaban, h))}
            >
              <span className="sim-huruf">{h}</span>
              {o && (
                <span className="sim-pilihan-isi">
                  <IsiKaya bagian={o.teks} />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}

/** PG kategori: tiap pernyataan dijawab dengan salah satu dari dua kategori. */
function JawabKategori({ soal, jawaban, onJawab }: { soal: SoalSim; jawaban?: string[]; onJawab: (v: string[]) => void }) {
  const kategori = soal.kategori ?? ['', ''];
  const opsi = soal.opsi ?? [];
  return (
    <>
      <p className="sim-petunjuk">Tentukan kategori tiap pernyataan: {kategori[0]} atau {kategori[1]}.</p>
      <div className="sim-kategori">
        {opsi.map((o, i) => (
          <div key={o.label} role="group" aria-label={`Pernyataan ${o.label}`} className="sim-baris-kat">
            <div className="sim-pernyataan">
              <span className="sim-huruf">{o.label}</span>
              <span>
                <IsiKaya bagian={o.teks} />
              </span>
            </div>
            <div className="sim-kat-pilih">
              {kategori.map((k) => (
                <button
                  key={k}
                  type="button"
                  className="sim-kat"
                  aria-pressed={jawaban?.[i] === k}
                  onClick={() => onJawab(ketukKategori(jawaban, i, opsi.length, k))}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** Isian singkat. Kunci yang berupa kalimat tak dinilai otomatis, jadi jawabannya diberi kolom yang lega. */
function JawabIsian({ soal, jawaban, onJawab }: { soal: SoalSim; jawaban?: string[]; onJawab: (v: string[]) => void }) {
  const id = useId();
  const nilaiIni = jawaban?.[0] ?? '';
  const dinilai = dapatDinilai(soal);
  const petunjuk = dinilai
    ? 'Huruf besar atau kecil dan spasi tidak dibedakan; koma dianggap titik.'
    : soal.tanpaKunci || !soal.kunci.trim()
      ? 'Soal ini tidak punya jawaban benar.'
      : 'Soal ini tidak dinilai otomatis. Kuncinya muncul di hasil untuk kamu bandingkan sendiri.';
  return (
    <div className="sim-isian">
      <label htmlFor={id} className="label-mini">Jawabanmu</label>
      {dinilai ? (
        <input
          id={id} type="text" value={nilaiIni} onChange={(e) => onJawab([e.target.value])}
          autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck={false}
        />
      ) : (
        <textarea
          id={id} rows={4} value={nilaiIni} onChange={(e) => onJawab([e.target.value])}
          autoComplete="off" autoCapitalize="none" spellCheck={false}
        />
      )}
      <p className="sim-petunjuk">{petunjuk}</p>
    </div>
  );
}

// ─── Layar hasil ─────────────────────────────────────────────────────────

interface ButirHasil {
  butir: Butir;
  jawaban?: string[];
  ragu: boolean;
  draf: boolean;
  penilaian: Penilaian;
}

type Saring = 'semua' | 'salah' | 'kosong' | 'ragu' | 'tidak-dinilai';

const SARINGAN: { nilai: Saring; teks: string }[] = [
  { nilai: 'semua', teks: 'Semua' },
  { nilai: 'salah', teks: 'Salah' },
  { nilai: 'kosong', teks: 'Tidak dijawab' },
  { nilai: 'ragu', teks: 'Ragu-ragu' },
  { nilai: 'tidak-dinilai', teks: 'Tidak dinilai' },
];

const lolos = (h: ButirHasil, s: Saring) =>
  s === 'semua' ||
  (s === 'salah' && h.penilaian.status === 'salah') ||
  (s === 'kosong' && !h.penilaian.dijawab) ||
  (s === 'ragu' && h.ragu) ||
  (s === 'tidak-dinilai' && h.penilaian.status === 'tidak-dinilai');

function Hasil({
  props, sesi, butir, info, setInfo, onUlang,
}: {
  props: PropsSimulasi;
  sesi: Sesi;
  butir: Butir[][];
  info: string | null;
  setInfo: (t: string | null) => void;
  onUlang: () => void;
}) {
  const { bagian } = props;
  const [saring, setSaring] = useState<Saring>('semua');

  const hasil = useMemo(() => {
    const semua: ButirHasil[] = butir.flat().map((b) => {
      const jawaban = sesi.jawaban[b.id];
      return { butir: b, jawaban, ragu: !!sesi.ragu[b.id], draf: b.soal.status === 'draft', penilaian: nilai(b.soal, jawaban) };
    });
    const total = ringkas(semua);
    const perBagian = bagian.map((_, i) => ringkas(semua.filter((h) => h.butir.bagian === i)));
    // Indeks subtes global dari bagian ke-i dimulai di jumlah subtes bagian sebelumnya.
    let urut = 0;
    const peta = new Map<number, SubtesSim>();
    const perSubtes = bagian.map((b) =>
      b.subtes.map((s) => {
        const indeks = urut++;
        peta.set(indeks, s);
        return ringkas(semua.filter((h) => h.butir.subtes === indeks));
      }),
    );
    return { semua, total, perBagian, perSubtes, peta };
  }, [butir, bagian, sesi.jawaban, sesi.ragu]);

  const { semua, total, perBagian, perSubtes, peta } = hasil;
  const terpakai = bagian.reduce((n, b, i) => n + terpakaiMs(sesi.waktu[i], batasMs(b)), 0);
  const adaBatas = bagian.filter((b) => b.menit !== undefined);
  const batasTotal = adaBatas.reduce((n, b) => n + (batasMs(b) ?? 0), 0);
  const habis = sesi.waktu.some((w) => w.habis);
  const tampil = semua.filter((h) => lolos(h, saring));
  const banyakSubtes = bagian.reduce((n, b) => n + b.subtes.length, 0) > 1;
  const nama = props.nama;

  const waktuTeks =
    adaBatas.length === 0
      ? `Waktu terpakai ${formatDurasi(terpakai)} (tanpa batas waktu)`
      : adaBatas.length < bagian.length
        ? `Waktu terpakai ${formatDurasi(terpakai)} (sebagian bagian tanpa batas waktu)`
        : `Waktu ${formatDurasi(terpakai)} dari ${formatDurasi(batasTotal)}`;

  return (
    <div className="sim sim-hasil">
      <Remah jejak={props.jejak.map((j, i, a) => (i === a.length - 1 ? { teks: 'Hasil simulasi' } : j))} />
      {info && <Pemberitahuan teks={info} onTutup={() => setInfo(null)} />}
      {!info && habis && (
        <div className="banner banner-kuning" role="note">
          <Ikon nama="info" />
          <span>Waktu habis di sedikitnya satu bagian; jawaban bagian itu dikunci saat waktunya habis.</span>
        </div>
      )}

      <section className="sim-hasil-atas">
        <div className="sim-hasil-teks">
          <div className="sim-hasil-label">Hasil simulasi · {nama}</div>
          <h1 id="sim-fokus" tabIndex={-1}>
            {total.dinilai === 0 ? 'Tidak ada soal yang dinilai' : `${total.benar} dari ${total.dinilai} soal dinilai benar`}
          </h1>
          <p className="sim-hasil-ringkas">
            {waktuTeks} · {sebut(total.ragu, 'soal')} ditandai ragu-ragu · {sebut(total.tidakDijawab, 'soal')} tidak dijawab
          </p>
          <div className="sim-hasil-aksi">
            {props.berikutnya && (
              <a className="aksi aksi-utama" href={props.berikutnya.href}>
                Lanjut ke {props.berikutnya.nama}
                <Ikon nama="panah" />
              </a>
            )}
            <button type="button" className="aksi aksi-garis" onClick={onUlang}>
              Ulangi {props.mode === 'subtes' ? nama : 'simulasi'}
            </button>
            <a className="aksi sim-kembali" href={props.kembali.href}>
              {props.kembali.teks}
            </a>
          </div>
        </div>

        <div className="sim-hasil-skor">
          {total.persen === null ? (
            <div className="sim-persen-kosong">Tidak ada soal yang dinilai</div>
          ) : (
            <div className="sim-persen">
              <span className="sim-persen-angka">{total.persen}%</span>
              <span className="sim-persen-ket">jawaban benar</span>
            </div>
          )}
          <Proporsi r={total} />
          <p className="sim-catatan">
            Persentase benar untuk latihan, bukan skor resmi {props.judul}.
            {total.draf > 0 && ` Skor memuat ${sebut(total.draf, 'soal')} draf (belum direview).`}
            {total.tidakDinilai > 0 &&
              ` ${sebut(total.tidakDinilai, 'soal')} tidak dinilai (berskala, tanpa jawaban benar, atau kuncinya berupa kalimat).`}
          </p>
        </div>
      </section>

      <div className="sim-hasil-tata">
        <div className="sim-hasil-utama">
          <div className="sim-hasil-judul">
            <h2>Pembahasan</h2>
            <div role="group" aria-label="Saring soal" className="sim-saring">
              {SARINGAN.map((s) => {
                const n = s.nilai === 'semua' ? semua.length : semua.filter((h) => lolos(h, s.nilai)).length;
                return (
                  <button key={s.nilai} type="button" className="sim-saring-tombol" aria-pressed={saring === s.nilai} onClick={() => setSaring(s.nilai)}>
                    {s.teks} · {n}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="sim-hasil-daftar">
            {tampil.length === 0 ? (
              <Kosong teks="Tidak ada soal di saringan ini" sebab="Pilih saringan lain untuk melihat soal." />
            ) : (
              tampil.map((h) => (
                <KartuHasil key={h.butir.id} h={h} subtes={banyakSubtes ? peta.get(h.butir.subtes) : undefined} />
              ))
            )}
          </div>
        </div>

        <aside className="sim-hasil-samping" aria-label="Rincian per subtes">
          <section className="sim-panel">
            <h2 className="sim-panel-judul">Rincian per subtes</h2>
            {bagian.map((b, i) => (
              <div key={b.id} className="sim-rinci-bagian">
                {(bagian.length > 1 || b.subtes.length > 1) && (
                  <div className="sim-rinci-kepala">
                    <b>{b.judul}</b>
                    <span className="kartu-kecil">
                      {formatDurasi(terpakaiMs(sesi.waktu[i], batasMs(b)))}
                      {b.menit !== undefined ? ` dari ${formatDurasi(batasMs(b) ?? 0)}` : ''}
                      {sesi.waktu[i].habis ? ' · waktu habis' : ''}
                    </span>
                  </div>
                )}
                {b.subtes.map((s, k) => {
                  const r = perSubtes[i][k];
                  return (
                    <div key={s.kode} className="sim-rinci">
                      <div className="sim-rinci-baris">
                        <span className="sim-rinci-nama">
                          <span className="chip-kode" title={s.nama}>{s.chip}</span> {s.nama}
                        </span>
                        <span className="kartu-kecil">
                          {r.dinilai === 0 ? 'tidak dinilai' : `${r.benar} dari ${r.dinilai}`}
                        </span>
                      </div>
                      <div className="sim-bar-rinci" aria-hidden>
                        <div className="sim-bar-rinci-isi" style={{ width: `${r.persen ?? 0}%` }} />
                      </div>
                      <div className="sim-rinci-ket kartu-kecil">
                        {sebut(r.total, 'soal')}
                        {r.tidakDijawab > 0 ? ` · ${r.tidakDijawab} tidak dijawab` : ''}
                        {r.ragu > 0 ? ` · ${r.ragu} ragu-ragu` : ''}
                        {s.parsial && s.jumlahSoal !== undefined ? ` · parsial, dari ${s.jumlahSoal}` : ''}
                      </div>
                    </div>
                  );
                })}
                {bagian.length > 1 && b.subtes.length > 1 && (
                  <div className="sim-rinci-jumlah kartu-kecil">
                    Bagian ini: {perBagian[i].dinilai === 0 ? 'tidak ada soal dinilai' : `${perBagian[i].benar} dari ${perBagian[i].dinilai} benar`}
                  </div>
                )}
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}

/**
 * Batang proporsi hasil, dibagi menurut PENILAIAN: benar, salah, kosong di antara soal yang
 * dinilai, dan tidak dinilai (cakupan sama dengan saringan "Tidak dinilai"). Kata "tidak
 * dijawab" sengaja tidak dipakai di sini: di ringkasan, saringan, dan kartu soal ia berarti
 * SEMUA soal tanpa jawaban, termasuk yang tak dinilai, sedangkan batang ini hanya
 * menghitung yang dinilai.
 */
function Proporsi({ r }: { r: Ringkasan }) {
  const bagian = [
    { kelas: 'sim-seg-benar', n: r.benar, teks: 'Benar' },
    { kelas: 'sim-seg-salah', n: r.salah, teks: 'Salah' },
    { kelas: 'sim-seg-kosong', n: r.kosong, teks: 'Kosong (soal dinilai)' },
    { kelas: 'sim-seg-tdk', n: r.tidakDinilai, teks: 'Tidak dinilai' },
  ];
  const ringkasan = bagian.map((x) => `${x.teks} ${x.n}`).join(', ');
  return (
    <>
      <div className="sim-proporsi" role="img" aria-label={ringkasan}>
        {bagian.filter((x) => x.n > 0).map((x) => (
          <span key={x.kelas} className={x.kelas} style={{ flexGrow: x.n }} />
        ))}
      </div>
      <div className="sim-proporsi-ket">
        {bagian.map((x) => (
          <span key={x.kelas}>
            <i className={`sim-contoh ${x.kelas}`} />
            {x.teks} {x.n}
          </span>
        ))}
      </div>
    </>
  );
}

const LABEL_NILAI: Record<Penilaian['status'], { teks: string; kelas: string }> = {
  benar: { teks: 'Benar', kelas: 'lencana lencana-hijau' },
  salah: { teks: 'Salah', kelas: 'lencana lencana-merah' },
  kosong: { teks: 'Tidak dijawab', kelas: 'lencana lencana-abu' },
  'tidak-dinilai': { teks: 'Tidak dinilai', kelas: 'lencana lencana-abu' },
};

/** Satu soal di daftar hasil: status, jawabanmu dan kunci, lalu (dibuka) opsi, rincian, dan pembahasan. */
function KartuHasil({ h, subtes }: { h: ButirHasil; subtes?: { chip: string; nama: string } }) {
  const [buka, setBuka] = useState(false);
  const idIsi = useId();
  const { butir, jawaban, penilaian, ragu, draf } = h;
  const { soal, kelompok } = butir;
  const bentuk = bentukJawaban(soal);
  const label = LABEL_NILAI[penilaian.status];
  const stimulus = kelompok.stimulus;
  const adaStimulus = !!stimulus && !!(stimulus.isi?.length || stimulus.gambar || stimulus.judul);

  const kunci = daftarKunci(soal).map((k) => k.toUpperCase());
  const dipilih = new Set((jawaban ?? []).filter(Boolean).map((x) => x.toUpperCase()));
  const berskala = soal.tipe === 'skala';
  const adaKunci = !soal.tanpaKunci && !!soal.kunci.trim();
  const huruf = jawaban?.filter(Boolean).join(', ') ?? '';

  let jawabTeks: ReactNode = huruf || '—';
  let kunciTeks: ReactNode = null;
  if (bentuk === 'kategori') {
    const benar = penilaian.rincian?.filter((r) => r.benar).length ?? 0;
    jawabTeks = `${benar} dari ${penilaian.rincian?.length ?? 0} pernyataan benar`;
  } else if (bentuk === 'isian') {
    jawabTeks = jawaban?.[0]?.trim() || '—';
    if (adaKunci) kunciTeks = soal.kunciTampil ? <IsiKaya bagian={soal.kunciTampil} /> : soal.kunci;
  } else if (adaKunci) {
    kunciTeks = soal.kunci;
  }

  const kelasKartu = `sim-hasil-soal sim-hasil-${penilaian.status}`;
  return (
    <article className={kelasKartu}>
      <div className="sim-hasil-soal-isi">
        <span className="sim-lingkar" aria-hidden>{butir.nomor}</span>
        <div className="sim-hasil-soal-badan">
          <div className="sim-hasil-soal-baris">
            <span className="sr-saja">Soal {butir.nomor}</span>
            <span className={label.kelas}>{label.teks}</span>
            {/* "Tidak dijawab" berarti sama di seluruh layar ini (ringkasan, saringan, kartu):
                soal tanpa jawaban, dinilai atau tidak. Soal tak dinilai yang kosong
                mendapat kedua lencana, supaya kartunya cocok dengan saringannya. */}
            {penilaian.status === 'tidak-dinilai' && !penilaian.dijawab && (
              <span className="lencana lencana-abu">Tidak dijawab</span>
            )}
            {ragu && <span className="lencana lencana-kuning">Ragu-ragu</span>}
            {draf && <span className="lencana lencana-abu" title="Soal ini masih draf: belum direview tim akademik.">Draf</span>}
            {subtes && <span className="chip-kode" title={subtes.nama}>{subtes.chip}</span>}
            <span className="kartu-kecil">{LABEL_TIPE[soal.tipe] ?? soal.tipe}</span>
            {/* Nomor di layar mengikuti urutan soal terpilih; nomor data dipakai untuk melacak
                soalnya di berkas data saat melaporkan salah ketik. */}
            <span className="kartu-kecil" title="Nomor soal ini di berkas data">No. {soal.nomor} di data</span>
          </div>
          <div className="pra sim-hasil-tanya">
            <IsiKaya bagian={soal.pertanyaan} />
          </div>
          <div className="sim-hasil-jawab">
            Jawabanmu <b>{jawabTeks}</b>
            {kunciTeks !== null && (
              <>
                {' · '}
                {berskala ? 'Skor tertinggi' : 'Kunci'} <b>{kunciTeks}</b>
              </>
            )}
            {penilaian.status === 'tidak-dinilai' && bentuk === 'isian' && adaKunci && (
              <div className="kartu-kecil">Bandingkan sendiri dengan kunci di atas.</div>
            )}
          </div>
          <button type="button" className="sim-lihat" aria-expanded={buka} aria-controls={idIsi} onClick={() => setBuka(!buka)}>
            {buka ? 'Tutup pembahasan' : 'Lihat pembahasan'}
            <Ikon nama="bawah" ukuran={16} />
          </button>

          {buka && (
            <div className="sim-bahas" id={idIsi}>
              {adaStimulus && stimulus && (
                <div className="stimulus sim-bahas-stimulus">
                  <div className="stimulus-label">Stimulus{stimulus.judul ? ` · ${stimulus.judul}` : ''}</div>
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
              )}
              {soal.gambar && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${butir.nomor}`} />
              )}

              {bentuk === 'kategori' && penilaian.rincian ? (
                <ul className="sim-opsi-hasil">
                  {(soal.opsi ?? []).map((o, i) => {
                    const r = penilaian.rincian?.[i];
                    return (
                      <li key={o.label} className={r?.benar ? 'sim-benar' : 'sim-salah'}>
                        <span className="sim-huruf">{o.label}</span>
                        <span className="sim-opsi-hasil-isi">
                          <IsiKaya bagian={o.teks} />
                          <span className="sim-opsi-hasil-ket">
                            Jawabanmu <b>{r?.jawab || '—'}</b> · Kunci <b>{r?.kunci || '—'}</b>
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                (bentuk === 'pilih' || bentuk === 'centang') &&
                !!soal.opsi?.length && (
                  <ul className="sim-opsi-hasil">
                    {soal.opsi.map((o) => {
                      const key = !soal.tanpaKunci && kunci.includes(o.label.toUpperCase());
                      const pilih = dipilih.has(o.label.toUpperCase());
                      const kelas = key ? 'sim-benar' : pilih && penilaian.status !== 'tidak-dinilai' ? 'sim-salah' : pilih ? 'sim-dipilih' : undefined;
                      return (
                        <li key={o.label} className={kelas}>
                          <span className="sim-huruf">{o.label}</span>
                          <span className="sim-opsi-hasil-isi">
                            <IsiKaya bagian={o.teks} />
                          </span>
                          <span className="sim-opsi-hasil-tanda">
                            {pilih && 'Jawabanmu'}
                            {pilih && key && ' · '}
                            {key && (berskala ? 'Skor tertinggi' : 'Kunci')}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )
              )}

              <div className="pembahasan">
                {soal.pembahasan.length > 0 ? (
                  <>
                    <div className="pembahasan-label">{soal.tanpaKunci ? 'Cara penilaian' : 'Pembahasan'}</div>
                    <p className="pra">
                      <IsiKaya bagian={soal.pembahasan} />
                    </p>
                  </>
                ) : (
                  <span className="lencana lencana-merah">Pembahasan belum diisi</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
