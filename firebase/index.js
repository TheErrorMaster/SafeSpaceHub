import { db, auth } from './config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { doc, getDocs, setDoc, collection, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";


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
        if (userData?.user) {
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

export const getAppointments = async () => {
    try {
        const ref = collection(db, "appointments");
        const fetchQuery = await getDocs(ref);
        const data = await fetchQuery?.docs?.map(x => x?.data())
        return data;
    } catch (e) {
        console.log('readChat', e);
        return [{}];
    }

}

export const setAppointment = async (doctor, user, loc, timeDate) => {
    try {
        let docData = {
            doctorName: doctor,
            location: loc,
            username: user,
            dateTime: timeDate,
        }
        const ref = doc(collection(db, "appointments"));
        docData.id = ref?.id || '';
        const sendData = await setDoc(ref,  docData)
        return sendData || ""
    } catch (e) {
        console.log('e', e);
        return ""
    }
}

export const messageDoctor = async (doctor, user, appointment) => {
    try {
        const docData = {
            doctorName: doctor,
            username: user,
            dateTime: new Date().toLocaleString(),
            messages: [{ role: 'system', content: 'Say hi to your doctor' }]
        }
        const sendData = await setDoc(doc(db, "message", appointment), docData)
        return sendData || ""
    } catch (e) {
        console.log('e', e);
        return ""
    }
}


export const updateMessage = async (message, appointment) => {
    try {
        const ref = await doc(db, "message", appointment);
        const update = await updateDoc(ref, {
            messages: arrayUnion(message)
        })
        return update || ""
    } catch (e) {
        console.log('e', e);
        return ""
    }
}


export const listMessage = async (appointment, callback) => {
    try {
        const listAllMessages = onSnapshot(doc(db, "message", appointment), (doc) => {
            const messages = doc?.data()?.messages;
            callback(messages);
        })
        // return update || ""
    } catch (e) {
        console.log('e', e);
        return ""
    }
}



