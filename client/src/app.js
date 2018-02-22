import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import Layout from './layout';
import Collection from './collection';
import Discover from './discover';
import Settings from './settings';
import Dashboard from './dashboard';

const app = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/collection" component={Collection} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/discover" component={Discover} />
      <Route path="/settings" component={Settings} />
    </div>
  </BrowserRouter>,
app);
