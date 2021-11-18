import firebaseConfig from "./firebaseConfig";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export default firebase;