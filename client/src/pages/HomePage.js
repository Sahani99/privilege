import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSnippet from '../components/home/AboutSnippet';
import StatsSection from '../components/home/StatsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSnippet />
      <StatsSection />
      {/* You can add more sections like Testimonials here later */ }
    </div>
  );
};

export default HomePage;