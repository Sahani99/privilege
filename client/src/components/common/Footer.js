import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'; 

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #a9a9a9;
  padding: 40px 0 0;
  position: relative;
  overflow: hidden;
  font-size: 16px;

  &::before, &::after {
    content: '';
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.06;
  }

  &::before {
    width: 500px;
    height: 500px;
    background-color: #FFD700;
    top: -200px;
    right: -200px;
  }

  &::after {
    width: 400px;
    height: 400px;
    background-color: #FFD700;
    bottom: -150px;
    left: -150px;
  }
`;

const FooterContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 60px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: #ffffff;
    font-size: 32px;
    margin: 0 0 15px;
  }

  p {
    max-width: 500px;
    margin: 0 auto 30px;
    line-height: 1.7;
  }

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    padding: 40px 0;
    h2 { font-size: 24px; }
    p { font-size: 14px; }
  }
`;

const CTAButton = styled(ScrollLink)`
  display: inline-block;
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #FFD700;
    color: #121212;
    border-color: #FFD700;
  }
`;

const MainFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 0;
  gap: 40px;

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    padding: 40px 0;
    text-align: center; /* Center align columns on mobile */
  }
`;

const BrandColumn = styled.div`
  flex: 1 1 300px; /* Allow growing and shrinking with a base of 300px */
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center brand content */
  }
`;

const LinksGrid = styled.div`
  flex: 2 1 600px; /* Allow growing and shrinking */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Fully responsive grid */
  gap: 30px;
`;

const LinkColumn = styled.div`
  h4 {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 20px;
  }
  a, p {
    color: #a9a9a9;
    text-decoration: none;
    display: block;
    margin-bottom: 12px;
  }
  a:hover {
    color: #FFD700;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  
  @media (max-width: 768px) {
    justify-content: center; /* Center icons on mobile */
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  gap: 15px; /* Add gap for wrapping */

  /* --- RESPONSIVE FIX --- */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  margin-bottom: 20px;
`;

const StyledScrollLink = styled(ScrollLink)`
  color: #a9a9a9;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    color: #FFD700;
  }
`;

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <CTASection>
          <h2>Want to study in New Zealand?</h2>
          <p>If you're interested in starting your journey and would like to find out more information, one of our advisors is excited to help.</p>
          <CTAButton to="contact" {...scrollProps}>Get Started</CTAButton>
        </CTASection>

        <MainFooter>
          <BrandColumn>
            <LogoImage src={logo} alt="Privilege Education Logo" />
            <h3 style={{ color: 'white', fontSize: '24px', margin: 0 }}>Privilege Education</h3>
          </BrandColumn>

          <LinksGrid>
            <LinkColumn>
              <h4>About</h4>
              <StyledScrollLink to="about" {...scrollProps}>Our Why</StyledScrollLink>
              <StyledScrollLink to="testimonials" {...scrollProps}>Testimonials</StyledScrollLink>
            </LinkColumn>
            <LinkColumn>
              <h4>Support</h4>
              <StyledScrollLink to="contact" {...scrollProps}>Contact</StyledScrollLink>
            </LinkColumn>
            <LinkColumn>
              <h4>Follow Us</h4>
              <SocialIcons>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </SocialIcons>
            </LinkColumn>
          </LinksGrid>
        </MainFooter>

        <BottomBar>
          <p>© {new Date().getFullYear()} Privilege Education. All rights reserved.</p>
          <Link to="/privacy-policy" style={{color: '#a9a9a9', textDecoration: 'none'}}>Privacy Policy</Link>
        </BottomBar>
      </FooterContentWrapper>
    </FooterContainer>
  );
};

export default Footer;