import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ExternalLink, Rocket } from 'lucide-react';

const VenturesSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].ventures;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="ventures" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
          <p className="font-mono text-sm sm:text-base text-[#c9d1d9] mt-5 max-w-3xl leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {data.items.map((item, i) => (
            <Card
              key={i}
              className="bg-[#0d1117]/70 border-[#1e2a3a] p-5 sm:p-6 hover:border-[#00ff41]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,65,0.1)] group flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#00ff41]" />
                  <h3 className="font-mono text-base font-bold text-[#f0f6fc] group-hover:text-[#00ff41] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/5 shrink-0"
                >
                  {item.tag}
                </Badge>
              </div>
              <p className="text-sm text-[#8b949e] leading-relaxed mb-4 flex-1">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff41] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {item.linkLabel || item.link}
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;
