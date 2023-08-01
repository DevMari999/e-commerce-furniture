import React from 'react';
import { useChairsContext } from '../../context/ChairsContext'; // Import the context hook
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';
import shopsofa from '../../assets/sofa9.png'
import shopchairs from '../../assets/6.png'
import {useSofasContext} from "../../context/SofasContext";
import {Link} from "react-router-dom";

const Products: React.FC = () => {
    const { chairs } = useChairsContext();
    const { sofas } = useSofasContext();

    const combinedData = [...chairs, ...sofas];

    const newArrivalChairs = combinedData.filter((chair) => chair.year === 2023);
    const onSale = combinedData.filter((chair) => chair.sale);

    return (
        <div className="new-arrivals-main" id="new-arrivals">
            <div className="new-arrival-container">
                <div className="new-arrivals-header">
                    <h2>New Arrivals - 2023</h2>
                </div >
                <ProductCard items={newArrivalChairs} />
            </div>
            <div className="links-wrapper">
            <Link to="/all-sofas" className="shop-link">
            <div className="shop-sofas-container">
                <div className="shop-sofas">
                    <div className="shop-all-header"><h1>SHOP ALL SOFAS</h1> </div>
                   <div className="shop-all-image"> <img src={shopsofa} alt="sofa"/></div>
                </div>
            </div>
            </Link>
            <Link to="/all-chairs" className="shop-link">
            <div className="shop-chairs-container">
               <div className="shop-chairs">
                   <div className="shop-all-image"><img src={shopchairs} alt="chair"/></div>
                  <div className="shop-all-header"><h1>SHOP ALL CHAIRS</h1></div>
               </div>
            </div>
            </Link>
            </div>
            <div className="new-arrival-container">
                <div className="new-arrivals-header">
                    <h2 className="on-sale-header">ON SALE!</h2>
                </div >
                <ProductCard items={onSale} />
            </div>
        </div>
    );
};

export default Products;

