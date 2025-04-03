import React from "react";
import mapImage from "../assets/images/map.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const SpendingMap = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 bg-white">
      <div className="row align-items-center">
        {/* Left Section - Map */}
        <div className="col-md-8 text-center">
          <h2 className="mb-4 fw-bold">Where people are spending most across the globe</h2>
          <div className="position-relative w-100" style={{ height: "400px" }}>
            <img
              src={mapImage}
              alt="World Map"
              className="img-fluid rounded w-100 h-100 object-fit-cover"
            />
            {/* Data Points */}
            {[
              { country: "United States", value: 2460, top: "20%", left: "10%" },
              { country: "England", value: 1489, top: "30%", left: "45%", route: "/property" },
              { country: "Russia", value: 2430, top: "15%", left: "65%", route:"/view" },
              { country: "India", value: 2099, top: "50%", left: "60%" },
              { country: "Africa", value: 1689, top: "65%", left: "40%" },
              { country: "Australia", value: 1189, top: "75%", left: "80%" },
            ].map((item, index) => (
              <div
                key={index}
                className="position-absolute text-dark p-2 rounded-circle shadow text-center"
                style={{ 
                  top: item.top, 
                  left: item.left, 
                  transform: "translate(-50%, -50%)", 
                  backgroundColor: "#C69E6A",
                  cursor: item.route ? "pointer" : "default"
                }}
                onClick={() => item.route && navigate(item.route)}
              >
                <span className="d-block fw-bold">{item.value}</span>
                <span className="small">{item.country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Stats Card */}
        <div className="col-md-4 mt-4 mt-md-0">
          <div className="rounded p-4 shadow" style={{ backgroundColor: "#C69E6A" }}>
            <h3 className="fw-semibold mb-3 text-white">Your Trusted Partner</h3>
            <div className="d-flex flex-column gap-3">
              <div>
                <p className="fs-2 fw-bold text-#C69E6A mb-0">10</p>
                <p className="text-white">Offices In Europe</p>
              </div>
              <div>
                <p className="fs-2 fw-bold text-#C69E6A mb-0">2,330</p>
                <p className="text-white">Closed Transactions</p>
              </div>
              <div>
                <p className="fs-2 fw-bold text-#C69E6A mb-0">1,000</p>
                <p className="text-white">Partners From All Over The World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingMap;
