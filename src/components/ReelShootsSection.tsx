import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const reelTypes = [
  { 
    title: 'PRODUCT SHOWCASES', 
    desc: 'Sleek, eye-catching unboxing and detail shots for physical products.', 
    image: '/photography_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
  },
  { 
    title: 'FASHION & APPAREL', 
    desc: 'Dynamic outfit transitions and stylistic edits for clothing brands.', 
    image: '/editing_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
  },
  { 
    title: 'FOOD & RESTAURANT', 
    desc: 'Mouth-watering close-ups and aesthetic cafe walkthroughs.', 
    image: '/story_section.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
  },
  { 
    title: 'FITNESS & GYM', 
    desc: 'High-energy workout montages and motivational fitness reels.', 
    image: '/gym_store.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="M12 6.5v11"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>
  },
  { 
    title: 'REAL ESTATE', 
    desc: 'Smooth, cinematic walkthroughs of homes and commercial spaces.', 
    image: '/hero_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  },
  { 
    title: 'BEHIND THE SCENES', 
    desc: 'Authentic BTS footage that builds trust and shows how you work.', 
    image: '/iphone_gimbal.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"></path><path d="M12 4v4"></path></svg>
  },
  { 
    title: 'EVENT HIGHLIGHTS', 
    desc: 'Fast-paced, exciting recaps of parties, launches, and meetups.', 
    image: '/event_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  },
  { 
    title: 'TRAVEL & VLOGS', 
    desc: 'Immersive travel diaries and aesthetic location showcases.', 
    image: '/drone_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
  },
  { 
    title: 'EDUCATIONAL', 
    desc: 'Engaging tutorials and tips with clean text graphics and pacing.', 
    image: '/service_reel.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
  },
  { 
    title: 'MINI-INTERVIEWS', 
    desc: 'Bite-sized podcast clips and talking-head videos with subtitles.', 
    image: '/photography_cinematic.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
  },
  { 
    title: 'LIFESTYLE', 
    desc: 'Aesthetic, vibe-focused videos that sell a feeling and a brand.', 
    image: '/bike_delivery.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  },
  { 
    title: 'CORPORATE CULTURE', 
    desc: 'Fun and professional office tours and team-building reels.', 
    image: '/cricket_tournament.jpg',
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
  }
];

export const ReelShootsSection = ({ onBookNow }: { onBookNow: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative bg-ocw-black py-16 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ocw-red/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {reelTypes.map((type, idx) => (
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
