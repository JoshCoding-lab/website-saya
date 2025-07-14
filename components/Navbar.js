import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link href="/" className="hover:underline">Beranda</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">Tentang Kami</Link>
        </li>
        <li>
          <Link href="/deskripsi" className="hover:underline">Deskripsi</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Hubungi Kami</Link>
        </li>
        <li><a href="/tambah">Tambah Artikel</a></li>
        <li>
  <a href="/artikel" className="text-white hover:text-gray-300">Artikel</a>
</li>

   </ul>
    </nav>
  );
}
