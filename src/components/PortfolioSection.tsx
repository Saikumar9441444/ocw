import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { VideoModal } from './VideoModal';
import { CONFIG } from '../config';

type Project = typeof CONFIG.portfolio[0];

const PortfolioCard = ({
  project,
  className,
  index,
  onSelectVideo,
  isHorizontal,
}: {
  project: Project;
  className?: string;
  index: number;
  onSelectVideo: (videoSrc: string) => void;
  isHorizontal?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const inView = useInView(cardRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    // Stagger by 50ms per index so they load very quickly
    const staggerDelay = index * 50;
    const loadDuration = 200; // 0.2 seconds loading animation per card

    let startTime = Date.now() + staggerDelay;
    
    const interval = setInterval(() => {
      const now = Date.now();
      if (now < startTime) return;

      const elapsed = now - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / loadDuration) * 100));
      
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 300); // small pause at 100%
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index, inView]);

  useEffect(() => {
    // Iframe does not need play/pause control via ref
  }, [isLoaded]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, delay: index * 0.25 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => project.video && onSelectVideo(project.video)}
      className={`portfolio-card relative overflow-hidden cursor-pointer group ${className || ''}`}
      style={{ aspectRatio: isHorizontal ? '16/9' : '9/16' }}
    >
      {/* Background while loading */}
      {!isLoaded && <div className="absolute inset-0 bg-ocw-black z-0" />}

      {isLoaded && project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full transition-transform duration-700 bg-black z-0 object-cover absolute inset-0"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      )}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ocw-black/80 via-transparent to-transparent" />

      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="font-mono text-[0.55rem] tracking-[0.2em] text-ocw-red bg-ocw-black/80 px-3 py-1">
          {project.category}
        </span>
      </div>

      {/* Play Icon / Loading Circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {!isLoaded ? (
          <div 
            className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(196,30,58,0.2)]"
            style={{ background: `conic-gradient(#C41E3A ${progress}%, transparent 0)` }}
          >
            <div className="absolute inset-[2px] bg-ocw-black rounded-full flex items-center justify-center">
              <span className="font-mono text-ocw-white text-[10px] tracking-widest">{progress}%</span>
            </div>
          </div>
        ) : (
          <div className={`w-14 h-14 rounded-full bg-ocw-black/60 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform duration-500 ${hovered ? 'scale-110 shadow-[0_0_20px_rgba(196,30,58,0.4)] border-ocw-red/50' : 'scale-100'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="ml-1 text-white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ocw-black/50"
          />
        )}
      </AnimatePresence>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.div
          animate={hovered ? { y: 0, opacity: 1 } : { y: 12, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-2"
        >
          <div className="h-px w-8 bg-ocw-red mb-3" />
          <p className="text-ocw-white-dim text-xs font-body leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <h3 className={`cinematic-title font-cinematic font-bold text-ocw-white ${isHorizontal ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'}`}>
          {project.title}
        </h3>

        <div className="flex items-center justify-between mt-2 z-20 relative">
          <span className="font-mono text-[0.6rem] text-ocw-gray">{project.year}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectVideo(project.video || '');
            }}
            className="font-mono text-[0.6rem] tracking-[0.15em] text-ocw-red flex items-center gap-1 hover:text-white transition-colors"
          >
            PLAY REEL →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const PortfolioSection = ({ limit }: { limit?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState(location.state?.filter || 'ALL');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const categories = ['ALL', 'CINEMATIC', 'EVENT', 'PROMOTIONAL', 'PREMIUM'];

  let filtered = filter === 'ALL'
    ? CONFIG.portfolio
    : CONFIG.portfolio.filter(p => p.category === filter);

  let verticalProjects = filtered.filter(p => p.category !== 'PREMIUM');
  let horizontalProjects = filtered.filter(p => p.category === 'PREMIUM');

  if (limit) {
    verticalProjects = verticalProjects.slice(0, limit);
    horizontalProjects = horizontalProjects.slice(0, limit);
  }

  return (
    <section id="work" ref={ref} className="relative bg-ocw-charcoal py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">

        {/* Header (Title + Filters) */}
        <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h1 className="cinematic-title font-cinematic font-black text-ocw-white text-4xl md:text-5xl lg:text-6xl mb-2">
              OUR <span className="text-ocw-red">WORKS</span>
            </h1>
            <p className="font-mono text-ocw-gray tracking-widest text-[10px] sm:text-xs">
              SELECTED PROJECTS & FILMS
            </p>
          </motion.div>

          {/* Filter tabs (hidden on home page) */}
          {!limit && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase()}`}
                  onClick={() => setFilter(cat)}
                  className={`font-mono text-[0.6rem] tracking-[0.15em] px-4 py-2 transition-all duration-300 ${filter === cat
                      ? 'bg-ocw-red text-ocw-white'
                      : 'border border-ocw-charcoal-light text-ocw-gray hover:border-ocw-red hover:text-ocw-red'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-12 sm:gap-16 lg:gap-20"
          >
            {verticalProjects.length > 0 && (
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {verticalProjects.map((project, i) => (
                    <PortfolioCard
                      key={project.id}
                      project={project}
                      index={i}
                      onSelectVideo={setSelectedVideo}
                      className={limit && i === 3 ? 'md:hidden' : ''}
                      isHorizontal={false}
                    />
                  ))}
                </div>
                {limit && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center my-6"
                  >
                    <Link 
                      to="/works" 
                      className="font-mono text-[0.65rem] tracking-[0.2em] text-ocw-red border border-ocw-red px-6 py-3 hover:text-white hover:bg-ocw-red/20 transition-all duration-300 shadow-[0_0_15px_rgba(196,30,58,0.3)] hover:shadow-[0_0_25px_rgba(196,30,58,0.6)] flex items-center gap-2"
                    >
                      VIEW MORE WORKS
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                  </motion.div>
                )}
              </div>
            )}

            {horizontalProjects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {horizontalProjects.map((project, i) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    index={i + verticalProjects.length}
                    onSelectVideo={setSelectedVideo}
                    isHorizontal={true}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 sm:mt-16 flex justify-center"
          >
            <Link to="/works" state={{ filter: 'PREMIUM' }} className="btn-outline">
              VIEW PREMIUM WORKS
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Video Modal */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo || undefined}
        isHorizontal={CONFIG.portfolio.find(p => p.video === selectedVideo)?.category === 'PREMIUM'}
      />
    </section>
  );
};
