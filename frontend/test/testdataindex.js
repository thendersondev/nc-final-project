const { initializeApp, getApp, getApps } = require('firebase/app');
const { getFirestore } = require("firebase/firestore");
const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } = require("firebase/auth")

const firebaseConfig = {
  apiKey: "AIzaSyCJdeUIjpYnb5JSr4BAXfbQ5MNyyL_asQU",
  authDomain: "nc-project-0322-testdata.firebaseapp.com",
  projectId: "nc-project-0322-testdata",
  storageBucket: "nc-project-0322-testdata.appspot.com",
  messagingSenderId: "242726816548",
  appId: "1:242726816548:web:05c6313a04f068a586c1b1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const auth = getAuth(app);

module.exports = {
    db,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  };
