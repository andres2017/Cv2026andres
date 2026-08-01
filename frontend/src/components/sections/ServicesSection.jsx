import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Bot, Sparkles, Cpu, Shield, Rocket, GraduationCap, ChevronRight, MessageCircle, Workflow } from 'lucide-react';

const iconMap = { Bot, Sparkles, Cpu, Shield, Rocket, GraduationCap, Workflow };

const ServicesSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].services;
  const [ref, isVisible] = useScrollReveal();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <Card
                key={i}
                className={`card-lift bg-[#0d1117]/70 border-[#1e2a3a] p-5 sm:p-6 hover:border-[#00ff41]/40 group flex flex-col transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${120 + i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/25 flex items-center justify-center mb-4 group-hover:bg-[#00ff41]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#00ff41]" />
                </div>
                <h3 className="font-mono text-base font-bold text-[#f0f6fc] mb-2 group-hover:text-[#00ff41] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed mb-4 flex-1">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-1.5 font-mono text-xs text-[#00d4ff]">
                      <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[#00ff41]" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Button
            onClick={scrollToContact}
            className="bg-[#00ff41] text-[#0a0a0f] hover:bg-[#00ff41]/90 font-mono font-semibold px-8 py-3 gap-2 shadow-[0_0_25px_rgba(0,255,65,0.25)] hover:shadow-[0_0_35px_rgba(0,255,65,0.4)] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {data.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
