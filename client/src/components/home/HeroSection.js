import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const heroImageUrl = '/images/hero-background.avif';

const HeroContainer = styled.div`
  height: 90vh;
  min-height: 600px; /* Ensures a minimum height on very tall/narrow screens */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  color: var(--heading-color); /* This should be white or a light color for dark themes */
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
  color: #ffffff; /* Explicitly set white for readability on image */
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 30px;
  font-weight: 300;
  color: #f0f0f0; /* Slightly off-white for subtitle */
`;

const CTAButton = styled(ScrollLink)`
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #FFD700;
    color: #121212;
    border-color: #FFD700;
  }
`;

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <HeroContainer bgImage={heroImageUrl}>
      <HeroContent variants={containerVariants} initial="hidden" animate="visible">
        <HeroTitle variants={itemVariants}>
          Your Journey to a New Zealand Education Starts Here
        </HeroTitle>
        <HeroSubtitle variants={itemVariants}>
          We provide expert guidance for Sri Lankan students aiming for a world-class education and a brighter future.
        </HeroSubtitle>
        <CTAButton to="contact" {...scrollProps}>Get Started</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;