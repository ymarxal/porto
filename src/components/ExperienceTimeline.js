"use client";

import { EXPERIENCE_TIMELINE } from "@/data/projectsData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 md:py-36 bg-[#121212] text-white relative border-t border-b border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header Seksi */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#eee642]">
            03 — PENGALAMAN & PERJALANAN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Judul Kiri */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-6">
              TIMELINE & PERAN
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-md font-medium">
              Ringkasan kronologis pengembangan produk, kepemimpinan desain digital, dan kolaborasi klien selama beberapa tahun terakhir.
            </p>
          </div>

          {/* Timeline Kanan Dark */}
          <div className="lg:col-span-7 space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-neutral-800">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-10 sm:pl-12 group">
                {/* Indikator Dot Yellow */}
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0c0c0c] border-2 border-[#eee642] group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#eee642]" />
                </div>

                <div className="p-8 rounded-3xl bg-[#161616] border border-neutral-800 group-hover:border-[#eee642] transition-all duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-2xl font-black text-[#eee642] tracking-tight">
                      {item.year}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-black uppercase tracking-wider">
                      {item.company}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {item.role}
                  </h3>

                  <p className="text-base text-neutral-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
