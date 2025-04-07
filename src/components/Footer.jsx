import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import ballonImage from "../assets/images/ballon.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const Footer = () => {
  const categories = [
    "Real Estate NY", "Real Estate Brooklyn", "Real Estate Queens", "Real Estate The Bronx", "Real Estate Staten", "Real Estate Jersey",
    "Real Estate Norwalk", "Real Estate Downey", "Real Estate Torrance", "Real Estate Pomona", "Real Estate Glendale", "Real Estate Inglewood",
    "Real Estate Chicago", "Real Estate Cook", "Real Estate Kane", "Real Estate Lake", "Real Estate Will", "Real Estate DuPage",
    "Real Estate Miami", "Real Estate Calhoun", "Real Estate Charlotte", "Real Estate Citrus", "Real Estate Clay", "Real Estate Collier",
    "Real Estate Columbia", "Real Estate DeSoto", "Real Estate Dixie", "Real Estate Duval", "Real Estate Escambia", "Real Estate Flagler"
  ];

  return (
    <div className="container mt-4">
      {/* Navbar */}
      <ul className="nav nav-tabs" style={{ borderBottom: "2px solid #CB9D62" }}>
        <li className="nav-item">
          <a className="nav-link active" href="#" style={{ color: "black" }}>Real Estate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "black" }}>New Homes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "black" }}>Popular Area</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ color: "black" }}>Popular Searches</a>
        </li>
      </ul>

      {/* Grid Section */}
      <div className="row mt-3">
        {categories.map((item, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* Subscription Section */}
      <div className="subscription-section mt-4" style={{ backgroundImage: `url(${ballonImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="content">
          <h2>Unaar Real State</h2>
         
          <div className="input-group">
            <input type="email" className="form-control" placeholder="xyz.asas@gmail.com" />
            <button className="btn btn-primary">→</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-light text-center py-4">
        <Container>
          {/* Top Links */}
          <Row className="mb-3">
            <Col>
              <a href="/about" className="text-primary mx-2">About us</a>
              <a href="/contact" className="text-primary mx-2">Contact details</a>
              <a href="#" className="text-primary mx-2">Privacy Policy</a>
              <a href="/advertise" className="text-primary mx-2">Advertise</a>
              <a href="/auth" className="text-primary mx-2">Log in or register</a>
            </Col>
          </Row>

          {/* Language Dropdown */}
          <Row className="mb-3">
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="language-dropdown">
                  Other language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {/* Copyright & Social Media */}
          <Row>
            <Col>
              <p className="text-muted m-0">© 2010–2025 Unaar REAL ESTATE</p>
              <div className="mt-2">
                <Button variant="outline-secondary" className="mx-1">
                  <FaFacebook />
                </Button>
                <Button variant="outline-secondary" className="mx-1">
                  <FaInstagram />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
