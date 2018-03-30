import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Routing
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

const Routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={App} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
);



ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
