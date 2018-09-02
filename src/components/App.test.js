import React, { Component } from "react";
import Coverimage from './Coverimage';
import Avatar from './Avatar';
import Links from './Links';
import '../styles/App.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});