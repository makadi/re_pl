import React, { Component } from 'react';
import NavBar from './navbar';
import styles from './scss/app_container.scss';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <div className="wrapper">
          <div className="text-wrap">
            <div className="text"><span>FXPLYR</span></div>
          </div>
        </div>
      </div>
    );
  }
}
