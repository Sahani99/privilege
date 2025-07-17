import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 40px 0;
  line-height: 1.8;
  font-size: 1.1em;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.8em;
  color: var(--secondary-color);
  span {
    color: var(--primary-color);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
`;

const AboutPage = () => {
  return (
    <AboutContainer className="container">
      <Title>About <span>Us</span></Title>
      <Content>
        <p>
          We are a premier student recruitment agency dedicated to connecting ambitious Sri Lankan students with world-class educational opportunities in New Zealand. Our mission is to simplify the complex process of international university applications and visa procedures.
        </p>
        <p>
          Our team is composed of experienced education consultants and legal experts who provide personalized, end-to-end support. From selecting the right university and course to preparing a strong visa application, we are with you at every step, ensuring a smooth and successful journey to achieving your academic aspirations.
        </p>
      </Content>
    </AboutContainer>
  );
};

export default AboutPage;