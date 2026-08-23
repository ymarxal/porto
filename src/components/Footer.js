"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#0c0c0c] text-white border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-400 font-medium">
        <div>
          <p>© 2026 Yusuf Marcelino. Hak cipta dilindungi.</p>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-bold text-white">
            Designed & Developed by Me
          </p>

          <button
            onClick={scrollToTop}
            className="group p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-[#eee642] hover:text-[#0c0c0c] transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
