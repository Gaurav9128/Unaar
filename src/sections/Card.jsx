import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"; 

import image1 from "../assets/images/img1.jpeg";
import image2 from "../assets/images/img2.jpeg";
import image3 from "../assets/images/img3.jpeg";
import image4 from "../assets/images/img4.jpeg";
import image5 from "../assets/images/img5.jpeg";
import image6 from "../assets/images/img6.jpeg";
import image7 from "../assets/images/img7.jpeg";
import image8 from "../assets/images/img8.jpeg";

const data = [
  { yield: "8-9%", country: "Hungary", image: image1 },
  { yield: "4.6-9.8%", country: "Egypt", image: image2 },
  { yield: "9-12%", country: "Spain", image: image3 },
  { yield: "3-6%", country: "UAE", image: image4 },
  { yield: "3-7%", country: "France", image: image5 },
  { yield: "9-13%", country: "Portugal", image: image6 },
  { yield: "4-7%", country: "UK", image: image7 },
  { yield: "5.7-8.7%", country: "USA", image: image8 }
];

const HighYieldCards = () => {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>High Yield Countries in last 5 Years</h2>
        <Button variant="outline-dark">Show All →</Button>
      </div>
      <Row>
        {data.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="shadow border-0">
            <Card.Img 
                variant="top" 
                src={item.image} 
                alt={item.country} 
                className={[ "Hungary","Egypt","Spain","UAE", "France", "Portugal", "UK","USA"].includes(item.country) ? "custom-img" : ""} 
              />
              <Card.Body>
                <Card.Title>{item.yield} Annual Yield</Card.Title>
                <Card.Text>High-income apartments in Dubai from <strong>140,000$</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HighYieldCards;