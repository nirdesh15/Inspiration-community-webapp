import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './NavBar.scss';

function CustomNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active-link' : '');
  const isContactActive = (path) => (location.pathname === path ? 'active-contact' : '');

  // Toggle the body's scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [open]);

  return (
    <Navbar className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.png" className="img-1" alt="Logo" />
        </Navbar.Brand>
        <h6 className="title">
          <img src="/NDIS-landscape.png" className="img-2" alt="Logo" />
          <span>Inspiration Community Care</span>
        </h6>
        <Nav className="nav-items">
          <Nav.Link as={Link} to="/" className={`nav-link-bold ${isActive('/')}`}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={`nav-link-bold ${isActive('/about')}`}>About Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown" className="dropdown">
          
                          <NavDropdown.Item as={Link} to="/service" className={`nav-dropdown ${isActive('/service')}`}>
                Daily Personal Activities
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-2" className={`nav-dropdown ${isActive('/service-2')}`}>
                Household Task
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-3" className={`nav-dropdown ${isActive('/service-3')}`}>
                Travel and Transport Assistance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-4" className={`nav-dropdown ${isActive('/service-4')}`}>
                Community Nursing Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-5" className={`nav-dropdown ${isActive('/service-5')}`}>
                Community Participation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-6" className={`nav-dropdown ${isActive('/service-6')}`}>
                Assistance for Shared Living Accommodation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-7" className={`nav-dropdown ${isActive('/service-7')}`}>
                Specialised Disability Assistance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-8" className={`nav-dropdown ${isActive('/service-8')}`}>
                24/7 Support Service
              </NavDropdown.Item>
          </NavDropdown>
          <Link to="/contact">
            <Button variant="outline-primary" className={`contact-button ${isContactActive('/contact')}`}>Contact Us</Button>
          </Link>
        </Nav>
      </Container>
      <div className="menuIcon" onClick={() => setOpen(!open)}>
        <img src="/menu.png" alt="Menu Icon" />
      </div>
      <div className={`menu ${open ? 'active' : ''}`}>
        <Link to="/" className={isActive('/')} onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" className={isActive('/about')} onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" className={isContactActive('/contact')} onClick={() => setOpen(false)}>Contact</Link>
        <div className="dropdown">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className={`dropdownButton ${dropdownOpen ? 'active' : ''}`}
          >
            Services
          </button>
          <div className={`dropdownContent ${dropdownOpen ? 'show' : ''}`}>
          
            <Link to="/service" onClick={() => { setOpen(false); setDropdownOpen(false); }}>1. Daily Personal Activities</Link>
            <Link to="/service-2" onClick={() => { setOpen(false); setDropdownOpen(false); }}>2. Household Task</Link>
            <Link to="/service-3" onClick={() => { setOpen(false); setDropdownOpen(false); }}>3. Travel and Transport Assistance</Link>
            <Link to="/service-4" onClick={() => { setOpen(false); setDropdownOpen(false); }}>4. Community Nursing Services</Link>
            <Link to="/service-5" onClick={() => { setOpen(false); setDropdownOpen(false); }}>5. Community Participation</Link>
            <Link to="/service-6" onClick={() => { setOpen(false); setDropdownOpen(false); }}>6. Assistance for Shared Living Accommodation</Link>
            <Link to="/service-7" onClick={() => { setOpen(false); setDropdownOpen(false); }}>7. Specialised Disability Assistance</Link>
            <Link to="/service-8" onClick={() => { setOpen(false); setDropdownOpen(false); }}>8. 24/7 Support Service</Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
