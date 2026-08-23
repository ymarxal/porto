"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[100] w-[92%] max-w-[1020px] transition-all duration-300">
      {/* Floating Capsule Bar (Gaya OkayDev.co Dark Theme) */}
      <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-[#0c0c0c]/90 backdrop-blur-xl border border-neutral-800 shadow-2xl shadow-black/80 transition-all duration-300">
        
        {/* Brand Logo & Nama Yusuf Marcelino (Khas Logo OkayDev Kuning) */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white font-bold tracking-tight cursor-pointer"
        >
          <span className="w-9 h-9 rounded-full bg-[#eee642] text-[#0c0c0c] flex items-center justify-center font-mono text-xs font-black group-hover:scale-110 transition-transform shadow-md">
            YM
          </span>
          <span className="font-black text-lg tracking-tight text-white group-hover:text-[#eee642] transition-colors uppercase">
            YUSUF MARCELINO
          </span>
        </a>

        {/* Tautan Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-wider uppercase text-neutral-300">
          <a
            href="#portfolio"
            className="hover:text-[#eee642] transition-colors cursor-pointer"
          >
            Portofolio
          </a>
          <a
            href="#about"
            className="hover:text-[#eee642] transition-colors cursor-pointer"
          >
            Tentang
          </a>
          <a
            href="#contact"
            className="hover:text-[#eee642] transition-colors cursor-pointer"
          >
            Kontak
          </a>
        </nav>

        {/* Tombol CTA Lihat CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/CV-YUSUF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Lihat CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white rounded-full hover:bg-neutral-800 cursor-pointer"
          aria-label="Buka Menu Navigasi"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Drawer Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#0c0c0c] border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-bold text-white">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#eee642]"
            >
              Portofolio
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#eee642]"
            >
              Tentang Saya
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#eee642]"
            >
              Kontak
            </a>
          </nav>
          <div className="pt-3 border-t border-neutral-800">
            <a
              href="/CV-YUSUF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#eee642] text-[#0c0c0c] font-black text-xs uppercase tracking-wider shadow-md"
            >
              <span>Lihat CV</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
