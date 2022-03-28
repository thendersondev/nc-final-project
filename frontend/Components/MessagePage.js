import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { auth } from "../firebase";

export default function MessagePage({
  navigation,
  route: {
    params: { username },
  },
}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Oi mate you still got got abes oddessey?",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
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
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            avatar: auth?.currentUser?.photoURL,
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Trade")}
        >
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrap: {
    flexDirection: "row",
    alignSelf: "space-evenly",
  },
  messages: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 20,
    height: 580,
    marginBottom: 0,
    width: "80%",
    backgroundColor: "lightgrey",
  },
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 25,
    width: 120,
    height: 50,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
  header: {
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 42,
  },
});
