// pages/edit/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient'; // Sesuaikan path jika berbeda
import Link from 'next/link'; // Untuk tombol kembali atau navigasi lain

export default function EditArtikel() {
  const router = useRouter();
  const { id } = router.query; // Mengambil 'id' dari URL
  const [artikelData, setArtikelData] = useState(null);
  const [judul, setJudul] = useState('');
  const [penulis, setPenulis] = useState('');
  const [konten, setKonten] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) { // Pastikan ID sudah tersedia dari router
      fetchArtikelById(id);
    }
  }, [id]); // Jalankan ulang ketika ID berubah

  const fetchArtikelById = async (artikelId) => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('artikel')
      .select('*')
      .eq('id', artikelId)
      .single(); // Gunakan .single() karena kita mencari satu artikel berdasarkan ID

    if (error) {
      console.error('Gagal mengambil data artikel:', error);
      setError('Gagal memuat artikel. Artikel mungkin tidak ditemukan.');
      setLoading(false);
    } else if (data) {
      setArtikelData(data);
      setJudul(data.judul);
      setPenulis(data.penulis);
      setKonten(data.konten);
      setLoading(false);
    } else {
      setError('Artikel tidak ditemukan.');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from('artikel')
      .update({ judul, penulis, konten })
      .eq('id', id);

    if (error) {
      console.error('Gagal memperbarui artikel:', error);
      setError('Gagal memperbarui artikel.');
    } else {
      alert('Artikel berhasil diperbarui!');
      router.push('/artikel'); // Redirect kembali ke daftar artikel setelah berhasil
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Memuat artikel...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        <Link href="/artikel" className="text-blue-600 hover:underline">
          Kembali ke Daftar Artikel
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Edit Artikel</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="judul" className="block text-sm font-medium text-gray-700">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="penulis" className="block text-sm font-medium text-gray-700">
              Penulis
            </label>
            <input
              type="text"
              id="penulis"
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="konten" className="block text-sm font-medium text-gray-700">
              Konten
            </label>
            <textarea
              id="konten"
              value={konten}
              onChange={(e) => setKonten(e.target.value)}
              rows="10"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/artikel" className="text-blue-600 hover:underline">
              Batal
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}