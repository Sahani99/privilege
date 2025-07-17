import React from 'react';
import styled from 'styled-components';

// Corrected: Added backticks ` ` to wrap the CSS styles
const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1542157585-2633EA8c2323?q=80&w=2070');
  background-size: cover;
  background-position: center;
  color: var(--background-color);
  text-align: center;
  padding: 150px 20px;
`;

// Corrected: Added backticks ` `
const HeroTitle = styled.h1`
  font-size: 3.5em;
  margin-bottom: 20px;
  font-weight: bold;
`;

// Corrected: Added backticks ` `
const HeroSubtitle = styled.p`
  font-size: 1.5em;
  color: var(--primary-color);
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Your Bridge to a New Zealand Education</HeroTitle>
      <HeroSubtitle>From Sri Lanka to World-Class Universities</HeroSubtitle>
    </HeroContainer>
  );
};

export default HeroSection;