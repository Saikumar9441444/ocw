import { PortfolioSection } from '../components/PortfolioSection';
import { ContactSection } from '../components/ContactSection';

export const WorkPage = () => {
  return (
    <main className="pt-24 min-h-screen">

      <PortfolioSection />
      
      <div className="mt-24">
        <ContactSection />
      </div>
    </main>
  );
};
