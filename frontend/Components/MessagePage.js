import styles from "../styles/MessagePageStyles";
import { Text, TouchableOpacity, View } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../firebase";
import {
  doc,
  setDoc,
  collection,
  query,
  addDoc,
  onSnapshot,
  orderBy,
  getDocs,
} from "firebase/firestore";

export default function MessagePage({
  navigation,
  route: {
    params: { username },
  },
}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collRef = collection(db, "chats");
    const q = query(collRef, orderBy("createdAt", "desc"));
    const fetch = async () => {
      const docs = await getDocs(q);
      const readValues = [];
      docs.forEach((doc) => {
        readValues.push({
          id: doc.data().id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        });
      });
      setMessages(readValues);
    };
    return fetch();
  }, []);

  useLayoutEffect(() => {
    const collRef = collection(db, "chats");
    const q = query(collRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot);
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.data().id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username}</Text>
      </View>

      <View style={styles.messages}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          user={{
            // _id: auth?.currentUser?.email,
            // name: auth?.currentUser?.displayName,
            // avatar: auth?.currentUser?.photoURL,
            _id: "hi",
            name: "tom",
            avatar: "biscuits",
          }}
        />
      </View>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { username });
          }}
        >
          <Text style={styles.text}>View profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
