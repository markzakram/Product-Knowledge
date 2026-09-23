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
 * Sesi login dipakai ulang dari profil QC Agent. Skrip ini TIDAK pernah
 * menyentuh password: pemilik akun login sendiri lewat `npm run login`.
 *
 * Pemakaian:
 *   node skrip/ambil-soal.mjs <platform> [--paket N] [--soal N] [--keluar file.json]
 *
 * Contoh:
 *   node skrip/ambil-soal.mjs jadipcpm --paket 1 --soal 5
 */
import path from 'node:path';
import { writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// ── Konfigurasi ─────────────────────────────────────────────────────────
const QC_DIR = process.env.QC_AGENT_DIR || 'G:/Ali/code/QC Agent';

function opsi(nama, bawaan) {
  const i = process.argv.indexOf(`--${nama}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : bawaan;
}

const platform = process.argv[2];
if (!platform || platform.startsWith('--')) {
  console.error('pemakaian: node skrip/ambil-soal.mjs <platform> [--paket N] [--soal N] [--keluar file.json]');
  process.exit(1);
}
const maxPaket = Number(opsi('paket', 1));
const maxSoal = Number(opsi('soal', 5));
const fileKeluar = opsi('keluar', `out/soal-${platform}.json`);
// --daftar: cuma memetakan paket > section > lesson, tanpa membuka soal.
// Dipakai untuk mencari paket yang benar sebelum mengambil apa pun.
const modeDaftar = process.argv.includes('--daftar');

// Modul browser QC Agent dipakai ulang: cookie sesi Markaz tidak tersimpan di
// folder profil melainkan di .profile/sesi-cookies.json, dan hanya
// browserContext() yang memasangnya kembali.
const { browserContext, tutupBrowser } = await import(
  pathToFileURL(path.join(QC_DIR, 'src/browser.js')).href
);
const { config } = await import(pathToFileURL(path.join(QC_DIR, 'src/config.js')).href);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Pembaca halaman ─────────────────────────────────────────────────────

async function ambilPaket(page) {
  await page.goto(config.markaz.home(platform), { waitUntil: 'domcontentloaded' });
  await sleep(2200);
  // Hanya tryout; latsol sengaja dilewati.
  await page.evaluate(() => {
    for (const sel of document.querySelectorAll('select')) {
      const i = [...sel.options].findIndex((o) => /^tryout$/i.test(o.textContent.trim()));
      if (i >= 0) {
        sel.selectedIndex = i;
        sel.dispatchEvent(new Event('change', { bubbles: true }));
        return;
      }
    }
  });
  await sleep(3000);
  return page.evaluate(() => {
    const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim() : '');
    const out = [];
    for (const a of document.querySelectorAll('a[href*="/tryout/section/"]')) {
      const tr = a.closest('tr');
      if (!tr) continue;
      out.push({
        nama: txt(tr.querySelector('div.fw-bold.text-dark')),
        kategori: txt(tr.querySelector('div.fw-semibold.text-primary')),
        url: a.href,
      });
    }
    return out;
  });
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

async function ambilSoal(page, url, batas) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  // CKEditor menyuntikkan srcdoc setelah load; tanpa jeda, iframe masih kosong.
  await sleep(3500);
  return page.evaluate(
    ({ batas }) => {
      const NL = String.fromCharCode(10);
      // Isi iframe berupa HTML CKEditor; diratakan jadi teks berbaris.
      const bersih = (h) =>
        String(h || '')
          .replace(/<style[\s\S]*?<\/style>/gi, '')
          .replace(/<script[\s\S]*?<\/script>/gi, '')
          // Gambar diubah jadi PENANDA di posisinya sebelum tag lain dibuang.
          // Dulu baris di bawah menghapus semua tag termasuk <img>, sehingga
          // gambar di pembahasan — tabel kebenaran silogisme, pola figural —
          // hilang diam-diam dan teksnya merujuk ke sesuatu yang tak ada.
          // Penanda dijaga di baris sendiri supaya posisinya di antara
          // kalimat tetap sama dengan aslinya.
          .replace(/<img[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi, `${NL}⟦gambar:$1⟧${NL}`)
          .replace(/<br\s*\/?>/gi, NL)
          .replace(/<\/(p|div|li|tr|h[1-6])>/gi, NL)
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;/g, ' ')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&hellip;/g, '…')
          .replace(/&[a-z]+;/gi, ' ')
          .replace(/[^\S\n]+/g, ' ')
          .split(NL)
          .map((b) => b.trim())
          .filter(Boolean)
          .join(NL)
          .trim();

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
        const srcSoal = frames[0]?.getAttribute('srcdoc') || '';
        const isiPembahasan = bersih(frames[1]?.getAttribute('srcdoc'));

        /*
         * Opsi dipisah lewat STRUKTUR, bukan teks.
         *
         * Markaz merender opsi sebagai <ol><li style="list-style-type:upper-alpha">.
         * Hurufnya datang dari urutan, bukan dari isi teksnya — di JadiASN
         * opsinya berbunyi "1 dan 2" tanpa awalan "A.". Kalau dipisah dengan
         * mencocokkan pola "^A." seperti dugaan awal, seluruh opsi terbaca nol
         * dan soalnya masuk tanpa pilihan jawaban.
         *
         * Sebagian paket lama memang menulis awalan huruf sebagai paragraf
         * biasa (mis. "A. Prinsip Tunggal" di JadiPCPM), jadi cara teks tetap
         * dipakai sebagai cadangan di sisi Node.
         */
        let opsiStruktur = [];
        let isiSoal = '';
        try {
          const doc = new DOMParser().parseFromString(srcSoal, 'text/html');
          const ol = [...doc.querySelectorAll('ol')].find((o) => o.querySelectorAll(':scope > li').length >= 2);
          if (ol) {
            const HURUF = ['A', 'B', 'C', 'D', 'E', 'F'];
            opsiStruktur = [...ol.querySelectorAll(':scope > li')].map((li, i) => ({
              label: HURUF[i] || String(i + 1),
              teks: bersih(li.innerHTML),
            }));
            ol.remove();
          }
          isiSoal = bersih(doc.body.innerHTML);
        } catch {
          isiSoal = bersih(srcSoal);
        }

        const audio = tr.querySelector('a[href$=".wav"], a[href$=".mp3"]')?.href || '';
        const gambar = frames[0]?.getAttribute('srcdoc')?.match(/<img[^>]+src="([^"]+)"/i)?.[1] || '';

        out.push({
          questionId: chk.value,
          nomor,
          tipe,
          kunci,
          isiSoal,
          opsiStruktur,
          isiPembahasan,
          audio,
          gambar,
        });
      }
      return out;
    },
    { batas },
  );
}

/**
 * Cadangan bila opsi tidak dirender sebagai <ol>: memisahkan batang soal dari
 * opsi yang ditulis sebagai paragraf berawalan huruf.
 *
 * Awalannya bisa huruf besar ("A. Prinsip Tunggal" di JadiPCPM) maupun kecil
 * ("a. Bhismaparwa" di JadiASN), jadi pencocokannya tidak boleh peka huruf.
 * Baris lanjutan setelah opsi dimulai disambung ke opsi terakhir, bukan
 * dibuang — soal panjang sering punya opsi yang memakan dua baris.
 */
function pisahOpsi(isi) {
  const opsi = [];
  const batang = [];
  for (const b of isi.split('\n')) {
    // Pemisah setelah huruf bervariasi: '.', ')', dan di paket POF JadiPCPM
    // tertulis 'A>' — kekhasan pengetikan di sumbernya, bukan format lain.
    const m = b.match(/^([A-Ea-e])\s*[.)>\]]\s*(.+)$/);
    if (m) {
      opsi.push({ label: m[1].toUpperCase(), teks: m[2].trim() });
    } else if (opsi.length === 0) {
      batang.push(b);
    } else {
      opsi[opsi.length - 1].teks += ` ${b.trim()}`;
    }
  }
  // Harus berurutan A, B, C… Kalau tidak, yang tertangkap bukan opsi melainkan
  // penomoran di dalam teks soal — lebih baik dilaporkan kosong daripada salah.
  const urut = opsi.every((o, i) => o.label === 'ABCDEF'[i]);
  if (!urut || opsi.length < 2) return { pertanyaan: isi.trim(), opsi: [] };
  return { pertanyaan: batang.join('\n').trim(), opsi };
}

/** Pembahasan yang cuma mengulang kunci bukan pembahasan sungguhan. */
function pembahasanBerisi(teks, kunci) {
  const t = teks.trim();
  if (!t) return false;
  if (t.length < 40) return false;
  const polos = t.replace(/^jawaban\s*:?\s*/i, '').trim();
  if (kunci && polos.toUpperCase().startsWith(kunci.toUpperCase()) && polos.length < 60) return false;
  return true;
}

// ── Jalan ───────────────────────────────────────────────────────────────
const ctx = await browserContext({ headless: true });
const page = await ctx.newPage();

// ── Pengunduh gambar ────────────────────────────────────────────────────
// Gambar dari Markaz diunduh ke public/gambar/<platform>/ supaya situsnya
// berdiri sendiri: kalau bucket asalnya berubah, gambarnya tidak ikut putus.

/** Hanya host yang memang dipakai Markaz. Scraper tidak boleh jadi pengunduh
 *  URL sembarangan hanya karena sebuah soal memuat tautan gambar. */
const HOST_GAMBAR = /^https:\/\/(storage\.googleapis\.com|st-\d+\.cerebrum\.id)\//i;
const BATAS_BYTE = 3 * 1024 * 1024;
const POLA_PENANDA = /⟦gambar:([^⟧]+)⟧/g;

async function unduhGambar(daftar, platform) {
  const dir = path.join('public', 'gambar', platform);
  await mkdir(dir, { recursive: true });
  const peta = new Map(); // url asal -> jalur lokal
  const catatan = { diunduh: 0, dipakaiUlang: 0, ditolak: [] };

  async function satu(url) {
    if (peta.has(url)) { catatan.dipakaiUlang++; return peta.get(url); }
    if (!HOST_GAMBAR.test(url)) { catatan.ditolak.push(`host tidak dikenal: ${url}`); return null; }
    const nama = decodeURIComponent(url.split('?')[0].split('/').pop() || '')
      .replace(/[^A-Za-z0-9._-]+/g, '_').slice(-80);
    if (!/\.(png|jpe?g|gif|webp|svg)$/i.test(nama)) { catatan.ditolak.push(`bukan berkas gambar: ${url}`); return null; }
    try {
      const r = await fetch(url);
      if (!r.ok) { catatan.ditolak.push(`HTTP ${r.status}: ${url}`); return null; }
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length > BATAS_BYTE) { catatan.ditolak.push(`terlalu besar (${buf.length} B): ${url}`); return null; }
      await writeFile(path.join(dir, nama), buf);
      catatan.diunduh++;
      const lokal = `gambar/${platform}/${nama}`;
      peta.set(url, lokal);
      return lokal;
    } catch (e) {
      catatan.ditolak.push(`${e.message}: ${url}`);
      return null;
    }
  }

  async function ganti(teks) {
    let hasil = teks;
    for (const [penanda, url] of [...teks.matchAll(POLA_PENANDA)]) {
      const lokal = await satu(url);
      // Gambar yang gagal diunduh TIDAK dihapus diam-diam lagi: penandanya
      // tetap menunjuk URL asal, jadi halaman masih bisa memuatnya dari sana.
      if (lokal) hasil = hasil.replace(penanda, `⟦gambar:${lokal}⟧`);
    }
    return hasil;
  }

  for (const q of daftar) {
    q.pertanyaan = await ganti(q.pertanyaan);
    q.pembahasan = await ganti(q.pembahasan);
    for (const o of q.opsi) o.teks = await ganti(o.teks);
  }
  return catatan;
}

const hasil = [];

try {
  const paket = await ambilPaket(page);
  console.log(`Paket tryout di ${platform}: ${paket.length}`);
  if (!paket.length) throw new Error('tidak ada paket tryout');

  if (modeDaftar) {
    for (const [i, p] of paket.entries()) {
      const sections = await ambilSection(page, p.url);
      const isi = [];
      for (const s of sections) {
        const lessons = await ambilLesson(page, s.url);
        isi.push(`${s.nama} [${lessons.map((l) => l.nama).join(' | ')}]`);
      }
      console.log(`${String(i + 1).padStart(2)}. ${p.nama}  <${p.kategori}>`);
      isi.forEach((x) => console.log(`      ${x}`));
    }
    await tutupBrowser().catch(() => {});
    process.exit(0);
  }

  for (const p of paket.slice(0, maxPaket)) {
    console.log(`\n[paket] ${p.nama}  [${p.kategori}]`);
    const sections = await ambilSection(page, p.url);

    for (const s of sections) {
      console.log(`  [section] ${s.nama}`);
      const lessons = await ambilLesson(page, s.url);

      for (const l of lessons) {
        const soal = await ambilSoal(page, l.url, maxSoal);
        const rapi = soal.map((q) => {
          const cadangan = pisahOpsi(q.isiSoal);
          const pakaiStruktur = q.opsiStruktur && q.opsiStruktur.length >= 2;
          const pertanyaan = pakaiStruktur ? q.isiSoal : cadangan.pertanyaan;
          const opsi = pakaiStruktur ? q.opsiStruktur : cadangan.opsi;
          return {
            platform,
            paket: p.nama,
            kategori: p.kategori,
            section: s.nama,
            lesson: l.nama,
            questionId: q.questionId,
            nomor: Number(q.nomor) || null,
            tipe: q.tipe,
            kunci: q.kunci,
            pertanyaan,
            opsi,
            pembahasan: q.isiPembahasan,
            pembahasanBerisi: pembahasanBerisi(q.isiPembahasan, q.kunci),
            // Dibedakan dari "tanpa opsi": sebagian tipe soal (mis. Error
            // Recognition di JadiOJK) memang menaruh penanda (A)(B)(C) di
            // dalam kalimat dan tidak punya opsi terpisah — itu wajar.
            // `isiKosong` berarti Markaz tidak memuat isinya sama sekali,
            // dan soal seperti itu tidak boleh dipakai.
            isiKosong: !pertanyaan.trim(),
            audio: q.audio,
            // Gambar kini disimpan INLINE sebagai penanda di teksnya.
            gambar: '',
          };
        });
        const berisi = rapi.filter((q) => q.pembahasanBerisi).length;
        const kosong = rapi.filter((q) => q.isiKosong).length;
        const tanpaOpsi = rapi.filter((q) => !q.isiKosong && q.opsi.length === 0).length;
        console.log(
          `    [lesson] ${l.nama} -> ${rapi.length} soal, ` +
            `${berisi} pembahasan berisi` +
            (tanpaOpsi ? `, ${tanpaOpsi} tanpa opsi terpisah` : '') +
            (kosong ? `, ${kosong} ISI KOSONG` : ''),
        );
        hasil.push(...rapi);
      }
    }
  }

  const g = await unduhGambar(hasil, platform);
  console.log(`
Gambar: ${g.diunduh} diunduh, ${g.dipakaiUlang} dipakai ulang, ${g.ditolak.length} ditolak`);
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
  console.log(`   punya audio: ${hasil.filter((q) => q.audio).length} - punya gambar: ${hasil.filter((q) => q.gambar).length}`);
} catch (e) {
  console.error('GAGAL:', e.message);
  process.exitCode = 1;
} finally {
  await tutupBrowser().catch(() => {});
}
