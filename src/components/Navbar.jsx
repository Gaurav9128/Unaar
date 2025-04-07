import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";

// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";

const Navbar = () => {
  return (
    <>
      <Navbar expand="lg" className="py-4 mt-5 secondary-nav bg-light" sticky="top">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Navbar.Brand>

          {/* Toggle Button (Visible on Mobile) */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              {/* Main Nav Links */}
              <Nav className="justify-content-center flex-grow-1 pe-3 text-center custom-nav-links">
                <Nav.Link as={Link} to="/residential">Residential</Nav.Link>
                <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>
                <Nav.Link as={Link} to="/Invest">Invest</Nav.Link>
                <Nav.Link as={Link} to="/Rent">Rent</Nav.Link>
                <Nav.Link as={Link} to="/partner">Partner With Us</Nav.Link>
              </Nav>

              {/* Icons */}
              <div className="d-flex align-items-center gap-3">
                <div className="p-2 globe-icon" style={{ color: "white" }}>
                  <FaGlobe />
                </div>
                <div
                  className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon"
                  style={{ color: "white", borderColor: "white" }}
                >
                  <FaBars />
                  <div className="border rounded-circle p-2 globe-icon" style={{ color: "white", borderColor: "white" }}>
                    <FaUser />
                  </div>
                </div>
              </div>

            </Offcanvas.Body>
          </Navbar.Offcanvas>


        </Container>
      </Navbar>
    </>
  );
};

export default Navbar;
