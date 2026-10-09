import { HeroSection } from '../components/HeroSection';
import { HeroStats } from '../components/HeroStats';
import { PortfolioSection } from '../components/PortfolioSection';
import { ServicesSection } from '../components/ServicesSection';
import { StatsSection } from '../components/StatsSection';
import { ContactSection } from '../components/ContactSection';
import { PageTransition } from '../components/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <HeroStats />
        <PortfolioSection limit={3} />
        <ServicesSection />
        <StatsSection />
        <div className="mt-24">
          <ContactSection />
        </div>
      </main>
    </PageTransition>
  );
};
