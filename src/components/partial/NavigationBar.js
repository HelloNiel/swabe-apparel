import React from "react";
import { Link,} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Navbar.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand as={HashLink} smooth to="/#Swabe">SWABE APPAREL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 navbar-nav">
            <Nav.Link as={HashLink} smooth to="/#Swabe">Home</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#Products">Products</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#mens-latest">New Shirts</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item as={HashLink} smooth to="/shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="/pants">Pants</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="/shirts">Shirts</NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="/collection">Collection</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/location">Location</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
