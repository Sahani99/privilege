import React from 'react';
import styled from 'styled-components';
import ContactForm from '../contact/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 80px 20px;
  background-color: var(--background-color); /* Matches the dark theme */
`;

const ContactLayout = styled.div`
  display: flex;
  gap: 50px;
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
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const ContactSection = () => {
  return (
    <section id="contact">
      <ContactContainer>
        <ContactLayout>
          <InfoContainer>
            <SectionHeading>Contact Us</SectionHeading>
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
      </ContactContainer>
    </section>
  );
};

export default ContactSection;