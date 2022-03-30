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
  const readValues = {};
  const querySnapshot = await getDocs(allColl);
  querySnapshot.forEach((doc) => {
    readValues[doc.id] = doc.data();
  });
  return readValues;
}

async function fetchTrade(trade) {
  if (trade.length !== 20) return { error: "Bad user ID" }
  const tradeId = doc(db, "trades", trade);
  const querySnapshot = await getDoc(tradeId);
  if (!querySnapshot.data()) return { error: "No such trade!" }
  return { [tradeId.id]: querySnapshot.data() };
}

async function addTrade(newTrade) {
  const {user, title, location, price, userUID, platform} = newTrade
  if (!title || !user || !location || !price || !userUID || !platform) return { error: "Bad submission" };
  const newDoc = await addDoc(collection(db, "trades"), {
    title: title,
    user: user,
    location: location,
    price: price,
    userUID: userUID,
    platform: platform,
  });
  const newRef = await getDoc(doc(db, "trades", newDoc.id));
  return { [newDoc.id]: newRef.data() };
}

async function changeTrade(id, newTrade) {
  const item = (!newTrade.item ? null : newTrade.item)
  const user = (!newTrade.user ? null : newTrade.user)
  const price = (!newTrade.price ? null : newTrade.price)
  const location = (!newTrade.location ? null : newTrade.location)
  if (!user && !item && !price && !location) return { error: "Bad submission" };
  const tradeId = doc(db, "trades", id);
  const querySnapshot = await getDoc(tradeId);
  const newData = {
    user: user ? user : querySnapshot.data().user,
    item: item ? item : querySnapshot.data().item,
    location: location ? location : querySnapshot.data().location,
    price: price ? price : querySnapshot.data().price,
  };
  await updateDoc(tradeId, newData);
  return { [id]: newData };
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

