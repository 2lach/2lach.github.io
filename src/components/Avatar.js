import styled from "styled-components";
import stefan from "../images/stefan.jpg";

const Avatar = styled.div`
  background-image: url(${stefan});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 200px;
  position: relative;
  top: calc(-50px - 5vh);
  margin-bottom: calc(-50px - 5.5vh);
  background-position-x: -2rem;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`;

Avatar.displayName = "Avatar";

export default Avatar;
