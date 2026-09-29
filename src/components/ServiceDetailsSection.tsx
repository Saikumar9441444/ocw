import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { serviceDetailsData } from '../data/serviceDetails';

interface ServiceDetailsSectionProps {
  id: string;
  onBookNow: () => void;
}

export const ServiceDetailsSection = ({ id, onBookNow }: ServiceDetailsSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const data = serviceDetailsData[id];
  if (!data) return null;

  return (
    <section ref={ref} className="relative bg-ocw-black py-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ocw-red/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {data.items.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + (idx * 0.05) }}
              whileHover="hover"
              className="group relative bg-ocw-charcoal border border-white/5 overflow-hidden transition-all duration-500 rounded-lg cursor-pointer h-full"
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                <img 
                  src={type.image} 
                  alt="" 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110" 
                />
              </div>
              <motion.div 
                variants={{ hover: { opacity: 1 } }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-t from-ocw-black via-ocw-black/80 to-ocw-black/40 z-0"
              />
              
              <div className="relative z-10 flex flex-col h-full p-4 sm:p-8" onClick={onBookNow}>
                <motion.div 
                  variants={{ hover: { scale: 1.1, rotate: 5, color: '#C41E3A' } }}
                  transition={{ duration: 0.3 }}
                  className="mb-3 sm:mb-5 text-ocw-white/70 inline-block w-7 h-7 sm:w-10 sm:h-10"
                >
                  {type.svg}
                </motion.div>
                
                <h3 className="font-mono tracking-widest text-ocw-white text-[10px] sm:text-sm mb-2 sm:mb-3 group-hover:text-ocw-red transition-colors duration-300 leading-tight">
                  {type.title}
                </h3>
                
                <p className="font-body text-ocw-gray text-[9px] sm:text-xs leading-snug sm:leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
                  {type.desc}
                </p>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between text-ocw-white-dim text-[8px] sm:text-[10px] tracking-widest uppercase group-hover:text-ocw-red transition-colors duration-300">
                  <span>BOOK NOW</span>
                  <motion.span 
                    variants={{ hover: { x: 5 } }}
                    className="text-ocw-red"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
