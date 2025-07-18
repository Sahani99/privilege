import React from 'react';
import styled from 'styled-components';
import AboutSnippet from '../components/home/AboutSnippet';
import StatsSection from '../components/home/StatsSection';

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

const AboutPage = () => {
  return (
    <div>
      <PageHeader>
        <PageTitle>About Our Company</PageTitle>
      </PageHeader>
      {/* Re-using the components we already built */}
      <AboutSnippet />
      <StatsSection />
    </div>
  );
};

export default AboutPage;