import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Rent.css";
import TopCountriesCards from "./TopCountries";
import FeaturedListings from "../sections/FeaturedListings";
import Footer from "./Footer";

// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";
import background from "../assets/images/background.jpeg";

const Rent = () => {
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
                            <Nav className="me-auto fw-bold text-dark">  {/* fw-bold = bold, text-dark = black */}
                                <Nav.Link href="/careers">Careers</Nav.Link>
                                <Nav.Link href="/advertise">Advertise</Nav.Link>
                                <Nav.Link href="#">News & Articles</Nav.Link>
                                <Nav.Link href="#">Residence & Passports</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
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
                </Container>
            </Navbar>



            {/* Hero Section */}
            <header
                className="hero-section text-center font-saira text-black d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${background})`,
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

            {/* Country List*/}
            <Container className="mt-4">
                <TopCountriesCards />
            </Container>

            {/* FeaturedListings */}
            <Container className="mt-4">
                <FeaturedListings />
            </Container>

            {/* Footer */}
            <Container className="mt-4">
                <Footer />
            </Container>

        </>
    );
};

export default Rent;
