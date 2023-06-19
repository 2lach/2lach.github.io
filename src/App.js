import "./styles/App.css";

import { CookieConsent, checkConsent } from "./components/CookieConsent";
import React, { Suspense, lazy } from "react";

import LatestCommits from "./components/latestCommits";
import { suppressConsole } from './components/supressConsole';

const BadJokes = lazy(() => import("./components/badjokes"));
const CoverImage = lazy(() => import("./components/CoverImage"));
const Links = lazy(() => import("./components/Links"));
const Avatar = lazy(() => import("./components/Avatar"));
const HelloWorld = lazy(() => import("./components/helloWorld"));

function testLogs(){
    console.log('log');
    console.warn('warn');
    console.error('error');
    console.info('info');
    console.debug('debug');

}

suppressConsole();

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className='loadingMessage'>
            <u>Winter</u> is coming...{' '}
          </div>
        }
      >
        <CoverImage />

        <div className='app-container'>
          <Avatar />
          <div className='content'>{HelloWorld}</div>
          <Links />

          {!checkConsent('cookieConsentClicked') && <CookieConsent />}
        </div>
        <BadJokes />
        <LatestCommits />
      </Suspense>
      {testLogs()}
    </div>
  );
}
export default App;
