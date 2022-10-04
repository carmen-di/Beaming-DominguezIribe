import React from 'react'
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext();

const CartContext = ({children}) => {

    const[cart, setCart] = useState([])

    const addItem = (item) => {

        const repeatProducts = isInCart(item.id);
        
        if(repeatProducts) {
            const modifiedCart = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity;
                    return product;
                } 
                return product;
            });
            setCart(modifiedCart)
        } else {
            const cartModified = [...cart, item];
            setCart(cartModified);   
        };
    };
    
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };
    
    const removeItem = (itemRemove) => {
        const removedCart = cart.filter(product => product.id !== itemRemove);
        setCart(removedCart); 
    }
    
    const clearCart = () => {
        setCart([]);
    }

    const total = () => {
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
        return total;
    }

    return (
        <Shop.Provider value= {{cart, addItem, removeItem, clearCart, total}}>
            {children}
        </Shop.Provider>
    )
}

export default CartContext;