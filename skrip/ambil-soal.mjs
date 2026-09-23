#!/usr/bin/env node
/**
 * Mengambil contoh soal dari Markaz (CMS), bukan dari app Jadi.
 *
 * Kenapa Markaz: ia memuat teks soal, opsi, kunci, DAN pembahasan sekaligus,
 * sementara app Jadi mengharuskan mengerjakan ujian sungguhan — yang memakan
 * attempt akun QC dan mengganggu operasional. Markaz tidak memakai attempt
 * sama sekali.
 *
 * Struktur halaman Markaz: paket -> section -> lesson -> soal.
 * Teks soal dan pembahasan dirender di iframe[srcdoc] (CKEditor), bukan di
 * sel tabel; kunci dan tipe jawaban ada di sel tabel.
 *
 * HTML mentahnya ikut disimpan (field `mentah`) supaya pengolahannya bisa
 * diperbaiki dan dijalankan ulang lewat skrip/olah-ulang.mjs tanpa membuka
 * Markaz lagi. Pengolahnya sendiri ada di skrip/olah-soal.mjs.
 *
 * Sesi login dipakai ulang dari profil QC Agent. Skrip ini TIDAK pernah
 * menyentuh password: pemilik akun login sendiri lewat `npm run login`.
 *
 * Pemakaian:
 *   node skrip/ambil-soal.mjs <platform> [--kategori "<nama>"] [--nama "<teks>"] [--id <ID paket>] [--paket N] [--soal N] [--keluar file.json]
 *   node skrip/ambil-soal.mjs <platform> --daftar [--kategori "<nama>"]
 *
 * Contoh:
 *   node skrip/ambil-soal.mjs jadipcpm --paket 1 --soal 5
 */
