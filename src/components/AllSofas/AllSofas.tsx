import React from 'react';
import { useSofasContext } from '../../context/SofasContext';
import './AllSofas.css';
import SofaCard from "../SofaCard/SofaCard";

const AllChairs = () => {
    const { sofas } = useSofasContext();

    return (
        <div className="all-sofas-main">
            <SofaCard sofas={sofas} />
        </div>
    );
};

export default AllChairs;
