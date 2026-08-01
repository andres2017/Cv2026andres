import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, Shield, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

// CV embebido (base64) — descarga siempre funciona sin depender de public/
const CV_PDF_BASE64 = "JVBERi0xLjQKJZOMi54gUmVwb3J0TGFiIEdlbmVyYXRlZCBQREYgZG9jdW1lbnQgKG9wZW5zb3VyY2UpCjEgMCBvYmoKPDwKL0YxIDIgMCBSIC9GMiAzIDAgUgo+PgplbmRvYmoKMiAwIG9iago8PAovQmFzZUZvbnQgL0hlbHZldGljYSAvRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZyAvTmFtZSAvRjEgL1N1YnR5cGUgL1R5cGUxIC9UeXBlIC9Gb250Cj4+CmVuZG9iagozIDAgb2JqCjw8Ci9CYXNlRm9udCAvSGVsdmV0aWNhLUJvbGQgL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcgL05hbWUgL0YyIC9TdWJ0eXBlIC9UeXBlMSAvVHlwZSAvRm9udAo+PgplbmRvYmoKNCAwIG9iago8PAovQ29udGVudHMgOCAwIFIgL01lZGlhQm94IFsgMCAwIDU5NS4yNzU2IDg0MS44ODk4IF0gL1BhcmVudCA3IDAgUiAvUmVzb3VyY2VzIDw8Ci9Gb250IDEgMCBSIC9Qcm9jU2V0IFsgL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUMgL0ltYWdlSSBdCj4+IC9Sb3RhdGUgMCAvVHJhbnMgPDwKCj4+IAogIC9UeXBlIC9QYWdlCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9QYWdlTW9kZSAvVXNlTm9uZSAvUGFnZXMgNyAwIFIgL1R5cGUgL0NhdGFsb2cKPj4KZW5kb2JqCjYgMCBvYmoKPDwKL0F1dGhvciAoXChhbm9ueW1vdXNcKSkgL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDgwMTA1NTQ1NSswMCcwMCcpIC9DcmVhdG9yIChcKHVuc3BlY2lmaWVkXCkpIC9LZXl3b3JkcyAoKSAvTW9kRGF0ZSAoRDoyMDI2MDgwMTA1NTQ1NSswMCcwMCcpIC9Qcm9kdWNlciAoUmVwb3J0TGFiIFBERiBMaWJyYXJ5IC0gXChvcGVuc291cmNlXCkpIAogIC9TdWJqZWN0IChcKHVuc3BlY2lmaWVkXCkpIC9UaXRsZSAoXChhbm9ueW1vdXNcKSkgL1RyYXBwZWQgL0ZhbHNlCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9Db3VudCAxIC9LaWRzIFsgNCAwIFIgXSAvVHlwZSAvUGFnZXMKPj4KZW5kb2JqCjggMCBvYmoKPDwKL0ZpbHRlciBbIC9BU0NJSTg1RGVjb2RlIC9GbGF0ZURlY29kZSBdIC9MZW5ndGggMjU2Ngo+PgpzdHJlYW0KR2F1MEVnTiZjUyY6TzpTb01gb2M8QThXbVhhTztuOUEkTyQ3OGdlKz5DJTEnODBTN20lJXJqVnAiUkBhUTRoQlxOYWU+LDVRZkpgcVhiTDM8O2I6aHMqYkMnP2MoPnEiJjRSNCJ1Szc1QDxpPFdqaSpQb1hdZkZRTUlEcC0hS05wKlxuWDlOKytDPmpRSjFZVlU+I0QmaStHajlIOGI5WyJbNWgiRy88QFxcOlk6Ji5YJzFeaz9rZVpfdGhJJVpqIzZyb0NxWVNrMHM+JkJebGsoVDQuUGJmYCoycTRza3BEKjY8KitQOUcrdCUuWDZuVU4vUjYnXGhuckVFYmxgKlJpRzU1aHU/XiVQJlFyRy4wPHU2TlI4bGNdc2gkJkxtNFY0QzZmczszWDNwYyJWPGBGOyZwUk1HbTk2Si1MdE0pc0EpSCdOIVhRJTkjRUM7Tz8jYjdlbS5EV0IrPjZwXTQjVEBdO1omMW1WMC9cTGBvaVVdWiRnOl0tSmRDKW4ucUxyRi9aV2clSHRBIVNvcjlUanFUQ2VzaGxBPVRiSFJmMFhSOEppbT9NcmZoNVIuI3A/MzU6VzdGXUVNRD00XmwkN2Z0RFlUcSxVQTo4PUFXPVJbJUFySSs0MjEkN3BYUDRKI1hiYXR0PltiXGliI1NuZDBYVzlWJTEkXWxKVlV0SShGOl45IWJcIVhHZlhsVD0mX2g7M2M/Uy9fYl8yRk9MKF4sZ1hkOi9jNkhZX1NnRU9qXilPJTYpb1JLPSdpM09dUEgvW3EyTDxFSz8hY2FBaCY+Ri5NZy5bKF5MPTonKSIudUMtYSw+RFYxMkowOVJUL3FISkJxcU49bVJLJzlQVStPQGlDIiRucUwsTlE2KSwjOjhCdWlhXFdnUGo9RFgncF5OazcmbVUxPiQxXVQjL3M6X2Zob2dmV20pKHVsbTthMnAvNFwpS1lfXi5VP3NmLE5FNGdLKXBQZjwjZjAoX1NxTTIzX1wzXl9kaUtGJSEiXC1VZ0k0PUElcHEzLUcvYEVvXSZhaz82NzZodWg+RERca0Y6IVJWLCJbZzt";
const CV_FILENAME = 'CV-Andres-Vargas-Robles.pdf';

function blobFromBase64() {
  const binary = atob(CV_PDF_BASE64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: 'application/pdf' });
}

const CVUploadSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].cvDownload;
  const [ref, isVisible] = useScrollReveal();
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    try {
      const blob = blobFromBase64();
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
      toast.error(language === 'es' ? 'Error al descargar' : 'Download error');
    } finally {
      setLoading(false);
    }
  };

  const handleView = () => {
    try {
      const blob = blobFromBase64();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank', 'noopener');
    } catch {
      toast.error(language === 'es' ? 'Error al abrir' : 'Open error');
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
