import React from 'react'
import './styles.css';

const ItemDetail = ({product}) => {
  return (
    <article className="product-detail">
    <img src={product.image} className="product-detail__img" />
    <div className="product-detail__info">
      <h2 className="name">{product.title}</h2>
      <p className="description">{product.description}</p>
        <p>Price: ${product.price}</p>
    </div>
  </article>
  )
}

export default ItemDetail