import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Property.css"; // Custom CSS for additional styling
import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img4 from "../assets/images/image4.jpeg";

const property = [
  { price: "$175,000", image: img1 },
  { price: "$674,000", image: img2 },
  { price: "$555,000", image: img3 },
  { price: "$324,000", image: img4 },
];

const Property = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          Koh Samui property for sale <span className="text-muted">(679 Listings)</span>
        </h2>
        <button className="btn btn-outline-primary" style={{ borderColor: "#CB9D62", color: "rgb(0, 0, 0)" }}>
          Show All →
        </button>

      </div>
      <div className="row">
        {property.map((apt, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card apartment-card">
              <img src={apt.image} className="card-img-top" alt="property" />
              <div className="card-body">
                <h5 className="price-tag">{apt.price}</h5>
                <p className="card-text">
                  Investment Apartments In The Community Complex At 9% Per Annum In The Center Of The Motor City Area, Dubai, UAE
                </p>
                <p className="text-muted">Total area 42 m²</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
