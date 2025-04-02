import React from "react";
import personImage from "../assets/images/person.png";

const AgentSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">For Agents and Developers</h2>
          <p className="text-muted">
            Unnar has handled over 3,000 service requests. We communicate with clients to understand their needs and provide the best solutions.
          </p>
          <h3 className="fw-semibold">We send the client your way</h3>
          <p className="text-muted">
            Our partners receive not only requests about their properties but also requests regarding other partners’ real properties.
          </p>
          <button className="btn text-white" style={{ backgroundColor: "#C69E6A" }}>
            Become a partner
          </button>
        </div>

        {/* Right Content - Images */}
        <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0 position-relative">
          <div className="position-relative" style={{ width: "220px", height: "250px" }}>
            {/* Background Image */}
            <img 
              src={personImage} 
              alt="Agent" 
              className="w-100 h-100 rounded object-cover shadow-lg"
              style={{ objectFit: "cover" }}
            />
            {/* Badge */}
            <div className="position-absolute top-0 end-0 bg-warning text-white text-center fw-semibold d-flex align-items-center justify-content-center rounded-circle shadow-md" style={{ width: "60px", height: "60px" }}>
              <span>25 Years</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSection;
