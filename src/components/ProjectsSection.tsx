import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  number: string;
  category: string;
  title: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  link?: string;
  description?: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    number: '01',
    category: 'Client',
    title: 'Nextlevel Studio',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Full 3D web experience and interactive product showcase for Nextlevel Studio, featuring procedural shaders and real-time lighting.',
  },
  {
    number: '02',
    category: 'Personal',
    title: 'Aura Brand Identity',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'Conceptual brand identity exploring glassmorphism, iridescent light reflections, and spatial typography for modern Web3 applications.',
  },
  {
    number: '03',
    category: 'Client',
    title: 'Solaris Digital',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'High-impact landing page & product visualization with custom motion design assets and interactive 3D elements for Solaris Digital.',
  },
];

interface CardProps {
  index: number;
  project: ProjectData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  totalCards: number;
  onImageClick?: (url: string) => void;
  onLiveProjectClick?: (project: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  index,
  project,
  progress,
  range,
  targetScale,
  onImageClick,
  onLiveProjectClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center mb-10 sm:mb-16"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl relative overflow-hidden group select-none"
      >
        {/* Top Row Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 md:pb-6">
          <div className="flex items-baseline gap-4 sm:gap-6 flex-wrap">
            {/* Number */}
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            {/* Category label */}
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60 border border-[#D7E2EA]/30 rounded-full px-3 py-1">
              {project.category}
            </span>

            {/* Project name */}
            <h3
              className="font-bold uppercase tracking-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}
            >
              {project.title}
            </h3>
          </div>

          {/* Live Project ghost button */}
          <LiveProjectButton
            onClick={() => onLiveProjectClick?.(project)}
            label="Live Project"
          />
        </div>

        {/* Bottom Row Image Grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              onClick={() => onImageClick?.(project.col1Image1)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] cursor-pointer border border-white/10 group/img relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} Preview 1`}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-medium bg-black/60 text-white px-3 py-1.5 rounded-full border border-white/20">
                  Expand View
                </span>
              </div>
            </div>

            <div
              onClick={() => onImageClick?.(project.col1Image2)}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] cursor-pointer border border-white/10 group/img relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} Preview 2`}
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-medium bg-black/60 text-white px-3 py-1.5 rounded-full border border-white/20">
                  Expand View
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div
            onClick={() => onImageClick?.(project.col2Image)}
            className="w-full md:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A1F] cursor-pointer border border-white/10 group/img relative min-h-[300px] md:min-h-[auto]"
          >
            <img
              src={project.col2Image}
              alt={`${project.title} Hero Render`}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest font-medium bg-black/60 text-white px-4 py-2 rounded-full border border-white/20">
                Expand View
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onImageClick?: (url: string) => void;
  onLiveProjectClick?: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onImageClick,
  onLiveProjectClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Cards Stack */}
        <div className="relative">
          {PROJECTS_DATA.map((project, i) => {
            const totalCards = PROJECTS_DATA.length;
            const targetScale = 1 - (totalCards - 1 - i) * 0.03;
            const startRange = i / totalCards;
            const endRange = 1;

            return (
              <ProjectCard
                key={project.number}
                index={i}
                project={project}
                progress={scrollYProgress}
                range={[startRange, endRange]}
                targetScale={targetScale}
                totalCards={totalCards}
                onImageClick={onImageClick}
                onLiveProjectClick={onLiveProjectClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
