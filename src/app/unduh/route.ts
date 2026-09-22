import { NextResponse, type NextRequest } from 'next/server';
import { cariAngkatan } from '@/lib/data';
import { kurikulumDocx, mappingXlsx } from '@/lib/dokumen';

/**
 * Menghasilkan dokumen dari data, bukan dari berkas yang disimpan.
 *
 *   /unduh?jenis=kurikulum&platform=jadiasn&tes=cpns&angkatan=2026   -> .docx
 *   /unduh?jenis=mapping&...                                        -> .xlsx
 *
 * Inilah bagian yang membuat "sekali input, banyak keluaran" terbukti:
 * angkatan berikutnya tidak perlu mengetik ulang 35 halaman, cukup menyalin
 * data lalu merevisi yang berubah.
 *
 * PDF sengaja TIDAK dihasilkan di sini. Menjalankan mesin PDF di serverless
 * berarti membundel Chromium; mencetak lewat browser memberi hasil yang sama
 * baiknya dengan Ctrl+P, tanpa dependensi sebesar itu. Halaman angkatan
 * sudah disiapkan untuk cetak.
 */
const AMAN = /[^A-Za-z0-9\-_ ]+/g;

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const jenis = q.get('jenis') ?? 'kurikulum';
  const jalur = cariAngkatan(q.get('platform') ?? '', q.get('tes') ?? '', q.get('angkatan') ?? '');

  if (!jalur) {
    return NextResponse.json(
      { galat: 'Angkatan tidak ditemukan. Periksa parameter platform, tes, dan angkatan.' },
      { status: 404 },
    );
  }
  const { platform, tes, angkatan } = jalur;
  const dasar = `${tes.nama} ${angkatan.nama}`.replace(AMAN, ' ').replace(/\s+/g, ' ').trim();

  try {
    if (jenis === 'mapping') {
      const buf = await mappingXlsx(platform, tes, angkatan);
      return new NextResponse(new Uint8Array(buf), {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Content-Disposition': `attachment; filename="Mapping ${dasar}.xlsx"`,
          'Cache-Control': 'no-store',
        },
      });
    }

    const buf = await kurikulumDocx(platform, tes, angkatan);
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="Kurikulum ${dasar}.docx"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    // Kegagalan dilaporkan apa adanya, bukan mengunduh berkas rusak yang baru
    // ketahuan saat dibuka.
    return NextResponse.json(
      { galat: `Gagal membuat dokumen: ${(e as Error).message}` },
      { status: 500 },
    );
  }
}
