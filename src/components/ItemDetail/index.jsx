import React from 'react'
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({product}) => {

  const handleAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
  return (
    <article className="product-detail">
    <img src={product.image} className="product-detail__img" />
    <div className="product-detail__info">
      <h2 className="name">{product.title}</h2>
      <p className="description">{product.description}</p>
        <p>Price: ${product.price}</p>
        <ItemCount handleAdd={handleAdd} />
    </div>
  </article>
  )
}
export default ItemDetail