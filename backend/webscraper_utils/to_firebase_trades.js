import { collection, addDoc } from "firebase/firestore"; 
import db from "../firebase.js"


  try {
    const docRef = await addDoc(collection(db, "trades"), {
      user: 'user',
      item: 'item',
      price: 'price',
      location: 'location',
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }