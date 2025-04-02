import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import office1 from "../assets/images/office1.jpeg";
import office2 from "../assets/images/office2.jpeg";
import office3 from "../assets/images/office3.jpeg";
import { ArrowUpRight } from "lucide-react";

const ArticlesSection = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Recent articles on investing in real estate?</h2>
      <div className="row align-items-start g-2">
        {/* Main article */}
        <div className="col-md-7">
          <div className="card border-0">
            <img src={office1} className="img-fluid" style={{ width: "90%", height: "180px" }} alt="Article 1" />
            <div className="card-body px-0">
              <small className="text-muted">Olivia Rhye • 1 Jan 2023</small>
              <h4 className="card-title mt-2 d-flex align-items-center">
                UX review presentations
                <ArrowUpRight size={20} className="text-muted ms-15" style={{ marginLeft: "280px" }} />
              </h4>
              <p className="card-text mb-1">
                How do you create compelling presentations that wow your
                colleagues and <br/> impress your managers?
              </p>
              <p className="text-muted small mb-0">12 mins read</p>
            </div>
          </div>
        </div>

        {/* Side articles */}
        <div className="col-md-5">
          <div className="row g-2">
            <div className="col-12">
              <div className="d-flex align-items-center">
                <img src={office2} className="img-fluid rounded" style={{ width: "300px", height: "200px" }} alt="Article 2" />
                <div className="ms-2">
                  <small className="text-warning">Phoenix Baker • 1 Jan 2023</small>
                  <h5 className="mt-1 mb-1">Migrating to Linear 101</h5>
                  <p className="text-muted small mb-0">20 mins read</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center">
                <img src={office3} className="img-fluid rounded" style={{ width: "300px", height: "200px" }} alt="Article 3" />
                <div className="ms-2">
                  <small className="text-warning">Lana Steiner • 1 Jan 2023</small>
                  <h5 className="mt-1 mb-1">Building your API Stack</h5>
                  <p className="text-muted small mb-0">20 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArticlesSection;
