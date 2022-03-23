
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

const docRef = doc(db, "users", "t1sKcLakK5MncSizlxEv");
const collRef = collection(db, "users");
const allColl = collectionGroup(db, "users");

async function fetchUsers() {
  let count = 1;
  const readValues = {};
  const querySnapshot = await getDocs(allColl);
  querySnapshot.forEach((doc) => {
    readValues[doc.id] = doc.data();
    count++;
  });
  return readValues;
}

async function fetchUser(user) {
  const userId = doc(db, "users", user);
  const querySnapshot = await getDoc(userId);
  return { [userId.id]: querySnapshot.data() };
}

async function addUser(name, user) {
  const newDoc = await addDoc(collection(db, "users"), {
    name: name,
    user: user,
  });
  const newRef = await getDoc(doc(db, "users", newDoc.id));
  return { [newDoc.id]: newRef.data() };
}


async function changeUser(id, name = null, user = null) {
  if (!name && !user) return { test: false };
  const userId = doc(db, "users", id);
  const querySnapshot = await getDoc(userId);
  const newData = {
    user: user ? user : querySnapshot.data().user,
    name: name ? name : querySnapshot.data().name,
  };
  await updateDoc(userId, newData);
  return { [id]: newData };
}

async function removeUser(user) {
  const userId = doc(db, "users", user);
  await deleteDoc(userId);
  return { removed: userId.id };

}

module.exports = {
  fetchUsers,
  fetchUser,
  addUser,
  changeUser,

  removeUser,
};

