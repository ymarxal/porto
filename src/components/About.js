"use client";

import { TOOLS_LIST } from "@/data/projectsData";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0c0c0c] text-white relative border-t border-b border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Grid Tools */}
        <div>
          <div className="mb-8 border-b border-neutral-800 pb-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              ALAT &amp; PERANGKAT LUNAK (TOOLS)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TOOLS_LIST.map((tool, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-[#1a1a1a] border border-neutral-800 hover:border-[#eee642] transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2.5">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <span className="text-white font-extrabold text-sm block">
                    {tool.name}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-500">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
