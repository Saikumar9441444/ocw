import { Link } from 'react-router-dom';
import { CONFIG } from '../config';

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-ocw-black border-t border-ocw-charcoal-light py-16">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <button onClick={scrollToTop} className="block mb-5">
              <img
                src="/ocw_logo_user.png"
                alt="Our Creative Works"
                className="h-28 w-auto object-contain"
              />
            </button>
            <p className="text-ocw-gray text-sm font-body leading-relaxed">
              A creative filmmaking and digital production studio crafting powerful visual experiences.
            </p>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-gray/60 mt-4">
              FOUNDED BY {CONFIG.brand.founder}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-6">NAVIGATE</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'HOME', href: '/' },
                { label: 'SERVICES', href: '/services' },
                { label: 'WORKS', href: '/works' },
                { label: 'ABOUT', href: '/about' },
                { label: 'CONTACT', href: '/contact' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={scrollToTop}
                  className="font-mono text-[0.65rem] tracking-[0.15em] text-ocw-gray hover:text-ocw-white transition-colors text-left w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-ocw-red mb-6">CONTACT</p>
            <a
              href={`mailto:${CONFIG.brand.email}`}
              className="text-ocw-white-dim hover:text-ocw-white transition-colors font-body text-sm block mb-3"
            >
              {CONFIG.brand.email}
            </a>
            <p className="text-ocw-gray font-body text-sm mb-6">{CONFIG.brand.location}</p>
            <div className="flex gap-4">
              <a href={CONFIG.brand.instagram} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.6rem] tracking-[0.15em] text-ocw-gray hover:text-ocw-red transition-colors">
                INSTAGRAM
              </a>
              <a href={CONFIG.brand.youtube} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.6rem] tracking-[0.15em] text-ocw-gray hover:text-ocw-red transition-colors">
                YOUTUBE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ocw-charcoal-light pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.55rem] tracking-[0.2em] text-ocw-gray">
            © {new Date().getFullYear()} OUR CREATIVE WORKS. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] text-ocw-gray hover:text-ocw-red transition-colors"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
