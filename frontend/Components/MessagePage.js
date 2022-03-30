import styles from "../styles/MessagePageStyles";
import { Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  addDoc,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { Appbar, Provider } from "react-native-paper";

export default function MessagePage({
  navigation,
  route: {
    params: { User, userUID },
  },
}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collRef = collection(db, `chats/${auth.currentUser.uid}/${userUID}`);
    const q = query(collRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, `chats/${auth.currentUser.uid}/${userUID}`), {
      _id,
      createdAt,
      text,
      user,
    });

    addDoc(collection(db, `chats/${userUID}/${auth.currentUser.uid}`), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title={User} />
        <Appbar.Action
          icon="account-box"
          onPress={() => {
            navigation.navigate("Profile", { User });
          }}
        />
      </Appbar.Header>
      <View style={styles.messages}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL
              ? auth?.currentUser?.photoURL
              : "https://i.ebayimg.com/images/g/FuMAAOSwZGJcZOr3/s-l300.jpg",
          }}
        />
      </View>
    </Provider>
  );
}
