import React from 'react'
import { useState } from 'react';
import './styles.css';




const ItemCount = ({ stock , onConfirm }) => {


    const initial = 1;
    

    const [count, setCount] = useState(initial);


    const onAdd = (number) => {
        setCount(count + number);

    };

    return (
        <div className="count-container">
            <div className="add-quantity">
            <button className="btn-plus" onClick={() => onAdd(-1)} disabled={count === initial ? true : null}>-</button>
            <span>{count} </span>
            <button className="btn-minus" onClick={() => onAdd(+1)} disabled={count === stock ? true : null}>+</button>
            </div>
            <div className="addToCart">
            <button className="btn-addToCart" onClick={() => onConfirm(count) }
                disabled={stock === 0 ? true : null}> Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCount