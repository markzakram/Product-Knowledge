/**
 * Audio soal (mis. Listening TOEFL).
 *
 * Jalurnya ditulis di `Soal.audio` relatif terhadap `public/`. Modul ini
 * sengaja TANPA fs dan data: dipakai komponen klien untuk memutuskan apakah
 * sebuah jalur boleh jadi atribut src, dan oleh pemeriksa isi. Keberadaan
 * berkasnya diperiksa di server (lib/isi-kaya.ts, periksaAudio).
 *
 * Pola aman: audio/ + huruf, angka, titik, garis, atau garis miring + .mp3,
 * tanpa segmen "..". Sejalan dengan AMAN untuk gambar di lib/isi-kaya.ts.
 */
export const AUDIO_AMAN = /^audio\/(?!.*\.\.)[A-Za-z0-9._/-]+\.mp3$/;

export const audioAman = (jalur: string | undefined): jalur is string =>
  !!jalur && AUDIO_AMAN.test(jalur);
