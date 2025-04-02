import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import houseImage from "../assets/images/card.jpeg"; 

const Equity = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-lg-6 text-center text-lg-start">
          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-3">
            <div className="p-3 bg-light text-center rounded shadow-sm">
              <h3 className="mb-0">06</h3>
              <small>Month</small>
            </div>
            <div className="p-3 bg-light text-center rounded shadow-sm">
              <h3 className="mb-0">25</h3>
              <small>Days</small>
            </div>
            <div className="p-3 bg-light text-center rounded shadow-sm">
              <h3 className="mb-0">12</h3>
              <small>Hours</small>
            </div>
            <span className="align-self-center text-warning fw-bold">Remaining</span>
          </div>
          <h2 className="fw-bold">Equity Raising For Luxury House In San Diego</h2>
          <p className="text-muted">
            Be an Investor and live your dream life, follow the links below to read more about the project.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start gap-3">
            <button className="btn btn-warning text-white fw-bold">Become Investor now</button>
            <button className="btn btn-outline-dark">Learn More</button>
          </div>
        </div>

        {/* Right Section with Local Image */}
        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img
            src={houseImage}
            alt="Luxury House"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Equity;
