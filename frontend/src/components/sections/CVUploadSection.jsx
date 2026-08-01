import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, Shield, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const CV_FILENAME = 'CV-Andres-Vargas-Robles.pdf';

async function getCvBlob() {
  const base = process.env.PUBLIC_URL || '';
  const res = await fetch(`${base}/cv.b64.txt`);
  if (!res.ok) throw new Error('missing');
  const b64 = (await res.text()).trim();
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: 'application/pdf' });
}

const CVUploadSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].cvDownload;
  const [ref, isVisible] = useScrollReveal();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await getCvBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = CV_FILENAME;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(language === 'es' ? 'CV descargado' : 'CV downloaded');
    } catch (e) {
      toast.error(language === 'es' ? 'Error al descargar el CV' : 'Error downloading CV');
    } finally {
      setLoading(false);
    }
  };

  const handleView = async () => {
    try {
      const blob = await getCvBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank', 'noopener');
    } catch {
      toast.error(language === 'es' ? 'Error al abrir el CV' : 'Error opening CV');
    }
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
          className={`card-lift bg-[#0d1117]/60 border-[#1e2a3a] p-6 sm:p-8 transition-all duration-700 ${
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
                  ? 'Agencia de IA · Claude · Skills · Agentes · n8n'
                  : 'AI Agency · Claude · Skills · Agents · n8n'}
              </p>
              <p className="font-mono text-xs text-[#8b949e]/60">{data.note}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <Button
                onClick={handleDownload}
                disabled={loading}
                className="bg-[#00ff41] text-[#0a0a0f] hover:bg-[#00ff41]/90 font-mono font-semibold px-6 py-3 gap-2 shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
              >
                <Download className="w-4 h-4" />
                {loading
                  ? language === 'es'
                    ? 'Cargando...'
                    : 'Loading...'
                  : data.button}
              </Button>
              <Button
                onClick={handleView}
                variant="outline"
                className="bg-transparent border border-[#1e2a3a] text-[#c9d1d9] hover:border-[#00ff41]/40 hover:text-[#00ff41] font-mono px-4 py-3 gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                {language === 'es' ? 'Ver' : 'View'}
              </Button>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#1e2a3a] flex items-center gap-2 font-mono text-xs text-[#8b949e]">
            <Shield className="w-3.5 h-3.5 text-[#00ff41]" />
            {language === 'es'
              ? 'Archivo PDF · Sin tracking · Listo para enviar a empresas'
              : 'PDF file · No tracking · Ready to send to companies'}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CVUploadSection;
