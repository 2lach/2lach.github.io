import './styles/App.css';

import { CookieConsent, checkConsent } from './components/CookieConsent';
import React, { Suspense, lazy } from 'react';

import LatestCommits from './components/LatestCommits';

const BadJokes = lazy(() => import('./components/BadJokes'));
const CoverImage = lazy(() => import('./components/CoverImage'));
const Links = lazy(() => import('./components/Links'));
const Avatar = lazy(() => import('./components/Avatar'));
const HelloWorld = lazy(() => import('./components/HelloWorld'));

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
    </div>
  );
}
export default App;
