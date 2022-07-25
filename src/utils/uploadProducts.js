import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const functionUploadProducts = async () => {
    console.log("Entra una vez");
    const response = await fetch('/data.json');
    const productsToUpload = await response.json();

    productsToUpload.forEach(async (product) => {
        const docRef = await addDoc(collection(db, "products"), {
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            stock: 20,
        });
        console.log("Document written with ID: ", docRef.id);
    })
}

export default functionUploadProducts;