import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext';
import './styles.css';
const Cart = () => {

  const { cart , removeCartItem, removeAllItems } = useContext(Shop);

  console.log(cart)
  return (
    <div className="cartContainer">
    {(cart.length) > 0 ?
    <section>
      <h2>Shopping Basket</h2>

      <ul>
        {cart.map(product => {
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
    </section> :
    <section>
      <h2>The shopping cart is empty...</h2>
    </section>}
    </div>


  )
}

export default Cart