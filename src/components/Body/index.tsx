import About from '../About';
import React from 'react';
import Services from '../Services';
import Work from '../Work';

const Body: React.FC = () => {
  return (
    <>
      <div id='about'>
        <About />
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
