// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBmgbv9_EcegPbWuSNpnnZ1GBwR8LTra6E",
  authDomain: "react-auth-4760b.firebaseapp.com",
  databaseURL: "https://react-auth-4760b.firebaseio.com",
  projectId: "react-auth-4760b",
  storageBucket: "react-auth-4760b.appspot.com",
  messagingSenderId: "971220300592",
  appId: "1:971220300592:web:8f1c818b7f9ee051498ef5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
