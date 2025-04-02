import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";

// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";

const CustomNavbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <BootstrapNavbar expand="lg" className="bg-white py-2">
        <Container>
          {/* Toggle Button for Mobile View */}
          <BootstrapNavbar.Toggle aria-controls="navbarNav" />

          {/* Navigation Links */}
          <BootstrapNavbar.Collapse id="navbarNav">
            <div className="nav-wrapper">
              {/* Navigation Links (Left Side) */}
              <Nav className="me-auto fw-bold text-dark">
                <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
                <Nav.Link as={Link} to="/advertise">Advertise</Nav.Link>
                <Nav.Link as={Link} to="#">News & Articles</Nav.Link>
                <Nav.Link as={Link} to="#">Residence & Passports</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>

              {/* Right Side: Flag & Contact */}
              <div className="d-flex align-items-center ms-3">
                <img src={indiaFlag} alt="India" height="20" />
                <span className="ms-2">+91 98765 43210</span>
              </div>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Secondary Navigation */}
      <BootstrapNavbar className="bg-light secondary-nav py-5 mt-3">
        <Container className="d-flex align-items-center">
          {/* Left Side Logo */}
          <Link to="/" className="navbar-brand fw-bold">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>

          {/* Centered Navigation Links */}
          <Nav className="d-flex justify-content-center align-items-center w-100 nav-links">
            <Nav.Link as={Link} to="/residential">Residential</Nav.Link>
            <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>
            <Nav.Link as={Link} to="/Invest">Invest</Nav.Link>
            <Nav.Link as={Link} to="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
            <Nav.Link as={Link} to="/partner">Partner With Us</Nav.Link>
          </Nav>

          {/* Icons Section */}
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 globe-icon" style={{ color: "white" }}>
              <FaGlobe />
            </div>
            <div className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon" style={{ color: "white", border: "2px solid white" }}>
              <FaBars />
              <div className="border rounded-circle p-2 globe-icon" style={{ color: "white", border: "2px solid white" }}>
                <FaUser />
              </div>
            </div>
          </div>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default CustomNavbar;
