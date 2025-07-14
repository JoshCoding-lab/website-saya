// pages/artikel.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Pencil, Trash2 } from 'lucide-react'; // ikon dari lucide-react
import Link from 'next/link'; // Import Link untuk navigasi internal yang benar

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

  // Fungsi untuk mengkonversi URL dalam teks menjadi link HTML
  const renderContentWithLinks = (text) => {
    // Regex untuk mendeteksi URL. Ini adalah regex dasar, mungkin perlu disempurnakan.
    // Deteksi http(s)://, www., atau teks.com
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/igm;
    
    // Mengganti URL yang ditemukan dengan tag <a>
    const linkedText = text.replace(urlRegex, (url) => {
      // Pastikan URL memiliki http(s):// agar berfungsi dengan benar
      let fullUrl = url;
      if (!url.match(/^(https?|ftp|file):\/\//i) && url.match(/^www\./i)) {
        fullUrl = 'http://' + url; // Tambahkan http:// jika hanya www.
      } else if (!url.match(/^(https?|ftp|file):\/\//i) && url.includes('.')) {
        // Ini adalah kasus yang lebih kompleks, bisa jadi email atau domain tanpa www/http
        // Untuk email, biarkan saja (regex di atas juga mendeteksi email, tapi kita fokus pada link)
        // Untuk domain tanpa www/http, bisa tambahkan http://
        if (!url.includes('@')) { // Bukan email
            fullUrl = 'http://' + url;
        }
      }
      return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${url}</a>`;
    });
    return { __html: linkedText };
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
              {/* Gunakan dangerouslySetInnerHTML untuk merender konten dengan link */}
              <p
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={renderContentWithLinks(item.konten)}
              ></p>

              <div className="flex gap-4">
                {/* Menggunakan Link Next.js untuk navigasi internal */}
                <Link
                  href={`/edit/${item.id}`} // Pastikan Anda memiliki halaman pages/edit/[id].js
                  className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                >
                  <Pencil size={16} /> Edit
                </Link>
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