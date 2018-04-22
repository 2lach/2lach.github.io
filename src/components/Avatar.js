import styled from 'styled-components';
import stefan from '../statics/images/stefan.jpg';

const Avatar = styled.div`
  background-image: url(${stefan});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 125px;
  position: relative;
  top: -50px;
  margin-bottom: -50px;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`;


Avatar.displayName = 'Avatar';

export default Avatar;
