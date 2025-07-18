import React from 'react';
import styled from 'styled-components';
import ServicesSection from '../components/home/ServicesSection';

const PageHeader = styled.div`
  padding: 60px 20px;
  background-color: var(--light-color);
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: var(--dark-color);
  margin: 0;
`;

const ServicesPage = () => {
  return (
    <div>
       <PageHeader>
        <PageTitle>Our Services</PageTitle>
      </PageHeader>
      {/* Re-using the component we already built */}
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;