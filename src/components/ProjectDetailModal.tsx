import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { ProjectData } from './ProjectsSection';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl z-10 text-[#D7E2EA] my-auto overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#D7E2EA]/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 border-b border-white/10 pb-4">
                <span className="text-3xl sm:text-5xl font-black text-[#B600A8] font-mono">
                  {project.number}
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest font-medium text-[#D7E2EA]/60 border border-white/20 rounded-full px-3 py-0.5">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight hero-heading mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description & Specs */}
              <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed">
                {project.description}
              </p>

              {/* Images Preview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="h-40 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={project.col1Image1}
                    alt="Preview 1"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={project.col1Image2}
                    alt="Preview 2"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={project.col2Image}
                    alt="Hero Preview"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B600A8]">
                    <Layers size={14} />
                    <span>3D Assets</span>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70">
                    High-poly procedural meshes, custom PBR material node shaders, and ray-traced ambient occlusion.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B600A8]">
                    <Cpu size={14} />
                    <span>Engine & WebGL</span>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70">
                    Blender, Cycles render pipeline, Octane, Three.js spatial viewport integration with 60fps optimization.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B600A8]">
                    <Compass size={14} />
                    <span>Deliverables</span>
                  </div>
                  <p className="text-xs text-[#D7E2EA]/70">
                    4K keyframes, motion loops, interactive WebGL canvas, brand styleguide, GLTF assets.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <a
                  href={project.col2Image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                >
                  <CheckCircle2 size={14} />
                  <span>Request Similar Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
