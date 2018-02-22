import React, { Component } from 'react';
import NavBar from './navbar';
import Settings from './settings';
import styles from './scss/layout.scss';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
