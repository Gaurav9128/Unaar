import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import indiaFlag from "../assets/images/india-flag.png";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" className="bg-white py-2 shadow-sm">
        <Container fluid>
          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto fw-bold text-dark">
              <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
              <Nav.Link as={Link} to="/advertise">Advertise</Nav.Link>
              <Nav.Link as={Link} to="#">News & Articles</Nav.Link>
              <Nav.Link as={Link} to="#">Residence & Passports</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>

            {/* Right Side: Flag & Contact */}
            <div className="d-flex align-items-center ms-lg-3">
              <img src={indiaFlag} alt="India" height="20" />
              <span className="ms-2">+91 98765 43210</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Secondary Navigation */}
      <Navbar className="bg-light secondary-nav py-3">
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* Left Side Logo */}
          <Link to="/" className="navbar-brand fw-bold text-dark">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>

          {/* Centered Navigation Links */}
          <Nav className="fw-bold text-dark d-none d-md-flex">
            <Nav.Link href="/residential">Residential</Nav.Link>
            <Nav.Link href="/commercial">Commercial</Nav.Link>
            <Nav.Link href="/Invest">Invest</Nav.Link>
            <Nav.Link href="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
            <Nav.Link href="/partner">Partner With Us</Nav.Link>
          </Nav>

          {/* Icons Section */}
          <div className="d-flex align-items-center gap-3">
            <FaGlobe className="p-2 globe-icon" style={{ color: "black" }} />
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
      </Navbar> <br/><br/><br/><br/><br/><br/><br/><br/>

      {/* Privacy Policy Content */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <h2 className="text-center mb-4">Unaar’S PRIVACY POLICY</h2>
            {[
              { title: "§ 1. GENERAL PROVISIONS", text: "The present Privacy Policy ..." },
              { title: "§ 2. WHO ARE WE?", text: "Unaar GLOBAL REAL ESTATE is an international real estate broker ..." },
              { title: "§ 3. WHAT INFORMATION DO WE COLLECT?", text: "We may collect personal details such as name, contact information ..." },
              { title: "§ 4. WHAT IS THE PURPOSE OF PERSONAL DATA PROCESSING?", text: "We process data to assist in property searches ..." },
              { title: "§ 5. WHAT RIGHTS DO YOU HAVE?", text: "You have the right to access, correct, delete, restrict ..." },
              { title: "§ 6. WHOM CAN WE TRANSFER YOUR PERSONAL DATA TO?", text: "We may transfer your contact details to our real estate partners ..." },
              { title: "§ 7. HOW DO WE PROCESS YOUR PERSONAL DATA?", text: "We take legal, organizational, and technical measures ..." },
              { title: "§ 8. DIRECT MARKETING", text: "We may send marketing materials such as newsletters ..." },
              { title: "§ 9. HOW LONG DO WE KEEP YOUR PERSONAL DATA?", text: "We retain personal data until deletion is requested ..." },
              { title: "§ 10. OTHER PROVISIONS", text: "We do not knowingly collect data from individuals under 18 ..." },
            ].map((section, index) => (
              <div key={index}>
                <h4>{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
            <p>For further details, please contact us at <a href="mailto:info@Unaar.com">info@Unaar.com</a>.</p>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Container fluid className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default PrivacyPolicy;
