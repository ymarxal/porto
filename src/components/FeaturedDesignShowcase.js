"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronUp, LayoutGrid, Maximize2, Sparkles, X, ChevronLeft, ChevronRight, Layers } from "lucide-react";

// Daftar kelompok postingan Carousel Multi-Slide
const CAROUSEL_GROUPS = [
  {
    coverId: 12,
    slideIds: [12, 13, 14, 15],
    title: "Desain Carousel #12 - #15",
  },
  {
    coverId: 16,
    slideIds: [16, 17, 18, 19],
    title: "Desain Carousel #16 - #19",
  },
  {
    coverId: 20,
    slideIds: [20, 21, 22, 23, 24],
    title: "Desain Carousel #20 - #24",
  },
  {
    coverId: 25,
    slideIds: [25, 26, 27, 28, 29],
    title: "Desain Carousel #25 - #29",
  },
  {
    coverId: 30,
    slideIds: [30, 31],
    title: "Desain Carousel #30 - #31",
  },
  {
    coverId: 32,
    slideIds: [32, 33, 34],
    title: "Desain Carousel #32 - #34",
  },
];

export default function FeaturedDesignShowcase() {
  const TOTAL_PHOTOS = 34;
  const [isOpen, setIsOpen] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll completely when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhoto]);

  // Set kumpulan ID yang merupakan anak slide (bukan cover)
  const childSlideIds = new Set();
  CAROUSEL_GROUPS.forEach((group) => {
    group.slideIds.forEach((id) => {
      if (id !== group.coverId) {
        childSlideIds.add(id);
      }
    });
  });

  // Generate gallery items list
  const designsList = [];
  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    // Jika ID ini adalah anak slide dari suatu carousel, lewati agar tidak dobel di grid
    if (childSlideIds.has(i)) continue;

    const carouselMatch = CAROUSEL_GROUPS.find((g) => g.coverId === i);
    const numberStr = i < 10 ? `0${i}` : `${i}`;

    if (carouselMatch) {
      const slides = carouselMatch.slideIds.map((sId) => ({
        id: sId,
        numberStr: sId < 10 ? `0${sId}` : `${sId}`,
        filename: `${sId}.png`,
        imagePath: `/images/porto/${sId}.png`,
      }));

      designsList.push({
        id: i,
        numberStr,
        isCarousel: true,
        slides,
        slideCount: slides.length,
        filename: `${i}.png`,
        imagePath: `/images/porto/${i}.png`,
        title: carouselMatch.title,
      });
    } else {
      designsList.push({
        id: i,
        numberStr,
        isCarousel: false,
        filename: `${i}.png`,
        imagePath: `/images/porto/${i}.png`,
        title: `Desain #${numberStr}`,
      });
    }
  }

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const totalPages = Math.ceil(designsList.length / ITEMS_PER_PAGE);
  const paginatedDesigns = designsList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const openPhotoModal = (item) => {
    setSelectedPhoto(item);
    setCurrentSlideIndex(0);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      } else if (e.key === "ArrowLeft") {
        if (selectedPhoto.isCarousel && currentSlideIndex > 0) {
          setCurrentSlideIndex((prev) => prev - 1);
        } else {
          const currentIndex = designsList.findIndex((d) => d.id === selectedPhoto.id);
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : designsList.length - 1;
          const prevItem = designsList[prevIndex];
          setSelectedPhoto(prevItem);
          setCurrentSlideIndex(prevItem.isCarousel ? prevItem.slides.length - 1 : 0);
        }
      } else if (e.key === "ArrowRight") {
        if (selectedPhoto.isCarousel && currentSlideIndex < selectedPhoto.slides.length - 1) {
          setCurrentSlideIndex((prev) => prev + 1);
        } else {
          const currentIndex = designsList.findIndex((d) => d.id === selectedPhoto.id);
          const nextIndex = currentIndex < designsList.length - 1 ? currentIndex + 1 : 0;
          const nextItem = designsList[nextIndex];
          setSelectedPhoto(nextItem);
          setCurrentSlideIndex(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentSlideIndex, designsList]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Featured Showcase Box Container */}
      <div className="rounded-3xl bg-[#161616] text-white border border-neutral-800 shadow-2xl text-left relative overflow-hidden transition-all duration-300">
        
        {/* Header Bar Kotak */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-neutral-800 bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#eee642] text-[#0c0c0c] flex items-center justify-center font-black">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                Koleksi Karya Desain
              </h3>
            </div>
          </div>

          {/* Tombol Buka/Tutup Galeri Kotak Utama */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white text-xs font-mono font-black uppercase transition-all shadow-lg cursor-pointer"
          >
            {isOpen ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>SEMBUNYIKAN GALERI</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>TAMPILKAN GALERI ({TOTAL_PHOTOS})</span>
              </>
            )}
          </button>
        </div>

        {/* Konten Kotak (Hanya Tampil Jika Kotak Dalam Kondisi Terbuka) */}
        {isOpen && (
          <div className="p-5 sm:p-6 space-y-6 bg-[#161616]">
            {/* Grid 8 Foto Per Halaman */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {paginatedDesigns.map((item) => {
                const hasError = failedImages[item.id];

                return (
                  <div
                    key={item.id}
                    onClick={() => openPhotoModal(item)}
                    className="group relative rounded-2xl overflow-hidden bg-black border border-neutral-800 hover:border-[#eee642] transition-all duration-300 cursor-pointer shadow-lg aspect-[4/3]"
                  >
                    {!hasError ? (
                      <img
                        src={item.imagePath}
                        alt={item.title}
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Fallback visual jika file belum di-upload */
                      <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-4 flex flex-col justify-between border border-neutral-800/80">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-black text-[#eee642]">
                            #{item.numberStr}
                          </span>
                          <span className="text-[9px] font-mono font-bold text-neutral-500 uppercase px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                            {item.filename}
                          </span>
                        </div>

                        <div>
                          <div className="w-7 h-7 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mb-1.5 text-neutral-400 group-hover:text-[#eee642] transition-colors">
                            <LayoutGrid className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-[11px] font-extrabold text-white tracking-tight line-clamp-1">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    )}

                    {/* Badge Carousel Khusus (Jika Multi-Slide) */}
                    {item.isCarousel && (
                      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-[#eee642]/60 shadow-lg text-[#eee642] text-[10px] font-mono font-black">
                        <Layers className="w-3 h-3" />
                        <span>{item.slideCount} SLIDES</span>
                      </div>
                    )}

                    {/* Overlay Hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between z-10">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] font-black text-[#eee642] bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
                          #{item.numberStr}
                        </span>
                        <div className="p-1 rounded-full bg-white text-black">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>

                      <div>
                        {item.isCarousel && (
                          <span className="text-[9px] font-mono font-bold text-[#eee642] uppercase tracking-wider block mb-0.5">
                            📸 Multi-Slide Carousel ({item.slideCount})
                          </span>
                        )}
                        <h4 className="text-[11px] font-black text-white line-clamp-1">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination & Tombol Keluar Bawah */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800 flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#eee642] disabled:opacity-30 text-white transition-colors cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 rounded-md font-mono text-[11px] font-bold transition-all cursor-pointer ${
                        currentPage === page
                          ? "bg-[#eee642] text-[#0c0c0c] font-black"
                          : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#eee642] disabled:opacity-30 text-white transition-colors cursor-pointer"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Tombol Sembunyikan Kotak Bawah */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white text-xs font-mono font-black uppercase shadow-md cursor-pointer transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                <span>SEMBUNYIKAN GALERI</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Preview Modal (Multi-Slide Carousel & Full-View) */}
      {mounted && selectedPhoto && createPortal(
        (() => {
          const activeSlide = selectedPhoto.isCarousel
            ? selectedPhoto.slides[currentSlideIndex]
            : selectedPhoto;
          const activeImagePath = activeSlide.imagePath;
          const activeFilename = activeSlide.filename;
          const activeNumberStr = activeSlide.numberStr;

          const handlePrev = (e) => {
            e.stopPropagation();
            if (selectedPhoto.isCarousel && currentSlideIndex > 0) {
              setCurrentSlideIndex((prev) => prev - 1);
            } else {
              const currentIndex = designsList.findIndex((d) => d.id === selectedPhoto.id);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : designsList.length - 1;
              const prevItem = designsList[prevIndex];
              setSelectedPhoto(prevItem);
              setCurrentSlideIndex(prevItem.isCarousel ? prevItem.slides.length - 1 : 0);
            }
          };

          const handleNext = (e) => {
            e.stopPropagation();
            if (selectedPhoto.isCarousel && currentSlideIndex < selectedPhoto.slides.length - 1) {
              setCurrentSlideIndex((prev) => prev + 1);
            } else {
              const currentIndex = designsList.findIndex((d) => d.id === selectedPhoto.id);
              const nextIndex = currentIndex < designsList.length - 1 ? currentIndex + 1 : 0;
              const nextItem = designsList[nextIndex];
              setSelectedPhoto(nextItem);
              setCurrentSlideIndex(0);
            }
          };

          return (
            <div 
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 select-none"
            >
              {/* Tombol Tutup X Floating Kanan Atas */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-[#181818]/90 hover:bg-[#eee642] text-white hover:text-[#0c0c0c] border border-neutral-700 transition-all cursor-pointer z-50 shadow-2xl group"
                aria-label="Tutup Pratinjau Foto"
              >
                <X className="w-5 h-5 font-black group-hover:scale-110 transition-transform" />
              </button>

              {/* Tombol Panah Kiri (Floating di Sisi Layar) */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#181818]/80 hover:bg-[#eee642] text-white hover:text-[#0c0c0c] border border-neutral-700 backdrop-blur-md transition-all cursor-pointer z-50 shadow-2xl group"
                aria-label="Foto / Slide Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Tombol Panah Kanan (Floating di Sisi Layar) */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#181818]/80 hover:bg-[#eee642] text-white hover:text-[#0c0c0c] border border-neutral-700 backdrop-blur-md transition-all cursor-pointer z-50 shadow-2xl group"
                aria-label="Foto / Slide Selanjutnya"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Container Tengah Foto Utama (Natural Aspect Ratio, Anti-Cut) */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col items-center justify-center max-w-[92vw] sm:max-w-[85vw] max-h-[92vh] z-40"
              >
                {/* Box Foto */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-neutral-800 bg-[#0d0d0d] flex items-center justify-center">
                  {!failedImages[activeSlide.id] ? (
                    <img
                      key={activeImagePath}
                      src={activeImagePath}
                      alt={selectedPhoto.title}
                      className="max-h-[70vh] sm:max-h-[75vh] max-w-[88vw] sm:max-w-[80vw] w-auto h-auto object-contain rounded-2xl animate-in fade-in duration-150"
                    />
                  ) : (
                    <div className="p-8 sm:p-14 text-center space-y-3 max-w-lg">
                      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto text-[#eee642]">
                        <LayoutGrid className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                        File <code className="text-[#eee642] font-mono">{activeFilename}</code> Belum Di-upload
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                        Silakan letakkan gambar Anda di folder <code className="text-white font-mono bg-black px-2 py-0.5 rounded">public/images/porto/{activeFilename}</code>.
                      </p>
                    </div>
                  )}
                </div>

                {/* Titik Indikator Dots Khusus Postingan Carousel */}
                {selectedPhoto.isCarousel && (
                  <div className="flex items-center gap-2 mt-3 p-1.5 px-3 rounded-full bg-[#181818]/90 border border-neutral-800 shadow-md">
                    {selectedPhoto.slides.map((slide, sIdx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlideIndex(sIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentSlideIndex === sIdx
                            ? "w-6 bg-[#eee642]"
                            : "w-2 bg-neutral-600 hover:bg-neutral-400"
                        }`}
                        aria-label={`Buka Slide ${sIdx + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Pill Info Bar di Bawah Foto */}
                <div className="mt-3 px-5 py-2.5 rounded-full bg-[#161616]/90 backdrop-blur-xl border border-neutral-800 shadow-xl flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <span className="font-mono font-black text-[#eee642] bg-black/60 px-2.5 py-0.5 rounded-full border border-neutral-800">
                    #{activeNumberStr} / {TOTAL_PHOTOS}
                  </span>
                  <span className="font-bold text-white tracking-tight">
                    {selectedPhoto.title}
                  </span>
                  {selectedPhoto.isCarousel && (
                    <span className="font-mono font-bold text-[#eee642] text-xs border-l border-neutral-700 pl-3">
                      SLIDE {currentSlideIndex + 1} / {selectedPhoto.slides.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })(),
        document.body
      )}
    </div>
  );
}
