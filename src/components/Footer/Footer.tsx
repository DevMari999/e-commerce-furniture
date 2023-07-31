import React from 'react';
import './Footer.css';
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
const Footer = () => {
    return (
        <div className="footer-main">
            <div className="info-footer">
              <div className="get-in-touch">
                  <h2>Get in touch</h2>
                  <div className= "sm-logo">
                      <img src={logo1}/>
                      <img src={logo2}/>
                      <img src={logo3}/>
                  </div>
              </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
};

export default Footer;