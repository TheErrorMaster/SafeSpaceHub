// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getDatabase } from r"firebase/database";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";


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


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


// export const db = getDatabase(firebase_app);
// export const dbFirestore = getFirestore(firebase_app);
export const auth = getAuth(firebase_app);
// export const storage = getStorage(firebase_app);

export default firebase_app;