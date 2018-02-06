'use strict';

import React, { Component } from 'react';
import NavBar from './navbar';

export default class AppContainer extends Component {
  render() {
    const layout = (
      <div className="wrapper">
        {/* <div className="text-wrap">
          <div className="text"><span>FXPLYR</span></div>
        </div> */}
        {/* <div className="header">
          <div className="burger-wrapper">
            <div className="burger"></div>
          </div>
        </div> */}
      </div>
    )

    return (
      <div className="main-container">
        <NavBar />
        <div className="content">
          {layout}
        </div>
      </div>
    );
  }
}
