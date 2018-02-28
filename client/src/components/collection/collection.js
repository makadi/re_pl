import React, { Component } from 'react';
import styles from '../../styles/collection.scss';
import Layout from '../layout';
import { getPlaylistData, createPlaylistElements } from './getPlaylists';
import { getTracklistData } from './getTracks';

import { getPlaylists, getTracklist } from '../../ajax';


export default class Collection extends Component {
  constructor(props) {
    super(props);
    getPlaylistData();
    getTracklistData();
  }

  render() {
    return (
      <Layout>
        <div className="collection-container">
          <h1>COLLECTION</h1>
          <div className="audio-content-container">
            <ul className="playlists-container">Playlists</ul>
            <ul className="tracks-container">Tracklist</ul>
          </div>
        </div>
      </Layout>
    );
  }
}
