import React from 'react';
import softwareImage from '../assets/card-software.svg';
import aiSystemsImage from '../assets/card-ai-systems.svg';
import automationImage from '../assets/card-automation.svg';
import digitalProductsImage from '../assets/card-digital-products.svg';
import webDevelopmentImage from '../assets/card-web-development.svg';
import experimentsImage from '../assets/card-experiments.svg';
import buildTestIterateImage from '../assets/card-build-test-iterate.svg';

const BUILD_LABELS = [
  'SOFTWARE',
  'AI SYSTEMS',
  'AUTOMATION',
  'DIGITAL PRODUCTS',
  'WEB DEVELOPMENT',
  'EXPERIMENTS',
  'BUILD • TEST • ITERATE',
];

const CARD_IMAGES: Record<string, string> = {
  'SOFTWARE': softwareImage,
  'AI SYSTEMS': aiSystemsImage,
  'AUTOMATION': automationImage,
  'DIGITAL PRODUCTS': digitalProductsImage,
  'WEB DEVELOPMENT': webDevelopmentImage,
  'EXPERIMENTS': experimentsImage,
  'BUILD • TEST • ITERATE': buildTestIterateImage,
};

export const MarqueeSection: React.FC = () => {
  const row = [...BUILD_LABELS, ...BUILD_LABELS, ...BUILD_LABELS];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative select-none" aria-label="YashCode focus areas">
      <div className="flex flex-col gap-3">
        {[row, [...row].reverse()].map((items, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden w-full">
            <div
              className={`flex gap-3 w-max ${rowIndex === 0 ? 'animate-[marquee_28s_linear_infinite]' : 'animate-[marquee-reverse_32s_linear_infinite]'}`}
            >
              {items.map((label, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="relative w-[240px] h-[150px] sm:w-[300px] sm:h-[190px] md:w-[360px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden bg-[#121316] border border-white/10 flex items-end p-5 sm:p-7"
                >
                  <img
                    src={CARD_IMAGES[label]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/35 to-transparent" />
                  <div className="relative z-10">
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B600A8]">YASHCODE</span>
                    <p className="mt-2 text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#D7E2EA]">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
