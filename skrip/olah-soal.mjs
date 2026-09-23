/**
 * Pengolah isi soal Markaz: HTML CKEditor -> teks berbaris.
 *
 * Dipisah dari ambil-soal.mjs supaya HTML mentah yang tersimpan di out/ bisa
 * diolah ULANG (skrip/olah-ulang.mjs) tanpa membuka Markaz lagi. Setiap
 * perbaikan di sini bisa langsung diuji pada soal sungguhan.
 *
 * Versi pertama meratakan HTML dengan regex: semua tag dibuang. Akibatnya
 * struktur yang MEMBAWA MAKNA ikut hilang tanpa jejak:
 *   - superskrip: "2x<sup>2</sup>-4" terbaca "2x2-4";
 *   - pecahan MathML: "<mfrac>3 8</mfrac>" terbaca "38";
 *   - daftar bernomor: pernyataan 1-4 kehilangan nomornya, padahal opsinya
 *     berbunyi "1 dan 3";
 *   - tabel: sel-selnya menyatu jadi satu baris tanpa pemisah.
 * Soal matematika yang salah tulis lebih buruk daripada tidak ada, jadi
 * sekarang HTML-nya ditelusuri sebagai pohon DOM.
 */
import path from 'node:path';
import { createHash } from 'node:crypto';
import { writeFile, mkdir, stat } from 'node:fs/promises';

/**
 * Dijalankan DI BROWSER lewat page.evaluate. Playwright menyerialisasi badan
 * fungsinya, jadi fungsi ini TIDAK BOLEH merujuk apa pun di luar dirinya —
 * semua pembantu harus didefinisikan di dalam.
 *
 * @param {{ soal: string, pembahasan: string }} mentah srcdoc kedua iframe
 * @returns {{ isiSoal: string, opsiStruktur: {label:string,teks:string}[], isiPembahasan: string }}
 */
