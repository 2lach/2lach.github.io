import React, { Component } from "react";
import Coverimage from "./Coverimage";
import Avatar from "./Avatar";
import Links from "./Links";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Coverimage />
        <Avatar />
        <div className="content">
          <h1>My name is Stefan and I build things</h1>
          <Links />
        </div>
      </div>
    );
  }
}
export default App;
