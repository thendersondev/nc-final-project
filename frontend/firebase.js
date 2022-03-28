const { initializeApp, getApp, getApps } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require("firebase/auth");

// const firebaseConfig = {
//   apiKey: "AIzaSyDyvYh_db-MqSPHwd0pCh7WpkUjFNQa3jI",
//   authDomain: "nc-project-0322.firebaseapp.com",
//   databaseURL:
//     "https://nc-project-0322-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "nc-project-0322",
//   storageBucket: "nc-project-0322.appspot.com",
//   messagingSenderId: "401909170033",
//   appId: "1:401909170033:web:b552dea99b483fb4c5c0d0",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA9WJaRJh5Ea51xFVPJevsz9-HVLHW02-M",
  authDomain: "firebasics-265cb.firebaseapp.com",
  projectId: "firebasics-265cb",
  storageBucket: "firebasics-265cb.appspot.com",
  messagingSenderId: "1006824343352",
  appId: "1:1006824343352:web:f64cfb1a9b1bc5d73863cd",
  measurementId: "G-7VWFWWDBV8",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

const auth = getAuth(app);

module.exports = {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
