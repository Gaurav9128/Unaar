import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TopNavbar from "./TopNavbar";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Navbar, Nav, Container, Row, Col, Card, Form, Button, InputGroup, Offcanvas, Modal } from "react-bootstrap";
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
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        contactMethods: {
            call: false,
            whatsapp: false,
            telegram: false,
            viber: false,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (method) => {
        setFormData((prev) => ({
            ...prev,
            contactMethods: {
                ...prev.contactMethods,
                [method]: !prev.contactMethods[method],
            },
        }));
    };

    const handleSubmit = () => {
        const { name, phone, email, message, contactMethods } = formData;
        const whatsappNumber = "9119129138";
        const telNumber = "+919119129138";

        if (!name || !phone || !email) {
            alert("Please fill all required fields.");
            return;
        }

        // WhatsApp
        if (contactMethods.whatsapp) {
            const text = `Hello, I am interested in the investment opportunity.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
            window.open(url, "_blank");
        }

        // Call
        if (contactMethods.call) {
            window.open(`tel:${telNumber}`, "_self");
        }

        // If no method selected
        if (!contactMethods.whatsapp && !contactMethods.call) {
            alert("Please select a communication method.");
        }

        setShowModal(false);
    };

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);

    return (
        <>
            <TopNavbar />

            <Navbar expand="lg" className="py-5 mt-7 secondary-nav bg-light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold">
                        <img src={logo} alt="UNAAR Logo" height="40" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
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
            </Navbar> <br /><br /><br /><br /><br /><br /><br />

            <Container className="my-4">
                <Row className="justify-content-between align-items-center">
                    <Col md={8}>
                        <nav className="breadcrumb">
                            <span className="breadcrumb-item text-muted">Rent</span>
                            <span className="breadcrumb-item text-muted">Istanbul</span>
                            <span className="breadcrumb-item active">CVK Park Bosphorus Hotel Istanbul</span>
                        </nav>
                        <h2 className="fw-bold">New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France</h2>
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
                        {/* Send Request Button */}
                        <button className="btn btn-warning fw-bold" onClick={handleOpenModal}>
                            Send a request
                        </button>

                        {/* Popup Modal Form */}
                        {/* Modal */}
                        <Modal show={showModal} onHide={handleCloseModal} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Request More Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="tel"
                                            placeholder="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="What is your budget?"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Preferred method of communication:</Form.Label>
                                        <div className="d-flex flex-wrap gap-4 mt-2">
                                            <Form.Check
                                                type="checkbox"
                                                label="Call"
                                                checked={formData.contactMethods.call}
                                                onChange={() => handleCheckboxChange("call")}
                                            />
                                            <Form.Check
                                                type="checkbox"
                                                label="WhatsApp"
                                                checked={formData.contactMethods.whatsapp}
                                                onChange={() => handleCheckboxChange("whatsapp")}
                                            />
                                        </div>
                                    </Form.Group>

                                    <Button variant="danger" onClick={handleSubmit} className="w-100 fw-bold">
                                        Send an enquiry
                                    </Button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className="text-muted small">
                                I confirm that I have read and accept the{" "}
                                <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Personal Data Processing Guidelines</a>.
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>

            <Container className="my-4">
                <div
                    className="overflow-auto custom-scrollbar"
                    style={{ whiteSpace: "nowrap" }}
                >
                    {[img1, img2, img3, img4, img5].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Image ${index + 1}`}
                            className="img-thumbnail m-2"
                            style={{ height: "400px", width: "auto", borderRadius: "10px" }}
                        />
                    ))}
                </div>
            </Container>


            <Container className="my-5">
                <Row>
                    <Col xs={12}>
                        <h4 className="fw-bold">Overview</h4>
                        <p className="text-muted">
                            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission...
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


            <Container className="mt-4">
                <SimilarListings />
            </Container>

            <Container className="mt-4">
                <Reviews />
            </Container>

            <Container className="mt-4">
                <Footer />
            </Container>
        </>
    );
};

export default View;
