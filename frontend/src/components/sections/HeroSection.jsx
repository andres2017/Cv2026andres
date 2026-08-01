import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import { Button } from '../ui/button';
import {
  ChevronDown,
  Sparkles,
  Bot,
  Cpu,
  Workflow,
  Rocket,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const serviceIcons = [Bot, Sparkles, Cpu, Workflow, Rocket];

const HeroSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].hero;
  const services = portfolioData[language].services.items;
  const [ready, setReady] = useState(false);
  const [activeTag, setActiveTag] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const tags = services.slice(0, 5);
    if (!tags.length) return;
    const id = setInterval(() => {
      setActiveTag((i) => (i + 1) % tags.length);
    }, 2800);
    return () => clearInterval(id);
  }, [services]);

  const tags = services.slice(0, 5).map((s) => s.title);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#00ff41]/[0.07] blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-[#00d4ff]/[0.06] blur-[90px] animate-float" />
        <div className="absolute top-1/3 -right-16 w-64 h-64 rounded-full bg-[#00ff41]/[0.05] blur-[80px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00ff41]/35 bg-[#00ff41]/10 font-mono text-xs text-[#00ff41] mb-8 transition-all duration-700 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff41]" />
          </span>
          <Sparkles className="w-3.5 h-3.5" />
          AVR · Agencia de IA
        </div>

        {/* Name */}
        <h1
          className={`font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#f0f6fc]">Andrés Vargas</span>
          <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-[#00ff41] via-[#00d4ff] to-[#00ff41] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            {' '}Robles
          </span>
        </h1>

        {/* Rotating service tag */}
        <div
          className={`h-9 mb-6 flex items-center justify-center transition-all duration-700 delay-200 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[#1e2a3a] bg-[#0d1117]/80 backdrop-blur-sm">
            {React.createElement(serviceIcons[activeTag % serviceIcons.length], {
              className: 'w-4 h-4 text-[#00ff41]',
            })}
            <span className="font-mono text-sm text-[#c9d1d9] transition-opacity duration-500">
              {tags[activeTag] || 'Claude · Skills · Agentes'}
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base md:text-lg text-[#8b949e] max-w-2xl mx-auto mb-10 leading-relaxed font-mono transition-all duration-700 delay-300 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {data.subtitle}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 transition-all duration-700 delay-[400ms] ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-[#00ff41] text-[#0a0a0f] hover:bg-[#00ff41]/90 font-mono font-semibold px-8 py-6 rounded-lg text-sm shadow-[0_0_30px_rgba(0,255,65,0.25)] hover:shadow-[0_0_40px_rgba(0,255,65,0.4)] transition-all duration-300 gap-2"
          >
            {data.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="bg-transparent border border-[#00ff41]/40 text-[#00ff41] hover:bg-[#00ff41]/10 hover:border-[#00ff41] font-mono px-8 py-6 rounded-lg text-sm gap-2 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            {language === 'es' ? 'Hablar ahora' : 'Talk now'}
          </Button>
        </div>

        {/* Stats strip */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { value: '6+', label: language === 'es' ? 'Emprendimientos' : 'Ventures' },
            { value: 'Claude', label: language === 'es' ? 'Capacitación' : 'Training' },
            { value: 'n8n', label: language === 'es' ? 'Automatización' : 'Automation' },
            { value: '<24h', label: language === 'es' ? 'Respuesta' : 'Response' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#1e2a3a] bg-[#0d1117]/60 backdrop-blur-sm px-3 py-4 hover:border-[#00ff41]/30 hover:bg-[#00ff41]/[0.04] transition-all duration-300"
              style={{ transitionDelay: `${500 + i * 80}ms` }}
            >
              <div className="font-mono text-lg sm:text-xl font-bold text-[#00ff41]">{stat.value}</div>
              <div className="font-mono text-[10px] sm:text-xs text-[#8b949e] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-14 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-mono text-[10px] text-[#8b949e]/60 uppercase tracking-widest">
            {data.scroll}
          </span>
          <ChevronDown className="w-5 h-5 text-[#00ff41]/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
