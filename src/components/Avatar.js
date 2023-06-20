import styled from "styled-components";
import stefan from "../images/stefan-2.jpg";

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

<<<<<<< HEAD
Avatar.displayName = "Avatar";
||||||| parent of cfe1832 (deployment 36)
const Avatar = () => (
  <AvatarContantainer>
    <StyledProgressiveImage
      src={stefan}
      placeholder={stefan}
      alt="2lach avatar"
    />
  </AvatarContantainer>
);
=======
const Avatar = () => (
  <AvatarContantainer>
    <StyledProgressiveImage
      src={stefan}
      height="250"
      width="248"
      placeholder={stefan}
      alt="2lach avatar"
    />
  </AvatarContantainer>
);
>>>>>>> cfe1832 (deployment 36)

export default Avatar;
