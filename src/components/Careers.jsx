import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form, Button,Offcanvas } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser, FaFileUpload } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Careers.css";
import TopNavbar from "./TopNavbar";
// ✅ Images Import
import logo from "../assets/images/logo.png";
import indiaFlag from "../assets/images/india-flag.png";
import background from "../assets/images/background.jpeg";
import Footer from "./Footer";

const Careers = () => {
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
                className="hero-section text-center font-saira text-black d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    height: "350px",
                    width: "100%",
                    color: "#fff",
                }}
            >
                <Container>
                    <h1 style={{ marginTop: "50px" }}>
                        Work and Grow your<br />
                        career with Unaar
                    </h1>
                </Container>
            </header>

            {/* Career Form Section */}
            <Container className="my-5">
                <h3 className="text-warning" style={{ fontSize: "20px" }}>
                    Tranio Partner Programme for Estate Agents and Banks
                </h3>

                <div className="border p-4 rounded shadow-sm bg-white">
                    <h5 className="mb-3"><FaUser className="me-2" /> Details</h5>

                    <Form>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your first name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Last Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Phone*</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter your phone number" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Role*</Form.Label>
                                    <Form.Control type="text" placeholder="Your role" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Experience*</Form.Label>
                                    <Form.Control type="number" placeholder="Years of experience" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Country*</Form.Label>
                                    <Form.Control type="text" placeholder="Your country" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Desired Location*</Form.Label>
                                    <Form.Control type="text" placeholder="Preferred location" required />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Why do you want to work with Unaar?*</Form.Label>
                                    <Form.Control as="textarea" rows={3} required />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Resume Upload Section */}
                        <div className="mt-4">
                            <h5><FaFileUpload className="me-2" /> CS/Resume</h5>
                            <p className="text-muted">Please upload a PDF of your resume (Max. 3MB)</p>
                            <Form.Group>
                                <Form.Control type="file" accept="application/pdf" />
                            </Form.Group>
                        </div>

                        {/* Submit Button */}
                        <Button className="mt-4 w-70 btn-warning" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>

            {/* Footer */}
            <Container className="mt-4">
                <Footer />
            </Container>
        </>
    );
};

export default Careers;
