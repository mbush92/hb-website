
import {Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap' 
import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
             <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Hirebotics</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="/typicalApplications">
          <NavItem eventKey={1}>Typical Applications</NavItem>
        </LinkContainer>
        <LinkContainer to="/faq">
          <NavItem eventKey={2}>FAQ</NavItem>
        </LinkContainer>
        <LinkContainer to="/test">
          <NavItem eventKey={3}>Test</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        );
    }
}

export default NavBar;