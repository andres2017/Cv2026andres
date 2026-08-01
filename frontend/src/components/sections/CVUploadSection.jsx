import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, Shield } from 'lucide-react';

const CVUploadSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].cvDownload;
  const [ref, isVisible] = useScrollReveal();

  const handleDownload = () => {
    // Place your real CV PDF in frontend/public/cv-andres-vargas.pdf
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL || ''}/cv-andres-vargas.pdf`;
    link.download = 'CV-Andres-Vargas-Robles.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv-download" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-[#00ff41] mb-2">{data.title}</h2>
          <p className="font-mono text-sm text-[#8b949e]">{data.subtitle}</p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#00ff41] to-transparent mt-4" />
          <p className="font-mono text-sm text-[#8b949e] mt-4">{data.description}</p>
        </div>

        <Card
          className={`bg-[#0d1117]/60 border-[#1e2a3a] p-6 sm:p-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/30 flex items-center justify-center shrink-0">
              <FileText className="w-8 h-8 text-[#00ff41]" />
            </div>
            <div className="flex-1">
              <h3 className="font-mono text-lg font-bold text-[#c9d1d9] mb-1">Andrés Vargas Robles</h3>
              <p className="font-mono text-sm text-[#8b949e] mb-1">
                {language === 'es'
                  ? 'Ingeniero de Sistemas · Ciberseguridad · Blockchain'
                  : 'Systems Engineer · Cybersecurity · Blockchain'}
              </p>
              <p className="font-mono text-xs text-[#8b949e]/60">{data.note}</p>
            </div>
            <Button
              onClick={handleDownload}
              className="bg-transparent border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 font-mono px-6 py-3 gap-2 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              {data.button}
            </Button>
          </div>

          <div className="mt-6 pt-5 border-t border-[#1e2a3a] flex items-center gap-2 font-mono text-xs text-[#8b949e]">
            <Shield className="w-3.5 h-3.5 text-[#00ff41]" />
            {language === 'es'
              ? 'Archivo PDF · Sin tracking · Listo para enviar a reclutadores'
              : 'PDF file · No tracking · Ready to send to recruiters'}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CVUploadSection;
