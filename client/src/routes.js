import Base from './components/base.js';
import HomePage from './components/home_page.js';
import LoginPage from './containers/login.js';
import SignUpPage from './containers/sign_up.js';


const routes = {
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
