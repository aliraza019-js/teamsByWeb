import {initializeApp} from "firebase/app";
import {browserLocalPersistence, getAuth, setPersistence} from "@firebase/auth";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAUQtH-du-W8We3I1LvN6e0HTOXh-D-OdI",
        authDomain: "teamstage-d05e2.firebaseapp.com",
        projectId: "teamstage-d05e2",
        storageBucket: "teamstage-d05e2.appspot.com",
        messagingSenderId: "633257283147",
        appId: "1:633257283147:web:98c33460c8a25590b387ce",
        measurementId: "G-8S4YW46EE3"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    setPersistence(auth, browserLocalPersistence)

    return {app, auth}
}