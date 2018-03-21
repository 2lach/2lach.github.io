import React, { Component } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Clock from './components/Clock/index';
import ContentCard from './components/ContentCard/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <div className="fl w-100">
        <Header className="fl w-third" />
        <ContentCard className="fl w-third"/>
        </div>
        <Footer className="fl w-100" />
      </div>
    );
  }
}

export default App;
