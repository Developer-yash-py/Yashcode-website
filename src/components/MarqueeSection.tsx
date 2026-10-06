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

const SERVICE_SPRITE = 'data:image/webp;base64,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';

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
              {items.map((label, index) => {
                const imageIndex = BUILD_LABELS.indexOf(label);
                const position = imageIndex === -1 ? 0 : (imageIndex / (BUILD_LABELS.length - 1)) * 100;

                return (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="relative w-[240px] h-[150px] sm:w-[300px] sm:h-[190px] md:w-[360px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden bg-[#121316] border border-white/10 flex items-end p-5 sm:p-7"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[78%] bg-no-repeat transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${SERVICE_SPRITE})`,
                        backgroundSize: '100% 700%',
                        backgroundPosition: `center ${position}%`,
                      }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/30 to-transparent" />
                    <div className="relative z-10">
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#B600A8]">YASHCODE</span>
                      <p className="mt-2 text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#D7E2EA]">{label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
