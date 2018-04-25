/* eslint-disable */
import React, { Component } from 'react';
import skillsData from './data/skillsdata';
import Carosel from './imageSlider';

class Skills extends Component {
  render() {
    return (
      <div className="tc">
        <div className="f3 avenir tc p3 navy link dim">Skills</div>
        <Carosel />
      </div>);
  }
}

export default Skills;
