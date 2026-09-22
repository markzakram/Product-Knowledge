import type { Kelompok, Soal } from '@/lib/skema';

const WARNA_REVIEW: Record<string, string> = {
  final: 'lencana lencana-hijau',
  direview: 'lencana lencana-kuning',
  draft: 'lencana lencana-abu',
};

function KartuSoal({ soal }: { soal: Soal }) {
  const kunci = soal.kunci.trim().toUpperCase();
  const pilihan = (soal.opsi ?? []).length > 0;

  return (
    <article className="soal">
      <div className="soal-kepala">
        <span className="soal-nomor">Soal {soal.nomor}</span>
        <span className="lencana lencana-abu">{soal.tipe}</span>
        {soal.tingkat && <span className="lencana lencana-abu">{soal.tingkat}</span>}
        {soal.status && (
          <span className={WARNA_REVIEW[soal.status] ?? 'lencana lencana-abu'}>{soal.status}</span>
        )}
      </div>

      <p className="pra">{soal.pertanyaan}</p>

      {soal.gambar && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${soal.nomor}`} />
      )}

      {pilihan ? (
        <ul className="opsi">
          {soal.opsi!.map((o) => (
            <li key={o.label} className={o.label === kunci ? 'benar' : undefined}>
              <span className="opsi-label">{o.label}.</span>
              <span>{o.teks}</span>
              {o.label === kunci && (
                <span style={{ marginLeft: 'auto' }} aria-label="kunci jawaban">
                  ✓
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="kunci-isian">
          Jawaban: <b>{soal.kunci || '—'}</b>
        </p>
      )}

      <div className="pembahasan">
        {soal.pembahasan ? (
          <>
            <div className="pembahasan-label">Pembahasan</div>
            <p className="pra">{soal.pembahasan}</p>
          </>
        ) : (
          <span className="lencana lencana-merah">Pembahasan belum diisi</span>
        )}
      </div>
    </article>
  );
}

/**
 * Satu kelompok = satu stimulus dengan soal-soal yang memakainya.
 * Stimulus ditampilkan sekali di atas, bukan diulang di tiap soal.
 */
export function KartuKelompok({ kelompok }: { kelompok: Kelompok }) {
  const { stimulus, soal } = kelompok;
  const punyaStimulus = stimulus && (stimulus.isi || stimulus.gambar || stimulus.judul);

  return (
    <div className={punyaStimulus ? 'kelompok' : undefined}>
      {punyaStimulus && (
        <div className="stimulus">
          <div className="stimulus-label">
            Stimulus{stimulus.judul ? ` · ${stimulus.judul}` : ''}
            {soal.length > 1 && ` · dipakai ${soal.length} soal`}
          </div>
          {stimulus.isi && <p className="pra">{stimulus.isi}</p>}
          {stimulus.gambar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="gambar-soal" src={`/${stimulus.gambar}`} alt="Gambar stimulus" />
          )}
        </div>
      )}
      {soal.map((s) => (
        <KartuSoal key={s.nomor} soal={s} />
      ))}
    </div>
  );
}
