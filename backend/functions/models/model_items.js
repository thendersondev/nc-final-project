const db = require("../firebase");
const functions = require('firebase-functions');
const { collectionGroup, doc ,collection, getDocs, getDoc } = require("firebase/firestore"); 

const docRef = doc(db, "users", "t1sKcLakK5MncSizlxEv");
const allColl = collectionGroup(db, "items")

async function fetchItemsByShop(shop_id) {
  const collRef = collection(db, `items/shops/shop${shop_id}`);
  const readValues = {}
  const querySnapshot = await getDocs(collRef);
  querySnapshot.forEach((doc) => {
    readValues[doc.id] = doc.data()
  });
  return readValues
}

async function fetchItems() {
  return
}

module.exports = {
  fetchItems,
  fetchItemsByShop,
}