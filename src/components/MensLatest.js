import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';
import productsData from "../assets/MensLatestProduct";

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
                        <button className="btn btn-primary" onClick={() => handleShow(product)}>View</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg" centered dialogClassName="custom-modal">
        <Modal.Body className="p-0">
          <Button variant="link" className="close-button" onClick={handleClose}>
            <FaTimes size={20} />
          </Button>
          {selectedProduct && (
            <Row className="g-0">
              <Col md={6}>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid w-100 h-100 object-fit-cover" />
              </Col>
              <Col md={6} className="d-flex flex-column p-4">
                <div>
                  <h3>{selectedProduct.name}</h3>
                  <h5>Price: ${selectedProduct.price}</h5>
                  <p>{selectedProduct.description}</p>
                  <p><strong>Available Colors:</strong> {selectedProduct.colors.join(", ")}</p>
                </div>
                <div className="mt-auto">
                  <Button variant="dark" className="w-100 add-to-cart-button">Add to Cart</Button>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
      <style jsx>{`
        .custom-modal .modal-content {
          border-radius: 0;
        }
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          color: black !important;
          opacity: 1 !important;
          z-index: 1;
        }
        .close-button:hover, .close-button:focus {
          color: black !important;
          opacity: 0.75 !important;
          box-shadow: none !important;
        }
        .add-to-cart-button {
          border-radius: 0;
          text-transform: uppercase;
          font-weight: bold;
          padding: 8px 16px;
        }
      `}</style>
    </div>
  );
};

export default MensLatest;