import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartForm from '../../components/CartForm';
import { Shop } from '../../context/ShopContext';
import './styles.css';


const Cart = () => {

  const { cart, removeCartItem, removeAllItems, finalPrice, setFinalPrice, setTotalItems } = useContext(Shop);
  let CalculatedFinalPrice = 0;
  let totalQuantity = 0;
  const [showForm, setShowForm] = useState(true);

  return (

    <div>
      {(cart.length) > 0 ?

        <section className="cartContainer">

          <article>
            <h2>SHOPPING CART</h2>
            <ul>
              {cart.map(product => {
                let totalPrice = product.price * product.quantity;
                CalculatedFinalPrice = CalculatedFinalPrice + totalPrice;
                setFinalPrice(CalculatedFinalPrice.toFixed(2));
                totalQuantity = totalQuantity + product.quantity;
                setTotalItems(totalQuantity)
                return <li key={product.id}>
                  <div className='cartProductCard'>
                    <img className='cartProductCard__image' src={product.image} alt={product.title} />
                    <div>
                      <h3 className='cartProductCard__title'>{product.title}</h3>
                      <p className='cartProductCard__price'>Price: {product.price} USD</p>
                      <p className='cartProductCard__quantity'>Quantity: {product.quantity}</p>
                      <button className='btnRemoveItem' onClick={() => removeCartItem(product)}>Remove Product</button>
                    </div>
                  </div>
                </li>
              })}
            </ul>
            <button className='btnRemoveAll' onClick={() => removeAllItems()}>Remove All Items</button>
          </article>
          <article className='checkOut'>
            <span className='cartFinalPrice'>Final Price : {finalPrice} USD</span>
            
            { showForm ? <button className='btnConfirmPurchase' onClick={() => {setShowForm(!showForm);}}> GO TO CHECK OUT</button> :  <CartForm/>}
          </article>
        </section> :
        <section className='cartEmpty'>
          <h2>The shopping cart is empty...</h2>
          <button className='BtnBackToHomeCart'><Link to='/'>Back to Home</Link></button>
        </section>}
    </div>
  )

}

export default Cart