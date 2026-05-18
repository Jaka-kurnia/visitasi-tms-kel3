import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo atau Nama Brand */}
          <div className="text-xl font-bold">
            <Link href="/" className="hover:text-blue-400 transition">
              NamaBrand
            </Link>
          </div>

          {/* Navigasi */}
          <ul className="flex gap-6 text-sm text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white transition">Tentang</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">Layanan</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Kontak</Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} NamaBrand.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;