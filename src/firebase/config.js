// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7KXG6wB3sNcoH8K_UbofLoFr27nifbk",
  authDomain: "ecommerce---domingueziribe.firebaseapp.com",
  projectId: "ecommerce---domingueziribe",
  storageBucket: "ecommerce---domingueziribe.appspot.com",
  messagingSenderId: "113180974415",
  appId: "1:113180974415:web:2fc4a423cf32711eaa793a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);