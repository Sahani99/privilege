import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--secondary-color);
  padding: 15px 0;
  border-bottom: 3px solid var(--primary-color);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 1.8em;
  font-weight: bold;
  text-decoration: none;
  color: var(--background-color);
  span {
    color: var(--primary-color);
  }
`;

const NavLinks = styled.div`
  a {
    color: var(--background-color);
    text-decoration: none;
    font-size: 1.1em;
    margin-left: 30px;
    padding-bottom: 5px;
    transition: color 0.3s ease, border-color 0.3s ease;

    &.active {
      color: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">NZ<span>Recruit</span></Logo>
        <NavLinks>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;