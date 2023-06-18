import "./styles/App.css";

import { CookieConsent, checkConsent } from "./components/CookieConsent";
import React, { Suspense, lazy } from "react";

import { HelloWorld } from "../components/HelloWorld";

const BadJokes = lazy(() => import("./components/BadJokes"));
const CoverImage = lazy(() => import("./components/CoverImage"));
const Links = lazy(() => import("./components/Links"));
const Avatar = lazy(() => import("./components/Avatar"));

function App() {
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
          <HelloWorld />
          <Links />
        </div>

        <BadJokes />

        {!checkConsent("cookieConsentClicked") && <CookieConsent />}
      </Suspense>
    </div>
  );
}
export default App;
