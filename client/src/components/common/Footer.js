import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg'; // Make sure you have a logo suitable for dark backgrounds

const FooterContainer = styled.footer`
  background-color: var(--surface-color);
  color: var(--text-color-muted);
  padding: 60px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div``;

const LogoImage = styled.img`
  height: 50px;
  margin-bottom: 20px;
`;

const ColumnTitle = styled.h4`
  color: var(--heading-color);
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  color: var(--text-color-muted);
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: var(--text-color);
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <LogoImage src={logo} alt="Logo" />
          <p>Your trusted partner for pursuing an exceptional education in New Zealand. We simplify your journey from Sri Lanka to a world-class university.</p>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Quick Links</ColumnTitle>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/services">Our Services</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Contact Info</ColumnTitle>
          <p>123 Main Street,<br/>Colombo, Sri Lanka</p>
          <p>info@studentrecruit.lk<br/>+94 11 234 5678</p>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>Follow Us</ColumnTitle>
          <p>Stay connected with us on social media.</p>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterGrid>
      <Copyright>
        © {new Date().getFullYear()} StudentRecruit. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import logo from '../../assets/images/logo.jpg';

// const FooterContainer = styled.footer`
//   /* Overriding to be light */
//   background-color: var(--light-background-color);
//   color: #555; /* A standard dark grey for text */
//   padding: 60px 20px;
//   border-top: 1px solid #e9ecef; /* A light border for separation */
// `;

// const FooterGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 40px;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const FooterColumn = styled.div``;

// const LogoImage = styled.img`
//   height: 50px;
//   margin-bottom: 20px;
//   /* This filter will turn a white logo black. Remove if your logo is already dark. */
//   filter: brightness(0); 
// `;

// const ColumnTitle = styled.h4`
//   color: var(--light-text-color); /* Explicitly dark text */
//   font-size: 1.2rem;
//   margin-bottom: 20px;
// `;

// const FooterLink = styled.a`
//   color: #555;
//   text-decoration: none;
//   display: block;
//   margin-bottom: 10px;
//   transition: color 0.3s;
  
//   &:hover {
//     color: var(--primary-color);
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 20px;

//   a {
//     color: var(--light-text-color); /* Dark icons */
//     font-size: 1.5rem;
//     transition: color 0.3s;

//     &:hover {
//       color: var(--primary-color);
//     }
//   }
// `;

// const Copyright = styled.div`
//   text-align: center;
//   margin-top: 40px;
//   padding-top: 20px;
//   border-top: 1px solid #e9ecef;
//   font-size: 0.9rem;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterGrid>
//         <FooterColumn>
//           <LogoImage src={logo} alt="Logo" />
//           <p>Your trusted partner for pursuing an exceptional education in New Zealand. We simplify your journey from Sri Lanka to a world-class university.</p>
//         </FooterColumn>
//         <FooterColumn>
//           <ColumnTitle>Quick Links</ColumnTitle>
//           <FooterLink href="/about">About Us</FooterLink>
//           <FooterLink href="/services">Our Services</FooterLink>
//           <FooterLink href="/contact">Contact</FooterLink>
//         </FooterColumn>
//         <FooterColumn>
//           <ColumnTitle>Contact Info</ColumnTitle>
//           <p>123 Main Street,<br/>Colombo, Sri Lanka</p>
//           <p>info@studentrecruit.lk<br/>+94 11 234 5678</p>
//         </FooterColumn>
//         <FooterColumn>
//           <ColumnTitle>Follow Us</ColumnTitle>
//           <p>Stay connected with us on social media.</p>
//           <SocialIcons>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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