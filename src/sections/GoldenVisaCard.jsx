import React from "react";
import goldenVisaImg from "../assets/images/gold1.png"; // Replace with your actual image
import badgeLogo from "../assets/images/gold.png"; // Badge image

const GoldenVisaCard = () => {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center p-4 p-md-5 rounded shadow-lg" style={{ backgroundColor: "#F4ECE1" }}>
        {/* Left Section: Text Content */}
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

          {/* Button */}
          <button className="btn btn-warning text-white px-4 py-2 mt-4">
            Request Properties for Golden Visa
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="col-lg-4 text-center mt-4 mt-lg-0 position-relative">
          <img
            src={goldenVisaImg}
            alt="Athens Parthenon"
            className="img-fluid rounded shadow-lg"
          />
          {/* Badge Image */}
          <img
            src={badgeLogo}
            alt="Golden Visa Badge"
            className="position-absolute top-0 end-0 translate-middle img-fluid"
            style={{ width: "80px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoldenVisaCard;