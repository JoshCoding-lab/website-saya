import { motion } from 'framer-motion';

export default function contact() {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-bold text-blue-700 mb-6">Hubungi Kami</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full border border-gray-400 p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full border border-gray-400 p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="w-full border border-gray-400 p-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Kirim Pesan
            </button>
          </form>
        </motion.div>

        <motion.img
          src="/contact-img.svg"
          alt="Contact"
          className="w-full max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </div>
  );
}
