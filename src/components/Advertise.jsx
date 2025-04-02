import React, { useState } from "react";
import { Container, Row, Col, Nav, Form, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Advertise.css";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";
import background from "../assets/images/background.jpeg";
import Footer from "./Footer";


const Advertise = () => {
    const [activeCategory, setActiveCategory] = useState("Category 1");

    return (
        <>
            {/* Top Navbar */}
            <Navbar expand="lg" className="bg-white py-2">
                <Container>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <div className="nav-wrapper">
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
                    <Link to="/" className="navbar-brand fw-bold">
                        <img src={logo} alt="UNAAR Logo" height="40" />
                    </Link>

                    <Nav className="d-flex justify-content-center align-items-center w-100 nav-links">
                        <Nav.Link href="/residential">Residential</Nav.Link>
                        <Nav.Link href="/commercial">Commercial</Nav.Link>
                        <Nav.Link href="/Invest">Invest</Nav.Link>
                        <Nav.Link href="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
                        <Nav.Link href="#">Partner With Us</Nav.Link>
                    </Nav>

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
                className="hero-section font-saira text-black d-flex"
                style={{
                    backgroundImage: `url(${background})`,
                    height: "200px",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Container>
                    <h1 style={{ marginTop: "90px" }}>
                        Promoting your business with Us
                    </h1>
                </Container>
            </header>

            <Container className="mt-5">
                {/* Form Section */}
                <Form>
                    <h3>Information on the Company</h3>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Company Name *" required /></Col>
                        <Col md={5}><Form.Control placeholder="Tax Number *" required /></Col>
                    </Row>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Main Office Country" /></Col>
                        <Col md={5}><Form.Control placeholder="City" /></Col>
                    </Row>
                    <Row>
                        <Col md={5}> <Form.Control placeholder="Legal Address *" required className="mt-2" /></Col>
                        <Col md={5}> <Form.Control placeholder="Specialization *" required className="mt-2" /></Col>
                        <Col md={5}> <Form.Control placeholder="Countries and Regions *" required className="mt-2" /></Col>
                        <Col md={5}> <Form.Control as="textarea" rows={2} placeholder="Company's Profile *" required className="mt-2" /></Col>
                    </Row>

                    <h3 className="mt-4">Representative</h3>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Name *" required /></Col>
                        <Col md={5}><Form.Control placeholder="Last Name *" required /></Col>
                    </Row>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Phone *" required /></Col>
                        <Col md={5}><Form.Control placeholder="Other Phone" /></Col>
                    </Row>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Email *" required className="mt-2" /></Col>
                    </Row>
                    <Row>
                        <Col md={5}><Form.Control placeholder="Title *" required className="mt-2" /></Col>
                    </Row>

                    <h3 className="mt-4">Ad Category</h3>
                    <Nav variant="pill" className="mb-4 d-flex flex-wrap gap-3">
                        {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map((category, index) => (
                            <Nav.Item key={index} className="rounded-pill">
                                <Nav.Link
                                    className={`category-tab ${activeCategory === category ? "active" : ""}`}
                                    onClick={() => setActiveCategory(category)}
                                    style={{ color: "black", border: "2px solid" }}
                                >
                                    {category}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    <Button variant="primary" type="submit">Send a Request</Button>
                </Form>
            </Container>

            {/* Footer */}
            <Container className="mt-4">
                <Footer />
            </Container>
        </>
    );
};

export default Advertise;
