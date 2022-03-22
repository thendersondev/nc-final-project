import { doc, setDoc } from "firebase/firestore"; 
import db from "../firebase.js"
import * as fs from 'fs';

async function getData() {
  fs.readFile('./test.json', 'utf8', (err,files) => {
    const data = JSON.parse(files)
    const testData = data.slice(0,10)
    testData.map((file, index)=>{
      toFirebase(file, index)
    })
  })
}

async function toFirebase(file, index) {
  try {
    const docRef = await setDoc(doc(db, "items/shops/shop2", `sh2-${index}`), {
      item: file
    });
    console.log("Document written with ID: ", `sh2${index}`);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

getData()