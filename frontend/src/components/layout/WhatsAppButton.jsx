import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '573108175926';

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].whatsapp;
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(data.message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Contact via WhatsApp"
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block bg-[#161b22] border border-[#1e2a3a] rounded-lg px-4 py-2 font-mono text-xs text-[#c9d1d9] max-w-[200px] shadow-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        {language === 'en' ? 'Contact me on WhatsApp' : 'Contáctame por WhatsApp'}
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-shadow duration-300 group-hover:scale-105" style={{ transition: 'transform 0.2s ease, box-shadow 0.3s ease' }}>
        <MessageCircle className="w-6 h-6 text-white fill-white" />
        {/* Ping animation */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#00ff41] border-2 border-[#0a0a0f]">
          <span className="absolute inset-0 rounded-full bg-[#00ff41] animate-ping opacity-75" />
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
