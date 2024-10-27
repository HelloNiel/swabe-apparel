import React, { useState } from 'react';
import Carousel from '../Carousel';
import Features from '../Features';
import Product from './Product';
import MensLatest from '../MensLatest';
import WomensLatest from '../WomensLatest';
import Footer from '../partial/Footer';
import { FaShoppingCart } from 'react-icons/fa';
import CartModal from './CartModal';

function Home() {
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
    <>
      <Carousel />
      <Features />
      <Product addToCart={addToCart} />
      <MensLatest />
      <WomensLatest />
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
    </>
  );
}

export default Home;