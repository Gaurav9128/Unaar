import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, Container, Row, Col, Form, Button, Offcanvas } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/Hero.jpeg";
import indiaFlag from "../assets/images/india-flag.png";
import TopNavbar from "./TopNavbar";
import "./Res.css";
import TopCountries from "./TopCountries";
import CountryList from "./CountryList";
import Apartments from "./Apartments";
import Developments from "./Developments";
import Property from "./Property";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Navbar */}
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

      {/* Hero Section */}
      <header
        className="hero-section text-center font-saira text-black d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          width: "100%",
          color: "#fff"
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
                <option>India</option>
                <option>Germany</option>
                <option>Italy</option>
                <option>Cyprus</option>
                <option>Greece</option>
                <option>France</option>
                <option>Spain</option>
                <option>Spain</option>
                <option>Thailand</option>
                <option>UAE</option>
                <option>Turkey</option>
                <option>United Kingdom</option>
                <option>Montenegro</option>

              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12}>
            <Form.Group>
              <Form.Label>Property Type</Form.Label>
              <Form.Select>
                <option>All Type</option>
                <option>Apartments</option>
                <option>Houses,villas,cottages</option>
                <option>Terraced house</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12}>
            <Form.Group>
              <Form.Label>Price Range</Form.Label>
              <Form.Select>
                <option>Choose Price Range</option>
                <option>0-50,000</option>
                <option>50,000-1,00,000</option>
                <option>1,00,000-2,00,000</option>
                <option>2,00,000-3,00,000</option>
                <option>3,00,000-4,00,000</option>
                <option>4,00,000-5,00,000</option>
                <option>5,00,000-10,00,000</option>
                <option>10,00,000-20,00,000</option>
                <option>20,00,000-30,00,000</option>
                <option>30,00,000-40,00,000</option>
                <option>40,00,000-50,00,000</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3} xs={12} className="d-flex align-items-center gap-2">
            <Form.Group className="flex-grow-1">
              <Form.Label>$USD</Form.Label>
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

      {/* TopCountries Section */}
      <Container className="mt-4">
        <TopCountries />
      </Container>

      {/* CountryList Section */}
      <Container className="mt-4">
        <CountryList />
      </Container>
      {/* Apartments Section */}
      <Container className="mt-4">
        <Apartments />
      </Container>
      {/* Developments Section */}
      <Container className="mt-4">
        <Developments />
      </Container>
      {/* Property Section */}
      <Container className="mt-4">
        <Property />
      </Container>
      {/* Footer Section */}
      <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default Home;
