/* global window */
import React from "react";
import styled from "styled-components";
import Media from "react-media";
import ProgressiveImage from "react-progressive-bg-image";
import landscapeX60 from "../images/landscapeX60.jpg";
import landscape from "../images/landscape.jpg";
import portraitX60 from "../images/portraitX60.jpg";
import portrait from "../images/portrait.jpg";

window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: true,
      addListener: () => {},
      removeListener: () => {}
    };
  };

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 60vh;
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
    {matches => (
      <StyledProgressiveImage
        src={matches ? landscape : portrait}
        placeholder={matches ? landscapeX60 : portraitX60}
      />
    )}
  </Media>
);

CoverImage.displayName = "CoverImage";

export default CoverImage;
