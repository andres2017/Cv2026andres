import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import Scene3D from '../components/effects/Scene3D';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import VenturesSection from '../components/sections/VenturesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import CVUploadSection from '../components/sections/CVUploadSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Three.js global background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D intensity="full" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <VenturesSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
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
