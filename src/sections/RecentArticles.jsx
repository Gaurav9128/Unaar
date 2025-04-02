import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./RecentArticles.css";

// Import images from src/assets/images
import img1 from "../assets/images/Rectangle4.jpeg";
import img2 from "../assets/images/Rectangle4.jpeg";
import img3 from "../assets/images/re.jpeg";
import img4 from "../assets/images/Rectangle2.jpeg";
import img5 from "../assets/images/Rectangle1.jpeg";

const RecentArticles = () => {
    return (
        <Container className="mt-5">
            <h3 className="fw-bold">Read Recent Articles</h3>
            <p className="text-muted">
                Going Somewhere To Celebrate This Season? Whether You’re Going Home Or Somewhere To Roam, We’ve Got The Travel Tools To Get You To Your Destination.
            </p>
            <Row className="gy-4">
                <Col md={6}>
                    <Card className="p-4 border-0 shadow-sm" style={{ backgroundColor: "#F4ECE1" }}>
                    <h1 className="display-3 fw-bold" style={{ color: "#CB9D62" }}>73%</h1>
                        <p className="fw-bold">
                            of respondents believe that the real estate market will grow in 2025
                        </p>
                        <hr />
                        <p className="text-muted">Russian-speaking buyers of overseas real estate – 2023</p>
                    </Card>
                </Col>


                <Col md={6} sm={12}>
                    <Row className="gy-3">
                        <Col xs={6}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img src={img1} alt="Spain Work Visa" className="small-img" />
                                <Card.Body>
                                    <small className="text-warning">Yesterday</small>
                                    <h6>How to get a Spain work visa in 2025</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img src={img2} alt="Student Visa Spain" className="small-img" />
                                <Card.Body>
                                    <small className="text-warning">Yesterday</small>
                                    <h6>How to Get a Student Visa for Spain in 2025</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col md={6}>
                    <Card className="border-0 shadow-sm p-0">
                        <div className="d-flex align-items-start">
                            <Card.Img src={img3} alt="Hungary Golden Visa" className="img-fluid img-left" />
                            <Card.Body className="p-3">
                                <small className="text-warning">28 Jan, 2025</small>
                                <h6>Hungary Golden Visa Programme — Residence Permit by Investment in 2025</h6>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>





                <Col md={6}>
                    <Row className="gy-3">
                        <Col xs={6}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img src={img4} alt="France Residency" className="small-img" />
                                <Card.Body>
                                    <small className="text-warning">Yesterday</small>
                                    <h6>Residence permit in France get new update</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card className="border-0 shadow-sm">
                                <Card.Img src={img5} alt="Russian Buyers" className="small-img" />
                                <Card.Body>
                                    <small className="text-warning">Yesterday</small>
                                    <h6>Russian-speaking buyers of overseas real estate – 2023</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default RecentArticles;
