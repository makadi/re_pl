import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/layout';
import Dashboard from './components/dashboard/dashboard';
import Collection from './components/collection/collection';
import Discover from './components/discover/discover';
import Settings from './components/settings/settings';

const app = document.getElementById('root');


ReactDOM.render(
  <Provider >
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/collection" component={Collection} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/discover" component={Discover} />
        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  </Provider>,
app);
