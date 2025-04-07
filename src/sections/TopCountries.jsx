import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import officeImg from "../assets/images/travel4.jpeg";
import restaurantImg from "../assets/images/travel3.jpeg";
import hotelImg from "../assets/images/travel2.jpeg";
import otherImg from "../assets/images/travel1.jpeg";
import "./Top Countries.css";

const categories = [
  { title: "AMERICA", img: officeImg },
  { title: "SPAIN", img: restaurantImg },
  { title: "LONDON", img: hotelImg },
  { title: "FRANCE", img: otherImg },
];

const TopCountries = () => {
  return (
    <div className="container">
      <h2 className=" mb-4">Top 4 Countries People Searched for in January 2025</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card category-card border-0 shadow-lg position-relative">
              <img
                src={category.img}
                className="card-img-top rounded"
                alt={category.title}
                style={{ height: "400px", objectFit: "cover" }}
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

export default TopCountries;
