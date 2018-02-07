'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/app_container';


const render = () => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  );
};

render();
