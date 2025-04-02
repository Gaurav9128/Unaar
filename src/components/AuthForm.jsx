import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Button } from "react-bootstrap";
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
    <Navbar expand="lg" className="bg-white py-2">
        <Container>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="navbarNav">
            {/* Wrapper div with white background & border */}
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
          </Navbar.Collapse>


        </Container>
      </Navbar>


      {/* Secondary Navigation */}
      <Navbar className="bg-light secondary-nav py-5 mt-3">
        <Container className="d-flex align-items-center">
          {/* Left Side Logo */}
          <Link to="/" className="navbar-brand fw-bold text-dark">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>

          {/* Centered Navigation Links */}
          <Nav className="fw-bold text-dark">
            <Nav.Link href="/residential">Residential</Nav.Link>
            <Nav.Link href="/commercial">Commercial</Nav.Link>
            <Nav.Link href="/Invest">Invest</Nav.Link>
            <Nav.Link href="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
            <Nav.Link href="/partner">Partner With Us</Nav.Link>

          </Nav>
          {/* Icons Section */}
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 globe-icon" style={{ color: "black" }}>
              <FaGlobe />
            </div>
            <div
              className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon"
              style={{ color: "black", border: "2px solid black" }}
            >
              <FaBars />
              <div
                className="border rounded-circle p-2 globe-icon"
                style={{ color: "black", border: "2px solid black" }}
              >
                <FaUser />
              </div>

            </div>
          </div>

        </Container>
      </Navbar> <br/><br/><br/><br/> <br/><br/><br/>
   
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
