import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './components/dashboard/dashboard';
import Collection from './components/collection/collection';
import Discover from './components/discover/discover';
import Settings from './components/settings/settings';

const app = document.getElementById('root');

export default class Routes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/collection" component={Collection} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/discover" component={Discover} />
        <Route path="/settings" component={Settings} />
      </div>  
    );
  }
}