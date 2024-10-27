import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/LatestProduct.css";
import shirtData from "../../assets/ShirtsData";
import Footer from "../partial/Footer";
import CartModal from './CartModal';
import { FaShoppingCart } from 'react-icons/fa';

const ShirtProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div id="mens-latest" className="mens-latest mt-5">
      <Container fluid className="px-3 px-md-5 mb-5">
        <h1 className="text-center mb-5">MR. SWABE SHIRTS PRODUCT</h1>
        <Row className="gx-3 gx-md-4">
          {shirtData.map((product) => (
            <Col key={product.id} xs={6} md={3}>
              <Card className="mens-latest-card mb-3">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="mens-latest-card-body">
                  <Card.Title>{product.name}</Card.Title>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', color: 'black', cursor: 'pointer' }} onClick={toggleModal}>
        <FaShoppingCart size={30} />
      </div>
      <CartModal 
        isOpen={isModalOpen} 
        toggleModal={toggleModal} 
        cartItems={cartItems} 
        totalPrice={totalPrice} 
      />
    </div>
  );
};

export default ShirtProduct;