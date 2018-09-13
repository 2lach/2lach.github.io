import React from "react";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";
import Links from "./Links";
import "../styles/App.css";

const App = () => (
  <div>
    <CoverImage />
    <Avatar />
    <div className="content">
      <h1>My name is Stefan and I build things</h1>
      <Links />
    </div>
  </div>
);
export default App;
