import Link from "next/link";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#profile" },
  { name: "Product", href: "#product" },
  { name: "Workflow", href: "#workflow" },
  { name: "Teach Stack", href: "#techstack" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 mt-auto border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-black tracking-tighter group">
              TECHNOLOGY <span className="text-blue-500 group-hover:text-blue-400 transition-colors">MULTI SYSTEM</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">Membangun solusi digital yang fungsional dan estetis. Kami fokus pada pengembangan sistem yang membantu efisiensi bisnis Anda di era digital.</p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-500 mb-6">Navigasi</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Layanan Digital
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-500 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">© {new Date().getFullYear()} TMS — TASIKMALAYA, INDONESIA.</p>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-xs text-slate-500 hover:text-blue-400 transition-all font-bold uppercase tracking-widest">
              Instagram
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-blue-400 transition-all font-bold uppercase tracking-widest">
              Github
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-blue-400 transition-all font-bold uppercase tracking-widest">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
