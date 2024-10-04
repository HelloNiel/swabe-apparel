import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import productsData from "../assets/MensLatestProduct";
import "./css/LatestProduct.css";

const MensLatest = () => {
  const getSlideItems = (startIndex, itemsPerSlide) => {
    const items = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (startIndex + i) % productsData.length;
      items.push(productsData[index]);
    }
    return items;
  };

  return (
    <div id="mens-latest" className="mens-latest mt-5">
      <Container fluid className="px-3 px-md-5">
        <h1 className="text-center mb-5">LATEST PRODUCT</h1>
        <h2>For Men's Latest Shirts</h2>
        <p>
          Get yours Now!
        </p>
        <Carousel indicators={false} interval={null} wrap={true}>
          {[...Array(Math.ceil(productsData.length / 4))].map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="gx-3 gx-md-4">
                {getSlideItems(index * 4, 4).map((product) => (
                  <Col key={product.id} xs={6} sm={6} md={3}>
                    <Card className="mens-latest-card mb-3">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body className="mens-latest-card-body">
                        <Card.Title>{product.name}</Card.Title>
                        <button className="btn btn-primary">Details</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default MensLatest;