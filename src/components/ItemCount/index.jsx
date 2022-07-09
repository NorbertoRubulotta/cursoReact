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
            <div className="flex-row flex-center">
            <button className="btn" onClick={() => onAdd(-1)} disabled={count === initial ? true : null}>-</button>
            <p>{count} </p>
            <button className="btn" onClick={() => onAdd(+1)} disabled={count === stock ? true : null}>+</button>
            </div>
            <button className="btn" onClick={() => onConfirm(count) }
                disabled={stock === 0 ? true : null}> Agregar al carrito</button>

        </div>
    )
}

export default ItemCount