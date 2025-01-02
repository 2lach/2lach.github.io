import React, { useEffect, useState } from 'react';

import landscape from '../../assets/images/landscape.jpg';
import landscapeX60 from '../../assets/images/landscapeX60.jpg';
import portrait from '../../assets/images/portrait.jpg';
import portraitX60 from '../../assets/images/portraitX60.jpg';

interface CoverImageProps {}

const CoverImage: React.FC<CoverImageProps> = () => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia('(min-width: 768px)').matches
  );
  const [mainImageLoaded, setMainImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    const mediaQueryList = window.matchMedia('(min-width: 1000px)');
    mediaQueryList.addEventListener('change', handler);

    // Kom ihåg att städa upp eventlyssnare
    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, []);

  const handleMainImageLoad = () => {
    setMainImageLoaded(true);
  };

  return (
    <div data-testid='cover-image'>
      {matches ? (
        <img
          fetchPriority='high'
          src={
            mainImageLoaded
              ? 'https://placehold.co/600x400/EEE/31343C'
              : 'https://placehold.co/600x400/EEE/31343C'
          } //landscape : landscapeX60}
          alt='the main splash'
          onLoad={handleMainImageLoad}
        />
      ) : (
        <img
          fetchPriority='high'
          src={
            mainImageLoaded
              ? 'https://placehold.co/600x400/EEE/31343C'
              : 'https://placehold.co/600x400/EEE/31343C'
          }
          // src={mainImageLoaded ? portrait : portraitX60}
          alt='the small splash'
          onLoad={handleMainImageLoad}
        />
      )}
    </div>
  );
};

export default CoverImage;

/* import { Component } from 'react';
import landscape from '../assets/images/landscape.jpg';
import landscapeX60 from '../assets/images/landscapeX60.jpg';
import portrait from '../assets/images/portrait.jpg';
import portraitX60 from '../assets/images/portraitX60.jpg';

class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia('(min-width: 768px)').matches,
      mainImageLoaded: false
    };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window
      .matchMedia('(min-width: 1000px)')
      .addEventListener('change', handler);
  }

  handleMainImageLoad = () => {
    this.setState({ mainImageLoaded: true });
  };

  render() {
    const { matches, mainImageLoaded } = this.state;

    return (
      <div data-testid='cover-image'>
        {matches && (
          <StyledProgressiveImage
            fetchpriority='high'
            src={mainImageLoaded ? landscape : landscapeX60}
            alt='the main splash'
            onLoad={this.handleMainImageLoad}
          />
        )}
        {!matches && (
          <StyledProgressiveImage
            fetchpriority='high'
            src={mainImageLoaded ? portrait : portraitX60}
            alt='the small splash'
            onLoad={this.handleMainImageLoad}
          />
        )}
      </div>
    );
  }
}

export default CoverImage;
*/
