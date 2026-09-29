import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
export const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" ref={ref} className="relative bg-ocw-black py-8 md:py-12 overflow-hidden film-grain">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocw-red/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">

        {/* "Why Us" teaser above stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-14 sm:mb-24 md:mb-32"
        >
          <div className="max-w-3xl">
            <p className="section-label mb-6">WHY US</p>
            <h2
              className="cinematic-title font-cinematic font-black text-ocw-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 6vw, 7rem)' }}
            >
              NOT JUST
              <span className="italic text-ocw-red"> ANOTHER</span>
              <br />PRODUCTION HOUSE.
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-24 bg-ocw-red mb-8 origin-left"
            />
            <p className="text-ocw-white-dim text-base md:text-lg leading-relaxed max-w-2xl">
              We're storytellers who happen to work with cameras. Every project we take on is personal.
              We invest fully in understanding your vision, and we don't stop until the final frame
              is exactly as it should be.
            </p>
          </div>

          {/* Why us pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '◆', title: 'VISION FIRST', desc: 'We start every project with deep creative planning before we touch a camera.' },
              { icon: '▸', title: 'UNCOMPROMISING QUALITY', desc: 'Every frame is crafted with precision. We never settle for good enough.' },
              { icon: '●', title: 'END-TO-END SERVICE', desc: 'From concept and scripting to filming, editing and delivery — we handle everything.' },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
                className="border-l border-ocw-red/50 pl-6"
              >
                <span className="text-ocw-red text-lg mb-3 block">{pillar.icon}</span>
                <h4 className="font-mono text-[0.65rem] tracking-[0.2em] text-ocw-white mb-3">{pillar.title}</h4>
                <p className="text-ocw-gray text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};
