import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Colocar suas configurações / dados no entre as " " 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};
