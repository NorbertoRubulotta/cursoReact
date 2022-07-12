import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState('valor');

    const [cart, setCart] = useState([]);

    //Agregar un item al carrito, acorde a la cantidad

    const addItem = (product, quantity) => {
console.log(product, quantity);

       const productoRepetido = isInCart(product);
        console.log(productoRepetido);
        if (productoRepetido) {
            productoRepetido.quantity += quantity
            setCart([...cart])
        } else {
            //Es útil cuando el producto no está presente en el carrito
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


    return (

        <Shop.Provider value={{ estadoA, setEstadoA, addItem, cart, removeCartItem }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider