import React from 'react';
import './Footer.css';
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="info-footer">
                <div className="adress">
                    <h4>Our Location</h4>
                    <p> New York</p>
                    <p> 000 Madison Ave </p>
                    <p> NY 10016  </p>

                </div>
              <div className="get-in-touch">
                  <h2>Get in touch</h2>
                  <div className= "sm-logo">
                      <img src={logo1} alt="youtube"/>
                      <img src={logo2} alt="instagram"/>
                      <img src={logo3} alt="facebook"/>
                  </div>
              </div>
                <div className="adress">
                    <h4>Our Email</h4>
                    <p> fwtest00@gmail.com</p>

                </div>
            </div>
            <div className="footer">
          <p>Copyright © 2023 | Furniture World</p>
            </div>
        </div>
    );
};

export default Footer;