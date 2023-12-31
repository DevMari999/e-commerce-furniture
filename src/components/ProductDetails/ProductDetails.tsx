import React from 'react';
import {Chair, Sofa} from '../../types/types';
import "./ProductDetails.css";
import {useCartContext} from '../../context/CartContext';
import newlogo from "../../assets/logos/new.webp";
import salelogo from "../../assets/logos/sale.webp";

type ProductItem = Chair | Sofa;

type ProductDetailsProps = {
    product: ProductItem;
    onClose: () => void;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({product, onClose}) => {
    const {addToCart} = useCartContext();

    const handleAddToCart = () => {
        addToCart(product);
        onClose();
    };

    return (
        <div className="product-details">
            <div className="button-div">
                <div className="close-button">
                    <button onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className={`product-details-content ${product.type === 'sofa' ? 'sofa2' : 'chair2'}`}>
                    <img src={`${product.image}`} alt={product.name}/>
                    <div className="product-description">
                        <h3>{product.name}</h3>
                        <span className={product.sale ? "on-sale" : ""}>
  Price: {product.sale ? <>
                            <del>${product.price.toFixed(2)}</del>
                            ${(product.price * 0.8).toFixed(2)}</> : `$${product.price.toFixed(2)}`}
</span>
                        <h4>Description:</h4>
                        <p>{product.description}</p>
                        <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
                        {product.year === 2023 && <div className="card-logo">
                            <img src={newlogo} alt="New"/>
                        </div>}
                        {product.sale && <div className="card-logo">
                            <img src={salelogo} alt="New"/>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


