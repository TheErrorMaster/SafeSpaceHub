import { collection, getDocs, doc, query, where } from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig';

export const login = async (username, password) => {
    try {
        const userCollection = collection(db, 'user');
        const getUserQuery = query(userCollection, where('username', '==', username), where('password', '==', password));
        const fetchQuery = await getDocs(getUserQuery);
        console.log('id', fetchQuery?.docs?.[0]?.id);
        return fetchQuery?.size ? true : false;
    } catch(e) {
        console.log('error login', e);
        return false;
    }
};

