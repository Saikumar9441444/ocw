import { ContactSection } from '../components/ContactSection';

export const ContactPage = () => {
  return (
    <main className="pt-16 min-h-screen">
      <div className="text-center py-12 md:py-20">
        <h1 className="cinematic-title font-cinematic font-black text-ocw-white text-4xl md:text-6xl lg:text-7xl mb-4">
          CONTACT <span className="text-ocw-red">US</span>
        </h1>
        <p className="font-mono text-ocw-gray tracking-widest text-xs sm:text-sm">
          LET'S START A PROJECT
        </p>
      </div>
      <ContactSection />
    </main>
  );
};
