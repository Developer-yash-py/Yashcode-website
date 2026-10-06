import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection, ProjectData } from './components/ProjectsSection';
import { ContactModal } from './components/ContactModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ArrowUp, Twitter, Instagram, Dribbble, Globe, Shield } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full relative overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection onImageClick={(url) => setLightboxImage(url)} />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection
        onImageClick={(url) => setLightboxImage(url)}
        onLiveProjectClick={(project) => setSelectedProject(project)}
      />

      {/* Footer */}
      <footer className="bg-[#0C0C0C] border-t border-white/10 px-6 md:px-12 py-12 relative z-20 select-none">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="hero-heading font-black text-2xl uppercase tracking-tight">
              Jack -- 3D Creator
            </span>
            <p className="text-xs text-[#D7E2EA]/50">
              © {new Date().getFullYear()} Jack. All rights reserved. Crafting 3D worlds and motion experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-[#D7E2EA]/70 text-sm">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Twitter size={16} />
              <span>X / Twitter</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Dribbble size={16} />
              <span>Dribbble</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#D7E2EA]/70 hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-white/30"
          >
            <span>Back To Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ImageLightboxModal
        imageUrl={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
