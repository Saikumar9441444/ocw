import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const StorySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" ref={ref} className="relative bg-ocw-black py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 noise-texture pointer-events-none opacity-50" />

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-5"
            >
              <p className="section-label">04 — THE STORY</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="cinematic-title font-cinematic font-black text-ocw-white mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 5.5rem)' }}
            >
              EVERY FRAME<br />
              <span className="italic text-ocw-white-dim">HAS A STORY.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-16 bg-ocw-red mb-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-ocw-white-dim font-body text-sm sm:text-base md:text-lg leading-relaxed mb-6"
            >
              OUR CREATIVE WORKS is a creative filmmaking and digital production studio
              focused on creating powerful visual experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-ocw-white-dim font-body text-sm sm:text-base leading-relaxed mb-10"
            >
              We believe every moment has a story worth telling. From the first spark of an idea
              to the final polished frame — we craft visuals that connect, move, and endure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {['CREATIVITY', 'CINEMATOGRAPHY', 'EDITING', 'TECHNOLOGY'].map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-[0.55rem] sm:text-[0.6rem] tracking-[0.15em] sm:tracking-[0.2em] px-3 sm:px-4 py-2 border border-ocw-charcoal-light text-ocw-gray hover:border-ocw-red hover:text-ocw-red transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image — hidden on mobile, shown from lg */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/story_section.jpg"
                alt="Film crew on set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-ocw-red/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-ocw-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-ocw-charcoal border border-ocw-charcoal-light p-4 max-w-xs"
            >
              <img src="/ocw_logo_user.png" alt="Our Creative Works" className="h-20 w-auto object-contain mb-3 drop-shadow-lg" />
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-1">FOUNDED BY</p>
              <p className="font-cinematic text-xl text-ocw-white font-bold">SAIKUMAR</p>
              <p className="font-mono text-[0.6rem] text-ocw-gray mt-1">FOUNDER & CREATIVE DIRECTOR</p>
            </motion.div>
          </motion.div>

          {/* Mobile founder badge — shown only below lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex lg:hidden items-center gap-4 border-l-2 border-ocw-red pl-5 py-2"
          >
            <img src="/ocw_logo_user.png" alt="Our Creative Works" className="h-14 w-auto object-contain mb-2 flex-shrink-0" />
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-1">FOUNDED BY</p>
              <p className="font-cinematic text-lg text-ocw-white font-bold">SAIKUMAR</p>
              <p className="font-mono text-[0.55rem] text-ocw-gray mt-0.5">FOUNDER & CREATIVE DIRECTOR</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
