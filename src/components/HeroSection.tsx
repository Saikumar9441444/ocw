import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VisitingCardModal } from './VisitingCardModal';

const DustParticle = ({ delay }: { delay: number }) => {
  const [{ left, size, duration, xMovement }] = useState(() => ({
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    xMovement: (Math.random() - 0.5) * 100
  }));

  return (
    <motion.div
      className="absolute rounded-full bg-white pointer-events-none"
      style={{ left, bottom: '-10px', width: size, height: size, opacity: 0 }}
      animate={{
        y: [0, -(window.innerHeight + 100)],
        x: [0, xMovement],
        opacity: [0, 0.4, 0.4, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  );
};

const headline = ["LET'S CONNECT"];

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[70svh] flex flex-col justify-center overflow-hidden film-grain"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_cinematic.jpg"
          alt="Cinematic filming scene"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-ocw-black z-[1] opacity-55" />
      <div className="absolute inset-0 vignette z-[2] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-ocw-black to-transparent z-[2] pointer-events-none" />

      {/* Dust particles — desktop only */}
      {Array.from({ length: 12 }).map((_, i) => (
        <DustParticle key={i} delay={i * 1.2} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16 w-full pt-20 sm:pt-0">



        {/* Headline */}
        <div className="mb-6 sm:mb-8">
          {headline.map((line, li) => (
            <div key={li} className="overflow-hidden">
              <h1
                className="cinematic-title font-cinematic font-black text-ocw-white"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  lineHeight: '0.92',
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div>
          <div className="w-full overflow-hidden mb-8 sm:mb-10">
            <p className="text-ocw-white-dim font-mono tracking-wider sm:tracking-[0.2em] text-[7.5px] sm:text-[11px] md:text-sm whitespace-nowrap text-ellipsis">
              SHOOT - EDIT - PUBLISH - PROMOTE - MARKET - SUCCESS
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/our_creative_works/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center sm:justify-start"
            >
              CONTENT
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <button
              id="start-project-btn"
              className="btn-outline justify-center sm:justify-start"
              onClick={() => setIsContactModalOpen(true)}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <p className="font-mono text-[0.55rem] tracking-[0.3em] text-ocw-gray">SCROLL</p>
        <div className="scroll-indicator" />
      </div>
    </section>

      {/* Visiting Card Modal */}
      <VisitingCardModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};
