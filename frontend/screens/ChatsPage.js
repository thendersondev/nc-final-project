import { useNavigation } from "@react-navigation/native";
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
import { Appbar, Provider } from "react-native-paper";
import { v4 as uuidv4 } from "uuid";
import { ChatCard } from "../Components/ChatCard";
import { auth, db } from "../firebase";

const ChatsPage = () => {
  const navigation = useNavigation();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockChats = [
    {
      User: "test2",
      userUID: "F1KzoQUobUMbR2c5K0WrejYGJpw1",
    },
    {
      User: "test2",
      userUID: "fX5XTxQ8xiUI1rtZSw5s9mGvV292",
    },
    { User: "test3", userUID: "yvsEiUH7Sdcc29MX3PLpqKuG4Uw1" },
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
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Your chats" />
      </Appbar.Header>
      <View style={styles.mainbox}>
        <FlatList
          data={mockChats}
          renderItem={(item) => ChatCard(item, navigation)}
          keyExtractor={uuidv4}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  Appbar: {
    backgroundColor: "#694fad",
  },
  mainbox: {
    marginTop: "10%",
    flex: 1,
  },
});

export default ChatsPage;
