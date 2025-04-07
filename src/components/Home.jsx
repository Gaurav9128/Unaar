import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Button, Offcanvas } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import TopNavbar from "./TopNavbar";

import GoldenVisaCard from "../sections/GoldenVisaCard";
import SpendingMap from "../sections/SpendingMap";
import Equity from "../sections/Equity";
import TopCountries from "../sections/TopCountries";
import CountryList from "./CountryList";
import InvestorSection from "../sections/InvestorSection";
import NewsSection from "../sections/NewsSection";
import RecentArticles from "../sections/RecentArticles";
import InvestmentOpportunity from "../sections/InvestmentOpportunity";
import CustomerReviews from "../sections/CustomerReviews";
import AgentSection from "../sections/AgentSection";
import ListingOptions from "../sections/ListingOptions";
import TrustSection from "../sections/TrustedCompanies";
import Footer from "./Footer";

// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";
import background from "../assets/images/Home.jpeg";


const Home = () => {
  return (
    <>
      {/* ✅ Top Navbar Added Here */}
      
      <TopNavbar />

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          width: "100%",
          color: "#fff"
        }}
      >
        <Container style={{ color: "white" }}>
          <h1>Helping you find right <br /> property across globe</h1>
          <p>Help with property selection . Audit and due diligence . Transaction support</p>
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

      {/* GoldenVisaCard*/}
      <Container className="mt-4">
        <GoldenVisaCard />
      </Container>

      {/* Map */}
      <Container className="mt-4">
        <SpendingMap />
      </Container>

      {/* Equity */}
      <Container className="mt-4">
        <Equity />
      </Container>

      {/* Top Country list */}
      <Container className="mt-4">
        <TopCountries />
      </Container>

      {/* Top map list */}
      <Container className="mt-4">
        <CountryList />
      </Container>

      {/* InvestorSection */}
      <Container className="mt-4">
        <InvestorSection />
      </Container>

      {/* NewsSection */}
      <Container className="mt-4">
        <NewsSection />
      </Container>

      {/* RecentArticles */}
      <Container className="mt-4">
        <RecentArticles />
      </Container>

      {/* InvestmentOpportunity */}
      <Container className="mt-4">
        <InvestmentOpportunity />
      </Container>

      {/* CustomerReviews */}
      <Container className="mt-4">
        <CustomerReviews />
      </Container>

      {/* AgentSection */}
      <Container className="mt-4">
        <AgentSection />
      </Container>

      {/* ListingOptions */}
      <Container className="mt-4">
        <ListingOptions />
      </Container>

      {/* TrustSection */}
      <Container className="mt-4">
        <TrustSection />
      </Container>


      {/* Footer */}
      <Container className="mt-4">
        <Footer />
      </Container>

    </>
  );
};

export default Home;
