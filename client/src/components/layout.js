import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar/navbar';
import styles from '../styles/layout.scss';


export default class Layout extends React.Component {
  componentWillMount() {
  }

  render() {
    console.log(this.props);
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
