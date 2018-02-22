import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';


const app = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>,
  app);
}

store.subscribe(render);
render();