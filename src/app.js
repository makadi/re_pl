'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/app_container';

import styles from './scss/app_container.scss';
// import styles from './scss/media_player.scss';
// import styles from './scss/navbar.scss';
// import styles from './scss/playlists.scss';
// import styles from './scss/tracklist.scss';


const render = () => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  );
};

render();
