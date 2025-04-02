import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap"; // ✅ Imported Navbar & Nav
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/Hes.jpeg";
import indiaFlag from "../assets/images/india-flag.png"; // ✅ Ensure the flag image exists
import "./Commercial.css";
import CategoryCards from "../sections/CategoryCards";
import CountryList from "./CountryList";
import InvestmentOpportunity from "../sections/InvestmentOpportunity";
import HowItWorks from "../sections/HowItWorks";
import Apartments from "./Apartments";
import Developments from "./Developments";
import Property from "./Property";
import Footer from "./Footer";

const Commercial = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <Navbar expand="lg" className="bg-white py-2 mb-3"> {/* Added mb-3 for gap */}
        <Container>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <div className="nav-wrapper">
              <Nav className="me-auto fw-bold text-dark">
                <Nav.Link href="/careers">Careers</Nav.Link>
                <Nav.Link href="/advertise">Advertise</Nav.Link>
                <Nav.Link href="#">News & Articles</Nav.Link>
                <Nav.Link href="#">Residence & Passports</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center ms-3">
                <img src={indiaFlag} alt="India" height="20" />
                <span className="ms-2">+91 98765 43210</span>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg py-3 mt-5"> {/* Added mt-3 for gap */}
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item px-3"><Link to="/residential" className="nav-link">Residential</Link></li>
              <li className="nav-item px-3"><Link to="/commercial" className="nav-link">Commercial</Link></li>
              <li className="nav-item px-3"><Link to="/Invest" className="nav-link">Invest</Link></li>
              <li className="nav-item px-3"><a href="/Rent" className="nav-link">Rent</a></li>
              <li className="nav-item px-3"><a href="/partner" className="nav-link">Partner With Us</a></li>
            </ul>
          </div>

          {/* Icons Section */}
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 globe-icon">
              <FaGlobe />
            </div>
            <div className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon">
              <FaBars />
              <div className="border rounded-circle p-2 globe-icon">
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="hero-section text-center font-saira text-black d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
          color: "#fff",
          filter: "brightness(0.5)"
        }}
      >
        <Container>
          <h1>Property For Sale Overseas</h1>
          <p>In Total 165,677 Listings</p>
        </Container>
      </header>

      {/* Search Filter */}
      <Container className="search-box font-serif shadow-lg p-4 rounded mt-4">
        <Row className="g-3">
          <Col md={3} xs={12}>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Select>
                <option>Select Your City</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12}>
            <Form.Group>
              <Form.Label>Property Type</Form.Label>
              <Form.Select>
                <option>All Type</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12}>
            <Form.Group>
              <Form.Label>Price Range</Form.Label>
              <Form.Select>
                <option>Choose Price Range</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12} className="d-flex align-items-center gap-2">
            <Form.Group className="flex-grow-1">
              <Form.Label>More</Form.Label>
              <Form.Select>
                <option>Select</option>
              </Form.Select>
            </Form.Group>
            <Button className="search-btn">
              <FaSearch />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Sections */}
      <Container className="mt-4">
        <CategoryCards />
      </Container>

      <Container className="mt-4">
        <CountryList />
      </Container>

      <Container className="mt-4">
        <InvestmentOpportunity />
      </Container>

      <Container className="mt-4">
        <HowItWorks />
      </Container>

      <Container className="mt-4">
        <Apartments />
      </Container>

      <Container className="mt-4">
        <Developments />
      </Container>

      <Container className="mt-4">
        <Property />
      </Container>

      {/* Footer */}
      <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default Commercial;