export function olahHTML({ soal, pembahasan }) {
  const NL = String.fromCharCode(10);

  const SUP = {
    0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹',
    '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ',
    k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ',
    v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
  };
  const SUB = {
    0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉',
    '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎',
    a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', o: 'ₒ',
    p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
  };

  /**
   * Superskrip/subskrip jadi karakter Unicode bila semua hurufnya punya
   * padanan dan cukup pendek; selain itu ditulis eksplisit ^(…) / _(…).
   * Tulisan eksplisit memang kurang cantik, tapi tidak pernah salah baca —
   * yang dihindari adalah "2x2", bukan tanda kurung.
   */
  const angkat = (t, peta, tanda) => {
    const s = t.replace(/\s+/g, '');
    if (!s) return '';
    const hasil = [...s].map((c) => peta[c]);
    const angkaSaja = /^[0-9+\-−=()]+$/.test(s);
    if (hasil.every(Boolean) && (angkaSaja || s.length <= 4)) return hasil.join('');
    return `${tanda}(${s})`;
  };
  const naik = (t) => angkat(t, SUP, '^');
  const turun = (t) => angkat(t, SUB, '_');

  /** Operand diberi kurung hanya bila memuat operator: 3/8 tetap 3/8, (x+1)/3 berkurung. */
  const kurung = (t) => (/[+\-−×÷/=\s]/.test(t) ? `(${t})` : t);
  const AWAL_SUP = /^[⁰¹²³⁴⁵⁶⁷⁸⁹]/;

  /** Pecahan angka jadi ³⁄₈: rapat, tak ambigu, dan bilangan campuran 3⁵⁄₆ tetap terbaca. */
  const pecahan = (a, b) => {
    if (/^\d{1,3}$/.test(a) && /^\d{1,3}$/.test(b)) return `${naik(a)}⁄${turun(b)}`;
    return `${kurung(a)}/${kurung(b)}`;
  };

  // ── MathML ─────────────────────────────────────────────────────────────
  const OPERATOR_SPASI = /^[=<>≤≥≠≈±+×÷→⇒⇔∈]$/;
  function mathml(el) {
    const tag = el.localName.toLowerCase();
    const anak = [...el.children];
    const gabung = () => {
      let out = '';
      for (const a of anak) {
        const t = mathml(a);
        // Bilangan campuran: <mn>3</mn><mfrac>5 6</mfrac> harus 3⁵⁄₆, bukan "35/6".
        if (a.localName.toLowerCase() === 'mfrac' && /\d$/.test(out) && !AWAL_SUP.test(t)) out += ' ';
        out += t;
      }
      return out;
    };
    switch (tag) {
      case 'annotation':
      case 'annotation-xml':
        return '';
      case 'mi':
      case 'mn':
      case 'ms':
        return el.textContent.trim();
      case 'mtext':
        return el.textContent.replace(/\s+/g, ' ');
      case 'mo': {
        const t = el.textContent.trim().replace('-', '−');
        return OPERATOR_SPASI.test(t) ? ` ${t} ` : t;
      }
      case 'mspace':
        return ' ';
      case 'mfrac': {
        const [a = '', b = ''] = anak.map((x) => mathml(x).trim());
        return pecahan(a, b);
      }
      case 'msup': {
        const [a = '', b = ''] = anak.map(mathml);
        return a + (/^[oOº°∘]$/.test(b.trim()) ? '°' : naik(b));
      }
      case 'msub': {
        const [a = '', b = ''] = anak.map(mathml);
        return a + turun(b);
      }
      case 'msubsup': {
        const [a = '', b = '', c = ''] = anak.map(mathml);
        return a + turun(b) + naik(c);
      }
      case 'msqrt':
        return `√${kurung(gabung().trim())}`;
      case 'mroot': {
        const [a = '', b = ''] = anak.map(mathml);
        return `${naik(b)}√${kurung(a.trim())}`;
      }
      case 'mfenced': {
        const buka = el.getAttribute('open') ?? '(';
        const tutup = el.getAttribute('close') ?? ')';
        return buka + anak.map(mathml).join(el.getAttribute('separators') ?? ',') + tutup;
      }
      case 'mover': {
        const [a = '', b = ''] = anak.map(mathml);
        if (/^[¯‾_―-]$/.test(b.trim())) return [...a].map((c) => c + '̅').join('');
        if (/^[→⃗]$/.test(b.trim())) return a + '⃗';
        return a + naik(b);
      }
      case 'munder': {
        const [a = '', b = ''] = anak.map(mathml);
        return a + turun(b);
      }
      case 'munderover': {
        const [a = '', b = '', c = ''] = anak.map(mathml);
        return a + turun(b) + naik(c);
      }
      case 'mtable':
        return NL + anak.map(mathml).join(NL) + NL;
      case 'mtr':
      case 'mlabeledtr':
        return anak.map(mathml).join(' | ');
      default:
        return anak.length ? gabung() : el.textContent;
    }
  }

  // ── Penelusuran HTML ───────────────────────────────────────────────────
  const BLOK = new Set([
    'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'section',
    'article', 'header', 'footer', 'pre', 'figure', 'figcaption', 'center',
    'dl', 'dt', 'dd', 'address', 'main', 'aside', 'nav',
  ]);
  const BUANG = new Set([
    'style', 'script', 'noscript', 'template', 'head', 'title', 'meta', 'link',
    'button', 'input', 'select', 'textarea', 'audio', 'video', 'source',
    'iframe', 'object', 'embed', 'svg', 'canvas',
  ]);

  const romawi = (n) => {
    const t = [[1000, 'm'], [900, 'cm'], [500, 'd'], [400, 'cd'], [100, 'c'], [90, 'xc'],
      [50, 'l'], [40, 'xl'], [10, 'x'], [9, 'ix'], [5, 'v'], [4, 'iv'], [1, 'i']];
    let s = '';
    for (const [v, h] of t) while (n >= v) { s += h; n -= v; }
    return s;
  };
  const gayaDaftar = (ol) => {
    const tipe = ol.getAttribute('type');
    const css = ((ol.getAttribute('style') || '') + ' ' +
      (ol.querySelector(':scope > li')?.getAttribute('style') || '')).toLowerCase();
    if (tipe === 'A' || /upper-(alpha|latin)/.test(css)) return 'A';
    if (tipe === 'a' || /lower-(alpha|latin)/.test(css)) return 'a';
    if (tipe === 'I' || /upper-roman/.test(css)) return 'I';
    if (tipe === 'i' || /lower-roman/.test(css)) return 'i';
    return '1';
  };
  const penanda = (gaya, n) => {
    if (gaya === 'A') return String.fromCharCode(64 + n);
    if (gaya === 'a') return String.fromCharCode(96 + n);
    if (gaya === 'I') return romawi(n).toUpperCase();
    if (gaya === 'i') return romawi(n);
    return String(n);
  };

  // Saat menyala, isi bertekanan (tebal/garis bawah) dibungkus penanda
  // \u0001…\u0002. Dipakai sekali lagi setelah teks biasa dibuat, khusus untuk
  // menyusun opsi Error Recognition — penandanya tak pernah ikut tersimpan.
  let tandaiTekanan = false;

  function teks(node) {
    if (node.nodeType === 3) return node.textContent.replace(/[\s ]+/g, ' ');
    if (node.nodeType !== 1) return '';
    const el = node;
    const tag = el.localName.toLowerCase();
    if (BUANG.has(tag)) return '';
    const isi = () => [...el.childNodes].map(teks).join('');

    if (tandaiTekanan && (tag === 'u' || tag === 'b' || tag === 'strong')) {
      return '\u0001' + isi() + '\u0002';
    }

    switch (tag) {
      case 'br':
        return NL;
      case 'hr':
        return NL + '―' + NL;
      case 'img': {
        // Rumus WIRIS/MathType dirender sebagai gambar yang MEMBAWA MathML-nya.
        const mml = el.getAttribute('data-mathml');
        if (mml) {
          const d = new DOMParser().parseFromString(mml.replace(/«/g, '<').replace(/»/g, '>').replace(/¨/g, '"').replace(/§/g, '&'), 'text/html');
          const m = d.querySelector('math');
          if (m) return mathml(m);
        }
        const src = el.getAttribute('src') || '';
        if (!src || src.startsWith('data:')) return el.getAttribute('alt') || '';
        // Gambar jadi PENANDA di posisinya, di baris sendiri.
        return `${NL}⟦gambar:${src}⟧${NL}`;
      }
      case 'math':
        return mathml(el);
      case 'sup': {
        const t = isi().trim();
        // Derajat diketik sebagai huruf o terangkat: -10<sup>o</sup>C, 30<sup>o</sup>.
        // Dibaca "ᵒ" ia tampak seperti huruf, bukan satuan.
        if (/^[oOº°]$/.test(t)) return '°';
        if (t === '0' && /^\s*[CFK]\b/.test(el.nextSibling?.textContent || '')) return '°';
        return naik(t);
      }
      case 'sub':
        return turun(isi());
      case 'ol':
      case 'ul': {
        const gaya = tag === 'ul' ? '•' : gayaDaftar(el);
        let n = Number(el.getAttribute('start') || 1);
        const baris = [];
        for (const li of el.querySelectorAll(':scope > li')) {
          const t = teks(li).split(NL).map((b) => b.trim()).filter(Boolean).join(NL + '   ');
          baris.push(gaya === '•' ? `• ${t}` : `${penanda(gaya, n)}. ${t}`);
          n++;
        }
        return NL + baris.join(NL) + NL;
      }
      case 'table': {
        const baris = [];
        for (const tr of el.querySelectorAll('tr')) {
          if (tr.closest('table') !== el) continue;
          const sel = [...tr.children]
            .filter((c) => /^(td|th)$/i.test(c.localName))
            .map((c) => teks(c).replace(/\s*\n\s*/g, ' ').trim());
          if (sel.some(Boolean)) baris.push(sel.join(' | '));
        }
        return NL + baris.join(NL) + NL;
      }
      default:
        return BLOK.has(tag) || tag === 'li' ? NL + isi() + NL : isi();
    }
  }

  /**
   * LaTeX sebaris yang diketik penulis soal sebagai teks biasa: "$a^2-b^2$".
   * Hanya bentuk sederhana yang diubah. Kalau masih tersisa perintah \xxx,
   * teksnya dibiarkan apa adanya supaya pemeriksa mutu (sisaMentah) menandai
   * dan menolaknya — lebih baik tidak tampil daripada tampil setengah jadi.
   */
  const LATEX_SIMBOL = {
    times: '×', cdot: '·', div: '÷', pm: '±', le: '≤', leq: '≤', ge: '≥', geq: '≥',
    ne: '≠', neq: '≠', approx: '≈', pi: 'π', infty: '∞', alpha: 'α', beta: 'β',
    theta: 'θ', degree: '°', circ: '°', to: '→', rightarrow: '→',
  };
  const latexSederhana = (s) => s.replace(/\$([^$\n]{1,120})\$/g, (utuh, isi) => {
    // Tanpa ^, _, atau \ ini bukan LaTeX — mis. "$50 dan $60" (mata uang).
    if (!/[\\^_]/.test(isi)) return utuh;
    let t = isi;
    for (let i = 0; i < 3; i++) {
      t = t.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, (_, a, b) => pecahan(a.trim(), b.trim()));
      t = t.replace(/\\sqrt\{([^{}]*)\}/g, (_, a) => `√${kurung(a.trim())}`);
    }
    t = t.replace(/\\left|\\right/g, '');
    t = t.replace(/\\([a-zA-Z]+)/g, (m, nama) => LATEX_SIMBOL[nama] ?? m);
    t = t.replace(/\^\{([^{}]*)\}|\^(\S)/g, (_, a, b) => naik(a ?? b));
    t = t.replace(/_\{([^{}]*)\}|_(\S)/g, (_, a, b) => turun(a ?? b));
    t = t.replace(/\\[,;: ]/g, ' ').replace(/-/g, '−');
    return /\\[a-zA-Z]|[{}]/.test(t) ? utuh : t;
  });

  /** Label aksesibilitas editor Markaz yang ikut tersimpan di isi soal. */
  const SAMPAH = [/This question is marked in red\.?/gi];

  const rapikan = (t) => {
    // Karakter lebar-nol dari salinan teks web: tak terlihat, tapi memecah
    // pencarian dan meninggalkan "spasi hantu" di awal baris.
    let s = t.replace(/[​-‍⁠﻿]/g, '');
    for (const p of SAMPAH) s = s.replace(p, '');
    s = latexSederhana(s);
    return s
      .split(NL)
      .map((b) => b.replace(/[ \t]+/g, ' ').trim())
      .filter(Boolean)
      .join(NL)
      .trim();
  };

  const parse = (h) => new DOMParser().parseFromString(String(h || ''), 'text/html');

  /**
   * Opsi dipisah lewat STRUKTUR. Markaz merender opsi sebagai <ol> bergaya
   * upper-alpha. Versi lama mengambil <ol> PERTAMA — dan di soal pernyataan
   * (Fisika: "Pernyataan yang benar adalah …") <ol> pertama adalah daftar
   * pernyataan 1-4, sehingga pernyataan terbaca sebagai opsi A-D dan kunci
   * "D" menunjuk ke hal yang salah. Sekarang yang dipilih <ol> bergaya huruf.
   * Bila tak ada: satu-satunya <ol> (perilaku lama, benar untuk JadiASN), atau
   * — bila ada beberapa — yang TERAKHIR, karena opsi selalu sesudah batang soal.
   */
  const docSoal = parse(soal);
  const kandidat = [...docSoal.querySelectorAll('ol')]
    .filter((o) => !o.parentElement?.closest('li'))
    .filter((o) => o.querySelectorAll(':scope > li').length >= 2);
  const olOpsi = kandidat.find((o) => /^[Aa]$/.test(gayaDaftar(o))) || kandidat[kandidat.length - 1];

  let opsiStruktur = [];
  if (olOpsi) {
    opsiStruktur = [...olOpsi.querySelectorAll(':scope > li')].map((li, i) => ({
      label: String.fromCharCode(65 + i),
      teks: rapikan(teks(li)),
    }));
    olOpsi.remove();
  }

  const isiSoal = rapikan(teks(docSoal.body));
  tandaiTekanan = true;
  const isiBertekanan = rapikan(teks(docSoal.body));
  tandaiTekanan = false;

  return {
    isiSoal,
    opsiStruktur,
    isiPembahasan: rapikan(teks(parse(pembahasan).body)),
    // Teks soal dengan penekanan ditandai \u0001…\u0002. Di soal Error
    // Recognition, kata bertekanan tepat sebelum penanda (A)–(D) adalah
    // bagian kalimat yang diuji — isi opsinya yang sebenarnya.
    isiBertekanan,
  };
}

