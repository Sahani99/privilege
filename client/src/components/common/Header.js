import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg'; // Make sure you have a logo suitable for a dark background (e.g., white or gold version)

const HeaderContainer = styled.header`
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

const Logo = styled(NavLink)`
  img {
    height: 50px;
    z-index: 101;
  }
`;

const DesktopNavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1em;
    font-weight: 500;
    padding-bottom: 5px;
    position: relative;
    transition: color 0.3s ease;

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
    
    &.active, &:hover {
      color: var(--primary-color);
    }
    
    &.active::after, &:hover::after {
      width: 100%;
    }
  }
`;

const CTAButton = styled(NavLink)`
  background-color: var(--primary-color);
  color: var(--background-color) !important;
  padding: 10px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(255, 193, 7, 0.2);
  }
  &::after {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 101;
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
  background-color: var(--surface-color);
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  transition: left 0.3s ease-in-out;

  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;

    &.active, &:hover {
      color: var(--primary-color);
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={closeMenu}>
          <img src={logo} alt="Site Logo" />
        </Logo>

        <DesktopNavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <CTAButton to="/contact">Apply Now</CTAButton>
        </DesktopNavLinks>

        <MobileIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileNavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Our Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <CTAButton to="/contact" onClick={closeMenu}>Apply Now</CTAButton>
        </MobileNavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../../assets/images/logo.jpg';

// /* Important Note: You may need a version of your logo that is visible on a light background (e.g., black or color text). */
// /* If you only have a white logo, you can add `filter: brightness(0);` to the Logo styled-component to turn it black. */

// const HeaderContainer = styled.header`
//   /* Overriding to be light */
//   background-color: var(--light-background-color);
//   padding: 15px 0;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   width: 100%;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// `;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const Logo = styled(NavLink)`
//   img {
//     height: 50px;
//     z-index: 101;
//   }
// `;

// const DesktopNavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 35px;

//   @media (max-width: 900px) {
//     display: none;
//   }

//   a {
//     /* Overriding text to be dark */
//     color: var(--light-text-color);
//     text-decoration: none;
//     font-size: 1em;
//     font-weight: 500;
//     padding-bottom: 5px;
//     position: relative;
//     transition: color 0.3s ease;

//     &::after {
//       content: '';
//       position: absolute;
//       width: 0;
//       height: 2px;
//       bottom: 0;
//       left: 0;
//       background-color: var(--primary-color);
//       transition: width 0.3s ease;
//     }
    
//     &.active, &:hover {
//       color: var(--primary-color);
//     }
    
//     &.active::after, &:hover::after {
//       width: 100%;
//     }
//   }
// `;

// const CTAButton = styled(NavLink)`
//   background-color: var(--primary-color);
//   color: var(--background-color) !important; /* Dark text on gold button */
//   padding: 10px 25px;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: 600;
//   transition: all 0.3s ease;

//   &:hover {
//     filter: brightness(1.1);
//     transform: translateY(-2px);
//     box-shadow: 0 4px 20px rgba(255, 193, 7, 0.2);
//   }
//   &::after {
//     display: none;
//   }
// `;

// const MobileIcon = styled.div`
//   display: none;
//   font-size: 1.8rem;
//   cursor: pointer;
//   z-index: 101;
//   /* Icon color is dark for the light header */
//   color: var(--light-text-color);

//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

// const MobileNavLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 40px;
//   /* Mobile menu is light */
//   background-color: rgba(255, 255, 255, 0.98);
//   backdrop-filter: blur(5px);
//   position: fixed;
//   top: 0;
//   left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
//   width: 100%;
//   height: 100vh;
//   transition: left 0.3s ease-in-out;

//   a {
//     /* Mobile links text is dark */
//     color: var(--light-text-color);
//     text-decoration: none;
//     font-size: 1.5rem;
//     font-weight: 500;

//     &.active, &:hover {
//       color: var(--primary-color);
//     }
//   }
// `;

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <HeaderContainer>
//       <Nav>
//         <Logo to="/" onClick={closeMenu}>
//           <img src={logo} alt="Site Logo" />
//         </Logo>

//         <DesktopNavLinks>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/services">Our Services</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//           <CTAButton to="/contact">Apply Now</CTAButton>
//         </DesktopNavLinks>

//         <MobileIcon onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </MobileIcon>

//         <MobileNavLinks isOpen={isOpen}>
//           <NavLink to="/" onClick={closeMenu}>Home</NavLink>
//           <NavLink to="/about" onClick={closeMenu}>About</NavLink>
//           <NavLink to="/services" onClick={closeMenu}>Our Services</NavLink>
//           <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
//           <CTAButton to="/contact" onClick={closeMenu}>Apply Now</CTAButton>
//         </MobileNavLinks>
//       </Nav>
//     </HeaderContainer>
//   );
// };

// export default Header;