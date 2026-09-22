import { LABEL_STATUS, type StatusData } from '@/lib/skema';

export function Status({ nilai }: { nilai: StatusData }) {
  const s = LABEL_STATUS[nilai] ?? LABEL_STATUS.terkonfirmasi;
  return <span className={s.kelas}>{s.teks}</span>;
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

export function Kosong({ teks }: { teks: string }) {
  return <p className="kosong">{teks}</p>;
}

export function Waktu({ menit }: { menit?: number }) {
  if (menit === undefined) return <>—</>;
  const utuh = Math.floor(menit);
  const detik = Math.round((menit - utuh) * 60);
  return <>{detik ? `${utuh} menit ${detik} detik` : `${utuh} menit`}</>;
}
