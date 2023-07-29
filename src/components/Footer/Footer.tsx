import React from 'react';
import './Footer.css';
import logo1 from "../../assets/1logo.png";
import logo2 from "../../assets/2logo.png";
import logo3 from "../../assets/3logo.png";
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