const { db } = require("../test/testdataindex");
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
  console.log(user);
  if (user.length !== 28) return { error: "Bad user ID" };
  const userId = doc(db, "users", user);
  const querySnapshot = await getDoc(userId);
  if (!querySnapshot.data()) return { error: "No such user!" };
  return { [userId.id]: querySnapshot.data() };
}

async function addUser(newUser) {
  const { name, user } = newUser;
  if (!name || !user) return { error: "Bad submission" };
  const newDoc = await addDoc(collection(db, "users"), {
    name: name,
    user: user,
  });
  const newRef = await getDoc(doc(db, "users", newDoc.id));
  return { [newDoc.id]: newRef.data() };
}

async function changeUser(id, newUser) {
  const reviews = !newUser.reviews ? null : newUser.reviews;
  if (!reviews) return { error: "Bad submission" };
  const userId = doc(db, "users", id);
  const querySnapshot = await getDoc(userId);
  if (!querySnapshot.data()) return { error: "No such user!" };
  const num = !querySnapshot.data().reviews
    ? null
    : Object.values(querySnapshot.data().reviews).length;
  const newData = {
    username: querySnapshot.data().username,
    reviews: reviews
      ? { ...querySnapshot.data().reviews, [num]: reviews }
      : querySnapshot.data().reviews,
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
