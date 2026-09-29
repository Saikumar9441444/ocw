import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CONFIG } from '../config';
import { serviceDetailsData } from '../data/serviceDetails';
import { ServiceDetailsSection } from '../components/ServiceDetailsSection';
import { VisitingCardModal } from '../components/VisitingCardModal';

export const ServiceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  if (!id) return <Navigate to="/services" replace />;
  
  // If it's the iPhone Reels service, we already have a dedicated page for it, but just in case:
  if (id === 'reel-shoots-iphones') return <Navigate to="/reels" replace />;

  const service = CONFIG.services.find(s => s.id === id);
  const data = serviceDetailsData[id];

  if (!service || !data) return <Navigate to="/services" replace />;

  // Split title into two parts for the red highlight
  const titleParts = service.title.split(' ');
  const lastWord = titleParts.pop();
  const restOfTitle = titleParts.join(' ');

  return (
    <main className="pt-16 min-h-screen bg-ocw-black film-grain">
      <div className="text-center py-12 md:py-20 max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cinematic-title font-cinematic font-black text-ocw-white text-4xl md:text-6xl lg:text-7xl mb-4"
        >
          {restOfTitle} <span className="text-ocw-red">{lastWord}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body text-ocw-gray text-base md:text-lg"
        >
          {data.tagline}
        </motion.p>
      </div>

      <ServiceDetailsSection id={id} onBookNow={() => setIsContactModalOpen(true)} />
      
      <VisitingCardModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  );
};
