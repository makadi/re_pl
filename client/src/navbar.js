import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
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
          <Navbar.Text pullLeft>
            Signed in as: <Navbar.Link href="#">Zoltan Makadi</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullLeft>
            Have a great day!
          </Navbar.Text>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Collection
            </NavItem>
            <NavItem eventKey={2} href="#">
              Discover
            </NavItem>
            <NavItem eventKey={3} href="#">
              Settings
            </NavItem>
            <NavItem eventKey={4} href="#">
                Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
