import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userImage from "../assets/images/man.jpeg"; // Vite-compatible path

const allReviews = Array(8).fill({
  rating: "5.0 Amazing",
  name: "Omar Siphron",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
});

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5; 

  // Pagination Logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  return (
    <Container className="mt-5">
      <h4 className="fw-bold">Dealer/Contractor Reviews</h4>
      <h2 className="text-success fw-bold">4.2</h2>
      <p className="text-muted">Very good</p>
      <p className="text-muted">371 verified reviews</p>
      <hr />

      {currentReviews.map((review, index) => (
        <Card key={index} className="mb-3 p-3 border-0 shadow-sm">
          <Row>
            <Col xs={2} md={1} className="text-center">
              <img
                src={userImage}
                alt="User"
                className="rounded-circle img-fluid"
                width="50"
                height="50"
              />
            </Col>
            <Col xs={9}>
              <h6 className="fw-bold">{review.rating} | {review.name}</h6>
              <p className="text-muted">{review.text}</p>
            </Col>
            <Col xs={1} className="text-end">
              <span role="img" aria-label="flag" style={{ cursor: "pointer" }}>
                🚩
              </span>
            </Col>
          </Row>
        </Card>
      ))}

      {/* Pagination Controls */}
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item 
            key={i + 1} 
            active={i + 1 === currentPage} 
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
};

export default Reviews;
