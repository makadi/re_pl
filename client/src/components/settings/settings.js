import React, { Component } from 'react';
import styles from '../../styles/settings.scss';
import Layout from '../layout';


export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const userExample = ({
      fullname: 'Zoltan Makadi',
      email: {
        primary: 'primary-email@domain.com',
        secondary: 'secondary-email@domain.com'
      },
      birth: '1989',
      genre: 'Ambient, Deep',
      info: 'Basic information about me and my activities..'
    })
    
    return (
      <Layout>
        <div className="settings-container">
          <h1>SETTINGS</h1>
          <div className="info-container">
            <div className="info-head">E-mail addresses</div>
            <div className="info-row email">{userExample.email.primary} (Primary)</div>
            <div className="info-row email">{userExample.email.secondary}</div>
            <button className="add-email-button">Add an e-mail address</button>
            <div className="info-head">Password</div>
            <button className="add-email-button">Change password</button>
            <div className="info-head">Basic Information</div>
            <div className="info-row">Birth date Gender</div>
            <div className="info-head">Favorite genres</div>
            <div className="info-row">{userExample.genre}</div>
            <div className="info-head">About you</div>
            <div className="info-row">{userExample.info}</div>
          </div>
        </div>
      </Layout>
    );
  }
}

