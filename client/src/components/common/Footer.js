import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

// --- Styled Components for the New Design ---

// NEW: A separator line component for a clean visual break.
const Separator = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);

  /* Responsive margin for mobile to prevent touching screen edges */
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #a9a9a9;
  padding: 60px 20px;
  text-align: center;
`;

// const Logo = styled(RouterLink)`
//   color: #ffffff;
//   font-size: 2rem;
//   font-weight: 700;
//   text-decoration: none;
//   display: inline-block;
//   margin-bottom: 30px;
// `;

const LogoLink = styled(RouterLink)`
  display: inline-flex;      /* Use inline-flex to keep it centered */
  flex-direction: column;   /* Stacks children vertically */
  align-items: center;      /* Centers the children */
  text-decoration: none;
  margin-bottom: 30px;
`;

const LogoImage = styled.img`
  height: 50px;           /* Adjust the size as needed */
  margin-bottom: 15px;      /* Space between the logo and the text */
`;

const LogoText = styled.span`
  color: #ffffff;
  font-size: 1.5rem; /* Slightly adjusted for balance with the logo */
  font-weight: 700;
`;
const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center; /* Ensures items are centered in column layout */
  margin-bottom: 30px;
  
  /* MOBILE-FIRST STYLES: Default is a vertical column */
  flex-direction: column;
  gap: 20px; /* A nice vertical gap for mobile */
  
  /* DESKTOP STYLES: Switch to a horizontal row for screens wider than 768px */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 150px; /* Your desired large gap for desktop */
  }
`;

const StyledLink = styled(ScrollLink)`
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #FFD700;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFD700;
    color: #121212;
    transform: translateY(-3px);
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
`;

// --- The Main Footer Component ---

const Footer = () => {
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
  };

  return (
    // Use a React Fragment to group the Separator and Footer
    <>
      <Separator />
      <FooterContainer>
        <LogoLink to="/">
          <LogoImage src={logo} alt="Privilege Education Logo" />
          <LogoText>Privilege Education</LogoText>
        </LogoLink>

        <NavLinks>
          <StyledLink to="about" {...scrollProps}>About</StyledLink>
          <StyledLink to="testimonials" {...scrollProps}>Testimonials</StyledLink>
          <StyledLink to="contact" {...scrollProps}>Contact</StyledLink>
        </NavLinks>

        <SocialLinks>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialLinks>

        <CopyrightText>
          © {new Date().getFullYear()} Privilege Education. All rights reserved.
        </CopyrightText>
      </FooterContainer>
    </>
  );
};

export default Footer;