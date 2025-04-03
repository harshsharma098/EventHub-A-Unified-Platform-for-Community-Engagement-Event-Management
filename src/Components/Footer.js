import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-3">
      <Container>
        <p className="mb-0 text-center">© {new Date().getFullYear()} College Events. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
