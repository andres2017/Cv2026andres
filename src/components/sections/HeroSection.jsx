import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useTypingEffect from '../../hooks/useTypingEffect';
import { Button } from '../ui/button';
import { ChevronDown, Terminal, Lock } from 'lucide-react';

const HeroContent = ({ data }) => {
  const { displayedLines, isComplete } = useTypingEffect(data.terminalLines, 35, 500);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl w-full">
        {/* Terminal Window */}
        <div className="bg-[#0d1117]/80 backdrop-blur-sm rounded-lg border border-[#1e2a3a] shadow-2xl shadow-[#00ff41]/5 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#1e2a3a]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-[#8b949e] flex items-center justify-center gap-1">
              <Terminal className="w-3 h-3" />
              andres@cybersec:~
            </div>
            <Lock className="w-3 h-3 text-[#00ff41]" />
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-sm min-h-[220px] sm:min-h-[260px]">
            {displayedLines.map((line, i) => (
              <div key={i} className="mb-3">
                <div className="text-[#00ff41]">
                  {line.prompt}
                  {i === displayedLines.length - 1 && !line.response && (
                    <span className="inline-block w-2 h-4 bg-[#00ff41] ml-1 animate-pulse align-middle" />
                  )}
                </div>
                {line.response && (
                  <div className="text-[#c9d1d9] ml-2 sm:ml-4 mt-1">
                    <span className="text-[#00d4ff]">→</span> {line.response}
                    {i === displayedLines.length - 1 && !isComplete && (
                      <span className="inline-block w-2 h-4 bg-[#00ff41] ml-1 animate-pulse align-middle" />
                    )}
                  </div>
                )}
              </div>
            ))}
            {isComplete && (
              <div className="text-[#00ff41] mt-2">
                $ <span className="inline-block w-2 h-4 bg-[#00ff41] ml-1 animate-pulse align-middle" />
              </div>
            )}
          </div>
        </div>

        {/* Subtitle & CTA */}
        <div
          className={`mt-8 text-center transition-opacity duration-700 ${
            isComplete ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1 className="font-mono text-xl sm:text-2xl md:text-3xl font-bold text-[#f0f6fc] mb-2">
            Andrés Vargas Robles
          </h1>
          <p className="text-xs sm:text-sm text-[#8b949e] max-w-2xl mx-auto mb-8 font-mono leading-relaxed">
            {data.subtitle}
          </p>
          <Button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 font-mono px-8 py-3 rounded transition-colors duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
          >
            {data.cta}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-12 text-center transition-opacity duration-700 ${
            isComplete ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="font-mono text-xs text-[#8b949e]/50">{data.scroll}</span>
            <ChevronDown className="w-4 h-4 text-[#00ff41]/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].hero;

  return <HeroContent key={language} data={data} />;
};

export default HeroSection;
