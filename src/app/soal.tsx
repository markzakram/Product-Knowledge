import type { Kelompok, Soal } from '@/lib/skema';

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

function KartuSoal({ soal }: { soal: Soal }) {
  const kunci = soal.kunci.trim().toUpperCase();
  const opsi = soal.opsi ?? [];
  // Soal berskala tidak punya "jawaban benar" tunggal; kuncinya adalah opsi
  // berskor tertinggi. Labelnya dibedakan supaya tidak salah dibaca.
  const berskala = soal.tipe === 'skala';

  return (
    <article className="soal">
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
          {soal.pertanyaan}
        </p>

        {soal.gambar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="gambar-soal" src={`/${soal.gambar}`} alt={`Gambar soal ${soal.nomor}`} />
        )}

        {opsi.length > 0 ? (
          <ul className="opsi">
            {opsi.map((o) => {
              const ini = o.label === kunci;
              return (
                <li key={o.label} className={ini ? 'benar' : undefined}>
                  <span className="opsi-label">{o.label}</span>
                  <span>{o.teks}</span>
                  {ini && (
                    <span className="tanda-kunci">{berskala ? 'SKOR TERTINGGI' : 'KUNCI'}</span>
                  )}
                </li>
              );
            })}
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

  if (!punyaStimulus) {
    return (
      <>
        {soal.map((s) => (
          <KartuSoal key={s.nomor} soal={s} />
        ))}
      </>
    );
  }

  return (
    <div className="kelompok">
      <div className="soal" style={{ paddingBottom: 18 }}>
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
        <div style={{ padding: '0 18px' }}>
          {soal.map((s) => (
            <KartuSoal key={s.nomor} soal={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
