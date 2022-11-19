// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0rKoD1Lwczfw0trV5YIXwwqHMnVuhzk4",
  authDomain: "realtor-clone-react-a4441.firebaseapp.com",
  projectId: "realtor-clone-react-a4441",
  storageBucket: "realtor-clone-react-a4441.appspot.com",
  messagingSenderId: "604693493856",
  appId: "1:604693493856:web:4af5719a00a98169c4ab05"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()