import React from 'react'
import Routes from './Routes/Routes'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjNNc1Q4T-w5n1JrG0UQsnLtejljQlSPs",
  authDomain: "rythmix-1c0a3.firebaseapp.com",
  projectId: "rythmix-1c0a3",
  storageBucket: "rythmix-1c0a3.appspot.com",
  messagingSenderId: "545903895728",
  appId: "1:545903895728:web:47dfa06ad20b371894c775",
  measurementId: "G-BE7EX934DE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
   <Routes/>
  )
}

export default App
