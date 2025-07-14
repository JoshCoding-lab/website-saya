import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Secural ID</div>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-yellow-300">Beranda</Link>
        <Link href="/about" className="hover:text-yellow-300">Tentang Kami</Link>
        <Link href="/deskripsi" className="hover:text-yellow-300">Deskripsi</Link>
        <Link href="/contact" className="hover:text-yellow-300">Hubungi Kami</Link>
        <Link href="/artikel" className="hover:text-yellow-300">Artikel</Link>
        <Link href="/tambah" className="hover:text-yellow-300">Tambah Artikel</Link>
      </div>
    </nav>
  );
}
