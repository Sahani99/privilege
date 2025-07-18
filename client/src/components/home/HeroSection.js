import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  color: var(--heading-color);
  padding: 0 20px;
  
  /* The ::before pseudo-element is used for the background image and overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    /* This is the previous image you liked, with a darker overlay for the dark theme */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop');
    
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
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 30px;
  font-weight: 300;
  color: var(--text-color);
`;

const CTAButton = styled(motion.a)`
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-3px);
  }
`;

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <HeroContainer>
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroTitle variants={itemVariants}>
          Your Journey to a New Zealand Education Starts Here
        </HeroTitle>
        <HeroSubtitle variants={itemVariants}>
          We provide expert guidance for Sri Lankan students aiming for a world-class education and a brighter future.
        </HeroSubtitle>
        <CTAButton href="/contact" variants={itemVariants}>
          Get Started
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;