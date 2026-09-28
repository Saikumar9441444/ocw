import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'WORKS', href: '/works' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash changes after navigation if coming from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          window.history.pushState('', document.title, window.location.pathname);
        }
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/')) {
      navigate(href);
      return;
    }

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 ${
          scrolled ? 'nav-glass shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3"
            aria-label="OUR CREATIVE WORKS — Home"
          >
            <img
              src="/ocw_logo_icon.png"
              alt="Our Creative Works"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div className="flex flex-col items-start whitespace-nowrap">
              <span className="font-cinematic font-bold text-ocw-white text-[11px] sm:text-sm tracking-[0.12em] leading-tight">
                OUR CREATIVE WORKS
              </span>
              <div className="h-px w-full bg-ocw-red mt-0.5" />
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-[0.65rem] tracking-[0.2em] text-ocw-white-dim hover:text-ocw-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ocw-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] text-ocw-red hover:text-ocw-red-light transition-colors duration-300"
            >
              LET'S CREATE <span className="text-base">→</span>
            </button>

            {/* Hamburger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-px w-7 bg-ocw-white"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className="block h-px w-5 bg-ocw-red"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-px w-7 bg-ocw-white"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-ocw-black flex flex-col justify-center items-start px-10"
          >
            {/* Red accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-0 left-0 right-0 h-px bg-ocw-red origin-left"
            />



            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="cinematic-title text-5xl text-ocw-white hover:text-ocw-red transition-colors duration-300 text-left"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <p className="section-label mb-2">GET IN TOUCH</p>
              <a href={`mailto:${CONFIG.brand.email}`} className="text-ocw-white-dim font-mono text-sm">
                {CONFIG.brand.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
