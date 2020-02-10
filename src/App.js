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
      <h1>Greetings pilgrim</h1>
      <h2> and welcome to my little corner of the internet</h2>
      <h2>I'am Stefan and enjoy I building things!</h2>
      <h3>Besides that I'am also a Father and maker of various things.</h3>
      <h3>
        I have been known to think & sometimes I transform my thoughts into code
      </h3>
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
