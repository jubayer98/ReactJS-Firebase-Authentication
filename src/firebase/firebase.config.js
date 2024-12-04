// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMc25hxWNja6zhvhEAWfvb0492WYbxuJY",
  authDomain: "b10a09-a8c44.firebaseapp.com",
  projectId: "b10a09-a8c44",
  storageBucket: "b10a09-a8c44.firebasestorage.app",
  messagingSenderId: "713205516798",
  appId: "1:713205516798:web:43cf15976a21b7bfb298af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;