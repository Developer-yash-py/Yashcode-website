import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char}
      </motion.span>
    </span>
  );
};

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Word: React.FC<WordProps> = ({ word, range, progress }) => {
  const characters = word.split('');
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="inline-block whitespace-nowrap me-[0.25em]">
      {characters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return (
          <Character
            key={i}
            char={char}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={elementRef}
      className={`flex flex-wrap justify-center text-center font-medium leading-relaxed max-w-[560px] select-none ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: '#D7E2EA' }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};
