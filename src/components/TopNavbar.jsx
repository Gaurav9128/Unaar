import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/images/india-flag.png";
import "./TopNavbar.css"; // Import your CSS file for styling

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="py-3 bg-light text-dark">
      <Container>
        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 d-lg-none" />

        {/* Sidebar for Mobile View */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="d-lg-none" // Hide on large screens
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="fw-bold w-100 text-navbar flex-column">
              <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
              <Nav.Link as={Link} to="/advertise">Advertise</Nav.Link>
              <Nav.Link href="#">News & Articles</Nav.Link>
              <Nav.Link href="#">Residence & Passports</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            {/* Right Side: Flag & Contact */}
    <div className="d-flex align-items-center ms-3 text-navbar">
      <img src={indiaFlag} alt="India" height="20" />
      <span className="ms-2 text-nowrap">+91 98765 43210</span>
    </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Collapse id="navbarNav" className="d-none d-lg-block">
  <div className="navbar-nav-container">
    <Nav className="fw-bold text-navbar d-flex align-items-center">
      <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
      <Nav.Link as={Link} to="/advertise">Advertise</Nav.Link>
      <Nav.Link href="#">News & Articles</Nav.Link>
      <Nav.Link href="#">Residence & Passports</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    <div className="d-flex align-items-center ms-3 text-navbar">
      <img src={indiaFlag} alt="India" height="20" />
      <span className="ms-2 text-nowrap">+91 98765 43210</span>
    </div>
   </div> 


    
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default TopNavbar;
