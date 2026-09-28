import { StorySection } from '../components/StorySection';
import { StatsSection } from '../components/StatsSection';
import { ContactSection } from '../components/ContactSection';

export const AboutPage = () => {
  return (
    <main className="pt-24 min-h-screen">
      <div className="text-center py-12 md:py-20">
        <h1 className="cinematic-title font-cinematic font-black text-ocw-white text-4xl md:text-6xl lg:text-7xl mb-4">
          ABOUT <span className="text-ocw-red">US</span>
        </h1>
        <p className="font-mono text-ocw-gray tracking-widest text-xs sm:text-sm">
          OUR STORY & IMPACT
        </p>
      </div>
      <StorySection />
      <StatsSection />
      
      <div className="mt-24">
        <ContactSection />
      </div>
    </main>
  );
};
