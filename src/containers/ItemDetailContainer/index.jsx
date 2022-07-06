import React, { useEffect, useState } from 'react';

import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState (null);
    const params = useParams();
    console.log(params);

   

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.error(error);
            }
        }

        getProducts ();

    }, [params] )
  

  return (  
    <section className="item-detail-container">
    {productDetail? <ItemDetail product = {productDetail} /> : <TailSpin color="grey" ariaLabel="loading-indicator" />}
    </section>
  )
}

export default ItemDetailContainer
