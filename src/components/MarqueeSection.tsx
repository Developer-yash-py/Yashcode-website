import React from 'react';

const BUILD_LABELS = [
  'SOFTWARE',
  'AI SYSTEMS',
  'AUTOMATION',
  'DIGITAL PRODUCTS',
  'WEB DEVELOPMENT',
  'EXPERIMENTS',
  'BUILD • TEST • ITERATE',
];

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
                  className="w-[240px] h-[150px] sm:w-[300px] sm:h-[190px] md:w-[360px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden bg-[#121316] border border-white/10 flex items-end p-5 sm:p-7"
                >
                  <div>
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
