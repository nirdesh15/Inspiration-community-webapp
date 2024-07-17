import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png" // Replace with the path to your first logo image
            className="logo-img"
            alt="Logo"
          />
        </Navbar.Brand>
       
        <h6>Inspiration Community Care</h6>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link-bold">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link-bold">About Us</Nav.Link>
          <Nav.Link as={Link} to="/service" className="nav-link-bold">Services</Nav.Link>
          
          
           
         <Link to='/contact' ><Button variant="outline-primary" className="contact-button">Contact us</Button></Link>
          <Button variant="outline-success" className="email-button">Email</Button>
          <Navbar.Brand className="center-logo">
          <img
            src="/NDIS-landscape.png" // Replace with the path to your second logo image
            className="logo-img"
            alt="Another Logo"
          />
        </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
