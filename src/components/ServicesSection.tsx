import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

type Service = typeof CONFIG.services[0];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="service-card relative bg-ocw-charcoal group"
      style={{ minHeight: '220px' }}
    >
      {/* Background image on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={service.image}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-5 sm:p-8">
        {/* Number */}
        <motion.div
          animate={hovered ? { scale: 1.2, x: -4 } : { scale: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="font-cinematic font-black text-ocw-charcoal-light group-hover:text-ocw-red/30 transition-colors duration-300"
          style={{ fontSize: 'clamp(4rem, 6vw, 6rem)', lineHeight: '1', userSelect: 'none' }}
        >
          {service.number}
        </motion.div>

        {/* Red accent line */}
        <motion.div
          animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
          className="h-px bg-ocw-red mb-4 origin-left"
          style={{ transformOrigin: 'left' }}
        />

        {/* Title */}
        <h3 className="font-mono text-[0.7rem] tracking-[0.2em] text-ocw-white mb-3 group-hover:text-ocw-red transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description — slides in on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
              className="text-ocw-white-dim text-sm leading-relaxed"
            >
              {service.description}
            </motion.p>
          )}
        </AnimatePresence>

        {!hovered && (
          <p className="text-ocw-gray text-xs leading-relaxed line-clamp-2">
            {service.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative bg-ocw-black py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">

        {/* Header */}
        <div className="mb-10 sm:mb-16 md:mb-24 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-label mb-4"
          >
            03 — WHAT WE DO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="cinematic-title font-cinematic font-black text-ocw-white"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 6rem)' }}
          >
            FROM FIRST IDEA<br />
            <span className="italic text-ocw-white/60">TO FINAL FRAME.</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-ocw-charcoal-light border border-ocw-charcoal-light">
          {CONFIG.services.map((service, i) => (
            <div key={service.number} className="bg-ocw-black">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
