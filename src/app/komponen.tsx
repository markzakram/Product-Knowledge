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

export function Waktu({ menit }: { menit?: number }) {
  if (menit === undefined) return <>—</>;
  const utuh = Math.floor(menit);
  const detik = Math.round((menit - utuh) * 60);
  return <>{detik ? `${utuh}′ ${detik}″` : `${utuh} menit`}</>;
}
