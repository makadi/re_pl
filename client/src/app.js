import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './app_layout.js';
// import Routes from './routes';
import { Router } from 'react-router-dom';


const render = () => {
  ReactDOM.render(
    <AppLayout />,
    document.getElementById('root')
  );
};

render();
