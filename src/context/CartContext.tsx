import React, { createContext, useContext, useState } from 'react';
import {Chair, Sofa} from "../types/types";

export type CartItem = Chair | Sofa;

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
    const cartContext = useContext(CartContext);
    if (!cartContext) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return cartContext;
};


type CartProviderProps = {
    children: React.ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };

