import React, { useState } from "react";
import emailjs from "@emailjs/browser";  // Import EmailJS
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./ContactForm.css";
import TopNavbar from "./TopNavbar";
import indiaFlag from "../assets/images/india-flag.png";
import profileImage from "../assets/images/Epert.png";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ho96gln", // Replace with your EmailJS Service ID
        "template_o19v92u", // Replace with your EmailJS Template ID
        formData,
        "J_g4RcTH3GOLf-oaj" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

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
                  <FaGlobe color="black" />
                </div>
                <div className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon icon-container">
                  <FaBars color="black" />
                  <div className="border rounded-circle p-2 globe-icon icon-container">
                    <FaUser color="black" />
                  </div>
                </div>
              </div>


            </Offcanvas.Body>
          </Navbar.Offcanvas>


        </Container>
      </Navbar>
      <br /><br /><br /><br /><br /><br /><br />

      {/* Contact Form Section */}
      <div className="container d-flex justify-content-center align-items-center vh-120">
        <div className="row w-100 shadow p-4 rounded bg-white" style={{ maxWidth: "1500px" }}>
          {/* Left Section - Profile */}
          <div className="col-md-4 text-center">
            <img src={profileImage} alt="Elvira Gracheva" className="img-fluid rounded-circle mb-3" />
            <h5 className="fw-bold">Nitin</h5>
            <p className="text-muted">Head of Unaar</p>
            <p className="fw-bold text-primary">+91 9785079970</p>
          </div>

          {/* Right Section - Form */}
          <div className="col-md-8">
            <h4 className="fw-bold">Unaar's managers are here to help you select a property</h4>
            <form onSubmit={handleSubmit}>
              <textarea
                className="form-control mb-2"
                name="message"
                placeholder="For example, an apartment overseas"
                rows="2"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="input-group mb-2">
                <span className="input-group-text">🇮🇳</span>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                className="form-control mb-3"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button className="btn btn-danger w-100" type="submit">
                Send a request
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default ContactForm;
