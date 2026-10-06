import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ProjectData } from './ProjectsSection';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onContactClick }) => (
  <AnimatePresence>
    {project && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl z-10 text-[#D7E2EA] my-auto"
        >
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#D7E2EA]/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors" aria-label="Close project modal">
            <X size={20} />
          </button>
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs uppercase tracking-widest text-[#B600A8]">{project.category}</span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight hero-heading mt-2">{project.title}</h3>
              <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 mt-3">{project.status}</p>
            </div>
            <p className="text-base sm:text-lg text-[#D7E2EA]/80 leading-relaxed">{project.description}</p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B600A8]">
                <CheckCircle2 size={14} />
                <span>Accuracy Note</span>
              </div>
              <p className="mt-2 text-sm text-[#D7E2EA]/65 leading-relaxed">
                This entry is presented as a project or experiment, not as a fabricated client case study, testimonial, or performance claim.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                  <span>Open Project</span><ExternalLink size={14} />
                </a>
              ) : <span />}
              <button onClick={() => { onClose(); onContactClick(); }} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white hover:opacity-90 transition-opacity w-full sm:w-auto justify-center">
                Discuss a Build
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);