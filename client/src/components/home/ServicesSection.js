import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUniversity, FaFileSignature, FaPlaneDeparture } from 'react-icons/fa';

const services = [
  {
    icon: <FaUniversity />,
    title: 'University Placement',
    description: 'We help you find the right university and course that match your academic goals and career aspirations.'
  },
  {
    icon: <FaFileSignature />,
    title: 'Visa Assistance',
    description: 'Our experts guide you through the entire student visa application process, ensuring a high success rate.'
  },
  {
    icon: <FaPlaneDeparture />,
    title: 'Pre-Departure Support',
    description: 'We provide essential information and support to prepare you for your new life as a student in New Zealand.'
  }
];

const ServicesContainer = styled.section`
  padding: 80px 20px;
  background-color: var(--background-color);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: var(--heading-color);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled(motion.div)`
  background: var(--surface-color);
  padding: 40px 30px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 25px rgba(255, 193, 7, 0.15);
    border-color: var(--primary-color);
  }
`;

const IconWrapper = styled.div`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--heading-color);
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color-muted);
`;

const ServicesSection = () => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <ServicesContainer>
      <SectionTitle>Our Core Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesSection;