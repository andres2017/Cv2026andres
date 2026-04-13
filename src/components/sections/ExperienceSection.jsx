import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].experience;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
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

        {/* Timeline */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00ff41]/50 via-[#00ff41]/20 to-transparent" />

          {data.items.map((item, i) => (
            <div key={i} className="relative pl-12 md:pl-20 pb-12">
              {/* Timeline dot */}
              <div className="absolute left-[9px] md:left-[25px] top-2 w-4 h-4 rounded-full bg-[#00ff41] border-4 border-[#0a0a0f] shadow-[0_0_10px_rgba(0,255,65,0.5)]" />

              <Card className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 hover:border-[#00ff41]/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-mono text-base sm:text-lg font-bold text-[#c9d1d9]">{item.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-3 h-3 text-[#00ff41]" />
                      <span className="font-mono text-sm text-[#00ff41]">{item.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono text-xs border-[#00ff41]/30 text-[#00ff41] bg-transparent">
                      {item.duration}
                    </Badge>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#8b949e]">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>
                </div>

                <p className="text-[#8b949e] text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((h, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1 font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/5 border border-[#00d4ff]/20 px-3 py-1 rounded"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {h}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
