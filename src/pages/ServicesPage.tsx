import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
import { CONFIG } from '../config';
import { VisitingCardModal } from '../components/VisitingCardModal';

const sliderImages = [
  '/event_cinematic.jpg',
  '/story_section.jpg',
  '/hero_cinematic.jpg',
  '/editing_cinematic.jpg'
];

export const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-ocw-black pt-24 pb-24 film-grain">
      
      {/* Small Hero Slider */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden mb-16 md:mb-24">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-ocw-black/60" />
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-cinematic font-black text-ocw-white text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
            OUR <span className="text-ocw-red">SERVICES</span>
          </h1>
          <p className="font-body text-ocw-gray text-sm md:text-base max-w-2xl">
            From intimate celebrations to large-scale corporate productions, we deliver cinematic excellence.
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {CONFIG.services.map((service, index) => (
            <div key={service.number} className="relative group/card">
              {/* Background Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-ocw-red to-transparent opacity-0 group-hover/card:opacity-30 blur-xl transition-opacity duration-500 rounded-lg"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden bg-ocw-charcoal border border-white/5 cursor-pointer transition-all duration-500 hover:border-ocw-red/50 hover:-translate-y-1 z-10 h-full"
                onClick={() => setSelectedService(service)}
              >
              <div className="flex flex-col h-full">
                {/* Top Image */}
                <div className="h-48 sm:h-40 xl:h-48 w-full relative overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocw-charcoal to-transparent opacity-80" />
                  <span className="absolute bottom-4 right-4 font-mono text-ocw-red text-xl font-bold tracking-widest opacity-80">
                    {service.number}
                  </span>
                </div>
                
                {/* Content Block */}
                <div className="p-6 sm:p-4 xl:p-5 flex flex-col flex-grow">
                  <h3 className="font-cinematic font-bold text-ocw-white text-xl sm:text-base xl:text-lg leading-tight mb-2 h-auto sm:h-[3.5rem] xl:h-[3.5rem] sm:line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-ocw-gray text-sm sm:text-xs mb-4 h-auto sm:h-[4.5rem] xl:h-[4.5rem] sm:line-clamp-4">
                    {service.description}
                  </p>
                  
                  {/* Features List directly on card */}
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <ul className="flex flex-col gap-2">
                      {service.features?.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-1.5 xl:gap-2 text-ocw-white-dim text-sm sm:text-[10px] xl:text-xs leading-tight">
                          <span className="text-ocw-red mt-1 sm:mt-0.5">
                            <svg width="12" height="12" className="w-3 h-3 sm:w-2.5 sm:h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Contact Button */}
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsContactModalOpen(true);
                      }}
                      className="w-full flex items-center justify-between group/btn bg-ocw-black hover:bg-ocw-red border border-white/10 hover:border-ocw-red text-ocw-white px-4 py-2.5 sm:py-2 xl:py-3 transition-all duration-300"
                    >
                      <span className="font-mono text-xs sm:text-[10px] xl:text-xs tracking-widest">BOOK NOW</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover/btn:translate-x-1 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-ocw-black/95 backdrop-blur-xl"
              onClick={() => setSelectedService(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative w-full max-w-4xl bg-ocw-charcoal border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-ocw-black/50 hover:bg-ocw-red text-white transition-colors duration-300 rounded-full"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="w-full md:w-5/12 h-64 md:h-auto relative">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocw-charcoal hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocw-charcoal to-transparent md:hidden" />
              </div>
              
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <span className="font-mono text-ocw-red text-sm tracking-widest mb-3">
                  {selectedService.number}
                </span>
                <h2 className="font-cinematic font-bold text-ocw-white text-3xl md:text-4xl mb-4 leading-tight">
                  {selectedService.title}
                </h2>
                <p className="font-body text-ocw-gray text-base mb-8">
                  {selectedService.description}
                </p>
                
                <h4 className="font-mono text-ocw-white text-xs tracking-widest mb-4 border-b border-white/10 pb-2">
                  WHAT'S INCLUDED
                </h4>
                
                <ul className="flex flex-col gap-3">
                  {selectedService.features?.map((feature: string, idx: number) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.05) }}
                      className="flex items-start gap-3 text-ocw-white-dim text-sm"
                    >
                      <span className="text-ocw-red mt-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => setIsContactModalOpen(true), 300);
                  }}
                  className="mt-10 btn-primary self-start"
                >
                  BOOK THIS SERVICE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Process Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-32 mb-16">
        <div className="text-center mb-16">
          <h2 className="font-cinematic font-black text-ocw-white text-3xl md:text-5xl mb-4">
            OUR <span className="text-ocw-red">PROCESS</span>
          </h2>
          <p className="font-body text-ocw-gray max-w-2xl mx-auto">
            How we bring your vision to life from the initial concept to the final cinematic masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-white/10 z-0"></div>
          
          {[
            { step: '01', title: 'PRE-PRODUCTION', desc: 'Concept development, scriptwriting, location scouting, and meticulous planning to ensure every detail is covered before the cameras roll.' },
            { step: '02', title: 'PRODUCTION', desc: 'Executing the vision with top-tier equipment (Red/Arri/Sony), professional lighting, and an experienced crew focused on capturing the perfect shots.' },
            { step: '03', title: 'POST-PRODUCTION', desc: 'Professional editing, color grading, sound design, and VFX to polish the raw footage into a captivating and emotional final product.' }
          ].map((process, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-ocw-charcoal border border-ocw-red flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(196,30,58,0.2)] group-hover:shadow-[0_0_30px_rgba(196,30,58,0.4)] transition-all duration-300 group-hover:scale-105">
                <span className="font-cinematic text-3xl text-ocw-white font-bold">{process.step}</span>
              </div>
              <h3 className="font-mono tracking-widest text-ocw-red text-sm mb-4">{process.title}</h3>
              <p className="font-body text-ocw-gray text-sm leading-relaxed max-w-xs">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-ocw-charcoal py-24 mt-24 border-y border-white/5">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="font-cinematic font-black text-ocw-white text-3xl md:text-5xl mb-4">
              COMMON <span className="text-ocw-red">QUESTIONS</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'How far in advance should we book?', a: 'For weddings and large events, we recommend booking 3-6 months in advance. For commercial or reel shoots, 2-4 weeks is usually sufficient depending on our schedule.' },
              { q: 'Do you travel for shoots?', a: 'Absolutely. While based in Nellore, we travel nationwide for destination weddings, corporate events, and brand campaigns. Travel expenses are calculated transparently in our quotes.' },
              { q: 'How long does editing take?', a: 'Standard reel shoots (iPhones) take 3-5 days. Larger events and cinematic commercial projects typically take 2-4 weeks to ensure the highest quality color grading and sound design.' },
              { q: 'Do we get the raw footage?', a: 'Raw footage can be provided upon request for an additional fee. However, we highly recommend trusting our post-production process, as the raw files are uncolored and unedited.' }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-ocw-black/50 border border-white/5 p-6 md:p-8"
              >
                <h3 className="font-cinematic font-bold text-ocw-white text-xl mb-3 flex items-start gap-4">
                  <span className="text-ocw-red text-sm mt-1">Q.</span>
                  {faq.q}
                </h3>
                <p className="font-body text-ocw-gray text-sm md:text-base leading-relaxed ml-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Contact Section Below Services */}
      <div className="mt-0">
        <ContactSection />
      </div>
      
      <VisitingCardModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  );
};
