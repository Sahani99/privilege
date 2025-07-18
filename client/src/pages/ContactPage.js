import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contact/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const PageHeader = styled.div`
  padding: 60px 20px;
  /* Image of Wellington, NZ */
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1595125543586-3b54d3148412?q=80&w=1974&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: var(--heading-color);
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const ContactLayout = styled.div`
  display: flex;
  gap: 50px;
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const FormContainer = styled.div`
  flex: 1.5;
`;

const SectionHeading = styled.h2`
    color: var(--heading-color);
    font-size: 2rem;
    margin-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const ContactPage = () => {
  return (
    <div>
      <PageHeader>
        <PageTitle>Get In Touch</PageTitle>
      </PageHeader>
      <div className="container">
        <ContactLayout>
          <InfoContainer>
            <SectionHeading>Contact Information</SectionHeading>
            <p>Have a question? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
            <InfoItem>
              <FaMapMarkerAlt color="var(--primary-color)" size="1.5em" />
              <span>123 Main Street, Colombo, Sri Lanka</span>
            </InfoItem>
            <InfoItem>
              <FaPhone color="var(--primary-color)" size="1.5em" />
              <span>+94 11 234 5678</span>
            </InfoItem>
            <InfoItem>
              <FaEnvelope color="var(--primary-color)" size="1.5em" />
              <span>info@studentrecruit.lk</span>
            </InfoItem>
          </InfoContainer>
          <FormContainer>
            <SectionHeading>Send us a Message</SectionHeading>
            <ContactForm />
          </FormContainer>
        </ContactLayout>
      </div>
    </div>
  );
};

export default ContactPage;