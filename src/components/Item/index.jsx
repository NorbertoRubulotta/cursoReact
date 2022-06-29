import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css';

const Item = ({title, image, price, id, description, category}) => {

    const handleAdd = (count) => {
        alert(`Agregaste ${count} productos`);
      };


  return (
    
  <article className="product-card">
      <img className="product-card__image" src={image} />
      <div className= "product-card__div column">
      <h4 className="product-card__category"> {category}</h4>
      <h3 className="product-card__title">{title}</h3>
      <span className="product-card__price">${price} <br/></span>
      <span className="product-card__description">{description}</span>
      <ItemCount handleAdd={handleAdd} />
      </div>
    </article>

        
    
  )
}

export default Item