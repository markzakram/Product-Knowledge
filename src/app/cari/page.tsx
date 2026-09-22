import { cari } from '@/lib/cari';
import { Kosong } from '../komponen';

const LABEL: Record<string, string> = {
  platform: 'Platform', tes: 'Tes', angkatan: 'Angkatan', tahapan: 'Tahapan',
  subtes: 'Subtes', materi: 'Materi', soal: 'Contoh soal', info: 'Info seleksi',
};

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
        <p className="pengantar">
          Ketik di kotak pencarian di atas. Yang dicari: nama platform, tes,
          angkatan, tahapan, subtes, materi, isi informasi seleksi, serta
          pertanyaan, opsi, dan pembahasan contoh soal.
        </p>
      ) : (
        <p className="pengantar">
          {hasil.length} hasil untuk <b>{kueri}</b>.
        </p>
      )}

      {kueri && hasil.length === 0 && (
        <Kosong teks="Tidak ada yang cocok. Coba kata yang lebih pendek, atau satu kata saja." />
      )}

      {hasil.map((h, i) => (
        <a key={i} href={h.ke} className="kartu" style={{ marginTop: 10 }}>
          <div className="soal-kepala" style={{ marginBottom: 4 }}>
            <span className="lencana lencana-aksen">{LABEL[h.jenis] ?? h.jenis}</span>
            <span className="kartu-judul" style={{ marginBottom: 0 }}>
              {h.judul}
            </span>
          </div>
          <div className="kartu-kecil">{h.konteks}</div>
          {h.cuplikan && (
            <div className="kartu-kecil" style={{ marginTop: 4 }}>
              {h.cuplikan}
            </div>
          )}
        </a>
      ))}
    </>
  );
}
