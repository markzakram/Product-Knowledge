import 'server-only';
import {
  Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle,
} from 'docx';
import ExcelJS from 'exceljs';
import type { Angkatan, Platform, Tes } from './skema';
import { jumlahContoh } from './data';

const BULAN = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const LABEL_STATUS: Record<string, string> = {
  terkonfirmasi: 'Terkonfirmasi',
  indikasi: 'Indikasi — belum resmi',
  coming_soon: 'Belum ada data',
};

function waktuTeks(menit?: number) {
  if (menit === undefined) return '—';
  const utuh = Math.floor(menit);
  const detik = Math.round((menit - utuh) * 60);
  return detik ? `${utuh} menit ${detik} detik` : `${utuh} menit`;
}

/** Teks berbaris jadi beberapa paragraf; satu Paragraph per baris. */
function paragraf(teks: string, opsi: { kecil?: boolean } = {}) {
  return teks.split('\n').map(
    (b) =>
      new Paragraph({
        children: [new TextRun({ text: b, size: opsi.kecil ? 20 : 22 })],
        spacing: { after: 80 },
      }),
  );
}

function sel(teks: string, opsi: { tebal?: boolean; lebar?: number } = {}) {
  return new TableCell({
    width: opsi.lebar ? { size: opsi.lebar, type: WidthType.PERCENTAGE } : undefined,
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [
      new Paragraph({
        children: [new TextRun({ text: teks, bold: opsi.tebal, size: 20 })],
      }),
    ],
  });
}

function tabel(kepala: string[], baris: string[][], lebar?: number[]) {
  const garis = { style: BorderStyle.SINGLE, size: 1, color: 'BFBFBF' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: garis, bottom: garis, left: garis, right: garis, insideHorizontal: garis, insideVertical: garis },
    rows: [
      new TableRow({
        tableHeader: true,
        children: kepala.map((k, i) => sel(k, { tebal: true, lebar: lebar?.[i] })),
      }),
      ...baris.map((r) => new TableRow({ children: r.map((c, i) => sel(c, { lebar: lebar?.[i] })) })),
    ],
  });
}

/**
 * Kurikulum sebagai .docx.
 *
 * Susunannya mengikuti dokumen PCPM 41 yang ditulis manual, supaya hasilnya
 * langsung dikenali tim: sampul, pendahuluan, informasi seleksi, pembelajaran,
 * contoh soal, sumber.
 *
 * Yang berstatus `indikasi` dan `coming_soon` TETAP dicetak, lengkap dengan
 * penandanya. Menghilangkan bagian yang belum pasti akan membuat dokumen
 * tampak lebih rapi daripada kenyataannya — dan pembaca tidak akan tahu ada
 * yang belum diketahui.
 */
