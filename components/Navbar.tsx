
import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  items: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, activeSection, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div 
          className="text-lg font-bold tracking-tight cursor-pointer hover:opacity-70 transition-opacity uppercase"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          IDEAVERSE<span className="text-purple-600">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-purple-600' 
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile indicator or hamburger could go here, keeping it minimalist */}
          <span className="text-xs text-zinc-400">Scroll to explore</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
