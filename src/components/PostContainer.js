/* eslint-disable */
import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import format from 'date-fns/format';
import A from '../components/A';
import B from '../components/B';
import Small from '../components/Small';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

class PostContainer extends React.Component {
  render() {
    return (
      <div>
        <Projects />
        <Skills />
      </div>
    );
  }
}
export default PostContainer;
