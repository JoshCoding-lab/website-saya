import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">Secural ID</Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none p-2 rounded-md hover:bg-blue-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {menuItems.map(({ href, label }) => (
            <Link href={href} key={href}>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition">
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-blue-600 mt-3 rounded-lg shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-2 space-y-2">
              {menuItems.map(({ href, label }) => (
                <Link href={href} key={href}>
                  <button 
                    className="w-full text-left bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const menuItems = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/deskripsi', label: 'Deskripsi' },
  { href: '/contact', label: 'Hubungi Kami' },
  { href: '/artikel', label: 'Artikel' },
  { href: '/tambah', label: 'Tambah Artikel' },
];