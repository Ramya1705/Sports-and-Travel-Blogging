import React from 'react';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Sports & Travel Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/tennis'> <Nav.Link href="/">Home</Nav.Link></Link>
           
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Travel" id="basic-nav-dropdown">
              <NavDropdown.Item href="/travel/destinations">Destinations</NavDropdown.Item>
              <NavDropdown.Item href="/travel/tips">Travel Tips</NavDropdown.Item>
              <NavDropdown.Item href="/travel/guides">Guides</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sports" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sports/travel guide">Travel guide</NavDropdown.Item>
              <NavDropdown.Item href="/sports/basketball">Basketball</NavDropdown.Item>
              <NavDropdown.Item href="/sports/tennis">Tennis</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
