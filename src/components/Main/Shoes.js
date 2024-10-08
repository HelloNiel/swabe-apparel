import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/LatestProduct.css";
import shoesData from "../../assets/ShoesData";
import Footer from "../partial/Footer"

const shoesProduct = () => {
  return (
    <div id="mens-latest" className="mens-latest mt-5">
      <Container fluid className="px-3 px-md-5 mb-5">
        <h1 className="text-center mb-5">MR. SWABE SHOES PRODUCT</h1>
        <Row className="gx-3 gx-md-4">
          {shoesData.map((product) => (
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
      <Footer />
    </div>

  );
};

export default shoesProduct;
