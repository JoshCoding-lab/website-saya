import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            SECURAL ID 👋
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
            adalah sebuah komunitas yang fokus pada edukasi dan 
            kesadaran masyarakat mengenai keamanan data dan privasi digital
          </p>
          <Link
            href="/artikel"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Jelajahi Artikel
          </Link>
        </motion.div>

        <motion.img
          src="/hero-image.svg"
          alt="Hero Image"
          className="w-full max-w-xs sm:max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </div>
  );
}
