import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";
import products from "../assets/ProductData";
import "./css/TopProduct.css";

function TopProduct() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h3 className="product-title">Products</h3>
        <p className="product-description">
          Discover our top products that are highly rated and popular among our
          customers.
        </p>
      </div>
      <Row className="g-3 custom-alignment">
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card className="custom-card">
              <div className="card-img-container">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={product.imgSrc}
                  alt={product.alt}
                />
              </div>
              <Card.Body className="card-body">
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Button
                  className="details-button"
                  variant="primary"
                  onClick={() => handleShow(product)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Size:</strong> {selectedProduct.size}
            </p>
            <p>
              <strong>Colors:</strong> {selectedProduct.colors.join(", ")}
            </p>
            <p>
              <strong>Stock:</strong> {selectedProduct.stock}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default TopProduct;
