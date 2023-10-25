import { db, dbFirestore, auth, storage } from './config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { QuerySnapshot, collection, getDocs, queryStore, whereStore } from 'firebase/firestore';



export const authSignIn = async (email, password) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, email, password);
        return userData?.user ? true : false;
    } catch (e) {
        console.log("e", e);
        return false;
    }
};


export const authSignUp = async (email, password, name) => {
    try {
        const userData = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        if(userData?.user) {
            const updateProf = await updateProfile(auth.currentUser, { displayName: name })
            return true;
        }
        return userData?.user ? true : false;
    } catch (e) {
        console.log("e", e);
        return false;
    }
};


export const authUser = () => {
    try {
        const user = auth?.currentUser;
        return user || ""
    } catch (e) {
        console.log('e', e);
        return ""
    }
}

// export const getDoctors = async () => {
//     try {
//         const chatCollection = await collection(firestore, "doctors");
//         // const getAllChatQuery = queryStore(chatCollection);
//         const fetchQuery = await getDocs(chatCollection);
//         const data = fetchQuery?.docs?.map(x => x?.data())
//         return data;
//         } catch (e) {
//         console.log('readChat', e);
//         return [{}];
//         }
        
// }