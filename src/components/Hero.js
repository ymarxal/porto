"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SKILLS_LIST } from "@/data/projectsData";
import FeaturedDesignShowcase from "./FeaturedDesignShowcase";

export default function Hero({ onOpenContact }) {
  const marqueeItems = [
    "CREATIVE DESIGN",
    "WEBSITE DEVELOPER",
    "FRONTEND DEVELOPER",
  ];

  return (
    <section className="relative flex flex-col overflow-hidden bg-[#0c0c0c] text-white">

      {/* === AREA HERO ATAS (dengan grid pattern) === */}
      <div className="relative pt-36 pb-0 md:pt-44 md:pb-0 flex flex-col justify-between">
        {/* Grid Pattern Dark — mencakup seluruh area hero atas sampai ke banner */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="w-full mx-auto flex flex-col justify-center items-center text-center relative z-10">

          {/* Floating Container Utama Nama */}
          <div className="inline-flex flex-col items-center p-8 sm:p-14 rounded-[2.5rem] bg-[#121212]/90 backdrop-blur-xl border border-neutral-800 shadow-2xl shadow-black/80 mb-8 max-w-4xl transform hover:scale-[1.01] transition-transform duration-300 mx-6">

            {/* Subtitle HELLO, I'M */}
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#eee642] uppercase mb-4">
              HELLO, I'M
            </span>

            {/* Judul Utama Raksasa */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tight text-white leading-[0.95] mb-5 uppercase">
              YUSUF MARCELINO
            </h1>

            {/* Sub-judul */}
            <p className="text-lg sm:text-2xl font-bold text-[#eee642] tracking-tight mb-5 uppercase font-mono">
              Web Developer &amp; Creative Designer
            </p>

            {/* Deskripsi */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed">
              Saya merancang dan mengembangkan situs web yang mengubah ide menjadi pengalaman digital yang bermakna melalui desain, kode, dan kreativitas visual.
            </p>
          </div>

          {/* Tombol Aksi CTA (dengan margin bawah lebih lapang menuju banner) */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20 sm:mb-28 md:mb-36 mx-6">
            <a
              href="#portfolio"
              className="group px-8 py-4 rounded-full bg-[#eee642] text-[#0c0c0c] font-black text-base hover:bg-white transition-all duration-200 shadow-xl shadow-[#eee642]/10 flex items-center gap-3 cursor-pointer uppercase tracking-wider"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="/CV-YUSUF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-full bg-neutral-900 text-white border border-neutral-700 font-black text-base hover:bg-neutral-800 transition-all duration-200 flex items-center gap-2 shadow-lg cursor-pointer uppercase tracking-wider"
            >
              <span>Lihat CV</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Infinite Marquee Scrolling Ticker Banner (di posisi paling bawah area grid) */}
        <div className="w-full overflow-hidden py-5 bg-[#161616] text-white border-y border-neutral-800 shadow-2xl relative z-20">
          <div className="animate-marquee flex items-center whitespace-nowrap text-sm sm:text-base font-black tracking-[0.2em] uppercase font-mono">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-10 shrink-0 px-6">
                <span className="text-neutral-200">{item}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#eee642] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === AREA ABOUT (tanpa grid pattern, styling original About) === */}
      <div id="about" className="relative z-10 py-24 md:py-32 bg-[#121212] border-t border-b border-neutral-800">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Grid Utama: Foto + Bio Editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Foto / Visual */}
            <div className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-black shadow-2xl border border-neutral-800">
                <img
                  src="/yusuf1.svg"
                  alt="Yusuf Marcelino Portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/yusuf.svg";
                  }}
                />
              </div>
            </div>

            {/* Bio & Keterampilan Side */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  Yusuf Marcelino Ishak
                </h2>
                <span className="text-sm font-mono font-bold text-[#eee642] block mb-4 uppercase">
                  Web Developer &amp; Creative Designer
                </span>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                  Mahasiswa Sistem Informasi dengan ketertarikan kuat pada pengembangan antarmuka web modern, perancangan desain kreatif, dan dukungan pemasaran digital. Berpengalaman mengubah ide menjadi produk digital yang fungsional, estetis, dan ramah pengguna melalui kode dan visual.
                </p>
              </div>

              {/* Breakdown Keterampilan Utama */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  KEAHLIAN &amp; FOKUS UTAMA
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {SKILLS_LIST.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#181818] border border-neutral-800 hover:border-[#eee642] hover:shadow-xl transition-all duration-300 group"
                    >
                      <span className="text-[#eee642] font-mono text-xs font-black block mb-1.5 group-hover:scale-110 transition-transform">
                        0{idx + 1}
                      </span>
                      <h4 className="text-white font-extrabold text-sm sm:text-base mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed font-medium">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === AREA GALLERY (bg berbeda, selang-seling) === */}
      <div className="relative z-10 py-20 md:py-28 bg-[#0c0c0c]">
        {/* Panah Gulir */}
        <div className="flex justify-center mb-12">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-neutral-800 text-neutral-400 hover:text-[#eee642] hover:border-[#eee642] transition-colors animate-bounce shadow-sm cursor-pointer"
            aria-label="Gulir ke Bawah"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

        {/* Kotak Showcase 50 Foto Desain & Artwork */}
        <FeaturedDesignShowcase />
      </div>
    </section>
  );
}
