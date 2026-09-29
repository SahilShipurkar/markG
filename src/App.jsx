import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExpertModal from './components/ExpertModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

export default function App() {
  // Read initial route from URL path or hash
  const getPageFromUrl = () => {
    const path = window.location.pathname.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
    
    if (path === 'about' || hash === 'about') return 'about';
    if (path === 'help' || hash === 'help') return 'help';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromUrl);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);

  // Sync state with browser Back and Forward navigation (popstate event)
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page and browser history
  const handleNavigate = (page) => {
    if (page === currentPage) return;

    setCurrentPage(page);
    const targetPath = page === 'home' ? '/' : `/${page}`;
    
    // Push new history state so Back button returns to previous/home view
    window.history.pushState({ page }, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Sticky Enterprise Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenExpertModal={() => setIsExpertModalOpen(true)}
      />

      {/* Main View Router */}
      <main style={{ minHeight: '100vh' }}>
        {currentPage === 'home' && (
          <HomePage 
            onOpenExpertModal={() => setIsExpertModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onOpenExpertModal={() => setIsExpertModalOpen(true)}
            onExploreSolutions={() => {}}
          />
        )}

        {currentPage === 'help' && (
          <HelpPage 
            onOpenExpertModal={() => setIsExpertModalOpen(true)}
          />
        )}
      </main>

      {/* Enterprise Footer Component */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenExpertModal={() => setIsExpertModalOpen(true)}
      />

      {/* Interactive Consultation Modal */}
      <ExpertModal 
        isOpen={isExpertModalOpen}
        onClose={() => setIsExpertModalOpen(false)}
      />
    </div>
  );
}


