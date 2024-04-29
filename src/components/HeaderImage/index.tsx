import React from 'react';
import dayImage from '../../assets/ellie-ellien-tJ9ZwimIGjc-unsplash.webp';
import dayImageMobile from '../../assets/kelly-sikkema-PqqQDpS6H6A-unsplash.webp';
import nightImage from '../../assets/nathan-anderson-L95xDkSSuWw-unsplash.webp';
import nightImageMobile from '../../assets/altinay-dinc-LluELtL5mK4-unsplash.webp';
import styled from 'styled-components';

interface HeroSectionProps {
  children?: React.ReactNode;
}

const StyledBackgroundImage = styled.div<{ 'data-isdarktheme': boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh; // Changed from 100vw to 100vh for correct vertical sizing
  background-image: url(${props =>
    props['data-isdarktheme'] ? nightImage : dayImage});
  background-size: cover;
  background-position: center; // Adjusted to center for better focus
  transition: background-image 0.5s ease-in-out;
  z-index: -1;

  @media (max-width: 768px) {
    background-image: url(${props =>
      props['data-isdarktheme'] ? nightImageMobile : dayImageMobile});
  }
`;

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  const getThemeType = (): boolean => {
    const hour = new Date().getHours();
    return hour > 17 || hour < 8;
  };

  const isDarkTheme = getThemeType();
  return (
    <StyledBackgroundImage data-isdarktheme={isDarkTheme}>
      {children}
    </StyledBackgroundImage>
  );
};

export default HeroSection;
