import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={30}>
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] group hover:bg-black/[0.02] transition-colors px-2 sm:px-4 rounded-xl">
                {/* Left Number */}
                <div
                  className="font-black leading-none text-[#0C0C0C] shrink-0 min-w-[100px] sm:min-w-[180px] md:min-w-[240px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right Name + Description */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
