'use strict';

import Base from './components/base.js';
import HomePage from './components/home_page.js';
import LoginPage from './containers/login_page.js';
import SignUpPage from './containers/sign_up_page.js';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }

  ]
};

export default routes;
