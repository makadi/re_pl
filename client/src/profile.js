import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

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
      <PageHeader>
        Zoltan Makadi <small>About</small>
      </PageHeader>
    );
  }
}
