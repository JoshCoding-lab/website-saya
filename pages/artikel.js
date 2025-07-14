import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Pencil, Trash2 } from 'lucide-react'; // ikon dari lucide-react

export default function Artikel() {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    fetchArtikel();
  }, []);

  const fetchArtikel = async () => {
    const { data, error } = await supabase.from('artikel').select('*');

    if (error) {
      console.error('Gagal mengambil data:', error);
    } else {
      setArtikel(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">📰 Daftar Artikel</h1>

        {artikel.length === 0 && (
          <p className="text-center text-gray-500">Belum ada artikel.</p>
        )}

        <div className="space-y-6">
          {artikel.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-800">{item.judul}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Ditulis oleh <span className="font-medium">{item.penulis}</span> pada {new Date(item.tanggal).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4">{item.konten}</p>

              <div className="flex gap-4">
                <a
                  href={`/edit/${item.id}`}
                  className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                >
                  <Pencil size={16} /> Edit
                </a>
                <button
                  onClick={async () => {
                    const konfirmasi = confirm(`Yakin mau hapus artikel "${item.judul}"?`);
                    if (konfirmasi) {
                      const { error } = await supabase
                        .from('artikel')
                        .delete()
                        .eq('id', item.id);

                      if (error) {
                        alert('Gagal menghapus artikel.');
                        console.error(error);
                      } else {
                        alert('Artikel berhasil dihapus.');
                        fetchArtikel(); // refresh
                      }
                    }
                  }}
                  className="flex items-center gap-1 text-red-600 hover:underline text-sm"
                >
                  <Trash2 size={16} /> Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
