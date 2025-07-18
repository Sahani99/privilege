import React, { useState } from 'react'; // useEffect is no longer needed
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  /* --- FIX: Set a permanent dark background --- */
  background-color: var(--surface-color);
  
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.a`
  cursor: pointer;
  img {
    height: 50px;
    z-index: 101;
    /* --- FIX: Removed the filter property to show the original logo --- */
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  @media (max-width: 900px) { display: none; }
`;

const LinkStyles = `
  /* --- FIX: Text is now permanently white --- */
  color: var(--heading-color);
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  padding-bottom: 5px;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
  
  /* Hover and active states still use the gold color */
  &.active, &:hover {
    color: var(--primary-color);
  }
  
  &.active::after, &:hover::after {
    width: 100%;
  }
`;

const StyledScrollLink = styled(ScrollLink)`${LinkStyles}`;

const CTAButton = styled(ScrollLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: var(--background-color) !important;
  padding: 10px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 193, 7, 0.2);
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 101;
  /* --- FIX: Icon is now permanently white --- */
  color: var(--heading-color);
  
  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  /* --- FIX: Mobile menu background is now also dark --- */
  background-color: var(--surface-color);
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  transition: left 0.3s ease-in-out;

  .mobile-link {
    ${LinkStyles} /* It now inherits the white text color */
    font-size: 1.5rem;
  }
`;


const Header = () => {
  // --- FIX: All scroll-related state and effects are removed for simplicity ---
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMenu();
  };
  
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
    onClick: closeMenu,
  };

  return (
    // The 'scrolled' prop is no longer needed
    <HeaderContainer>
      <Nav>
        <Logo onClick={scrollToTop}>
          <img src={logo} alt="Site Logo" />
        </Logo>

        <DesktopNavLinks>
          <StyledScrollLink to="services" {...scrollProps}>Our Services</StyledScrollLink>
          <StyledScrollLink to="about" {...scrollProps}>About</StyledScrollLink>
          <StyledScrollLink to="contact" {...scrollProps}>Contact</StyledScrollLink>
          <CTAButton to="contact" {...scrollProps}>Apply Now</CTAButton>
        </DesktopNavLinks>

        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileNavLinks isOpen={isOpen}>
          <StyledScrollLink className="mobile-link" to="about" {...scrollProps}>About</StyledScrollLink>
          <StyledScrollLink className="mobile-link" to="services" {...scrollProps}>Our Services</StyledScrollLink>
          <StyledScrollLink className="mobile-link" to="contact" {...scrollProps}>Contact</StyledScrollLink>
          <CTAButton to="contact" {...scrollProps}>Apply Now</CTAButton>
        </MobileNavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;