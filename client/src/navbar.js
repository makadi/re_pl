import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import styles from './scss/navbar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleDiscover = this.handleDiscover.bind(this);
    this.handleCollection = this.handleCollection.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleCollection() {
    console.log('handleCollection');
  }

  handleDiscover() {
    console.log('handleDiscover');
  }

  handleSettings() {
    console.log('handleSettings');
  }

  handleLogout() {
    console.log('handleLogout');
  }

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="./discover">FXPLYR</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullLeft>
            Signed in as: <Navbar.Link onClick={this.handleSettings} href="./settings">Zoltan Makadi</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullLeft>
            Have a great day!
          </Navbar.Text>
          <Nav pullRight>
            <NavItem onClick={this.handleCollection} eventKey={1} href="./collection">
              Collection
            </NavItem>
            <NavItem onClick={this.handleDiscover} eventKey={2} href="./discover">
              Discover
            </NavItem>
            <NavItem onClick={this.onMenuClick} eventKey={3} href="./settings">
              Settings
            </NavItem>
            <NavItem onClick={this.handleLogout} eventKey={4} href="#">
                Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

