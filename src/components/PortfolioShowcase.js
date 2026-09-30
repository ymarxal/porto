"use client";

import { PROJECTS_DATA } from "@/data/projectsData";
import { ExternalLink, Coffee, ArrowRight, Layers, Sparkles } from "lucide-react";

export default function PortfolioShowcase({ onSelectProject }) {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#121212] text-white relative border-t border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Seksi */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Karya Digital & Sistem Web
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-medium max-w-2xl leading-relaxed pt-1">
              Beberapa proyek website dan aplikasi digital pilihan yang pernah saya rancang dan kembangkan, mencakup platform digital, portal resmi, hingga sistem informasi interaktif.
            </p>
          </div>
        </div>

        {/* Kotak Website & Aplikasi Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const isCafePOS = project.id === "algopos" || project.id === "smartcafepos";
            const isKotaCloud = project.id === "kotacloud";
            const isNawala = project.id === "nawala18";

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-[#161616] border border-neutral-800 shadow-xl hover:border-[#eee642] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image / Background Preview Container */}
                <div 
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 flex items-center justify-center p-6 cursor-pointer"
                >
                  {/* Hero Background Banner */}
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black opacity-80" />
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-black/60 to-black/50" />

                  {/* LOGO / BRAND IDENTITAS DI TENGAH KOTAK */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
                    <div className="px-5 py-3.5 rounded-2xl bg-black/85 backdrop-blur-xl border border-neutral-700/80 shadow-2xl flex items-center justify-center gap-3 group-hover:scale-105 group-hover:border-[#eee642] transition-all duration-500 max-w-[90%]">
                      <img
                        src={project.logoUrl}
                        alt={`Logo ${project.title}`}
                        className="h-9 sm:h-11 w-auto object-contain rounded-lg shrink-0"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = isKotaCloud 
                            ? "/images/favicons/kotacloud-favicon.svg" 
                            : isCafePOS
                            ? "/images/logos/algopos.svg"
                            : isNawala
                            ? "/images/favicons/nawala18-favicon.svg"
                            : "/images/favicons/sman13takalar-favicon.svg";
                        }}
                      />
                      
                      <div className="text-left border-l border-neutral-700 pl-3">
                        <h4 className="text-xs sm:text-sm font-black text-white leading-tight line-clamp-1">
                          {project.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#eee642] block">
                          {isCafePOS 
                            ? "Fullstack POS & Ordering" 
                            : isNawala 
                            ? "3D Interactive Yearbook" 
                            : "Official Website"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top Left Badge Nomor + Badge Tech */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-20 flex-wrap">
                    <span className="font-mono text-[10px] font-black uppercase text-[#eee642] tracking-wider px-2.5 py-0.5 rounded-full bg-black/80 border border-neutral-800">
                      PROYEK 0{index + 1}
                    </span>
                    <span className="font-mono text-[10px] font-black text-white px-2 py-0.5 rounded-full bg-black/80 border border-neutral-800 uppercase tracking-wider">
                      {project.badgeText || "NEXT.JS"}
                    </span>
                  </div>

                  {/* Top Right Year */}
                  <div className="absolute top-3.5 right-3.5 font-mono text-[10px] font-bold text-neutral-300 px-2 py-0.5 rounded-full bg-black/80 border border-neutral-800 z-20">
                    {project.year}
                  </div>
                </div>

                {/* Detail Content Box */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Meta info / Link / Akademik Tag */}
                    {project.hasLiveLink && project.link ? (
                      <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-black/50 border border-neutral-800 w-fit max-w-full">
                        <img
                          src={project.faviconUrl}
                          alt={`${project.title} Favicon`}
                          className="w-3.5 h-3.5 rounded object-contain shrink-0"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = isNawala
                              ? "/images/favicons/nawala18-favicon.svg"
                              : `https://www.google.com/s2/favicons?domain=${new URL(project.link).hostname}&sz=64`;
                          }}
                        />
                        <div className="flex items-center gap-1 text-[11px] font-mono text-[#eee642] truncate">
                          <ExternalLink className="w-3 h-3 shrink-0" />
                          <span className="truncate">{project.link}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-black/50 border border-neutral-800 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#eee642] animate-pulse" />
                        <span className="text-[11px] font-mono font-bold text-[#eee642]">
                          Tugas Sistem Informasi
                        </span>
                      </div>
                    )}

                    <h3 
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="text-lg font-black text-white tracking-tight group-hover:text-[#eee642] transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-400 font-medium leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tombol Aksi */}
                  <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
                    {project.hasLiveLink && project.link ? (
                      <>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white font-mono text-[11px] font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
                        >
                          <span>KUNJUNGI WEBSITE ↗</span>
                        </a>
                        <button
                          onClick={() => onSelectProject && onSelectProject(project)}
                          className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 font-mono text-[10px] font-bold uppercase transition-all cursor-pointer"
                        >
                          <span>Lihat Studi Kasus</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onSelectProject && onSelectProject(project)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white font-mono text-[11px] font-black uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                      >
                        <span>LIHAT DETAIL & DOKUMENTASI ➔</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
