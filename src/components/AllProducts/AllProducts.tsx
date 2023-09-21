import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useChairsContext} from '../../context/ChairsContext';
import {useSofasContext} from '../../context/SofasContext';
import './AllProducts.css';
import ProductCard from '../ProductCard/ProductCard';

import beige from '../../assets/colors/beige.webp';
import blue from '../../assets/colors/blue.webp';
import grey from '../../assets/colors/gray.webp';
import pink from '../../assets/colors/pink.webp';
import purple from '../../assets/colors/purple.webp';
import green from '../../assets/colors/green.webp';
import black from '../../assets/colors/black.webp';
import peach from '../../assets/colors/peach.webp';

const AllProducts = () => {
    const location = useLocation();
    const {chairs} = useChairsContext();
    const {sofas} = useSofasContext();

    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const itemsToRender =
        location.pathname === '/all-chairs' ? chairs : location.pathname === '/all-sofas' ? sofas : [];

    const filteredItems = selectedColor
        ? itemsToRender.filter((item) => item.color === selectedColor)
        : itemsToRender;

    const handleColorSelection = (color: string | null) => {
        setSelectedColor(color);
    };

    useEffect(() => {
        setSelectedColor(null);
    }, [location]);

    return (
        <div className="all-products-main">
            <div className="color-filter">
                <button className="show-all" onClick={() => handleColorSelection(null)}>Show All</button>
                <button onClick={() => handleColorSelection('beige')}><img src={beige} alt="beige"/></button>
                <button onClick={() => handleColorSelection('blue')}><img src={blue} alt="blue"/></button>
                <button onClick={() => handleColorSelection('green')}><img src={green} alt="green"/></button>
                <button onClick={() => handleColorSelection('black')}><img src={black} alt="black"/></button>
                <button onClick={() => handleColorSelection('gray')}><img src={grey} alt="grey"/></button>
                <button onClick={() => handleColorSelection('pink')}><img src={pink} alt="pink"/></button>
                <button onClick={() => handleColorSelection('purple')}><img src={purple} alt="purple"/></button>
                <button onClick={() => handleColorSelection('peach')}><img src={peach} alt="peach"/></button>

            </div>
            <div>
                <ProductCard items={filteredItems}/>
            </div>
        </div>
    );
};

export default AllProducts;

