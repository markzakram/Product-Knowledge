import { cari } from '@/lib/cari';
import { Kosong } from '../komponen';

const LABEL: Record<string, string> = {
  platform: 'Platform', tes: 'Tes', angkatan: 'Angkatan', tahapan: 'Tahapan',
  subtes: 'Subtes', materi: 'Materi', soal: 'Contoh soal', info: 'Info seleksi',
};

const CONTOH = ['ambang batas', 'digit simbol', 'kebanksentralan', 'psikotes', 'TOEFL', 'kesamaptaan'];

export default async function HalamanCari({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const kueri = q.trim();
  const hasil = kueri ? cari(kueri) : [];

  return (
    <>
      <h1>Pencarian</h1>
      {!kueri ? (
        <>
          <p className="pengantar">
            Cari apa saja yang tertulis di sini: nama platform, tes, tahapan,
            subtes, materi, ambang batas, aturan pengerjaan, sampai isi
            pertanyaan dan pembahasan contoh soal.
          </p>
          <div className="panel">
            <div className="label-mini">Coba ketik</div>
            <div className="chip-baris" style={{ marginTop: 4 }}>
              {CONTOH.map((c) => (
                <a key={c} className="chip" href={`/cari?q=${encodeURIComponent(c)}`}>
                  {c}
                </a>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="pengantar">
          {hasil.length} hasil untuk <b>{kueri}</b>.
        </p>
      )}

      {kueri && hasil.length === 0 && (
        <Kosong
          teks="Tidak ada yang cocok"
          sebab="Coba kata yang lebih pendek, atau satu kata saja."
        />
      )}

      {hasil.map((h, i) => (
        <a key={i} href={h.ke} className="hasil">
          <div className="hasil-kepala">
            <span className="lencana lencana-aksen">{LABEL[h.jenis] ?? h.jenis}</span>
            <span className="hasil-judul">{h.judul}</span>
            {/* Entitas yang dipakai lebih dari satu tes ditandai di sini,
                bukan ditampilkan berulang sebagai hasil terpisah. */}
            {h.dipakaiDi && (
              <span className="lencana lencana-kuning">dipakai di {h.dipakaiDi} tes</span>
            )}
            {/* Menyebut dari field mana cuplikan diambil, supaya pembaca tahu
                kenapa hasil ini muncul. */}
            <span className="hasil-asal">{h.asal}</span>
          </div>
          <div className="hasil-konteks">{h.konteks}</div>
          <p className="hasil-cuplikan">
            {h.cuplikan.map((s, n) =>
              s.sorot ? <mark key={n}>{s.teks}</mark> : <span key={n}>{s.teks}</span>,
            )}
          </p>
        </a>
      ))}
    </>
  );
}
