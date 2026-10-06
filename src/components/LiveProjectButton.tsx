import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Live Project',
}) => {
  const content = (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap ${className}`}
    >
      <span>{label}</span>
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
