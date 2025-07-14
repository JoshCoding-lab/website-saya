import { motion } from 'framer-motion';

export default function Deskripsi() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-100 px-4 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src="/description-img.svg"
          alt="Deskripsi"
          className="w-full max-w-xs sm:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Deskripsi Website</h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Website ini merupakan platform edukatif yang dibangun menggunakan Next.js dan Supabase.
            Tujuannya adalah untuk menyebarkan informasi, artikel, dan wawasan seputar keamanan digital dan teknologi
            informasi kepada masyarakat luas.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mb-3">Apa yang Dilakukan Komunitas Ini?</h2>
          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <div>
              <strong>Mengajar masyarakat tentang cara:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>🔐 Mengamankan akun media sosial</li>
                <li>⚠️ Mengenali phishing dan penipuan digital</li>
                <li>📱 Menggunakan aplikasi dengan aman dan sadar izin akses data</li>
              </ul>
            </div>
            <div>
              <strong>Memberikan penyuluhan terkait:</strong>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>🔑 Pentingnya kata sandi yang kuat</li>
                <li>🛡️ Penggunaan VPN dan autentikasi dua faktor (2FA)</li>
                <li>📶 Bahaya mengakses WiFi publik tanpa perlindungan</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mt-6 text-base sm:text-lg">
            Komunitas <strong>Secural ID</strong> percaya bahwa edukasi keamanan siber adalah hak semua orang.
            Oleh karena itu, kami menyediakan platform ini sebagai jembatan literasi digital untuk semua kalangan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
