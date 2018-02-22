import React, { Component } from 'react';
import styles from './scss/dashboard.scss';
import Layout from './layout';


export default class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <div className="dashboard-container">
          <h1>DASHBOARD</h1>
        </div>
      </Layout>
    );
  }
}
