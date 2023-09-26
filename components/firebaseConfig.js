import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGii8dy1wOvEM1luMtrNzl1ZWvVrkqH3E",
    authDomain: "testfire-aa570.firebaseapp.com",
    databaseURL: "https://testfire-aa570-default-rtdb.firebaseio.com",
    projectId: "testfire-aa570",
    storageBucket: "testfire-aa570.appspot.com",
    messagingSenderId: "661109792173",
    appId: "1:661109792173:web:805d1855226aa637349524",
    measurementId: "G-QSQECBK83T"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db }
