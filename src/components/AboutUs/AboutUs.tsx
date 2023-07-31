import React from 'react';
import "./AboutUs.css";
import aboutus from "../../assets/aboutus.png";

const AboutUs = () => {
    return (
        <div className="about-us-main">
            <div className="about-us-content">
            <div className="about-us-image">
                <img src={aboutus} alt="about-us"/>
            </div>
            <div className="our-story">
             <h2>About Us</h2>
                <p>Founded with a passion for sustainable living, our furniture store brings together timeless designs and eco-friendly materials to create spaces that inspire. From humble beginnings to a cherished destination, we strive to make a positive impact on both homes and the environment. Discover a curated collection that reflects our commitment to craftsmanship and sustainability, making your journey with us truly exceptional. Welcome to our furniture store, where every piece tells a story of mindful living and conscious choices.</p>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;