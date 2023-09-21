import React, {createContext, useContext, useState} from 'react';
import {Chair, Sofa} from '../types/types';

export type CartItem = Chair | Sofa;

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    increaseQuantity: (itemId: number) => void;
    decreaseQuantity: (itemId: number) => void;
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

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id ? {...cartItem, quantity: (cartItem.quantity || 1) + 1} : cartItem
                );
            } else {
                return [...prevItems, {...item, quantity: 1}];
            }
        });
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const increaseQuantity = (itemId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, quantity: (item.quantity || 1) + 1} : item
            )
        );
    };

    const decreaseQuantity = (itemId: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, quantity: Math.max(1, (item.quantity || 1) - 1)} : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export {CartProvider, CartContext};








