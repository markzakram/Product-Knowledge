import { redirect } from 'next/navigation';
import { gerbangAktif } from '@/lib/sesi';
import { Formulir } from './formulir';

export const dynamic = 'force-dynamic';

export default async function Masuk({
  searchParams,
}: {
  searchParams: Promise<{ lanjut?: string }>;
}) {
  if (!gerbangAktif()) redirect('/');
  const { lanjut = '/' } = await searchParams;

  return (
    <div className="masuk-bingkai">
      <div className="masuk-kotak">
        <h1 style={{ marginTop: 0, fontSize: 20 }}>Product Knowledge</h1>
        <p className="kartu-kecil">
          Masukkan PIN tim. Isinya berupa riset dan contoh soal internal, jadi
          jangan sebarkan tautannya ke luar perusahaan.
        </p>
        <Formulir lanjut={lanjut} />
      </div>
    </div>
  );
}
