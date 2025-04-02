import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import trending1 from "../assets/images/trending1.jpeg";
import trending2 from "../assets/images/trending2.jpeg";
import trending3 from "../assets/images/trending3.jpeg";
import trending4 from "../assets/images/trending4.jpeg";
// import "./NewsSection.css"; // Ensure this is imported

const NewsSection = () => {
    const newsData = [
        { id: 1, image: trending1, author: "Race98", date: "03 June 2023", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, image: trending2, author: "Jony.Ls", date: "03 June 2023", title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, image: trending3, author: "King.F", date: "03 June 2023", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ];

    return (
        <Container fluid className="p-4 bg-custom">
            <Row>
                <Col md={6} className="p-4" style={{ backgroundColor: "#F4ECE1", borderRadius: "10px" }}>
                    <h3 className="fw-bold">Trending News</h3>
                    {newsData.map((news) => (
                        <Card key={news.id} className="mb-3 border-0" style={{ backgroundColor: "transparent" }}>
                            <Row className="g-0">
                                <Col xs={4}>
                                    <Card.Img src={news.image} alt="News" className="img-fluid rounded" />
                                </Col>
                                <Col xs={8}>
                                    <Card.Body className="p-2" style={{ backgroundColor: "transparent" }}>
                                        <small className="text-muted">{news.author} - {news.date}</small>
                                        <Card.Title className="fs-6 fw-bold">{news.title}</Card.Title>
                                        <Card.Text className="text-muted">{news.description}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>



                <Col md={6} className="p-4" style={{ backgroundColor: "white", borderRadius: "20px" }}>
                    <Card className="border-0">
                        <Card.Img src={trending4} alt="Main News" className="img-fluid rounded" />
                        <Card.Body className="p-3">
                            <small className="text-muted">Debits - 03 June 2023</small>
                            <Card.Title className="fs-4 fw-bold">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </Container>
    );
};

export default NewsSection;
