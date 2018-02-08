import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <PageHeader>
        Zoltan Makadi <small>About</small>
      </PageHeader>
    );
  }
}
