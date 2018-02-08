import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Collection from './collection';

import Base from './components/base.js';
import HomePage from './components/home_page.js';
import LoginPage from './containers/login.js';
import SignUpPage from './containers/sign_up.js';


class Routes extends Component {
  constructor(props) {
    super(props);
    // testUserToken();
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={Profile} />
        <Route path="/collection" component={Collection} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

// export default Routes;

// const routes = {
//   component: Base,
//   childRoutes: [

//     {
//       path: '/',
//       component: HomePage
//     },

//     {
//       path: '/login',
//       component: LoginPage
//     },

//     {
//       path: '/signup',
//       component: SignUpPage
//     }

//   ]
// };

// export default routes;
