import React from 'react';
import { Sofa } from '../../types/types';
import "./SofaCard.css";

type SofaCardProps = {
    sofas: Sofa[];
};

const SofaCard: React.FC<SofaCardProps> = ({ sofas }) => {
    return (
        <div className="main-sofa-card">
            <div className="all-sofa-cards">
                {sofas.map((sofa) => (
                    <div key={sofa.id} className="sofa-card">
                        <img src={`${sofa.image}`} alt={sofa.name} />
                        <h3>{sofa.name}</h3>
                        <span>Price: ${sofa.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SofaCard;
