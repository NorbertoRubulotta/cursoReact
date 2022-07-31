import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = ({title, image, price, id, brand, category}) => {

    
      const navigate = useNavigate();

    const handleDetail = () => {
      console.log('navega hacia el detail')
      navigate(`/detail/${id}`);
    }

  return (
   
  <article onClick={handleDetail} className="product-card">
      <img className="product-card__image" src={image} />
      <h5 className="product-card__category"> {category}</h5>
      <h4 className="product-card__brand"> {brand}</h4>
      <p className="product-card__title">{title}</p>
      <span className="product-card__price">${price} <br/></span>
  </article>

  )
}

export default Item

