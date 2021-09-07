import Media from "react-media";
import ProgressiveImage from "react-progressive-graceful-image";
import React from "react";
import landscape from "../assets/images/landscape.jpg";
import landscapeX60 from '../assets/images/landscapeX60.jpg';
import portrait from '../assets/images/portrait.jpg';
import portraitX60 from '../assets/images/portraitX60.jpg';
import styled from "styled-components";

window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: true,
      addListener: () => {},
      removeListener: () => {},
    };
  };

const StyledProgressiveImage = styled.img`
  height: 65vh;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: center;
  object-fit: cover;

  @media (min-width: 800px) {
    background-position-y: center;
  }
  @media (max-width: 500px) {
    background-position-y: center;
  }
`;

const CoverImage = () => (
  <Media query={{ minWidth: 1000 }}>
    {(matches) => {
      return (
        <ProgressiveImage
          src={matches ? landscape : portrait}
          placeholder={matches ? landscapeX60 : portraitX60}
        >
          {(src) => <StyledProgressiveImage src={src} alt="the main splash" />}
        </ProgressiveImage>
      );
    }}
  </Media>
);

CoverImage.displayName = "CoverImage";

export default CoverImage;
