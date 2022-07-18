import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {


    const [cart, setCart] = useState([]);

    const [finalPrice, setFinalPrice] = useState (null);

    const [totalItems, setTotalItems] = useState (null);


    const addItem = (product, quantity) => {
        console.log(product, quantity);

       const productoRepetido = isInCart(product);
        console.log(productoRepetido);
        if (productoRepetido) {
            productoRepetido.quantity += quantity
            setCart([...cart])
        } else {

            setCart([...cart, {...product, quantity: quantity}])
        }
 
    }

    const isInCart = (product) => {
        return cart.find(elemento => elemento.id === product.id)
    }

    const removeCartItem = (product) => {
        const notDeletedItems = cart.filter(element => element.id !== product.id);
        console.log(notDeletedItems);
        setCart(notDeletedItems);
    }
const removeAllItems = () => {
    setCart([]);
}

    return (

        <Shop.Provider value={{ addItem, cart, removeCartItem, removeAllItems, finalPrice, setFinalPrice, totalItems, setTotalItems }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider