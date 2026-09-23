/**
 * Rumus di dalam teks soal.
 *
 * Rumus ditulis LaTeX di antara \( dan \), di posisinya di dalam kalimat —
 * seperti penanda gambar. Di berkas .ts garis miringnya DIGANDAKAN karena
 * teksnya template literal: `x = \\(\\frac{1}{2}\\)`. Rumus yang menempati
 * satu baris sendiri ditampilkan sebagai blok.
 *
 * Situs merendernya dengan KaTeX di server (lib/isi-kaya.ts). Modul ini
 * sengaja TANPA KaTeX: isinya hanya pengubah LaTeX ke teks biasa, untuk
 * tempat yang tidak bisa merender rumus — cuplikan pencarian dan dokumen
 * .docx. Hasilnya pendekatan, bukan tampilan utama.
 */

export const POLA_RUMUS = /\\\(([\s\S]+?)\\\)/g;
export const POLA_GAMBAR = /⟦gambar:([^⟧]+)⟧/g;

const SUP: Record<string, string> = {
  0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹',
  '+': '⁺', '-': '⁻', '−': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ',
  k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ',
  v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
};
const SUB: Record<string, string> = {
  0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉',
  '+': '₊', '-': '₋', '−': '₋', '=': '₌', '(': '₍', ')': '₎',
  a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', o: 'ₒ',
  p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
};

const SIMBOL: Record<string, string> = {
  times: '×', div: '÷', cdot: '·', pm: '±', mp: '∓', le: '≤', leq: '≤', ge: '≥',
  geq: '≥', ne: '≠', neq: '≠', approx: '≈', equiv: '≡', sim: '∼', to: '→',
  rightarrow: '→', Rightarrow: '⇒', leftarrow: '←', Leftarrow: '⇐',
  leftrightarrow: '↔', Leftrightarrow: '⇔', infty: '∞', pi: 'π', alpha: 'α',
  beta: 'β', gamma: 'γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε', varepsilon: 'ε',
  theta: 'θ', lambda: 'λ', mu: 'μ', rho: 'ρ', sigma: 'σ', Sigma: 'Σ', tau: 'τ',
  phi: 'φ', varphi: 'φ', omega: 'ω', Omega: 'Ω', Pi: 'Π', Theta: 'Θ',
  circ: '°', degree: '°', angle: '∠', triangle: '△', perp: '⊥', parallel: '∥',
  in: '∈', notin: '∉', subset: '⊂', subseteq: '⊆', cup: '∪', cap: '∩',
  emptyset: '∅', forall: '∀', exists: '∃', neg: '¬', lnot: '¬', land: '∧',
  wedge: '∧', lor: '∨', vee: '∨', therefore: '∴', because: '∵', ldots: '…',
  cdots: '⋯', dots: '…', sum: 'Σ', prod: '∏', int: '∫', partial: '∂', surd: '√',
  mid: '|', quad: ' ', qquad: '  ', sin: 'sin', cos: 'cos', tan: 'tan',
  log: 'log', ln: 'ln', lim: 'lim', max: 'max', min: 'min',
};

/** Superskrip/subskrip Unicode bila semua hurufnya punya padanan; selain itu ^(…) / _(…). */
function angkat(t: string, peta: Record<string, string>, tanda: string) {
  const s = t.replace(/\s+/g, '');
  if (!s) return '';
  const hasil = [...s].map((c) => peta[c]);
  if (hasil.every(Boolean) && (/^[0-9+\-−=()]+$/.test(s) || s.length <= 4)) return hasil.join('');
  return s.length === 1 ? `${tanda}${s}` : `${tanda}(${s})`;
}
const kurung = (t: string) => (/[+\-−×÷/=\s]/.test(t.trim()) ? `(${t.trim()})` : t.trim());
function pecahan(a: string, b: string) {
  if (/^\d{1,3}$/.test(a) && /^\d{1,3}$/.test(b)) return `${angkat(a, SUP, '^')}⁄${angkat(b, SUB, '_')}`;
  return `${kurung(a)}/${kurung(b)}`;
}

