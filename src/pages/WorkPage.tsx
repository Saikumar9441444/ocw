import { PortfolioSection } from '../components/PortfolioSection';
import { PageTransition } from '../components/PageTransition';

export const WorkPage = () => {
  return (
    <PageTransition>
      <main className="pt-16 min-h-screen">
        <PortfolioSection />
      </main>
    </PageTransition>
  );
};
