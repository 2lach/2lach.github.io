import React from "react";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";
import Links from "./Links";
import Writings from "./Writings/Writings";
import "../styles/App.css";
import { CookieConsent, checkConsent } from "./CookieConsent";
import LatestCommits from "./LatestCommits/LatestCommits";
import BadJokes from "./BadJokes";

const App = () => (
  <div>
    <CoverImage />
    <Avatar />
    <div className="content">
      <h1>My name is Stefan and I build things!</h1>
      <h2>Dev of the North</h2>
      <h3>Father, builder, thinker & coder</h3>
      <Links />
    </div>
    <BadJokes />
    <LatestCommits />
    {!checkConsent("cookieConsentClicked") && <CookieConsent />}
  </div>
);
export default App;
