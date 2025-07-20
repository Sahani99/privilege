// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// import logo from '../../assets/images/logo.png'; 

// // --- STYLED COMPONENTS ---

// const FooterContainer = styled.footer`
//   background-color: #222;
//   color: #ccc;
//   /* CHANGED: Removed horizontal padding, only vertical now */
//   padding: 60px 0;
// `;

// const FooterGrid = styled.div`
//   /* ADDED: Container properties moved here */
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px; /* This provides breathing room on smaller screens */

//   display: grid;
//   gap: 40px;
  
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(4, 1fr);
//   }
// `;

// const FooterColumn = styled.div`
//   p {
//     line-height: 1.7;
//   }
// `;

// const LogoImage = styled.img`
//   height: 40px;
//   margin-bottom: 20px;
// `;

// const ColumnTitle = styled.h4`
//   color: #fff;
//   font-size: 1.2rem;
//   margin-bottom: 20px;
//   margin-top: 0;
// `;

// const FooterLink = styled(Link)`
//   color: #ccc;
//   text-decoration: none;
//   display: block;
//   margin-bottom: 10px;
//   transition: color 0.3s ease;
  
//   &:hover {
//     color: #FFD700;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 20px;

//   a {
//     color: #fff;
//     font-size: 1.5rem;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #FFD700;
//     }
//   }
// `;

// const Copyright = styled.div`
//   /* CHANGED: Container properties moved here as well */
//   max-width: 1200px;
//   margin: 40px auto 0;
//   padding: 20px 20px 0; /* Add padding here */
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
//   text-align: center;
//   font-size: 0.9rem;
//   color: #aaa;
// `;

// // --- MAIN COMPONENT ---
// const Footer = () => {
//   // ... The JSX for the component remains exactly the same
//   return (
//     <FooterContainer>
//       <FooterGrid>
//         {/* Column 1: Logo and Brand */}
//         <FooterColumn>
//           <LogoImage src={logo} alt="Privilege Education Logo" />
//           <p>Your trusted partner for pursuing an exceptional education in New Zealand. We simplify your journey from Sri Lanka to a world-class university.</p>
//         </FooterColumn>

//         {/* Column 2: Quick Links */}
//         <FooterColumn>
//           <ColumnTitle>Quick Links</ColumnTitle>
//           <FooterLink to="/about">About Us</FooterLink>
//           <FooterLink to="/services">Our Services</FooterLink>
//           <FooterLink to="/contact">Contact</FooterLink>
//         </FooterColumn>

//         {/* Column 3: Contact Info */}
//         <FooterColumn>
//           <ColumnTitle>Contact Info</ColumnTitle>
//           <p>
//             123 Main Street,<br/>
//             Colombo, Sri Lanka
//           </p>
//           <p>
//             info@studentrecruit.lk<br/>
//             +94 11 234 5678
//           </p>
//         </FooterColumn>

//         {/* Column 4: Social Media */}
//         <FooterColumn>
//           <ColumnTitle>Follow Us</ColumnTitle>
//           <p>Stay connected with us on social media.</p>
//           <SocialIcons>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
//           </SocialIcons>
//         </FooterColumn>
//       </FooterGrid>

//       <Copyright>
//         © {new Date().getFullYear()} StudentRecruit. All Rights Reserved.
//       </Copyright>
//     </FooterContainer>
//   );
// };

// export default Footer;

import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// It's better to import your logo, but a URL works too.
import logo from '../../assets/images/logo.png'; 

// --- STYLED COMPONENTS FOR THE NEW PRESTIGE FOOTER ---

