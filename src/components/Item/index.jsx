import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Item = ({title, image, price, id, description, category}) => {

    
      const navigate = useNavigate();

    const handleDetail = () => {
      console.log('navega hacia el detail')
      navigate(`/detail/${id}`);
    }

  return (
    
  <article onClick={handleDetail} className="product-card">
      <img className="product-card__image" src={image} />
      <div className= "product-card__div column">
      <h4 className="product-card__category"> {category}</h4>
      <h3 className="product-card__title">{title}</h3>
      <span className="product-card__price">${price} <br/></span>
      <span className="product-card__description">{description}</span>
      </div>
     
    </article>
 
        
    
  )
}

export default Item