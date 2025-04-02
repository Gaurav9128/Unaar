import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import house1 from "../assets/images/house1.jpeg";
import house2 from "../assets/images/house2.jpeg";
import house3 from "../assets/images/house3.jpeg";
import house4 from "../assets/images/house4.jpeg";

const listings = [
  {
    price: "£2,470,000",
    title: "Three-bedroom apartment in a new residence with a garden and a cinema, near the Thames, London, UK",
    area: "135 m²",
    bedrooms: "3",
    image: house1,
  },
  {
    price: "£2,483,000",
    title: "Spacious apartment in a riverside residence with a swimming pool and a restaurant, in the prestigious district of Chelsea, London, UK",
    area: "152 m²",
    bedrooms: "3",
    image: house2,
  },
  {
    price: "£2,248,000",
    title: "Three-bedroom apartment in a luxury residence with a swimming pool and a business center, in the heart of Westminster, London, UK",
    area: "115 m²",
    bedrooms: "3",
    image: house3,
  },
  {
    price: "£2,499,000",
    title: "Luxury three-bedroom apartment in a gated residence with a swimming pool and a business center, in the heart of Westminster, London, UK",
    area: "131 m²",
    bedrooms: "3",
    image: house4,
  },

];

const SimilarListings = () => {
  return (
    <Container>
      <h3 className="mt-4">Similar Listings</h3>
      <Row>
        {listings.map((listing, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card>
              <div className="position-relative">
                <Card.Img variant="top" src={listing.image} alt="House" />
                <Badge
                  className="position-absolute top-0 start-0 m-2"
                  bg="success"
                >
                  Garden view
                </Badge>
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{listing.price}</Card.Title>
                <Card.Text className="text-primary">{listing.title}</Card.Text>
                <Card.Text className="text-muted">
                  Total area {listing.area} · {listing.bedrooms} bedrooms
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SimilarListings;