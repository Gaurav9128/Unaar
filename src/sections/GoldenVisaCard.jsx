import React, { useState } from "react";
import goldenVisaImg from "../assets/images/gold1.png";
import badgeLogo from "../assets/images/gold.png";

const GoldenVisaCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const callChecked = e.target[3].checked;
    const whatsappChecked = e.target[4].checked;

    if (!callChecked && !whatsappChecked) {
      alert("Please select at least one communication method.");
      return;
    }

    const message = `Golden Visa Request:
Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Communication: ${callChecked ? "Call" : ""}${callChecked && whatsappChecked ? " & " : ""}${whatsappChecked ? "WhatsApp" : ""}`;

    if (whatsappChecked) {
      const whatsappURL = `https://wa.me/919119129138?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }else if (callChecked) {
        // Auto dial if user is on a mobile device
        window.location.href = "tel:+919119129138";
    } else {
      alert("Form submitted successfully!");
    }

    setShowModal(false);
  };

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center p-4 rounded shadow" style={{ backgroundColor: "#F4ECE1" }}>
          <div className="col-lg-8 text-center text-lg-start">
            <h2 className="fs-2 fw-bold text-dark">
              Greece Golden Visa: Europe’s Top Residency Programme
            </h2>
            <p className="fs-5 fw-semibold text-warning mt-3">
              Investment from €250,000
            </p>
            <p className="text-muted small">Eligible residential properties in any area</p>
            <p className="fs-5 fw-semibold text-warning mt-4">Athens: A Prime Investment Choice</p>
            <p className="text-muted small">
              Property values in Athens have soared by 69% over 10 years, with prospected growth
            </p>
            <p className="fs-5 fw-semibold text-warning mt-4">Why Choose Greece Residence by Investment?</p>
            <p className="text-muted small">
              Enjoy unrestricted Schengen travel, EU banking access, and greater asset flexibility
            </p>
            <button className="btn btn-warning text-white px-4 py-2 mt-4" onClick={() => setShowModal(true)}>
              Request Properties for Golden Visa
            </button>
          </div>

          <div className="col-lg-4 text-center mt-4 mt-lg-0 position-relative">
            <img src={goldenVisaImg} alt="Athens" className="img-fluid rounded shadow" />
            <img src={badgeLogo} alt="Badge" className="position-absolute top-0 end-0 translate-middle" style={{ width: "80px" }} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <button className="custom-close" onClick={() => setShowModal(false)}>×</button>
            <h3 className="custom-modal-title">Get Info on Greece Residence</h3>
            <form className="custom-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <div className="communication-options">
                <label><input type="checkbox" /> Call</label>
                <label style={{ marginLeft: "15px" }}><input type="checkbox" /> WhatsApp</label>
              </div>
              <button type="submit" className="submit-btn">Send Request</button>
            </form>
          </div>
        </div>
      )}

      {/* CSS Styling */}
      <style>{`
        .custom-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .custom-modal {
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          position: relative;
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .custom-close {
          position: absolute;
          top: 12px;
          right: 16px;
          background: transparent;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .custom-modal-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }
        .custom-form input {
          width: 100%;
          padding: 10px 12px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
        }
        .communication-options {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          font-size: 14px;
        }
        .communication-options label {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #f5b31a;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }
        .submit-btn:hover {
          background-color: #d9990c;
        }
      `}</style>
    </>
  );
};

export default GoldenVisaCard;
