'use client';

import { useActionState } from 'react';
import { masuk } from './aksi';

export function Formulir({ lanjut }: { lanjut: string }) {
  const [state, aksi, menunggu] = useActionState(masuk, null);

  return (
    <form action={aksi}>
      <input type="hidden" name="lanjut" value={lanjut} />
      <label htmlFor="pin">PIN</label>
      <input id="pin" name="pin" type="password" autoFocus required />
      <button className="tombol" type="submit" disabled={menunggu}>
        {menunggu ? 'Memeriksa…' : 'Masuk'}
      </button>
      {state?.galat && <p className="galat">{state.galat}</p>}
    </form>
  );
}
