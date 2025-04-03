import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>College Events</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <Nav.Link>Login/Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cultural-events">
              <Nav.Link>Cultural Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/technical-events">
              <Nav.Link>Technical Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link>Account Center</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/clubs">
              <Nav.Link>Clubs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
