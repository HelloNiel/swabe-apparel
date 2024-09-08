import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import productsData from "../assets/WomensLatestProduct";
import "./css/LatestProduct.css";

const MensLatest = () => {
  const getSlideItems = (startIndex) => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % productsData.length;
      items.push(productsData[index]);
    }
    return items;
  };

  return (
    <Container className="mens-latest mt-5">
      <h2>Women's Latest</h2>
      <p>
        Details to details is what makes Hexashop different from the other
        themes.
      </p>
      <Carousel indicators={false} interval={null} wrap={true}>
        {productsData.map((_, index) => (
          <Carousel.Item key={index}>
            <Row>
              {getSlideItems(index).map((product) => (
                <Col key={product.id} md={4}>
                  <Card className="mens-latest-card">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body className="mens-latest-card-body">
                      <Card.Title>{product.name}</Card.Title>
                      <div className="rating">
                        {"★".repeat(product.rating)}
                        {"☆".repeat(5 - product.rating)}
                      </div>
                      <Card.Text>${product.price.toFixed(2)}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
export default MensLatest;
