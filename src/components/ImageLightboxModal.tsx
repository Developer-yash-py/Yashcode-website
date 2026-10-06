import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface ImageLightboxModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ imageUrl, onClose }) => {
  return (
    <AnimatePresence>
      {imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center justify-center bg-[#121316] border border-white/10 rounded-[32px] p-2 sm:p-4 overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-white/80 hover:text-white rounded-full bg-black/60 backdrop-blur-sm border border-white/20 transition-colors"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>

            <div className="w-full h-full overflow-hidden rounded-[24px] flex items-center justify-center">
              <img
                src={imageUrl}
                alt="Expanded 3D Artwork"
                className="max-w-full max-h-[75vh] object-contain rounded-[20px]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full flex justify-between items-center px-4 py-2 mt-2 text-xs text-[#D7E2EA]/60 uppercase tracking-widest font-medium">
              <span>Jack -- 3D Portfolio Render</span>
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>Original Link</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
