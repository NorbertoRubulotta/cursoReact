import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({product}) => {
  product.stock = 10;

 const  navigate = useNavigate();
const [qtyAdded, setQtyAdded] = useState(0);

  const handleAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
const {addItem} = useContext(Shop)

  const handleConfirm = (count) => {
    setQtyAdded(count);
  }
const handleTerminate = () => {
addItem(product, qtyAdded);

navigate('/cart');

}

console.log(qtyAdded);

  return (
    <article className="product-detail">
    <img src={product.image} className="product-detail__img" />
    <div className="product-detail__info">
      <h2 className="name">{product.title}</h2>
      <p className="description">{product.description}</p>
      <p>Price: ${product.price}</p>

      { !qtyAdded ?
        <ItemCount onConfirm={handleConfirm} stock={product.stock} />
        :
        <button className="btnFinishPurchase" onClick={handleTerminate}> Finish Purchase </button>
      
      }
    </div>

  </article>

  )
}
export default ItemDetail