import path from 'node:path';
import { writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { olahHTML, susunSoal, unduhGambar } from './olah-soal.mjs';

// ── Konfigurasi ─────────────────────────────────────────────────────────
const QC_DIR = process.env.QC_AGENT_DIR || 'G:/Ali/code/QC Agent';

function opsi(nama, bawaan) {
  const i = process.argv.indexOf(`--${nama}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : bawaan;
}

const platform = process.argv[2];
if (!platform || platform.startsWith('--')) {
  console.error('pemakaian: node skrip/ambil-soal.mjs <platform> [--kategori "<nama>"] [--paket N] [--soal N] [--keluar file.json]');
  process.exit(1);
}
const maxPaket = Number(opsi('paket', 1));
const maxSoal = Number(opsi('soal', 5));
const fileKeluar = opsi('keluar', `out/soal-${platform}.json`);
// --daftar: cuma memetakan kategori (dan paket > section > lesson untuk
// kategori pilihan), tanpa membuka soal. Dipakai untuk mencari paket yang
// benar sebelum mengambil apa pun.
const modeDaftar = process.argv.includes('--daftar');
// --kategori "<nama>": ambil dari paket pertama kategori itu, bukan dari
// paket pertama daftar. Tanpa ini hanya kategori teratas yang terjangkau.
const pilihKategori = opsi('kategori', '');
// --id <ID paket>: ambil satu paket tertentu. Paket pertama sebuah kategori
// belum tentu wakil yang tepat — di PPG Prajabatan 2026 paket pertamanya
// berlabel "Archieve". ID-nya juga ikut tercatat di hasil sebagai rujukan.
const pilihId = Number(opsi('id', 0));
// --nama "<teks>": saring paket yang namanya memuat teks itu, mis. satu
// jabatan di kategori teknis PPPK yang berisi puluhan seri jabatan.
const pilihNama = opsi('nama', '').toLowerCase();

// Modul browser QC Agent dipakai ulang: cookie sesi Markaz tidak tersimpan di
// folder profil melainkan di .profile/sesi-cookies.json, dan hanya
// browserContext() yang memasangnya kembali.
const { browserContext, tutupBrowser } = await import(
  pathToFileURL(path.join(QC_DIR, 'src/browser.js')).href
);
const { config } = await import(pathToFileURL(path.join(QC_DIR, 'src/config.js')).href);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Pembaca halaman ─────────────────────────────────────────────────────

/**
 * Seluruh paket TRYOUT, dari semua halaman daftar.
 *
 * Saringan tipe dipasang lewat URL (&tipe=tryout), lalu DIPERIKSA di tiap
 * halaman. Versi lama memicu event change pada <select> dan menunggu 3 detik
 * tanpa memeriksa hasilnya. Bila Livewire belum siap, event itu hilang dan
 * yang terbaca daftar TANPA saringan — berisi paket "Latihan Soal Harian"
 * (latsol) dengan pola tautan yang sama persis. Itu terjadi sungguhan di
 * JagoTPA. Sekarang scraper BERHENTI kalau saringannya tidak terbukti aktif.
 *
 * Semua halaman dibaca karena daftarnya urut dari paket TERTUA: halaman 1
 * saja hanya memuat kategori lama (mis. PPG 2024), bukan yang sedang dijual.
 */
async function ambilPaket(page) {
  const semua = new Map();
  for (let h = 1; h <= 60; h++) {
    const u = new URL(config.markaz.home(platform));
    u.searchParams.set('tipe', 'tryout');
    if (h > 1) u.searchParams.set('page', String(h));
    await page.goto(u.toString(), { waitUntil: 'domcontentloaded' });
    await sleep(2200);
    const r = await page.evaluate(() => {
      const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
      const sel = document.querySelector('select[wire\\:model="filterType"]');
      return {
        tipe: sel ? sel.value : null,
        baris: [...document.querySelectorAll('a[href*="/tryout/section/"]')].flatMap((a) => {
          const tr = a.closest('tr');
          if (!tr) return [];
          return [{
            id: Number((txt(tr).match(/ID:\s*(\d+)/) || [])[1] || 0),
            nama: txt(tr.querySelector('div.fw-bold.text-dark')),
            kategori: txt(tr.querySelector('div.fw-semibold.text-primary')),
            aktif: /Status:\s*Aktif/i.test(txt(tr)),
            url: a.href,
          }];
        }),
      };
    });
    if (r.tipe !== 'tryout') {
      throw new Error(`halaman ${h}: saringan tipe tidak aktif (nilai "${r.tipe}"); daftar bisa memuat latsol, dihentikan`);
    }
    const baru = r.baris.filter((b) => !semua.has(b.id || b.url));
    if (!baru.length) break;
    baru.forEach((b) => semua.set(b.id || b.url, b));
    // Paket yang diminta sudah terbukti ada di daftar TRYOUT; halaman
    // sisanya tidak mengubah apa pun.
    if (pilihId && semua.has(pilihId)) break;
  }
  return [...semua.values()];
}

async function ambilSection(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await sleep(2000);
  return page.evaluate(() => {
    const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
    return [...document.querySelectorAll('a[href*="/tryout/lesson/"]')].map((a) => {
      const tds = [...a.closest('tr').querySelectorAll(':scope > td')].map(txt);
      return { nama: tds[2] || '', url: a.href };
    });
  });
}

async function ambilLesson(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await sleep(2000);
  return page.evaluate(() => {
    const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
    const out = [];
    for (const a of document.querySelectorAll('a[href*="/tryout/question/"]')) {
      if (a.href.includes('/question/table/')) continue;
      const tds = [...a.closest('tr').querySelectorAll(':scope > td')].map(txt);
      out.push({ nama: tds[4] || tds[3] || '', url: a.href });
    }
    return out;
  });
}

/** Baris soal di satu halaman lesson: metadata dari sel tabel + HTML mentah. */
async function ambilSoal(page, url, batas) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  // CKEditor menyuntikkan srcdoc setelah load; tanpa jeda, iframe masih kosong.
  await sleep(3500);
  return page.evaluate(
    ({ batas }) => {
      const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
      const out = [];
      const baris = [...document.querySelectorAll('input.checkbox[id^="check_"][value]')];

      for (const chk of baris.slice(0, batas)) {
        const tr = chk.closest('tr');
        if (!tr) continue;
        const tds = [...tr.querySelectorAll(':scope > td')];

        // Nomor soal: teks langsung milik td, bukan nama editor di bawahnya.
        let nomor = '';
        if (tds[3]) {
          const langsung = [...tds[3].childNodes]
            .filter((n) => n.nodeType === 3)
            .map((n) => n.textContent)
            .join(' ');
          const m = (langsung || txt(tds[3])).match(/\d+/);
          if (m) nomor = m[0];
        }

        // Tipe jawaban ada di badge; kuncinya di td BERIKUTNYA.
        let tipe = '';
        let kunci = '';
        for (let i = 0; i < tds.length; i++) {
          const b = txt(tds[i].querySelector('.badge'));
          if (/^(OPTION|OPTION\s*NEW|TABLE|SHORT\s*ANSWER|MULTIPLE\s*CHOICE)$/i.test(b)) {
            tipe = b.toUpperCase().replace(/\s+/g, '_');
            kunci = txt(tds[i + 1]);
            break;
          }
        }
        if (kunci === '-') kunci = '';

        // Dua iframe per baris: [0] soal+opsi, [1] pembahasan.
        const frames = [...tr.querySelectorAll('iframe')];
        out.push({
          questionId: chk.value,
          nomor,
          tipe,
          kunci,
          audio: tr.querySelector('a[href$=".wav"], a[href$=".mp3"]')?.href || '',
          mentah: {
            soal: frames[0]?.getAttribute('srcdoc') || '',
            pembahasan: frames[1]?.getAttribute('srcdoc') || '',
          },
        });
      }
      return out;
    },
    { batas },
  );
}

// ── Jalan ───────────────────────────────────────────────────────────────
const ctx = await browserContext({ headless: true });
const page = await ctx.newPage();
const hasil = [];

try {
  const paket = await ambilPaket(page);
  console.log(`Paket tryout di ${platform}: ${paket.length} (saringan tipe terverifikasi)`);
  if (!paket.length) throw new Error('tidak ada paket tryout');

  let sumberPaket = pilihKategori
    ? paket.filter((p) => p.kategori.toLowerCase() === pilihKategori.toLowerCase())
    : paket;
  if (pilihKategori && !sumberPaket.length) {
    throw new Error(
      `kategori "${pilihKategori}" tidak ditemukan di daftar tryout. Yang ada: ` +
        [...new Set(paket.map((p) => p.kategori))].join(' | '),
    );
  }
  if (pilihNama) {
    sumberPaket = sumberPaket.filter((p) => p.nama.toLowerCase().includes(pilihNama));
    if (!sumberPaket.length) throw new Error(`tidak ada paket bernama "${pilihNama}"${pilihKategori ? ` di kategori "${pilihKategori}"` : ''}`);
  }
  if (pilihId) {
    sumberPaket = sumberPaket.filter((p) => p.id === pilihId);
    // Paket yang tak ada di daftar TRYOUT tidak boleh diambil, walau ID-nya
    // benar: bisa jadi itu paket latsol.
    if (!sumberPaket.length) throw new Error(`paket ID ${pilihId} tidak ada di daftar tryout${pilihKategori ? ` kategori "${pilihKategori}"` : ''}`);
  }
  // Paket nonaktif (belum/tidak ditampilkan ke peserta) bukan cermin produk
  // yang berjalan — di PPG Dalam Jabatan 2026 lima paket terakhir nonaktif.
  const nonaktif = sumberPaket.filter((p) => !p.aktif);
  if (pilihId && nonaktif.length) throw new Error(`paket ID ${pilihId} berstatus nonaktif di Markaz; pilih paket aktif`);
  if (!modeDaftar) sumberPaket = sumberPaket.filter((p) => p.aktif);
  if (!modeDaftar && !sumberPaket.length) throw new Error('tidak ada paket aktif yang cocok');

  if (modeDaftar) {
    const perKat = new Map();
    for (const p of paket) perKat.set(p.kategori, [...(perKat.get(p.kategori) || []), p]);
    const terbaru = (xs) => Math.max(...xs.map((x) => x.id));
    console.log('\nKategori tryout, terbaru dulu:');
    for (const [k, xs] of [...perKat].sort((a, b) => terbaru(b[1]) - terbaru(a[1]))) {
      console.log(`  <${k}> ${xs.length} paket, ID terbaru ${terbaru(xs)}`);
    }
    // Membuka tiap paket mahal (ratusan paket di PPPK), jadi strukturnya
    // hanya dipetakan untuk kategori yang diminta.
    if (pilihKategori) {
      for (const p of sumberPaket.slice(0, maxPaket)) {
        console.log(`\n${p.nama}  <${p.kategori}>`);
        for (const s of await ambilSection(page, p.url)) {
          const lessons = await ambilLesson(page, s.url);
          console.log(`  ${s.nama} [${lessons.map((l) => l.nama).join(' | ')}]`);
        }
      }
    }
    process.exitCode = 0;
  } else {
    for (const p of sumberPaket.slice(0, maxPaket)) {
      console.log(`\n[paket] ${p.nama} (ID ${p.id})  [${p.kategori}]`);
      const sections = await ambilSection(page, p.url);

      for (const s of sections) {
        console.log(`  [section] ${s.nama}`);
        const lessons = await ambilLesson(page, s.url);

        for (const l of lessons) {
          const soal = await ambilSoal(page, l.url, maxSoal);
          const rapi = [];
          for (const q of soal) {
            const olah = await page.evaluate(olahHTML, q.mentah);
            rapi.push(susunSoal({
              platform,
              paket: p.nama,
              paketId: p.id,
              kategori: p.kategori,
              section: s.nama,
              lesson: l.nama,
              questionId: q.questionId,
              nomor: Number(q.nomor) || null,
              tipe: q.tipe,
              kunci: q.kunci,
              audio: q.audio,
              mentah: q.mentah,
            }, olah));
          }
          const berisi = rapi.filter((q) => q.pembahasanBerisi).length;
          const kosong = rapi.filter((q) => q.isiKosong).length;
          const tanpaOpsi = rapi.filter((q) => !q.isiKosong && q.opsi.length === 0).length;
          const mentah = rapi.filter((q) => q.sisaMentah.length).length;
          console.log(
            `    [lesson] ${l.nama} -> ${rapi.length} soal, ` +
              `${berisi} pembahasan berisi` +
              (tanpaOpsi ? `, ${tanpaOpsi} tanpa opsi terpisah` : '') +
              (mentah ? `, ${mentah} MASIH MENTAH` : '') +
              (kosong ? `, ${kosong} ISI KOSONG` : ''),
          );
          hasil.push(...rapi);
        }
      }
    }

    const g = await unduhGambar(hasil, platform);
    console.log(`\nGambar: ${g.diunduh} diunduh, ${g.dipakaiUlang} dipakai ulang, ${g.ditolak.length} ditolak`);
    g.ditolak.slice(0, 5).forEach((d) => console.log(`   ! ${d}`));

    await mkdir(path.dirname(fileKeluar), { recursive: true });
    await writeFile(fileKeluar, JSON.stringify(hasil, null, 2), 'utf8');

    const berisi = hasil.filter((q) => q.pembahasanBerisi).length;
    const tipe = [...new Set(hasil.map((q) => q.tipe))].join(', ');
    console.log(`\nOK -> ${fileKeluar}`);
    console.log(`   ${hasil.length} soal - tipe: ${tipe}`);
    console.log(`   pembahasan berisi: ${berisi}/${hasil.length}`);
    const kosong = hasil.filter((q) => q.isiKosong).length;
    const tanpaOpsi = hasil.filter((q) => !q.isiKosong && q.opsi.length === 0).length;
    console.log(`   isi kosong di Markaz (TIDAK BISA DIPAKAI): ${kosong}`);
    console.log(`   tanpa opsi terpisah (wajar untuk tipe tertentu): ${tanpaOpsi}`);
    console.log(`   masih mentah (tag/LaTeX/label editor): ${hasil.filter((q) => q.sisaMentah.length).length}`);
    console.log(`   punya audio: ${hasil.filter((q) => q.audio).length}`);
  }
} catch (e) {
  console.error('GAGAL:', e.message);
  process.exitCode = 1;
} finally {
  await tutupBrowser().catch(() => {});
}
