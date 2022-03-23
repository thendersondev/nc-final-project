const { db } = require("../firebase");
const {
  updateDoc,
  doc,
  collection,
  getDocs,
  getDoc,
  addDoc,
  collectionGroup,
  deleteDoc,
} = require("firebase/firestore");

const allColl = collectionGroup(db, "trades");

async function fetchTrades() {
  let count = 1;
  const readValues = {};
  const querySnapshot = await getDocs(allColl);
  querySnapshot.forEach((doc) => {
    readValues[doc.id] = doc.data();
    count++;
  });
  return readValues;
}

async function addTrade(user, item, location, price) {
  const newDoc = await addDoc(collection(db, "trades"), {
    item: item,
    user: user,
    location: location,
    price: price,
  });
  const newRef = await getDoc(doc(db, "trades", newDoc.id));
  return { [newDoc.id]: newRef.data() };
}

async function fetchTrade(trade) {
  const tradeId = doc(db, "trades", trade);
  const querySnapshot = await getDoc(tradeId);
  return { [tradeId.id]: querySnapshot.data() };
}

async function changeTrade(
  trade,
  user = null,
  item = null,
  price = null,
  location = null
) {
  if (!user && !item && !price && !location) return { test: false };
  const tradeId = doc(db, "trades", trade);
  const querySnapshot = await getDoc(tradeId);
  const newData = {
    user: user ? user : querySnapshot.data().user,
    item: item ? item : querySnapshot.data().item,
    location: location ? location : querySnapshot.data().location,
    price: price ? price : querySnapshot.data().price,
  };
  await updateDoc(tradeId, newData);
  return { [trade]: newData };
}

async function removeTrade(trade) {
  const tradeId = doc(db, "trades", trade);
  await deleteDoc(tradeId);
  return { removed: tradeId.id };
}

module.exports = {
  fetchTrades,
  fetchTrade,
  addTrade,
  changeTrade,
  removeTrade,
};

