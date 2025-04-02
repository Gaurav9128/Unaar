import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar, Nav, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/Partner.jpeg";
import indiaFlag from "../assets/images/india-flag.png";
import imageIcon from '../assets/images/image.png';
import imagemen from '../assets/images/men.png';
import buildIcon from '../assets/images/build.png';
import "./Partner.css";
import Footer from "./Footer";

const Partnerwithus = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);

    return (
        <>
            {/* ✅ Top Navbar */}
            <Navbar expand="lg" className="bg-white py-0 mb-3">
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

            {/* ✅ Main Navbar */}
            <nav className="navbar navbar-expand-lg py-5 mt-3">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold">
                        <img src={logo} alt="UNAAR Logo" height="40" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item px-3"><Link to="/residential" className="nav-link">Residential</Link></li>
                            <li className="nav-item px-3"><Link to="/commercial" className="nav-link">Commercial</Link></li>
                            <li className="nav-item px-3"><Link to="/Invest" className="nav-link">Invest</Link></li>
                            <li className="nav-item px-3"><Link to="/Rent" className="nav-link">Rent</Link></li>
                            <li className="nav-item px-3"><a href="/partner" className="nav-link">Partner With Us</a></li>
                        </ul>
                    </div>
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

            {/* ✅ Hero Section */}
            <header className="hero-section text-center text-black d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${heroBg})`, height: "450px", width: "100%", color: "#fff" }}>
                <Container>
                    <h1>Property listing for developers <br /> and real estate agents</h1>
                </Container>
            </header>

            {/* ✅ Company Information Form */}
            <Container className="mt-4">
                <h4 className="text-center" style={{ color: "#C69E6A" }}>
                    Unaar partner programme for estate agents and banks
                </h4>
                <div className="border p-4 mt-3 shadow-sm bg-white rounded">
                    <h5 className="mb-3">
                        <i className="bi bi-pencil-square"></i> Information on the company
                    </h5>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}><Form.Group controlId="companyName"><Form.Label>Company name*</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                            <Col md={6}><Form.Group controlId="taxNumber"><Form.Label>Tax number*</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                        </Row>
                        <Row className="mb-3">
                            <Col md={6}><Form.Group controlId="officeCountry"><Form.Label>Main office country</Form.Label><Form.Control type="text" /></Form.Group></Col>
                            <Col md={6}><Form.Group controlId="city"><Form.Label>City*</Form.Label><Form.Control type="text" required /></Form.Group></Col>
                        </Row>
                        <Form.Group controlId="legalAddress" className="mb-3"><Form.Label>Legal address*</Form.Label><Form.Control type="text" required /></Form.Group>
                        <Form.Group controlId="specialization" className="mb-3"><Form.Label>Specialization*</Form.Label><Form.Control type="text" required /></Form.Group>
                        <Form.Group controlId="countriesRegions" className="mb-3">
                            <Form.Label>Countries and regions*</Form.Label>
                            <div className="input-group">
                                <Form.Control type="text" required />
                                <Button variant="warning" className="input-group-text">Add +</Button>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="companyProfile" className="mb-3"><Form.Label>Company's profile*</Form.Label><Form.Control as="textarea" rows={3} required /></Form.Group>
                    </Form>
                </div>
            </Container>
            <div className="container py-4">
                {/* License Section */}
                <div className="mb-4">
                    <h5>
                        <img src={imageIcon} alt="License Icon" height="50" className="me-2" />
                        Licence
                    </h5>
                    <p>If you have an agent's license, upload a scan or photo of it in high resolution</p>
                    <button className="btn btn-outline-primary">Attach a document</button>
                </div>

                {/* Incorporation Certificate Section */}
                <div className="mb-4">
                    <h5>
                        <img src={imageIcon} alt="License Icon" height="50" className="me-2" />
                        Incorporation Certificate
                    </h5>
                    <p>Please upload a scanned image or a picture of the incorporation certificate, if available</p>
                    <button className="btn btn-outline-primary">Attach a document</button>
                </div>

                {/* Representative Section */}
                <div className="mb-4">
                    <h5>
                        <img src={imagemen} alt="License Icon" height="50" className="me-2" />
                        <i className="bi bi-person"></i> Representative
                    </h5>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Name*" required />
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name*" required />
                        </div>
                        <div className="col-md-6">
                            <input type="tel" className="form-control" placeholder="Phone*" required />
                        </div>
                        <div className="col-md-6">
                            <input type="tel" className="form-control" placeholder="Other Phone*" required />
                        </div>
                        <div className="col-md-12">
                            <input type="email" className="form-control" placeholder="Email*" required />
                        </div>
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="Title*" required />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <h5>
                    <img src={buildIcon} alt="License Icon" height="50" className="me-2" />
                    <i className="bi bi-building"></i> Listings
                </h5>

                <div className="row mb-3">
                    <div className="col-md-3">
                        <label className="form-label">Price segment, €</label>
                        <input type="text" className="form-control" placeholder="From*" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">&nbsp;</label>
                        <input type="text" className="form-control" placeholder="To*" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Number of properties</label>
                        <input type="text" className="form-control" placeholder="In the base*" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">&nbsp;</label>
                        <input type="text" className="form-control" placeholder="In the base*" />
                    </div>
                </div>

                <h6>Types of properties</h6>
                <p className="fw-bold">Residential</p>
                <div className="mb-2">
                    <button className="btn btn-outline-secondary me-2">Apartments</button>
                    <button className="btn btn-outline-secondary">Houses, villas, cottages</button>
                </div>
                <p className="fw-bold">Commercial property</p>
                <div className="mb-3">
                    <button className="btn btn-outline-secondary me-2">Residential/rentals</button>
                    <button className="btn btn-outline-secondary me-2">Industrial real estate</button>
                    <button className="btn btn-outline-secondary me-2">Retail property</button>
                    <button className="btn btn-outline-secondary">Office property</button>
                </div>

                <h6>
                    <img src={buildIcon} alt="License Icon" height="50" className="me-2" />
                    <i className="bi bi-paperclip"></i> Attach Images
                </h6>
                <p>Please upload image of Property (Min. 3)</p>
                <input type="file" className="form-control mb-3" multiple />
                <button className="btn btn-outline-primary">Upload</button>

                <div className="mt-4">
                    <button className="btn btn-warning text-white w-80">Send a request</button>
                </div>
            </div>

            {/* Footer */}
      <Container className="mt-4">
        <Footer />
      </Container>
        </>
    );
};

export default Partnerwithus;
