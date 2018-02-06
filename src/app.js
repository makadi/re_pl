'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './js/app_container';
import MediaPlayer from './js/media_player';
import Playlists from './js/playlists';
import Tracklist from './js/tracklist';

import styles from './scss/application.scss';

const render = () => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  );
};

render();