// ── Sisi Node ────────────────────────────────────────────────────────────

/**
 * Cadangan bila opsi tidak dirender sebagai <ol>: memisahkan batang soal dari
 * opsi yang ditulis sebagai paragraf berawalan huruf.
 *
 * Awalannya bisa huruf besar ("A. Prinsip Tunggal" di JadiPCPM) maupun kecil
 * ("a. Bhismaparwa" di JadiASN), jadi pencocokannya tidak boleh peka huruf.
 * Baris lanjutan setelah opsi dimulai disambung ke opsi terakhir, bukan
 * dibuang — soal panjang sering punya opsi yang memakan dua baris.
 */
export function pisahOpsi(isi) {
  const opsi = [];
  const batang = [];
  for (const b of isi.split('\n')) {
    // Pemisah setelah huruf bervariasi: '.', ')', dan di paket POF JadiPCPM
    // tertulis 'A>' — kekhasan pengetikan di sumbernya, bukan format lain.
    // Koma juga muncul ("A, 401.900" di TPD PCAM 9) sebagai salah ketik, dan
    // sebagian soal menulis "(A) Amar memilih Fotografi" dengan kurung di depan.
    const m = b.match(/^\(?([A-Ea-e])\s*[.,)>\]]\s*(.+)$/);
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
export function pembahasanBerisi(teks, kunci) {
  const t = teks.trim();
  if (!t) return false;
  if (t.length < 40) return false;
  const polos = t.replace(/^jawaban\s*:?\s*/i, '').trim();
  if (kunci && polos.toUpperCase().startsWith(kunci.toUpperCase()) && polos.length < 60) return false;
  return true;
}

/**
 * Tanda yang menandakan pengolahan belum tuntas. Dipakai sebagai pemeriksaan
 * mutu: soal yang masih memuatnya DILAPORKAN, bukan diam-diam ditulis.
 */
export function sisaMentah(teks) {
  const temuan = [];
  if (/<\/?[a-z][^>]*>/i.test(teks)) temuan.push('tag HTML');
  if (/\\(\(|\[|frac|sqrt|times|left|right)/.test(teks)) temuan.push('LaTeX');
  if (/\$[^$\n]*[\\^_][^$\n]*\$/.test(teks)) temuan.push('LaTeX sebaris');
  if (/&[a-z]+;/i.test(teks)) temuan.push('entitas HTML');
  if (/marked in red/i.test(teks)) temuan.push('label editor');
  // "Diketahui nilai ?=4/7 dan ?=5": nama variabel sudah rusak di CMS-nya
  // sendiri (Tes Potensi LPS). Soal seperti itu tidak bisa dijawab apa adanya.
  if (/(^|[\s(,;:])\?\s*=/.test(teks)) temuan.push('karakter hilang di sumber (?=)');
  return temuan;
}

/**
 * Soal Error Recognition tidak punya opsi terpisah: pilihannya adalah bagian
 * kalimat yang ditandai (A)–(D). Tanpa opsi, situs menampilkannya seperti
 * isian singkat berjawaban "B" — membingungkan. Opsinya disusun dari penanda
 * itu.
 *
 * Teks tiap opsi adalah rangkaian kata BERTEKANAN (tebal atau bergaris
 * bawah) tepat sebelum penandanya: "<b>She</b> <b>suggested</b> (A)" -> "She
 * suggested". Hanya dipakai bila SEMUA penanda punya rangkaian seperti itu;
 * kalau ada yang tidak, seluruh opsi cukup merujuk penandanya, bukan tebakan
 * sebagian.
 */
export function opsiDariPenanda(pertanyaan, isiBertekanan = '') {
  const huruf = [...pertanyaan.matchAll(/\(([A-E])\)/g)].map((m) => m[1]).join('');
  if (huruf.length < 3 || huruf !== 'ABCDE'.slice(0, huruf.length)) return [];
  // Penanda Error Recognition ada DI TENGAH kalimat. Penanda di awal baris
  // berarti opsi biasa yang ditulis "(A) ..." — itu urusan pisahOpsi, dan
  // menyusunnya jadi "Bagian bertanda (A)" akan membuang teks opsinya.
  const diAwalBaris = [...pertanyaan.matchAll(/(^|\n)\s*\([A-E]\)/g)].length;
  if (diAwalBaris > 0) return [];

  // Peta tekanan PER KARAKTER. Penanda bisa berada di luar blok tebal
  // ("<b>making</b>(A)") maupun di dalamnya ("<b>and(B) </b>", bahkan dua
  // penanda dalam satu blok: "<b> indulge(C) their(D)</b>"), jadi batas blok
  // tidak bisa dijadikan pegangan.
  const kar = [];
  const tekan = [];
  let aktif = false;
  for (const c of isiBertekanan) {
    if (c === '\u0001') { aktif = true; continue; }
    if (c === '\u0002') { aktif = false; continue; }
    kar.push(c);
    tekan.push(aktif);
  }
  const polos = kar.join('');
  const spasi = (c) => /\s/.test(c);
  const posisi = [...polos.matchAll(/\(([A-E])\)/g)].map((m) => ({ awal: m.index, akhir: m.index + m[0].length }));
  // Dari tiap penanda mundur: ambil kata bertekanan, termasuk spasi di antara
  // dua kata bertekanan ("<b>She</b> <b>suggested</b>"), berhenti di teks
  // biasa atau di penanda sebelumnya.
  const tekanan = posisi.map((p, i) => {
    const batas = i ? posisi[i - 1].akhir : 0;
    let j = p.awal - 1;
    while (j >= batas && spasi(polos[j])) j--;
    const akhirRun = j + 1;
    let awalRun = akhirRun;
    while (j >= batas) {
      if (tekan[j] && !spasi(polos[j])) { awalRun = j; j--; continue; }
      if (spasi(polos[j]) && awalRun < akhirRun) {
        let k = j;
        while (k >= batas && spasi(polos[k])) k--;
        if (k >= batas && tekan[k]) { j = k; continue; }
      }
      break;
    }
    return polos.slice(awalRun, akhirRun).replace(/\s+/g, ' ').trim();
  });
  const pakaiTekanan = tekanan.length === huruf.length && tekanan.every(Boolean);
  return [...huruf].map((l, i) => ({
    label: l,
    teks: pakaiTekanan ? tekanan[i] : `Bagian bertanda (${l})`,
  }));
}

/**
 * Gabungkan hasil olahan menjadi satu soal siap tulis. Dipakai scraper DAN
 * olah-ulang, supaya keduanya tidak pernah menghasilkan bentuk berbeda.
 */
export function susunSoal(meta, olah) {
  const cadangan = pisahOpsi(olah.isiSoal);
  const pakaiStruktur = olah.opsiStruktur && olah.opsiStruktur.length >= 2;
  const pertanyaan = pakaiStruktur ? olah.isiSoal : cadangan.pertanyaan;
  let opsi = pakaiStruktur ? olah.opsiStruktur : cadangan.opsi;
  const dariPenanda = !opsi.length ? opsiDariPenanda(pertanyaan, olah.isiBertekanan) : [];
  if (dariPenanda.length) opsi = dariPenanda;
  return {
    ...meta,
    pertanyaan,
    opsi,
    // Ditandai supaya jelas opsi ini DISUSUN, bukan tertulis di Markaz.
    opsiDariPenanda: dariPenanda.length > 0,
    pembahasan: olah.isiPembahasan,
    pembahasanBerisi: pembahasanBerisi(olah.isiPembahasan, meta.kunci),
    // Dibedakan dari "tanpa opsi": sebagian tipe soal (mis. Error
    // Recognition di JadiOJK) memang menaruh penanda (A)(B)(C) di dalam
    // kalimat dan tidak punya opsi terpisah — itu wajar. `isiKosong` berarti
    // Markaz tidak memuat isinya sama sekali, dan soal seperti itu tidak
    // boleh dipakai.
    isiKosong: !pertanyaan.trim(),
    sisaMentah: [...new Set([pertanyaan, olah.isiPembahasan, ...opsi.map((o) => o.teks)].flatMap(sisaMentah))],
    // Gambar disimpan INLINE sebagai penanda di teksnya.
    gambar: '',
  };
}

// ── Pengunduh gambar ─────────────────────────────────────────────────────
// Gambar dari Markaz diunduh ke public/gambar/<platform>/ supaya situsnya
// berdiri sendiri: kalau bucket asalnya berubah, gambarnya tidak ikut putus.

/**
 * Hanya host yang memang dipakai Markaz. Scraper tidak boleh jadi pengunduh
 * URL sembarangan hanya karena sebuah soal memuat tautan gambar.
 * st-N.cerehub.id adalah bank gambar Markaz sendiri (markaz.cerehub.id);
 * soal JadiOJK dan JagoTPA menyimpan gambarnya di sana.
 */
const HOST_GAMBAR = /^https:\/\/(storage\.googleapis\.com|st-\d+\.cerebrum\.id|st-\d+\.cerehub\.id)\//i;
const BATAS_BYTE = 3 * 1024 * 1024;
const POLA_PENANDA = /⟦gambar:([^⟧]+)⟧/g;

export async function unduhGambar(daftar, platform) {
  const dir = path.join('public', 'gambar', platform);
  await mkdir(dir, { recursive: true });
  const peta = new Map(); // url asal -> jalur lokal
  const catatan = { diunduh: 0, dipakaiUlang: 0, ditolak: [] };

  async function satu(url) {
    if (url.startsWith('gambar/')) return url; // sudah lokal (olah ulang)
    if (peta.has(url)) { catatan.dipakaiUlang++; return peta.get(url); }
    if (!HOST_GAMBAR.test(url)) { catatan.ditolak.push(`host tidak dikenal: ${url}`); return null; }
    const dasar = decodeURIComponent(url.split('?')[0].split('/').pop() || '')
      .replace(/[^A-Za-z0-9._-]+/g, '_');
    const m = dasar.match(/^(.*?)\.(png|jpe?g|gif|webp|svg)$/i);
    if (!m) { catatan.ditolak.push(`bukan berkas gambar: ${url}`); return null; }
    // Nama asli seperti "No._65.png" atau "Soal_28.png" dipakai banyak soal
    // berbeda di folder sumber yang berbeda. Sidik URL membuat namanya unik,
    // supaya gambar yang sudah ada tidak dipasang ke soal yang salah.
    const sidik = createHash('sha1').update(url).digest('hex').slice(0, 8);
    const nama = `${m[1].slice(-60)}-${sidik}.${m[2].toLowerCase()}`;
    const lokal = `gambar/${platform}/${nama}`;
    // Sudah pernah diunduh (mis. saat olah ulang): pakai yang ada.
    if (await stat(path.join(dir, nama)).then(() => true, () => false)) {
      catatan.dipakaiUlang++;
      peta.set(url, lokal);
      return lokal;
    }
    try {
      const r = await fetch(url);
      if (!r.ok) { catatan.ditolak.push(`HTTP ${r.status}: ${url}`); return null; }
      const buf = Buffer.from(await r.arrayBuffer());
      if (buf.length > BATAS_BYTE) { catatan.ditolak.push(`terlalu besar (${buf.length} B): ${url}`); return null; }
      await writeFile(path.join(dir, nama), buf);
      catatan.diunduh++;
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
      // Gambar yang gagal diunduh TIDAK dihapus diam-diam: penandanya tetap
      // menunjuk URL asal, jadi halaman masih bisa memuatnya dari sana.
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
