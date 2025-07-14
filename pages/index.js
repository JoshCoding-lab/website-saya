// pages/index.js
import { motion } from 'framer-motion';
import Link from 'next/link';
// Tidak perlu import Navbar di sini jika sudah di _app.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navbar dirender secara global dari _app.js */}

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 p-8">
        {/* Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left w-full md:w-1/2" // Tambahkan w-full dan md:w-1/2
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            SECURAL ID 👋
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            adalah sebuah komunitas yang fokus pada edukasi dan 
            kesadaran masyarakat mengenai keamanan data dan privasi digital
          </p>
          <Link
            href="/artikel"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Jelajahi Artikel
          </Link>
        </motion.div>

        {/* Gambar Hero */}
        <motion.img
          src="/hero-image.svg" // pastikan gambar ini ada di folder `public` Anda
          alt="Hero Image"
          // Class untuk responsivitas gambar
          className="w-full h-auto max-w-sm md:max-w-md object-contain md:w-1/2" // Modifikasi di sini
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
}