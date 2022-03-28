import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function MessagePage({
  navigation,
  route: {
    params: { username },
  },
}) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(null);

  const handleInput = (text) => {
    setCurrentMessage(text);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setMessages((prev) => {
      return [...prev, currentMessage];
    });
    setCurrentMessage("");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{username}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile", { username });
          }}
        >
          <Text style={styles.text}>View profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.messages}>
        {messages.map((message) => {
          return <Text style={styles.sentMessage}>{message}</Text>;
        })}
      </View>
      <View style={styles.sendWrapper}>
        <TextInput
          style={styles.chatbox}
          value={currentMessage}
          onChangeText={(text) => {
            handleInput(text);
          }}
        ></TextInput>
        <TouchableOpacity style={styles.send}>
          <Text
            style={styles.text}
            onPress={(e) => {
              handleSend(e);
            }}
          >
            send
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Trade")}
      >
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sentMessage: {
    textAlign: "right",
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messages: {
    justifyContent: "center",
    alignItems: "center",
  },
  sendWrapper: {
    width: "80%",
    height: 50,
    flex: 1,
    flexDirection: "row",
  },
  form: {
    padding: 20,
  },
  chatbox: {
    width: 260,
    height: 50,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
  },
  messages: {
    margin: 20,
    marginBottom: 0,
    width: "80%",
    height: 450,
    backgroundColor: "lightgrey",
  },
  send: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 5,
    height: 50,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 5,
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
    position: "relative",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 42,
  },
});
