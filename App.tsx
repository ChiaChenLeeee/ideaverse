
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdCommercialization from './components/AdCommercialization';
import WealthManagement from './components/WealthManagement';
import AIExploration from './components/AIExploration';
import ArchitecturalWorks from './components/ArchitecturalWorks';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: 'ad', label: '广告商业化' },
  { id: 'finance', label: '理财产品' },
  { id: 'ai', label: 'AI探索' },
  { id: 'architecture', label: '建筑城市' },
  { id: 'about', label: '关于我' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        items={NAV_ITEMS} 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />
      <main>
        <Hero />
        <section id="ad">
          <AdCommercialization />
        </section>
        <section id="finance">
          <WealthManagement />
        </section>
        <section id="ai">
          <AIExploration />
        </section>
        <section id="architecture">
          <ArchitecturalWorks />
        </section>
        <section id="about">
          <AboutMe />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
