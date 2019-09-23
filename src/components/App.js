import React from "react";
import CoverImage from "./CoverImage";
import Avatar from "./Avatar";
import Links from "./Links";
import Writings from "./Writings/Writings";
import "../styles/App.css";
import { CookieConsent, checkConsent } from "./CookieConsent";
import LatestCommits from "./LatestCommits/LatestCommits";

const App = () => (
  <div>
    <CoverImage />
    <Avatar />
    <div className="content">
      <h1>My name is Stefan and I build things</h1>
      <Links />
    </div>
    <hr />
    <LatestCommits />
    <hr />

    {!checkConsent("cookieConsentClicked") && <CookieConsent />}
  </div>
);
export default App;
