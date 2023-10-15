// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0tzc9uWXGDH4Z61GvzNitaTTex5rKP9U",
  authDomain: "app-tracking-d887a.firebaseapp.com",
  projectId: "app-tracking-d887a",
  storageBucket: "app-tracking-d887a.appspot.com",
  messagingSenderId: "159506873445",
  appId: "1:159506873445:web:d687ab146c17d47b4c1a8c",
  measurementId: "G-0Z100PY1S5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = isSupported(getAnalytics(app)); 