import React from 'react';
import { Chair } from '../../types/types';
import "./ChairsCard.css";

type ChairsCardProps = {
    chairs: Chair[];
};

const ChairsCard: React.FC<ChairsCardProps> = ({ chairs }) => {
    return (
        <div className="main-productcard">
            <div className="all-cards">
                {chairs.map((chair) => (
                    <div key={chair.id} className="product-card">
                        <img src={`${chair.image}`} alt={chair.name} />
                        <h3>{chair.name}</h3>
                        <span>Price: ${chair.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChairsCard;


