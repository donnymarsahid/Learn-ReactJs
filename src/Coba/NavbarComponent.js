import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <div class="container">
          <a href="#" class="brandNama">
            <ul style={{ color: 'white' }}>
              <li>D</li>
              <li>o</li>
              <li>n</li>
              <li>n</li>
              <li>y</li>
            </ul>
          </a>
          <Nav className="ml-auto">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
