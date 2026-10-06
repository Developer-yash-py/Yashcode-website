import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl z-10 text-[#D7E2EA] my-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#D7E2EA]/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center shadow-lg shadow-[#B600A8]/30">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight hero-heading">
                  Enquiry Form
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-md">
                  Thanks, <span className="font-semibold text-white">{formData.name}</span>. This enquiry form is currently a local demo and is not connected to a submission service yet.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="mt-4 px-8 py-3 rounded-full border border-white/20 text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-medium mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Let&apos;s Build Together</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight hero-heading">
                    Contact Yash
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                    Tell me what you want to build across software, AI, automation, or digital products.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                    >
                      <option value="Web Development" className="bg-[#121316]">Web Development</option>
                      <option value="AI Systems" className="bg-[#121316]">AI Systems</option>
                      <option value="Automation" className="bg-[#121316]">Automation</option>
                      <option value="Custom Software" className="bg-[#121316]">Custom Software</option>
                      <option value="Digital Products" className="bg-[#121316]">Digital Products</option>
                      <option value="Other" className="bg-[#121316]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <p className="text-[11px] leading-relaxed text-[#D7E2EA]/45">
                    This form is currently a local demo and does not transmit or store enquiries yet.
                  </p>

                  <div className="pt-2 flex justify-end">
                    <ContactButton label="Submit Enquiry" className="w-full sm:w-auto" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
