import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = ({greeting}) => {
  
  const [products, setProducts] = useState([]);
  const { category }= useParams(); 

  

      const getProducts = async () => {
          try {

            const q = query(collection(db, "products"));

            const querySnapshot = await getDocs(q);
            const allProducts = [];
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              /* console.log(doc.id, " => ", doc.data()); */
              allProducts.push({id: doc.id, ...doc.data()})
            });
            console.log(allProducts);
            /*   const response = await fetch('https://fakestoreapi.com/products');
              const data = await response.json();
              console.log(data); */

              if (category) {

               const filteredProducts = allProducts.filter(products => products.category === category);

               setProducts(filteredProducts);
              } else {
                setProducts(allProducts);
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