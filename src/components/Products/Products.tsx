import React from 'react';
import { useChairsContext } from '../../context/ChairsContext'; // Import the context hook
import ChairsCard from '../ChairsCard/ChairsCard';
import './Products.css';
import shopsofa from '../../assets/sofa3.png'
import shopchairs from '../../assets/7.png'

const Products: React.FC = () => {
    const { chairs } = useChairsContext();


    const newArrivalChairs = chairs.filter((chair) => chair.year === 2023);

    return (
        <div className="new-arrivals-main" id="new-arrivals">
            <div className="new-arrival-container">
                <div className="new-arrivals-header">
                    <h2>New Arrivals - 2023</h2>
                </div >
                <ChairsCard chairs={newArrivalChairs} />
            </div>
            <div className="shop-sofas-container">
                <div className="shop-sofas">
                    <img src={shopsofa}/>
                    <h1>SHOP ALL SOFAS</h1>
                </div>
            </div>
            <div className="shop-chairs-container">
               <div className="shop-chairs">
                   <h1>SHOP ALL CHAIRS</h1>
                   <img src={shopchairs}/>
               </div>
            </div>
        </div>
    );
};

export default Products;

