import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"
import Swal from 'sweetalert2'

const guardarOrden = (cart, orden) => {

    const batch = writeBatch(db)
    
    const outOfStock = []
    
    cart.forEach( (productoEnCart) => { 
           getDoc(doc(db, 'products', productoEnCart.id)).then(

            async (documentSnapshot) => {

            const product =  {...documentSnapshot.data(), id: documentSnapshot.id};

       
            if (product.stock >= productoEnCart.quantity) {
                batch.update(doc(db, 'products', product.id) ,{
                    stock: product.stock - productoEnCart.quantity
                });
            } else {
                outOfStock.push(product)
            }
            
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), orden).then(({ id }) => {
                   
                    batch.commit().then(() => {
                        Swal.fire({
                            title: "New order generated successfully, id: "  ,
                            text: id,
                            icon: 'success',
                            confirmButtonText: 'Accept'
                          })
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
            
            } else {
                let mensaje = ''
                for (const product of outOfStock) {
                    mensaje += `${product.title}`
                }
                Swal.fire({
                    title: "Productos fuera de stock: "  ,
                    text: mensaje,
                    icon: 'warning',
                    confirmButtonText: 'Accept'
                  })
            }
        }) })
}

export default guardarOrden;