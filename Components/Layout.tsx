
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AiConcierge from './AiConcierge';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold/30">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <header role="banner">
        <Navbar isScrolled={scrolled} />
      </header>

      <main id="main-content" role="main" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>

      <Footer />
      <AiConcierge />
    </div>
  );
};

export default Layout;
