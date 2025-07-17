import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* You can add more sections here like 'Services' later */}
      <Testimonials />
    </div>
  );
};

export default HomePage;