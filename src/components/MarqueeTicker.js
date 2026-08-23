"use client";

export default function MarqueeTicker() {
  const marqueeItems = [
    "CREATIVE DEVELOPMENT",
    "UI/UX DESIGN",
    "MOTION GRAPHICS",
    "CREATIVE DESIGN",
    "BRAND IDENTITY",
    "INTERACTIVE SHOWCASE",
  ];

  return (
    <div className="w-full overflow-hidden py-5 bg-[#161616] text-white border-y border-neutral-800 shadow-2xl relative z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap text-sm sm:text-base font-black tracking-[0.2em] uppercase font-mono">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-10 shrink-0 px-6">
            <span className="text-neutral-200">{item}</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#eee642] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
