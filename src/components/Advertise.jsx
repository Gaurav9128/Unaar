import React, { useState } from "react";
import { Container, Row, Col, Nav, Form, Button, Navbar,Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Advertise.css";
import TopNavbar from "./TopNavbar";
import { FaSearch } from "react-icons/fa";
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

            {/* Hero Section */}
            <header
                className="hero-section font-saira text-black d-flex"
                style={{
                    backgroundImage: `url(${background})`,
                    height: "300px",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Container>
                    <h1 style={{ marginTop: "100px" }}>
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
