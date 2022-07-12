import React from 'react';
import Item from '../Item';



const ItemList = ({products}) => {

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