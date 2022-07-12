import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext';
import './styles.css';
const Cart = () => {

  const { cart , removeCartItem } = useContext(Shop);

  console.log(cart)
  return (
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

    </section>



  )
}

export default Cart