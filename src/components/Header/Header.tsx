import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useCartContext } from '../../context/CartContext';
import cart from "../../assets/cart.png";

const Header: React.FC = () => {
    const { cartItems } = useCartContext();

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            <nav className="container">
                <Link to="/" className="logo">FW</Link>
                <div className="nav-elements">
                    <div className="main-nav-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/all-chairs">Chairs</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/all-sofas">Sofas</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/cart">
                            <img className="cart-logo" src={cart} alt="cart-logo"/>
                            {totalItemsInCart > 0 && <span className="cart-item-count">{totalItemsInCart}</span>}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
