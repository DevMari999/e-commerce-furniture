import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import ProductCard from '../ProductCard/ProductCard'; // Import the ProductCard component

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCartContext();

    const handleRemoveFromCart = (itemId: number) => {
        removeFromCart(itemId);
    };

    const handleClearCart = () => {
        clearCart();
    };

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
                                <button className="cart-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    </div>
                    <div className="cart-buttons-container">
                    <button className="cart-button" onClick={handleClearCart}>Clear Cart</button>
                    <button className="cart-button" >Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;



