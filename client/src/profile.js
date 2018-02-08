import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import styles from './scss/profile.scss';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.props = {
      userExample: {
        name: 'Thisis Yourname',
        email: 'thisis-youremail@address.com',
        birth: '1989',
        info: 'Basic information from you and your activities..',
        genre: 'Ambient, Deep'
      }
    }
  }
  
  render() {
    return (
      <div className="profile-container">
        <PageHeader>
          Thisis Yourname <small>About</small>
        </PageHeader>
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
      </div>
    );
  }
}
