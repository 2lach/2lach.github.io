import React, { Component } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Clock from './components/clock/index';
import ContentCard from './components/contentCard/index';
//import Logincontrol from './components/loginControl/index';
import Topbanner from './components/topBanner/index';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Topbanner  /> 
        <Header className="fl w-third" />
        <ContentCard className="fl w-third"/>    
        <Footer className="fl w-100" />
        {/*  <Logincontrol />     */}
      </div>
      
    );
  }
}

export default App;