const FooterContainer = styled.footer`
  background-color: #121212; /* A deep, near-black for a premium feel */
  color: #a9a9a9; /* Light gray for accessibility and softness */
  padding: 40px 0 0;
  position: relative; /* Crucial for the background effects */
  overflow: hidden; /* Clips the glowing blobs */
  font-size: 16px;

  /* The glowing background blobs */
  &::before, &::after {
    content: '';
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    filter: blur(90px); /* This creates the soft glow */
    opacity: 0.06; /* Very subtle */
  }

  /* Top-right blob */
  &::before {
    width: 500px;
    height: 500px;
    background-color: #FFD700; /* Your yellow */
    top: -200px;
    right: -200px;
  }

  /* Bottom-left blob */
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
  z-index: 1; /* Ensures content is on top of the blobs */
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
`;
// const LinkStyles = `
//   /* --- FIX: Text is now permanently white --- */
//   // color: var(--heading-color);
//   // text-decoration: none;
//   // font-size: 1em;
//   // font-weight: 500;
//   // padding-bottom: 5px;
//   // position: relative;
//   // transition: color 0.3s ease;
//   // cursor: pointer;
  
//   // &::after {
//   //   content: '';
//   //   position: absolute;
//   //   width: 0;
//   //   height: 2px;
//   //   bottom: 0;
//   //   left: 0;
//   //   background-color: var(--primary-color);
//   //   transition: width 0.3s ease;
//   // }
  
//   // /* Hover and active states still use the gold color */
//   // &.active, &:hover {
//   //   color: var(--primary-color);
//   // }
  
//   // &.active::after, &:hover::after {
//   //   width: 100%;
//   // }
//     display: inline-block;
//   background-color: transparent;
//   color: #ffffff;
//   border: 2px solid #ffffff;
//   padding: 12px 30px;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: 600;
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: #FFD700;
//     color: #121212;
//     border-color: #FFD700;
//   }
// `;

// const StyledScrollLink = styled(ScrollLink)`${LinkStyles}`;



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
`;

const BrandColumn = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 30%;
  }
`;

const LinksGrid = styled.div`
  flex-basis: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-basis: 65%;
    grid-template-columns: repeat(4, 1fr);
  }
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
  a {
    font-size: 20px;
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
`;
const LogoImage = styled.img`
  height: 40px; /* Control the height */
  margin-bottom: 20px; /* Space below the logo */
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
      color: #FFD700;
    //color: var(--primary-color);
  }
  
  // &.active::after, &:hover::after {
  //   width: 100%;
  // }
`;

const StyledScrollLink = styled(ScrollLink)`${LinkStyles}`;
  const scrollProps = {
    spy: true,
    smooth: true,
    offset: -80,
    duration: 500,
  };

// --- MAIN FOOTER COMPONENT ---
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentWrapper>
        <CTASection>
          <h2>Want to study in New Zealand?</h2>
          <p>If you're interested in starting your journey and would like to find out more information, one of our advisors is excited to help.</p>
          {/* <StyledScrollLink to="contact" {...scrollProps}>Get Started</StyledScrollLink> */}
          <CTAButton to="contact" {...scrollProps}>Get Started</CTAButton>
        </CTASection>

        <MainFooter>
          <BrandColumn>
            {/* You can use your logo here */}
            <LogoImage src={logo} alt="Privilege Education Logo" />
            <h3 style={{ color: 'white', fontSize: '24px', marginTop: 0 }}>Privilege Education</h3>
          </BrandColumn>

          <LinksGrid>
            {/* <LinkColumn>
              <h4>Partnerships</h4>
              <Link to="/partners/websites">Websites</Link>
              <Link to="/partners/social-media">Social Media</Link>
              <Link to="/partners/branding">Branding</Link>
            </LinkColumn> */}
            <LinkColumn>
              <h4>About</h4>
              <StyledScrollLink to="about" {...scrollProps}>Our Why</StyledScrollLink>
              <StyledScrollLink to="testimonials" {...scrollProps}>Our Work</StyledScrollLink>
              {/* <Link to="/careers">Careers</Link> */}
            </LinkColumn>
            <LinkColumn>
              <h4>Support</h4>
              {/* <Link to="/support/request">Support Request</Link> */}
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
      
      {/* 
        This is where you would place your chat widget component, 
        like Tawk.to or the WhatsAppWidget we designed. It's separate
        from the footer logic so it can float on top of everything.
      */}

    </FooterContainer>
  );
};

export default Footer;