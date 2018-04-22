/* global window */

/* eslint-disable */
import React from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import format from 'date-fns/format';
import { createApolloFetch } from 'apollo-fetch';
import getFetchURL from '../utils/getFetchURL';
import A from '../components/A';
import B from '../components/B';
import Small from '../components/Small';

class PostContainer extends React.Component{
  render(){
    return(
      <div>
      <div>Projects</div>
      <div>Skills</div>
      </div>
    )
  }
}
export default PostContainer;
