import React, { useState } from 'react'; // <-- Import useState
import styled from 'styled-components';
import ContactForm from '../contact/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClipboard } from 'react-icons/fa'; // <-- Import FaClipboard

const ContactContainer = styled.div`
  padding: 80px 20px;
  background-color: var(--background-color);
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

const MailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: var(--primary-color);
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  color: inherit; /* Inherit color from InfoItem */
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const CopyFeedback = styled.span`
  font-size: 0.9em;
  color: green;
`;

const ContactSection = () => {
  // --- Logic from EmailContact is now here, at the top level ---
  const email = 'npk.aus@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    });
  };
  // -----------------------------------------------------------

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
              <span>+94 11 475 2702</span>
            </InfoItem>
            <InfoItem>
              {/* Mailto link and Copy button are now siblings, handled by InfoItem's flexbox */}
              <MailLink href={`mailto:${email}`}>
                <FaEnvelope color="var(--primary-color)" size="1.5em" />
                <span>{email}</span>
              </MailLink>
              
              <CopyButton onClick={handleCopy} title="Copy email to clipboard">
                <FaClipboard size="1.3em" />
              </CopyButton>
              
              {copied && <CopyFeedback>Copied!</CopyFeedback>}
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