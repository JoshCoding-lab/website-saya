import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            Tentang Kami
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Kami adalah tim kreatif yang percaya bahwa informasi berkualitas harus mudah diakses.
            Website ini dibangun untuk menyajikan artikel informatif yang bermanfaat bagi semua kalangan.
          </p>
        </motion.div>

        <motion.img
          src="/about-img.svg"
          alt="Tentang Kami"
          className="w-full max-w-xs sm:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </div>
  );
}
