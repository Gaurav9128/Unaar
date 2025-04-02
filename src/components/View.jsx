import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Navbar, Nav, Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch, FaStar, FaGlobe, FaBars, FaUser, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FaSwimmingPool, FaSpa, FaUtensils, FaDumbbell, FaGlassMartiniAlt, FaWifi, FaCoffee } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/Hero.jpeg";
import indiaFlag from "../assets/images/india-flag.png";
import mapImage from "../assets/images/MAP1.png";
import expertImage from "../assets/images/Epert.png";
import Footer from "./Footer";

// Import images from assets folder
import img1 from "../assets/images/room1.jpeg";
import img2 from "../assets/images/room2.jpeg";
import img3 from "../assets/images/room3.jpeg";
import img4 from "../assets/images/room4.jpeg";
import img5 from "../assets/images/room5.jpeg";
import "./View.css";
import "./UnitedState.css";
import Reviews from "./Review";
import SimilarListings from "./SimilarListings";



const View = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);

    return (
        <>
            {/* Top Navbar */}
            <Navbar expand="lg" className="bg-white py-0 mb-4">
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

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg py-5 mt-3">
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
                    <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item px-3"><Link to="/residential" className="nav-link">Residential</Link></li>
                            <li className="nav-item px-3"><Link to="/commercial" className="nav-link">Commercial</Link></li>
                            <li className="nav-item px-3"><Link to="/Invest" className="nav-link">Invest</Link></li>
                            <li className="nav-item px-3"><a href="/Rent" className="nav-link">Rent</a></li>
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
            </nav> <br /> <br /> <br /><br /> <br />

            <Container className="my-4">
                <Row className="justify-content-between align-items-center">
                    <Col md={8}>
                        <nav className="breadcrumb">
                            <span className="breadcrumb-item text-muted">Rent</span>
                            <span className="breadcrumb-item text-muted">Istanbul</span>
                            <span className="breadcrumb-item active">CVK Park Bosphorus Hotel Istanbul</span>
                        </nav>
                        <h2 className="fw-bold">
                            New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France
                        </h2>
                        <p className="text-muted d-flex align-items-center">
                            <FaBed className="me-2" /> 6 Bedrooms &nbsp;
                            <FaBath className="me-2" /> 4 Baths &nbsp;
                            <FaRulerCombined className="me-2" /> 4000 sqft
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end text-start">
                        <h3 className="text-danger fw-bold">$800,000 <span className="text-muted text-decoration-line-through fs-5">$900,000</span></h3>
                        <Button variant="outline-secondary" className="me-2">❤️</Button>
                        <Button variant="outline-secondary" className="me-2">🔗</Button>
                        <Button variant="warning">Send a request</Button>
                    </Col>
                </Row>
            </Container>

            <Container className="my-4">
                <Row className="g-2">
                    <Col md={6} className="">
                        <img src={img1} alt="Main View" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        <Row className="g-2">
                            <Col xs={6}>
                                <img src={img2} alt="Bedroom 1" className="img-fluid rounded" />
                            </Col>
                            <Col xs={6}>
                                <img src={img3} alt="Bedroom 2" className="img-fluid rounded" />
                            </Col>
                            <Col xs={6}>
                                <img src={img4} alt="Bedroom 3" className="img-fluid rounded" />
                            </Col>
                            <Col xs={6} className="position-relative">
                                <img src={img5} alt="Bedroom 4" className="img-fluid rounded" />
                                <Button variant="success" className="position-absolute bottom-0 end-0 m-2">
                                    View all photos
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>


            <Container className="my-5">
                <Row>
                    <Col xs={12}>
                        <h4 className="fw-bold">Overview</h4>
                        <p className="text-muted">
                            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.
                        </p>
                    </Col>
                </Row>

                <Row className="gy-3">
                    <Col xs={12} sm={6} md={3}>
                        <Card className="text-center p-3 border-0 shadow-sm rating-card">
                            <h3 className="fw-bold text-white">4.2</h3>
                            <p className="mb-1 text-light">Dealer Rating</p>
                            <small className="text-light">371 reviews</small>
                        </Card>
                    </Col>


                    <Col xs={6} sm={3} md={2}>
                        <Card className="text-center p-3 border-0 shadow-sm">
                            <FaStar className="text-dark fs-4 mx-auto" />
                            <p className="mt-2 fw-bold">Near park</p>
                        </Card>
                    </Col>

                    <Col xs={6} sm={3} md={2}>
                        <Card className="text-center p-3 border-0 shadow-sm">
                            <FaStar className="text-dark fs-4 mx-auto" />
                            <p className="mt-2 fw-bold">Near nightlife</p>
                        </Card>
                    </Col>

                    <Col xs={6} sm={3} md={2}>
                        <Card className="text-center p-3 border-0 shadow-sm">
                            <FaStar className="text-dark fs-4 mx-auto" />
                            <p className="mt-2 fw-bold">Near theater</p>
                        </Card>
                    </Col>

                    <Col xs={6} sm={3} md={2}>
                        <Card className="text-center p-3 border-0 shadow-sm">
                            <FaStar className="text-dark fs-4 mx-auto" />
                            <p className="mt-2 fw-bold">Good Society</p>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5">
                <h5 className="fw-bold">Location/Map</h5>
                <div className="position-relative">
                    <img
                        src={mapImage}
                        alt="Map"
                        width="100%"
                        height="300"
                        style={{ borderRadius: "10px" }}
                    />
                    <Button
                        variant="warning"
                        className="position-absolute top-0 end-0 mt-2 me-2"
                    >
                        View on Maps
                    </Button>
                </div>
                <p className="mt-2">
                    <i className="bi bi-geo-alt-fill"></i> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                </p>
                <hr />
                <div className="container my-4">
                    <div className="row border p-4 bg-light">
                        <h4 className="fw-bold">Offerings</h4>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-2">
                                    <FaSwimmingPool className="me-2" /> Outdoor pool
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaSwimmingPool className="me-2" /> Indoor pool
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaSpa className="me-2" /> Spa and wellness center
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaUtensils className="me-2" /> Equipped Kitchen
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-2">
                                    <FaDumbbell className="me-2" /> Fitness center
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaGlassMartiniAlt className="me-2" /> Bar/Lounge
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaWifi className="me-2" /> Free Wi-Fi
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <FaCoffee className="me-2" /> Tea/coffee machine
                                </li>
                            </ul>
                        </div>
                        <div className="text-danger mt-2">+24 more</div>
                    </div>
                </div>
            </Container>

            <Container className="py-5">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6} className="p-4 shadow rounded bg-light">
                        <h2 className="fw-bold">Tailored property selection</h2>
                        <p>
                            Leave a request, and our expert will contact you to clarify your enquiry
                            and select suitable properties.
                        </p>
                        <Form>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Control type="text" placeholder="Name" />
                                </Col>
                                <Col md={4}>
                                    <InputGroup>
                                        <InputGroup.Text>🇮🇳</InputGroup.Text>
                                        <Form.Control type="text" placeholder="Phone" />
                                    </InputGroup>
                                </Col>
                                <Col md={4}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="I'm looking for apartments,"
                                />
                            </Form.Group>
                            <Button variant="danger" className="w-100">
                                Order a selection
                            </Button>
                            <small className="d-block mt-2 text-muted">
                                I confirm that I have read and accept the{" "}
                                <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Personal Data Processing Guidelines</a>.
                            </small>
                        </Form>
                    </Col>
                    <Col lg={4} className="text-center mt-4 mt-lg-0">
                        <img
                            src={expertImage}
                            alt="Expert"
                            className="img-fluid rounded-circle"
                        />
                        <p className="mt-2"><strong>Svetlana Larionova</strong>, Real Estate Expert Unaar Europe</p>
                    </Col>
                </Row>
            </Container>

            {/* Review */}
            <Container className="mt-4">
                <SimilarListings />
            </Container>

            {/* Review */}
            <Container className="mt-4">
                <Reviews />
            </Container>

            {/* Footer */}
            <Container className="mt-4">
                <Footer />
            </Container>
        </>
    );
};

export default View;
