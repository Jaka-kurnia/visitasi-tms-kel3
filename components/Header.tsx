"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Search } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Profile", href: "#" },
  { name: "Product", href: "#" },
  { name: "Workflow", href: "#" },
  { name: "Teach Stack", href: "#" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-sm">
              <span className="text-white font-bold text-lg">TMS</span>
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              DESIGN<span className="text-blue-600">CORE</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-slate-600 font-medium text-sm transition-colors duration-300 hover:text-blue-600 group">
                {link.name}
                {/* Garis bawah biru yang berpindah/melebar saat hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-slate-500 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 flex items-center gap-2">
              Get Started
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-4 py-4 border-t border-slate-100">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 font-medium py-2 hover:text-blue-600 transition-colors flex justify-between items-center">
                {link.name}
                <ChevronRight size={14} className="opacity-40" />
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mt-2">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
