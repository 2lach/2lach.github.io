import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components'; // Import css from styled-components

import LogoImg from '../../assets/karmalimited.webp';

const HeaderContainer = styled.header`
  width: 102%;
  background-color: #f0f4f8;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const yoyo = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(99vw) rotate(900deg); // Moves right and rotates
  }
  100% {
    transform: translateX(0) rotate(0deg); // Returns to original position
  }
`;

const AnimatedLogo = styled.img<{ 'data-animate': boolean }>`
  height: 50px;
  width: auto;
  cursor: pointer;
  width: 100px;
  height: auto;
  animation: ${props =>
    props['data-animate']
      ? css`
          ${yoyo} 2s ease-in-out
        `
      : 'none'};
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
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000); // Resets animation after 2 seconds
  };

  return (
    <HeaderContainer>
      <AnimatedLogo
        src={LogoImg}
        alt='Karma Limited Logo'
        data-animate={animate}
        onClick={toggleAnimation}
      />
      <Navigation>
        <a href='#home'></a>
        <a href='#about'></a>
        <a href='#services'></a>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
