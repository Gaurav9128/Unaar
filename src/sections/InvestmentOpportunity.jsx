import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InvestmentOpportunity.css"; // Custom styles
import breakImage from "../assets/images/High.jpeg"; // Adjust path based on your project structure

const InvestmentOpportunity = () => {
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
          <p className="fw-bold text-warning">
            International Developer
          </p>
          <p>Ranked among the top three in the premium segment in Cyprus</p>
          <button className="btn btn-warning fw-bold">Inquire Now</button>
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
    </div>
  );
};

export default InvestmentOpportunity;
