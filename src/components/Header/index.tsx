import LogoImg from '../../assets/karmalimited.webp';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 102%;
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const Navigation = styled.nav`
  a {
    color: #007bff;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt='Karma Limited Logo' />
      <Navigation>
        <a href='#home'></a>
        <a href='#about'></a>
        <a href='#services'></a>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
