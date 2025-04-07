import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import { Navbar, Nav, Container, Row, Col, Form, Button, Offcanvas} from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./ContactForm.css";
import indiaFlag from "../assets/images/india-flag.png";
import Footer from "./Footer";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
    
    {/* Top Navbar */}
    
    <TopNavbar />

      {/* Secondary Navigation */}
      <Navbar expand="lg" className="py-5 mt-7 secondary-nav bg-light" sticky="top">
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
              <Nav className="justify-content-center flex-grow-1 pe-3 text-center text-light custom-nav-links">
                <Nav.Link as={Link} to="/residential">Residential</Nav.Link>
                <Nav.Link as={Link} to="/commercial">Commercial</Nav.Link>
                <Nav.Link as={Link} to="/Invest">Invest</Nav.Link>
                <Nav.Link as={Link} to="/Rent">Rent</Nav.Link>
                <Nav.Link as={Link} to="/partner">Partner With Us</Nav.Link>
              </Nav>

              <div className="d-flex align-items-center gap-3">
                <div className="p-2 globe-icon icon-container">
                  <FaGlobe />
                </div>
                <div className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon icon-container">
                  <FaBars />
                  <div className="border rounded-circle p-2 globe-icon icon-container">
                    <FaUser />
                  </div>
                </div>
              </div>


            </Offcanvas.Body>
          </Navbar.Offcanvas>


        </Container>
      </Navbar>
       <br/><br/><br/><br/> <br/><br/><br/>
   
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div 
        className="card p-4 shadow-lg rounded border-0" 
        style={{ maxWidth: "400px", width: "100%", background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white" }}
      >
        <h3 className="text-center mb-3 fw-bold">{isRegister ? "Create Account" : "Welcome Back"}</h3>
        <form>
          {isRegister && (
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input type="text" className="form-control border-0" placeholder="Enter your name" />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input type="email" className="form-control border-0" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control border-0" placeholder="Enter your password" />
          </div>
          {isRegister && (
            <div className="mb-3">
              <label className="form-label fw-bold">Confirm Password</label>
              <input type="password" className="form-control border-0" placeholder="Confirm your password" />
            </div>
          )}
          <button type="submit" className="btn btn-light w-100 fw-bold text-primary">
            {isRegister ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center mt-3 fw-bold">
          {isRegister ? "Already have an account?" : "Don't have an account?"} 
          <span
            className="text-warning fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? " Sign In" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
    
    {/* Footer */}
    <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default AuthForm;
