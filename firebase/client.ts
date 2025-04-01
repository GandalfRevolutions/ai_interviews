import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTthUpKdybShJSo4w-x9OwHja9tdIsUWA",
  authDomain: "interviews-ecdff.firebaseapp.com",
  projectId: "interviews-ecdff",
  storageBucket: "interviews-ecdff.firebasestorage.app",
  messagingSenderId: "387011092275",
  appId: "1:387011092275:web:e757f19d085743501a6846",
  measurementId: "G-BGWRMPZG8L"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);