import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../assets/images/screen.png";

const ListingOptions = () => {
  return (
    <section
      className="position-relative py-4 py-md-5 px-3 px-md-5 w-150"
      style={{
        backgroundColor: "#F4ECE1",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "right bottom",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* Heading */}
        <h2 className="text-center text-md-start fw-bold text-dark mb-3">
          Advertise your property listings in Unnar’s exclusive catalogue.
        </h2>

        {/* Description */}
        <p className="text-center text-md-start text-secondary mb-4">
          We welcome collaboration with companies and agencies worldwide. Unnar
          offers the following listing options:
        </p>

        {/* Listing Options */}
        <ul className="text-dark px-2">
          <li>
            <strong>Standard Listing</strong> – Feature your property with
            essential details and images.
          </li>
          <li>
            <strong>Premium Listing</strong> – Gain more visibility with
            priority placement.
          </li>
          <li>
            <strong>Featured Listing</strong> – Highlight your property on the
            homepage and top searches.
          </li>
          <li>
            <strong>Sponsored Listing</strong> – Boost your listing with
            promotional support.
          </li>
          <li>
            <strong>Exclusive Listing</strong> – Get maximum exposure with a
            dedicated showcase.
          </li>
        </ul>

        {/* CTA Button */}
        <div className="mt-4 text-center text-md-start">
          <button className="btn px-4 py-2" style={{ backgroundColor: "#C69E6A", color: "white" }}>
            Learn more about advertising
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListingOptions;
