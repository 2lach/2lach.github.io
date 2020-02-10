import styled from "styled-components";
import stefan from "../images/stefan.png";

const Avatar = styled.div`
  background-image: url(${stefan});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 236px;
  position: relative;
  top: calc(-50px - 5vh);
  margin-bottom: calc(-50px - 5.5vh);
  background-position-x: center;
  border: 2px solid white;
  border-top-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`;

Avatar.displayName = "Avatar";

export default Avatar;
