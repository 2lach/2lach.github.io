import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components'; // Import css from styled-components

import LogoImg from '../../assets/karmalimited.webp';

const HeaderContainer = styled.header`
  width: 100%;
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
    transform: translateX(-90vw) rotate(720deg); // Moves right and rotates
    transform-style: preserve-3d;
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
    margin: 0 10px;
    color: #708190;
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-size: 1.5rem;
    &::before {
      content: '';
      position: absolute;
      bottom: -2px; // Positioning the underline slightly below the text
      left: 50%; // Start from the middle
      width: 0; // Start width as zero
      height: 2px; // Thickness of the underline
      background-color: #708190; // Same color as the text
      transition: all 0.3s ease-in-out; // Smooth transition for all changes
      transform: translateX(-50%); // Center the pseudo-element
    }

    &:hover::before {
      width: 100%; // Full width on hover
      left: 0; // Reset to start from the left edge
      transform: translateX(0%); // Reset transform to none
    }
  }
`;

const Header: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000); // Resets animation after 2 seconds
  };
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HeaderContainer>
      <Navigation>
        <a href='#' onClick={() => handleScroll('about')}>
          About
        </a>
        <a href='#' onClick={() => handleScroll('services')}>
          Services
        </a>
        <a href='#' onClick={() => handleScroll('footer')}>
          Work
        </a>
      </Navigation>
      <AnimatedLogo
        src={LogoImg}
        alt='Karma Limited Logo'
        data-animate={animate}
        onClick={toggleAnimation}
      />
    </HeaderContainer>
  );
};

export default Header;
