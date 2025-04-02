import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images from assets folder
import amazonLogo from "../assets/images/amazon.png";
import amdLogo from "../assets/images/amd.png";
import ciscoLogo from "../assets/images/cisco.png";
import dropcamLogo from "../assets/images/dropcam.png";
import logitechLogo from "../assets/images/logitech.png";
import spotifyLogo from "../assets/images/spotify.png";

const TrustSection = () => {
  return (
    <div className="bg-dark text-white text-center py-4">
      <p className="mb-3">
        Thousands of leading developers and agencies worldwide trust Unnar.
      </p>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={amazonLogo} alt="Amazon" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={amdLogo} alt="AMD" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={ciscoLogo} alt="Cisco" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={dropcamLogo} alt="Dropcam" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={logitechLogo} alt="Logitech" className="img-fluid" />
          </div>
          <div className="col-4 col-sm-3 col-md-2 text-center my-2">
            <img src={spotifyLogo} alt="Spotify" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
