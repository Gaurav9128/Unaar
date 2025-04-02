import React from "react";
import realEstateImage from "../assets/images/break.jpeg"; // Adjust the filename
import "bootstrap/dist/css/bootstrap.min.css";

const InvestmentCard = () => {
  return (
    <div className="container py-4">
      <div className="card shadow-lg overflow-hidden" style={{ backgroundColor: "#F4ECE1" }}>
        <div className="row g-0">
          {/* Left Text Content */}
          <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-center text-md-start">
            <h2 className="h4 h-md3 fw-bold text-dark">
              High-Yield Investment Opportunity in Class A Office Real Estate, Cyprus
            </h2>
            <p className="mt-3 text-muted fw-semibold">
              Secure an early-stage investment at a 30% below comparable properties price
            </p>
            <ul className="mt-2 text-muted">
              <li>Purchase Price: €5,750/m²</li>
              <li>Average Market Price: €8,500/m²</li>
            </ul>
            <p className="mt-3 fw-semibold text-dark">
              Class A Location in the business district of Limassol
            </p>
            <p className="fw-semibold text-warning">International Developer</p>
            <p className="text-muted">
              Ranked among the top three in the premium segment in Cyprus
            </p>
            <button className="btn btn-warning mt-4 text-white fw-bold">
              Inquire Now
            </button>
          </div>

          {/* Right Image */}
          <div className="col-md-6">
            <img
              src={realEstateImage}
              alt="Real Estate"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
