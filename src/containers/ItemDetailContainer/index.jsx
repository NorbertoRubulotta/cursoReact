import React, { useEffect, useState } from 'react';

import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {



    const [productDetail, setProductDetail] = useState (null);


    useEffect(() =>{
        const getProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/10');
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.error(error);
            }
        }
        getProducts ();
    }, [] )
  

  return (  
    <section className="item-detail-container">
    {productDetail? <ItemDetail product = {productDetail} /> : <p>Cargando Producto...</p>}
    </section>
  )
}

export default ItemDetailContainer

