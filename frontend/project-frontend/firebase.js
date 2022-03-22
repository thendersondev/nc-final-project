// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyvYh_db-MqSPHwd0pCh7WpkUjFNQa3jI",
  authDomain: "nc-project-0322.firebaseapp.com",
  databaseURL:
    "https://nc-project-0322-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nc-project-0322",
  storageBucket: "nc-project-0322.appspot.com",
  messagingSenderId: "401909170033",
  appId: "1:401909170033:web:b552dea99b483fb4c5c0d0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
