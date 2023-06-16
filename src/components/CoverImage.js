// import Media from "react-media";
// import ProgressiveImage from "react-progressive-graceful-image";
import {Component} from "react";
import landscape from "../assets/images/landscape.jpg";
import landscapeX60 from '../assets/images/landscapeX60.jpg';
import portrait from '../assets/images/portrait.jpg';
import portraitX60 from '../assets/images/portraitX60.jpg';
import styled from "styled-components";

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

class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia('(min-width: 768px)').matches };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 1000px)').addEventListener('change', handler);
  }
  render() {
    return (
      <div>
        {this.state.matches && (
          <StyledProgressiveImage
            src={landscape}
            alt='the main splash'
            placeholder={landscapeX60}
          />
        )}
        {!this.state.matches && (
          <StyledProgressiveImage
            src={portrait}
            alt='the small splash'
            placeholder={portraitX60}
          />
        )}
      </div>
    );
  }
}

export default CoverImage;