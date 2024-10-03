// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9SOlDIe09_x1eeCDcRXZo8PXbZjOjWXQ",
  authDomain: "realtor-website-react-9eb4d.firebaseapp.com",
  projectId: "realtor-website-react-9eb4d",
  storageBucket: "realtor-website-react-9eb4d.appspot.com",
  messagingSenderId: "489944405831",
  appId: "1:489944405831:web:42dc5ba13a579d8b91de62"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();