import React, { Component } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BlockClock from './components/BlockClock/Index';
import Clock from './components/Clock/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Clock />
        <Footer />
      </div>
    );
  }
}

export default App;
