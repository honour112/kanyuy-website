
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConstructionServicePage from './pages/ConstructionServicePage';
import SkincareServicePage from './pages/SkincareServicePage';
import DigitalMarketingServicePage from './pages/DigitalMarketingServicePage';
import MeetOurTeamPage from './pages/MeetOurTeamPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/construction" element={<ConstructionServicePage />} />
          <Route path="/services/skincare" element={<SkincareServicePage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingServicePage />} />
          <Route path="/team" element={<MeetOurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
