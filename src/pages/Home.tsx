import { HeroSection } from '../components/HeroSection';
import { PortfolioSection } from '../components/PortfolioSection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <PortfolioSection limit={4} />
    </main>
  );
};
