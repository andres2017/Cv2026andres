import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import { Switch } from '../ui/switch';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const data = portfolioData[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#00ff41]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <Shield className="w-5 h-5 text-[#00ff41] group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.5)] transition-[filter] duration-300" />
            <span className="font-mono font-bold text-lg text-[#00ff41]">
              {data.brand}<span className="animate-pulse">_</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {data.links.map((link, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-sm text-[#8b949e] hover:text-[#00ff41] transition-colors duration-200 relative group"
              >
                <span className="text-[#00ff41]/40 mr-1">$</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00ff41] group-hover:w-full transition-[width] duration-300" />
              </button>
            ))}
          </div>

          {/* Language Toggle + Mobile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className={language === 'en' ? 'text-[#00ff41]' : 'text-[#8b949e]'}>EN</span>
              <Switch
                checked={language === 'es'}
                onCheckedChange={toggleLanguage}
                className="data-[state=checked]:bg-[#00ff41]/30 data-[state=unchecked]:bg-[#1e2a3a]"
              />
              <span className={language === 'es' ? 'text-[#00ff41]' : 'text-[#8b949e]'}>ES</span>
            </div>

            <button
              className="md:hidden text-[#00ff41] p-1"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0d1117]/95 backdrop-blur-md border-b border-[#00ff41]/10 px-4 py-4 space-y-1">
          {data.links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left font-mono text-sm text-[#8b949e] hover:text-[#00ff41] transition-colors py-2 px-2 rounded hover:bg-[#00ff41]/5"
            >
              <span className="text-[#00ff41]/40 mr-2">$</span>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
