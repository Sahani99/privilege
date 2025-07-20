import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const aboutImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop';

const AboutContainer = styled.section`
  padding: 80px 20px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;
  overflow: hidden;

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    gap: 30px;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const ContentWrapper = styled(motion.div)`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--heading-color);

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-color-muted);
`;

const AboutSnippet = () => {
  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about">
      <AboutContainer>
        <ImageWrapper variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <img src={aboutImage} alt="Happy students collaborating" />
        </ImageWrapper>
        <ContentWrapper variants={contentVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <Title>Your Trusted Partner in International Education</Title>
          <Description>We are a team of dedicated professionals committed to making your dream of studying in New Zealand a reality. With years of experience and a deep understanding of the educational landscape, we provide personalized support every step of the way.</Description>
          <Description>Our mission is to empower Sri Lankan students with access to top-tier global education, fostering personal growth and future success.</Description>
        </ContentWrapper>
      </AboutContainer>
    </section>
  );
};

export default AboutSnippet;