import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center md:text-left">
            Hubungi Kami
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Kirim Pesan
            </button>
          </form>
        </motion.div>

        <motion.img
          src="/contact-img.svg"
          alt="Ilustrasi Kontak"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </div>
  );
}
