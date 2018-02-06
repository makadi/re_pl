'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './js/app';

import styles from './scss/application.scss';

const render = () => {
  ReactDOM.render(
    <AppLayout />,
    document.getElementById('root')
  );
};

render();
