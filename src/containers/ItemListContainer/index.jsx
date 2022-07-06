import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';


const ItemListContainer = ({greeting}) => {
  
  const [products, setProducts] = useState([]);
  const { category }= useParams(); 

  

      const getProducts = async () => {
          try {

              const response = await fetch('https://fakestoreapi.com/products');
              const data = await response.json();
              console.log(data);

              if (category) {

               const filteredProducts = data.filter(products => products.category === category);

               setProducts(filteredProducts);
              } else {
                setProducts(data);
              }
              

          } catch (error) {
              console.log("Error:");
              console.log(error);
          }

        }

    useEffect(() => {
      getProducts()
      } , [category])



  console.log(products);

   




  return (
    <div className='container'>
        <h2>{greeting}</h2>
        <ItemList products = {products} />
    </div>
    
  )
}

export default ItemListContainer