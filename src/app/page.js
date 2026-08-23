"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import CaseStudyModal from "@/components/CaseStudyModal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white selection:bg-[#eee642] selection:text-[#0c0c0c] font-sans antialiased">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (Contains Name Container, CTA Buttons, and Full-Width Marquee Ticker Directly Below Title) */}
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />

        {/* Portfolio Masonry Gallery Section */}
        <PortfolioShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* About & Personal Branding Section */}
        <About />

        {/* Minimalist Contact Section */}
        <ContactSection
          isModalOpen={isContactModalOpen}
          onCloseModal={() => setIsContactModalOpen(false)}
          onOpenModal={() => setIsContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Case Study Detail View Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}
    </div>
  );
}
