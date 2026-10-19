import { PEMBARUAN, tanggalRilis } from '@/lib/pembaruan';

/**
 * Catatan pembaruan: tiap versi dengan tanggal dan poinnya, terbaru di atas.
 * Isinya dari src/lib/pembaruan.ts, tempat yang sama dengan nomor versi di header.
 */
export default function Pembaruan() {
  return (
    <>
      <h1>Catatan pembaruan</h1>
      <p className="pengantar">
        Apa saja yang berubah di Product Knowledge, dari rilis terbaru ke yang paling lama.
        Nomor versi di header mengikuti rilis paling atas.
      </p>

      <div className="rilis-daftar">
        {PEMBARUAN.map((r, i) => (
          <section key={r.versi} className={`rilis${i === 0 ? ' rilis-baru' : ''}`} id={`v${r.versi}`}>
            <div className="rilis-kepala">
              <h2>v{r.versi}</h2>
              {i === 0 && <span className="lencana lencana-hijau">Terbaru</span>}
              <time className="rilis-tanggal" dateTime={r.tanggal}>
                {tanggalRilis(r.tanggal)}
              </time>
            </div>
            {r.judul && <p className="rilis-judul">{r.judul}</p>}
            <ul className="daftar rilis-poin">
              {r.poin.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
