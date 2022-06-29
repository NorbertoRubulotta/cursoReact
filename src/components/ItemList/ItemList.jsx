import React, { useEffect, useState } from 'react';
import Item from '../Item';
/* import './styles/ItemList.css'; */



const ItemList = () => {
    const [products, setProducts] = useState([]);

    /*   const getProductos = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
   */
    useEffect(() => {

        const getProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();


                setProducts(data);
            } catch (error) {
                console.log("Error:");
                console.log(error);
            }
        }

        getProductos()

    }, [])

    console.log(products);



    return (
        <div className="product-list-container">
            {products ? (
                <> {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Item
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                    description={product.description}
                                    id={product.id}
                                />
                            </div>);
                    })
                }</>)
                : (<p> Loading...</p>)}
        </div>
    );
};















export default ItemList