import React, { useContext , useState } from 'react'
import { Link } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import './styles.css';
const Cart = () => {

  const { cart , removeCartItem, removeAllItems, finalPrice, setFinalPrice, totalItems, setTotalItems } = useContext(Shop);
  let CalculatedFinalPrice = 0;
  let totalQuantity = 0;;
  console.log(cart)
  return (
    
    <div className="cartContainer">
    {(cart.length) > 0 ?
    <section>
      <h2>Shopping Basket</h2>

      <ul>
        {cart.map(product => {
          let totalPrice = product.price * product.quantity; 
           CalculatedFinalPrice= CalculatedFinalPrice + totalPrice;
           setFinalPrice(CalculatedFinalPrice.toFixed(2));
           totalQuantity = totalQuantity + product.quantity; 
           setTotalItems(totalQuantity)
           console.log(totalQuantity)
          return <li key={product.id}>
            <div className='cartProductCard'>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => removeCartItem(product)}>Delete Item</button>
            </div>
          </li>
          
        })}
        
      </ul>
      <button onClick={() => removeAllItems()}>Remove All Items</button>
      <h3>Final Price : {finalPrice}</h3>
    </section> :
    <section>
      <h2>The shopping cart is empty...</h2>
      <button className='backToHomeCart'><Link to = '/'>Back to Home</Link></button>
    </section>}
    </div>


  )
  
}

export default Cart