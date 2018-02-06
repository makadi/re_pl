'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app.js';

import styles from './scss/application.scss';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};

render();
