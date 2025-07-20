import React, { useState } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Visa Success Rate' },
  { value: 2000, suffix: '+', label: 'Students Guided' },
  { value: 50, suffix: '+', label: 'Partner Institutions' }
];

const StatsContainer = styled.section`
  padding: 80px 20px;
  background-color: var(--primary-color);
  color: #121212; /* Dark text on gold background for contrast */
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const StatItem = styled(motion.div)``;

const StatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 700;

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 400;

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsSection = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div onViewportEnter={() => setHasScrolled(true)} viewport={{ once: true, amount: 0.5 }}>
      <StatsContainer>
        <StatsGrid as={motion.div} variants={containerVariants} initial="hidden" animate={hasScrolled ? "visible" : "hidden"}>
          {stats.map((stat, index) => (
            <StatItem key={index} variants={itemVariants}>
              <StatValue>
                {hasScrolled && <CountUp end={stat.value} duration={3} />}
                {stat.suffix}
              </StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsContainer>
    </motion.div>
  );
};

export default StatsSection;