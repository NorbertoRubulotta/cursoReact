import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const functionUploadProducts = async () => {
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
    })
}

export default functionUploadProducts;