import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { v4 as uuidv4 } from "uuid";
import { ChatCard } from "../Components/ChatCard";
import { auth, db } from "../firebase";

const ChatsPage = () => {
  const [chats, setChats] = useState([]);
  const mockChats = [
    {
      user: "test2",
      uid: "F1KzoQUobUMbR2c5K0WrejYGJpw1",
    },
    {
      user: "test2",
      uid: "fX5XTxQ8xiUI1rtZSw5s9mGvV292",
    },
    { user: "test3", uid: "yvsEiUH7Sdcc29MX3PLpqKuG4Uw1" },
  ];
  useEffect(() => {
    // const collRef = doc(db, "chats", auth.currentUser.uid);
    // getDoc(collRef).then((document) => {
    //   console.log(document.exists()); // false
    // });
    // const currentChats = collection(db, "chats");
    // currentChats.listCollections().then((collections) => {
    //   collections.forEach((collection) => {
    //     console.log("Found subcollection with id:", collection.id);
    //   });
    // });
  }, []);

  return (
    <View style={styles.mainbox}>
      <FlatList
        data={mockChats}
        renderItem={(item) => {
          <ChatCard item={item} />;
        }}
        keyExtractor={uuidv4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainbox: {
    // textAlign: "center",
    // margin: 0,
    // flex: 1,
    // justifyContent: "space-between",
  },
});

export default ChatsPage;
