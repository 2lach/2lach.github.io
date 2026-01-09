import "./styles/App.css";

import { CookieConsent, checkConsent } from "./components/CookieConsent.jsx";
import React, { Suspense, lazy } from "react";

import LatestCommits from "./components/LatestCommits/index.jsx";
import { suppressConsole } from "./components/supressConsole";

const BadJokes = lazy(() => import("./components/BadJokes/index.jsx"));
const CoverImage = lazy(() => import("./components/CoverImage.jsx"));
const Links = lazy(() => import("./components/Links.jsx"));
const Avatar = lazy(() => import("./components/Avatar.jsx"));
const HelloWorld = lazy(() => import("./components/HelloWorld/index.jsx"));

suppressConsole();

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="loadingMessage">
            <u>Winter </u> is coming...
          </div>
        }
      >
        <div className="fade-in">
          <CoverImage data-testid="cover-image" />
        </div>

        <div className="app-container fade-in card subtle-hover">
          <Avatar data-testid="avatar" />
          <div className="content" data-testid="hello-world">
            {HelloWorld}
          </div>
          <Links data-testid="links" />

          {!checkConsent("cookieConsentClicked") && <CookieConsent />}
        </div>

        <div className="fade-in">
          <BadJokes />
        </div>

        <div className="fade-in">
          <LatestCommits />
        </div>
      </Suspense>
    </div>
  );
}
export default App;
