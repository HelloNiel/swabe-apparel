import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/CartModal.css';

const CartModal = ({ isOpen, toggleModal, cartItems, totalPrice }) => {
    if (!isOpen) return null;

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <button className="close-button" onClick={toggleModal}>
                    <FaTimes size={20} />
                </button>
                <div className="cart-items">
                    <h2>Shopping Cart</h2>
                    <div>{cartItems.length} Items</div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div className="cart-item-details">
                                <strong>{item.name}</strong>
                                <span>{item.description}</span>
                            </div>
                            <div className="quantity-controls">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <span>€ {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3>Summary</h3>
                    <div>Items: {cartItems.length}</div>
                    <div>Shipping: Standard Delivery - €5.00</div>
                    <div style={{ marginTop: '10px' }}>
                        <strong>Total Price: € {(totalPrice + 5).toFixed(2)}</strong>
                    </div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;