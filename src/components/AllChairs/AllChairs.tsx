import React from 'react';
import ChairsCard from '../ChairsCard/ChairsCard';
import { useChairsContext } from '../../context/ChairsContext';
import './AllChairs.css';

const AllChairs = () => {
    const { chairs } = useChairsContext();

    return (
        <div className="all-chairs-main">
            <ChairsCard chairs={chairs} />
        </div>
    );
};

export default AllChairs;

