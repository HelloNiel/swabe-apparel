import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import productsData from "../assets/MensLatestProduct";
import "./css/LatestProduct.css";

const MensLatest = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getSlideItems = (startIndex, itemsPerSlide) => {
    const items = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (startIndex + i) % productsData.length;
      items.push(productsData[index]);
    }
    return items;
  };

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

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
                        <button className="btn btn-primary" onClick={() => handleShow(product)}>Details</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Row>
              <Col md={6}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid" />
              </Col>
              <Col md={6}>
                <h5>Price: ${selectedProduct.price}</h5>
                <p>{selectedProduct.description}</p>
                <p><strong>Available Colors:</strong> {selectedProduct.colors.join(", ")}</p>
                <Button variant="primary">Add to Cart</Button>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MensLatest;