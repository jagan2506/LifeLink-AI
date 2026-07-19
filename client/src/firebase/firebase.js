import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz0x-fTbMwCwstPGh0ap3MSCAJX5jb7gw",
  authDomain: "lifeai-76674.firebaseapp.com",
  projectId: "lifeai-76674",
  storageBucket: "lifeai-76674.firebasestorage.app",
  messagingSenderId: "1053568759531",
  appId: "1:1053568759531:web:2da98071838a7e762430ae",
  measurementId: "G-1ET9DY5WRF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);