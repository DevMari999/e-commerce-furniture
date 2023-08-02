import React from 'react';
import "./Home.css";
import background from "../../assets/background.jpeg";
import arrow from "../../assets/arrow.jpeg";

const Home = () => {
    return (
        <div className="main-home">
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
                        <img src={arrow} alt="Navigate to New Arrivals" />
                    </button>
                </a>
            </div>


        </div>
    );
};

export default Home;