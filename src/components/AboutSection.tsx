import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Decorative 3D Image 1: Top-left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D Image 2: Bottom-left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D Image 3: Top-right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Decorative 3D Image 4: Bottom-right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated Paragraph */}
        <AnimatedText
          text="I’m Yash, a developer and builder exploring software, AI, automation, and digital products. I enjoy turning ideas into working systems and experimenting with technologies that make products more useful, intelligent, and interactive."
        />

        {/* Gap between text block and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
