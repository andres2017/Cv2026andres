import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import MatrixRain from '../components/effects/MatrixRain';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
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
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CVUploadSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
