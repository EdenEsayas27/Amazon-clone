// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from"firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCayO4noi3sHqaFQqCjvqo5n3v-iEX7REU",
  authDomain: "clone-449c3.firebaseapp.com",
  projectId: "clone-449c3",
  storageBucket: "clone-449c3.appspot.com",
  messagingSenderId: "674782284553",
  appId: "1:674782284553:web:4b044b52ced75455d8e1d8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore();
