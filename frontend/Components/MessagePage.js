import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MessagePage({ props }) {
  const [username, setProfile, setMessage, onPress] = props;

  return (
    <View>
      <Text>{username}</Text>
      <Text>message page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setMessage({
            on: false,
          });
          setProfile({
            on: true,
            username,
          });
        }}
      >
        <Text style={styles.text}>View profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPress("back")}>
        <Text style={styles.text}>Go back to trades</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignText: "center",
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
});
