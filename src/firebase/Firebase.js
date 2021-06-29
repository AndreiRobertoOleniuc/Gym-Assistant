import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-06-tsU1b5OosUCClekFiZkl1uJxnTV4",
    authDomain: "gym-assistant-38760.firebaseapp.com",
    projectId: "gym-assistant-38760",
    storageBucket: "gym-assistant-38760.appspot.com",
    messagingSenderId: "400856230884",
    appId: "1:400856230884:web:657af86ae52a69425335f1",
    measurementId: "G-NQY311CEG5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider,db};