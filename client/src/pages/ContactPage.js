import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/contact/ContactForm';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.8em;
  color: var(--secondary-color);
  span {
    color: var(--primary-color);
  }
`;

const ContactPage = () => {
  return (
    <div className="container">
      <Title>Contact <span>Us</span></Title>
      <ContactForm />
    </div>
  );
};

export default ContactPage;