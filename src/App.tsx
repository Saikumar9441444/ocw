import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Preloader } from './components/Preloader';
import { ReelsPage } from './pages/ReelsPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/works" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
