import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 100px 0rem;
  background-color: #343a40;
  color: #f8f9fa;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  bottom: 0;
  border-radius: 50px 50px 0px 0px;
  background-size: fit-cover;
`;

const rotateColor = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  25% {
    background-color: rgba(255, 0, 0, 0.8);
  }
  50% {
    background-color: rgba(0, 255, 0, 0.8);
  }
  75% {
    background-color: rgba(0, 0, 255, 0.8);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const LookingGlass = styled.div`
  width: 100px; // size of "looking glass"
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  transform: translate(50%, 50%);
  visibility: hidden; // Börjar som osynlig
  pointer-events: none; // Säkerställer att den inte påverkar mus-event
  transition: transform 0.1s ease-out;
  animation: ${rotateColor} 2s linear infinite;
  hover: {
    color: black;
    transform: scale(1.1);
  }
`;

const FooterContent = styled.div`
  position: relative; // Ensure this content is above the looking glass
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  > div {
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  a {
    color: #f8f9fa;
    text-decoration: none;
    margin: 0 1rem;
  }
`;

const Footer: React.FC = () => {
  const glassRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const footer = e.currentTarget;
    const rect = footer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - 20;
    const mouseY = e.clientY - (rect.top + 120);
    const glass = glassRef.current;

    if (glass) {
      glass.style.visibility = 'visible';
      // Uppdaterar här för att positionera elementet direkt vid muspekaren
      glass.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  };

  const handleMouseOut = () => {
    const glass = glassRef.current;
    if (glass) {
      glass.style.visibility = 'hidden';
    }
  };

  return (
    <FooterContainer
      id='footer'
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <LookingGlass ref={glassRef} />
      <FooterContent>
        © {new Date().getFullYear()} Stefan Lachmann - All rights reserved.
        <Links>
          <a href='#about'>About</a>
          <a href='#privacy'>Privacy Policy</a>
          <a href='mailto:stefanlachmann@hotmail.com'>Contact</a>
        </Links>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
