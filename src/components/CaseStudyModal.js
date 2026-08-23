"use client";

import { useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Sparkles, ExternalLink, QrCode, Store, ShieldCheck, CheckCircle2, FolderTree, Cpu, Coffee } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function CaseStudyModal({ project, onClose, onSelectProject }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  const toolsList = project.tools || ["React", "Next.js", "Tailwind CSS", "Laravel"];

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center overflow-y-auto bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-2 sm:p-4 md:p-6">
      <div className="relative w-full max-w-5xl my-auto bg-[#141414] rounded-3xl shadow-2xl overflow-hidden text-white border border-neutral-800 max-h-[92vh] flex flex-col">
        
        {/* Tombol Tutup X Kuning Terang Floating */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white transition-colors shadow-2xl cursor-pointer font-black"
          aria-label="Tutup Detail Proyek"
        >
          <X className="w-5 h-5 font-black" />
        </button>

        {/* Scrollable Modal Body Container */}
        <div className="overflow-y-auto w-full">
          
          {/* Header Bar Detail Proyek */}
          <div className="px-6 sm:px-10 md:px-14 pt-12 pb-10 bg-[#1a1a1a] border-b border-neutral-800">
            <div className="flex items-center gap-2.5 mb-4 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-[#eee642] text-[#0c0c0c] text-xs font-black uppercase tracking-wider">
                {project.category}
              </span>
              <span className="font-mono text-xs font-bold text-neutral-400">
                PROYEK 0{currentIndex + 1}
              </span>
              {project.badgeText && (
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/70 border border-neutral-700 text-neutral-300">
                  {project.badgeText}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-3xl mb-6">
              {project.tagline || project.overview}
            </p>

            {/* Tautan Website Resmi / Status Akademik */}
            {project.hasLiveLink && project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eee642] text-[#0c0c0c] font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors mb-6 shadow-lg"
              >
                <span>Kunjungi {project.link} ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-neutral-700 text-xs font-mono text-[#eee642] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#eee642] animate-pulse" />
                <span>{project.client || "Tugas Kuliah (Sistem Informasi)"}</span>
              </div>
            )}

            {/* Grid Metadata Proyek (Role, Client, Tools) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800 text-xs sm:text-sm">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-mono">
                  Peran (Role)
                </span>
                <span className="font-semibold text-white">{project.role}</span>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-mono">
                  Tahun / Kategori
                </span>
                <span className="font-semibold text-white">{project.year} • {project.category}</span>
              </div>

              <div className="col-span-2 sm:col-span-2">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1 font-mono">
                  Teknologi & Stack
                </span>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {toolsList.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-black border border-neutral-800 text-[11px] font-semibold text-[#eee642] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Konten Utama Studi Kasus */}
          <div className="px-6 sm:px-10 md:px-14 py-12 space-y-14 bg-[#141414]">
            
            {/* Seksi: Overview & Tantangan */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#eee642]" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#eee642] font-mono">
                  01 — RINGKASAN & LATAR BELAKANG
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-neutral-800 space-y-2">
                  <h4 className="font-bold text-white text-base font-mono uppercase text-[#eee642]">
                    Gambaran Sistem
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                    {project.overview}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0e0e0e] border border-neutral-800 space-y-2">
                  <h4 className="font-bold text-white text-base font-mono uppercase text-[#eee642]">
                    Tantangan & Kebutuhan
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </div>

            {/* Seksi Khusus Fitur Multi-Role (Pelanggan, Kasir, Admin) jika ada */}
            {project.systemFeatures && (
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#eee642]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#eee642] font-mono">
                    02 — FITUR UTAMA SISTEM BERDASARKAN ROLE
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.systemFeatures.map((feat, idx) => {
                    const isCust = idx === 0;
                    const isCashier = idx === 1;

                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-[#0e0e0e] border border-neutral-800 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-[#eee642] text-[#0c0c0c] flex items-center justify-center font-black">
                              {isCust ? <QrCode className="w-5 h-5" /> : isCashier ? <Store className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                            </div>
                            <span className="text-[10px] font-mono font-bold uppercase text-[#eee642] bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
                              {feat.tag}
                            </span>
                          </div>

                          <h3 className="font-black text-white text-base tracking-tight">
                            {feat.role}
                          </h3>

                          <ul className="space-y-2.5 pt-2">
                            {feat.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#eee642] shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Seksi: Penjelasan Arsitektur Monolith (Jika ada) */}
            {project.architectureExplanation && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#eee642]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#eee642] font-mono">
                    03 — ARSITEKTUR FULLSTACK MONOLITH
                  </h2>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-neutral-800 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#eee642] text-[#0c0c0c] text-xs font-black font-mono">
                      NEXT.JS (FRONTEND) + LARAVEL (BACKEND ENGINE)
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {project.architectureExplanation.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80 text-xs">
                    <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 space-y-1.5">
                      <span className="font-mono font-bold text-[#eee642] block uppercase">
                        ⚡ Frontend (Next.js & React)
                      </span>
                      <p className="text-neutral-400 leading-relaxed">
                        Menghadirkan UI pelanggan yang interaktif tanpa jeda, keranjang belanja dinamis, pelacakan live order tracker, dan dashboard POS yang responsif.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 space-y-1.5">
                      <span className="font-mono font-bold text-[#eee642] block uppercase">
                        🛡️ Backend (Laravel Core & MySQL)
                      </span>
                      <p className="text-neutral-400 leading-relaxed">
                        Mengatur autentikasi sesi multi-role (Kasir & Admin), validasi transaksi, pencatatan audit order, rekap finansial, dan integritas database MySQL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Seksi: Struktur Folder Proyek (Tree Terminal Box) */}
            {project.folderStructure && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-[#eee642]" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-[#eee642] font-mono">
                    04 — STRUKTUR FOLDER SISTEM
                  </h2>
                </div>

                <div className="rounded-2xl bg-black border border-neutral-800 overflow-hidden shadow-2xl">
                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-neutral-800 text-xs font-mono text-neutral-400">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="ml-2 text-neutral-300 font-bold">project-tree-structure</span>
                    </div>
                    <span className="text-[10px] text-neutral-500">Monolith Setup</span>
                  </div>

                  {/* Terminal Code Content */}
                  <pre className="p-5 sm:p-6 text-xs sm:text-sm font-mono text-neutral-300 overflow-x-auto leading-relaxed selection:bg-[#eee642] selection:text-black">
                    {project.folderStructure}
                  </pre>
                </div>
              </div>
            )}

            {/* Hasil / Outcomes */}
            {project.outcomes && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-neutral-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#eee642] font-mono">
                  DAMPAK & HASIL UTAMA
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.outcomes.map((out, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/60 border border-neutral-800 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#eee642] shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-200 font-semibold">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigasi Proyek Sebelumnya / Selanjutnya */}
            <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-800 hover:border-[#eee642] bg-[#0c0c0c] transition-all text-left w-full sm:w-auto cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#eee642]" />
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block font-mono">
                    Proyek Sebelumnya
                  </span>
                  <span className="font-bold text-white text-sm">
                    {prevProject.title}
                  </span>
                </div>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-3 p-4 rounded-2xl border border-neutral-800 hover:border-[#eee642] bg-[#0c0c0c] transition-all text-right w-full sm:w-auto cursor-pointer"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-neutral-500 block font-mono">
                    Proyek Selanjutnya
                  </span>
                  <span className="font-bold text-white text-sm">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#eee642]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
