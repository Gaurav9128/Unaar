import React from "react";
import { Container, Row, Col, Card, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import "./About.css"; // Custom styles if needed
import TopNavbar from "./TopNavbar";
import airplaneImage from "../assets/images/airplane.png"; // Replace with your image path
import indiaFlag from "../assets/images/india-flag.png";
import logo from "../assets/images/logo.png";
import h1Image from "../assets/images/h1.png";
import Footer from "./Footer";

const About = () => {
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
                                    <FaGlobe style={{ color: "black" }} />
                                </div>
                                <div className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon icon-container">
                                    <FaBars style={{ color: "black" }} />
                                    <div className="border rounded-circle p-2 globe-icon icon-container">
                                        <FaUser style={{ color: "black" }} />
                                    </div>
                                </div>
                            </div>



                        </Offcanvas.Body>
                    </Navbar.Offcanvas>


                </Container>
            </Navbar>

            {/* Main Content */}
            <Container fluid className="real-estate-container py-5 ">
                <Container className="mb-6" style={{ marginTop: "120px" }}>
                    <Row className="align-items-center">
                        {/* Text Content */}
                        <Col lg={7} md={6} sm={12} className="text-section text-start">
                            <h1 className="hero-title">
                                Unaaar Is An International Real <br />Estate Brokerage
                            </h1>

                            <Row className="stats my-4">
                                <Col md={4} className="stat-item">
                                    <h3 style={{ color: "#CB9D62", fontWeight: "bold" }}>10</h3>
                                    <p>Offices In Europe</p>
                                </Col>
                                <Col md={4} className="stat-item">
                                    <h3 style={{ color: "#CB9D62", fontWeight: "bold" }}>2,330</h3>
                                    <p>Closed Transactions</p>
                                </Col>
                                <Col md={4} className="stat-item">
                                    <h3 style={{ color: "#CB9D62", fontWeight: "bold" }}>1,000</h3>
                                    <p>Partners From All Over The World</p>
                                </Col>
                            </Row>

                            <p className="description" style={{ fontSize: "0.9rem" }}>
                                Located in Taksim Gumuyu, the heart of Istanbul, the CVK Park
                                Bosphorus Hotel Istanbul has risen from the ashes of the historic
                                Park Hotel, which also served as Foreign Affairs Palace 120 years
                                ago and is hosting its guests by assuming this hospitality mission.
                            </p>
                        </Col>

                        {/* Image for larger screens only */}
                        <Col lg={5} md={6} className="d-none d-md-block text-end">
                            <img
                                src={airplaneImage}
                                alt="Airplane View"
                                className="airplane-img img-fluid"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </Col>

                        {/* Image for small screens (centered) */}
                        <div className="d-block d-md-none text-center mt-3">
                            <img
                                src={airplaneImage}
                                alt="Airplane View"
                                className="airplane-img img-fluid mx-auto"
                                style={{ maxWidth: "80%", height: "auto" }}
                            />
                        </div>

                    </Row>
                </Container>



                {/* Services Section */}
                <Container className=" my-5">
                    <h2 className="fw-bold">What we help clients with</h2>
                    <Row className="mt-4 d-flex justify-content-center">
                        {Array(5).fill(0).map((_, index) => (
                            <Col lg={2} md={4} sm={6} xs={12} key={index} className="mb-4">
                                <Card className="service-card p-4 text-center border-0 shadow-sm">
                                    <Card.Img variant="top" src={h1Image} className="service-img" />
                                    <Card.Body>
                                        <Card.Title className="service-title">
                                            Investment <br /> strategy advice
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                {/* Headings and Descriptions */}
                <Container className="my-5">
                    <h3>Heading</h3>
                    <p>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel,
                        which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452
                        luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view,
                        Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the
                        popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites,
                        are offered to its special guests as a wide variety of selection.</p>
                    <h3>Heading</h3>
                    <p>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel,
                        which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its
                        452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with
                        Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
                        Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city
                        and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</p>
                </Container>
            </Container>

            {/* Footer */}
            <Container className="mt-4">
                <Footer />
            </Container>
        </>
    );
};

export default About;
