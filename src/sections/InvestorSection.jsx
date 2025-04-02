import React from "react";
import investorsImage from "../assets/images/Group.png";

const InvestorSection = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center py-4 py-md-5">
      <img
        src={investorsImage}
        alt="Investment Returns"
        className="img-fluid rounded shadow-lg"
        style={{ maxWidth: "120%", maxHeight: "550px", objectFit: "cover" }}
      />
    </div>
  );
};

export default InvestorSection;
