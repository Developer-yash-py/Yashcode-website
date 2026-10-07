import React from 'react';
import regeneratedImage1791376315082 from '../assets/images/regenerated_image_1791376315082.png';
import regeneratedImage1791376319539 from '../assets/images/regenerated_image_1791376319539.png';
import regeneratedImage1791376807012 from '../assets/images/regenerated_image_1791376807012.png';
import regeneratedImage1791376877855 from '../assets/images/regenerated_image_1791376877855.png';
import regeneratedImage1791382319107 from '../assets/images/regenerated_image_1791382319107.png';
import regeneratedImage1791382325065 from '../assets/images/regenerated_image_1791382325065.png';
import regeneratedImage1791382329615 from '../assets/images/regenerated_image_1791382329615.png';
import regeneratedImage1791382335410 from '../assets/images/regenerated_image_1791382335410.png';
import regeneratedImage1791382339324 from '../assets/images/regenerated_image_1791382339324.png';
import regeneratedImage1791382463026 from '../assets/images/regenerated_image_1791382463026.png';
import regeneratedImage1791382756551 from '../assets/images/regenerated_image_1791382756551.png';
import regeneratedImage1791382761725 from '../assets/images/regenerated_image_1791382761725.png';
import regeneratedImage1791382766842 from '../assets/images/regenerated_image_1791382766842.png';
import regeneratedImage1791382772578 from '../assets/images/regenerated_image_1791382772578.png';
import regeneratedImage1791382781274 from '../assets/images/regenerated_image_1791382781274.png';
import regeneratedImage1791382785988 from '../assets/images/regenerated_image_1791382785988.png';

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
  'SOFTWARE': regeneratedImage1791376319539,
  'AI SYSTEMS': regeneratedImage1791382761725,
  'AUTOMATION': regeneratedImage1791382772578,
  'DIGITAL PRODUCTS': regeneratedImage1791382781274,
  'WEB DEVELOPMENT': regeneratedImage1791382785988,
  'EXPERIMENTS': regeneratedImage1791382766842,
  'BUILD • TEST • ITERATE': regeneratedImage1791382756551,
};

export const MarqueeSection: React.FC = () => {
  const row = [...BUILD_LABELS, ...BUILD_LABELS, ...BUILD_LABELS];

  const getCardImage = (label: string, rowIndex: number, index: number) => {
    // Selector 1: row 2 (rowIndex 1), 7th item (index 6)
    if (rowIndex === 1 && index === 6) {
      return regeneratedImage1791376315082;
    }
    // Selector 2: row 1 (rowIndex 0), 8th item (index 7)
    if (rowIndex === 0 && index === 7) {
      return regeneratedImage1791376319539;
    }
    // Selector 3: row 2 (rowIndex 1), 6th item (index 5)
    if (rowIndex === 1 && index === 5) {
      return regeneratedImage1791376807012;
    }
    // Selector 4: row 2 (rowIndex 1), 5th item (index 4)
    if (rowIndex === 1 && index === 4) {
      return regeneratedImage1791376877855;
    }
    // Selector 5: row 2 (rowIndex 1), 4th item (index 3)
    if (rowIndex === 1 && index === 3) {
      return regeneratedImage1791382319107;
    }
    // Selector 6: row 2 (rowIndex 1), 10th item (index 9)
    if (rowIndex === 1 && index === 9) {
      return regeneratedImage1791382325065;
    }
    // Selector 7: row 2 (rowIndex 1), 3rd item (index 2)
    if (rowIndex === 1 && index === 2) {
      return regeneratedImage1791382329615;
    }
    // Selector 8: row 2 (rowIndex 1), 2nd item (index 1)
    if (rowIndex === 1 && index === 1) {
      return regeneratedImage1791382335410;
    }
    // Selector 9: row 2 (rowIndex 1), 8th item (index 7)
    if (rowIndex === 1 && index === 7) {
      return regeneratedImage1791382339324;
    }
    // Selector 10: row 2 (rowIndex 1), 9th item (index 8)
    if (rowIndex === 1 && index === 8) {
      return regeneratedImage1791382463026;
    }
    // Row 1 (rowIndex 0) updates
    if (rowIndex === 0 && index === 6) {
      return regeneratedImage1791382756551;
    }
    if (rowIndex === 0 && index === 1) {
      return regeneratedImage1791382761725;
    }
    if (rowIndex === 0 && index === 5) {
      return regeneratedImage1791382766842;
    }
    if (rowIndex === 0 && index === 2) {
      return regeneratedImage1791382772578;
    }
    if (rowIndex === 0 && index === 3) {
      return regeneratedImage1791382781274;
    }
    if (rowIndex === 0 && index === 4) {
      return regeneratedImage1791382785988;
    }
    return CARD_IMAGES[label];
  };

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
                    src={getCardImage(label, rowIndex, index)}
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
