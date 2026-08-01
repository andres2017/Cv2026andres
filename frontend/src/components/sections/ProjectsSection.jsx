import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import portfolioData from '../../data/mock';
import useScrollReveal from '../../hooks/useScrollReveal';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const data = portfolioData[language].projects;
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/30">
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

        <div
          className={`grid sm:grid-cols-2 gap-5 sm:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {data.items.map((project, i) => (
            <Card
              key={i}
              className="bg-[#0d1117]/60 border-[#1e2a3a] p-5 sm:p-6 hover:border-[#00ff41]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.08)] group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-[#00ff41]" />
                  <h3 className="font-mono text-base sm:text-lg font-bold text-[#c9d1d9] group-hover:text-[#00ff41] transition-colors">
                    {project.name}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-[#00ff41] transition-colors p-1"
                  aria-label={`Ver ${project.name} en GitHub`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-[#8b949e] leading-relaxed mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <Badge
                    key={j}
                    variant="outline"
                    className="font-mono text-[10px] border-[#00d4ff]/25 text-[#00d4ff] bg-[#00d4ff]/5"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff41] hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                {project.repo}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