/**
 * LaTeX -> teks biasa. Parser kecil yang cukup untuk rumus hasil scraper
 * (pecahan, pangkat, indeks, akar, simbol) dan rumus sederhana ketikan.
 * Perintah yang tidak dikenal ditulis tanpa garis miringnya.
 */
export function latexKeTeks(latex: string): string {
  const s = latex;
  let i = 0;
  const spasi = () => { while (i < s.length && /\s/.test(s[i])) i++; };

  function grup(): string {
    spasi();
    if (s[i] === '{') {
      i++;
      const isi = urutan('}');
      i++;
      return isi;
    }
    return satuan();
  }

  function perintah(): string {
    i++; // garis miring
    const m = /^[A-Za-z]+/.exec(s.slice(i));
    const nama = m ? m[0] : s[i] ?? '';
    i += nama.length || 1;
    switch (nama) {
      case '\\': return '; ';
      case ',': case ';': case ':': case ' ': return ' ';
      case '!': return '';
      case '{': case '}': case '%': case '$': case '&': case '#': case '_': return nama;
      case 'frac': case 'dfrac': case 'tfrac': { const a = grup(); const b = grup(); return pecahan(a, b); }
      case 'binom': { const a = grup(); const b = grup(); return `C(${a}, ${b})`; }
      case 'sqrt': {
        spasi();
        let pangkat = '';
        if (s[i] === '[') { const tutup = s.indexOf(']', i); pangkat = s.slice(i + 1, tutup); i = tutup + 1; }
        const isi = grup();
        return `${pangkat ? angkat(pangkat, SUP, '^') : ''}√${kurung(isi)}`;
      }
      case 'text': case 'mathrm': case 'textbf': case 'mathbf': case 'textit':
      case 'mathit': case 'operatorname': case 'mbox': case 'textrm':
        return grup();
      case 'overline': case 'bar': return [...grup()].map((c) => c + '̅').join('');
      case 'vec': case 'overrightarrow': return grup() + '⃗';
      case 'hat': case 'widehat': return grup() + '̂';
      case 'overset': { const atas = grup(); const bawah = grup(); return `${bawah}${angkat(atas, SUP, '^')}`; }
      case 'underset': { const bawah = grup(); const dasar = grup(); return `${dasar}${angkat(bawah, SUB, '_')}`; }
      case 'left': case 'right': case 'big': case 'Big': case 'bigg': case 'Bigg': {
        spasi();
        if (s[i] === '.') { i++; return ''; }
        if (s[i] === '\\') return perintah();
        return s[i++] ?? '';
      }
      case 'begin': case 'end': grup(); return nama === 'end' ? ' ' : '';
      case 'phantom': grup(); return '';
      default: return SIMBOL[nama] ?? nama;
    }
  }

  function satuan(): string {
    spasi();
    if (i >= s.length) return '';
    if (s[i] === '\\') return perintah();
    return s[i++];
  }

  function urutan(akhir?: string): string {
    let out = '';
    while (i < s.length && s[i] !== akhir) {
      const c = s[i];
      if (c === '^' || c === '_') {
        i++;
        const arg = grup();
        // 30^{\circ} adalah derajat, bukan pangkat.
        if (c === '^' && (arg === '°' || arg === '∘')) out += '°';
        else out += c === '^' ? angkat(arg, SUP, '^') : angkat(arg, SUB, '_');
      } else if (c === '{') {
        i++;
        out += urutan('}');
        i++;
      } else if (c === '}') {
        i++; // kurung tutup yatim: dilewati
      } else if (c === '&') {
        i++;
        out += ' | ';
      } else if (c === '~') {
        i++;
        out += ' ';
      } else if (c === '\\') {
        out += perintah();
      } else {
        out += c;
        i++;
      }
    }
    return out;
  }

  return urutan().replace(/[ \t]+/g, ' ').trim();
}

/** Teks tanpa penanda gambar dan dengan rumus sebagai teks biasa. */
export function teksPolos(teks: string, gantiGambar = ' ') {
  return teks
    .replace(POLA_GAMBAR, gantiGambar)
    .replace(POLA_RUMUS, (_, latex: string) => latexKeTeks(latex))
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
