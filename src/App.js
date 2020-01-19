import React, { useState } from "react";
import CoverImage from "./components/CoverImage";
import Avatar from "./components/Avatar";
import Links from "./components/Links";
import Login from "./components/Login";
import "./styles/App.css";
import { CookieConsent, checkConsent } from "./components/CookieConsent";
import LatestCommits from "./components/LatestCommits";
import BadJokes from "./components/BadJokes";

function App() {
  const [knock, setKnock] = useState(0);
  const HelloWorld = (
    <>
      <h1>My name is Stefan and I build things!</h1>
      <h2>Dev of the North</h2>
      <h3>Father, builder, thinker & coder</h3>
    </>
  );
  return (
    <div>
      <CoverImage />
      <Avatar onClick={() => setKnock(knock + 1)} />
      {knock > 3 && <Login />}

      <div className="content">
        {HelloWorld}
        <Links />
      </div>

      <>
        <BadJokes />
        <LatestCommits />
      </>
      {!checkConsent("cookieConsentClicked") && <CookieConsent />}
    </div>
  );
}
export default App;
