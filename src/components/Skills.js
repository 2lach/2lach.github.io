/* eslint-disable */
import React, { Component } from 'react';
import skillsData from './data/skillsdata';
import Backend from './skillcomponents/backend';
import Frontend from './skillcomponents/frontend';
import Misc from './skillcomponents/misc';

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewer: "",
      count: 0
    }
    this.nextSkill = this.nextSkill.bind(this);
    this.previousSkill = this.previousSkill.bind(this);
  }
  nextSkill() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))
  };
  previousSkill() {
    this.setState((prevState, props) => ({
      count: prevState.count - 1
    }))
  }
  render() {

    return (
      <div className="tc">
        <div className="f3 avenir tc p3 navy link dim">Skills</div>
        <div>
          {(() => {
            switch (this.state.count) {
              case 0: return <Frontend />;
              case 1: return <Backend />;
              case 2: return <Misc />;
              default: return null;
            }
          })()}
        </div>
        <div>
          <div className={(this.state.count ? 1 : 'dn')}>
            <a href="#0"
              onClick={this.previousSkill}
              className={"f5 fl w-20 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box ml4 " + (this.state.count ? 1 : 'dn')}>
              <svg className="w1"
                data-icon="chevronLeft"
                viewBox="0 0 32 32"
              >
                <title>chevronLeft icon</title>
                <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
              </svg>
              <span className="pl1">Previous</span>
            </a>
          </div>
              <a href="#0"

              onClick={this.nextSkill}
              className={"f5 tr fr w-20  no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" + (this.state.count ? 3 : 'dn' )}
            >
              <span className="pr1">Next</span>
              <svg className="w1"
                data-icon="chevronRight"
                viewBox="0 0 32 32"
              >
                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
              </svg>
            </a>
            </div>
      </div>);
  }
}

export default Skills;
