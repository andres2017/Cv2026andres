import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import { Shield, Heart, Terminal } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].footer;

  return (
    <footer className="relative z-10 border-t border-[#1e2a3a] bg-[#0a0a0f]/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00ff41]" />
            <span className="font-mono text-sm text-[#8b949e]">{data.copyright}</span>
          </div>
          <div className="font-mono text-xs text-[#8b949e]/50 flex items-center gap-1">
            {data.builtWith} <Heart className="w-3 h-3 text-[#00ff41]" /> & <Terminal className="w-3 h-3 text-[#00ff41]" />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="font-mono text-xs text-[#8b949e]/30">{data.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
