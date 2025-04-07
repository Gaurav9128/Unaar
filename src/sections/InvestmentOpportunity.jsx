import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InvestmentOpportunity.css";
import breakImage from "../assets/images/High.jpeg";
import { Modal, Button, Form } from "react-bootstrap";

const InvestmentOpportunity = () => {
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

  return (
    <div className="container my-5">
      <div className="row align-items-center shadow-lg rounded p-4 investment-card">
        {/* Text Content */}
        <div className="col-lg-6 col-md-6 col-12 p-4 text-content">
          <h2 className="fw-bold">
            High-Yield Investment Opportunity in Class A Office Real Estate, Cyprus
          </h2>
          <p className="text-warning fw-bold">
            Secure an early-stage investment at a 30% below comparable properties price
          </p>
          <ul className="list-unstyled">
            <li>• Purchase Price: €5,750/m²</li>
            <li>• Average Market Price: €8,500/m²</li>
          </ul>
          <p className="fw-bold text-secondary">
            Class A Location in the business district of Limassol
          </p>
          <p className="fw-bold text-warning">International Developer</p>
          <p>Ranked among the top three in the premium segment in Cyprus</p>
          <button className="btn btn-warning fw-bold" onClick={handleOpenModal}>
            Inquire Now
          </button>
        </div>

        {/* Image Content */}
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src={breakImage}
            alt="Investment Building"
            className="img-fluid rounded"
          />
        </div>
      </div>

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
    </div>
  );
};

export default InvestmentOpportunity;
