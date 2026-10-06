import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  number: string;
  category: string;
  title: string;
  description: string;
  status: string;
  link?: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    number: '01',
    category: 'Personal Project',
    title: 'R-cebid Labs',
    status: 'In Development',
    description: 'A personal software venture exploring websites, AI agents, automation workflows, and digital products for real business problems.',
    link: 'https://rcebidlabs.com/',
  },
  {
    number: '02',
    category: 'Product',
    title: 'Charge Tracker',
    status: 'Release Repository',
    description: 'An offline Android charging-session monitoring tool built as a practical utility product.',
    link: 'https://github.com/Developer-yash-py/charge-tracker',
  },
  {
    number: '03',
    category: 'Personal Project',
    title: 'Vision Break',
    status: 'Project',
    description: 'A privacy-first Android app built around the 20-20-20 rule with smart break reminders and an animated look-away experience.',
    link: 'https://github.com/Developer-yash-py/vision-break',
  },
];

interface CardProps {
  index: number;
  project: ProjectData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onProjectClick?: (project: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({ index, project, progress, range, targetScale, onProjectClick }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-20 sm:top-24 md:top-28 min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center mb-10 sm:mb-16" style={{ top: `calc(5rem + ${index * 28}px)` }}>
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl relative overflow-hidden group select-none"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 md:pb-6">
          <div className="flex items-baseline gap-4 sm:gap-6 flex-wrap">
            <span className="font-black leading-none text-[#D7E2EA]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>{project.number}</span>
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 border border-[#D7E2EA]/30 rounded-full px-3 py-1">{project.category}</span>
            <h3 className="font-bold uppercase tracking-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}>{project.title}</h3>
          </div>
          <LiveProjectButton
            href={project.link}
            onClick={() => !project.link && onProjectClick?.(project)}
            label="View Project"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.9fr] gap-4 sm:gap-6">
          <div className="min-h-[260px] md:min-h-[340px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#18011F] via-[#1A1020] to-[#0C0C0C] p-8 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/50">YASHCODE</span>
            <div>
              <div className="text-6xl sm:text-8xl font-black hero-heading">{project.number}</div>
              <p className="mt-4 text-sm uppercase tracking-widest text-[#D7E2EA]/60">{project.status}</p>
            </div>
          </div>
          <div className="min-h-[260px] md:min-h-[340px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-white/10 bg-[#121316] p-8 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B600A8]">Project Notes</span>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#D7E2EA]/85 leading-relaxed max-w-2xl">{project.description}</p>
            <button
              onClick={() => onProjectClick?.(project)}
              className="mt-8 self-start inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onProjectClick?: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 select-none">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Work
          </h2>
        </FadeIn>
        <div className="relative">
          {PROJECTS_DATA.map((project, i) => {
            const targetScale = 1 - (PROJECTS_DATA.length - 1 - i) * 0.03;
            return (
              <ProjectCard
                key={project.number}
                index={i}
                project={project}
                progress={scrollYProgress}
                range={[i / PROJECTS_DATA.length, 1]}
                targetScale={targetScale}
                onProjectClick={onProjectClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};