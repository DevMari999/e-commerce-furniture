import React from 'react';
import './Footer.css';
import logo1 from "../../assets/logos/youtube-logo.webp";
import logo2 from "../../assets/logos/instagram-logo.webp";
import logo3 from "../../assets/logos/facebook-logo.webp";

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="info-footer">
                <div className="adress">
                    <h4>Our Location</h4>
                    <p> New York</p>
                    <p> 000 Madison Ave </p>
                    <p> NY 10016 </p>
                </div>
                <div className="get-in-touch">
                    <h2>Get in touch</h2>
                    <div className="sm-logo">
                        <img src={logo1} alt="youtube"/>
                        <img src={logo2} alt="instagram"/>
                        <img src={logo3} alt="facebook"/>
                    </div>
                </div>
                <div className="adress">
                    <h4>Our Email</h4>
                    <p> fw85637@gmail.com</p>

                </div>
            </div>
            <div className="footer">
                <p>Copyright © 2023 | Furniture World</p>
            </div>
        </footer>
    );
};

export default Footer;
