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

const userColl = collectionGroup(db, "users");

async function fetchUsers() {
  const readValues = {};
  const querySnapshot = await getDocs(userColl);
  querySnapshot.forEach((doc) => {
    readValues[doc.id] = doc.data();
  });
  return readValues;
}

async function fetchUser(user) {
  if (user.length !== 20) return { error: "Bad user ID" }
  const userId = doc(db, "users", user);
  const querySnapshot = await getDoc(userId);
  if (!querySnapshot.data()) return { error: "No such user!" }
  return { [userId.id]: querySnapshot.data() };
}

async function addUser(newUser) {
  const {name, user} = newUser
  if (!name || !user) return { error: "Bad submission" };
  const newDoc = await addDoc(collection(db, "users"), {
    name: name,
    user: user,
  });
  const newRef = await getDoc(doc(db, "users", newDoc.id));
  return { [newDoc.id]: newRef.data() };
}

async function changeUser(id, newUser) {
  const name = (!newUser.name ? null : newUser.name)
  const user = (!newUser.user ? null : newUser.user)
  if (!name && !user) return { error: "Bad submission" };
  const userId = doc(db, "users", id);
  const querySnapshot = await getDoc(userId);
  if (!querySnapshot.data()) return { error: "No such user!" }
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

