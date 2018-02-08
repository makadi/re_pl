import React from 'react';
import ReactDOM from 'react-dom';
// import styles from './scss/app_container.scss';
// import AppContainer from './app_container.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';


injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));


// const render = () => {
//   ReactDOM.render(
//     <AppContainer />,
//     document.getElementById('root')
//   );
// };

// render();
