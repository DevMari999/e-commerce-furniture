import React from 'react';
import "./Home.css";
import background from "../../assets/background.png";

const Home = () => {
    return (
        <div className="main-home">
            <div className="background-home">
                <img src={background}/>
            </div>
            <div className="header-home">
                <h1>FURNITURE WORLD</h1>
                <h2>WHERE STYLE MEETS FUNCTIONALITY</h2>
            </div>
            
        </div>
    );
};

export default Home;