import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

// Import images from assets folder
import house1 from "../assets/images/house1.jpeg";
import house2 from "../assets/images/house2.jpeg";
import house3 from "../assets/images/house3.jpeg";
import house4 from "../assets/images/house4.jpeg";
import house5 from "../assets/images/house5.jpeg";
import house6 from "../assets/images/house6.jpeg";
import house7 from "../assets/images/house7.jpeg";
import house8 from "../assets/images/house8.jpeg";

const listings = [
  {
    id: 1,
    title: "House on the Hollywood",
    address: "374 Johnson Ave",
    beds: 6,
    baths: 2,
    size: 200,
    featured: true,
    image: house1,
  },
  {
    id: 2,
    title: "Comfortable Villa Green",
    address: "178 Broadway, Brooklyn",
    beds: 6,
    baths: 2,
    size: 200,
    featured: true,
    image: house2,
  },
  {
    id: 3,
    title: "Quality House For Sale",
    address: "873 Bedford Ave",
    beds: 6,
    baths: 2,
    size: 200,
    featured: false,
    image: house3,
  },
  {
    id: 4,
    title: "Diamond Family Home",
    address: "254 S 2nd St, Brooklyn",
    beds: 6,
    baths: 2,
    size: 200,
    featured: true,
    image: house4,
  },
  {
    id:5,
    title: "House on the Hollywood",
    address: "374 Johnson Ave",
    beds: 6,
    baths: 2,
    size: 200,
    featured: true,
    image: house5,
  },
  {
    id: 6,
    title: "Comfortable Villa Green",
    address: "178 Broadway, Brooklyn",
    beds: 6,
    baths: 2,
    size: 200,
    featured: false,
    image: house6,
  },
  {
   id: 7,
    title: "House on the Hollywood",
    address: "374 Johnson Ave",
    beds: 6,
    baths: 2,
    size: 200,
    featured: false,
    image: house7,
  },
  {
    id: 8,
    title: "Quality House For Sale",
    address: "873 Bedford Ave",
    beds: 6,
    baths: 2,
    size: 200,
    featured: false,
    image:house8,
  },
];

const FeaturedListings = () => {
  return (
    <Container className="my-4">
      {/* Section Header */}
      <div className="d-flex justify-content-between align-items-center">
        <h2>Discover Our Featured Listings</h2>
        <Button variant="outline-dark">Show All →</Button>
      </div>

      {/* Listings Grid */}
      <Row className="mt-4">
        {listings.map((listing) => (
          <Col key={listing.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="shadow-sm">
              <div className="position-relative">
                <Card.Img variant="top" src={listing.image} alt={listing.title} />
                {listing.featured && (
                  <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
                    Featured
                  </Badge>
                )}
              </div>
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text className="text-muted">{listing.address}</Card.Text>
                <div className="d-flex justify-content-between text-muted">
                  <span>🛏 {listing.beds} Beds</span>
                  <span>🛁 {listing.baths} Baths</span>
                  <span>📏 {listing.size} sqft</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedListings;
