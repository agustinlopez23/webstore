// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4iR9ievejO8dzF39QQW0G0O6B0VXtnkg",
  authDomain: "onlinestoreweb.firebaseapp.com",
  projectId: "onlinestoreweb",
  storageBucket: "onlinestoreweb.appspot.com",
  messagingSenderId: "971700772512",
  appId: "1:971700772512:web:e8a415d7d30995e45bf3c5",
  measurementId: "G-K218KEVZTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
