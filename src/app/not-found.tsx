export default function TidakDitemukan() {
  return (
    <div className="panel panel-peringatan" style={{ marginTop: 40 }}>
      <h1 style={{ marginTop: 0 }}>Tidak ditemukan</h1>
      <p style={{ marginBottom: 0 }}>
        Halaman ini tidak ada, atau baris datanya sudah dihapus dari spreadsheet.{' '}
        <a href="/">Kembali ke daftar platform</a>.
      </p>
    </div>
  );
}
