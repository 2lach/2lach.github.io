import "./styles/App.css";

import { CookieConsent, checkConsent } from "./components/CookieConsent";
import React, { Suspense, lazy } from "react";

const BadJokes = lazy(() => import("./components/BadJokes"));
const CoverImage = lazy(() => import("./components/CoverImage"));
const Links = lazy(() => import("./components/Links"));
const Avatar = lazy(() => import("./components/Avatar"));

function App() {
  const HelloWorld = (
    <div className="helloWorld">
      <h1>Greetings pilgrim</h1>
      <h2>Welcome to my little corner of the internet</h2>
      <h2>I'am Stefan and enjoy I building things!</h2>
      <h3>Besides that I'am also a Father and maker of various things.</h3>
    </div>
  );
  return (
    <div>
      <Suspense
        fallback={
          <div className="loadingMessage">
            <u>Winter</u> is coming...{" "}
          </div>
        }
      >
        <CoverImage />
        <div className="app-container">
          <Avatar />
          <div className="content">
            {HelloWorld}
            <Links />
          </div>
          <>
            <BadJokes />
          </>
          {!checkConsent("cookieConsentClicked") && <CookieConsent />}
        </div>
      </Suspense>
    </div>
  );
}
export default App;
