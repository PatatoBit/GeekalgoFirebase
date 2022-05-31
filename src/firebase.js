import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4sYlYj7kcJLVk7m9QI4P3NQhjdq50L_g",
  authDomain: "geekalgo-8eae7.firebaseapp.com",
  projectId: "geekalgo-8eae7",
  storageBucket: "geekalgo-8eae7.appspot.com",
  messagingSenderId: "520251509248",
  appId: "1:520251509248:web:12447aafb14e29ac2266e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)