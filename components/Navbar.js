// components/Navbar.js (Versi Responsif dengan Hamburger Menu)
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Nama Situs */}
        <Link href="/" className="text-xl font-bold">
          Secural ID
        </Link>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none focus:text-yellow-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Navigasi (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Link href="/" className="hover:text-yellow-300">Beranda</Link>
          <Link href="/about" className="hover:text-yellow-300">Tentang Kami</Link>
          <Link href="/deskripsi" className="hover:text-yellow-300">Deskripsi</Link>
          <Link href="/contact" className="hover:text-yellow-300">Hubungi Kami</Link>
          <Link href="/artikel" className="hover:text-yellow-300">Artikel</Link>
          <Link href="/tambah" className="hover:text-yellow-300">Tambah Artikel</Link>
        </div>
      </div>

      {/* Menu Navigasi (Mobile - Tampil saat isOpen true) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block hover:text-yellow-300 px-4 py-2">Beranda</Link>
          <Link href="/about" className="block hover:text-yellow-300 px-4 py-2">Tentang Kami</Link>
          <Link href="/deskripsi" className="block hover:text-yellow-300 px-4 py-2">Deskripsi</Link>
          <Link href="/contact" className="block hover:text-yellow-300 px-4 py-2">Hubungi Kami</Link>
          <Link href="/artikel" className="block hover:text-yellow-300 px-4 py-2">Artikel</Link>
          <Link href="/tambah" className="block hover:text-yellow-300 px-4 py-2">Tambah Artikel</Link>
        </div>
      )}
    </nav>
  );
}