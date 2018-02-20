import React, { Component } from 'react';
import NavBar from './navbar';
import Profile from './profile';
import styles from './scss/app_container.scss';

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content-container">
          <Profile />
        {/* <div className="main-container">
          <div className="wrapper">
            <div className="text-wrap">
              <div className="text"><span>FXPLYR</span></div>
            </div>
          </div>
        </div> */}
        </div>
        
      </div>
    );
  }
}
