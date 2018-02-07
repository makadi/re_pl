'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/app_container.scss';
import AppContainer from './app_container.js';

const render = () => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  );
};

render();