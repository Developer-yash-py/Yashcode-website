import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Send, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$3k - $5k',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jack@3dcreator.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121316] border border-[#D7E2EA]/20 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl z-10 text-[#D7E2EA] my-auto"
          >
            {/* Close button */}
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
                  Message Transmitted
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-md">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Jack will review your project inquiry and get back to you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="px-8 py-3 rounded-full border border-white/20 text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-medium mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Let&apos;s Build Together</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight hero-heading">
                    Contact Jack
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1">
                    Have a 3D modeling, rendering, motion design, or web project in mind? Reach out below.
                  </p>
                </div>

                {/* Direct email quick copy */}
                <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-[#D7E2EA]">
                    <Mail className="w-4 h-4 text-[#B600A8]" />
                    <span className="font-mono">jack@3dcreator.design</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium uppercase tracking-wider transition-colors"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy Email'}
                  </button>
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
                        placeholder="Alex Vance"
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
                        placeholder="alex@company.com"
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="3D Modeling" className="bg-[#121316]">01 - 3D Modeling</option>
                        <option value="Rendering" className="bg-[#121316]">02 - Rendering</option>
                        <option value="Motion Design" className="bg-[#121316]">03 - Motion Design</option>
                        <option value="Branding" className="bg-[#121316]">04 - Branding</option>
                        <option value="Web Design" className="bg-[#121316]">05 - Web Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[11px] font-medium text-[#D7E2EA]/70 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="$1.5k - $3k" className="bg-[#121316]">$1,500 - $3,000</option>
                        <option value="$3k - $5k" className="bg-[#121316]">$3,000 - $5,000</option>
                        <option value="$5k - $10k" className="bg-[#121316]">$5,000 - $10,000</option>
                        <option value="$10k+" className="bg-[#121316]">$10,000+</option>
                      </select>
                    </div>
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
                      placeholder="Describe your vision, timeline, or links to references..."
                      className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-[#D7E2EA] placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <ContactButton label="Send Proposal" className="w-full sm:w-auto" />
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
