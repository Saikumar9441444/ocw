import { motion } from 'framer-motion';
import { CONFIG } from '../config';

export const HeroStats = () => {
  return (
    <div className="bg-transparent py-4 md:py-6 z-20 relative -mt-20 sm:-mt-28 mb-8 pointer-events-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {CONFIG.stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-cinematic font-bold text-ocw-red text-3xl md:text-4xl mb-2 drop-shadow-lg">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ocw-gray uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
