import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface VisitingCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitingCardModal = ({ isOpen, onClose }: VisitingCardModalProps) => {
  const [barcodeLines] = useState(() => {
    return [...Array(20)].map(() => ({
      width: Math.random() * 4 + 1 + 'px',
      height: Math.random() * 100 + 40 + '%'
    }));
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ocw-black/80 backdrop-blur-md px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[320px] aspect-[1/1.6] bg-ocw-charcoal/80 backdrop-blur-2xl rounded-2xl shadow-[0_0_50px_rgba(196,30,58,0.15)] overflow-hidden border border-white/10 flex flex-col items-center justify-between p-8 group"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-ocw-gray hover:text-ocw-red transition-colors z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* VIP / Pass Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-ocw-red rounded-b-full shadow-[0_0_15px_rgba(196,30,58,1)]" />

            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Top: Logo */}
            <div className="relative z-10 flex flex-col items-center mt-4">
              <div className="w-24 h-24 rounded-full bg-ocw-black border border-white/10 flex items-center justify-center shadow-2xl mb-6 overflow-hidden">
                <img src="/ocw_logo_icon.png" alt="OCW Logo" className="w-[80%] h-[80%] object-contain" />
              </div>
              <h3 className="font-cinematic font-black text-ocw-white text-3xl tracking-wider text-center leading-none">
                OUR CREATIVE<br/>WORKS
              </h3>
              <p className="font-mono text-ocw-red text-[11px] tracking-[0.2em] mt-3">
                DIRECTOR'S CUT
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-ocw-red" />
            </div>

            {/* Bottom: Contact Info */}
            <div className="relative z-10 w-full flex flex-col items-center gap-5 font-mono mb-2">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-ocw-gray tracking-widest">CALL DIRECT</span>
                <a href="tel:+919014002314" className="text-xl font-bold text-ocw-white hover:text-ocw-red transition-colors">+91 9014002314</a>
              </div>
              
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-ocw-gray tracking-widest">BASE OF OPERATIONS</span>
                <span className="text-base text-ocw-white tracking-[0.3em]">NELLORE</span>
              </div>
            </div>

            {/* Barcode Accent for that cinematic/VIP feel */}
            <div className="w-full flex justify-center opacity-30 mt-6">
              <div className="h-6 w-3/4 flex gap-1 items-end justify-center">
                {barcodeLines.map((style, i) => (
                  <div key={i} className="bg-white" style={style} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
