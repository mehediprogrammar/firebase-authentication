// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzSHRV5qC8GtoHJvDeITzXdxqUSP9E-C4",
  authDomain: "fir-authentication-4bee7.firebaseapp.com",
  projectId: "fir-authentication-4bee7",
  storageBucket: "fir-authentication-4bee7.appspot.com",
  messagingSenderId: "953997755273",
  appId: "1:953997755273:web:817b4b4b603b8c76019758"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)