// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getDatabase } from r"firebase/database";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDG63DZv9MUMtoxnOW0YSkVuT9MQN2-Sc8",
    authDomain: "safespacehub-830f4.firebaseapp.com",
    projectId: "safespacehub-830f4",
    storageBucket: "safespacehub-830f4.appspot.com",
    messagingSenderId: "712671812709",
    appId: "1:712671812709:web:31dea1865fb3318e107a8c",
    measurementId: "G-0ELNK6K8LK"
  };


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


// export const db = getDatabase(firebase_app);
// export const dbFirestore = getFirestore(firebase_app);
export const auth = getAuth(firebase_app);
// export const storage = getStorage(firebase_app);

export default firebase_app;