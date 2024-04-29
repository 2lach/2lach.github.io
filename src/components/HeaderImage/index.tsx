import React from 'react';
import styled from 'styled-components';

interface HeroSectionProps {
  children?: React.ReactNode;
}

const StyledBackgroundImage = styled.div<{ 'data-isdarktheme': boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vw;
  background-image: url(${props =>
    props['data-isdarktheme']
      ? 'src/assets/nathan-anderson-L95xDkSSuWw-unsplash.webp' // night image
      : 'src/assets/ellie-ellien-tJ9ZwimIGjc-unsplash.webp'}); // day image
  background-size: cover;
  background-position: bottom;
  transition: background-image 0.5s ease-in-out;
  z-index: -1;
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
