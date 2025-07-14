// pages/index.js (Perbaikan Lanjutan untuk Layout)
import { motion } from 'framer-motion';
import Link from 'next/link';
// import Navbar from '../components/Navbar'; // Dihapus karena dirender di _app.js

export default function Home() {
  return (
    // Pastikan root div mengisi seluruh viewport dan tidak ada overflow horizontal
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-x-hidden">
      {/* Navbar dirender secara global dari _app.js */}

      {/* Container utama untuk konten hero */}
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Konten Teks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Di mobile: lebar penuh, teks di tengah. Di md ke atas: setengah lebar, teks kiri
          className="w-full text-center md:text-left md:w-1/2 flex-shrink-0" 
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
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md object-contain md:w-1/2 flex-shrink-0" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
}