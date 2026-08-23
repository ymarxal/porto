"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Send, X } from "lucide-react";

export default function ContactSection({ isModalOpen, onCloseModal, onOpenModal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Pengembangan Web",
    message: "",
  });

  const email = "yusufmarcelino013@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onCloseModal();
      setFormData({ name: "", email: "", service: "Pengembangan Web", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="py-32 md:py-44 bg-[#121212] text-white relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Big Impact Callout */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-tight mb-12 uppercase">
          Let's create something great.
        </h2>

        {/* Email & Salin Email Trigger Dark */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 p-3.5 rounded-full bg-[#181818] border border-neutral-800 max-w-lg mx-auto shadow-2xl">
          <div className="flex items-center gap-3 px-4 py-2 text-white font-mono text-base sm:text-lg font-bold">
            <Mail className="w-5 h-5 text-[#eee642]" />
            <span>{email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#eee642] text-[#0c0c0c] hover:bg-white text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-black" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin Email</span>
              </>
            )}
          </button>
        </div>

        {/* Tautan Sosial */}
        <div className="flex flex-col items-center justify-center pt-2">
          {/* Social Links */}
          <div className="flex items-center justify-center text-neutral-400 font-black text-base uppercase tracking-wider">
            <a
              href="https://instagram.com/ymarxalll"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#eee642] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Form Kontak Dark */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#161616] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-neutral-800 text-left">
            <button
              onClick={onCloseModal}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
              aria-label="Tutup Form"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#eee642] text-[#0c0c0c] flex items-center justify-center mx-auto shadow-lg font-bold">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Pesan Berhasil Terkirim!
                </h3>
                <p className="text-neutral-400 text-sm font-medium">
                  Terima kasih telah menghubungi Yusuf Marcelino. Saya akan membalas pesan Anda dalam 24 jam.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-sm text-neutral-400 font-medium">
                    Isi detail singkat di bawah ini dan saya akan segera menghubungi Anda.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Budi Santoso"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0c0c0c] border border-neutral-800 focus:outline-none focus:border-[#eee642] font-semibold text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="budi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0c0c0c] border border-neutral-800 focus:outline-none focus:border-[#eee642] font-semibold text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                      Kategori Layanan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0c0c0c] border border-neutral-800 focus:outline-none focus:border-[#eee642] font-semibold text-white text-sm cursor-pointer"
                    >
                      <option>Pengembangan Web</option>
                      <option>Desain UI/UX</option>
                      <option>Identitas Merek (Branding)</option>
                      <option>Desain Grafis & Eksperimen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
                      Detail Proyek
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Ceritakan singkat tujuan proyek, tenggat waktu, dan kebutuhan Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#0c0c0c] border border-neutral-800 focus:outline-none focus:border-[#eee642] font-semibold text-white text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#eee642] text-[#0c0c0c] font-black text-base hover:bg-white transition-colors shadow-xl flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
