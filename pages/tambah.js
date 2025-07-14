import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';

export default function TambahArtikel() {
  const [judul, setJudul] = useState('');
  const [konten, setKonten] = useState('');
  const [penulis, setPenulis] = useState('');
  const [tanggal, setTanggal] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('artikel').insert([{ judul, konten, penulis, tanggal }]);

    if (error) {
      alert('Gagal menambahkan artikel');
    } else {
      alert('Artikel berhasil ditambahkan');
      router.push('/artikel');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="max-w-3xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center md:text-left">
            Tambah Artikel Baru
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Konten"
              value={konten}
              onChange={(e) => setKonten(e.target.value)}
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Penulis"
              value={penulis}
              onChange={(e) => setPenulis(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Simpan Artikel
            </button>
          </form>
        </motion.div>

        <motion.img
          src="/write-img.svg"
          alt="Ilustrasi Menulis"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
