import React, { Component } from 'react';
import './index.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Clock from './components/clock/index';
import ContentCard from './components/contentCard/index';
//import Logincontrol from './components/loginControl/index';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <div className="fl w-100">
        <Header className="fl w-third" />
        <ContentCard className="fl w-third"/>
        </div>
        {/*  
          <Logincontrol className="fr w-third" /> 
        */}
        
       
        <Footer className="fl w-100" />
      </div>
    );
  }
}

export default App;
