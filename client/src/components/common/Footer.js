import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: var(--background-color);
  padding: 40px 20px;
  text-align: center;
  margin-top: 50px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} NZRecruit. All Rights Reserved.</p>
      <p>Connecting Sri Lankan Talent with New Zealand Opportunities</p>
    </FooterContainer>
  );
};

export default Footer;