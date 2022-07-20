// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmk-f-WuUsS5G3ov_4B3VSB7I5b0mDvDE",
  authDomain: "kingpremiumdrinks.firebaseapp.com",
  projectId: "kingpremiumdrinks",
  storageBucket: "kingpremiumdrinks.appspot.com",
  messagingSenderId: "91038346514",
  appId: "1:91038346514:web:d5deb50d5eff22d41517cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)