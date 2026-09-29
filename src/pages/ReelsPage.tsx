import { ReelShootsSection } from '../components/ReelShootsSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { VisitingCardModal } from '../components/VisitingCardModal';

export const ReelsPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <main className="pt-16 min-h-screen bg-ocw-black film-grain">
      <div className="text-center py-12 md:py-20 max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title font-cinematic font-black text-ocw-white text-4xl md:text-6xl lg:text-7xl mb-4"
        >
          IPHONE <span className="text-ocw-red">REELS</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-ocw-gray text-base md:text-lg"
        >
          Vertical video is the future. We create viral, high-performing content shot entirely on iPhone for maximum authenticity and engagement.
        </motion.p>
      </div>

      <ReelShootsSection onBookNow={() => setIsContactModalOpen(true)} />
      
      <VisitingCardModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  );
};