export async function kurikulumDocx(
  platform: Platform, tes: Tes, angkatan: Angkatan,
): Promise<Buffer> {
  const kini = new Date();
  const anak: (Paragraph | Table)[] = [];

  const judul = (teks: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel]) =>
    anak.push(new Paragraph({ text: teks, heading: level, spacing: { before: 240, after: 120 } }));

  // ── Sampul ────────────────────────────────────────────────────────────
  anak.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 2400, after: 200 },
      children: [new TextRun({ text: 'KURIKULUM', bold: true, size: 52 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      children: [new TextRun({ text: `${tes.nama.toUpperCase()} — ${angkatan.nama.toUpperCase()}`, bold: true, size: 40 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 1200 },
      children: [
        new TextRun({
          text: angkatan.ringkasan ?? `Disusun untuk memberikan pengetahuan dan pembelajaran mengenai ${tes.nama}.`,
          size: 22, italics: true,
        }),
      ],
    }),
    ...[platform.nama, 'PRODUCT MANAGEMENT', 'PT CEREBRUM EDUKANESIA NUSANTARA',
      `${BULAN[kini.getMonth()].toUpperCase()} ${kini.getFullYear()}`].map(
      (t) => new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: t, bold: true, size: 24 })] }),
    ),
    new Paragraph({ text: '', pageBreakBefore: true }),
  );

  // ── BAB I Pendahuluan ─────────────────────────────────────────────────
  judul('BAB I  PENDAHULUAN', HeadingLevel.HEADING_1);
  const pendahuluan = (angkatan.info ?? []).filter((i) => i.tipe === 'pendahuluan');
  if (pendahuluan.length) {
    for (const i of pendahuluan) {
      judul(i.judul, HeadingLevel.HEADING_2);
      anak.push(...paragraf(i.isi));
    }
  } else {
    anak.push(...paragraf(angkatan.ringkasan ?? 'Belum ada bagian pendahuluan di data.'));
  }
  anak.push(
    ...paragraf(
      `Status data angkatan ini: ${LABEL_STATUS[angkatan.status] ?? angkatan.status}.` +
        (angkatan.diperbarui ? ` Diperbarui ${angkatan.diperbarui}.` : ''),
    ),
  );

  // ── BAB II Informasi Seleksi ──────────────────────────────────────────
  judul('BAB II  INFORMASI SELEKSI', HeadingLevel.HEADING_1);
  judul('2.1 Tahapan Seleksi', HeadingLevel.HEADING_2);
  anak.push(
    tabel(
      ['No.', 'Tahapan', 'Mode', 'Status'],
      angkatan.tahapan.map((t, i) => [
        String(i + 1), t.nama, t.mode ?? '—', LABEL_STATUS[t.status] ?? t.status,
      ]),
      [8, 54, 16, 22],
    ),
  );
  let nomorSub = 2;
  for (const i of (angkatan.info ?? []).filter((x) => x.tipe !== 'pendahuluan')) {
    nomorSub++;
    judul(`2.${nomorSub - 1} ${i.judul}`, HeadingLevel.HEADING_2);
    anak.push(...paragraf(i.isi));
  }

  // ── BAB III Pembelajaran ──────────────────────────────────────────────
  judul('BAB III  MATERI PEMBELAJARAN', HeadingLevel.HEADING_1);
  for (const [i, tahapan] of angkatan.tahapan.entries()) {
    judul(`3.${i + 1} Tahap ${i + 1}: ${tahapan.nama}`, HeadingLevel.HEADING_2);
    if (tahapan.deskripsi) anak.push(...paragraf(tahapan.deskripsi, { kecil: true }));
    if (!tahapan.subtes.length) {
      anak.push(...paragraf('Tahapan ini belum dirinci, atau memang bukan tes tertulis.', { kecil: true }));
      continue;
    }
    anak.push(
      tabel(
        ['Subtes', 'Jumlah Soal', 'Waktu', 'Materi'],
        tahapan.subtes.map((s) => [
          s.nama,
          s.jumlahSoal === undefined ? '—' : String(s.jumlahSoal),
          waktuTeks(s.waktuMenit),
          (s.materi ?? []).map((m) => m.nama).join('; ') || '—',
        ]),
        [26, 12, 16, 46],
      ),
    );
    for (const s of tahapan.subtes) {
      if (s.formatKetentuan || s.penilaian || s.catatan) {
        anak.push(
          new Paragraph({
            spacing: { before: 120 },
            children: [new TextRun({ text: s.nama, bold: true, size: 20 })],
          }),
        );
        if (s.formatKetentuan) anak.push(...paragraf(`Format: ${s.formatKetentuan}`, { kecil: true }));
        if (s.penilaian) anak.push(...paragraf(`Penilaian: ${s.penilaian}`, { kecil: true }));
        if (s.catatan) anak.push(...paragraf(`Catatan: ${s.catatan}`, { kecil: true }));
      }
    }
  }

  // ── BAB IV Contoh Soal ────────────────────────────────────────────────
  judul('BAB IV  CONTOH SOAL', HeadingLevel.HEADING_1);
  let adaSoal = false;
  for (const [i, tahapan] of angkatan.tahapan.entries()) {
    const berisi = tahapan.subtes.filter((s) => jumlahContoh(s) > 0);
    if (!berisi.length) continue;
    adaSoal = true;
    judul(`4.${i + 1} Tahap ${i + 1}: ${tahapan.nama}`, HeadingLevel.HEADING_2);
    for (const s of berisi) {
      judul(s.nama, HeadingLevel.HEADING_3);
      for (const kel of s.contoh ?? []) {
        if (kel.stimulus?.isi) {
          anak.push(
            new Paragraph({
              spacing: { before: 120, after: 60 },
              children: [new TextRun({ text: 'Stimulus', bold: true, italics: true, size: 20 })],
            }),
            ...paragraf(kel.stimulus.isi, { kecil: true }),
          );
        }
        for (const soal of kel.soal) {
          anak.push(
            new Paragraph({
              spacing: { before: 200, after: 60 },
              children: [new TextRun({ text: `Soal ${soal.nomor}`, bold: true, size: 22 })],
            }),
            ...paragraf(soal.pertanyaan),
          );
          for (const o of soal.opsi ?? []) {
            anak.push(
              new Paragraph({
                indent: { left: 360 },
                children: [new TextRun({ text: `${o.label}. ${o.teks}`, size: 22 })],
              }),
            );
          }
          anak.push(
            new Paragraph({
              spacing: { before: 80 },
              children: [
                new TextRun({
                  text: soal.tipe === 'skala' ? `Skor tertinggi: ${soal.kunci}` : `Jawaban: ${soal.kunci}`,
                  bold: true, size: 22,
                }),
              ],
            }),
          );
          if (soal.pembahasan) {
            anak.push(
              new Paragraph({ children: [new TextRun({ text: 'Pembahasan:', bold: true, size: 22 })] }),
              ...paragraf(soal.pembahasan),
            );
          }
        }
      }
    }
  }
  if (!adaSoal) anak.push(...paragraf('Belum ada contoh soal yang dimasukkan untuk angkatan ini.'));

  // ── Sumber ────────────────────────────────────────────────────────────
  if ((angkatan.sumber ?? []).length) {
    judul('SUMBER', HeadingLevel.HEADING_1);
    anak.push(
      tabel(
        ['Judul', 'Jenis', 'Keandalan', 'Diakses'],
        angkatan.sumber!.map((s) => [s.judul, s.jenis, s.keandalan, s.tanggalAkses ?? '—']),
        [50, 16, 18, 16],
      ),
    );
  }

  const doc = new Document({ sections: [{ children: anak }] });
  return Packer.toBuffer(doc);
}

