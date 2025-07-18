import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSnippet from '../components/home/AboutSnippet';
import StatsSection from '../components/home/StatsSection';
import ContactSection from '../components/home/ContactSection'; // We will create this

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSnippet />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;