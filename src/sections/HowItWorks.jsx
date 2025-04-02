import React from "react";
import "./HowItWorks.css"; // Create this file for custom styles

// Import images from assets folder
import searchIcon from "../assets/images/h1.png";
import calendarIcon from "../assets/images/h2.png";
import houseIcon from "../assets/images/h3.png";

const steps = [
  {
    id: 1,
    title: "Search for your favorite house in your location",
    description: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
    img: searchIcon,
  },
  {
    id: 2,
    title: "Make a visit appointment with one of your agents",
    description: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
    img: calendarIcon,
  },
  {
    id: 3,
    title: "Get your dream house in a month, or less",
    description: "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
    img: houseIcon,
  },
];

const HowItWorks = () => {
  return (
    <div className="container my-5">
      <h2 className="text mb-4 fw-bold">How It works? Find a perfect home</h2>
      <div className="row text-center">
        {steps.map((step) => (
          <div key={step.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 how-it-works-card">
              <div className="card-body">
                <img src={step.img} alt={step.title} className="how-it-works-img mb-3" />
                <h5 className="fw-semibold">{step.id}. {step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
