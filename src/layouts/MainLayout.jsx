import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import MobileNavigation from '../components/layout/MobileNavigation';

/**
 * Main Layout component wrapping the page views
 */
export const MainLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar onMobileMenuToggle={() => setMobileMenuOpen(true)} />
      
      {/* Mobile Menu Panel */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Sidebar & Body Content container */}
      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        <Sidebar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 overflow-x-hidden flex flex-col min-h-[calc(100vh-10rem)]">
          {children}
        </main>
      </div>

      {/* Footer block */}
      <Footer />
    </div>
  );
};

export default MainLayout;
