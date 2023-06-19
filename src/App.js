import './styles/App.css';

import { CookieConsent, checkConsent } from './components/CookieConsent';
import React, { Suspense, lazy } from 'react';

import LatestCommits from './components/latestCommits';
import { suppressConsole } from './components/supressConsole';

const BadJokes = lazy(() => import('./components/badjokes'));
const CoverImage = lazy(() => import('./components/CoverImage'));
const Links = lazy(() => import('./components/Links'));
const Avatar = lazy(() => import('./components/Avatar'));
const HelloWorld = lazy(() => import('./components/helloWorld'));

suppressConsole();

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className='loadingMessage'>
            <u>Winter </u> is coming...
          </div>
        }
      >
        <CoverImage data-testid='cover-image' />

        <div className='app-container'>
          <Avatar data-testid='avatar' />
          <div className='content' data-testid='hello-world'>
            {HelloWorld}
          </div>
          <Links data-testid='links' />

          {!checkConsent('cookieConsentClicked') && <CookieConsent />}
        </div>
        <BadJokes />
        <LatestCommits />
      </Suspense>
    </div>
  );
}
export default App;
