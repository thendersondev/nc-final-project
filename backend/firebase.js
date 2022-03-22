import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDyvYh_db-MqSPHwd0pCh7WpkUjFNQa3jI",
    authDomain: "nc-project-0322.firebaseapp.com",
    projectId: "nc-project-0322",
    storageBucket: "nc-project-0322.appspot.com",
    messagingSenderId: "401909170033",
    appId: "1:401909170033:web:b552dea99b483fb4c5c0d0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
