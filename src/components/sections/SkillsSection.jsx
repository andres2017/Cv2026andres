import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Shield, Code, Link, Server } from 'lucide-react';

const iconMap = { Shield, Code, Link, Server };

const SkillsSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].skills;
  const [ref, isVisible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap gap-2 sm:gap-3 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {data.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded font-mono text-xs sm:text-sm border transition-colors duration-300 ${
                  activeCategory === i
                    ? 'bg-[#00ff41]/10 border-[#00ff41]/50 text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.1)]'
                    : 'bg-[#0d1117]/60 border-[#1e2a3a] text-[#8b949e] hover:border-[#00ff41]/30 hover:text-[#c9d1d9]'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <Card
          className={`bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {data.categories[activeCategory].items.map((skill, i) => (
              <div key={`${activeCategory}-${i}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs sm:text-sm text-[#c9d1d9]">{skill.name}</span>
                  <Badge variant="outline" className="font-mono text-[10px] border-[#00ff41]/30 text-[#00ff41] bg-transparent">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="h-2 bg-[#1e2a3a] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: 'linear-gradient(90deg, #00ff41, #00d4ff)',
                      boxShadow: '0 0 8px rgba(0, 255, 65, 0.3)',
                      transition: `width 1s ease-out ${i * 100 + 400}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
