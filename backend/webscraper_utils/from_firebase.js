import db from "../firebase.js"
import { collection, getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "items/shops/shop2"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  console.log(doc.data())
});