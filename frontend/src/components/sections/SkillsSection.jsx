import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { Shield, Code, Link, Server, Sparkles, Workflow } from 'lucide-react';

const iconMap = { Shield, Code, Link, Server, Sparkles, Workflow };

const SkillsSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].skills;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            return (
              <Card
                key={i}
                className={`bg-[#0d1117]/60 border-[#1e2a3a] p-5 transition-all duration-700 hover:border-[#00ff41]/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-[#00ff41]/10 border border-[#00ff41]/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#00ff41]" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#f0f6fc]">{cat.name}</h3>
                </div>
                <div className="space-y-3">
                  {cat.items.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between mb-1">
                        <span className="font-mono text-xs text-[#c9d1d9]">{skill.name}</span>
                        <span className="font-mono text-xs text-[#00ff41]">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 bg-[#161b22]" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
