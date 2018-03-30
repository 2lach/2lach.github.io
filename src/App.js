import React, { Component } from 'react';
import './index.css';
import Footer from './components/layout/Footer';
import Clock from './components/Clock/index';
// import ContentCard from './components/ContentCard/index';
// import Header from './components/layout/Header';
// import Logincontrol from './components/loginControl/index';
import Topbanner from './components/topBanner/index';
import { Switch, Route, Link } from 'react-router-dom';


const about = () => <div className="tabContent border-me">ABOUT</div>;
const experience = () => <div className="tabContent border-me">Experience</div>;
const Project = () => <div className="tabContent border-me">Project</div>;
const Skills = () => <div className="tabContent border-me">Skills</div>;
const Contact = () => <div className="tabContent border-me">Contact</div>;



class App extends Component {
  render() {

    const { path } = this.props.match;

    return (
      <div className="App">
        <Clock />
        <Topbanner />
        <div>
          <nav className="nav header">
            <ul className="nav-bar">
              <Link className="nav-bar_item f4 lh-copy" to={`${path}/About`}>About</Link>
              <Link className="nav-bar_item f4 lh-copy" to={`${path}/Experience`} >Experience</Link>
              <Link className="nav-bar_item f4 lh-copy" to={`${path}/Project`}>Project</Link>
              <Link className="nav-bar_item f4 lh-copy" to={`${path}/Skills`}>Skills</Link>
              <Link className="nav-bar_item f4 lh-copy" to={`${path}/Contact`}>Contact</Link>
            </ul>
          </nav>
          <div className="tabs">
            <Switch>
              <Route path={"/home/about"} exact component={about} />
              <Route path={"/home/experience"} exact component={experience} />
              <Route path={'/home/contact'} component={Contact} />
              <Route path={`/home/project`}  component={Project} />
              <Route path={'/home/Skills'} component={Skills} />
              <Route path={'/home/contact'} component={Contact} />
            </Switch>
          </div>
        </div>

        <Footer className="fl w-100" />
        {/*  <Logincontrol />     <Header />          <ContentCard className="fl w-third" /> */}
      </div>
    );
  }
}

export default App;
