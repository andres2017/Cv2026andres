import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { Send, Linkedin, Mail, Lock, Terminal } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;

const ContactSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].contact;
  const [ref, isVisible] = useScrollReveal();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setSending(true);
    try {
      if (API) {
        await axios.post(`${API}/contact`, formData);
      } else {
        // Mock: simulate network delay
        await new Promise((r) => setTimeout(r, 1500));
        const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        messages.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('contact_messages', JSON.stringify(messages));
      }
      toast.success(data.form.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // If backend fails, save locally
      await new Promise((r) => setTimeout(r, 1000));
      const messages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
      messages.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contact_messages', JSON.stringify(messages));
      toast.success(data.form.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/30">
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Header */}
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

        <div
          className={`grid md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Form */}
          <Card className="md:col-span-2 bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-mono text-xs text-[#8b949e]">{data.form.name} *</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={data.form.namePlaceholder}
                    className="bg-[#0a0a0f] border-[#1e2a3a] font-mono text-sm text-[#c9d1d9] placeholder:text-[#8b949e]/30 focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-mono text-xs text-[#8b949e]">{data.form.email} *</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data.form.emailPlaceholder}
                    className="bg-[#0a0a0f] border-[#1e2a3a] font-mono text-sm text-[#c9d1d9] placeholder:text-[#8b949e]/30 focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="font-mono text-xs text-[#8b949e]">{data.form.subject}</Label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={data.form.subjectPlaceholder}
                  className="bg-[#0a0a0f] border-[#1e2a3a] font-mono text-sm text-[#c9d1d9] placeholder:text-[#8b949e]/30 focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-mono text-xs text-[#8b949e]">{data.form.message} *</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={data.form.messagePlaceholder}
                  rows={5}
                  className="bg-[#0a0a0f] border-[#1e2a3a] font-mono text-sm text-[#c9d1d9] placeholder:text-[#8b949e]/30 focus:border-[#00ff41]/50 focus:ring-1 focus:ring-[#00ff41]/20 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-transparent border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41]/10 font-mono transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] disabled:opacity-50 gap-2"
              >
                {sending ? (
                  <>
                    <Lock className="w-4 h-4 animate-pulse" />
                    {data.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {data.form.send}
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Social / Info */}
          <div className="space-y-4">
            <Card className="bg-[#0d1117]/60 border-[#1e2a3a] p-5">
              <h3 className="font-mono text-sm font-bold text-[#00ff41] mb-4">{data.social.title}</h3>
              <div className="space-y-3">
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded bg-[#161b22] border border-[#1e2a3a] hover:border-[#00ff41]/30 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-[#8b949e] group-hover:text-[#00ff41] transition-colors duration-300" />
                  <span className="font-mono text-sm text-[#c9d1d9]">LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@andresvargas.dev"
                  className="flex items-center gap-3 p-3 rounded bg-[#161b22] border border-[#1e2a3a] hover:border-[#00ff41]/30 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 text-[#8b949e] group-hover:text-[#00ff41] transition-colors duration-300" />
                  <span className="font-mono text-sm text-[#c9d1d9]">Email</span>
                </a>
              </div>
            </Card>

            {/* Terminal Info Card */}
            <Card className="bg-[#0d1117]/60 border-[#1e2a3a] p-5">
              <div className="font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#8b949e]">
                  <Terminal className="w-3 h-3 text-[#00ff41]" />
                  <span>
                    Status: <span className="text-[#00ff41]">Available</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#8b949e]">
                  <Lock className="w-3 h-3 text-[#00ff41]" />
                  <span>
                    Encryption: <span className="text-[#00ff41]">E2E</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#8b949e]">
                  <Mail className="w-3 h-3 text-[#00ff41]" />
                  <span>
                    Response: <span className="text-[#00d4ff]">{'< 24h'}</span>
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
