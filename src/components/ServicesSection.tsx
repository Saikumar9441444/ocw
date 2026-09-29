import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CONFIG } from '../config';

type Service = typeof CONFIG.services[0];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      onClick={() => {
        if (service.id === 'reel-shoots-iphones') {
          navigate('/reels');
        } else {
          navigate(`/services/${service.id}`);
        }
      }}
      className="relative group cursor-pointer overflow-hidden rounded-lg border border-white/5 aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-ocw-charcoal"
    >
      {/* Background Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      {/* Dark Overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocw-black via-ocw-black/70 to-transparent group-hover:from-ocw-black/90 group-hover:via-ocw-black/50 transition-all duration-500" />
      <div className="absolute inset-0 bg-ocw-red mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end z-10">
        <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
          {/* Animated Red Line */}
          <div className="h-px bg-ocw-red mb-3 w-8 sm:w-12 group-hover:w-full transition-all duration-700 ease-out" />
          
          <h3 className="font-cinematic font-bold text-ocw-white text-sm sm:text-xl md:text-2xl mb-1.5 sm:mb-3 leading-tight tracking-wide drop-shadow-md">
            {service.title}
          </h3>
          
          <p className="text-ocw-gray text-[10px] sm:text-xs md:text-sm leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 group-hover:text-ocw-white-dim transition-colors duration-300 drop-shadow">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative bg-ocw-black py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16">

        {/* Header */}
        <div className="mb-10 md:mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="cinematic-title font-cinematic font-black text-ocw-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            WE <span className="text-ocw-red italic">DO</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {CONFIG.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
