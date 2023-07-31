import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import ProductCard from '../ProductCard/ProductCard';
import {Link} from "react-router-dom";


const Cart = () => {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
    } = useCartContext();

    const handleRemoveFromCart = (itemId: number) => {
        removeFromCart(itemId);
    };

    const handleIncreaseQuantity = (itemId: number) => {
        console.log('Increasing quantity of item:', itemId);
        increaseQuantity(itemId);
    };

    const handleDecreaseQuantity = (itemId: number) => {
        console.log('Decreasing quantity of item:', itemId);
        decreaseQuantity(itemId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    console.log('Current cart items:', cartItems);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>is empty.</p>
            ) : (
                <>
                    <div className="all-cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <ProductCard items={[item]} />
                                <div className="quantity-buttons">
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleDecreaseQuantity(item.id)}>
                                        -
                                    </button>
                                    <span className="item-quantity">{item.quantity}</span>
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleIncreaseQuantity(item.id)}>
                                        +
                                    </button>
                                </div>
                                <button
                                    className="cart-button"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-buttons-container">
                        <button className="cart-button" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <Link to="/checkout">
                            <button className="cart-button">Checkout</button>
                        </Link>

                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;







