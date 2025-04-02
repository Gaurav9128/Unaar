import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import officeImg from "../assets/images/off.jpeg";
import restaurantImg from "../assets/images/res.jpeg";
import hotelImg from "../assets/images/hotes.jpeg";
import otherImg from "../assets/images/other.jpeg";
import "./CategoryCards.css";

const categories = [
  { title: "OFFICE", img: officeImg },
  { title: "RESTAURANTS", img: restaurantImg },
  { title: "HOTELS", img: hotelImg },
  { title: "OTHER", img: otherImg },
];

const CategoryCards = () => {
  return (
    <div className="container">
      <h2 className=" mb-4">CATEGORY TO RENT</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card category-card border-0 shadow-lg position-relative">
              <img
                src={category.img}
                className="card-img-top rounded"
                alt={category.title}
                style={{ height: "450px", objectFit: "cover" }}
              />
              <div className="overlay">
                <h5 className="category-title">{category.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
