import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 80px 20px;
  background-color: var(--background-color);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: var(--heading-color);
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: var(--background-color);
  border-left: 5px solid var(--primary-color);
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  p {
    font-style: italic;
    margin: 0;
  }
  cite {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: var(--secondary-color);
  }
`;

const Testimonials = () => {
  return (
    <section id="testimonials">
    <TestimonialsContainer>
      <Title>Testimonials From Lawyers</Title>
      <TestimonialGrid>
        <TestimonialCard>
          <p>"The team at Privilege Education is exceptionally professional. They provided my clients with clear, accurate guidance, making the student visa process seamless."</p>
          <cite>- John Doe, Immigration Lawyer</cite>
        </TestimonialCard>
        <TestimonialCard>
          <p>"I confidently refer my clients to Privilege Education. Their expertise and dedication are evident in their successful outcomes. A truly reliable partner."</p>
          <cite>- Jane Smith, Legal Consultant</cite>
        </TestimonialCard>
      </TestimonialGrid>
    </TestimonialsContainer>
    </section>
  );
};

export default Testimonials;