import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Navbar, Nav, Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaSearch, FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import heroBg from "../assets/images/Hero.jpeg";
import indiaFlag from "../assets/images/india-flag.png";
import expertImage from "../assets/images/Epert.png";
import property1 from "../assets/images/HG.jpeg";
import "./PropertyListing.css";
import Footer from "./Footer";

const listings = [
  {
    id: 1,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$800,000",
    oldPrice: "$900,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },

  {
    id: 2,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 3,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 4,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 5,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 6,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 7,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
  {
    id: 8,
    title: "New two-bedroom apartment in Boulogne-Billancourt, Ile-de-France, France",
    price: "$900,000",
    oldPrice: "$800,000",
    bedrooms: 6,
    baths: 4,
    area: "4000 sqft",
    image: property1,
  },
];

const ListingCard = ({ listing }) => (
  <div className="card mb-3 shadow-sm">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={listing.image} className="img-fluid rounded-start" alt="Listing" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{listing.title}</h5>
          <p className="text-danger fw-bold">{listing.price} <span className="text-decoration-line-through text-muted">{listing.oldPrice}</span></p>
          <p>{listing.bedrooms} Bedrooms | {listing.baths} Baths | {listing.area}</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const [phoneCode, setPhoneCode] = useState("+91");
  return (
    <div className="border p-4 shadow rounded bg-white" style={{ maxWidth: "400px", margin: "auto" }}>
      <h5 className="fw-bold">Need advice on real estate?</h5>
      <div className="d-flex align-items-center my-3">
        <img src={property1} alt="Svetlana Larionova" className="rounded-circle me-3" style={{ width: "50px", height: "50px" }} />
        <div>
          <strong></strong>
          <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>Real Estate Expert Unaar</p>
        </div>
      </div>
      <form>



        {/* Call & WhatsApp Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <a href="tel:+919876543210" className="btn btn-primary w-50 me-2">
            <FaPhoneAlt /> Call Now
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-success w-50">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </form>
      <p className="mt-2 text-muted" style={{ fontSize: "12px" }}>
        I confirm that I have read and accept the <a href="#" className="text-primary">Privacy Policy</a> and <a href="#" className="text-primary">Personal Data Processing Guidelines</a>.
      </p>
      {/* <a href="#" className="text-primary" style={{ fontSize: "12px" }}>Tranio representative in Germany</a> */}
    </div>
  );
};

const Home = () => {
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
      </nav>

      <header className="hero-section position-relative">
      </header>

      {/* Search Filter - Shifted Below */}
      <Container className="search-box font-serif shadow-lg p-3 rounded mt-2">
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

      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold" style={{ paddingLeft: "100px" }}>Showing {listings.length} of 257 places</h4>
        <div style={{ marginLeft: "auto", marginRight: "auto", width: "220px" }}>
          <select className="form-select border-1" style={{ width: "200px" }}>
            <option>Sort by Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>


      <Container className="py-2">
        <Row>
          <Col md={8}>
            {listings.map(listing => <ListingCard key={listing.id} listing={listing} />)}
          </Col>
          <Col md={4}>
            <ContactForm />
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

      {/* Footer */}
      <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default Home;
