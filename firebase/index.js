import { db, dbFirestore, auth, storage } from './config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


export const authSignIn = async (email, password) => {
    try {
        const userData = await signInWithEmailAndPassword(auth, email, password);
        return userData?.user ? true : false;
    } catch (e) {
        console.log("e", e);
        return false;
    }
};


export const authSignUp = async (email, password) => {
    try {
        const userData = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
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