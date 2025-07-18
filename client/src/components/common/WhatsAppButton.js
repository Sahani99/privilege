// src/components/common/WhatsAppButton.js
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const Button = styled.a`
  position: fixed; /* Stays in the same place on the screen */
  bottom: 30px;
  right: 30px;
  background-color: #25D366; /* Official WhatsApp Green */
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  z-index: 1000; /* Ensures it's on top of other content */
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const WhatsAppButton = () => {
  // Replace with your full phone number in international format
  // Do NOT include '+', '-', or spaces. E.g., for +94 123 456 789, use 94123456789
  const phoneNumber = '94123456789'; 

  return (
    <Button
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </Button>
  );
};

export default WhatsAppButton;