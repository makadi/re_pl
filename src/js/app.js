'use strict';

import React, { Component } from 'react';

export default class AppLayout extends Component {

  render() {
    const layout = (
      <div className="wrapper">
        <div className="line"></div>
        <div className="text-wrap">
          <div className="text"><span>FXPLYR</span></div>
        </div>
        <div className="header">
          <div className="burger-wrapper">
            <div className="burger"></div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        {layout}
      </div>
    );
  }
}
