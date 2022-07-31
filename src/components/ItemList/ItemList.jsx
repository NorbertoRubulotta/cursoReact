import React from 'react';
import Item from '../Item';
import './styles.css';



const ItemList = ({products}) => {

    return (
        <div className="product-list-container">
            {products ? (
                <> {
                    products.map((product) => {
                        return (
                            <div className="product" key={product.id}>
                                <Item
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    category={product.category}
                                    description={product.description}
                                    id={product.id}
                                    brand={product.brand}
                                    stock={product.stock}
                                />
                            </div>);
                    })
                }</>)
                : (<p> Loading...</p>)}
        </div>
    );
};















export default ItemList