/**
 * Mapping produksi konten sebagai .xlsx, satu sheet per tahapan.
 *
 * Kolom "Kurang" ditulis sebagai FORMULA Excel, bukan angka mati, supaya
 * tetap hidup kalau tim mengubah angka di berkas hasil unduhan.
 */
export async function mappingXlsx(
  platform: Platform, tes: Tes, angkatan: Angkatan,
): Promise<Buffer> {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Product Knowledge';
  wb.created = new Date();

  const ringkas = wb.addWorksheet('Ringkasan');
  ringkas.columns = [{ width: 24 }, { width: 58 }];
  [
    ['Platform', platform.nama],
    ['Tes', tes.nama],
    ['Angkatan', `${angkatan.nama} (${angkatan.tahun})`],
    ['Status data', LABEL_STATUS[angkatan.status] ?? angkatan.status],
    ['PIC', angkatan.pic ?? '—'],
    ['Diperbarui', angkatan.diperbarui ?? '—'],
    ['Dibuat', new Date().toISOString().slice(0, 10)],
  ].forEach(([a, b]) => {
    const r = ringkas.addRow([a, b]);
    r.getCell(1).font = { bold: true };
  });

  for (const [i, tahapan] of angkatan.tahapan.entries()) {
    const punya = tahapan.subtes.filter((s) => (s.mapping ?? []).length > 0);
    if (!punya.length) continue;

    // Nama sheet Excel maksimal 31 karakter dan tidak boleh memuat : \ / ? * [ ]
    const nama = `T${i + 1} ${tahapan.nama}`.replace(/[:\\/?*[\]]/g, '-').slice(0, 31);
    const ws = wb.addWorksheet(nama);
    ws.columns = [
      { header: 'Subtes', key: 'subtes', width: 34 },
      { header: 'Jenis', key: 'jenis', width: 11 },
      { header: 'Paket', key: 'paket', width: 8 },
      { header: 'Soal/paket', key: 'per', width: 11 },
      { header: 'Dibutuhkan', key: 'butuh', width: 12 },
      { header: 'Tersedia', key: 'ada', width: 11 },
      { header: 'Kurang', key: 'kurang', width: 10 },
      { header: 'PIC', key: 'pic', width: 14 },
      { header: 'Status', key: 'status', width: 13 },
      { header: 'Catatan', key: 'catatan', width: 52 },
    ];
    ws.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    ws.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0A6C78' } };
    ws.views = [{ state: 'frozen', ySplit: 1 }];

    for (const s of punya) {
      for (const m of s.mapping!) {
        const r = ws.addRow({
          subtes: s.nama,
          jenis: m.tipe,
          paket: m.paket ?? null,
          per: m.soalPerPaket ?? null,
          butuh: m.dibutuhkan,
          ada: m.tersedia ?? null,
          pic: m.pic ?? '',
          status: m.status ?? '',
          catatan: m.catatan ?? '',
        });
        const n = r.number;
        r.getCell('kurang').value = { formula: `IF(OR(E${n}="",F${n}=""),"",E${n}-F${n})` };
        r.getCell('catatan').alignment = { wrapText: true, vertical: 'top' };
      }
    }

    const akhir = ws.rowCount;
    const total = ws.addRow({ subtes: 'Total' });
    total.font = { bold: true };
    total.getCell('butuh').value = { formula: `SUM(E2:E${akhir})` };
    total.getCell('ada').value = { formula: `SUM(F2:F${akhir})` };
    total.getCell('kurang').value = { formula: `SUM(G2:G${akhir})` };
  }

  if (wb.worksheets.length === 1) {
    const ws = wb.addWorksheet('Kosong');
    ws.addRow(['Belum ada subtes yang punya data mapping produksi konten.']);
  }

  return Buffer.from(await wb.xlsx.writeBuffer());
}
