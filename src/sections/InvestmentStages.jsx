import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Local images import
import requestImg from "../assets/images/a1.jpeg";
import viewingImg from "../assets/images/a2.jpeg";
import discussionImg from "../assets/images/a3.jpeg";
import contractImg from "../assets/images/a4.jpeg";

const InvestmentStages = () => {
  const stages = [
    {
      title: "Sending a request",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: requestImg,
    },
    {
      title: "Viewings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: viewingImg,
    },
    {
      title: "Discussion",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: discussionImg,
    },
    {
      title: "Signing a contract",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      image: contractImg,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className=" mb-4">Stages of investing with us</h2>
      <div className="row g-4">
        {stages.map((stage, index) => (
          <div key={index} className="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="card shadow-sm border-0 text-center">
              <img src={stage.image} className="card-img-top" alt={stage.title} />
              <div className="card-body">
                <h5 className="card-title">{stage.title}</h5>
                <p className="card-text">{stage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentStages;
