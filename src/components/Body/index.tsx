import About from '../About';
import React from 'react';
import Services from '../Services';
import Work from '../Work';

const Body: React.FC = () => {
  const stuff_i_like = [
    'Peace and quiet',
    'Working out',
    'Reading',
    'Learning',
    'Family'
  ];
  return (
    <>
      <div id='about'>
        <About stuff={stuff_i_like} />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='work'>
        <Work />
      </div>
    </>
  );
};

export default Body;
