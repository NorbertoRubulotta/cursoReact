import React from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';


const ItemListContainer = ({greeting}) => {
    
  return (
    <div className='container'>
        <h2>{greeting}</h2>
        <ItemList/>
    </div>
    
  )
}

export default ItemListContainer