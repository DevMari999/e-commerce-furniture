import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import {useCartContext} from '../../context/CartContext';
import cart from "../../assets/logos/cart.webp";

const Header: React.FC = () => {
    const {cartItems} = useCartContext();
    const {pathname} = useLocation();
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    const homeLinkTarget = pathname === '/' ? '#home' : '/';
    const logoLinkTarget = pathname === '/' ? '#home' : '/';

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <header className="header">
            <nav className="container">
                <Link to={logoLinkTarget} className="logo" onClick={scrollToTop}>FW</Link>
                <div className="nav-elements">
                    <div className="main-nav-item">
                        <Link to={homeLinkTarget} onClick={scrollToTop}>Home</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/all-chairs" onClick={scrollToTop}>Chairs</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/all-sofas" onClick={scrollToTop}>Sofas</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/cart" onClick={scrollToTop}>
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
