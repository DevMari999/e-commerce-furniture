import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
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
                        <Link to="/checkout">Shop All</Link>
                    </div>
                    <div className="divider"></div>
                    <div className="main-nav-item">
                        <Link to="/cart">Cart</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
