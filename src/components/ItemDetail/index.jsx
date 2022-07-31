import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import './styles.css';

const ItemDetail = ({product}) => {
  const {totalItems, setTotalItems} = useContext(Shop);

 const  navigate = useNavigate();
const [qtyAdded, setQtyAdded] = useState(0);

  const handleAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
const {addItem} = useContext(Shop)

  const handleConfirm = (count) => {
    setQtyAdded(count);
    handleAdd(count);
    addItem(product, count);
    setTotalItems(totalItems+count)
  }

const handleTerminate = () => {
navigate('/cart');
}
const handleContinue = () => {
  navigate('/');
  }

  return (
    <article className="product-detail">
    <img src={product.image} className="product-detail__img" />
    <div className="product-detail__info">
      <h3 className="product-detail__brand">{product.brand}</h3>
      <h2 className="product-detail__name">{product.title}</h2>
      <p className="product-detail__description">{product.description}</p>
      <p className="product-detail__price">Price: USD {product.price}</p>

      { !qtyAdded ?
        <ItemCount onConfirm={handleConfirm} stock={product.stock} />
        :
        <div>
        <button className="btnContinue" onClick={handleContinue}> Continue shopping </button>
        <button className="btnFinishPurchase" onClick={handleTerminate}> Pay now </button>
        
        </div>
      }
      <p className="extra-info__brand">Brand: <span className="extra-info__span">{product.brand}</span></p>
      <p className="extra-info__category">Category: <span className="extra-info__span">{product.category}</span></p>
      <p className="extra-info__origin">Country of origin: <span className="extra-info__span">{product.origin}</span></p>
      <p className="extra-info__alcohol">Alcohol %: <span className="extra-info__span">{product.alcohol}</span></p>
      <p className="extra-info__volume">Volume: <span className="extra-info__span">{product.volume}</span></p>
    </div>

  </article>

  )
}
export default ItemDetail