import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONFIG } from '../config';

export const ClientsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const doubled = [...CONFIG.clients, ...CONFIG.clients];

  return (
    <section id="clients" ref={ref} className="relative bg-ocw-charcoal py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="section-label mb-4">05 — OUR CLIENTS</p>
          <h2
            className="cinematic-title font-cinematic font-black text-ocw-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
          >
            TRUSTED TO CREATE.
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px w-16 bg-ocw-red mx-auto mt-6"
          />
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative overflow-hidden"
      >
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocw-charcoal-light to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocw-charcoal-light to-transparent" />

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-ocw-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-ocw-charcoal to-transparent z-10 pointer-events-none" />

        <div className="marquee-track py-8">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center flex-shrink-0 mx-12 group"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.3em] text-ocw-gray group-hover:text-ocw-white transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
              <div className="w-1 h-1 rounded-full bg-ocw-red mx-12 opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
