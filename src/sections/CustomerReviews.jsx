import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import view1 from "../assets/images/view1.jpeg";
import view2 from "../assets/images/view2.jpeg";
import view3 from "../assets/images/view3.jpeg";

import googleLogo from "../assets/images/google.png";

const allReviews = [
  {
    name: "Cameron Williamson",
    role: "Brand Owner",
    image: view1,
    reviewTitle: "A real sense of community, nurtured",
    reviewText:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "Harvey Specter",
    role: "Lawyer",
    image: view2,
    reviewTitle: "The facilities are superb. Clean, slick, bright.",
    reviewText:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt... READ FULL",
  },
  {
    name: "Shivom Chi-Ling",
    role: "Content Creator",
    image: view3,
    reviewTitle: "A real sense of community, nurtured",
    reviewText:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    name: "Shivom Chi-Li",
    role: "Content Creator",
    image: view3,
    reviewTitle: "A real sense of community, nurtured",
    reviewText:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
];

const CustomerReviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(allReviews.slice(0, 3));
  const [showAll, setShowAll] = useState(false);

  const showNextReview = () => {
    setVisibleReviews(allReviews.slice(1, 4));
    setShowAll(true);
  };

  const showPreviousReviews = () => {
    setVisibleReviews(allReviews.slice(0, 3));
    setShowAll(false);
  };

  return (
    <section style={{ backgroundColor: "#F4ECE1" }} className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <h2 className="me-3">Reviews from Our Recent Customers</h2>
            <span className="me-4" style={{ color: "#CB9D62" }}>(79 Reviews)</span>
          </div>
          <div>
            <FaChevronLeft
              className="me-3"
              style={{ cursor: "pointer" }}
              onClick={showPreviousReviews}
              disabled={!showAll}
            />
            <FaChevronRight
              style={{ cursor: "pointer" }}
              onClick={showNextReview}
              disabled={showAll}
            />
          </div>
        </div>
        <div className="row">
          {visibleReviews.map((review, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card p-3 shadow-sm border-0">
                <div className="d-flex align-items-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h5 className="mb-0">{review.name}</h5>
                    <small className="text-muted">{review.role}</small>
                  </div>
                </div>
                <div className="mt-3">
                  <strong>{review.reviewTitle}</strong>
                  <p className="text-muted">{review.reviewText}</p>
                </div>
                <div className="mt-auto text-muted">
                  <img
                    src={googleLogo}
                    alt="Google Reviews"
                    width="20"
                    className="me-2"
                  />
                  Google Reviews
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;