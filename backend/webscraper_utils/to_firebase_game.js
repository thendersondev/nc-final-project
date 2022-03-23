import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../firebase.js"
import * as fs from 'fs';

async function getData() {
  fs.readFile('webscraper_utils/../../scraping/scraped-data/gameScrape.json', 'utf8', (err,data) => {
    if (err) console.log(err)
    const files = JSON.parse(data)
    files.map((file, index)=>{
      const ref = ('0000' + index).slice(-5)
      toFirebase(file, ref)
    })
  })
}

async function toFirebase(file, ref) {
  try {
    const docRef = await setDoc(doc(db, "items/shops/game", `sh3-${ref}`), {
      item: file
    });
    console.log("Document written with ID: ", `sh3${ref}`);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

getData()