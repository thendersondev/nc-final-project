const { initializeApp, getApp, getApps } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDyvYh_db-MqSPHwd0pCh7WpkUjFNQa3jI",
  authDomain: "nc-project-0322.firebaseapp.com",
  databaseURL: "https://nc-project-0322-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nc-project-0322",
  storageBucket: "nc-project-0322.appspot.com",
  messagingSenderId: "401909170033",
  appId: "1:401909170033:web:b552dea99b483fb4c5c0d0"
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
