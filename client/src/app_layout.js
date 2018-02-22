import React, { Component } from 'react';
import NavBar from './navbar';
import Profile from './profile';
import styles from './scss/app_layout.scss';

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content-container">
          <Profile />
        </div>
        
      </div>
    );
  }
}
