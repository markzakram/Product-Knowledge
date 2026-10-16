import { LABEL_STATUS, type StatusData } from '@/lib/skema';

export function Status({ nilai }: { nilai: StatusData }) {
  const s = LABEL_STATUS[nilai] ?? LABEL_STATUS.terkonfirmasi;
  // title untuk desktop (muncul saat disorot). Di layar sentuh tidak ada
  // sorot, jadi halaman yang memuat status tidak-pasti juga memasang
  // LegendaStatus di bawah.
  return (
    <span className={s.kelas} title={`${s.arti} ${s.boleh}`}>
      {s.teks}
    </span>
  );
}

/**
 * Keterangan arti status, dalam bentuk tulisan.
 *
 * Hanya tampil kalau halamannya memang memuat status yang tidak pasti. Di
 * halaman yang seluruhnya terkonfirmasi, legenda ini cuma jadi derau.
 */
export function LegendaStatus({ ada }: { ada: StatusData[] }) {
  const unik = [...new Set(ada)];
  if (!unik.some((s) => s !== 'terkonfirmasi')) return null;
  const urutan: StatusData[] = ['terkonfirmasi', 'indikasi', 'coming_soon'];
  return (
    <div className="legenda" role="note" aria-label="Arti status data">
      <div className="label-mini">Arti status</div>
      <dl>
        {urutan
          .filter((s) => unik.includes(s))
          .map((s) => (
            <div key={s}>
              <dt>
                <span className={LABEL_STATUS[s].kelas}>{LABEL_STATUS[s].teks}</span>
              </dt>
              <dd>
                {LABEL_STATUS[s].arti} <b>{LABEL_STATUS[s].boleh}</b>
              </dd>
            </div>
          ))}
      </dl>
    </div>
  );
}

export function Remah({ jejak }: { jejak: { teks: string; ke?: string }[] }) {
  return (
    <div className="remah">
      {jejak.map((j, i) => (
        <span key={i}>
          {i > 0 && <span aria-hidden> › </span>}
          {j.ke ? <a href={j.ke}>{j.teks}</a> : j.teks}
        </span>
      ))}
    </div>
  );
}

/**
 * Keadaan kosong.
 *
 * Banyak halaman memang belum terisi. Diberi bentuk supaya terbaca sebagai
 * "memang belum ada", bukan seperti halaman yang gagal memuat. `sebab`
 * dipakai kalau alasannya diketahui — itu jauh lebih menolong daripada
 * sekadar mengatakan tidak ada.
 */
export function Kosong({ teks, sebab }: { teks: string; sebab?: string }) {
  return (
    <div className="kosong">
      <b>{teks}</b>
      {sebab}
    </div>
  );
}

/**
 * Ikon garis kecil yang mewarisi warna teks.
 *
 * Dekoratif: selalu disembunyikan dari pembaca layar, jadi tombol atau tautan
 * yang memakainya tetap harus punya teks sendiri. Digambar sebagai SVG
 * sebaris, bukan font ikon atau pustaka, karena jumlahnya hanya segelintir.
 */
const GAMBAR_IKON = {
  panah: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  kanan: <path d="m9 6 6 6-6 6" />,
  cetak: (
    <>
      <path d="M7 9V3h10v6" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M7 14h10v7H7z" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01" />
      <path d="M11 12h1v5h1" />
    </>
  ),
  putar: <path d="M7 5v14l11-7z" />,
  kiri: (
    <>
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </>
  ),
  bawah: <path d="m6 9 6 6 6-6" />,
  tutup: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  jam: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2" />
      <path d="M9 2h6" />
    </>
  ),
  bendera: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 4 2 4H5" />
    </>
  ),
  naik: (
    <>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </>
  ),
};

export function Ikon({ nama, ukuran = 18 }: { nama: keyof typeof GAMBAR_IKON; ukuran?: number }) {
  return (
    <svg
      className="ikon"
      width={ukuran}
      height={ukuran}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {GAMBAR_IKON[nama]}
    </svg>
  );
}

/**
 * Pembungkus tabel yang bisa digulir mendatar.
 *
 * Di layar sempit tabel digulir di dalam wadahnya, dan kolom yang terpotong
 * tak kelihatan sampai orang mencoba menggeser. Petunjuk di atasnya tampil
 * hanya bila wadah memang lebih sempit dari tabel; itu diputuskan CSS lewat
 * container query (lihat .tabel-kotak), tanpa JS dan tanpa mengukur apa pun.
 */
export function TabelGulir({ kelas, children }: { kelas?: string; children: React.ReactNode }) {
  return (
    <div className="tabel-kotak">
      <p className="tabel-petunjuk" aria-hidden>
        Geser tabel untuk kolom lain
      </p>
      <div className={kelas ? `tabel-bungkus ${kelas}` : 'tabel-bungkus'}>{children}</div>
    </div>
  );
}

export function Waktu({ menit }: { menit?: number }) {
  if (menit === undefined) return <>—</>;
  const utuh = Math.floor(menit);
  const detik = Math.round((menit - utuh) * 60);
  return <>{detik ? `${utuh}′ ${detik}″` : `${utuh} menit`}</>;
}
