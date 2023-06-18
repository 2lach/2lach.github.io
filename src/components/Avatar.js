//import ProgressiveImage from 'react-progressive-graceful-image';
import stefan from "../assets/images/sl.jpg";
import styled from "styled-components";

const AvatarContantainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-top: -125px;
`;

const StyledProgressiveImage = styled.img`
  background-size: cover;
  border: 2px solid white;
  border-top-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10%;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`;

const Avatar = () => (
  <AvatarContantainer>
    <StyledProgressiveImage
      src={stefan}
      placeholder={stefan}
      alt="2lach avatar"
    />
  </AvatarContantainer>
);

export default Avatar;
