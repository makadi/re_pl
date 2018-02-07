'use strict';

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './scss/navbar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">FXPLYR</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Zoltan Makadi</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>Have a great day!</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
