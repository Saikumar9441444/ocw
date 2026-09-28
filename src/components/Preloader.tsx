import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 8 seconds loading simulation (perfect sweet spot)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            // Notify parent to unlock scrolling after animation finishes
            setTimeout(onComplete, 1200); 
          }, 400); // Pause briefly at 100%
          return 100;
        }
        // Increment by 1 every 80ms = 8,000ms (8 seconds) total
        return Math.min(prev + 1, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-ocw-black flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center max-w-xs sm:max-w-sm px-8 w-full">
            {/* Logo */}
            <motion.img 
              src="/ocw_logo_user.png" 
              alt="OUR CREATIVE WORKS" 
              className="w-48 sm:w-56 h-auto object-contain mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Progress Container */}
            <div className="w-full flex flex-col items-center">
              <div className="font-mono text-ocw-red text-4xl sm:text-5xl font-light mb-4 flex w-full justify-center">
                <span className="w-24 text-center">{progress}%</span>
              </div>
              
              {/* Loading Bar */}
              <div className="w-full h-px bg-ocw-charcoal-light overflow-hidden relative">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-ocw-red"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="mt-6 font-mono text-[0.5rem] sm:text-[0.55rem] tracking-[0.3em] text-ocw-gray text-center uppercase">
                Loading Cinematic Experience
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
