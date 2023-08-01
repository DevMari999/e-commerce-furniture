import React, { useState } from 'react';
import { Chair, Sofa } from '../../types/types';
import "./ProductCard.css";
import newlogo from "../../assets/new.png";
import salelogo from "../../assets/sale.png";
import ProductDetails from '../ProductDetails/ProductDetails';

type ProductItem = Chair | Sofa;

type ProductCardProps = {
    items: ProductItem[];
};

const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

    const handleProductClick = (item: ProductItem) => {
        setSelectedProduct(item);
    };

    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="main-productcard">
            <div className=" all-cards">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`product-card ${item.type === 'sofa' ? 'sofa' : 'chair'}`}
                        onClick={() => handleProductClick(item)}
                    >
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <span className={item.sale ? "on-sale" : ""}>
  Price: {item.sale ? <><del>${item.price.toFixed(2)}</del> ${ (item.price * 0.8).toFixed(2) }</> : `$${item.price.toFixed(2)}`}
</span>
                        {item.year >= 2023 && (
                            <div className="card-logo">
                                <img src={newlogo} alt="New" />
                            </div>
                        )}
                        {item.sale && (
                            <div className="card-logo">
                                <img src={salelogo} alt="Sale" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {selectedProduct && <ProductDetails product={selectedProduct} onClose={handleClose} />}
        </div>
    );
};

export default ProductCard;





