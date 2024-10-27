import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/CartModal.css';

const CartModal = ({ isOpen, toggleModal, cartItems }) => {
    if (!isOpen) return null;

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <button className="close-button" onClick={toggleModal}>
                    <FaTimes size={25} />
                </button>
                <div className="cart-items">
                    <h2>Shopping Cart</h2>
                    <div>{cartItems.length} Items</div>
                    {cartItems.length === 0 ? (
                        <div className="cart-item">
                            <strong>No items in the cart</strong>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="cart-item-details">
                                    <strong>{item.name}</strong>
                                    <span>{item.description}</span>
                                </div>
                                <div className="quantity-controls">
                                    <button className="quantity-button">-</button>
                                    <span>{item.quantity}</span>
                                    <button className="quantity-button">+</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-summary">
                    <h3>Summary</h3>
                    <div>Items: {cartItems.length > 0 ? cartItems.length : 0}</div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
            <style jsx>{`
                .cart-modal {
                    border-radius: 0;
                }
                .quantity-button,
                .checkout-button {
                    border-radius: 0;
                }
            `}</style>
        </div>
    );
};

export default CartModal;