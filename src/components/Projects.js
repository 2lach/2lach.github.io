/* eslint-disable */
import React, { Component } from 'react';
import projectsData from './data/projectsdata';
import Styles from './style.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillMount() {
    this.setState({ data: projectsData });
  }
  render() {
   // console.log(this.state.data);
    return (
      <div className="polaroid_images">
        <div className="f3 avenir tc p3 navy link dim">Recent Projects</div>
        <ul>
          {/* returns an array from the objects */}
          {Object.keys(this.state.data).map(key => (
            <a
              key={key}
              className="fl w-50 f4 fw6 db navy link"
              href={this.state.data[key].url}
            >
              <li
                className="pa2"
                style={{ listStyle: 'none' }}
                key={key}
                details={this.state.data[key]}
              >
                <div className="polaroid_images_a ba bw2 b--light-gray">
                  <img
                    key={key}
                    className="polaroid_images_img"
                    src={this.state.data[key].image}
                    style={{ height: 'auto', width: '15rem' }}
                  />
                </div>
                <p className="tc avenir db navy link">
                  {this.state.data[key].title}
                </p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}
export default Projects;
