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
        <Header />
        <Clock />
        <ContentCard />
        <Footer />
      </div>
    );
  }
}

export default App;
