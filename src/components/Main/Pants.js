import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import productsData from "../../assets/MensLatestProduct";
import "../css/LatestProduct.css";

const MensLatest = () => {
  return (
    <div id="mens-latest" className="mens-latest mt-5">
      <Container fluid className="px-3 px-md-5">
        <h1 className="text-center mb-5">MR. SWABE PANTS PRODUCT</h1>
        <Row className="gx-3 gx-md-4">
          {productsData.map((product) => (
            <Col key={product.id} xs={6} md={3}>
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
      </Container>
    </div>
  );
};

export default MensLatest;
