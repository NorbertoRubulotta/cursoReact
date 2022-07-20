import React, { useEffect, useState } from 'react';

import ItemDetail from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState(null);
    const params = useParams();
    console.log(params);



    useEffect(() => {
        const getProducts = async () => {
            try {
                const docRef = doc(db, "products", params.productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const productDetail = {id: docSnap.id, ... docSnap.data()};
                    setProductDetail(productDetail);
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                 /* const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
                const data = await response.json(); 
                setProductDetail(data); */
            } catch (error) {
                console.error(error);
            }
        }

        getProducts();

    }, [params])


    return (
        <section className="item-detail-container">
            {productDetail ? <ItemDetail product={productDetail} /> : <TailSpin color="grey" ariaLabel="loading-indicator" />}
        </section>
    )
}

export default ItemDetailContainer
