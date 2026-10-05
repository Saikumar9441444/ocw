import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { StorySection } from '../components/StorySection';
import { StatsSection } from '../components/StatsSection';
import { VisitingCardModal } from '../components/VisitingCardModal';
import { PageTransition } from '../components/PageTransition';

const bgImages = [
  '/photography_cinematic.jpg',
  '/story_section.jpg',
  '/hero_cinematic.jpg'
];

export const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <main className="min-h-screen bg-ocw-black pt-16 pb-0 film-grain">
        
        {/* Cinematic Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden mb-12">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentSlide}
              src={bgImages[currentSlide]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity"
            />
          </AnimatePresence>
          
          {/* Gradients to blend into the black background */}
          <div className="absolute inset-0 bg-ocw-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocw-black via-transparent to-ocw-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ocw-black/80 via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-[1600px] mx-auto w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="font-mono text-ocw-red tracking-[0.3em] text-xs sm:text-sm mb-4">
                BEHIND THE LENS
              </p>
              <h1 className="cinematic-title font-cinematic font-black text-ocw-white text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none max-w-4xl">
                WE CRAFT <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-ocw-white to-ocw-gray">VISUAL</span> <span className="text-ocw-red">STORIES.</span>
              </h1>
              <div className="h-px w-24 bg-ocw-red mb-6" />
              <p className="font-body text-ocw-gray text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                Based in Nellore, Our Creative Works is a premium digital production house specializing in cinematic filmmaking, event documentation, and high-end commercial content.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-20 -mt-12 bg-ocw-black">
          <StorySection />
          
          <div className="w-full h-px bg-white/5 my-12 max-w-[1400px] mx-auto" />
          
          <StatsSection />
        </div>

        {/* Bottom CTA */}
        <div className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 mt-12">
          <div className="absolute inset-0 bg-[url('/drone_cinematic.jpg')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-ocw-black via-ocw-black/90 to-ocw-black" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <h2 className="font-cinematic text-4xl md:text-6xl text-ocw-white font-black mb-6">
              READY TO CREATE <span className="text-ocw-red italic">MAGIC?</span>
            </h2>
            <p className="font-body text-ocw-gray text-base md:text-lg mb-10">
              Whether you have a fully fleshed out concept or just a spark of an idea, we are ready to bring it to life. Let's talk about your next project.
            </p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn-primary mx-auto"
            >
              START A PROJECT
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <VisitingCardModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </main>
    </PageTransition>
  );
};
