import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const functionUploadProducts = async () => {
    console.log("Entra una vez");
    const response = await fetch('/products.json');
    const productsToUpload = await response.json();

    productsToUpload.forEach(async (product) => {
        const docRef = await addDoc(collection(db, "products"), {
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            brand: product.brand,
            stock: product.stock,
            origin: product.origin,
            alcohol: product.alcohol,
            volume: product.volume,
            image: product.image,
        });
        console.log("Document written with ID: ", docRef.id);
    })
}

export default functionUploadProducts;