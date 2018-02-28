import React, { Component } from 'react';
import Layout from '../layout';
import styles from '../../styles/login.scss';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.name = null;
    this.password = null;
    this.confirmPassword = null;
    this.email = null;
  }
  render() {
    let inputs = (
      <div className="login_inputs_container">
        <input
          className="login_name"
          type="text"
          placeholder="name"
          ref={(name) => { this.name = name; }}
        />
        <input
          className="login_name"
          type="password"
          placeholder="password"
          ref={(password) => { this.password = password; }}
        />
      </div>
    )

    return (
      <div className="login-container">
        {inputs}
        <div className="container__button">
            <button
              ref={(button) => { this.loginButton = button; }}
              className="login_button"
              onClick={this.handleLogin}
            >
              LOGIN
            </button>
        </div>
      </div>
    );
  }
}
