import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const FloatingButton = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 1001; /* Button is on top of window */
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 100px; /* Position above the button */
  right: 30px;
  width: 350px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  display: ${props => props.isOpen ? 'block' : 'none'}; /* Control visibility */
`;

const ChatHeader = styled.div`
  background-color: #075E54; /* WhatsApp Dark Green */
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc; /* Placeholder for a logo */
  margin-right: 15px;
  /* You can use a background-image for your logo */
  /* background-image: url('/path/to/your/logo.png'); */
  /* background-size: cover; */
`;

const HeaderInfo = styled.div`
  h3 { margin: 0; font-size: 18px; }
  p { margin: 0; font-size: 14px; opacity: 0.9; }
`;

const ChatBody = styled.div`
  padding: 20px;
  background-color: #E5DDD5; /* WhatsApp background pattern color */
  min-height: 100px;
`;

const MessageBox = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  max-width: 85%;
  p { margin: 0; line-height: 1.5; }
`;

const ChatFooter = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #f0f0f0;
  text-decoration: none;
  color: #1FAF38;
  font-weight: bold;
  font-size: 16px;
  gap: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;


// --- The Main Component ---

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '701512427'; // <-- IMPORTANT
  const defaultMessage = "Hello! I saw your website and I have a question.";
  const encodedMessage = encodeURIComponent(defaultMessage);

  const toggleChatWindow = () => setIsOpen(!isOpen);

  return (
    <>
      <ChatWindow isOpen={isOpen}>
        <ChatHeader>
          <Avatar />
          <HeaderInfo>
            <h3>Privilege Education</h3>
            <p>Typically replies within an hour</p>
          </HeaderInfo>
        </ChatHeader>
        <ChatBody>
          <MessageBox>
            <p>Hi there! 👋<br /><br />How can we help you today?</p>
          </MessageBox>
        </ChatBody>
        <ChatFooter
          href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          Start Chat
        </ChatFooter>
      </ChatWindow>
      
      <FloatingButton onClick={toggleChatWindow}>
        {isOpen ? <IoClose size={30} /> : <FaWhatsapp />}
      </FloatingButton>
    </>
  );
};

export default WhatsAppWidget;