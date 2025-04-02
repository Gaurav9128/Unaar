import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import GoldenVisaCard from "../sections/GoldenVisaCard";
import SpendingMap from "../sections/SpendingMap";
import Equity from "../sections/Equity";
import TopCountries from "../sections/Top Countries";
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
          <Link to="/" className="navbar-brand fw-bold">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>

          {/* Centered Navigation Links */}
          <Nav className="d-flex justify-content-center align-items-center w-100 nav-links">
            <Nav.Link href="/residential">Residential</Nav.Link>
            <Nav.Link href="/commercial">Commercial</Nav.Link>
            <Nav.Link href="/Invest">Invest</Nav.Link>
            <Nav.Link href="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
            <Nav.Link href="/partner">Partner With Us</Nav.Link>

          </Nav>
          {/* Icons Section */}
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 globe-icon" style={{ color: "white" }}>
              <FaGlobe />
            </div>
            <div
              className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon"
              style={{ color: "white", border: "2px solid white" }}
            >
              <FaBars />
              <div
                className="border rounded-circle p-2 globe-icon"
                style={{ color: "white", border: "2px solid white" }}
              >
                <FaUser />
              </div>

            </div>
          </div>

        </Container>
      </Navbar>



      {/* Hero Section */}
      <header
        className="hero-section text-center font-saira text-black d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          height: "400px",
          width: "100%",
          color: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container
          style={{
            textAlign: "center",
            marginLeft: "60px",
            marginTop: "50px",
            color: "white", // Set text color to white
          }}
        >
          <h1>Helping you find the right <br /> property across the globe</h1>
          <p>Help with property selection · Audit and due diligence · Transaction support</p>
        </Container>





      </header>

      {/* Search Filter */}
      <Container className="search-box font-serif shadow-lg p-4 rounded mt-10">
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
