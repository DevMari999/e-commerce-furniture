import React from 'react';
import "./Home.css";
import background from "../../assets/homepage.webp";
import arrow from "../../assets/logos/arrow.webp";

const Home = () => {
    return (
        <section id="home" className="main-home">
            <div className="background-home">
                <img src={background} alt="background"/>
            </div>
            <div className="header-home">
                <h1>FURNITURE WORLD</h1>
                <h2>Were style meets functionality</h2>
            </div>
            <div>
                <a href="/#new-arrivals">
                    <button className="arrow">
                        <img src={arrow} alt="Navigate to New Arrivals"/>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Home;
