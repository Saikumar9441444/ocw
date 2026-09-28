import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

type Film = typeof CONFIG.clientFilms[0];

const VideoModal = ({ film, onClose }: { film: Film; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="modal-overlay"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-5xl mx-4"
    >
      {/* Video placeholder */}
      <div className="relative w-full bg-ocw-charcoal border border-ocw-charcoal-light overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img src={film.thumbnail} alt={film.title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-ocw-red flex items-center justify-center mb-4 cursor-pointer hover:bg-ocw-red/20 transition-colors">
            <svg className="w-8 h-8 text-ocw-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-ocw-gray">ADD YOUR VIDEO URL IN CONFIG</p>
        </div>
      </div>

      {/* Info below video */}
      <div className="bg-ocw-charcoal p-6 border-l border-r border-b border-ocw-charcoal-light">
        <div className="flex items-start justify-between">
          <div>
            <p className="section-label mb-1">{film.category} · {film.year}</p>
            <h3 className="cinematic-title font-cinematic font-bold text-ocw-white text-2xl md:text-3xl">
              {film.title}
            </h3>
            <p className="font-mono text-[0.6rem] text-ocw-gray mt-1">CLIENT: {film.client}</p>
            <p className="text-ocw-white-dim text-sm mt-3 max-w-lg leading-relaxed">{film.description}</p>
          </div>
          <button
            onClick={onClose}
            id="close-modal-btn"
            className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-gray hover:text-ocw-red transition-colors mt-1 flex items-center gap-2"
          >
            CLOSE ✕
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const FilmCard = ({ film, index, onClick }: { film: Film; index: number; onClick: () => void }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer group"
      id={`film-card-${film.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={film.thumbnail}
          alt={film.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ocw-black/50 group-hover:bg-ocw-black/30 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: 1.15 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 rounded-full border-2 border-ocw-white/80 flex items-center justify-center"
          >
            <motion.div
              animate={hovered ? { borderColor: 'rgba(196,30,58,1)' } : { borderColor: 'rgba(245,245,240,0.8)' }}
              className="w-full h-full rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-ocw-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Category */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[0.55rem] tracking-[0.2em] text-ocw-red bg-ocw-black/80 px-3 py-1">
            {film.category}
          </span>
        </div>
      </div>

      {/* Card info */}
      <div className="bg-ocw-charcoal p-5 border border-ocw-charcoal-light border-t-0 group-hover:border-ocw-red/30 transition-colors duration-300">
        <h3 className="font-cinematic font-bold text-ocw-white text-xl group-hover:text-ocw-red transition-colors duration-300">
          {film.title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <p className="font-mono text-[0.6rem] text-ocw-gray">{film.client}</p>
          <p className="font-mono text-[0.6rem] text-ocw-gray">{film.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const ClientFilmsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  return (
    <section id="client-films" ref={ref} className="relative bg-ocw-black py-8 md:py-12">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">

        {/* Header */}
        <div className="mb-10 sm:mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="section-label mb-4"
          >
            02 — CLIENT FILMS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="cinematic-title font-cinematic font-black text-ocw-white"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 6rem)' }}
          >
            FILM<br />
            <span className="text-ocw-red">MAKING.</span>
          </motion.h2>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CONFIG.clientFilms.map((film, i) => (
            <FilmCard
              key={film.id}
              film={film}
              index={i}
              onClick={() => setActiveFilm(film)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeFilm && (
          <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
