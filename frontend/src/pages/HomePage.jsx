import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import MatrixRain from '../components/effects/MatrixRain';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import EducationSection from '../components/sections/EducationSection';
import CVUploadSection from '../components/sections/CVUploadSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <MatrixRain />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CVUploadSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
