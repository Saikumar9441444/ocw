import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONFIG } from '../config';

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', project: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `
    w-full bg-transparent border-b border-ocw-charcoal-light text-ocw-white font-body
    py-4 px-0 text-base focus:outline-none focus:border-ocw-red placeholder-ocw-gray
    transition-colors duration-300
  `;

  return (
    <section id="contact" ref={ref} className="relative bg-ocw-charcoal py-8 md:py-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero_cinematic.jpg" alt="" className="w-full h-full object-cover opacity-5" aria-hidden />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ocw-charcoal via-ocw-charcoal/95 to-ocw-charcoal/80" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="section-label mb-6"
            >
              06 — START A PROJECT
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="cinematic-title font-cinematic font-black text-ocw-white mb-8"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 6rem)' }}
            >
              LET'S CREATE<br />
              <span className="italic text-ocw-red">SOMETHING</span><br />
              REMARKABLE.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-16 bg-ocw-red mb-10 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-ocw-white-dim text-base leading-relaxed mb-12"
            >
              Have a project in mind? We'd love to hear about it.
              Tell us your vision and we'll tell you how we can bring it to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-1">EMAIL</p>
                <a
                  href={`mailto:${CONFIG.brand.email}`}
                  className="text-ocw-white-dim hover:text-ocw-white transition-colors font-body"
                >
                  {CONFIG.brand.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-1">LOCATION</p>
                <p className="text-ocw-white-dim font-body">{CONFIG.brand.location}</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href={CONFIG.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-gray hover:text-ocw-red transition-colors"
                >
                  INSTAGRAM
                </a>
                <span className="text-ocw-charcoal-light">|</span>
                <a
                  href={CONFIG.brand.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-gray hover:text-ocw-red transition-colors"
                >
                  YOUTUBE
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start justify-center h-full"
              >
                <div className="w-12 h-12 rounded-full border-2 border-ocw-red flex items-center justify-center mb-6">
                  <span className="text-ocw-red text-xl">✓</span>
                </div>
                <h3 className="cinematic-title font-cinematic font-bold text-ocw-white text-3xl mb-4">
                  MESSAGE RECEIVED.
                </h3>
                <p className="text-ocw-white-dim font-body leading-relaxed">
                  We'll be in touch within 24 hours. Looking forward to creating something remarkable with you.
                </p>
              </motion.div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-10"
                noValidate
              >
                <div>
                  <label htmlFor="contact-name" className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Full name"
                    className={inputClass}
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red block mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-project" className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red block mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    id="contact-project"
                    className={inputClass + ' cursor-pointer'}
                    value={formState.project}
                    onChange={e => setFormState({ ...formState, project: e.target.value })}
                  >
                    <option value="" className="bg-ocw-charcoal">Select a service...</option>
                    <option value="filmmaking" className="bg-ocw-charcoal">Filmmaking</option>
                    <option value="drone" className="bg-ocw-charcoal">Drone Cinematography</option>
                    <option value="editing" className="bg-ocw-charcoal">Video Editing</option>
                    <option value="event" className="bg-ocw-charcoal">Event Coverage</option>
                    <option value="photography" className="bg-ocw-charcoal">Photography</option>
                    <option value="social" className="bg-ocw-charcoal">Social Media Content</option>
                    <option value="other" className="bg-ocw-charcoal">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red block mb-2">
                    TELL US ABOUT YOUR PROJECT *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe your project, timeline, and vision..."
                    className={inputClass + ' resize-none'}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-primary w-full justify-center text-center"
                >
                  SEND MESSAGE
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
