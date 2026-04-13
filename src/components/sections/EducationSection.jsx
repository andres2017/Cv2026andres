import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].education;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="education" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/30">
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

        <Tabs
          defaultValue="education"
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <TabsList className="bg-[#0d1117] border border-[#1e2a3a] mb-8 p-1">
            <TabsTrigger
              value="education"
              className="font-mono text-xs sm:text-sm data-[state=active]:bg-[#00ff41]/10 data-[state=active]:text-[#00ff41] data-[state=active]:shadow-none text-[#8b949e] gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              {data.tabs.education}
            </TabsTrigger>
            <TabsTrigger
              value="certifications"
              className="font-mono text-xs sm:text-sm data-[state=active]:bg-[#00ff41]/10 data-[state=active]:text-[#00ff41] data-[state=active]:shadow-none text-[#8b949e] gap-2"
            >
              <Award className="w-4 h-4" />
              {data.tabs.certifications}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="space-y-4">
              {data.items.map((item, i) => (
                <Card
                  key={i}
                  className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 hover:border-[#00ff41]/30 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center bg-[#00ff41]/5 border border-[#00ff41]/20 mt-0.5 shrink-0">
                      <BookOpen className="w-4 h-4 text-[#00ff41]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="font-mono text-sm sm:text-base font-bold text-[#c9d1d9] group-hover:text-[#00ff41] transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs sm:text-sm text-[#00d4ff] mt-0.5 truncate">{item.institution}</p>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-xs text-[#8b949e] shrink-0">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.skills.map((skill, j) => (
                          <Badge
                            key={j}
                            variant="outline"
                            className="font-mono text-[10px] border-[#1e2a3a] text-[#8b949e] bg-[#1e2a3a]/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.certifications.map((cert, i) => (
                <Card
                  key={i}
                  className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 hover:border-[#00ff41]/30 transition-colors duration-300 group hover:shadow-[0_0_15px_rgba(0,255,65,0.08)]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-[#00ff41] mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-mono text-sm font-bold text-[#c9d1d9] group-hover:text-[#00ff41] transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-xs text-[#8b949e]">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <Badge variant="outline" className="font-mono text-[10px] border-[#00d4ff]/30 text-[#00d4ff] bg-transparent">
                      {cert.category}
                    </Badge>
                    <span className="font-mono text-xs text-[#8b949e]">{cert.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EducationSection;
