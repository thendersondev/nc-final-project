const { doc, setDoc } = require("firebase/firestore");
const { db } = require("../firebase.js");
const fs = require("fs");

async function getData(shop, id) {
  fs.readFile(
    `backend/scraping/scraped-data/${shop}Scrape.json`,
    "utf8",
    (err, data) => {
      if (err) console.log(err);
      const files = JSON.parse(data);
      files.map((file, index) => {
        const ref = ("0000" + index).slice(-5);
        toFirebase(file, ref, id, shop);
      });
    }
  );
}

async function toFirebase(file, ref, id, shop) {
  try {
    const docRef = await setDoc(
      doc(db, `items/shops/${shop}`, `sh${id}-${ref}`),
      {
        item: file,
      }
    );
    console.log("Document written with ID: ", `sh${id}-${ref}`);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

getData("game365", 1);
getData("box", 2);
getData("game", 3);
