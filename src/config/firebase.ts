// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDKS1e7-6iRPcl9zj24hgN14a8VLcDKXM",
  authDomain: "react-course-e6859.firebaseapp.com",
  projectId: "react-course-e6859",
  storageBucket: "react-course-e6859.appspot.com",
  messagingSenderId: "1045719527675",
  appId: "1:1045719527675:web:02e85b012931e694ccc05e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);