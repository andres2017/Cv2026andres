import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { MapPin, Briefcase, Shield, Globe } from 'lucide-react';

const iconMap = { MapPin, Briefcase, Shield, Globe };

const AboutSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].about;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {data.stats.map((stat, i) => (
            <Card
              key={i}
              className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 text-center hover:border-[#00ff41]/30 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.08)]"
            >
              <div className="font-mono text-2xl sm:text-4xl font-bold text-[#00ff41] mb-1">{stat.value}</div>
              <div className="font-mono text-[10px] sm:text-xs text-[#8b949e] uppercase tracking-wider">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Bio & Details */}
        <div
          className={`grid md:grid-cols-5 gap-6 sm:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="md:col-span-3">
            <Card className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 h-full">
              <div className="font-mono text-xs text-[#00ff41]/50 mb-4">{'>'} cat bio.txt</div>
              <p className="text-[#c9d1d9] leading-relaxed text-sm sm:text-base">{data.bio}</p>
            </Card>
          </div>
          <div className="md:col-span-2 space-y-3">
            {data.details.map((detail, i) => {
              const Icon = iconMap[detail.icon];
              return (
                <Card
                  key={i}
                  className="bg-[#0d1117]/60 border-[#1e2a3a] p-4 flex items-center gap-4 hover:border-[#00ff41]/30 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-[#00ff41]/5 border border-[#00ff41]/20 group-hover:bg-[#00ff41]/10 transition-colors duration-300 shrink-0">
                    {Icon && <Icon className="w-4 h-4 text-[#00ff41]" />}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs text-[#8b949e]">{detail.label}</div>
                    <div className="font-mono text-sm text-[#c9d1d9] truncate">{detail.value}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
