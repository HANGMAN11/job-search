import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTkwa-S-4ABlhMYLlDrb7VZ4FIAUfVBiM",
  authDomain: "job-search-9808c.firebaseapp.com",
  projectId: "job-search-9808c",
  storageBucket: "job-search-9808c.firebasestorage.app",
  messagingSenderId: "840843597288",
  appId: "1:840843597288:web:e78f0dd1d337800345005d",
  measurementId: "G-M40J7PNKSZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)