import React, { Component } from 'react';
import styles from '../../styles/collection.scss';
import Layout from '../layout';
import { getPlaylistData, createPlaylistElements } from './getCollection';
import { getPlaylists } from '../../ajax';


export default class Collection extends Component {
  constructor(props) {
    super(props);
    getPlaylistData();
  }

  render() {
    return (
      <Layout>
        <div className="collection-container">
          <h1>COLLECTION</h1>
          <ul className="playlists-container">Playlists</ul>
          <ul className="tracklist-container">Tracklist</ul>
        </div>
      </Layout>
    );
  }
}
