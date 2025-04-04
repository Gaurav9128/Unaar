import React, { useState } from "react";
import emailjs from "@emailjs/browser";  // Import EmailJS
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGlobe, FaBars, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "./ContactForm.css";
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
          <Link to="/" className="navbar-brand fw-bold text-dark">
            <img src={logo} alt="UNAAR Logo" height="40" />
          </Link>
          <Nav className="fw-bold text-dark">
            <Nav.Link href="/residential">Residential</Nav.Link>
            <Nav.Link href="/commercial">Commercial</Nav.Link>
            <Nav.Link href="/Invest">Invest</Nav.Link>
            <Nav.Link href="/Rent" className="fw-bold text-warning">Rent</Nav.Link>
            <Nav.Link href="/partner">Partner With Us</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <div className="p-2 globe-icon" style={{ color: "black" }}>
              <FaGlobe />
            </div>
            <div
              className="border rounded-pill px-3 py-2 d-flex align-items-center gap-2 menu-user-icon"
              style={{ color: "black", border: "2px solid black" }}
            >
              <FaBars />
              <div
                className="border rounded-circle p-2 globe-icon"
                style={{ color: "black", border: "2px solid black" }}
              >
                <FaUser />
              </div>
            </div>
          </div>
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
