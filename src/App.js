import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="center">
        <img src={'https://media1.tenor.com/images/6e05ec55980383be2613a599f181ec37/tenor.gif?itemid=3999446'} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
